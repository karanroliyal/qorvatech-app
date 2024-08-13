import React from 'react'
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import about1 from '../../../public/about2-img.png'
import { Col, Row, Container } from 'react-bootstrap';
import Image from 'next/image';
import ReadMoreBtn from '../../../components/ReadMoreBtn'
import AboutProjectDone from '../../../components/AboutProjectDone'
import MyTopBanner from '@/../components/MyTopBanner'
import MyTeam from '@/../components/MyTeam'
import Testimonials from '@/../components/Testimonials';

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
        <div className='qorvatech-about-page-wrapper'>
            {/* Top banner  */}
            <MyTopBanner Title="About" pageName="About" slug="about" />
            {/* Top banner  */}



            <Container className='my-about-page-container'>
                <Row>
                    <Col>
                        <Image src={about1} alt='about-image' />
                    </Col>
                    <Col>
                        <div className="about-company">
                            <p className={poppins400.className}>About Company</p>
                            <h2 className={roboto.className} >We Are Always At
                                Your Service.</h2>
                            <p className={poppins400.className} id="grey-para">There are many variations of passages of lorem Ipsum available but the majority have suffered alteration in some form by inject rated humour or randomised this like.</p>
                            <div className="left-border">
                                <h5>Highest quality security, Network uptime, fast output. Unlimited scale and customizing possibilities.</h5>
                                <h6>Murad Hasan, <span>Head Of Idea</span></h6>
                            </div>
                            <ReadMoreBtn btnName="Learn More" slug="service" />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* my project done section  */}
            <AboutProjectDone />
            {/* my project done section  */}

            {/* My Team Component  */}
            <MyTeam />
            {/* My Team Component  */}
            {/* My Testimonial component  */}
            <Testimonials />
            {/* My Testimonial component  */}

        </div>
    )
}
