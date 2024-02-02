import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
export default class  extends PureComponent {
  render() {
    return (
      <><nav className="navbar navbar-expand-lg bg-dark navbar-dark position-sticky w-100 p-4 top-0 start-0">
      <div className="container">
        <Link className='link-underline link-underline-opacity-0 fs-2 text-light' to={""}>START FRAMEWORK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className='link-underline link-underline-opacity-0 fs-5 text-light px-2' to={"about"}>ABOUT</Link>
            </li>
            <li className="nav-item">
            <Link className='link-underline link-underline-opacity-0 fs-5 text-light px-2' to={"portfolio"}>PORTFOLIO</Link>
            </li>
            <li className="nav-item">
            <Link className='link-underline link-underline-opacity-0 fs-5 text-light px-2' to={"contact"}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </>
    )
  }
}
