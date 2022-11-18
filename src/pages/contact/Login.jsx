import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { useNavigate} from 'react-router-dom';
// import { userAPI } from '../API/UserApi';

export default function Longin() {
  //  const history = useNavigate();

  const [error, setError] = useState({
    name: null,
    email: null,
  });
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    if (e.target.name === "email") {
      const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!regex.test(e.target.value)) {
        setError({
          [e.target.name]: `${e.target.name} does not match email pattern`,
        });
      } else {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });

        setError({
          [e.target.name]: null,
        });
      }
    } else {
      if (e.target.value.length <= 3) {
        setError({
          [e.target.name]: `${e.target.name} length must be greater than 3`,
        });
      } else {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
        setError({
          [e.target.name]: null,
        });
      }
    }
  };



  const login = (e) => {
    e.preventDefault();
    // addUserHandler();
    // history("/users")
  };
  // const myRef = useRef();
  return (
    <div className="my-5">
      <div className="container">
        <div className="row  d-flex justify-content-center p-5 ">
           
          <div className="col-md-6 bg-dark rounded p-5 ">
          <h2 className="text-center mb-3 text-light">Login Now</h2>
            <Form onSubmit={login}>
              <Form.Group className="my-3" controlId="formBasicName">
                <Form.Label className="text-light">Name</Form.Label>
                <Form.Control
                  onChange={changeHandler}
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                />
                {error.name && (
                  <Form.Text className="text-danger">{error.name}</Form.Text>
                )}
              </Form.Group>
              <Form.Group className="my-3" controlId="formBasicEmail">
                <Form.Label className="text-light">Email address</Form.Label>
                <Form.Control
                  onChange={changeHandler}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
                {error.email && (
                  <Form.Text className="text-danger">{error.email}</Form.Text>
                )}
              </Form.Group>

              <Button  variant="success" type="submit">
                {/* {userId? 'Edit User' : 'Add New User'} */}
                Add New User
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
