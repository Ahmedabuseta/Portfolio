import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import './projects.css';
import img from '../assets/img/azan.jpg'
import commerce from '../assets/img/commerce.jpg'
import travel from '../assets/img/travel.jpg'
import dashboard from '../assets/img/dashboard.jpg'
import services from '../assets/img/servicies.jpg'
import furnture from '../assets/img/funture.jpg'

// Component for each tab content
const TabContent = ({ label }) => {
  return <div className='p-3 pt-5 pb-5 tetx-center fw-bold d-flex justify-content-center' style={{width:'100vw'}}>{label} </div>;
};
const TabProjects = ({ label }) => {
  return(
    <div className='d-block '>
          <div className='d-flex p-3 pt-5 pb-5 justify-content-center gap-3 flex-wrap'>
     {
      label.map((project)=>
        (
          <div className=' col-xs-12 col-md-5 col-lg-3 position-relative project'>
            <div className='rounded' style={{height:'300px'}}>
              <img src={project.imgUrl} className=' w-100 h-100 rounded flex-grow-1' />
            </div>
            <div className='position-absolute top-0 start-0 w-100 rounded d-flex flex-column justify-content-center align-items-center rounded text-center p-3 overlay'>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))
        }
    </div>
    </div>

    
  )

};

const TabRouter = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('/tab1');

  const tabs = [
    { label: '1st Section', path: '/tab1', id: "tab1" },
    { label: '2nd Section', path: '/tab2', id: "tab2" },
    { label: '3rd Sectoin', path: '/tab3', id: "tab3" },
  ];
  const data =[ 
    {
      title: "azan timing",
      description: "Design & Development",
      imgUrl: img,
    },
    {
      title: "e-commerce app",
      description: "Design & Development",
      imgUrl: commerce,
    },
    {
      title: "travel template",
      description: "Design & Development",
      imgUrl: travel,
    },
    {
      title: "Dashboard template",
      description: "Design & Development",
      imgUrl: dashboard,
    },
    {
      title: "services template",
      description: "Design & Development",
      imgUrl: services,
    },
    {
      title: "furnture store template",
      description: "Design & Development",
      imgUrl: furnture,
    },
  ]

  
  const handleTabChange = (event, newPath) => {
    setActiveTab(newPath);
  };
  useEffect(()=>{
    window.addEventListener('onload',()=>{
      window.location.href = '/tab1'
    })
    return ()=>{}
  },[])
  return (
    <div className='d-flex justify-content-center  '>
      <Box sx={{ typography: 'body1' }} className=" w-100 d-flex justify-content-center" >
        <Tabs
        className='d-flex justify-content-center  '
          value={activeTab}
          aria-label="Tab Router"
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab
            id={`${tab.id}`}
              className="ps-md-4 p-xs-2 pe-md-4 pt-3 pb-3  "
              key={tab.path}
              label={tab.label}
              component={Link}
              to={tab.path}
              value={tab.path}
              onClick={(event) => handleTabChange(event, tab.path)}
              style={{
                color:'white',border:' 1px solid white',
                background: activeTab === tab.path ? 'linear-gradient( to right,#973489,#5f30ae )' : 'transparent',
              }}
            />
          ))}
        </Tabs>
        
        <Routes>
        <Route key='/tab1' path='/tab1' element={<TabProjects label={data} />} />
        <Route key='/tab2' path='/tab2' element={<TabContent label={''} />} />
        <Route key='/tab3' path='/tab3' element={<TabContent label={"my Name is Ahmed Abuseta,  I live in tanta. Front-end {react} dev."} />} />
        <Route key='/tab1' path='*' element={<TabProjects label={data} />} />

        </Routes>
      </Box>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <TabRouter />
    </BrowserRouter>
  );
};

export default App;