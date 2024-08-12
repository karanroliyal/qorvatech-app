import React from 'react'
import {  Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import Link from 'next/link';
import { Col, Row, Container } from 'react-bootstrap';
import Image from 'next/image';
import Layer from "@/../public/layers.png"
import Scholor from "@/../public/graduate.png"
import Coffee from "@/../public/coffee-cup.png"
import Handshake from "@/../public/handshake.png"
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
export default function AboutProjectDone() {
  return (
    <div className='qorvatech-about-page-wrapper'>
    <section className='about-projects-done'>
                <Container>
                    <Row>
                        <Col className='my-container-of-about-projects'>
                            <Image src={Layer} alt='layer' width={60} />
                            <div>
                                <h2 className={roboto.className} id="karan">100 +</h2>
                                <p>Project Done</p>
                            </div>
                        </Col>
                        <Col className='my-container-of-about-projects'>
                            <Image src={Handshake} alt='layer' width={60} />
                            <div>
                                <h2 className={roboto.className} id="karan">516 +</h2>
                                <p>Happy Customers</p>
                            </div>
                        </Col>
                        <Col className='my-container-of-about-projects'>
                            <Image src={Coffee} alt='layer' width={60} />
                            <div>
                                <h2 className={roboto.className} id="karan">180 +</h2>
                                <p>Cup of Tea</p>
                            </div>
                        </Col>
                        <Col className='my-container-of-about-projects'>
                            <Image src={Scholor} alt='layer' width={60} />
                            <div>
                                <h2 className={roboto.className} id="karan">200 +</h2>
                                <p>Award Won</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
            </div>
  )
}
