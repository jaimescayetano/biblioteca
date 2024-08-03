import { useForm } from "../../hooks/useForm"
import { singInWithGoogle } from "../../services/firebase/auth/service"
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import Button from "../Button";

const LoginForm = () => {
  const { email, password, handleChange, form } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <h3 className="text-[#6A6465] font-bold text-2xl mb-7">Login</h3>
      <form onSubmit={handleSubmit} className="flex flex-col w-4/5">
        <label className="text-[#6F7482]" htmlFor="email">Correo electrónico:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          onChange={handleChange}
          value={email}
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
          onChange={handleChange}
          value={password}
          className="py-2 px-3 rounded-md bg-[#F3F3F2] mb-4 mt-1"
        />
        <div className="flex items-center justify-center gap-3 my-6">
          <Button type={"submit"}>Iniciar</Button>
          <Button type={"button"} handleClick={singInWithGoogle} fill={true} icon={<IconBrandGoogleFilled color="white" />}>Google</Button>
        </div>
      </form>
    </>
  )
}

export default LoginForm
