import styled from 'styled-components/macro'

export default function Impressum() {
  return (
    <Wrapper>
      <h2>Impressum</h2>
      <h3>Angaben gemäß §5 TMG</h3>
      <p>Annika Vennemann
      <br/>Reyesweg 10
      <br/>2081 Hamburg</p>
      <p>
        Tel.: +49 173 3975041
        <br/>
        E-Mail: annikavennemann@aol.com
      </p>
      <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
      <p>Annika Vennemann
      <br/>Reyesweg 10
      <br/>2081 Hamburg</p>
      <p>
        Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <h3>Haftung für Inhalte</h3>
      <p>
        Als Diensteanbieterin bin ich gemäß Telemediengesetz (TMG) §7 (1) für
        eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
        verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieterin
        jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
        Informationen zu überwachen oder nach Umständen zu forschen, die auf
        eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
        oder Sperrung der Nutzung von Informationen nach den allgemeinen
        Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
        jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
        Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
        Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
        <br />
        Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte
        ich Sie mich umgehend zu kontaktieren, damit ich die rechtswidrigen
        Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.
      </p>
      <h3>Haftung für Links</h3>
      <p>
        Meine Webseite enthält Links zu externen Websites Dritter, auf deren
        Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
        <br />
        Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte ich
        Sie mich zu kontaktieren. Sie finden die Kontaktdaten im Impressum.
      </p>

      <h3>Urheberrechtshinweis</h3>
      <p>
        Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen
        dem Urheberrecht der Bundesrepublik Deutschland. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der
        jeweiligen Autorin bzw. Erstellerin. Falls notwendig, werde ich die
        unerlaubte Nutzung von Teilen der Inhalte meiner Seite rechtlich
        verfolgen. Sollten Sie auf dieser Webseite Inhalte finden, die das
        Urheberrecht verletzen, bitte ich Sie mich zu kontaktieren.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 8em 3em 3em 3em;
    font-size: 0.9em;

    h2 {
        font-weight: normal;
        font-size: 1.7em;
    }

    h3 {
        margin-top: 1.5em;
        font-weight: normal;
    }
`

