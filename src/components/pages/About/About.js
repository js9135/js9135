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
import aboutimg  from '../../images/aboutimg.png';



class About extends Component{ 
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
			 
              <section id='about'>
			  <div className='about-main-wrap'>
                <div className='about'>
                <div className='about-left-cont'>
                               <h1>About us</h1>
                               <h3>
                               WE ARE THE HOLDERS OF A BETTER TOMORROW, 
                               THE ARCHITECTS OF A SUCCESSFUL FUTURE FOR YOUR 
                               BUSINESS!
                               </h3>
                               <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                               </p>
                               <p>
                                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                               </p>
                           </div>
                        
                        
                           <div className='about-right-img'>
                               <img src={aboutimg}></img>
                           </div>
                </div>
               </div>
			  </section>

			   

			   
				  <div className='benefit-main-wrap'>
					  <div className='container-fluid'>
						 <div className='benefitbg'>
						<section id='benefit'>
						<div className='row'>
							  <div className='col-lg-9'>
								  <div className='benefits-wrap'>
									  <h1>BENEFITS</h1>
									  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                                         of classical Latin literature from 45 BC, making it over 2000 years old
									  </p>
									  <p>
									  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                                      of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                      the cites of the word in classical literature, discovered the undoubtable source.
									  </p>
									  <p>
									  very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                                       amet..", comes from a line in section 1.10.32.
									  </p>
								  </div>
							  </div>
							  <div className='col-lg-3'>
								  <div className='benefits-logo'>
									  <a href='#'><img src={cirlogo}></img></a>
								  </div>
							  </div>
						  </div>
						</section>
						 </div>
					  </div>
				  </div>

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
export default About;