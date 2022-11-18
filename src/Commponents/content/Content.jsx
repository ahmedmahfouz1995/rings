import React from 'react'
import './content.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRings } from './../../store/reducer/ringsReducer';
import { addToCart, View } from './../../store/reducer/cartReducer';
import { useNavigate } from 'react-router-dom';

export default function Content() {
  const {rings} = useSelector(
    (state) => state.ringList
  );
  const dispatch = useDispatch();
  const Navigate = useNavigate();

    const ViewProduct=async(product)=>{
    await dispatch(View(product))
    Navigate("productInfo")
    }

  useEffect(() => { 
    dispatch(getRings());
  }, []);

  return (
   <>
 <main>

   <section id="blog-banner" className="position-relative blog-banner">
       <div className="overlay blog-overlay"></div>
       <div className="container">
           <div className="row d-flex align-items-center justify-content-center">
               <div className="about-content col-lg-12">
                   <h1 className="text-white"> TRY OUR NEW PRODUCTS</h1>
                   <p className="text-white mb-5">There is a moment in the life of any aspiring astronomer that it is time to buy that first</p>
                   <a href="blog-single.html" className="bg-white text-dark px-3 py-2 read-btn btn btn-primary">View More</a>
               </div>
           </div>
       </div>

   </section>

   <section className="categories section bg-light">
       <div className="container text-center">
           <h1 className='text-primary p-5 '>WHO ARE WE FOR </h1>
           <div className="row row-cols-lg-3">
               <div className="col-12 my-5">
                   <div className="card text-bg-dark transition-colors ">
                       <img src="https://stylereportmagazine.com/wp-content/uploads/2018/08/Kassiday-Oceanside-2-20-450x450.jpg" style={{height:"500px"}} className="card-img" alt="..."/>
                       <div className="card-img-overlay transition-colors">
                         <h5 className="card-title text-white text-center text-uppercase mb-3">WOMEN</h5>
                         <p className="card-text text-center mt-4">Enjoy your social life together.</p>
                       </div>
                     </div>
               </div>
               <div className="col-12 my-5">
                   <div className="card text-bg-dark transition-colors ">
                       <img src="https://i.ebayimg.com/images/g/pwAAAOSwKZ9ixd05/s-l500.jpg" style={{height:"500px"}} className="card-img" alt="..."/>
                       <div className="card-img-overlay transition-colors">
                           <h5 className="card-title text-white text-center text-uppercase mb-3">CHILDREN</h5>
                           <p className="card-text text-center mt-4">Let the fun be started.</p>
                         </div>
                     </div>
               </div>
               <div className="col-12 my-5">
                   <div className="card text-bg-dark transition-colors ">
                       <img src="https://i.pinimg.com/564x/23/31/b2/2331b2c28e428821705717583c26402b.jpg" style={{height:"500px"}} className="card-img" alt="..."/>
                       <div className="card-img-overlay transition-colors">
                           <h5 className="card-title text-white text-center text-uppercase mb-3">MEN</h5>
                           <p className="card-text text-center mt-4">Be a part of politics.</p>
                         </div>
                     </div>
               </div>
           </div>
       </div>
   </section>
   <section className="post-cont bg-light section">
       <div className="container ">
           <div className="row ">
               <div className="posts col-md-8 text-center ">
               <h1 className='text-primary p-5 '>Top Products</h1>
               <div className="single-post row mb-5" >
                    {
                      rings.map((product)=>{
                        if (product.id < 6) {
                          return(
                            <>
                                    <div className="col-lg-2" >
                                       <ul className="list-group tags mt-5  border-0 d-flex flex-row flex-lg-column ">
                                            <li className="list-group-item bg-light tag  py-3 border-0">{product.title.substring(0,12)}</li>
                                            <li className="list-group-item bg-light tag py-3 border-0">{product.category}</li>
                                            <li className="list-group-item bg-light tag py-3 border-0">{product.price}</li>
                                            <li className="list-group-item bg-light tag py-3 border-0">{product.rating.rate}</li>
                                          </ul>
                                    </div>
                                            <div className="col-lg-10">
                                                <div className="card border-0" >
                                                    <img src={product.image} className="card-img-top col-lg-6" style={{height:"350px"}} alt="..."/>
                                                    <div className="card-body">
                                                      <h5 className="card-title text-primary">{product.title}</h5>
                                                      <p className="card-text text-dark">{product.description}</p>
                                                      <button  className="btn btn-primary" onClick={()=>ViewProduct(product)}>View More</button>
                                                    </div>
                                                  </div>
                                            </div>
                                     
                            </>
                            
                            )
                        }else{
                          return null
                        }
                        })
                        
}
                        </div>
                        </div>
                      <div className='col-4'>
                            <h1 className='text-primary p-5 '>Trending</h1>
                                <div className="widget-wrapper p-2 text-center">
                                    <div className="widget search-widget my-3">
                                        <div className="input-group justify-content-center">
                                            <div className="form-outline ">
                                              <input id="search-input" type="search" className="form-control bg-transparent rounded-0" placeholder="search"/>
                                              
                                            </div>
                                            
                                              <button id="search-button" type="button" className="btn btn-primary" style={{height:"38px"}}>search</button> 
                                          </div>
                                    </div>
                                    <div className="widget posts-widget my-3">
                        {
                         rings.map((product)=>{
                            if (product.id > 17) {
                              return(
                                <>
                                        <div className="pos-1" key={product.id}>
                                            <div className="card border-0 mb-3" style={{maxWidth: "700px"}}>
                                                <div className="row g-0">
                                                  <div className="col-md-5">
                                                    <img src={product.image} style={{height: "120px"}} className="img-fluid rounded-start my-5" alt="..."/>
                                                  </div>
                                                  <div className="col-md-7">
                                                    <div className="card-body">
                                                      <h5 className="card-title fs-1 text-dark"><a  href='g' className="card-link">{product.title.substring(0,12)}</a></h5>
                                                      
                                                      <p className="card-text"><strong className="text-success"> only {product.price} $ </strong></p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                        </div>
                                        
                                </>
                           )} else{
                             return null
                            }
                            
                          }
                          )
                        }
                        </div>
                        <div className="widget wiget-goes  p-3">
                            <div className="card border-0">
                                <a href="l"><img src="assets/imgs/goes.webp" alt=""/></a>
                            </div>
                        </div>
                        <div className="widget wiget-cat my-3">
                            <div className="list-group rounded-0">
                                <h5  className="list-group-item list-group-item-action active rounded-0 disabled bg-gradient border-0" aria-current="true">
                                  post Categories
                                </h5>
                                <a href="l" className="list-group-item list-group-item-action border-0 rounded-0 transition-colors d-flex justify-content-between bg-transparent"><span>Technology</span><span>37</span></a>
                                <a href="l" className="list-group-item list-group-item-action border-0 rounded-0 d-flex justify-content-between bg-transparent"><span>Lifestyle</span><span>24</span></a>
                                <a href="l" className="list-group-item list-group-item-action border-0 rounded-0 d-flex justify-content-between bg-transparent"><span>Fashion</span><span>59</span></a>
                                <a href="l" className="list-group-item list-group-item-action border-0 rounded-0 d-flex justify-content-between bg-transparent"><span>Art</span><span>29</span></a>
                                <a href="l" className="list-group-item list-group-item-action border-0 rounded-0 d-flex justify-content-between bg-transparent"><span>Food</span><span>15</span></a>
                                <a href="l" className="list-group-item list-group-item-action border-0 rounded-0 d-flex justify-content-between bg-transparent"><span>Architecture</span><span>09</span></a>
                                <a href="l" className="list-group-item list-group-item-action border-0 rounded-0 d-flex justify-content-between bg-transparent"><span>Adventure</span><span>44</span></a>
                              </div>
                        </div>
                        <div className="widget widget-news my-3">
                            <div className="card border-0">
                                <div className="card-header text-center bg-gradient rounded-0 text-white">
                                  <h5>Newsletter</h5>
                                </div>
                                <div className="card-body py-3">
                                  <p className="card-text mt-3">Here, I focus on a range of items and features that we use in life without giving them a second thought.</p>
                                  <div className="form-outline">
                                    <input type="email" id="typeEmail" className="form-control" placeholder="email"/>
                                    <a href="l" className="btn btn-primary my-3">submit</a>
                                  </div>
                                  <p>You can unsubscribe at any time</p>
                                  
                                </div>
                              </div>
                        </div>
                        <div className="widget widget-tags-mt-3">
                            <div className="card border-0">
                                <div className="card-header text-center bg-gradient rounded-0 text-white">
                                    <h5>tag Clouds</h5>
                                  </div>
                                <div className="card-body">
                                  <ul className="list-items d-flex flex-wrap justify-content-evenly gap-3">
                                    <li><a href="l" className="btn btn-primary">technology</a></li>
                                    <li><a href="d" className="btn btn-primary">Fashion</a></li>
                                    <li><a href="d" className="btn btn-primary">Architecture</a></li>
                                    <li><a href="d" className="btn btn-primary">Food</a></li>
                                    <li><a href="d" className="btn btn-primary">Adventure</a></li>
                                    <li><a href="d" className="btn btn-primary">Lifestyle</a></li>
                                    <li><a href="d" className="btn btn-primary">Art</a></li>
                                    <li><a href="d" className="btn btn-primary">Food</a></li>
                                    <li><a href="d" className="btn btn-primary">technology</a></li>
                                  </ul>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
           </div>
           </div>
           
   </section>

 </main>
   </>
  )
}
