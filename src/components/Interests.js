import styled from 'styled-components/macro'
import { GoGlobe } from 'react-icons/go'
import { IoLanguageOutline } from 'react-icons/io5'
import Surf from '../images/surfboard.svg'
import Ehrenamt from '../images/ehrenamt.svg'
import Design from '../images/design.svg'
import Vegan from '../images/vegan.svg'

export default function Interests() {
  return (
    <Section>
      <h3>Personal Interests</h3>
      <Wrapper>
        <ul>
          <li>
            <GoGlobe size="60px" color="#8AA399" />
          </li>
          <li>Reisen</li>
        </ul>
        <ul>
          <li>
            <IoLanguageOutline size="60px" color="#8AA399" />
          </li>
          <li>Sprachen</li>
        </ul>
        <ul>
          <li>
            <img src={Design} alt="" />
          </li>
          <li>Design</li>
        </ul>
        <ul>
          <li>
            <img src={Ehrenamt} alt="" />
          </li>
          <li>Ehrenamt</li>
        </ul>
        <ul>
          <li>
            <img src={Surf} alt="" />
          </li>
          <li>Surfen</li>
        </ul>
        <ul>
          <li>
            <img src={Vegan} alt="" />
          </li>
          <li>Ernährung</li>
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
  flex-wrap: wrap;
  justify-content: space-evenly;

  ul {
    padding: 0 1.5em;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin: 1em 0;
    text-transform: uppercase;
    font-size: 0.8em;
    align-self: center;
  }

  svg {
    padding: 0.6em;
    border-radius: 40%;
    background: linear-gradient(145deg, #e3e3e3, #ffffff);
    box-shadow: 8px 8px 16px #ededed, -8px -8px 16px #ffffff;

    &:hover {
      width: 80px;
      height: 80px;
    }
  }

  img {
    width: 60px;
    height: auto;
    color: #8aa399;
    padding: 0.6em;
    border-radius: 40%;
    background: linear-gradient(145deg, #e3e3e3, #ffffff);
    box-shadow: 8px 8px 16px #ededed, -8px -8px 16px #ffffff;

    &:hover {
      width: 80px;
    }
  }
`