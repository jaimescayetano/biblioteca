import { getAuth, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { Rating } from 'react-simple-star-rating'
import CardBook from "../components/CardBook";
import Loading from "../components/Loading";
import LandbotChat from '../components/LandbotChat';

const getBooks = async (setBooks, loading) => {
  const books = [];
  const querySnapshot = await getDocs(collection(db, "libros"));
  querySnapshot.forEach((doc) => {
    books.push(doc.data());
  });
  console.log(books);
  setBooks(books);
  loading(false);
}

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    keyword: '',
    gender: '',
    author: '',
    rating: 0
  });

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

  useEffect(() => {
    setLoading(true);
    getBooks(setBooks, setLoading);
  }, [filters]);

  return (
    <div className="w-[90%] m-auto py-4">
      <h2 className="text-4xl font-semibold">Catalogo de libros</h2>
      <div className="my-6 py-4 px-6 rounded-xl bg-white">
        <form className='flex justify-between gap-2 flex-wrap'>
          <div className='flex flex-col w-[20%] mb-3'>
            <label className='py-2' htmlFor="keyword">Buscar</label>
            <input value={filters.keyword} onChange={(e) => setFilters({ ...filters, keyword: e.target.value })} className='bg-[#F3F3F2] py-2 px-3 rounded-md' id="keyword" type="text" name="keyword" />
          </div>
          <div className='flex flex-col w-[20%] mb-3'>
            <label className='py-2' htmlFor="gender">Género</label>
            <select value={filters.gender} onChange={(e) => setFilters({ ...filters, gender: e.target.value })} name="gender" id="gender" className='bg-[#F3F3F2] py-2 px-3 rounded-md'>
              <option value="0">Todos</option>
              <option value="1">Test 1</option>
            </select>
          </div>
          <div className='flex flex-col w-[20%] mb-3'>
            <label className='py-2' htmlFor="author">Autores</label>
            <select value={filters.author} onChange={(e) => setFilters({ ...filters, author: e.target.value })} name="author" id="author" className='bg-[#F3F3F2] py-2 px-3 rounded-md'>
              <option value="0">Todos</option>
              <option value="1">Test 1</option>
            </select>
          </div>
          <div className='flex flex-col w-[20%] mb-3'>
            <label className='py-2' htmlFor="rating">Rating</label>
            <Rating onClick={handleRating} SVGclassName={'inline-block'} size={40} />
          </div>
        </form>
      </div>
      {loading ? <Loading /> : (
        <div className="grid xl:grid-cols-7 gap-10 justify-center justify-items-center">
          {books.map(book => (
            <CardBook key={book.id} title={book.title} poster={book.poster} rating={book.rating} />
          ))}
        </div>
      )}
      <button className="mt-4 bg-zinc-950 text-white py-2 px-4 rounded-md" onClick={handleLogout}>Log out</button>
      <LandbotChat />
    </div>
  )
}

export default Books;
