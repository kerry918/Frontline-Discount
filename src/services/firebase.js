import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9fy_9etVvWBD42vG2C2Rs0JJrAkjc-30",
  authDomain: "frontline-deals.firebaseapp.com",
  projectId: "frontline-deals",
  storageBucket: "frontline-deals.appspot.com",
  messagingSenderId: "675416482742",
  appId: "1:675416482742:web:29102e5b7b7caa053f5717",
  measurementId: "G-01SJ3YRHQK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Database
export const db = firebase.firestore();

export const getStores = async (prov, category, byProv, byCategory) => {
  // filter by province
  if (byProv === true && byCategory === false) {
    try {
      const storesByName = await db
        .collection("Business")
        .where("Prov", "array-contains", prov)
        .orderBy("Name")
        .get()
        .then((snapshot) => {
          const businesses = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            businesses.push(data);
          });
        });

      return storesByName;
    } catch (error) {
      console.error(error);
    }
    return;
  }

  // filter by category
  else if (byProv === false && byCategory === true) {
    try {
      const storesByName = await db
        .collection(`Business`)
        .where("Category", "==", category)
        .orderBy("Name")
        .get()

        .then((snapshot) => snapshot.docs.map((x) => x.data()));

      return storesByName;
    } catch (error) {
      console.error(error);
    }
    return;
  }
  // filter by both
  else if (byProv === true && byCategory === true) {
    try {
      const storesByName = await db
        .collection(`Business`)
        .where("Prov", "array-contains", prov)
        .where("category", "==", category)
        .orderBy("Name")
        .get()

        .then((snapshot) => snapshot.docs.map((x) => x.data()));

      return storesByName;
    } catch (error) {
      console.error(error);
    }
    return;
  }

  // no filter, return all deals
  else {
    try {
      const storesByName = await db
        .collection(`Business`)
        .orderBy("Name")
        .get()

        .then((snapshot) => snapshot.docs.map((x) => x.data()));

      return storesByName;
    } catch (error) {
      console.error(error);
    }
    return;
  }
};

export const getQueryList = async () => {
  try {
    const docRef = db.doc(`Query/Province`);
    const doc = await docRef.get();
    const queryList = doc.data().Options; // This is wrong lmfao idk whyyyy
    return queryList;
  } catch (error) {
    console.error(error);
  }
  return;
};

export default firebase;
