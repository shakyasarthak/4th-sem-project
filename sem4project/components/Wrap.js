import { GlobalStyleComponent, createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  .container {
    max-width: 960px;
    margin-right: auto;
    margin-left:auto ;
    margin-top: 50px;
    padding-right: 15px;
    padding-left: 15px;
  
  }
  .notes-list{
    display: grid;
    grid-gap:1rem;
    /* grid-template-columns: repeat(auto-fit, minmax(500px,1fr)); */
  }
  .note.new{
    background-color: aquamarine;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title{
    border:none;
    background-color:aquamarine;
    font-size:1.5rem;
  }
  .title:focus{
    outline:none;
  }
  textarea {
    border: none;
    width:100%;
    resize: none;
    background-color: aquamarine;
  }
  textarea:focus{
    outline:none;
  }
  .save{
    background-color: yellow;
    margin-left:90%;
    border: none;
    border-radius: 15px;
    padding: 5px 10px 5px 10px;
  }
  .save:hover{
    background-color: #ededed;
    cursor: pointer;
  }
  .note{
    background-color: #c6e7ee;
    /* margin-bottom: 10px; */
    border-radius: 20px;
    padding: 1rem;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: pre-wrap;
  }
  .note-footer{
    display: flex;
    align-items: right;
    justify-content: space-between;
  }
  
  .delete-icon {
  cursor: pointer;
  }
  .search {
      display: flex;
      align-items: center;
      background-color: rgb(233, 233, 233);
      border-radius: 10px;
      padding: 5px;
      margin-bottom: 1.5em;
  }
  
  .search input {
      border: none;
      background-color: rgb(233, 233, 233);
      width: 100%;
  }
  
  .search input:focus {
      outline: none;
  }
  //for pastpaper form
  .section {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
.quiz {
  width: 90vw;
  max-width: var(--max-width);
  margin: 4rem auto;
  background: var(--clr-white);
  border-radius: var(--radius);
  // padding: 3rem;
}
.quiz-small {
  max-width: 500px;
}
.setup-form h2 {
  margin-bottom: 2rem;
}
.form-control {
  margin-bottom: 2rem;
}
.form-control label {
  display: block;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--clr-grey-3);
  margin-bottom: 0.5rem;
}
// .form-input {
//   border: none;
//   background: var(--clr-grey-10);
//   font-size: 1rem;
//   padding: 0.25rem 0.5rem;
//   width: 100%;
//   border-radius: var(--radius);
// }
.submit-btn {
  width: 100%;
  margin-top: 3rem;
}
`