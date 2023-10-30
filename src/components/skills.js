

import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import 'bootstrap/dist/css/bootstrap.css';
import skill1 from '../assets/img/meter1.svg';
import skill2 from '../assets/img/meter2.svg';
import skill3 from '../assets/img/meter3.svg';
register();

export default function Skills () {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      // console.log(progress);
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
      // console.log(size)

    }
    if(778 <availableWidth){
      setSize(3)
      // console.log(size)

    }
    if( availableWidth <= 578 ){
      setSize(1)
      // console.log(size)
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
      >{console.log({size})}
      <swiper-slide className='col-xs-12 col-md-6 col-lg-4'>
        <img src={skill1} alt='HTML' />
        <h4 className='p-3'>HTML</h4>
      </swiper-slide>
      <swiper-slide className='col-xs-12 col-md-6 col-lg-4'>
        <img src={skill2} alt='Css' />
        <h4 className='p-3'>Css</h4>
      </swiper-slide>
      <swiper-slide className='col-xs-12 col-md-6 col-lg-4'>
        <img src={skill3} alt='js' />
        <h4 className='p-3'>js</h4>
      </swiper-slide>
      <swiper-slide className='col-xs-12 col-md-6 col-lg-4'>
        <img src={skill1} alt='Bootstrap' />
        <h4 className='p-3'>Bootstrap</h4>
      </swiper-slide>
      <swiper-slide className='col-xs-12 col-md-6 col-lg-4'>
        <img src={skill2} alt='react' />
        <h4 className='p-3'>react</h4>
      </swiper-slide>
      <swiper-slide className='col-xs-12 col-md-6 col-lg-4'>
        <img src={skill1} alt='redux/redux-toolkit' />
        <h4 className='p-3'>redux/redux-toolkit</h4>
      </swiper-slide>
      <swiper-slide className='col-xs-12 col-md-6 col-lg-4'>
        <img src={skill3} alt='git & github' />
        <h4 className='p-3'>git & github</h4>
      </swiper-slide>
      {/* <swiper-slide className='col-xs-12 col-md-6 col-lg-4'>
        <img src={skill1} alt='Skill 2' />
        <h4 className='p-3'></h4>
      </swiper-slide> */}
      </swiper-container>
    </div>
  );
};