import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import rightArrow from '@/../public/orange-arrow.png'
import Image from 'next/image';
import Link from 'next/link';


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

async function serviceApi() {
        let result = await fetch(`https://reassuring-fish-5cf727fbdc.strapiapp.com/api/services?populate=*`);
        result = await result.json();
        return result.data;
}

export default async function Services() {

    const servicesData = await serviceApi();

    return (
        <div>
            <Container className='service-component-wrapper'>
                <div className="my-text">
                    <p className={poppins400.className}>Our Solution</p>
                    <h2 className={roboto.className}>Our Popular IT Solution</h2>
                </div>
                <div className='service-card-container'>
                    <Row md={3}>
                        {
                            servicesData.map((item)=>{
                                return <Col  key={item.id} className='service-card-wrapper'>
                                <div className='my-service-card'>
                                    <div className='service-image-cont'>
                                        <Image src={`${item.attributes.service_img.data.attributes.formats.thumbnail.url}`} width={50} height={50} alt='Ui and Ux' />
                                    </div>
                                </div>
                                <div className='service-details-flex'>
                                    <h3 className={roboto.className}>{item.attributes.service_title}</h3>
                                    <p className={poppins400.className}>{item.attributes.short_description}</p>
                                    <Link href={`/service/${item.id}`} id='my-read-more-btn-service' className={poppins500.className} ><div>Read More </div><Image src={rightArrow} width={25} alt='Right arrow'/> </Link>
                                </div>
                            </Col>
                            })
                        }
                        
                    </Row>
                </div>
            </Container>
        </div>
    )
}
