'use client'
export default function ProjectApiCall({categories }) {

  const projectApi=()=>{
    alert("hello")
  }
    
  return (
    <div className='api-call-btn-portfoliyo'>
      <button onClick={projectApi} >{categories}</button>
    </div> 
  )
}
