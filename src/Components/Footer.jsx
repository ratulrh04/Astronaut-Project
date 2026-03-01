
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <section id="footer">
              <div className="container-fluid">
                  {/* subscribe section jsx code write start here */}
                  <div className="container">
                  <section id="subscribe">
                  <div className="row subscribe-row">
                    <div className="col-md-6 subscribe-heading">
                          <h1>SUBSCRIBE</h1>
                    </div>
                    <div className="col-md-6 subscribe-inputs">
                    <div className="email-input-group">
                          <input className="email-input" type="email" placeholder="email" />
                           <button className="email-btn"><span>submit</span></button>
                        </div>
                    </div>
                  </div>
               </section>
               </div>
               {/* subscribe section jsx code write start here */}

                <div className="row footer-row">
                    <div className="col-md-12 col-wrap">
                    <div className="left-footer-content">
                       <h1>Logo</h1>
                    </div>
                    <div className="right-footer-content">
                        <div className="icon-wrapper d-flex">
                            <CiFacebook className="facebook nav-icon fb-icon" />
                            <CiLinkedin className="linkdin nav-icon linkdin-icon" />
                            <FaInstagram className="instagram nav-icon insta-icon" />
                        </div>
                        <span className="copy-right">&copy; right 2024. All right reserved</span>
                    </div>
                    </div>
                </div>
              </div>
            </section>
        </div>
    );
};

export default Footer;