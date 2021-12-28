import React from 'react';


function Login(){
    return(
        <div>
            
            <section className="container get-in-touch">
                {/* <h1 className="title">Login</h1> */}
                <h4 className='text-center display-3' style={{ color:'rgb(116,96,133)', fontWeight:'900' }}>Sign In</h4>
                <form className="contact-form row">
                
                <div className="form-field col-lg-6 ">
                    <input id="email" className="input-text js-input" type="email" required />
                    <label className="label" htmlFor="email">E-mail</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="company" className="input-text js-input" type="password" required />
                    <label className="label" htmlFor="company">Password</label>
                </div>
                
                <div className="form-field col-lg-12 text-center">
                    <input className="submit-btn" type="submit" defaultValue="Submit" /> <br /><br />
                    <a style={{ color:'rgb(116,96,133)', fontWeight:'100' }} href='/register'>Don't have an account?</a>  
                </div>
                </form>
                
            </section>
            
        </div>
    )
}

export default Login;