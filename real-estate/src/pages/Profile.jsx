import {useSelector} from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector(state => state.user)

  return (
    <div className="w-full h-[90vh]  flex justify-center">
      <div className="rounded-3xl sm:w-2/5 m-   text-center  h-auto p-10">
        <h1 className="text-primary text-3xl text-center  font-bold ">Profile</h1>
        <form className="" action="" >
        
          <img className=' rounded-full mx-auto mt-6 object-cover cursor-pointer' src={currentUser.avatar} alt="profile" />
          <input   className="border-2 mt-3 px-4 w-4/5 rounded-lg py-3 shadow-sm" type="text" name="" id="username" placeholder='Username'  />
          <input  className="border-2 mt-3 px-4 w-4/5 rounded-lg py-3 shadow-sm" type="text" name="" id="email" placeholder="Email"  />
          <input  className="border-2 mt-3 px-4 w-4/5 rounded-lg py-3 shadow-sm" type="password" name="" id="password" placeholder="Password" />
          <button  className="bg-slate-500 text-white font-semibold border-2 mt-3 px-4 w-4/5 rounded-lg py-3 shadow-sm disabled:bg-slate-500 hover:opacity-95">UPDATE</button>
          
          
        </form>
        <button  className="bg-green-500 text-white font-semibold border-2 mt-3 px-4 w-4/5 rounded-lg py-3 shadow-sm disabled:bg-slate-500 hover:opacity-95">CREATE LISTING</button>
        <div className="w-4/5 flex flex-col justify-center mx-auto mt-3 ">
          <div className='flex justify-between text-red-600'>
            <span className='cursor-pointer'>
              Delete Account
            </span>
            <span className='cursor-pointer'>
              Sign out
            </span>
          </div>
          <span className='text-green-600 cursor-pointer'>Show Listings</span>
        </div>
      </div>
    </div>
  )
}
