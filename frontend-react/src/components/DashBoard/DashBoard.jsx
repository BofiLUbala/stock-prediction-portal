
import React,{useEffect} from 'react'
import axiosInstance from '../../AxiosInstance'

const DashBoard = () => {
    useEffect(()=>{
        const fetchProtectedBata=async ()=>{
            try{
            
                // here we don't sed dta but we are fetching data from backend, now we need to send 
                //  authorization header alongside  with  access toeken
            const response=await axiosInstance.get('/protected-view/' )
            console.log('success',response.data)
                
            }catch(error){
                console.log('error fetching data',error)
            }
        }
        fetchProtectedBata()
    },[])
  return (
    <div  className='text-light container'>DashBoard</div>
  )
}

export default DashBoard