import React, { useState } from "react";
import styled from "styled-components";
import { dbService } from "../myBase";

const Header = styled.div`
  form {
    border-radius: 5px;
    .submit {
      color: #bccbde;
      background-color: #151617;
      padding: 8px 12px;
      font-size: 12px;
      text-transform: uppercase;
      transition: 0.5s;
      border: none;
      border-radius: 5px;
      margin-left: 5px;
      &:hover {
        background: #bccbde;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px #bccbde, 0 0 25px #bccbde, 0 0 50px #bccbde,
          0 0 100px #bccbde;
      }
    }
  }
`;
const Button = styled.button`
  color: #bccbde;
  background-color: #151617;
  padding: 8px 12px;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 20px;
  &:hover {
    background: #bccbde;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #bccbde, 0 0 25px #bccbde, 0 0 50px #bccbde,
      0 0 100px #bccbde;
  }
`;
const List = styled.div`
  margin-bottom: 5px;
  margin-right: 5px;
`;

const AskBox = ({ askObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newAsk, setNewAsk] = useState(askObj.text);
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`questions/${askObj.id}`).update({
      text: newAsk,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewAsk(value);
  };
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete?");
    if (ok) {
      await dbService.doc(`questions/${askObj.id}`).delete();
    }
  };
  return (
    <div>
      {editing ? (
        <Header>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your Question"
              value={newAsk}
              required
              onChange={onChange}
            />
            <input className="submit" type="submit" value="Update Question" />
          </form>
          <Button onClick={toggleEditing}>Cancle</Button>
        </Header>
      ) : (
        <>
          {isOwner && (
            <>
              <List>{askObj.text}</List>
              <Button onClick={toggleEditing}>Edit Question</Button>
              <Button onClick={onDeleteClick}>Delete Question</Button>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default AskBox;
