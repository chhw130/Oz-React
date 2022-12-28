import React from 'react'
import PropsTest from './PropsTest'

const PropsTest2 = () => {
  
    const dataHandler = (event) =>{
        console.log(event)
    }

    return (
    <div>
      <PropsTest data = {dataHandler}/>
    </div>
  )
}

export default PropsTest2
