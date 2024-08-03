import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FirebaseAuth } from '../firebaseConfig'

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    console.log(result)
    const { displayName, email, photoURL, uid } = result.user
    return uid
  } catch (e) {
    console.log(error)
  }
}
