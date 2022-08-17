import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem key={user.id} className="d-flex">
              <strong className="m-auto">{user.name}</strong>
              <div>
                <Link className="btn btn-warning m-1" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <Button
                  onClick={() => removeUser(user.id)}
                  className="btn-danger"
                >
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center"> No Teammate</h4>
      )}
    </ListGroup>
  );
};
