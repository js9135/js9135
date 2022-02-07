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



class Services extends Component{ 
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
			 

 

			   
				  <div className='benefit-main-wrap'>
					  <div className='container-fluid'>
						 <div className='benefitbg'>
						 
						   
						  <section id='services'>
							  <div className='services-hding'>
								  <h1>Our Services</h1>
								  <h3>CHANGE YOUR WORLD</h3>
								  <p>
								  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those<br></br>
                                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also<br></br>
                                  reproduced in their exact original form, accompanied by English versions from the 1914 translation<br></br>
                                  by H. Rackham.
								  </p>
							  </div>
							  <div className='services-main-wrap'>
								  <div className='services-wrap'>
									   <div className='services-box'>
                                        <div className='box-cont1'>
										<div className='box-cont-hding'>
										<h3>Web designing</h3>
										<img src={web1}></img>
										</div>
										</div>
										<p>It uses a dictionary of over 200
                                           Latin words, combined with a handful
                                           of model sentence structures, to
                                           generate Lorem Ipsum which looks
                                           reasonable. The generated Lorem
                                           Ipsum is therefore always free from
                                           repetition, injected humour, or non
                                          -characteristic words etc.</p>
									   </div>
									   <div className='services-box'>
                                        <div className='box-cont2'>
										<div className='box-cont-hding'>
										<h3>Website development</h3>
										<img src={web2}></img>
										</div>
										</div>
										<p>It uses a dictionary of over 200
                                           Latin words, combined with a handful
                                           of model sentence structures, to
                                           generate Lorem Ipsum which looks
                                           reasonable. The generated Lorem
                                           Ipsum is therefore always free from
                                           repetition, injected humour, or non
                                          -characteristic words etc.</p>
									   </div>
									   <div className='services-box'>
                                        <div className='box-cont3'>
										<div className='box-cont-hding'>
										<h3>Game development</h3>
										<img src={web3}></img>
										</div>
										</div>
										<p>It uses a dictionary of over 200
                                           Latin words, combined with a handful
                                           of model sentence structures, to
                                           generate Lorem Ipsum which looks
                                           reasonable. The generated Lorem
                                           Ipsum is therefore always free from
                                           repetition, injected humour, or non
                                          -characteristic words etc.</p>
									   </div>
									   
								  </div>
								  <div className='services-wrap'>
									   <div className='services-box'>
                                        <div className='box-cont4'>
										<div className='box-cont-hding'>
										<h3>Agile tool development</h3>
										<img src={web4}></img>
										</div>
										</div>
										<p>It uses a dictionary of over 200
                                           Latin words, combined with a handful
                                           of model sentence structures, to
                                           generate Lorem Ipsum which looks
                                           reasonable. The generated Lorem
                                           Ipsum is therefore always free from
                                           repetition, injected humour, or non
                                          -characteristic words etc.</p>
									   </div>
									   <div className='services-box'>
                                        <div className='box-cont5'>
										<div className='box-cont-hding'>
										<h3>Blockchain development</h3>
										<img src={web5}></img>
										</div>
										</div>
										<p>It uses a dictionary of over 200
                                           Latin words, combined with a handful
                                           of model sentence structures, to
                                           generate Lorem Ipsum which looks
                                           reasonable. The generated Lorem
                                           Ipsum is therefore always free from
                                           repetition, injected humour, or non
                                          -characteristic words etc.</p>
									   </div>
									   <div className='services-box'>
                                        <div className='box-cont6'>
										<div className='box-cont-hding'>
										<h3>API Development</h3>
										<img src={web6}></img>
										</div>
										</div>
										<p>It uses a dictionary of over 200
                                           Latin words, combined with a handful
                                           of model sentence structures, to
                                           generate Lorem Ipsum which looks
                                           reasonable. The generated Lorem
                                           Ipsum is therefore always free from
                                           repetition, injected humour, or non
                                          -characteristic words etc.</p>
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
export default Services;