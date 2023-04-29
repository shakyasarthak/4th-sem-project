import React from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
const Wrapper= styled.section `

body {
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
  }
  textarea {
	border: none;
	resize: none;
	background-color: aquamarine;
  }
  textarea:focus{
	outline:none;
  }
  .save{
	background-color: gray;
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
	border-radius: 10px;
	padding: 1rem;
	min-height: 170px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	white-space: pre-wrap;
  }
  .note-footer{
	display: flex;
	align-items: center;
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
  }`


const Search = ({ handleSearchNote }) => {
	
	return (
		<Wrapper>
		<div className='search'>
			<MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
		</Wrapper>
	);
};

export default Search;