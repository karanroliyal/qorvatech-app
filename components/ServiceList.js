'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import QorvatechLogo from '@/../public/qtech-logo.png'
import Image from 'next/image';


export default function ServiceList() {

    const [container , setContainer] = useState([])

    async function dataApi() {
            const url = "http://127.0.0.1:1337/api/services?populate=*"
            let result = await fetch(url);
            result = await result.json();
            setContainer(result.data);
    }

    useEffect(() => {
        dataApi()
    }, [])

    return (
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
      <Link className="navbar-brand" href={"/"}><Image src={QorvatechLogo} width={150} alt='Qorvatech Logo'/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
          <Link className="nav-link active" aria-current="page" href={"/"}>Home</Link>
          <Link className="nav-link" href={'/about'}>About</Link>
          <Link className="nav-link " href={'/service'} tabindex="-1" >Service</Link>
            <div className='Drop-Down-Wapper'>
            <NavDropdown title="All Service" id="basic-nav-dropdown" className='my-dropDown'>
                {/* <NavDropdown.Item ><Link href={"/service"}>Service Page</Link></NavDropdown.Item> */}
                {
                    container.map((item) => {
                        return <NavDropdown.Item key={item.id} className='dropDown-item' id='dropDown-item'>
                            <Link href={`/service/${item.id}`}>{item.attributes.service_title}</Link>
                        </NavDropdown.Item>
                    })
                }
            </NavDropdown>
        </div>
        <Link className="nav-link " href={'/blog'} tabindex="-1" >Blog</Link>
        <Link className="nav-link " href={'/contact'} tabindex="-1" >Contact us</Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
        
    )
}
