'use client'
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import Image from "next/image";
import { Container, Row, Button, Col } from "react-bootstrap";
import Testimonial1 from '@/../public/testi1.jpg'
import Testimonial2 from '@/../public/testi2.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from "react";
import clientProfile from '@/../public/profile 2.jpg'



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
const roboto = Roboto_Slab({
    weight: '500',
    subsets: ['latin'],
    display: 'swap'

})




export default function Testimonials() {

    const [review, setReview] = useState([])

    const testimonialApi = async () => {
        let result = await fetch(`http://localhost:1337/api/testimonials?populate=*`);
        result = await result.json();
        setReview(result.data)
    }

    useEffect(() => {
        testimonialApi()
    }, [])




    return (
        <div className='home-wrapper'>
            <div className="testimonial-bg-image">
                <Container className="my-feedback-section-homepage">
                    <div className="my-text">
                        <p className={poppins400.className}>FEEDBACK</p>
                        <h2 className={roboto.className}>What Are They Saying <br /> About Company</h2>
                    </div>

                    <Row className="testimonial-padding">
                        <Carousel data-bs-theme="dark">

                            {

                                review.map((item) => {
                                    return <Carousel.Item className="Testimonial-Carousel-item" key={item.id} interval={2000}  >

                                        <Col >
                                            <div className="my-feedback-card">
                                                <div className="testimonial-img-name">
                                                    <div>
                                                        {/* <Image src={`http://localhost:1337${item.attributes.client_image.data.attributes.url}`} width={100} height={100} alt="testimonial client" /> */}


                                                        <Image src={clientProfile} width={100} height={100} alt="Client image" />
                                                    </div>
                                                    <div>
                                                        <h6 className={roboto.className}>{item.attributes.client_name}</h6>
                                                        <p className={poppins400.className}>{item.attributes.client_degination}</p>
                                                    </div>
                                                </div>
                                                <div className="feedback-description">

                                                    <p className={poppins400.className}>{item.attributes.client_review}</p>
                                                </div>
                                            </div>
                                        </Col>

                                    </Carousel.Item>
                                })
                            }
                        </Carousel>

                    </Row>




                </Container>
            </div>
        </div>
    )
}
