
import TabRouter from "./projectTab"
import React from 'react';


function Projects(){

    return(
        <div id="projects" className="d-flex justify-content-center align-items-center  flex-column ">
            <h1 className="fw-bold p-3 text-light text-center" >Projects</h1>
            <TabRouter/>
         </div>
    )
}

export default Projects