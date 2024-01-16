
import React from 'react';

import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import 'bootstrap/dist/css/bootstrap.css';
import {Data } from './data'
register();

export default function Skills () {
  const swiperElRef = useRef(null);
  useEffect(() => {
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
    });
    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);
  const [availableWidth , setAvailableWidth] = useState(window.innerWidth)
  const [size ,setSize] = useState(0)
  const handleWidth = ()=>{
    setAvailableWidth(window.innerWidth)
    if (578 < availableWidth <= 778){
      setSize(2)
    }
    if(778 <availableWidth){
      setSize(3)
    }
    if( availableWidth <= 578 ){
      setSize(1)
    }
  }
  useEffect(()=>{
    window.addEventListener('resize' , handleWidth)
    console.log(size,availableWidth)
  }
  ,[availableWidth])
  return (
    <div id='skills' className='container bg-dark text-center p-3 text-light' style={{ transform: 'translateY(-50px)', borderRadius: '30px' }}>
      <h1 className='text-center text-light'>Skills</h1>
      <p className='text-center text-light d-flex justify-content-center' style={{ paddingLeft: '5rem', paddingRight: '5rem' }}>{'my Name is Ahmed Abuseta, I live in tanta. Front-end {react} dev.'}</p>
      <swiper-container
      ref={swiperElRef}
      
      slides-per-view={size}
      navigation="true"
      loop= "true"
      >
      {
        Data.map((skill,index) =>(
        <swiper-slide key={index} className='col-xs-12 col-md-6 col-lg-4 '>
          <img src={skill.src} alt='Css' className='inline-block'/>
          <h4 className='p-3'>{skill.title}</h4>
        </swiper-slide>
        ))
      }
      </swiper-container>
      
    </div>
  );
};