import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice'
import OAuth from "../components/OAuth"

export default function SignIn() {
  const [formData,setFormData] = useState({})
  // const [error,setError] = useState(null)
  // const [loading,setLoading] = useState(false)
  const {loading,error}= useSelector((state)=>state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) =>{
      setFormData({
        ...formData,
        [e.target.id]:e.target.value,
      })
  }
  const handleSubmit= async (e)=>{
    e.preventDefault()
    try {
      // setLoading(true)
      dispatch(signInStart());

    const res= await fetch('/api/auth/signin',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json();
    console.log(data);
    if(data.success === false){
      // setLoading(false)
      // setError(data.message)
      dispatch(signInFailure(data.message))
      return
    }
    // setLoading(false)
    //   setError(null)
    dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      // setLoading(false)
      // setError(error.message)
      dispatch(signInFailure(error.message))
    }

    
  }
  
  return (
    <div className="w-full h-[90vh]  flex justify-center">
      <div className="rounded-3xl sm:w-2/5 m-auto   text-center sm:border h-[83.33%] sm:border-primary sm:shadow-lg p-10">
        <h1 className="text-primary text-3xl text-center  font-bold ">Sign In</h1>
        <form className="" action="" onSubmit={handleSubmit}>
          {/* <input onChange={handleChange}  className="border-2 mt-11 px-4 w-4/5 rounded-lg py-3 shadow-sm" type="text" name="" id="username" placeholder="Username"  /> */}
          <input onChange={handleChange} className="border-2 mt-14 px-4 w-4/5 rounded-lg py-3 shadow-sm" type="email" name="" id="email" placeholder="Email" />
          <input onChange={handleChange} className="border-2 mt-3 px-4 w-4/5 rounded-lg py-3 shadow-sm" type="password" name="" id="password" placeholder="Password" />
          <button disabled={loading} className="bg-blue-600 text-white font-semibold border-2 mt-3 px-4 w-4/5 rounded-lg py-3 shadow-sm disabled:bg-slate-500">{loading ? 'Loading...' : 'SIGN IN'}</button>
          
          
        </form>
        <OAuth/>

        <div className="w-4/5 mx-auto text-left  items-center mt-3 gap-3">
          <div className="flex">
            <p>Dont have an account?</p>
            <Link to={'/sign-up'}>
            <p className="text-blue-500 ml-2">Sign up</p>
            </Link>
          </div>
          
           {error && <p className="text-red-700 mt-1">{error}</p>}

          </div>
      </div>
    </div>
  )
}
