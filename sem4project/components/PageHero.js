import React from 'react'
import styled from 'styled-components'

const PageHero = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        {/* <h3>
          About Us 
        </h3> */}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background color :#ffffff;
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
