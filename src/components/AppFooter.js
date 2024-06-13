import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        {/* <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Hospital Management System
        </a> */}
        <span className="ms-1">&copy; 2024 Hospital Management System.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Designed and Developed by</span>
        <a href="https://bhavicreations.com/" target="_blank" rel="noopener noreferrer">
         Bhavi Creations
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
