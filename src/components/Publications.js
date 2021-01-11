import styled from 'styled-components/macro'

export default function Publications() {
  return (
    <Wrapper>
      <h3>Publications</h3>
      {/* <p>
        PROF. MOOS,G. / DR. MÜLLER, T. / VENNEMANN, A. et. al (2020): Ihr
        Wechsel an die Spitze: Die ersten 100 Tage im Job – wie der Einstieg
        optimal gelingt. Eine Arbeitshilfe für Unternehmen der Gesundheits- und
        Sozialwirtschaft, Bochum: contec GmbH.
      </p> */}
      <p>
        VENNEMANN, A. (2021): Anonymisierungsbedarfe qualitativer Interviewdaten
        in besonders identifizierungsriskanten Kontexten der Arbeits- und
        Organisationsforschung. In: Richter, C. / Mojescik, K. (Hrsg.): Vom
        Geben und Nehmen. Wiebaden: Springer VS.
      </p>
      <p>
        VENNEMANN, A. (2019): Candidate & Employee Journey, Teil 1: Kontakte
        positiv gestalten, in: Häusliche Pflege Nr. 11/2019, Hannover: Vincentz
        Verlag.​
      </p>
      <p>
        VENNEMANN, A. (2019): Onboarding, Teil 1-3, in: Häusliche Pflege Nr.
        07/2019, 08/2019, 09/2019, Hannover: Vincentz Verlag.​
      </p>
      <p>
        VENNEMANN, A. (2019): Wissen an der Spitze sichern, in: Wohlfahrt Intern
        Nr. 06/2019, Berlin: Röthig Medien Verlag.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1em;
  background-color: white;
  border: 30px solid #f4ece6;

  h3 {
    text-align: center;
    text-transform: uppercase;
    font-weight: normal;
  }

  @media screen and (min-width: 600px) {
      padding: 1em 2.5em;
    }
`
