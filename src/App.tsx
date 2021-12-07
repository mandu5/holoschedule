import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { IToDoState, toDoState } from "./components/atoms";
import Board from "./components/Board";
import CreateNewBoard from "./components/CreateNewBoard";
import TrashBin from "./components/Trashcan";


const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  gap: 20px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({
    type,
    draggableId,
    destination,
    source,
  }: DropResult) => {
    if (!destination) return;
    if (destination?.droppableId === "trashBin") {
      // delete toDo
      setToDos((oldToDos) => {
        return {
          ...oldToDos,
          [source.droppableId]: [
            ...oldToDos[source.droppableId].slice(0, source.index),
            ...oldToDos[source.droppableId].slice(source.index + 1),
          ],
        };
      });
      return;
    }

    if (type === "board") {
      if (destination.index === source.index) return;
      setToDos((oldToDos) => {
        const keyList = Object.keys(toDos);
        let sourceKey: string, destKey: string;
        keyList.forEach((element, index) => {
          if (index === source.index) sourceKey = element;
          if (index === destination.index) destKey = element;
        });
        const newToDos: IToDoState = {};
        keyList.forEach((element) => {
          if (element === sourceKey) return;
          if (element === destKey && source.index > destination.index) {
            newToDos[sourceKey] = [...oldToDos[sourceKey]];
          }
          newToDos[element] = [...oldToDos[element]];
          if (element === destKey && source.index < destination.index) {
            newToDos[sourceKey] = [...oldToDos[sourceKey]];
          }
        });
        return newToDos;
      });
      return;
    }

    if (destination?.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        boardCopy.splice(
          destination?.index,
          0,
          ...boardCopy.splice(source.index, 1)
        );
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }

    if (destination?.droppableId !== source.droppableId) {
      setToDos((oldToDos) => {
        const sourceCopy = [...oldToDos[source.droppableId]];
        const destCopy = [...oldToDos[destination.droppableId]];
        const targetElement = sourceCopy.splice(source.index, 1);
        destCopy.splice(destination.index, 0, ...targetElement);
        return {
          ...oldToDos,
          [source.droppableId]: sourceCopy,
          [destination.droppableId]: destCopy,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <CreateNewBoard />
        <Droppable
          droppableId="droppableBoards"
          type="board"
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <Boards ref={provided.innerRef}>
              {Object.keys(toDos).map((boardId, index) => (
                <Board
                  boardIndex={index}
                  boardId={boardId}
                  key={boardId}
                  toDos={toDos[boardId]}
                />
              ))}
              {provided.placeholder}
            </Boards>
          )}
        </Droppable>
        <TrashBin />
      </Wrapper>
    </DragDropContext>
  );
}

export default App;