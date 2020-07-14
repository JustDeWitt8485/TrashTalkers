export const collectsIdsAndDocs = doc => {
    return {id: doc.id, ...doc.data()};
};