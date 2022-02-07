import React, { Component } from 'react';

import $ from "jquery";
import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import scan  from '../../images/scan.png';
import play  from '../../images/play.png';
import bnrimg  from '../../images/bnrimg.png';
import cirlogo  from '../../images/cirlogo.png';
import web1  from '../../images/web1.png';
import web2  from '../../images/web2.png';
import web3  from '../../images/web3.png';
import web4  from '../../images/web4.png';
import web5  from '../../images/web5.png';
import web6  from '../../images/web6.png';



class Contact extends Component{ 
	constructor(props) {
	  super(props);
	  this.state = {
	  };
  
	}
	
	componentDidMount = () =>{

	
				
	  }

	render(){
		return(
			<div>
			<div className="main-bg">
			<Header />
			 
			  <section id='contact us'>
                  <div className='contact-main-wrap'>
                  <div className='container-fluid'>
                  <div className='contact-wrap'>
                          <div className='contact-left'>
                              <h1>Our Contacts</h1>
                              <h3>+91 805 3143 035</h3>
                              <p>info@himotechglobal.com</p>
                          </div>
                          <div className='contact-line1'></div>
                          <div className='contact-cnter'>
                              <h1>Company Address</h1>
                              <div className='c-add-line'></div>
                              <p>Akshya Nagar 1st Block 1st Cross,<br></br>
                               Rammurthy nagar, Bangalore-560016</p>
                          </div>
                          <div className='contact-line2'></div>
                          <div className='contact-right'>
                              <h1>Opening Hours</h1>
                              <div className='o-hour-line'></div>
                              <p>
                                Mon - Sat<br></br>
                                10:00am - 06:00pm 
                              </p>
                          </div>
                      </div>
                      <div className='contact-bottom-line'></div>
                  </div>
                  </div>
              </section>



				  <section id='form'>
					  <form>
						  <div className='form-main-wrap'>
							  <div className='container-fluid'>
							  <div className='form-hding'>
								  <h1>Contact Us</h1>
							  </div>
							  <div className='form'>
								  <ul className='form-list'>
									  <li>
										  <div className='form-cont'>
											  <h3>FILL FORM</h3>
											  <div className='form-line'></div>
										  </div>
									  </li>
									  <li>
										  <div className='form-cont'>
											  <input  text='text' placeholder='Name'></input>
											  <div className='form-line2'></div>
										  </div>
									  </li>
									  <li>
										  <div className='form-cont'>
											  <input  text='text' placeholder='Email'></input>
											  <div className='form-line2'></div>
										  </div>
									  </li>
									  <li>
										  <div className='form-cont'>
											  <input  text='text' placeholder='Subject'></input>
											  <div className='form-line2'></div>
										  </div>
									  </li>
									  <li>
										  <div className='form-cont'>
											  <input  text='text' placeholder='Text'></input>
											  <div className='form-line2'></div>
										  </div>
									  </li>
									  <li>
										  <div className='send-m-but'>
											   <a href='#'>SEND MESSAGE</a>
											   <p>Your Data Secured</p>
										  </div>
									  </li>
								  </ul>
							  </div>
							  </div>
						  </div>
					  </form>
				  </section>
			   
			 
			<Footer />	
			
			</div>

			</div>
		);
	}

}
export default Contact;