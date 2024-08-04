/*import { dbFirestore } from '../services/firebase/firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(dbFirestore, 'categorias'));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      console.log(items)
      setData(items);
    };

    fetchData();
  }, []);

  return (
    <div>

    </div>
  )
*/

export default Category
