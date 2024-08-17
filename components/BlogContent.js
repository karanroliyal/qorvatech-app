import React from 'react'
import Image from 'next/image'
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import calenderImage from '@/../public/calendar (1).png'
import Profile from '@/../public/man.png'

const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
  display: 'swap'
})
const poppins400 = Poppins({
  weight: ['400','500','600','700','800'],
  subsets: ['latin'],
  display: 'swap'
})
const roboto = Roboto_Slab({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'

})

async function singleBlogApi(id){
    let result = await fetch (`https://reassuring-fish-5cf727fbdc.strapiapp.com/api/blogs/${id}?populate=*`);
    result = await result.json();
    result = [result.data]
    return result;
}


export default async function BlogContent({ id }) {

  const blogData = await singleBlogApi(id)

  return (
    <div className='blog-content-wrapper'>
      <div className='blog-s-image-container'>
        <Image src={`${blogData[0].attributes.image.data[0].attributes.formats.small.url}`} width={900} height={600} alt='single-blog' />
      </div>

      <div>
        <h2 className={roboto.className}>{blogData[0].attributes.title}</h2>
      </div>

      <div className='my-blog-details-container'>
        <div className='blog-detail-cont'>
          <div><Image src={Profile} width={50} alt='profile imgage' /></div>
          <div>
            <div>
              <h6 className={poppins400.className} id='blog-author-name'>{blogData[0].attributes.author?blogData[0].attributes.author:"Admin"}</h6>
            </div>
            <div className='blog-other-details'>
              <div><Image src={calenderImage} width={20} alt='calender imgage' /></div>
              <div className={poppins.className} id='blog-date'>{blogData[0].attributes.date}</div>
            </div>
          </div>
        </div>
      </div>


      <div className='blog-content-container'>
        <p className={poppins.className}>{blogData[0].attributes.description}</p>
      </div>

    </div>
  )
}
