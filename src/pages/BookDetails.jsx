import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log(`Fetching book with ID: ${id}`);
        const querySnapshot = await getDocs(collection(db, "libros"));
        
        let foundBook = null;

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.id === Number(id)) {
            foundBook = { id: doc.id, ...data };
          }
        });

        if (foundBook) {
          console.log('Document data:', foundBook);
          setBook(foundBook);
        } else {
          console.error("No se encontró el documento");
          setError("No se encontró el documento");
        }
      } catch (error) {
        console.error("Error al obtener el libro: ", error);
        setError("Error al obtener los datos del libro");
      }
    };

    fetchBooks();
  }, [id]);

  if (error) return <div>Error: {error}</div>;

  if (!book) return <div>Cargando detalles del libro...</div>;

  return (
    <div className="relative max-w-full mx-auto">
      {/* Cover Photo */}
      <img
        src={book.banner}
        alt={book.title}
        className="w-full h-80 object-cover"
      />

      {/* Poster and Book Information */}
      <div className="relative flex justify-center items-start -mt-20">
        {/* Poster */}
        <img
          src={book.poster}
          alt={book.title}
          className="w-36 h-52 object-cover rounded-lg border-4 border-white shadow-lg"
        />
        
        {/* Book Information */}
        <div className="ml-8 mt-24 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold max-w-5xl mb-2">{book.title}</h1>
          <p className="text-gray-700 mb-4 min-w-5xl max-w-5xl ">{book.description}</p>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 justify-left">
              {book.categories.map((category, index) => (
                <button
                  key={index}
                  className="bg-[#FF9D9D] text-[#FFFFFF] py-2 px-8 rounded-2xl font-bold text-sm border border-[#FF9D9D]"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-2">Autores:</h2>
            <ul className="list-disc list-inside text-gray-700">
              {book.authors.map((author, index) => (
                <li key={index}>{author}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;