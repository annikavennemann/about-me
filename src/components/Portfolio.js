import styled from 'styled-components/macro'
import Header from './Header'
import Ohhh from '../images/ohhh.png'
import { DiReact } from 'react-icons/di'
import { DiPhp } from 'react-icons/di'
import { DiSymfonyBadge } from 'react-icons/di'
import { SiReactrouter } from "react-icons/si";
import { SiStyledComponents } from "react-icons/si";
import { DiDoctrine } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'
import { DiNpm } from 'react-icons/di'
import { SiAdobexd } from "react-icons/si";

export default function Portfolio() {
  return (
    <>
      <Header />
      <Wrapper>
        <h2>Portfolio</h2>
        <h3>Ohhhboarding</h3>
        <h4>'Cause there is no second chance for a first impression</h4>
        <img src={Ohhh} alt="colorful screenshots of a onboarding app" />

        <AboutTheApp>
          <h4>About the App</h4>
          <p>
            Wusstest du, dass die ersten 100 Tage eines Employees als
            entscheidend für erfolgreiche Stellenbesetzungen gelten? <br />
            <br />
            Als Abschlussprojekt meines Web Development Trainees bei der
            neuefische GmbH habe ich eine Onboarding-App für die
            <em>
              ohhh! Organisation for Human Health and Happiness foundation
            </em>
            entwickelt. <br />
            <br />
            Ohhhboarding zielt darauf ab, die Mitarbeiter:innenerfahrung während
            des Onboarding-Prozesses positiv zu beeinflussen, indem es HR- und
            Tech-Wissen kombiniert. Die App spricht Digital Natives an und kann
            standortübergreifend eingesetzt werden.
            <br />
            <br />

            Repository:<br />
            <a href="https://github.com/annikavennemann/capstone-project">https://github.com/annikavennemann/capstone-project</a>
          </p>

          <h4>Tech Stack</h4>

          <Stack>
            <ul>
              <li>
                <DiReact size="60px" color="#8AA399" />
              </li>
              <li>React</li>
            </ul>
            <ul>
              <li>
                <SiReactrouter size="60px" color="#8AA399" />
              </li>
              <li>&nbsp; React<br/>router</li>
            </ul>
            <ul>
              <li>
                <SiStyledComponents size="60px" color="#8AA399" />
              </li>
              <li>&nbsp; &nbsp; &nbsp; Styled<br/>components</li>
            </ul>
            <ul>
              <li><DiPhp size="60px" color="#8AA399" /></li>
              <li>Php</li>
            </ul>
            <ul>
              <li><DiSymfonyBadge size="60px" color="#8AA399" /></li>
              <li>Symfony</li>
            </ul>
            <ul>
              <li><DiDoctrine size="60px" color="#8AA399" /></li>
              <li>Doctrine</li>
            </ul>
            <ul>
              <li><DiMysql size="60px" color="#8AA399" /></li>
              <li>MySQL</li>
            </ul>
            <ul>
              <li><DiNpm size="60px" color="#8AA399" /></li>
              <li>NPM</li>
            </ul>
            <ul>
              <li><SiAdobexd size="60px" color="#8AA399" /></li>
              <li>Adobe xd</li>
            </ul>
          </Stack>
        </AboutTheApp>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  margin: 7em 0em 3em 0em;

  h2 {
    font-size: 2.1em;
    font-weight: lighter;
    text-transform: uppercase;
    margin: 1em 1em 0.5em 1em;
    padding-bottom: 0.5em;
  }

  h3 {
    font-weight: lighter;
    text-transform: uppercase;
    margin: 0 0 0em 1.7em;
  }

  h4 {
    font-size: 0.8em;
    font-weight: lighter;
    margin: 1em 0em 1em 2.5em;
  }

  img {
    width: 105%;
    height: auto;
  }

  a {
      font-size: 0.8em;
      color: #8AA399;
  }
`

const AboutTheApp = styled.div`
  margin: 2em;

  h4 {
    margin: 0;
    font-size: 1em;
    font-weight: lighter;
    text-transform: uppercase;
  }

  p {
    font-size: 0.9em;
  }
`

const Stack = styled.div`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: space-evenly;

  ul {
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin: 1em 0;
    text-transform: uppercase;
    font-size: 0.7em;
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
`
