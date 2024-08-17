import React from 'react'
import MyTopBanner from '@/../components/MyTopBanner'
import { Container, Row, Col } from 'react-bootstrap'
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import map from '@/../public/maps-and-flags.png'
import mail from '@/../public/email.png'
import call from '@/../public/phone-call.png'
import indiaGate from '@/../public/india-gate.jpg'
import usa from '@/../public/usa.jpg'
import indiaFlag from '@/../public/india.png'
import usaFlag from '@/../public/united-states-of-america.png'
import mapBlack from '@/../public/map-black.png'
import callBlack from '@/../public/call-black.png'
import mailBlack from '@/../public/email-black.png'
import Image from 'next/image';


const poppins = Poppins({
    weight: '300',
    subsets: ['latin'],
    display: 'swap'
})
const poppins400 = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})
const poppins500 = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap'
})
const roboto = Roboto_Slab({
    weight: '500',
    subsets: ['latin'],
    display: 'swap'

})



export default function page() {
    return (
        <div className='contact-page-wrapper'>
            {/* Top banner  */}
            <MyTopBanner Title="Contact" slug="contact" />
            {/* Top banner  */}


            <Container className='my-contact-box'>
                <div className='my-contact-flex-container'>

                    <div className='contact-info'>
                        <h2>Conatct Information</h2>
                        <Col className='contact-info-details'>
                            <h5 className={roboto.className}>Office Address</h5>
                            <div className='contact-details'>
                                <Image src={map} width={35} alt='map' />
                                <p className={poppins400.className} > H-25, G1, Sector - 63,
                                    Noida (UP) 201301, India</p>
                            </div>
                        </Col>
                        <hr />
                        <Col className='contact-info-details'>
                            <h5 className={roboto.className}>Email Address</h5>
                            <div className='contact-details'>
                                <Image src={mail} width={35} alt='map' />
                                <p className={poppins400.className} > H-25, G1, Sector - 63,
                                    Noida (UP) 201301, India</p>
                            </div>
                        </Col>
                        <hr />
                        <Col className='contact-info-details'>
                            <h5 className={roboto.className}>Phone Number</h5>
                            <div className='contact-details'>
                                <Image src={call} width={35} alt='map' />
                                <p className={poppins400.className} > H-25, G1, Sector - 63,
                                    Noida (UP) 201301, India</p>
                            </div>
                        </Col>
                    </div>

                    <div className='contact-form'>
                        <form className='my-contact-form'>
                            <div className='two-form-section'>
                                <label className='form-flex'>
                                    Your Name
                                    <input type="text" name="name" placeholder='Enter your name' />
                                </label>
                                <label className='form-flex'>
                                    Email Address
                                    <input type="email" name="email" placeholder='Enter email address' />
                                </label>
                            </div>
                            <div className='two-form-section'>
                                <label className='form-flex'>
                                    Conatct Number
                                    <input type="number" name="name" placeholder='Enter contact number' />
                                </label>
                                <label className='form-flex'>
                                    Select Services
                                    <select name="cars" id="cars" form="carform">
                                        <option >Select Services</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Mobile and Web App">Mobile and Web App</option>
                                        <option value="E-commerce">E-commerce</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="While Label PPC">While Label PPC</option>
                                        <option value="SMM">SMM</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </label>
                            </div>
                            <div className='two-form-section-textarea'>
                                <label className='form-flex'>
                                    Your Message
                                    <textarea name="message" rows="4" cols="50" placeholder='Write your message'></textarea>
                                </label>
                            </div>
                            <input id='submit-btn' className={poppins400.className} type="submit" value="Send Message" />
                        </form>
                    </div>

                </div>
            </Container>


            <Container className='Qorvatech-locations'>
                <div className="my-text">
                    <p className={poppins400.className}>Find Us</p>
                    <h2 className={roboto.className}>Our Offices</h2>
                </div>
                <Row >
                    <Col className='my-loaction-card-padding'>
                        <div className='my-loaction-card-flex'>
                            <Image className='country-image'  src={indiaGate} alt='india' width={200} />
                            <div className='information-of-contact'>
                                <Image className='flag-image' src={indiaFlag} width={30} alt='india-flag' />
                                <div className='flex-info'>
                                    <Image src={mapBlack} width={20} alt='map' />
                                    <p>H-25, G1, Sector - 63,
                                        Noida (UP) 201301, India</p>
                                </div>
                                <div className='flex-info'>
                                    <Image src={callBlack} width={20} alt='map' />
                                    <p>+91 120 434 0634</p>
                                </div>
                                <div className='flex-info'>
                                    <Image src={mailBlack} width={20} alt='map' />
                                    <p>info@qorvatech.com</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='my-loaction-card-padding'>
                        <div  className='my-loaction-card-flex'>
                            <Image className='country-image'  src={usa} alt='india' width={200} />
                            <div className='information-of-contact'>
                                <Image className='flag-image' src={usaFlag} width={30} alt='india-flag' />
                                <div className='flex-info'>
                                    <Image src={mapBlack} width={20} alt='map' />
                                    <p> 433 N Camden Drive, Suite 600, Beverly Hills, CA 90210</p>
                                </div>
                                <div className='flex-info'>
                                    <Image src={callBlack} width={20} alt='map' />
                                    <p> +1 310 598 2192</p>
                                </div>
                                <div className='flex-info'>
                                    <Image src={mailBlack} width={20} alt='map' />
                                    <p>info@qorvatech.com</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


            {/* Qorvatech map  */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9984547165245!2d77.37228438143752!3d28.629808412923314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5db4f85fc67%3A0x8ced0faae9ae90af!2sQorvatech%20-%20Best%20Digital%20Marketing%20Company%20in%20Noida%20(Delhi%20NCR)!5e0!3m2!1sen!2sus!4v1722685952115!5m2!1sen!2sus" height="450" style={{ border: '0', width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            {/* Qorvatech map  */}


            {/* Qorvatech Both map of India and Usa  */}
            {/* <Row>
                <Col>
                    <div className='my-map-location-name'>
                        <Image src={mapBlack} width={35} alt='map-icon' />
                        <h3>INDIA</h3>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9984547165245!2d77.37228438143752!3d28.629808412923314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5db4f85fc67%3A0x8ced0faae9ae90af!2sQorvatech%20-%20Best%20Digital%20Marketing%20Company%20in%20Noida%20(Delhi%20NCR)!5e0!3m2!1sen!2sus!4v1722685952115!5m2!1sen!2sus" height="450" style={{ border: '0', width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
                <Col>
                    <div className='my-map-location-name'>
                        <Image src={mapBlack} width={35} alt='map-icon' />
                        <h3>USA</h3>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.828707281364!2d-118.40187100000001!3d34.070612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc0807d5d42f%3A0xd0618eee139e138c!2s433%20N%20Camden%20Dr%20%23600a%2C%20Beverly%20Hills%2C%20CA%2090210%2C%20USA!5e0!3m2!1sen!2sin!4v1722686615921!5m2!1sen!2sin" height="450" style={{ border: '0', width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row> */}
            {/* Qorvatech Both map of India and Usa  */}

        </div>
    )
}