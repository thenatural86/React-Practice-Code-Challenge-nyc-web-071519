import React from "react"

const MoreButton = props => {
  // console.log(props)
  return <button onClick={() => props.moreSushiHandler()}>More sushi!</button>
}

export default MoreButton
