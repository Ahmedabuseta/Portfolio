import img from '../../assets/img/header-img.png'
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './banner.css'
import 'animate.css';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from 'react';
import WordWriter from '../utilities/wordWriter';
function Banner() {
    const jobs = ['Frontend Devoleper', 'Backend Devoleper', 'fullStack Devoleper']
    const [text, setText] = useState('')

    return (
        <div id='banner'>
            <div className='container d-flex flex-row justify-contnet-lg-center flex-wrap  align-items-center' style={{ paddingTop: '20vh', paddingBottom: '100px' }} >
                <div className=' text-capitalize d-flex justify-content-start flex-column col-xs-12 col-md-7 col-lg-6   ' >
                    <TrackVisibility>
                        {
                            ({ isVisible }) => (
                                <div className={isVisible && 'animate__animated animate__fadeIn'} >
                                    <h2 className='p-2 border border-light text-light text-start me-auto welcome-title'>welcome to my portfolio</h2>
                                    <h1 className=" text-capitalize fw-bold text-light d-flex flex-wrap text-wrap align-items-center" style={{ fontSize: '45px' }}>
                                        hi i am ahmed abuseta,<span>  <WordWriter text={text} setText={setText} word={jobs} /> </span>
                                        <span style={{ width: '2px', height: '50px' }} className='border  border-secondary animate__animated animate__flash animate__infinite	'></span> </h1>
                                    <p className='text-secondary  fs-6 text-start p-1  lh-sm fw-bold'>
                                        I'm Ahmed Ahmed Abusetta undergradauted student in facaulty of engineering computers and control department in Tanta university , and i'm a front end devolper with 
                                        <span className='underline text-indigo-500'> {"{"} React {"}"}  </span>framework
                                        </p>
                                    <button className='btn connect-btn text-light fw-bold fs-5 me-auto' style={{ width: 'fit-content' }}>lets connect <ArrowCircleRightOutlinedIcon id='arrow-btn' /></button>
                                </div>
                            )
                        }
                    </TrackVisibility>
                </div>
                <div className='col-xs-12 col-lg-5 col-md-5 ' >
                    <TrackVisibility>
                        {
                            ({ isVisible }) => (
                                <div className={isVisible && " animate-up-down"} >
                                    <img className='w-100 h-100' src={img} />
                                </div>
                            )
                        }
                    </TrackVisibility>
                </div>
            </div>
        </div>

    )
}

export default Banner;