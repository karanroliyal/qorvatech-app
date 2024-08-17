
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
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

export default function MyTopBanner({Title ,  slug}) {
    return (
        <div className='qorvatech-about-page-wrapper'>
            <div className='Top-Image-Common-Banner'>
                <h1 className={poppins500.className}>{Title.toUpperCase().length>27?`${Title.toUpperCase().slice(0,27)}...`:Title.toUpperCase()}</h1>
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
