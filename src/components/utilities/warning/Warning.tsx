type state={
    found:boolean
}
const Warning=({found}:state)=> {
  return (
    <div >{!found ? <h2  style={{ color: "red" }} data-testid="warning-message" >Country Not Found</h2> : null}</div>
  )
}

export default Warning