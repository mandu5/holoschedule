import { Draggable, Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import DraggableCard from "./DragabbleCard";
import { ITodo, toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";
import React from "react";

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
  boardIndex: number;
}

const Wrapper = styled.div<IWrapperProps>`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) =>
    props.isDragging ? "3px 3px 10px rgba(0, 0, 0, 0.5)" : "none"};
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.boardColor};
  transition: background-color 0.3s ease;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  &:hover {
    background-color: #74b9ff;
    transition: background-color 0.3s ease;
  }
`;

interface IAreaProps {
  isDraggingOver: Boolean;
  isDraggingFromThis: Boolean;
}

interface IWrapperProps {
  isDragging: Boolean;
}

const Form = styled.form`
  width: 100%;
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) => {
    return props.isDraggingFromThis
      ? "#b2bec3"
      : props.isDraggingOver
      ? "#636e72"
      : props.theme.boardColor;
  }};
  flex-grow: 1;
  transition: background-color 0.3s ease;
`;

interface IForm {
  toDo: string;
}

function Board({ boardIndex, toDos, boardId }: IBoardProps) {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setValue("toDo", "");
    setToDos((oldToDos) => {
      return {
        ...oldToDos,
        [boardId]: [...oldToDos[boardId], { id: Date.now(), text: toDo }],
      };
    });
  };
  return (
    <Draggable draggableId={boardId} index={boardIndex}>
      {(provided, snapshot) => (
        <Wrapper
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <Title {...provided.dragHandleProps}>
            <h3>{boardId}</h3>
          </Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("toDo", { required: true })}
              type="text"
              placeholder={`Add task on ${boardId}`}
            />
          </Form>
          <Droppable droppableId={boardId} type="toDo">
            {(magic, snapshot) => (
              <Area
                isDraggingOver={snapshot.isDraggingOver}
                isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                ref={magic.innerRef}
                {...magic.droppableProps}
              >
                {toDos.map((toDo, index) => (
                  <DraggableCard
                    key={toDo.id}
                    toDoId={toDo.id}
                    toDoText={toDo.text}
                    index={index}
                  />
                ))}
                {magic.placeholder}
              </Area>
            )}
          </Droppable>
        </Wrapper>
      )}
    </Draggable>
  );
}

export default React.memo(Board);
