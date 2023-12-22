import { Fragment } from "react";
import  { GoogleAuthProvider,getAuth, signInWithPopup } from 'firebase/auth'
import { app } from "../firebase";
import { useDispatch } from 'react-redux'
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";


export default function OAuth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async() =>{
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth,provider)

            const res = await fetch('/api/auth/google',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL,
                })
            })
            const data = await res.json()
            dispatch(signInSuccess(data))
            navigate('/')

        } catch (error) {
            console.log('could not connect with google',error);
        }
    }
  return (
    <Fragment>
    <button onClick={handleGoogleClick} type="button" className="bg-red-400 text-white font-semibold border-2 mt-3 px-4 w-4/5 rounded-lg py-3 shadow-sm hover:opacity-95">CONTINUE WITH GOOGLE</button>

    </Fragment>
  )
}
