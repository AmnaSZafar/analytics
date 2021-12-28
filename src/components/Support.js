import React from 'react';

function Support(){
    return(
        <div className='container'>
            <div className='container my-5 p-5'>
            <h2 className='text-center display-2 my-3' style={{ color:'rgb(116,96,133)', fontWeight:'900' }}>Get support</h2>
            <h4 className='text-center my-3' style={{ color:'rgb(116,96,133)', fontWeight:'400' }}>Send us a message so that we may help you</h4>
            <h6 className='text-center my-3' style={{ color:'rgb(116,96,133)', fontWeight:'400' }}>
            
            </h6>
          </div>
            <section className="get-in-touch mx-auto">
                {/* <h1 className="title">Get in touch</h1> */}
                <form className="contact-form row">
                <div className="form-field col-lg-6">
                    <input id="name" className="input-text js-input" type="text" required />
                    <label className="label" htmlFor="name">Name</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="email" className="input-text js-input" type="email" required />
                    <label className="label" htmlFor="email">E-mail</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="company" className="input-text js-input" type="text" required />
                    <label className="label" htmlFor="company">Company Name</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input id="phone" className="input-text js-input" type="text" required />
                    <label className="label" htmlFor="phone">Contact Number</label>
                </div>
                <div className="form-field col-lg-12">
                    <input id="message" className="input-text js-input" type="text" required />
                    <label className="label" htmlFor="message">Message</label>
                </div>
                <div className="form-field col-lg-12 text-center">
                    <input className="submit-btn" type="submit" defaultValue="Submit" />
                </div>
                </form>
            </section>
        </div>
    )
}

export default Support;