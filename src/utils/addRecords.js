import { db } from "../services/firebase/firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';
import categories from "./collections/categories";
import authors from "./collections/authors";
import books from "./collections/books";

const addRecords = (collectionName) => {
  let data = [];
  if (collectionName === 'categories') {
    data = categories;
  }
  if (collectionName === 'authors') {
    data = authors;
  }
  if (collectionName === 'books') {
    data = books;
  }
  data.map(async (record) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), record);
      console.log('Save: ', docRef.id);
    } catch (e) {
      console.error('Error: ', e);
    }
  });
}

export default addRecords;