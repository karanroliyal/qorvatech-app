import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image';
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import SoftwareDevelopment from "@/../public/backend.png"
import CyberSecurity from "@/../public/cyber-criminal.png"
import DataRecovery from "@/../public/disaster-recovery.png"
import WebDevelopment from "@/../public/application.png"
import BusinessConsulting from "@/../public/consultant.png"
import AnaylitcsSolution from "@/../public/analysis.png"
import rightArrow from '@/../public/orange-arrow.png'
import Link from 'next/link';

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

export default function SolutionServices() {
    return (
        <div className="service-bg-image" >


            <Container className="service-section-homepage">
                <div className="my-text">
                    <p className={poppins400.className}>Services</p>
                    <h2 className={roboto.className}>We Offer All Types Of IT<br /> Solution Services</h2>
                </div>
                <Row className="my-card-row">
                    <Col>
                        <div className="my-service-card-border">
                            <div><Image src={SoftwareDevelopment} width={50} height={50} alt="Software Development" /></div>
                            <div>
                                <h5 className={roboto.className}>Software Development</h5>
                                <p className={poppins400.className}>At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.</p>
                                <Link className={poppins400.className} href={"#"} id="service-section-Link" ><div>Read more</div> <div><Image src={rightArrow} width={25} alt='Right arrow' /> </div></Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="my-service-card-border">
                            <div><Image src={CyberSecurity} width={50} height={50} alt="cyber security" /></div>
                            <div>
                                <h5 className={roboto.className}>Cyber Security</h5>
                                <p className={poppins400.className}>At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.</p>
                                <Link className={poppins400.className} href={"#"} id="service-section-Link" ><div>Read more</div> <div><Image src={rightArrow} width={25} alt='Right arrow' /> </div></Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="my-service-card-border">
                            <div><Image src={DataRecovery} width={50} height={50} alt="data recovery" /></div>
                            <div>
                                <h5 className={roboto.className}>Data Recovery</h5>
                                <p className={poppins400.className}>At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.</p>
                                <Link className={poppins400.className} href={"#"} id="service-section-Link" ><div>Read more</div> <div><Image src={rightArrow} width={25} alt='Right arrow' /> </div></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="my-card-row">
                    <Col>
                        <div className="my-service-card-border">
                            <div><Image src={WebDevelopment} width={50} height={50} alt="Web Development" /></div>
                            <div>
                                <h5 className={roboto.className}>Web Development</h5>
                                <p className={poppins400.className}>At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.</p>
                                <Link className={poppins400.className} href={"#"} id="service-section-Link" ><div>Read more</div> <div><Image src={rightArrow} width={25} alt='Right arrow' /> </div></Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="my-service-card-border">
                            <div><Image src={BusinessConsulting} width={50} height={50} alt="Business Consulting" /></div>
                            <div>
                                <h5 className={roboto.className}>Business Consulting</h5>
                                <p className={poppins400.className}>At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.</p>
                                <Link className={poppins400.className} href={"#"} id="service-section-Link" ><div>Read more</div> <div><Image src={rightArrow} width={25} alt='Right arrow' /> </div></Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="my-service-card-border">
                            <div><Image src={AnaylitcsSolution} width={50} height={50} alt="Anaylitcs Solution" /></div>
                            <div>
                                <h5 className={roboto.className}>Anaylitcs Solution</h5>
                                <p className={poppins400.className}>At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.</p>
                                <Link className={poppins400.className} href={"#"} id="service-section-Link" ><div>Read more</div> <div><Image src={rightArrow} width={25} alt='Right arrow' /> </div></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
