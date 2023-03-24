
import React ,{ useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

import { userRegisterData } from './state/registerReducer';

const state ={
  name:'',
  email:'',
  number:''
}
const Login = () => {
  const { isLoading , isError} = useSelector(state=>state.register)
 
  const dispatch = useDispatch()
  const navigate = useNavigate()  //set nevigation after register htmlForm 
  const [user, setUser] = useState(state)
  let name;
  let  value;
  

  // on change handler  change state in register htmlForm 
  const onChangeHandler = (e) => {
  name = e.target.name
  value = e.target.value
  setUser({ ...user , [name]:value})
}


// on submithandler submit data on click submit button
const onSubmitHandler = async(e) =>{
 const {email , name , number} = user

 e.preventDefault()

 

    const data = await dispatch(userRegisterData({name ,email,number }))
   
    
    console.log(data)
     
    if( data.payload === undefined || data.status === 422 ){
     window.alert('invalid registration')
    } 

      else if(!email || !name || !number){
     window.alert('you have to blank something')
     } 
   
      else {
        window.alert('data has been send succesfully')  
        navigate('/contactform')
        return  data      
      }

    }

if(isLoading){
  
  return   <div  className='d-flex lg:ml-[800px] lg:mt-[400px] m-[100px] md:w-2/3 w-[100px] '>  <BeatLoader color="#36d7b7" loading={true} />  </div>
  
}


if(isError){
 return <div className='d-flex text-red-900 lg:ml-[400px] text-[2rem] italic lg:mt-[400px] m-[100px] md:w-2/3 w-[100px] font-serif'>Sorry Invalid Register Please fill the correctly form</div>
}




  return (  
    <>
   
    <section className="text-gray-600 body-font relative">
      <div className='d-flex  mt-[40px] content-center'>
      <div className='d-flex lg:h-[10rem] lg:w-[40%]  m-auto text-center bg-gradient-to-r from-[#c3c9c8] via-[#a3d2e3] to-[#78c2ea]'>
        <h2 className='p-[2rem] text-white tracking-tight font-mono text-[3rem]' >MIHIR PATEL</h2>
      </div>
        </div>
        <div className="container px-5  py-20 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-xl w-[100%]  h-[3rem]  lg:w-[50%] m-auto  text-2xl flex-wrap content-center font-medium title-font mb-6 text-gray-400">REGISTER PAGE</h1>
     
      <p className="lg:w-2/3  mx-auto leading-relaxed text-base font-thin">Welcome to on website from mihir patel if you have any query your you can freely contact me</p>
   <p className='font-thin'>and if you visit my website you have to fill below form first </p> </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex justify-center flex-wrap -m-2">
        <div className="p-2 lg:w-3/5  w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 Oxygen text-sm text-gray-600 font-serif ">NAME</label>
            <input onChange={onChangeHandler} type="text" value={user.name} id="name" name="name"  className="w-full bg-gray-100 bg-opacity-50 laceholder-name rounded border border-gray-300  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 lg:w-3/5 w-full" >
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600 font-serif">EMAIL</label>
            <input onChange={onChangeHandler} type="email" value={user.email} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 lg:w-3/5 w-full">
          <div className="relative">
            <label htmlFor="number" className="leading-7 text-sm text-gray-600 font-serif">PHONE NUMBER</label>
            <input onChange={onChangeHandler} type="number/text" value={user.number} id="number" name="number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
       
        <div className="p-2 text-center mt-2 w-full">
          <button onClick={(e)=>{onSubmitHandler(e)}}  className="landing-7 text-white bg-gradient-to-r from-[#987f8d] to-[#e4b8d7] text-lg py-2  px-10 hover:bg-gradient-to-r hover:from-[#e4b8d7] hover:to-[#987f8d]">Submit</button>
        </div>
      
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Login