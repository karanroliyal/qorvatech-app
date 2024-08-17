import React from 'react'
import Projects from '@/../../components/Projects'
import MyTopBanner from '@/../components/MyTopBanner'

export default function qorvatechProjects() {
    return (
        <>
            {/* Top banner  */}
            <MyTopBanner Title="project" slug="project" />
            {/* Top banner  */}


            {/* project component */}
            <Projects />
            {/* project component */}
        </>
    )
}
