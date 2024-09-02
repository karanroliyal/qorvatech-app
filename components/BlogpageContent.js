import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import BlogContent from './BlogContent'
import BlogList from './BlogList'
import SearchBlog from '@/../components/SearchBlog'


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

export default function BlogpageConatent({ id }) {
    return (

        <div className='Blog-page-wrapper'>
            <Container className='blog-page-container'>
                <Row>
                    <Col className='blog-section'>

                        <BlogContent id={id} />

                    </Col>
                    <Col className='side-section'>
                        <SearchBlog />
                        <div className='Recent-blog-container'>
                            <h4 className={roboto.className}>Recent Posts</h4>
                            <div className='list-of-recent-blogs'>
                                <p className={poppins.className}>How Strategic IT Planning Can Drive Business Growth</p>
                                <p className={poppins.className}>Easy Innovation Using Best Software Company</p>
                                <p className={poppins.className}>A Quick Solutions For Daily Problem Solve</p>
                                <p className={poppins.className}>Ways Capitalize On Market Fruit Problem</p>
                            </div>
                        </div>
                        <div className='Recent-blog-container'>
                            <h4 className={roboto.className}>Date</h4>
                            <div className='list-of-recent-blogs'>
                                <p className={poppins.className}>2024/03/01</p>
                            </div>
                        </div>
                        <div className='Recent-blog-container'>
                            <h4 className={roboto.className}>Categoies</h4>
                            <div className='list-of-recent-blogs'>
                                <p className={poppins.className}>Networking</p>
                                <p className={poppins.className}>Cloud Computing</p>
                                <p className={poppins.className}>Web Design</p>
                                <p className={poppins.className}>Business</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
