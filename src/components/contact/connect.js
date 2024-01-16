
import TrackVisibility from 'react-on-screen';
import img from '../../assets/img/contact-img.png'
import './contact.css'
import 'animate.css';
import React, { useState ,useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import MyModal from '../ui/modal';

function Connect(){
    const [contactData,setContactData] = useState({
        user_name:'',
        user_email:'',
        message:''
    })
    const handleChangeDate =(event)=>{
        setContactData({...contactData,
            [event.target.name]: event.target.value
    })
    console.log(contactData);
    }

     const form = useRef();
     const [isOpen, setIsOpen] = useState(false)
    const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    let error = Object.values(contactData).some(value=>value==='') || Object.values(contactData).every(value=>value.key==='')
    console.log(error);
    if(error)toast.error("please fill all fields.")
    else{
        setIsOpen(true)
        emailjs.sendForm('service_tm2l96n', 'template_pi70ldv', form.current, 'BYGLc7fR5RD7k8rBu')
        .then((result) => {
        }, (error) => {
            toast.error("an error with nerwork, try again. ")

        });}
    };

    return(
        <div id='coonect' style={{}} className='pb-' >
           <MyModal setIsOpen={setIsOpen} isOpen={isOpen} />
            <div className="d-flex justify-content-center flex-wrap  gap-4 p-1 align-items-center container">
                <div className='col-xs-12 col-lg-5 p-3 col-md-5' >
                    <TrackVisibility>
                    {
                        ({isVisible})=>(
                        <div className={isVisible && ' animate__animated animate__zoomIn'}>
                            <img src={img} className='w-100 h-100'/>
                        </div>
                        )
                    }
                    </TrackVisibility>
                </div>
                <div className="col-xs-12 col-md-7 col-lg-6 row  flex-wrap justify-content-center gap-2 mb-5 p-3">
                    <h1 className='w-100 text-light text-capitalize p-3'> get in touch</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <input placeholder='First Name'
                         className='mb-2 input  p-3 text-light w-full'
                         name="user_name"
                         type='text'
                         value={contactData.user_name} 
                         onChange={handleChangeDate} 
                          />
                        <input placeholder='email ' 
                        className='mb-2  input  p-3  text-light w-full'
                        type="email" value={contactData.user_email} 
                        name="user_email"  
                        onChange={handleChangeDate} 
                         />
                        <textarea rows="6" placeholder='message' 
                        className='input w-100 p-3 ' 
                        value={contactData.message} 
                        name="message" 
                        onChange={handleChangeDate} 
                        />
                        <button className=' mt-3 btn-outline-light btn fw-bold pt-2 pb-2 me-auto ps-5 pe-5 '
                         type='submit' value='Send' 
                         style={{width:'fit-content',borderRadius:'0'}}>send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Connect;