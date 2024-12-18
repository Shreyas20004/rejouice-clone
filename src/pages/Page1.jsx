import './Page1.css'
import bgvid from '../assets/bgvid.mp4'
function Page1() {
  return (

     <div id="page1">
          <video autoPlay loop muted src={bgvid}></video>
          <div id="page1-content">
              <div></div>
              <h1>rejouice</h1>
          </div>
      </div>
  )
}
    

export default Page1
