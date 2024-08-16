import React, { lazy, Suspense } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import SkeletonBody from './SkeletonBody';
import Link from 'next/link';
import SearchBlog from '@/../components/SearchBlog'


// import BlogList from './BlogList';
const BlogList = lazy(() => import("@/../components/BlogList"))


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
export async function blogInfoApi() {
        let result = await fetch(`https://reassuring-fish-5cf727fbdc.strapiapp.com/api/blogs`);
        result = await result.json()
        return result.data
}


export default async function Blogpage() {

    const blogInfo = await blogInfoApi()

    return (

        <div className='Blog-page-wrapper'>
            <Container className='blog-page-container'>
                <Row>
                    <Col className='blog-section'>
                        <Suspense fallback={<SkeletonBody />}>
                            <BlogList />
                        </Suspense>
                    </Col>
                    <Col className='side-section'>
                        {/* <div className='search-box-container'>
                            <h5>Search</h5>
                            <input type='text' className='Blog-Search-box' /><span className='span-search'>Search</span>
                        </div> */}
                        <SearchBlog />
                        <div className='Recent-blog-container'>
                            <h4 className={roboto.className}>Recent Posts</h4>
                            <div className='list-of-recent-blogs'>
                                {
                                    blogInfo.map((item) => {
                                        return <div key={item.id}><Link href={`blog/${item.id}`} className='Recent-Blog-Link' ><p className={poppins.className}>{item.attributes.title}</p></Link> </div>
                                    })
                                }
                                {/* <p className={poppins.className}>How Strategic IT Planning Can Drive Business Growth</p>
                                <p className={poppins.className}>Easy Innovation Using Best Software Company</p>
                                <p className={poppins.className}>A Quick Solutions For Daily Problem Solve</p>
                                <p className={poppins.className}>Ways Capitalize On Market Fruit Problem</p> */}
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
