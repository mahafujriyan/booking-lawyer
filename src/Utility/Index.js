
import { toast } from "react-toastify"

 export const getAppoint = () => {
    const appoint = localStorage.getItem('appoint')
    if (appoint) return JSON.parse(appoint)
    return []
  }
  export const addAppoint = lawyer => {

    const appoint = getAppoint()
    const isExist = appoint.find(p => p.id === lawyer.id)
    if (isExist){
        return toast.error('lawyer Already Added')
        
    }
       
    appoint.push(lawyer)
        toast.success('Lawyer Added Successfully!!')
    
   
    localStorage.setItem('appoint', JSON.stringify(appoint))
  }

  export const removeAppoint=id=>{
    const appoint=getAppoint()
    const remainingAppoint=appoint.filter(lawyer=>lawyer.id!==id)
    localStorage.setItem('appoint',JSON.stringify(remainingAppoint))
    toast.error('Removed Successfully')
  }

