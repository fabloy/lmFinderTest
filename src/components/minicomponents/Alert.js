import { useEffect, useState } from 'react';


const Alert = ({visible, title, msg})=>{
 const [showAlert, setShowAlert] = useState(false)

    useEffect(()=>{
        setShowAlert(visible)
    },[visible])
    return(
        <section 
         className={`alert ${showAlert ? 'alertOn' : 'alertOff'}`}
        >
            <div className='flex w-full justify-center items-center text-white mb-1'>
             <h4>{title}</h4>
             <p className='font-bold text-md mx-1'>{msg}</p>
            </div>
        </section>
    )
}

export default Alert