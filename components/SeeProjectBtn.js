import Link from 'next/link'
import React from 'react'

export default function SeeProjectBtn() {
  return (
    <div className='my-see-project-btn'>

      <Link href={"/project"} className='my-btn-1'>
        See Project
      </Link>

      <Link href={"/service"} className='my-btn-2'>
        Discover More
      </Link>

    </div>
  )
}
