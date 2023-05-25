import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  margin: 25px 50px 75px 100px;
  width: 90%;

  background :#7FFFD4 ;
  padding: 3rem 2rem 4rem 5rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0; 
  }
  .form {
    margin: 10; 
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 90%;
    width: 100%;
  }
  .form-row {
    margin-top:1rem;
    margin-bottom: 0;
  }
  .form-row1 {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    justify-content: center;
    
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .submit-btn {
    background: #FEFF86;
  }
  .submit-btn:hover {
    background: #FFFFFF;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`

export default Wrapper
