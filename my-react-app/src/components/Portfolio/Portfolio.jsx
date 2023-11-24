import React from 'react'
import LeftPortion from '../LeftPortion'
import PortfolioInner from './PortfolioInner'

function Portfolio() {
  return (
    <>
            <div style={{display:'flex'}} >

<LeftPortion portcolor="#0B7AFD" />
       <div>
<PortfolioInner/>
</div>
     </div>
    </>
  )
}

export default Portfolio
