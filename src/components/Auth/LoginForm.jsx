import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from "../../services/firebase/firebaseConfig";
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import Button from "../Button";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginForm = () => {
const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigate('/');
    } catch (e) {
      setError(e.message)
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      navigate('/');
    } catch (e) {
      setError(e.message)
    }
  };

  return (
    <>
      <h3 className="text-label-color font-bold text-2xl mb-7">Login</h3>
      <form onSubmit={handleSubmit} className="flex flex-col w-4/5 animate-slide-out-bottom">
        <label className="text-label-color" htmlFor="email">Correo electrónico:</label>
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
        <label className="text-label-color" htmlFor="password">Contraseña:</label>
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
          <Button type={"submit"} fill={false}>Iniciar</Button>
          <Button type={"button"} handleClick={handleGoogleLogin} fill={true} icon={<IconBrandGoogleFilled color="white" />}>Google</Button>
        </div>
      </form>
      <span className="text-primary-color my-3 text-sm">¿No tienes una cuenta?
        <Link to="/auth/register" className="font-bold"> Click aquí</Link>
      </span>
    </>
  )
}

export default LoginForm
