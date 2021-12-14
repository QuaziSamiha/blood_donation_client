import React from 'react'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'
import Campaigns from './Campaigns/Campaigns'
import Comments from './Comments/Comments'
import Story from './Story/Story'

export default function AboutUs() {
    return (
        <div>
            <Navbar />
            <h3 className='pt-24'>this is about us</h3>
            <Story />
            <Campaigns />
            <Comments />
            <Footer />
        </div>
    )
}
