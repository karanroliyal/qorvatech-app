"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export default function SearchBlog() {

    const [text, setText] = useState('')
    const [data, setData] = useState([])

    const searchApi = async () => {
        let url = `http://localhost:1337/api/blogs?filters[title][$contains]=${text}`
        let result = await fetch(url);
        result = await result.json();
        setData(result.data)
        console.log(url)
    }

    useEffect(() => {
        searchApi()
    }, [text])

    return (
        <div className='search-box-wrapper'>
            <div className='search-box-container'>
                <h5>Search</h5>
                <input type='text' onChange={(e) => setText(e.target.value)} className='Blog-Search-box' /><span className='span-search'>Search</span>
                {
                    text.length == 0 ? null : data.map((item) => {
                        return <div key={item.id}>
                            {/* <p>{item.title}</p> */}
                            {/* <p>karan</p> */}
                            <ListGroup>
                                <ListGroup.Item><Link className='search-box-link' href={`blog/${item.id}`}>{item.attributes.title}</Link></ListGroup.Item>

                            </ListGroup>
                        </div>
                    })
                }
                {/* {
                    text.length == 0 ? <ListGroup>
                        <ListGroup.Item>No result found</ListGroup.Item>
                    </ListGroup> : null
                } */}
            </div>
        </div>
    )
}
