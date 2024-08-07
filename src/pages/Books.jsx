import { getAuth, signOut } from "firebase/auth";
import { collection, getDocs, query, orderBy, startAt, endAt } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { Rating } from 'react-simple-star-rating'
import CardBook from "../components/CardBook";
import Loading from "../components/Loading";
import LandbotChat from '../components/LandbotChat';
import { IconRotateClockwise } from '@tabler/icons-react';

const getCollection = async (setter, collectionName) => {
  const registers = [];
  const registersRef = collection(db, collectionName);
  const querySnapshot = await getDocs(registersRef);
  querySnapshot.forEach((doc) => {
    registers.push(doc.data());
  });
  setter(registers);
}

const getBooks = async (setBooks, loading, filters) => {
  let books = [];
  const booksRef = collection(db, 'books');
  const { keyword, gender, author, rating } = filters;
  const querySnapshot = await getDocs(booksRef);
  querySnapshot.forEach((doc) => {
    books.push(doc.data());
  });

  books = books.filter((book) => {
    if (
      (keyword && !book.title.toLowerCase().includes(keyword.toLowerCase())) ||
      (parseInt(gender) !== 0 && !book.categories.includes(parseInt(gender))) ||
      (parseInt(author) !== 0 && !book.categories.includes(parseInt(author))) ||
      (rating != 0 && rating !== book.rating)
    ) {
      return false;
    }
    return true;
  });
  setBooks(books);
  loading(false);
}

const Books = () => {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    keyword: '',
    gender: 0,
    author: 0,
    rating: 0
  });

  // Add filter options
  if (categories.length <= 0) {
    getCollection(setCategories, 'categories');
  }

  if (authors.length <= 0) {
    getCollection(setAuthors, 'authors');
  }

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (e) {
      console.error(e.message);
    }
  }

  const handleRating = (rate) => {
    setFilters({ ...filters, rating: rate });
  }

  const handleReset = () => {
    setFilters({
      keyword: '',
      gender: 0,
      author: 0,
      rating: 0
    });
  }

  useEffect(() => {
    setLoading(true);
    getBooks(setBooks, setLoading, filters);
  }, [filters]);

  return (
    <div className="w-[96%] m-auto py-2">
      <div className="my-2 py-5 px-6 rounded-xl bg-white shadow-md sm:my-6">
        <h2 className="text-4xl font-bold">Catalogo de libros</h2>
        <p className="text-[#676868] mt-4 mb-6 text-sm">
          Bienvenido a nuestro catálogo de libros. Aquí encontrarás una amplia variedad de títulos que abarcan diferentes géneros y autores. Explora nuestra colección para descubrir nuevas lecturas y encontrar tus próximos libros favoritos. Utiliza los filtros y la barra de búsqueda para encontrar libros específicos o simplemente navega por las diferentes categorías. ¡Disfruta de tu viaje literario!
        </p>
        <form className='flex justify-between gap-2 flex-wrap items-center'>
          <div className='flex flex-col w-full mb-3 lg:w-[20%] sm:w-[48%]'>
            <label className='py-2' htmlFor="keyword">Buscar</label>
            <input value={filters.keyword} onChange={(e) => setFilters({ ...filters, keyword: e.target.value })} className='bg-[#F3F3F2] py-2 px-3 rounded-md' id="keyword" type="text" name="keyword" />
          </div>
          <div className='flex flex-col w-[48%] mb-3 lg:w-[20%]'>
            <label className='py-2' htmlFor="gender">Género</label>
            <select value={filters.gender} onChange={(e) => setFilters({ ...filters, gender: e.target.value })} name="gender" id="gender" className='bg-[#F3F3F2] py-2 px-3 rounded-md'>
              <option value="0">Todos</option>
              {categories.map((category) => {
                return <option key={category.id} value={category.id}>{category.title}</option>
              })}
            </select>
          </div>
          <div className='flex flex-col w-[48%] mb-3 lg:w-[20%]'>
            <label className='py-2' htmlFor="author">Autores</label>
            <select value={filters.author} onChange={(e) => setFilters({ ...filters, author: e.target.value })} name="author" id="author" className='bg-[#F3F3F2] py-2 px-3 rounded-md'>
              <option value="0">Todos</option>
              {authors.map((author) => {
                return <option key={author.id} value={author.id}>{`${author.firstname} ${author.lastname}`}</option>
              })}
            </select>
          </div>
          <div className='flex flex-col w-[80%] mb-3 lg:w-[20%] sm:w-[48%]'>
            <label className='py-2' htmlFor="rating">Rating</label>
            <Rating onClick={handleRating} SVGclassName={'inline-block'} size={40} />
          </div>
          <div className='flex flex-col w-[10%] mb-3 sm:w-[5%]'>
          <button onClick={handleReset} className='flex bg-zinc-950 text-white rounded-md w-10 items-center justify-center h-10' type="button">
              <IconRotateClockwise stroke={2} />
            </button>
          </div>
        </form>
      </div>
      {loading ? <Loading /> : (
        /*<div className="grid xl:grid-cols-7 gap-10 justify-center justify-items-center">*/
        <div className="flex gap-2 flex-wrap items-center justify-between">
          {books.map((book, index) => (
            <CardBook key={index} title={book.title} poster={book.poster} rating={book.rating} />
          ))}
        </div>
      )}
      <button className="mt-4 bg-zinc-950 text-white py-2 px-4 rounded-md" onClick={handleLogout}>Log out</button>
      <LandbotChat />
    </div>
  )
}

export default Books;
