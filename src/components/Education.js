import styled from 'styled-components/macro'

export default function Education() {
  return (
    <Wrapper>
      <h3>Academic background</h3>
      <h4>
        10/2015-12/2018 <br /> Ruhr-Universität Bochum
      </h4>
      <p>
        Master (M. A.) Sozialwissenschaft – Management und Regulierung von
        Arbeit, Wirtschaft und Organisation
      </p>
      <ul>
        <li>
          Thema der Masterthesis: Die 100 ersten Tage im Job – Wissensmanagement
          im Prozess der strategischen Unternehmensnachfolge in der
          Sozialwirtschaft
        </li>
        <li>Abschlussnote: 1,0</li>
      </ul>

      <h4>
        02/2016-07/2016 <br /> Universidad Complutense Madrid
      </h4>
      <ul>
        <li>
          Master-Auslandssemester – Estudios avanzados de trabajo y empleo
        </li>
      </ul>

      <h4>
        10/2012-09/2015 <br /> Ruhr-Universität Bochum
      </h4>
      <p>Bachelor (B. A.) Sozialwissenschaft ​</p>
      <ul>
        <li>
          Thema der Bachelorarbeit: Vom 'Familienernährer' zum 'aktiven Vater'?
          Eine empirische Querschnittsanalyse der Vereinbarkeit von Familie und
          Beruf in der Bundesrepublik Deutschland
        </li>
        <li>Abschlussnote: 1,3</li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1em;
  background-color: white;
  border: 30px solid #f4ece6;

  ul {
    margin-bottom: 3em;
  }

  h3 {
    text-align: center;
    text-transform: uppercase;
    font-weight: normal;
  }

  h4 {
    text-transform: uppercase;
    font-weight: normal;
  }

  @media screen and (min-width: 600px) {
      padding: 1em 2.5em;
    }
`
