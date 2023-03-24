import React ,{useEffect, useState}from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

import { getRegisterData } from './state/getDataReducer';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { fetchNodeData } from './state/reducer';
import { BsWhatsapp } from 'react-icons/bs'
let name; 
let email; 
let number;

const ContactUs = () => {
  const state = {
    
    message:""
  }
  console.log(state)
  const [getdata , setGetdata] = useState(state)
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const {data}= useSelector(state=>state.getData.registerData)
const {isLoading , isError} = useSelector(state=>state.getData)
console.log(name)

name = data ? data.map(element =>element.name) : null;
 email = data ? data.map(element =>element.email) : null;
 number = data ? data.map(element =>element.number) : null;


useEffect(()=>{ dispatch(getRegisterData())},[dispatch])
const handleChange = (e) =>{
 const names = e.target.name;
  const value = e.target.value;
  setGetdata({...getdata , [names]:value})
}

const onSubmitHandler = async(e) =>{
  const {message} = getdata
 
  e.preventDefault()
 
  
 
     const data = await dispatch(fetchNodeData({message}))
      if(!message || message.length < 15){
      window.alert('you have to blank something')
      } 
    
     
      else {
        console.log(data)
        window.alert('message sent succesfuly')  
        navigate('/home')
       
        return  data      
      }
    
    
} 
if(isLoading){ return   <div  className='d-flex  lg:ml-[800px] lg:mt-[400px] m-[100px] md:w-2/3 w-[100px] '>  <BeatLoader color="#36d7b7" loading={true}/>{''} Please visit the register page again to get token</div>}
 
if(isError){ return <div className='d-flex text-red-900 lg:ml-[400px] text-[2rem] italic lg:mt-[400px] m-[100px] md:w-2/3 w-[100px] font-serif'>Sorry Invalid Register Please fill the correctly form</div>}
  return (
    <>
    

  
    <section className="text-gray-600 body-font relative lg:py-[3vh]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 ">CONTACT ME</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-serif">welcome again to contact me page. if you want to contact me submit your message </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 lg:w-1/3 w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600 font-semibold">NAME</label>
            <input  type="text" id="name" value={name}  name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 w-full">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600 font-semibold">EMAIL</label>
            <input  type="email" id="email" value={email}  name='email'  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      <div className="p-2 lg:w-1/3 w-full">
          <div className="relative">
            <label htmlFor="number" className="leading-7 text-sm text-gray-600 font-semibold">PHONE NUMBER</label>
            <input  type="number" id="number" value={number}  name='number'  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600 font-semibold">MESSAGE</label>
            <textarea onChange={handleChange} type='text/number' value={getdata.message}   id="message" name="message" placeholder='fill at least minimum 15 charactors' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button onClick={(e)=>{onSubmitHandler(e)}} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" >submit</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <Link className="text-indigo-500" target={'_blank'} to='mailto:mihir72999@gmail.com'>mihir72999@gmail.com</Link>
          <p className="leading-normal my-5">Ahmedabad.
            <br/>Gujarat, IN 38061
          </p>
          <span className="inline-flex">
            
        
            <Link className="lg:hidden ml-4 text-gray-500" title='whatsapp' target={'_blank'} to='whatsapp://send?phone=+919033667299'>
              
              <BsWhatsapp className='text-[#14fb54]'/>
            </Link>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
   
    </>
  )
}

export default ContactUs