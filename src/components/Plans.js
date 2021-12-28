import React from 'react';

function Plans(){
    return(
        <div>
          <div className='container my-5 p-5'>
            <h2 className='text-center display-2 my-3' style={{ color:'rgb(116,96,133)', fontWeight:'900' }}>Plans to suit your business</h2>
            <h4 className='text-center my-3' style={{ color:'rgb(116,96,133)', fontWeight:'400' }}>All pricing plans cover the accounting essentials, with room to grow.</h4>
            <h6 className='text-center my-3' style={{ color:'rgb(116,96,133)', fontWeight:'400' }}>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-3'>✓   Safe and secure</div>
              <div className='col-md-3'>✓   Cancel with one month's notice</div>
              <div className='col-md-3'>✓   24/7 online support</div>  
              <div className='col-md-1'></div>
            </div>
            </h6>
          </div>
            {/* ======= Pricing Section ======= */}
          <section id="pricing" className="bb pricing">
            <div className="container">
              <div className="section-title">
                {/* <h2 data-aos="fade-up" className='text-white'>Our Plans</h2> */}
              </div>
              <div className="row">
               
                <div className="col-lg-4 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={100}>
                  <div className="box">
                    <h3>Starter</h3>
                    <h4>100 <sup>AED</sup><span> / month</span></h4>
                    <ul>
                      <li>Free Trial Included</li>
                      <li>Send quotes and 20 invoices†</li>
                      <li>Enter 5 bills</li>
                      <li>Reconcile bank transactions</li>
                      <li>Capture bills and receipts</li>
                      <li>Short-term cash flow and business snapshot</li>
                      <li>Track Projects</li>
                      <li className="na">Budget Summary</li>
                      <li className="na">Sales and Purchase Reports</li>
                      <li className="na">Balance Sheet</li>
                      <li className='na'>Inventory Management</li>
                      <li className="na">Finance Management</li>
                    </ul>
                    <div className="">
                      <a href="/login" className="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={200}>
                  <div className="box">
                    <h3>Standard</h3>
                    <h4>140<sup> AED</sup><span> / month</span></h4>
                    <ul>
                      <li>Free Trial Included</li>
                      <li>Send quotes and 20 invoices†</li>
                      <li>Enter 5 bills</li>
                      <li>Reconcile bank transactions</li>
                      <li>Capture bills and receipts</li>
                      <li>Short-term cash flow and business snapshot</li>
                      <li>Track Projects</li>
                      <li>Budget Summary</li>
                      <li>Sales and Purchase Reports</li>
                      <li className="na">Balance Sheet</li>
                      <li className='na'>Inventory Management</li>
                      <li className="na">Finance Management</li>
                    </ul>
                    <div>
                      <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300}>
                  <div className="box">
                    <span className="advanced">Advanced</span>
                    <h3>Ultimate</h3>
                    <h4>200<sup> AED</sup><span> / month</span></h4>
                    <ul>
                    <li>Free Trial Included</li>
                      <li>Send quotes and unlimited invoices</li>
                      <li>Enter 5 bills</li>
                      <li>Reconcile bank transactions</li>
                      <li>Capture bills and receipts</li>
                      <li>Short-term cash flow and business snapshot</li>
                      <li>Track Projects</li>
                      <li>Budget Summary</li>
                      <li>Sales and Purchase Reports</li>
                      <li>Balance Sheet</li>
                      <li>Inventory Management</li>
                      <li>Finance Management</li>
                    </ul>
                    <div>
                      <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Pricing Section */}
          {/* ======= F.A.Q Section ======= */}
          <section id="faq" className="faq section-bg">
            <div className="container">
              <div className="section-title">
                <h2 data-aos="fade-up" style={{ color:'rgb(116,96,133)', fontWeight:'900' }}>F.A.Q</h2>
                <p data-aos="fade-up" style={{ color:'rgb(116,96,133)', fontWeight:'900' }}>Frequently Asked Questions</p>
              </div>
              <div className="faq-list">
                <ul style={{ color:'rgb(116,96,133)', fontWeight:'900' }}>
                  <li data-aos="fade-up">
                    <i style={{ color:'rgb(116,96,133)', fontWeight:'900' }} className="bx bx-help-circle icon-help" /> <a style={{ color:'rgb(116,96,133)', fontWeight:'900' }} data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Will my data be safe and protected? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                    <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                      <p>
                      We're committed to the security of your data and provide multiple layers of protection for the personal and financial information you trust to Analytics. Find out more about Analytics commitments to data protection and data security.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay={100}>
                    <i style={{ color:'rgb(116,96,133)', fontWeight:'900' }} className="bx bx-help-circle icon-help" /> <a style={{ color:'rgb(116,96,133)', fontWeight:'900' }} data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Can I pay annually? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                    <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                      <p>
                      You'll receive your invoice at the end of your monthly billing period. Payment will be taken on the date shown on your invoice using the payment details entered when you purchased your subscription. If you’ve incurred usage charges for Analytics or you have a chargeable direct bank feed – these charges will be invoiced for the previous month.
                      </p>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
          </section>{/* End F.A.Q Section */}
        </div>
    )
}

export default Plans;