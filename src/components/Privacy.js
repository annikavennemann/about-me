import styled from 'styled-components/macro'

export default function Privacy() {
  return (
    <Wrapper>
      <h2>Datenschutzerklärung</h2>
      <h3>Allgemeiner Hinweis und Pflichtinformationen<br/>Benennung der verantwortlichen Stelle</h3>
      <p>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
        ist:
      </p>
      <p>
        Annika Vennemann
        <br />
        Reyesweg 10
        <br />
        2081 Hamburg
      </p>
      <p>
        Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen
        über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
        (z.B. Namen, Kontaktdaten o. Ä.).
      </p>

      <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
      <p>
        Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
        Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
        Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
        formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf
        erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>

      <h3>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
      <p>
        Als Betroffene:r steht Ihnen im Falle eines datenschutzrechtlichen
        Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist
        der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz
        unseres Unternehmens befindet. Dieser&nbsp;
        <a
          href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
        >
           Link 
        </a>
        &nbsp;stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten
        bereit.
      </p>

        <h3>Recht auf Datenübertragbarkeit</h3>
      <p>
        Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
        Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten,
        an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt
        in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung
        der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
        soweit es technisch machbar ist.
      </p>

      <h3>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>
      <p>
        Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen
        das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
        personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den
        Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
        Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren
        Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über
        die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
      </p>

      <h3>SSL- bzw. TLS-Verschlüsselung</h3>
      <p>
        Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
        Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website
        eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese
        Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine
        verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers
        und am Schloss-Symbol in der Browserzeile.
      </p>

      <h3>YouTube</h3>
      <p>
        Für Integration und Darstellung von Videoinhalten nutzt unsere Website
        Plugins von YouTube. Anbieter des Videoportals ist die YouTube, LLC, 901
        Cherry Ave., San Bruno, CA 94066, USA.
      </p>
      <p>
        Bei Aufruf einer Seite mit integriertem YouTube-Plugin wird eine
        Verbindung zu den Servern von YouTube hergestellt. YouTube erfährt
        hierdurch, welche unserer Seiten Sie aufgerufen haben.
      </p>
      <p>
        YouTube kann Ihr Surfverhalten direkt Ihrem persönlichen Profil
        zuzuordnen, sollten Sie in Ihrem YouTube Konto eingeloggt sein. Durch
        vorheriges Ausloggen haben Sie die Möglichkeit, dies zu unterbinden.
      </p>
      <p>
        Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
        Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
        Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
      </p>
      <p>
        Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der
        Datenschutzerklärung von YouTube unter:&nbsp;
        <a href="https://www.google.de/intl/de/policies/privacy">
          https://www.google.de/intl/de/policies/privacy
        </a>
        .
      </p>
      <p>
        <small>
          Quelle: Datenschutz-Konfigurator von &nbsp;
          <a href="http://www.mein-datenschutzbeauftragter.de">
            mein-datenschutzbeauftragter.de
          </a>
        </small>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 7em 3em 3em 3em;
    font-size: 0.9em;

    h2 {
        font-weight: normal;
        font-size: 1.7em;
    }

    h3 {
        margin-top: 1.5em;
        font-weight: normal;
    }

    a {
        color: var(--green-grey)
    }
`