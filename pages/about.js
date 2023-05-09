import React from "react";
import { Panel } from 'primereact/panel';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
 
        
const about = () => {

    const getInfo = (event) =>{
        event.preventDefault()
        console.log("form submitted")
    }

  return (
    <div className="flex flex-col justify-center p-2 md:items-center relative top-20">
      <h1 className="font-bold text-2xl ">
        This is About page View
      </h1>
      <Panel header="Header" toggleable>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
      
    </div>
  );
};

export default about;
