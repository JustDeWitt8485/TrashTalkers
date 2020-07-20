const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getAllPosts = functions.https.onRequest(async (req, res) => {
  const snapshot = await firestore.collection("posts").get();
  const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.json({ posts });
});

exports.sanitizeContent = functions.firestore
  .document("posts/{postId}")
  .onWrite(async (change) => {
    if (!change.after.exists) return; // if the change resulted in a deletion, exit the code
    const { content, sanitized } = change.after.data();
    if (content && !sanitized) {
      return change.after.ref.update({
        content: content.replace(/CoffeeScript/g, "*******"),
        sanitized: true,
      });
    }
    return null; // if there was no content
  });

exports.incrementCommentCount = functions.firestore
  .document("posts/{postId}/comment/{commentId}")
  .onCreate(async (snapshot, context) => {
    const { postId } = context.params;
    const postRef = firestore.doc(`posts/${postId}`);
    const snap = await postRef.get("comments");
    const comment = await snap.get("comments");
    return postRef.update({ comments: comment + 1 });
  });

exports.decrementCommentCount = functions.firestore
  .document("posts/{postId}/comment/{commentId}")
  .onDelete(async (snapshot, context) => {
    const deletedValue = snapshot.data()
    const { postId } = context.params;
    const postRef = firestore.doc(`posts/${postId}`);
    const snap = await postRef.get("comments");
    const comments = snap.get("comments");
    return postRef.update({ comments: comments - 1 });
  });

exports.updateUserInformation = functions.firestore
  .document("users/{userId}")
  .onUpdate(async (snapshot, context) => {
    const { displayName } = snapshot.data();

    const postsRef = firestore
      .collection("posts")
      .where("user.uid", "==", snapshot.id);

    return postsRef.get((postSnaps) => {
      postSnaps.forEach((doc) => {
        doc.ref.update({ "user.displayName": displayName });
      });
    });
  });
