import "../App.css";
import uiInfo from "../config/info.json";

export default function Header() {
  return (
    <div className="headerWrapper">
      <br />
      <h1>{uiInfo.header.appTitle}</h1>

      <p style={{ color: "white" }}>{uiInfo.header.appDescription}</p>
      <hr className="app-ruler" />
    </div>
  );
}
