import React from 'react'
import './../content/content.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/reducer/cartReducer';
import { NavLink } from 'react-router-dom';

export default function Cart() {
  const {cart} = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();



  return (
   <>
 <main>

   <section className="post-cont bg-light section">
       <div className="container ">
           <div className="row ">
               <div className="posts col-md-11 text-center ">
               <h1 className='text-primary p-5 '>Cart Review</h1>
               <div className="single-post row mb-5" >
                    {
                      cart.map((product)=>{
                          return(
                            <>
                                    <div className="col-lg-2" >
                                       <ul className="list-group tags mt-5  border-0 d-flex flex-row flex-lg-column ">
                                            <li className="list-group-item bg-light tag  py-3 border-0">{product.title.substring(0,12)}</li>
                                            <li className="list-group-item bg-light tag py-3 border-0">In cart : {product.quantity}</li>
                                            <li className="list-group-item bg-light tag py-3 border-0">Price :{product.price} $</li>
                                            <li className="list-group-item bg-light tag py-3 border-0">Rate : {product.rating.rate}</li>
                                          </ul>
                                    </div>
                                            <div className="col-lg-10">
                                                <div className="card border-0" >
                                                    <img src={product.image} className="card-img-top col-lg-6" style={{height:"350px"}} alt="..."/>
                                                    <div className="card-body">
                                                      <h5 className="card-title text-primary">{product.title}</h5>
                                                      <p className="card-text text-dark">{product.description}</p>
                                                      <NavLink to={`Contact`}>
                                                        <button className="btn btn-primary">Checkout</button>
                                                        </NavLink>
                                                      <button className='btn btn-outline-danger col-12 my-3' onClick={()=>{dispatch(removeFromCart(product))}}>Remove</button>
                                                    </div>
                                                  </div>
                                            </div>
                                     
                            </>
                            
                            )
                        
                        })
                        
}
                </div>
                        </div>
               
           </div>
           </div>
           
   </section>

 </main>
   </>
  )
}