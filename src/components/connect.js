
import TrackVisibility from 'react-on-screen';
import img from '../assets/img/contact-img.svg'
import './contact.css'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';

function Connect(){

    return(
        <div id='coonect' style={{background: 'linear-gradient( to right, rgb(255 9 220), rgb(95 4 248) )',paddingBottom:'180px'}} className='pb-' >
           
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
                <div className="col-xs-12 col-md-7 col-lg-6 row flex-wrap justify-content-center gap-1 mb-5 p-3">
                    <h1 className='w-100 text-light text-capitalize p-3'> get in touch</h1>
                    <input placeholder='First Name' className=' input colxs-12 col-md-5 p-3 border border-light text-light' style={{backgroundColor:'#6c757d82',borderRadius:'15px',backdropFilter:'blur(5px)'}} />
                    <input placeholder='First Name' className=' input colxs-12 col-md-5  p-3 border border-light text-light' style={{backgroundColor:'#6c757d82',borderRadius:'15px',backdropFilter:'blur(5px)'}} />
                    <input placeholder='First Name' className=' input colxs-12 col-md-5 p-3 border border-light text-light' style={{backgroundColor:'#6c757d82',borderRadius:'15px',backdropFilter:'blur(5px)'}} />
                    <input placeholder='First Name' className=' input colxs-12 col-md-5 p-3 border border-light text-light' style={{backgroundColor:'#6c757d82',borderRadius:'15px',backdropFilter:'blur(5px)'}} />
                    <textarea rows="6"   placeholder='message' className=' input   w-100 border border-light' style={{backgroundColor:'#6c757d82',borderRadius:'15px',backdropFilter:'blur(5px)'}}/>
                    <button className=' mt-3 btn-outline-light btn fw-bold pt-2 pb-2 me-auto ps-5 pe-5 ' style={{width:'fit-content',borderRadius:'0'}}>send</button>
                </div>
            </div>
        </div>
    )
}
export default Connect;