import React from 'react'
import Link from 'next/link'

export default function ReadMoreBtn({btnName , slug}) {
  return (
    <div className='my-see-project-btn'>
      <Link href={`/${slug}`} className='my-btn-1'>{btnName}</Link>
    </div>
  )
}
