import Image from 'next/image'
import React from 'react'
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import { Row } from 'react-bootstrap'
import Link from 'next/link'
import SkeletonBody from '@/../components/SkeletonBody'


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

export async function blogListApi() {
    let result = await fetch(`https://reassuring-fish-5cf727fbdc.strapiapp.com/api/blogs?populate=*`)
    result = await result.json();
    return result.data
}

export default async function BlogList() {



  const apiData = await blogListApi()



  return (
    <div className='blog-list-wrapper'>
      {
        apiData.map((item) => {
          return <Row className='blog-content-container-row' key={item.id}>
            <div className='blog-content-container' >
              <div className='blog-list-image-cover' >

                <Image className='blog-list-image' src={`${item.attributes.image.data[0].attributes.formats.small.url}`} width={900} height={600} alt='blog-image' />
              </div>
              <div className='blog-list-flex'>
                <p id='published-at' className={poppins400.className}>Published at - <span className={roboto.className}>{item.attributes.date}</span></p>
                <Link href={`blog/${item.id}`} className='Heading-Link'><h3 className={roboto.className}>{item.attributes.title}</h3></Link>
                {/* <p id='blog-description' className={poppins400.className}>{item.attributes.description.slice(0,260)}</p> */}
                <p id='blog-description' className={poppins400.className}>{item.attributes.description.length > 260 ? `${item.attributes.description.slice(0, 260)}...` : item.attributes.description}</p>

                <Link href={`blog/${item.id}`}> Read More </Link>
              </div>
            </div>
          </Row>
        })
      }

    </div>
  )
}
