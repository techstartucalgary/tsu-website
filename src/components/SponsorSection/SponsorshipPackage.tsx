import "./SponsorshipPackage.css";

const SponsorshipPackage = () => {
  return (
    <div className="SponsorshipPackage">
      <iframe
        src="https://uofc-my.sharepoint.com/personal/niyousha_raeesinejad_ucalgary_ca/_layouts/15/Doc.aspx?sourcedoc={06435acd-d794-4d8e-9fdd-f4cf20b9adee}&amp;action=embedview&amp;wdEmbedCode=0"
        width="80%"
        height="1000px"
        frameBorder="0"
      >
        This is an embedded{" "}
        <a target="_blank" href="https://office.com">
          Microsoft Office
        </a>{" "}
        document, powered by{" "}
        <a target="_blank" href="https://office.com/webapps">
          Office
        </a>
        .
      </iframe>
      {/*
      <iframe
        width="80%"
        height="1000px"
        frameBorder="border:1px solid black"
        src="https://docs.google.com/document/d/e/2PACX-1vTeeihLSKmhpPIU3g3nS-ih49lq5pRNH_81glHxBQBMZlrp0N3wkI3J2hPVoiPdAIs1-_vklD08MytY/pub?embedded=true"
        />
      */}
    </div>
  );
};

export default SponsorshipPackage;
