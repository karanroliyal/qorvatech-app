import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import SeeProjectBtn from "../../components/SeeProjectBtn"

import about from '../../public/about1-img.png'
import Image from "next/image";

import NewsAndBlog from '../../components/NewsAndBlog'
import { Container, Row, Col } from "react-bootstrap";
import ReadMoreBtn from '../../components/ReadMoreBtn'
import Testimonials from '../../components/Testimonials'
import Projects from '../../components/Projects'
import Link from "next/link";
import SolutionServices from "@/../components/SolutionServices"
import MyTeam from '@/../components/MyTeam'

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

// Api For Home page banner image 

// export async function homeBannerApi(){
//   let result = await fetch(`http://localhost:1337/api/home-page-banner?populate=*`)
//   result = await result.json();

//   return result.data.attributes.banner.data.attributes.formats.large.url;
// }

// Api For Home page banner image 


export default async function Home() {

  // const banner = await homeBannerApi()
  // console.log(banner)
  // style={{backgroundImage:`url(http://localhost:1337${banner})`}}
  return (
    <>
      <div className="home-wrapper">
        <div className="hero-section" id="particles-js" >
          <p className={poppins400.className}>Endless Karan Business Posiblittes</p>
          <h1 className={roboto.className}>Best <span>Solution</span> <br />And Great <span>Business</span></h1>
          <p className={poppins.className} id="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecatibr vitae provident<br />  inventore eligendi maiores repellat dolore nihil eveniet totam sint?</p>
          <SeeProjectBtn />
        </div>

        {/* <Container className="about-section">
          <Row>
            <Col>
              <div>
                <Image src={about} width={550} height={500} alt="about-image" />
              </div>
            </Col>
            <Col>
              <div className="about-company">
                <p className={poppins400.className}>About Company</p>
                <h2 className={roboto.className} >The Best Of Product Your Business</h2>
                <p className={poppins400.className} id="grey-para">There are many variations of passages of lorem Ipsum available but the majority have suffered alteration in some form by inject rated humour or randomised this like.</p>
                <div className="left-border">
                  <h5>Highest quality security, Network uptime, fast output. Unlimited scale and customizing possibilities.</h5>
                  <h6>Murad Hasan, <span>Head Of Idea</span></h6>
                </div>
                <ReadMoreBtn btnName="Read More" slug="about" />
              </div>
            </Col>
          </Row>
        </Container> */}


        {/* Solution service qorvatech  */}
        <SolutionServices />
        {/* Solution service qorvatech  */}

        {/* My Team Component  */}
        {/* <MyTeam /> */}
        {/* My Team Component  */}

        {/* My projects Component  */}
        {/* <Projects /> */}
        {/* My projects Component  */}

        {/* My Testimonial component  */}
        <Testimonials />
        {/* My Testimonial component  */}

        <Container className="news-blog">
          <div className="my-text">
            <p className={poppins400.className}>What’s Happening</p>
            <h2 className={roboto.className}>Best News & Blog</h2>
          </div>
          <div className='news-and-blog-container'>
            <NewsAndBlog />
          </div>
        </Container>



      </div>
    </>
  );
}
