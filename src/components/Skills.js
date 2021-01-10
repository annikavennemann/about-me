import styled from 'styled-components/macro'

export default function Skills() {
  return (
    <Section>
      <Wrapper>
        <h2>Skills</h2>

        <ul>
          <h3>Personal Skills</h3>
          <li>Positives Mindset</li>
          <li>Motivation</li>
          <li>Teamwork</li>
          <li>Organisation</li>
          <li>Belastbarkeit</li>
          <li>Empathie</li>
          <li>Beratungskompetenz</li>
          <li>Projektmanagement</li>
        </ul>

        <ul>
          <h3>Human Resource Management</h3>
          <li>360° Personalmanagement</li>
          <li>Employer Branding & Personalmarketing</li>
          <li>Retention Management</li>
          <li>Candidate & Employee Experience</li>
          <li>Mitarbeiter:innenbefragungen</li>
          <li>Assessment Center</li>
          <li>Wissensmanagement</li>
          <li>Verentzung</li>
        </ul>

        <ul>
          <h3>Tech Stack</h3>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>node.js</li>
          <li>PHP</li>
          <li>Symfony</li>
          <li>MySQL</li>
          <li>Git Workflow</li>
          <li>Adobe XD</li>
        </ul>

        {/* <ul>
            <h3>Languages</h3>
            <li>Deutsch</li>
            <li>Englisch</li>
            <li>Spanisch</li>
            <li>Französisch</li>
        </ul> */}
      </Wrapper>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  border: 2em solid #f4ece6;
  background-color: white;

  h2 {
    margin: 0;
    text-transform: uppercase;
    font-weight: normal;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-top: 20px;
  flex-wrap: wrap;
  flex-grow: 1;

  ul {
    list-style-type: circle;
    padding: 0 1.5em;

    @media only screen and (min-width: 600px) {
      width: 27%;
    }
  }

  h3 {
    text-transform: uppercase;
    font-weight: normal;
  }
`
