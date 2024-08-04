import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../services/firebase/firebaseConfig";
import Button from "../Button";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigate('/auth/login');
    } catch (e) {
      setError(e.message)
    }
  };

  return (
    <>
      <h3 className="text-[#6A6465] font-bold text-2xl mb-7">Sign In</h3>
      <form onSubmit={handleSubmit} className="flex flex-col w-4/5 animate-slide-out-bottom">
        <label className="text-[#6F7482]" htmlFor="email">Correo electrónico:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="py-2 px-3 rounded-md bg-[#F3F3F2] mb-6 mt-1"
        />
        <label className="text-[#6F7482]" htmlFor="password">Contraseña:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-2 px-3 rounded-md bg-[#F3F3F2] mb-4 mt-1"
        />
        <span className="text-red-500 text-sm text-center">{error}</span>
        <div className="flex items-center justify-center gap-3 my-6">
          <Button type={"submit"}>Registrar</Button>
        </div>
      </form>
      <span className="text-[#6A6465] my-3 text-sm">¿Ya tienes una cuenta? 
        <Link to="/auth/login" className="font-bold">Click aquí</Link>
      </span>
    </>
  )
}

export default LoginForm
