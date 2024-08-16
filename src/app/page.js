import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import SeeProjectBtn from "../../components/SeeProjectBtn"
import rightArrow from '@/../public/orange-arrow.png'
import about from '../../public/about1-img.png'
import Image from "next/image";
import SoftwareDevelopment from "../../public/backend.png"
import CyberSecurity from "../../public/cyber-criminal.png"
import DataRecovery from "../../public/disaster-recovery.png"
import WebDevelopment from "../../public/application.png"
import BusinessConsulting from "../../public/consultant.png"
import AnaylitcsSolution from "../../public/analysis.png"
import NewsAndBlog from '../../components/NewsAndBlog'
import { Container, Row, Col } from "react-bootstrap";
import ReadMoreBtn from '../../components/ReadMoreBtn'
import Testimonials from '../../components/Testimonials'
import Projects from '../../components/Projects'
import Link from "next/link";
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
        <div className="hero-section"  id="particles-js" >
          <p className={poppins400.className}>Endless Business Posiblittes</p>
          <h1 className={roboto.className}>Best <span>Solution</span> <br />And Great <span>Business</span></h1>
          <p className={poppins.className} id="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecatibr vitae provident<br />  inventore eligendi maiores repellat dolore nihil eveniet totam sint?</p>
          <SeeProjectBtn />
        </div>

        <Container className="about-section">
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
        </Container>

        <div className="service-bg-image" >

          <Container className="service-section-homepage">
            <div className="my-text">
              <p className={poppins400.className}>Services</p>
              <h2 className={roboto.className}>We Offer All Types Of IT<br /> Solution Services</h2>
            </div>
            <Row className="my-card-row">
              <Col>
                <div className="my-service-card-border">
                  <div><Image src={SoftwareDevelopment} width={50} height={50} alt="Software Development" /></div>
                  <div>
                    <h5 className={roboto.className}>Software Development</h5>
                    <p className={poppins400.className}>At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.</p>
                    <Link className={poppins400.className} href={"#"} id="service-section-Link" ><div>Read more</div> <div><Image src={rightArrow} width={25} alt='Right arrow'/> </div></Link>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="my-service-card-border">
                  <div><Image src={CyberSecurity} width={50} height={50} alt="cyber security" /></div>
                  <div>
                    <h5 className={roboto.className}>Cyber Security</h5>
                    <p className={poppins400.className}>At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.</p>
                    <Link className={poppins400.className} href={"#"} id="service-section-Link" ><div>Read more</div> <div><Image src={rightArrow} width={25} alt='Right arrow'/> </div></Link>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="my-service-card-border">
                  <div><Image src={DataRecovery} width={50} height={50} alt="data recovery" /></div>
                  <div>
                    <h5 className={roboto.className}>Data Recovery</h5>
                    <p className={poppins400.className}>At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.</p>
                    <Link className={poppins400.className} href={"#"} id="service-section-Link" ><div>Read more</div> <div><Image src={rightArrow} width={25} alt='Right arrow'/> </div></Link>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="my-card-row">
              <Col>
                <div className="my-service-card-border">
                  <div><Image src={WebDevelopment} width={50} height={50} alt="Web Development" /></div>
                  <div>
                    <h5 className={roboto.className}>Web Development</h5>
                    <p className={poppins400.className}>At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.</p>
                    <Link className={poppins400.className} href={"#"} id="service-section-Link" ><div>Read more</div> <div><Image src={rightArrow} width={25} alt='Right arrow'/> </div></Link>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="my-service-card-border">
                  <div><Image src={BusinessConsulting} width={50} height={50} alt="Business Consulting" /></div>
                  <div>
                    <h5 className={roboto.className}>Business Consulting</h5>
                    <p className={poppins400.className}>At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.</p>
                    <Link className={poppins400.className} href={"#"} id="service-section-Link" ><div>Read more</div> <div><Image src={rightArrow} width={25} alt='Right arrow'/> </div></Link>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="my-service-card-border">
                  <div><Image src={AnaylitcsSolution} width={50} height={50} alt="Anaylitcs Solution" /></div>
                  <div>
                    <h5 className={roboto.className}>Anaylitcs Solution</h5>
                    <p className={poppins400.className}>At vero eos et accusamus etiusto odio praesentium accusamus this etiusto odio data center.</p>
                    <Link className={poppins400.className} href={"#"} id="service-section-Link" ><div>Read more</div> <div><Image src={rightArrow} width={25} alt='Right arrow'/> </div></Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* My Team Component  */}
        <MyTeam />
        {/* My Team Component  */}

        {/* My projects Component  */}
        <Projects />
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
