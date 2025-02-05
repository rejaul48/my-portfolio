import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section >
      <hr />
            <div className='max-w-5xl mx-auto'>
          
                    <div className='text-center py-8'>
                        <p className='text-white'>all &copy;copyright are reserved by <Link to={'https://facebook.com/mrreja.me'} target='_blank' className='underline text-white' >Rejaul Islam</Link></p>
                    </div>
            </div>
      </section>
    </>
  )
}

export default Footer
