import { useRef, useState } from "react"
import WordWriter from "../utilities/wordWriter"
import MyModal from "./modal";
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
function LeaveYourEmail() {
  const word = ['Dear🙌', 'Coach 🖐️', 'Boss ✋']
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    let error = !email.includes('@')
    if (error) toast.error("please  enter an email adress.")
    else {
      setIsOpen(true);
      emailjs.sendForm('service_tm2l96n', 'template_pi70ldv', form.current, 'BYGLc7fR5RD7k8rBu')
        .then((result) => {
        }, (error) => {
          toast.error("an error with network, try again. ")
        });
    }

  };

  return (
    <div style={{ transform: 'translateY(-50%)', borderRadius: '25px' }}
      className=" p-3  bg-light text-dark  text-capitalize flex-wrap d-flex justify-content-center align-items-center gap-3" >
      <MyModal setIsOpen={setIsOpen} isOpen={isOpen} />
      <h3 className="col-xs-12 col-lg-4 wrap p-3 " >
        see my project at once & leave here your e-mail address ,
        <WordWriter word={word} text={text} setText={setText} className={'inline'} />
      </h3>
      <div className="col-xs-12 col-lg-4 w-full position-relative">
        <form ref={form} onSubmit={sendEmail}>
          <input id="outlined-basic"
            // type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            style={{ padding: '14px' }} placeholder='email adress' />
          <button className="btn ps-4 pe-4  text-light position-absolute end-0 "
            type="submit" value='send'
            style={{ background: 'linear-gradient( to right,#973489,#5f30ae )', transform: 'translate(-5%,4px)', padding: '11px' }} >
            submit</button>
        </form>
      </div>
    </div>
  )
}
export default LeaveYourEmail