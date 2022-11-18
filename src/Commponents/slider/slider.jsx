import React from 'react'
export default function Slider() {
  return (
    <>
        <div id="main-header" className="bg-light text-center py-5">
        <div className="container">

        <h1 className='text-primary p-5 '>Wide collection of accessories</h1>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="section-title-sm text-dark">Welcome to our store</h3>
              <h1 className="section-title fs-7 my-3 text-dark"> BREAK THROUGH SELF DOUBT AND FEAR</h1>
              <p className="text-black-50 text-sm">     
                  Dream interpretation has many forms;
                   it can be done be done for the sake of fun, 
                   hobby or can be taken up as a serious career.
              </p>
              <a href="#A" className="btn btn-primary">discover now</a>
            </div>
            <div className="col-lg-5 offset-lg-1 text-light">
           < div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.shopify.com/s/files/1/1265/5909/products/AN_656C_BR_290_BR_290_D_BR_292_grande.jpg?v=1527737118" className="d-block w-100 homeImg" alt="product"/>
          </div>
          <div className="carousel-item">
            <img src="https://static.heyhappiness.com/blog/images/blog-rings-for-women-01.jpg" className="d-block w-100 homeImg" alt="product"/>
          </div>
          <div className="carousel-item">
            <img src="https://image.made-in-china.com/43f34j00woZRYKpclvkM/Fashion-8-Piece-Set-Crystal-Zircon-Geometric-Ring-Bohemian-Retro-Women-s-Gold-Color-Ring-Accessories-Creative-Party-Jewelry.webp" className="d-block w-100 homeImg" alt="product"/>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/0429/8021/2891/products/product-image-1285035625_375x.jpg?v=1607008098" className="d-block w-100 homeImg" alt="product"/>
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
             </div>
          </div>
        </div>
      </div>
   
    </>
  )
}
