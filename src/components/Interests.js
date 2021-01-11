import styled from 'styled-components/macro'
import { GoGlobe } from 'react-icons/go'

export default function Interests() {
  return (
    <Section>
      <h3>Personal Interests</h3>
      <Wrapper>
        <ul class="interests__list">
          <li>
            <a href="https://www.hr-rookies.com">{/* image */}</a>
          </li>
        </ul>
        <ul class="interests__list">
          <li>
            <GoGlobe size="60px" color="#8AA399"/>
          </li>
          <li>reisen</li>
        </ul>
        <ul class="interests__list">
          <li></li>
          <li>SPRACHEN</li>
        </ul>
        <ul class="interests__list">
          <li></li>
          <li>DESIGN</li>
        </ul>
        <ul class="interests__list">
          <li></li>
          <li>EHRENAMT</li>
        </ul>
        <ul class="interests__list">
          <li></li>
          <li>SURFEN</li>
        </ul>
        <ul class="interests__list">
          <li></li>
          <li>FITNESS</li>
        </ul>
        <ul class="interests__list">
          <li></li>
          <li>ERNÄHRUNG</li>
        </ul>
      </Wrapper>
    </Section>
  )
}

const Section = styled.section`
  padding: 1.5em;

  h3 {
    text-align: center;
    text-transform: uppercase;
    font-weight: normal;
  }
`

const Wrapper = styled.div`
  display: flex;
  list-style: none;
  flex-wrap: flex;

   ul {
    display: flex;
    flex-direction: column;
    list-style: none;
   }

   li {
       margin: 1em 0;
       text-transform: uppercase;
   }

   svg {
    padding: 0.5em;
    border-radius: 40%;
    background: linear-gradient(145deg, #e3e3e3, #ffffff);
    box-shadow: 8px 8px 16px #ededed, -8px -8px 16px #ffffff;
  }


`
