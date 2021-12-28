
import React from 'react';

function Footer(){
    return(
        <div>
            <div>
                <div className='bb my-5'>
                    <div className='container'>
                           
                        <div className='row mt-5 mb-5'></div>
                        <div className='row mt-5 mb-5'></div>
                        <div className='row mt-5 mb-5'></div>
                        <div className='row px-5 py-3 align-middle justify-content-center text-center' >
                            
                            <div className="text-white">

                                <h1 style={{fontSize:'3rem', fontWeight:'900'}}>Sign Up</h1>
                                <h3>Access all features for 30 days for free!</h3> <br /> <br />
                                <form className='col-lg-4 m-auto'>
                                    <div className='row'>
                                        
                                            <input className='btn bg-white shadow-lg' placeholder='Enter your email address' type="email" name="email" />
                                    </div>
                                    <div className='row'>
                                        <input type="submit" className='btn text-white shadow-lg' />
                                    </div>
                                    
                                </form>
                                
                            </div>

                            
                        </div>
                        <div className='row mt-5 mb-5'></div>
                        <div className='row mt-5 mb-5'></div>
                        <div className='row mt-5 mb-5'></div>
                        
                    </div>                    
                </div>
            </div>
            <footer id="footer">
            
            <div className="container d-lg-flex py-4">
                <div className="me-lg-auto text-center text-lg-start">
                <div className="copyright">
                    © Copyright <strong><span>Analytics</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="www.syntics.co/">SYNTICS SOFT PRIVATE SMC LIMITED</a>
                </div>
                </div>
                <div className="social-links text-center text-lg-right pt-3 pt-lg-0">
                <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
            </div>
            </footer>
        </div>
    )
}

export default Footer;