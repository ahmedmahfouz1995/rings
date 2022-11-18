import React from 'react'

export default function About(props) {

  return (
    <div id="main-header" className="bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="section-title-sm text-dark">Welcome to our store</h3>
              <h1 className="section-title fs-7 my-3 text-dark">AHMED MAHFOUZ</h1>
              <p className="text-black-50 text-sm">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate labore consequuntur, placeat veritatis quos eum
                 quas soluta dolor officiis inventore neque aliquid quod ratione.
                  Quae laborum facere delectus eum reiciendis labore alias libero culpa,
                   voluptate aperiam neque quasi vitae ducimus voluptatem modi voluptatibus 
                   pariatur ea illum optio et cum. Pariatur.
              </p>
              <a href="#A" className="btn btn-primary">discover now</a>
            </div>
            <div className="col-lg-5 offset-lg-1 text-light p-3">
              <img className="w-100" src="https://i.pinimg.com/564x/8f/a4/de/8fa4de0f6cc0db4999247662897fa593.jpg" alt="header-img" />
            </div>
          </div>
        </div>
      </div>
  )
}
