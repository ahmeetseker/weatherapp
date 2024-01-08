import React from 'react'
import { Card } from '@/components/ui/card'

const Header = () => {
  return (
    
      <div className="container  ">
      <Card  className="mt-4">

      <center className='m-4'>
          <img
            src="https://d1psgljc389n8q.cloudfront.net/bootcamps/logos/VX6tpIUJa"
            alt="Bank logo"
            className="w-8 "
            id="logo"
            
          />
          <h1 className="heading">Weather App</h1>
        </center>
        
      </Card>

      </div>

  )
}

export default Header