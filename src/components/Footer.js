import "../App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import uiInfo from "../config/info.json";

export default function Footer() {
  return (
    <div className="App-footer">
      <br />
      <br />
      <span style={{ lineHeight: "3em" }}>
        <a
          href={uiInfo.footer.github}
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", fontSize: "2em" }}
        >
          <FaGithub />
        </a>{" "}
        &nbsp; &nbsp;
        <a
          href={uiInfo.footer.linkedin}
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", fontSize: "2em" }}
        >
          <FaLinkedin />
        </a>{" "}
        &nbsp; &nbsp;
        <a
          href={`mailTo:${uiInfo.footer.email}`}
          style={{ color: "white", fontSize: "2em" }}
        >
          <IoMdMail />
        </a>{" "}
      </span>
      <br />
      <span style={{ lineHeight: "3em" }}>
        {uiInfo.footer.footerInfo} |{" "}
        <span style={{ fontFamily: "'Cookie', cursive", fontSize: "25px" }}>
          {uiInfo.footer.footerInfoName}{" "}
        </span>
        | <span>{uiInfo.footer.footerInfoTitle} </span>
      </span>
    </div>
  );
}
