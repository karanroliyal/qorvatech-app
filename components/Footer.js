'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import QorvatechLogo from '@/../public/footer-logo.png'
import Facebook from '@/../public/facebook.png'
import Instagram from '@/../public/instagram.png'
import Youtube from '@/../public/youtube.png'
import LinkedIn from '@/../public/linkedIn.png'
import Arrow from '@/../public/right-arrow.png'
import indiaFlag from '@/../public/india.png'
import usaFlag from '@/../public/united-states-of-america.png'
import australiaFlag from '@/../public/AustrliaFlag.png'
import Map from '@/../public/maps-and-flags.png'
import Phone from '@/../public/phone-call.png'
import Link from 'next/link'
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import { Container, Row, Col } from 'react-bootstrap'
import { data } from 'jquery'

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


export default function Footer() {

    const [service, setService] = useState([])

    // No of service shown in footer 
    const noOfServices = 5

    const myServiceApi = async () => {
        let result = await fetch(`http://localhost:1337/api/services?populate=*?pagination[page]=1&pagination[pageSize]=${noOfServices}`);
        result = await result.json()
        const data = result.data
        setService(data)
    }

    useEffect(() => {
        myServiceApi()
    }, [])

    return (
        <div className='footer-section-wrapper'>
            <section className='footer-section'>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <div className='Qorvatech-footer-logo-container'>
                                    <Link href={"/"}><Image src={QorvatechLogo} width={250} alt='Qorvatech logo' /></Link>
                                </div>
                                <div className='Footer-email-container'>
                                    <p className={poppins400.className}>Send Us an Email:</p>
                                    <Link href={"mailto:info@qorvatech.com"}>info@qorvatech.com</Link>
                                </div>
                                <div className='Footer-social-media-container'>
                                    <p className={poppins400.className}>Follow us</p>
                                    <div className='Logo-image-container'>
                                        <Link href={'https://www.facebook.com/QorvatechPvtLtd'} target="_blank">
                                            <div className='logo-image-cover'>
                                                <Image src={Facebook} alt='Facebook' width={25} />
                                            </div>
                                        </Link>
                                        <Link href={'https://www.instagram.com/qorvatechpvtltd/?hl=en'} target="_blank">
                                            <div className='logo-image-cover'>
                                                <Image src={Instagram} alt='Instagram' width={25} />
                                            </div>
                                        </Link>
                                        <Link href={'https://www.linkedin.com/company/qorvatechpvtltd/'} target="_blank">
                                            <div className='logo-image-cover'>
                                                <Image src={LinkedIn} alt='LinkedIn' width={25} />
                                            </div>
                                        </Link>
                                        <Link href={'https://www.youtube.com/channel/UCjcUryoUIYsS52g1dEdc5FA'} target="_blank">
                                            <div className='logo-image-cover'>
                                                <Image src={Youtube} alt='Youtube' width={25} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='Footer-Qick-Links-container'>
                                <p className={poppins400.className}>Quick Links</p>
                                <ul className={poppins.className}>
                                    <li><Image src={Arrow} alt='arrow' width={10} /><Link href={'/'}>Home</Link></li>
                                    <li><Image src={Arrow} alt='arrow' width={10} /><Link href={'/service'}>Service</Link></li>
                                    <li><Image src={Arrow} alt='arrow' width={10} /><Link href={'/about'}>About us</Link></li>
                                    <li><Image src={Arrow} alt='arrow' width={10} /><Link href={'/blog'}>Blog</Link></li>
                                    <li><Image src={Arrow} alt='arrow' width={10} /><Link href={'/contact'}>Contact us</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className='Footer-Qick-Links-container'>
                                <p className={poppins400.className}>Services</p>
                                <ul className={poppins.className}>
                                    {
                                        service.map((item) => {
                                            return <li key={item.key}><Image src={Arrow} alt='arrow' width={10} /><Link href={'/'}>{item.attributes.service_title}</Link></li>
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className='Footer-Contact-container' >
                                <p className={poppins400.className}>Contact</p>
                            </div>
                            <Row>
                                <Col style={{width:'440px'}}>
                                    <div>
                                        <div className='Footer-flex-contact'>
                                            <Image src={indiaFlag} width={30} alt='India Flag' />
                                            <p className={poppins400.className}>India</p>
                                        </div>
                                        <div className='Footer-flex-contact'>
                                            <Image src={Map} width={15} alt='India Flag' />
                                            <p className={poppins.className}>H-25, G1, Sector - 63, Noida (UP) 201301, India</p>
                                        </div>
                                        <div className='Footer-flex-contact'>
                                            <Image src={Phone} width={15} alt='India Flag' />
                                            <p className={poppins.className}><Link href={"tel:+911204340634"}>+91 120-434-0634</Link></p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <div className='Footer-flex-contact'>
                                            <Image src={australiaFlag} width={30} height={20} alt='India Flag' />
                                            <p className={poppins400.className}>Australia</p>
                                        </div>
                                        <div className='Footer-flex-contact'>
                                            <Image src={Map} width={15} alt='India Flag' />
                                            <p className={poppins.className}>368 Fitzroy street, Dubbo NSW 2830</p>
                                        </div>
                                        <div className='Footer-flex-contact'>
                                            <Image src={Phone} width={15} alt='India Flag' />
                                            <p className={poppins.className}><Link href={"tel:+61424827844"}>+61 424 827 844</Link> </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <div className='Footer-flex-contact'>
                                            <Image src={usaFlag} width={30} alt='India Flag' />
                                            <p className={poppins400.className}>USA</p>
                                        </div>
                                        <div className='Footer-flex-contact'>
                                            <Image src={Map} width={15} alt='India Flag' />
                                            <p className={poppins.className}>433 N Camden Drive, Suite 600, Beverly Hills, CA 90210</p>
                                        </div>
                                        <div className='Footer-flex-contact'>
                                            <Image src={Phone} width={15} alt='India Flag' />
                                            <p className={poppins.className}><Link href={"tel:+13105982192"}>+1 310 598 2192</Link> </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div >
    )
}
