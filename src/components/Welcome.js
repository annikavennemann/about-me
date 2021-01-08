import styled from 'styled-components/macro'
import profilePicture from '../images/profilePicture.png'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXing } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { BsFillEnvelopeFill } from 'react-icons/bs'

export default function Welcome() {
  return (
    <>
      <Backgroud></Backgroud>
      <Intro>
        <BusinessCard>
          <Profile>
            <img src={profilePicture} alt="" />
            <p>
              ANNIKA
              <br /> VENNEMANN
            </p>
          </Profile>
          <Contact>
            <a href="https://www.linkedin.com/in/annikavennemann/">
              <FaLinkedinIn size="1.5em" color="black" />
            </a>
            <a href="https://www.xing.com/profile/Annika_Vennemann/cv">
              <FaXing size="1.5em" color="black" />
            </a>
            <a href="https://github.com/annikavennemann">
              <FaGithub size="1.5em" color="black" />
            </a>
            <a href="mailto:annikavennemann@aol.com">
              <BsFillEnvelopeFill size="1.5em" color="black" />
            </a>
          </Contact>
        </BusinessCard>

        <IntroText>
          <h2>Moin</h2>
          <h4>Who I am & what I do</h4>

          <p>
            I'm a web developer based in Hamburg. I have an HR background and
            love to implement great ideas for people & with people, for mobile
            or web devices. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Mollitia ratione et repudiandae illum temporibus dicta vitae
            nam, beatae quisquam odit sit adipisci qui ea amet eligendi, aliquid
            sequi incidunt commodi.
          </p>

          <ButtonCV href="#">CV</ButtonCV>
          <ButtonMore href="#academicEducation">MORE</ButtonMore>
        </IntroText>
      </Intro>
    </>
  )
}

const Backgroud = styled.div`
  position: absolute;
  left: 0;
  width: 300px;
  height: 710px;
  background-color: var(--dark-creme);
  z-index: -1;
`

const Intro = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (min-width: 600px) {
    flex-wrap: nowrap;
  }
`

const BusinessCard = styled.div`
  min-width: 300px;
  max-width: 350px;
  margin: 0 1em 0 2em;
  padding: 3em 1em;
  display: flex;
  flex-direction: column;
`

const Profile = styled.div`
  background-color: var(--light-creme);
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 4em 0 2em 0;
  text-align: center;

  img {
    width: 70%;
    height: auto;
    border-radius: 50%;
  }

  p {
    font-weight: normal;
    font-size: 1.5em;
  }
`

const Contact = styled.div`
  display: flex;
  padding: 0.5em 0;
  justify-content: space-evenly;
  background-color: white;
  box-shadow: 2px 4px 4px 0 rgba(0, 0, 0, 0.1);
`

const IntroText = styled.div`
  padding: 1.5em 2.8em;
  background-color: white;

  h2 {
    margin: 1.5em 0 0.5em 0;
    font-size: 2.5em;
    font-weight: normal;
    text-transform: uppercase;

    @media only screen and (min-width: 600px) {
        font-size: 3em;
    }

    @media only screen and (min-width: 768px) {
        font-size: 3.5em;
        margin-bottom: 0.3em;
    }
  }

  h4 {
    margin: 0;
    font-size: 1.5em;
    font-weight: lighter;
    text-transform: uppercase;
    
    @media only screen and (min-width: 768px) {
        font-size: 2em;
        padding-bottom: 0.6em;
    }
  }

  p {
    padding: 0 1.5em 2em 0;

    @media only screen and (min-width: 600px) {
        font-size: 1.1em;
    }

    @media only screen and (min-width: 768px) {
        font-size: 1.3em;
    }
  }
`

const ButtonCV = styled.a`
    font-size: 0.8em;
    font-weight: lighter;
    text-decoration: none;
    background-color: #3772FF;
    color: #ffffff;
    padding: 6px 30px;
    border-radius: 20px;
    box-shadow: 8px 8px 16px #ededed, -8px -8px 16px #ffffff;
`

const ButtonMore = styled.a`
    margin-left: 2em;
    font-size: 0.8em;
    font-weight: lighter;
    text-decoration: none;
    background-color: #8AA399;
    color: #ffffff;
    padding: 6px 30px;
    border-radius: 20px;
    box-shadow: 8px 8px 16px #ededed, -8px -8px 16px #ffffff;
`