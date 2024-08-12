import React from 'react'
import { Container, Row } from 'react-bootstrap'


export default function SkeletonBody() {
    return (
        <div className='Skeleton-body-wrapper'>
            <div className='blog-list-wrapper'>
                <Container>
                    <Row className='blog-content-container-row' >
                        <div className='blog-content-container' >
                            <div className='Skeleton-body-Image-blog'  >

                            </div>
                            <div className='blog-list-flex'>
                                <p id='published-at' className='Skeleton-body-date-blog' ></p>
                                <h3 className='Skeleton-body-Heading-blog' ></h3>
                                {/* <p id='blog-description' className={poppins400.className}>{item.attributes.description.slice(0,260)}</p> */}
                                <p className='Skeleton-body-Para-blog' id='blog-description' ></p>

                            </div>
                        </div>
                    </Row>
                    <Row className='blog-content-container-row' >
                        <div className='blog-content-container' >
                            <div className='Skeleton-body-Image-blog'  >

                            </div>
                            <div className='blog-list-flex'>
                                <p id='published-at' className='Skeleton-body-date-blog' ></p>
                                <h3 className='Skeleton-body-Heading-blog' ></h3>
                                {/* <p id='blog-description' className={poppins400.className}>{item.attributes.description.slice(0,260)}</p> */}
                                <p className='Skeleton-body-Para-blog' id='blog-description' ></p>

                            </div>
                        </div>
                    </Row>
                    <Row className='blog-content-container-row' >
                        <div className='blog-content-container' >
                            <div className='Skeleton-body-Image-blog'  >

                            </div>
                            <div className='blog-list-flex'>
                                <p id='published-at' className='Skeleton-body-date-blog' ></p>
                                <h3 className='Skeleton-body-Heading-blog' ></h3>
                                {/* <p id='blog-description' className={poppins400.className}>{item.attributes.description.slice(0,260)}</p> */}
                                <p className='Skeleton-body-Para-blog' id='blog-description' ></p>

                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
