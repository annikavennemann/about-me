import styled from 'styled-components/macro'
import Education from './Education'
import Publications from './Publications'

export default function CV() {
  return (
    <CVSection id="cv">
      <h2>MY CV</h2>
      <h3>Work experience</h3>

      <Timeline>
        <ContainerLeft>
          <Content>
            <h3>Sep 2020 - heute</h3>
            <p>NEUEFISCHE GMBH, HAMBURG</p>
            <p>TRAINEE WEB DEVELOPMENT</p>
            <ul>
              <li>
                Intensiv-Coding-Bootcamp <br />
                (540 Stunden Programmierpraxis)
              </li>
              <li>
                Abschlussprojekt: Entwicklung einer Onboarding-App in
                Kooperation mit der ohhh! foundation - (JavaScript, React, Node.
                JS, PHP, Symfony MySQL, HTML5, CSS3, Git und GitHub). ​
              </li>
            </ul>
          </Content>
        </ContainerLeft>

        <ContainerRight>
          <ContentEhrenamt>
            <h3>Jun 2020 - heute</h3>
            <p>EHRENAMT: OHHH! FOUNDATION, HAMBURG</p>
            <p>PEOPLE MANAGERIN & EMPLOYER BRANDING EXPERT</p>
            <ul>
              <li>Aufbau einer neuen Employer Brand</li>
              <li>
                Begleitung eines oragnisationalen Transformationsprozessen
              </li>
              <li>
                Unterstützung der Unit People & Culture zur Stärkung der
                Unternehmenskultur
              </li>
            </ul>
          </ContentEhrenamt>
        </ContainerRight>

        <ContainerLeft>
          <Content>
            <h3>Okt 2016 - Dez 2019</h3>
            <p>CONTEC GMBH, BOCHUM</p>
            <h4>Jan 2019 - Dez 2019</h4>
            <p>PERSONAL- & ORGANISATIONSBERATERIN</p>
            <ul>
              <li>360° Personalmanagement, u.a.</li>
              <li>
                Aufbau eines strategischen Personalmarketings, Employer Branding
                & Recruitings im Interim Mandat
              </li>
              <li>Konzeption und Auswertung von Mitarbeiterbefragungen</li>
              <li>Durchführung von Potenzialanalysen und Assessment Center</li>
              <li>
                Entwicklung und Moderation von Klausurtagungen und Workshops
              </li>
              <li>Aufbau der Vertriebskoordination</li>
              <li>Publikation diverser Fachartikel</li>
            </ul>

            <h4>04/2017-12/2018</h4>
            <p>PROJEKTASSISTENZ ALS WERKSTUDENTIN​</p>
            <ul>
              <li>
                Unterstützung von Organisationsentwicklungs- und
                Personalmanagementprojekten, u.a.
              </li>
              <li>Entwicklung einer Assessment Center Toolbox</li>
              <li>Durchführung von Kennzahlen- und Wettbewerbsanalysen</li>
              <li>Entwicklung von Rollen- und Funktionsbeschreibungen</li>
              <li>Planung und Durchführung von Workshops</li>
            </ul>

            <h4>01/2017-03/2017</h4>
            <p>PROJEKTASSISTENZ ALS PRAKTIKANTIN</p>
            <ul>
              <li>Angestellt bei der IEGUS GmbH​, Tochter der contec GmbH</li>
              <li>
                Unterstützung in verschiedenen Projekten mit dem Schwerpunkt
                Fachkräftebedarf und -gewinnung
              </li>
              <li>40 Wochenstunden</li>
            </ul>

            <h4>01/2017-03/2017</h4>
            <p>PROJEKTASSISTENZ ALS PRAKTIKANTIN</p>
            <ul>
              <li>Angestellt bei conQuaesso JOBS​, Tochter der contec GMBH</li>
              <li>
                Unterstützung der Projektleitungen in Personalauswahlprozessen
                von Führungskräften (von der Aufnahme des Anforderungsprofils
                bis zur Durchführung von Vorstellungsgesprächen)
              </li>
              <li>40 Wochenstunden</li>
            </ul>
          </Content>
        </ContainerLeft>

        <ContainerRight>
          <Content>
            <h3>Mai 2014 - Jan 2016</h3>
            <p>ZENTRUM FÜR INTERDISZIPLINÄRE REGIONALFORSCHUNG, BOCHUM</p>
            <p>STUDENTISCHE HILFSKRAFT</p>
            <ul>
              <li>
                Mitarbeit in den Projekten "Infromations- und
                Qualifikationszentrum für Kommunen in Nordrhein-Westfalen" und
                "Projekt Präventive Familienpolitik - Ressourcenstärkung für
                Familien":
              </li>
              <li>
                Moderation und Leitung von Arbeitsgruppen auf Expertenworkshops
              </li>
              <li>Verfassen von Artikeln für das Internetportal via Typo3</li>
              <li>Recherchearbeiten</li>
            </ul>
          </Content>
        </ContainerRight>
      </Timeline>
      <Education />

      <h3>experience abroad</h3>
        <Timeline>
            <ContainerRight>
                <Content>
                    <h3>Dez 2019 - Mär 2020</h3>
                    <p>SABBATICAL IN ZENTRAL- UND SÜDAMERIKA ("Ohh, wie schön ist Panama!")</p>
                </Content>
            </ContainerRight>
            <ContainerLeft>
                <Content>
                    <h3>Feb 2014 - Mär 2014</h3>
                    <p>TESTIMONY SCHOOL OF ARUSHA, TANSANIA​</p>
                    <p>VOLUNTEER, Unterricht von Schüler:innen der 5. und 7. Klasse</p>
                </Content>
            </ContainerLeft>
            <ContainerRight>
                <Content>
                    <h3>Okt 2011 - Dez 2011</h3>
                    <p>KNYSNA ELEPHANT PARK, SÜDAFRIKA</p>
                    <p>VOLUNTEER, Verhaltensforschung von Elefanten</p>
                </Content>
            </ContainerRight>
        </Timeline>
        <Publications />
    </CVSection>
  )
}

const CVSection = styled.section`
  background-color: var(--light-creme);
  padding-top: 6em;

  h2 {
    margin-top: 0;
    margin-left: 50px;
    padding-top: 20px;
    font-weight: normal;
  }

  h3 {
    text-align: center;
    text-transform: uppercase;
    font-weight: normal;
  }

  h4 {
    font-weight: normal;
  }
`

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &:after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;

    /* Place the timelime to the left */
    @media screen and (max-width: 600px) {
      left: 31px;
    }
  }
`

const ContainerLeft = styled.div`
  padding: 1em 2em;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: 0;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 3px solid #8aa399;
    top: 15px;
    border-radius: 50%;
    z-index: 1;

    @media screen and (max-width: 600px) {
      left: 15px;
    }
  }

  &:before {
    content: ' ';
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 23px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;

    @media screen and (max-width: 600px) {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }
  }
`

const ContainerRight = styled.div`
  padding: 1em 2em;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: 50%;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0%;
  }

  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 3px solid #8aa399;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    left: -16px;

    @media screen and (max-width: 600px) {
      left: 15px;
    }
  }

  &:before {
    content: ' ';
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 23px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;

    @media screen and (max-width: 600px) {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }
  }
`

const Content = styled.div`
  padding: 2% 5%;
  background-color: white;
  position: relative;
  border-radius: 6px;
`

const ContentEhrenamt = styled.div`
  padding: 2% 5%;
  background-color: #e5e5e5;
  position: relative;
  border: 4px white solid;
  border-radius: 6px;
`
