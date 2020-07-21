const functions = require("firebase-functions");
const admin = require("firebase-admin");
const swearjar = require('swearjar')
const {Logging} = require('@google-cloud/logging');


const logging = new Logging('trash-talkers');


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
// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();
// Creates a client from a Google service account key.
// const storage = new Storage({keyFilename: "key.json"});

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const bucketName = 'bucket-name';

// async function createBucket() {
//   // Creates the new bucket
//   const bucketName = "APICall"
//   await storage.createBucket(bucketName);
//   console.log(`Bucket ${bucketName} created.`);
// }

// createBucket().catch(console.error);

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

  exports.sanitizePostedContent = functions.firestore
  .document("posts/{postId}")
  .onWrite(async (change) => {
    if (!change.after.exists) return; // if the change resulted in a deletion, exit the code
    const { content, sanitized } = change.after.data();
    if (content && !sanitized) {
      return change.after.ref.update({
        content: swearjar.censor(content),
        sanitized: true,
      });
    }
    return null; // if there was no content
  });

  exports.sanitizeCommentedContent = functions.firestore
  .document("posts/{postId}/comment/{commentId}")
  .onWrite(async (change) => {
    if (!change.after.exists) return; // if the change resulted in a deletion, exit the code
    const { content, sanitized } = change.after.data();
    if (content && !sanitized) {
      return change.after.ref.update({
        content: swearjar.censor(content),
        sanitized: true,
      });
    }
    return null; // if there was no content
  });

exports.incrementCommentCount = functions.firestore
  .document("posts/{postId}/comment/{commentId}")
  .onCreate(async (snapshot, context) => {
    console.log("Context: ", context)
    const  postId  = context.params;
    console.log("postId: ", postId)
    const postRef = firestore.doc(`posts/${postId}`);
    console.log("postRef :", postRef)
    const snap = await postRef.get("comments");
    console.log("snap :", snap)
    const comment = await snap.get("comments");
    console.log("comment :", comment)
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

  