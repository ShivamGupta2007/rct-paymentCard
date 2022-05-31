import React from 'react'

function Logo(props) {
   
  return (
    <div>
      <img style={{width:"100px"}} src={props.imgs} alt="Logo"/>
    </div>
  )
}

export default Logo