import styled from 'styled-components/macro'
import profilePicture from '../images/profilePicture.png'
import { FaLinkedinIn } from "react-icons/fa"
import { FaXing } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function Welcome() {
    return (
        <>
            <Backgroud></Backgroud>
            <BusinessCard>
                <Profile>
                    <img src={profilePicture} alt=""/>
                    <p >ANNIKA<br/> VENNEMANN</p>
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

            <div>
                <h2>MOIN</h2>
                <p>WHO I AM & WHAT I DO</p>

                <p class="intro__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Mollitia ratione et repudiandae illum temporibus dicta vitae nam, beatae 
                    quisquam odit sit adipisci qui ea amet eligendi, aliquid sequi incidunt commodi.</p>


                <a href="#cv">CV</a>
                <a href="#academicEducation">MORE</a>
            </div>
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

const BusinessCard = styled.div`
    max-width: 350px;
    margin: 0 1em 0 2em;
    padding: 3em 1em; 
    display: flex;
    flex-direction: column
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