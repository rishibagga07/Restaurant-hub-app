import React from 'react'
import { FcAbout, FcAssistant, FcBusinessman, FcHome, FcReadingEbook } from 'react-icons/fc'

export default function Header() {
  return (
    <div>





<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li style={{ display: "inline-block", margin: "0 10px" }}>
              <a href="#" className="text-white">
                <FcHome size={"50"} />
              </a>
            </li>                                                                                   
            <li style={{ display: "inline-block", margin: "0 10px" }}>
              <a href="#" className="text-white">
                <FcAbout size={"50"} />
              </a>
            </li>           
            <li style={{ display: "inline-block", margin: "0 10px" }}>
              <a href="#food" className="text-white" > 
                <FcReadingEbook size={"50"} />
              </a>
            </li>

            <li style={{ display: "inline-block", margin: "0 10px" }}>
              <a href="#" className="text-white">
                <FcAssistant size={"50"} />
              </a>
            </li>

            
            <li
              style={{ display: "inline-block", margin: "0 10px" }}
              data-toggle="modal"
              data-target="#newModall"
            >
              <a href="#" className="text-white">
                <FcBusinessman size={"50"} />
              </a>
            </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>








    </div>
  )
}
