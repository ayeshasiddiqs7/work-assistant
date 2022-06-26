import "../App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import uiInfo from "../config/info.json";
import ReactTooltip from "react-tooltip";

export default function Footer() {
  const currentURL = window.location;
  return (
    <div className="App-footer">
      <br />
      <br />
      <span style={{ lineHeight: "3em" }}>
        {/* <OverlayTrigger
          key={"top"}
          placement={"top"}
          overlay={<Tooltip id={`tooltip-git`}>View my work on GitHub</Tooltip>}
        > */}
        <a
          data-tip="Take a look at my work on GitHub"
          data-type="light"
          data-for="gitHub"
          href={uiInfo.footer.github}
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", fontSize: "2em" }}
        >
          <FaGithub />
        </a>{" "}
        <ReactTooltip id="gitHub" effect="solid" />
        {/* </OverlayTrigger> */}
        &nbsp; &nbsp;
        <a
          data-tip="Lets connect on LinkedIn"
          data-type="light"
          data-for="linkedInConnect"
          href={uiInfo.footer.linkedin}
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", fontSize: "2em" }}
        >
          <FaLinkedin />
        </a>{" "}
        <ReactTooltip id="linkedInConnect" effect="solid" />
        &nbsp; &nbsp;
        <a
          data-tip="Happy to receive feedback on Work Assistant"
          data-type="light"
          data-for="emailMe"
          href={`mailTo:${uiInfo.footer.email}?subject=${uiInfo.email.title}&body=${uiInfo.email.salutation}%0D%0A${uiInfo.email.body}(${currentURL}):%0D%0A%0D%0A`}
          style={{ color: "white", fontSize: "2em" }}
        >
          <IoMdMail />
        </a>{" "}
        <ReactTooltip id="emailMe" effect="solid" />
      </span>
      <br />
      <span style={{ lineHeight: "3em" }}>
        {uiInfo.footer.footerInfo} {new Date().getFullYear()} |{" "}
        <span className="appTitleFooter">
          <a
            href="https://github.com/ayeshasiddiqs7/work-assistant#work-assistant"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            {uiInfo.footer.footerInfoName}{" "}
          </a>
        </span>
      </span>
      <br />
      Developed by:{" "}
      <span style={{ fontFamily: "'Cookie', cursive", fontSize: "25px" }}>
        {uiInfo.footer.footerInfoTitle}
      </span>
    </div>
  );
}
