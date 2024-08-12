import React from 'react'
import MyTopBanner from '@/../components/MyTopBanner'
import Services from '@/../components/Services'
import Image from 'next/image';

export default function page() {
    return (
        <div className='service-page-wrapper'>
            {/* Top banner  */}
            <MyTopBanner Title="Service" slug="service" />
            {/* Top banner  */}



            {/* My service dynamic component */}

                <Services/>

            {/* My service dynamic component */}






        </div>
    )
}
