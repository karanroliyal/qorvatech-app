import React, { lazy, Suspense } from 'react'
import MyTopBanner from '@/../components/MyTopBanner'
import Blogpage from '@/../components/Blogpage'


export default function page() {
    return (
        <div className='service-page-wrapper'>
            {/* Top banner  */}
            <MyTopBanner Title="Blog" slug="blog" />
            {/* Top banner  */}

            {/* Blog Custom page component */}
                <Blogpage />
            {/* Blog Custom page component */}







        </div>
    )
}