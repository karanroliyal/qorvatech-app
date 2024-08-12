'use client'
import { Container, Row, Button, Col } from "react-bootstrap";
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import Image from 'next/image';
import ProjectApiCall from './ProjectApiCall'
import { useEffect, useState } from "react";



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



export default function Projects() {

  const [data, setData] = useState([])
  const [categories, setCategories] = useState('')

  const projectApi = async () => {
    let result = await fetch(`http://localhost:1337/api/projects?populate=*`);
    result = await result.json();
    setData(result.data)
  }

  useEffect(() => {
    projectApi();
  }, [])

  // Filter data logic
  let flirt
  if (categories === '') {
    flirt = data
  }
  else {
    flirt = data.filter((item) => item.attributes.categories === categories)
  }
  // Filter data logic

  // Button color change logic 
  const [all , setAll]=useState('#ff7426')
  const [cloud , setCloud]=useState('black')
  const [net , setNet]=useState('black')
  const [secur , setSecur]=useState('black')
  const [web , setWeb]=useState('black')
  // Button color change logic 

  return (
    <div>
      <div className="portfoliyo-bg-image">
        <Container className="portfoliyo-container-homepage">
          <div className="my-text">
            <p className={poppins400.className}>PROJECTS</p>
            <div className="my-portfoliyo-categories">
              <h2 className={roboto.className}>Awasome Portfolio</h2>
              <div className="my-list-of-categories">
                <ul className={roboto.className}>


                  <li><button style={{color:all}} onClick={() => {setCategories("")}}>All Work</button></li>
                  <li><button style={{color:cloud}} onClick={() => {setCategories("cloudService")}}>Cloud Service</button></li>
                  <li><button style={{color:net}} onClick={() => {setCategories("networking")}}>Networking</button></li>
                  <li><button style={{color:secur}} onClick={() => {setCategories("security")}}>Security</button></li>
                  <li><button style={{color:web}} onClick={() => {setCategories("webdesign")}}>Web Design</button></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-cards-container">
            <Row>
              {
                flirt.map((item) => {
                  return <Col key={item.id}>
                    <div className="my-blog-card">
                      <Image src={`http://localhost:1337${item.attributes.image.data.attributes.formats.thumbnail.url}`} alt="blog 1" width={350} height={250} />
                      <h5>{item.attributes.categories}</h5>
                    </div>
                  </Col>
                })
              }

            </Row>
          </div>
        </Container>
      </div >
    </div >
  )
}
