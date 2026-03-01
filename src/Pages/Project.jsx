import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Project = () => {

     const [projectData, setProjectData]=useState([]);

    useEffect(()=>{
        const projectApi = async () => {
            try{
                const respons = await fetch("../../public/Json/project.json"); 
                const jsonData = await respons.json();
                setProjectData(jsonData)
            }catch(error){
               console.log("this is the project api : " + error)
            }
        }
        projectApi();
      },[])


    return (
        <div>
           <section id="project">
              {/* Tab section start here */}
             <div className="container">
               <div className="row">
                 <div className="tab-container">
                   <h1>PROJECT</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora architecto saepe vero corporis vel aliquam, eius id dolore sunt necessitatibus ab unde ducimus non hic.</p>
                 <Tabs
                 defaultActiveKey="profile"
                 id="uncontrolled-tab-example"
                 className="mb-3 tabs"
               >
                
                <Tab eventKey="home" title="Tab-1">
                     <div className="row">
                     {
                     projectData.map((value, index)=>(
                      <div key={index} className="col-md-4 card-col-wrap">
                        <div className="card">
                          <img className='card-img' src={value.image}  alt="cart-logo"/>
                           <div className="overflow-div">
                               <h1>Business Startup</h1>
                               <i>Desing & Development</i>
                           </div>
                        </div>
                      </div>  
                       ))
                       }    
                     </div>
                </Tab>
                <Tab eventKey="profile" title="Tab-2" className='tab-2'>
                    This is tab-2 content
                   <em>LLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi ipsa!perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi </em>
                </Tab>
                <Tab eventKey="contact" title="Tab-3"  className='tab-3'>
                    This is tab-3 content
                    <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, vero accusantium perferendis assumenda illum odit officiis dicta quaerat magni numquam omnis sequi nisi ipsa!</em>
                </Tab>
                </Tabs>
                 </div>
              {/* Tab section end here */} 



               </div>
            </div>
            
           </section>
        </div>
    );
};

export default Project;