import React from 'react';
function Home(){
    return(
        <div>
            {/* ======= Hero Section ======= */}
          <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="container" data-aos="fade-in">
              
              <h1>Welcome to Analytics</h1>
              <h2>Making Everyday tasks easier. Explore features and tools built for small businesses, accountants and bookkeepers.</h2>
            </div>
          </section>{/* End Hero */}
          <main id="main">
            {/* ======= Why Us Section ======= */}
            <section id="why-us" className="why-us">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4 col-lg-5" data-aos="fade-up">
                    <div className="content">
                      <h3>Choose Analytics for your Company</h3>
                      <p>
                        Bring everyone together across your business with Analytics using innovative and intelligent business applications. Find and build stronger relationships to improve productivity and performance. Analytics will help your company by saving your time by managing bills, expenses, invoicing, and easy reconciliation all in one place. Analytics can generate clear dynamic statements, invoices, reports, and everything that you would want for your business.
                      </p>
                      
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-7 d-flex">
                    <div className="icon-boxes d-flex flex-column justify-content-center">
                      <div className="row">
                        <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                          <div className="icon-box mt-4 mt-xl-0">
                            <i className="bx bx-train text-danger" />
                            <h4>Book your Free Trial Today</h4>
                            <p>Get to know us a little better and see how we can help boost your company's productivity</p>
                            <div className="text-center">
                              <a href="/login" className="text-danger">Learn More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                          <div className="icon-box mt-4 mt-xl-0">
                            <i className="bx bx-cube-alt text-danger" />
                            <h4>Management System</h4>
                            <p>Building a management system for your company is one of our many services. Explore our products and free trial.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
                          <div className="icon-box mt-4 mt-xl-0">
                            <i className="bx bx-bar-chart text-danger" />
                            <h4>Invoice Generation</h4>
                            <p>Work smarter with intuitive invoicing software. Send online invoices from the desktop or app as soon as the job is done.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-xl-12 mt-5 col-lg-12 d-flex">
                    <div className="icon-boxes d-flex flex-column justify-content-center">
                      <div className="row">
                        <div className="col-xl-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400}>
                          <div className="icon-box mt-4 mt-xl-0">
                            <i className="bx bx-pin text-danger" />
                            <h4>Tracking Software</h4>
                            <p>Keep track of costs and profitability with project and job tracker software.</p>
                            
                          </div>
                        </div>
                        <div className="col-xl-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={500}>
                          <div className="icon-box mt-4 mt-xl-0">
                            <i className="bx bx-money text-danger" />
                            <h4>Financial Advisor</h4>
                            <p>Track your finances with accurate accounting reports. And collaborate with your advisor online in real time.</p>
                          </div>
                        </div>
                        <div className="col-xl-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={600}>
                          <div className="icon-box mt-4 mt-xl-0">
                            <i className="bx bx-transfer-alt text-danger" />
                            <h4>Analytical Anaysis</h4>
                            <p>See future cash flow, check financial health and track metrics.</p>
                          </div>
                        </div>
                        <div className="col-xl-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={500}>
                          <div className="icon-box mt-4 mt-xl-0">
                            <i className="bx bx-align-justify text-danger" />
                            <h4>Management Inventory</h4>
                            <p>Keep track of what’s in stock with inventory software. Populate invoices and orders with items you buy and sell.</p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Why Us Section */}
      
          
            {/* ======= Values Section ======= */}
            <section id="values" className="values">
              <div className="container">
                <div className="row">
                  <div className='col-md-6'>
                    <a href='/login'><img src='assets/img/values-1.jpg' className='img-fluid' /></a>
                  </div>
                  <div className='col-md-6'>
                      <a href='/login'><img src='assets/img/values-2.jpg' className='img-fluid' /></a>
                  </div>
                  
                  
                </div>
              </div>
            </section>{/* End Values Section */}
            <div>
              <div className='container p-5 justify-content-center align-items-center'>
                  <div className='row'>
                    <img className='img-fluid' src='assets/img/Capture.jpg' width={500}/>
                  </div>
              </div>
            </div>
      
            
            
          </main>{/* End #main */}
       
        </div>
    )
}

export default Home;