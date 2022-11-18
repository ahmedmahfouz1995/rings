import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart} from './../../store/reducer/cartReducer';
import { useNavigate } from 'react-router-dom';

export default function ProductInfo() {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    
const Add=(product)=>{
    dispatch(addToCart(product))
    Navigate("/cart")
    }
    const {productInfo } = useSelector(
        (state) => state.cart
      );
  return (
    <div id="main-header" style={{height:"1000px"}} className="bg-light h-100 my-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h3 className="section-title-sm text-dark">{productInfo[0].title}</h3>
          <h1 className="section-title fs-7 my-3 text-dark">{productInfo[0].category}</h1>
          <p className="text-black-50 text-sm">
          {productInfo[0].description}
          </p>
          <p className='text-danger'><span className='mx-3'>price :{productInfo[0].price} $</span> <span className='mx-3'>rate :{productInfo[0].rating.rate}</span> <span className='mx-3'> quantinty : {productInfo[0].rating.count}</span></p>
          <button className="btn btn-primary"  onClick={()=>Add(productInfo[0])}>Add to cart now</button>
        </div>
        <div className="col-lg-5 offset-lg-1 text-light p-3">
          <img className="w-100" src={productInfo[0].image} alt="header-img" />
        </div>
      </div>
    </div>
  </div>
  )
}
