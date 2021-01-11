import styled from 'styled-components/macro'
import { IoCloseOutline } from 'react-icons/io5'

export default function Menu() {
  return (
    <MenuDropdown>
      <IoCloseOutline size="2.3em" color="#505050" />
      <Wrapper>
        <a href="#skills">Skills</a>
        <a href="#cv">Academic Background</a>
        <a href="#abroad">Experience Abroad</a>
        <a href="#publications">Publications</a>
      </Wrapper>
    </MenuDropdown>
  )
}

const MenuDropdown = styled.div`
  margin-right: 0em;

  svg {
    top: 25px;
    float: right;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  margin: 1em;
  padding: 2em 2em 2em 0em;
  background-color: white;
  width: 100%;
  text-align: end;
  opacity: 0.8;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: normal;
    color: #505050;
    padding: 0.7em;

    &:hover {
      color: var(--green-grey);
    }
  }
`
