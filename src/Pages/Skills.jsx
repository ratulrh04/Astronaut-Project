import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = ({ deviceType }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <section id="skill">
        <div className="container">
          <div className="row">
            <h1>Skills</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit autem animi suscipit nostrum maxime excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor sit amet, consectetur adipisicing elit.</span>
          <Carousel className="carousel"
        //   swipeable={false}
        //   draggable={false}
        //   showDots={true}
          responsive={responsive}
        //   infinite={true}
        //   autoPlay={deviceType !== "mobile"}
        //   autoPlaySpeed={1000}
        //   keyBoardControl={true}
        //   customTransition="all .5"
        //   transitionDuration={500}
        //   containerClass="carousel-container"
        //   removeArrowOnDeviceType={["tablet", "mobile"]}
        //   dotListClass="custom-dot-list-style"
        //   itemClass="carousel-item-padding-40-px"
        > 
          <div className="skill-wrapper">
             <img src="../../public/image/95.svg" alt="" />
             <h2> Web Development </h2>
          </div>

          <div className="skill-wrapper">
             <img src="../../public/image/80.svg" alt="" />
             <h2>Logo Desing</h2>
          </div>

          <div className="skill-wrapper">
             <img src="../../public/image/85.svg" alt="" />
             <h2>Brand Identity</h2>
           </div>

          <div className="skill-wrapper">
            <img src="../../public/image/90.svg" alt="" />
            <h2>App Development</h2>
          </div>

          <div className="skill-wrapper">
            <img src="../../public/image/95.svg" alt="" />
            <h2>Softwere Based</h2>
          </div>


          <div className="skill-wrapper">
            <img src="../../public/image/90.svg" alt="" />
            <h2>Google Analytics</h2>
          </div>

        </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
