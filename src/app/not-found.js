import React from 'react'
import Image from 'next/image'
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import Image404 from '../../public/image404.png'
import ReadMoreBtn from '../../components/ReadMoreBtn'

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


export default function notFound() {
    return (
        <div className='Not-found-page-wrapper'>
            <div className='Not-found-404-image'>
                <Image src={Image404} alt='Not Found Image' />
                <h1 className={roboto.className} >Oops! That page can’t be found.</h1>
            </div>
            <p className={poppins400.className} >Unfortunately, something went wrong and this page does not exist. Try using the search or return to the previous page.</p>
            <ReadMoreBtn btnName="Back to Home" slug={"/"} />
        </div>
    )
}
