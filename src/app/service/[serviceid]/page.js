import React from 'react'
import ReactMarkdown from "react-markdown";
import MyTopBanner from '@/../components/MyTopBanner'
import { Container } from 'react-bootstrap';

async function singleServiceApi(id) {
    try {
        let result = await fetch(`http://127.0.0.1:1337/api/services/${id}?populate=*`);
        result = await result.json();
        result = [result.data];
        return result
    } catch (error) {
        console.log("Getting this error : ",error)
    }
}

export default async function page({ params }) {

    const singleServiceData = await singleServiceApi(params.serviceid)
    // const content = singleServiceData[0].attributes.heading

    return (
        <div className='single-service-page-wrapper'>

            {/* Top banner  */}
            <MyTopBanner Title={singleServiceData[0].attributes.service_title} slug={`service/${params.serviceid}`} />
            {/* Top banner  */}

            <Container className='single-service-page'>
                {/* <div className='service-image-cont'>
                    <Image src={digital} alt='digital' width={900} height={600} />
                </div> */}
                <ReactMarkdown className='react-markdown-service'>
                    {singleServiceData[0].attributes.heading}
                </ReactMarkdown>
            </Container>
        </div>
    )
}