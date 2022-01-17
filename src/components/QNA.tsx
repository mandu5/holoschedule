import { useEffect, useState } from "react";
import styled from "styled-components";
import { dbService } from "../myBase";
import AskBox from "./AskBox";

const Header = styled.div`
  form {
    .input {
      width: 90%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5%;
      margin-top: 10px;
      border-radius: 5px;
      resize: none;
      border: none;
    }
    .submit {
      float: right;
      margin-top: 5px;
      margin-right: 5%;
      color: #bccbde;
      background-color: #151617;
      padding: 8px 12px;
      font-size: 12px;
      text-transform: uppercase;
      transition: 0.5s;
      border:none;
      border-radius: 5px;
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
const List = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-left: 5%;
`;

const QNA = ({ userObj }:any) => {
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState<any>([]);
  useEffect(() => {
    dbService.collection("questions").onSnapshot((snapshot) => {
      const questionArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(questionArray);
    });
  }, []);
  const onSubmit = async (event:any) => {
    event.preventDefault();
    await dbService.collection("questions").add({
      text: question,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setQuestion("");
  };
  const onChange = (event:any) => {
    const {
      target: { value },
    } = event;
    setQuestion(value);
  };
  return (
    <>
      <Header>
        <form onSubmit={onSubmit}>
          <textarea
            className="input"
            value={question}
            onChange={onChange}
            placeholder="What's on your mind?"
          />
          <input className="submit" type="submit" value="Upload" />
        </form>
      </Header>
      <List>
        {questions.map((question:any) => (
          <AskBox
            key={question.id}
            askObj={question}
            isOwner={question.creatorId === userObj.uid}
          />
        ))}
      </List>
    </>
  );
};
export default QNA;
