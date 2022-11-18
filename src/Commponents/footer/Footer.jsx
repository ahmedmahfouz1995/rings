import React from 'react'
import Logo from "../../imgs/il_570xN.2546856727_q40j.jpg"
export default function Footer() {
  return (
    <>
    <div id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
            <h1 className="logo me-auto me-lg-0"> <a href="index.html" className="logo me-auto me-lg-0"><img src={Logo} alt="" className="img-fluid"/></a></h1>
              <p>
                A108 Adam Street <br/>
                NY 535022, USA<br/><br/>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
                <strong>Email:</strong> info@example.com<br/>
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#f">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#f">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#f">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#f">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#f">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#f">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#f">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#f">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#f">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#f">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>
   

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Mahfouz</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">Ahmed Mahfouz</a>
      </div>
    </div>
    </div>

    </>
  )
}
