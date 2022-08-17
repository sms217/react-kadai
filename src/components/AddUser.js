import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function AddUser() {
  const { addUser } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    navigate("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="Enter Name"
        ></Input>
      </FormGroup>
      <Button type="submit">Add</Button>
      <Link to="/" className="btn btn-danger m-2">
        Cancle
      </Link>
    </Form>
  );
}

export default AddUser;
