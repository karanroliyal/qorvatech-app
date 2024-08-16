import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import news1 from '../public/portfolio4.jpg'
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import Link from 'next/link';

export async function blogApi() {
        let result = await fetch(`http://127.0.0.1:1337/api/blogs?populate=*`);
        result = await result.json();
        return result.data
}
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


export default async function NewsAndBlog() {
    const blog = await blogApi();
    return (
        <div className='my-flex-hshbsdhsdjksd'>
            {
                blog.map((item) => {
                    return <div key={item.id} className='news-and-blog-container-card'>
                            <Image src={`http://127.0.0.1:1337${item.attributes.image.data[0].attributes.formats.thumbnail.url}`} alt="blog 1" width={900} height={600} />
                            <div className='news-and-blog-text'>
                                <h5 className={roboto.className}>{item.attributes.title.length<60?item.attributes.title:`${item.attributes.title.slice(0,60)}...`}</h5>
                                <h6 className={poppins400.className}> <Link href={`blog/${item.id}`}> Read More </Link> </h6>
                            </div>
                    </div>
                })
            }



        </div>



    )
}
