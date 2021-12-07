import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IBinProps {
  isDraggingOver: Boolean;
}

const Bin = styled.div<IBinProps>`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: ${(props) => (props.isDraggingOver ? "black" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  position: relative;
  transition: all 0.3s ease;
  margin: 30px 0px;
  div {
    color: ${(props) => (props.isDraggingOver ? "white" : "black")};
    transform: ${(props) => (props.isDraggingOver ? "scale(1.4)" : "none")};
    transition: all 0.3s ease;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
`;

function TrashBin() {
  return (
    <Droppable droppableId="trashBin" type="toDo">
      {(provided, snapshot) => {
        return (
          <Bin
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <IconWrapper>
              <FontAwesomeIcon icon={faTrashAlt} />
            </IconWrapper>
            {provided.placeholder}
          </Bin>
        );
      }}
    </Droppable>
  );
}

export default TrashBin;