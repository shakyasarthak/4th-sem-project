import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";
// import styled from 'styled-components';
import { GlobalStyle } from "./Wrap";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <>
      <GlobalStyle />
      <div className="note">
        <span>{text}</span>
        <div className="note-footer">
          <small>{date}</small>
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
      </div>
    </>
  );
};
export default Note;
