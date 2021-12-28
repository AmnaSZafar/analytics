import React from 'react';

function Services(){
    return(
        <div>
             {/* ======= Hero Section ======= */}
          <section id=""  className="d-flex flex-column justify-content-center align-items-center">
            <div className="container mt-5" data-aos="fade-in">
              
              <h1 className='text-center display-3' style={{ color:'rgb(116,96,133)', fontWeight:'900' }}>Explore</h1>
              <h3 className='text-center' style={{ color:'rgb(116,96,133)', fontWeight:'900' }}>All-in-one online accounting software</h3>
            </div>
          </section>{/* End Hero */}
          <main id="main">
            {/* ======= Why Us Section ======= */}
            <section id="why-us" className="why-us">
              <div className="container" >
                <div className="row align-middle justify-content-center">
                  <div  className="col-xl-8 col-lg-8" data-aos="fade-up">
                    <div className="content" style={{  background:' rgb(116,96,133)', background: 'linear-gradient(102deg, rgba(116,96,133,1) 0%, rgba(157,107,107,1) 63%, rgba(95,104,105,0.9304096638655462) 87%)'}}>
                      <h3>Explore our services</h3>
                      <p> We provide exclusive features for for accountants and businesses. Gather all your clients and staff in one place and manage your work efficiently. 
                          Manage compliance workflows and improvise with Analytics.  
                      </p>
                      
                    </div>
                  </div>
                </div>
                
              </div>
            </section>{/* End Why Us Section */}
            <section id="services" className="services section-bg" >
          <div className="container">
            
            <div className="row">
              <div className="col-md-6" data-aos="fade-up">
                <div className="icon-box">
                  {/* <div className="icon"><i className="bi bi-briefcase" /></div> */}
                  <h4 className="title"><a href>Management System</a></h4>
                  <p className="description">Building a management system for your company is one of our many services.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon-box">
                  {/* <div className="icon"><i className="bi bi-card-checklist" /></div> */}
                  <h4 className="title"><a href>Invoice Generation</a></h4>
                  <p className="description">Work smarter with intuitive invoicing software. Send online invoices from the desktop or app as soon as the job is done.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon-box">
                  {/* <div className="icon"><i className="bi bi-bar-chart" /></div> */}
                  <h4 className="title"><a href>Tracking Software</a></h4>
                  <p className="description">Keep track of costs and profitability with project and job tracker software.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="icon-box">
                  {/* <div className="icon"><i className="bi bi-binoculars" /></div> */}
                  <h4 className="title"><a href>Financial Advisor</a></h4>
                  <p className="description">Track your finances with accurate accounting reports. And collaborate with your advisor online in real time.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="icon-box">
                  {/* <div className="icon"><i className="bi bi-brightness-high" /></div> */}
                  <h4 className="title"><a href>Analytical Analysis</a></h4>
                  <p className="description">See future cash flow, check financial health and track metrics.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={500}>
                <div className="icon-box">
                  {/* <div className="icon"><i className="bi bi-calendar4-week" /></div> */}
                  <h4 className="title"><a href>Management Inventory</a></h4>
                  <p className="description">Keep track of what’s in stock with inventory software. Populate invoices and orders with items you buy and sell.</p>
                </div>
              </div>
            </div>
          </div>
        </section>{/* End Services Section */}
          </main>{/* End #main */}

        </div>
    )
}

export default Services;