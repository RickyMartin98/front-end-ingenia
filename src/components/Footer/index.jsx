import React from 'react';
import  '../../img/btns/btns.png';
import '../../css/Footer.css';

function Footer () {   
        return (
            <footer className="container-fluid footer-container">
              <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <p className="pt-2 text-center pl-5 copy" >&copy; 2014 Ingenia Group</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 mr-0">
                    <ul className="listSections">
                            <li className="list-item"><a>About Us</a></li>
                            <li className="list-item borderLeft"><a>Our Work</a></li>
                            <li className="list-item borderLeft"><a>Blog</a></li>
                            <li className="list-item borderLeft"><a>Jobs</a></li>
                            <li className="list-item borderLeft active"><a>Contact</a></li>
                        </ul>
                    </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-4 pl-2 text-center">
                   <span className="usa">us</span> <h3 className="usaTitle">Usa</h3>
                   <p className="parrafFooter">1200 18th Street NW Suite 700</p>
    
                   <p className="parrafFooter">Washington DC 20036 USA</p>
                   <p className="parrafFooter">50220900</p>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4 mexicoContainer pl-2 text-center">
                    <span className="mexico">me</span> <h3 className="mexicoTitle">Mexico</h3>
                    <p className="parrafFooter">Anatole France 311</p>
                    <p className="parrafFooter">Polanco, Miguel Hidalgo</p>
                    <p className="parrafFooter">11550 Mexico DF</p>
                    <p className="parrafFooter">50220900</p>
                </div>
                <div className="col-12 col-md mr-5">
                    <ul className="listPolicy">
                        <li className="policyList"><a>Terms of use</a></li>
                        <li className="policyList"><a>Privace of policy</a></li>
                    </ul>
                    <ul className="listSocial">
                        <li className="itemlistSocial"><a className="linkedin">ldin</a></li>
                        <li className="itemlistSocial"><a className="twitter">Twi</a></li>
                        <li className="itemlistSocial"><a className="facebook">Fak</a></li>
                        <li className="itemlistSocial"><a className="youtube">Yot</a></li>
                        <li className="itemlistSocial"><a className="google">ggl</a></li>
                        <li className="itemlistSocial"><a className="vimeo">Vm</a></li>
                    </ul>
                </div>
              </div>
            </footer>
        );
    }

export default Footer;