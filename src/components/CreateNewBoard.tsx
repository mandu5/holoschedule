import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";
import styled from "styled-components";

interface IBoard {
  formName: string;
}

const Form = styled.form`
  margin: 30px 0px;
`;

function CreateNewBoard() {
  const { register, handleSubmit, setValue } = useForm<IBoard>();
  const setToDos = useSetRecoilState(toDoState);
  const onValid = ({ formName }: IBoard) => {
    console.log(formName);
    setToDos((oldToDos) => {
      return {
        ...oldToDos,
        [formName]: [],
      };
    });
    setValue("formName", "");
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input {...register("formName", { required: true })} type="text" />
      <button>Add a New Board</button>
    </Form>
  );
}

export default CreateNewBoard;