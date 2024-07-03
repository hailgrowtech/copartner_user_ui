import React from 'react'
import LiveWebinar from '../Webinar/LiveWebinar'

const WebinarSection = () => {
  return (
    <div className='md:py-2 py-12 flex flex-col text-white'>
        <div className="flex md:flex-row flex-col md:justify-between items-center py-3 w-full">
              <h1 className="subheading-color text-5xl">Webinar</h1>
              <div className="md:w-[600px] md:text-left text-center text-[#ffffffa2] p-2">
              In Expert Hands, Your Wealth Thrives: Redefining Investment Success in the Stock Market Arena.{" "}
                <span className="text-white">
                  Say no to spreadsheets and tools designed in the 80s.
                </span>
              </div>
            </div>
            <LiveWebinar />

    </div>
  )
}

export default WebinarSection