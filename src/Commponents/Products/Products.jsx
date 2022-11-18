import "./Products.css"
import React, { useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { getRings } from './../../store/reducer/ringsReducer';
import { addToCart, View } from './../../store/reducer/cartReducer';

export default function Products() {
  const { rings,isLoading, error} = useSelector(
    (state) => state.ringList
  );
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => { 
    dispatch(getRings());
  }, []);


const Add=(product)=>{
dispatch(addToCart(product))
}
const ViewProduct=async(product)=>{
await dispatch(View(product))
Navigate("productInfo")
}

if (!error) {
  
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb5 pb-5">
          <button className="btn btn-outline-light me-2"  
          onClick={() => {}} style={{color:"greenyellow"}}>
            ALL
            </button>
          <button className="btn btn-outline-light me-2" style={{color:"gold"}} 
          onClick={() => {}}>
            Gold
          </button>
          <button className="btn btn-outline-light me-2" style={{color:"darkcyan"}}  
          onClick={() => {}}>
           Silver
          </button>
          <button className="btn btn-outline-light me-2" style={{color:"blueviolet"}}  
          onClick={() => {}}>
            Jewelery
            </button>
        </div>
        <div className="container">
          <div className="row">
        {rings.map((products) => {
          return (
            <>
              <div className="myProduct col-4 my-3 text-dark" key={products.id}>
                <Card className='h-100 text-center'>
                  <Card.Img variant="top" src={products.image} height='300px'  alt={products.title}/>
                  <Card.Body >
                    <Card.Title className="mb-0" style={{color:"gold"}}>{products.title.substring(0,20)}</Card.Title>
                    <p className="m-3">
                     ${products.description.substring(0,70)}
                    </p>
                    <Card.Text className="fw-bold text-success">
                     ${products.price}
                    </Card.Text>
                    <Button variant="btn btn-outline-warning m-2" onClick={()=>ViewProduct(products)}>View Product</Button>
                    <NavLink>
                    <Button variant="btn btn-outline-danger m-2" onClick={()=>Add(products)}>Add to cart</Button>
                    </NavLink>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="display-6 fw-bolder text-center">Latest Products</h2>
          </div>
        </div>
        <div className="row justify-content-center ">
          {isLoading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}else{
  return (
    <div className="alert-danger"> Sorry Something went wrong</div>
  )
}
}

