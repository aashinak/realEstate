import { useState } from "react"
import { Link } from "react-router-dom"
export default function SignUp() {
  const [formData,setFormData] = useState({})
  const handleChange = (e) =>{
      setFormData({
        ...formData,
        [e.target.id]:e.target.value,
      })
  }
  const handleSubmit= async (e)=>{
    e.preventDefault()

    const res= await fetch('/api/auth/signup',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json();
    console.log(data);
  }
  console.log(formData);
  return (
    <div className="w-full h-[90vh]  flex justify-center">
      <div className="rounded-3xl sm:w-2/5 m-auto   text-center sm:border h-[83.33%] sm:border-primary sm:shadow-lg p-10">
        <h1 className="text-primary text-3xl text-center  font-bold ">Sign Up</h1>
        <form className="" action="" onSubmit={handleSubmit}>
          <input onChange={handleChange}  className="border-2 mt-11 px-4 w-4/5 rounded-lg py-3 shadow-sm" type="text" name="" id="username" placeholder="Username" required/>
          <input onChange={handleChange} className="border-2 mt-3 px-4 w-4/5 rounded-lg py-3 shadow-sm" type="email" name="" id="email" placeholder="Email" required/>
          <input onChange={handleChange} className="border-2 mt-3 px-4 w-4/5 rounded-lg py-3 shadow-sm" type="password" name="" id="password" placeholder="Password" required/>
          <button className="bg-primary text-white font-semibold border-2 mt-3 px-4 w-4/5 rounded-lg py-3 shadow-sm">SIGN UP</button>
          
          
        </form>
        <button className="bg-red-400 text-white font-semibold border-2 mt-3 px-4 w-4/5 rounded-lg py-3 shadow-sm">CONTINUE WITH GOOGLE</button>

        <div className="w-4/5 mx-auto text-left flex items-center mt-3 gap-3">
          <p>Have an account?</p>
          <Link to={'/sign-in'}>
          <p className="text-blue-500">Sign in</p>
          </Link>
          </div>
      </div>
    </div>
  )
}
