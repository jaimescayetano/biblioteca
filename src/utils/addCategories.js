import { db } from "../services/firebase/firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';

const collectionName = 'categories';

const categories = [
  {
    "id": 1,
    "title": "Ficción"
  },
  {
    "id": 2,
    "title": "Terror"
  },
  {
    "id": 3,
    "title": "Tecnología"
  },
  {
    "id": 4,
    "title": "Romance"
  },
  {
    "id": 5,
    "title": "Ciencia ficción"
  }
];

const addCategories = async (category) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), category);
    console.log('Save: ', docRef.id);
  } catch (e) {
    console.error('Error: ', e);
  }
};

export { categories, addCategories };
