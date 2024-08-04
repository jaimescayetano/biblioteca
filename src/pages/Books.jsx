import { getAuth, signOut } from "firebase/auth";

const Books = () => {
  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <div>
      <button className="" onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Books
