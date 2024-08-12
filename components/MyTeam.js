import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import Image from "next/image";
import { Container, Row, Button, Col } from "react-bootstrap";
import Team1 from '@/../public/team1.jpg'
import Team2 from '@/../public/team2.jpg'
import Team3 from '@/../public/team3.jpg'
import Team4 from '@/../public/team4.jpg'
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


export default function MyTeam() {
  return (
    <div className="home-wrapper">
      <Container className="my-team-homesection">
        <div className="my-text">
          <p className={poppins400.className}>TEAM</p>
          <h2 className={roboto.className}>Our Best Team Member</h2>
        </div>
        <Row className="my-team-card-container-homepage" md={4}>
          <Col>
            <div className="my-team-card">
              <div className="my-team-image-contaoiner">
                <Image src={Team1} width={'100%'} alt="team member" />
              </div>
              <div className="team-name">
                <h5 className={roboto.className}>David Somers</h5>
                <p className={roboto.className}>Developer</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="my-team-card">
              <div className="my-team-image-contaoiner">
                <Image src={Team2} width={"100%"} alt="team member" />
              </div>
              <div className="team-name">
                <h5 className={roboto.className}>Paula Olson</h5>
                <p className={roboto.className}>Developer</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="my-team-card">
              <div className="my-team-image-contaoiner">
                <Image src={Team3} width={"100%"} alt="team member" />
              </div>
              <div className="team-name">
                <h5 className={roboto.className}>Michael Jennings</h5>
                <p className={roboto.className}>Developer</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="my-team-card">
              <div className="my-team-image-contaoiner">
                <Image src={Team4} width={"100%"} alt="team member" />
              </div>
              <div className="team-name">
                <h5 className={roboto.className}>Teresa Simpson</h5>
                <p className={roboto.className}>Developer</p>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  )
}
