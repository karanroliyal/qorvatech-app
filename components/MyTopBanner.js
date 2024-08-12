
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import Link from 'next/link';
import { Col, Row, Container } from 'react-bootstrap';
import Image from 'next/image';
import Layer from "@/../public/layers.png"
import Scholor from "@/../public/graduate.png"
import Coffee from "@/../public/coffee-cup.png"
import Handshake from "@/../public/handshake.png"
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

export default function MyTopBanner({Title ,  slug}) {
    return (
        <div className='qorvatech-about-page-wrapper'>
            <div className='Top-Image-Common-Banner'>
                <h1 className={poppins500.className}>{Title}</h1>
                <div className='Home-link-with-top-border'>
                    <ul className={poppins400.className}>
                        <li><Link href={'/'}>Home</Link></li>
                        <li>/</li>
                        <li><Link className='current-page-link' href={`/${slug}`}>{Title}</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
