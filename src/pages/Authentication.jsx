import LoginForm from "../components/Auth/LoginForm"
import { IconBook } from '@tabler/icons-react';

const Authentication = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex bg-white w-full items-center justify-center flex-col lg:w-[400px]">
        <IconBook size={50} stroke={1} />
        <h2 className="font-bold text-3xl">RINCÓN LITERARIO</h2>
        <LoginForm />
      </div>
      <div className="w-auth-container hidden lg:block">
        <img
          src="https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg"
          alt="login-bg"
          className="object-cover w-full h-full" />
      </div>
    </div>
  )
}

export default Authentication
