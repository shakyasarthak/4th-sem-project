import React from 'react'
import styled from 'styled-components'
import PageHero from '@/components/PageHero'
import aboutImg from '../assets/About.jpg'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <main>
      <div style={{background:'#FDF8F3'}}>
      <PageHero  />
        
      <Wrapper className='page section section-center'>
        <Image src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h1>About Us</h1>
            <div className='underline'></div>
          </div>
          <p>
            KU Pathsala is is an e-learning platform created as a semester project by 4th semester CS students
             that provides a platform for the
            students of Kathmandu University to access the resources provided by
            the teachers. It is a platform where the students can access the
            resources provided by the teachers and the teachers can upload the
            resources for the students. The resources include the assignments,
            quizzes, notes, and other resources. The students can access the
            resources by logging in to the website. The teachers can upload the
            resources by logging in to the website. 
         
          </p>
        </article>
      </Wrapper>
      <PageHero  />
      </div>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: Center;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutUs
