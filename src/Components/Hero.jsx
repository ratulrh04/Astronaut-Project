import { Typewriter } from 'react-simple-typewriter'
import Nav from "./Nav";
const Hero = () => {

    return (
        <div>
            <div id="hero-wrapper">
             <Nav/>
              <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="contant-wrapper">
                            <div className="heading">
                                <span>Welcome to my project</span>
                            </div>
                            <h1>Hello !, I am{' '}
                                    <Typewriter
                                        words={['Programmer', 'Designer', 'Developer']}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                         <cursor/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptate blanditiis possimus illum doloremque quasi ut nesciunt id quam, repellendus vitae recusandae soluta vel hic alias incidunt corrupti totam sunt autem optio dolore eveniet odio natus dolores. Reiciendis,
                            vel hic alias incidunt corrupti totam sunt autem optio dolore eveniet odio natus dolores. Reiciendis, amet iure!</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="astronaut-img-wrapper">
                            <img className="astronaut-img" src="../../public/image/astronaut-removebg-preview 1.png" alt="" />
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Hero;