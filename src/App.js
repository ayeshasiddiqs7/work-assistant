import "./App.css";
import { Tabs, Tab } from "react-bootstrap";
import TabPanel from "./components/TabPanel";
import URLTabPanel from "./components/URLTabPanel";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Header from "./components/Header";
import UTCtoISTConverter from "./components/UTCtoISTConverter";

function App() {
  let encodePanel = (
    <TabPanel
      operation="encode"
      response="Encoded"
      buttonText="Encode"
      backgroundColor="#FFFC9A"
    />
  );

  let decodePanel = (
    <TabPanel
      operation="decode"
      response="Decoded"
      buttonText="Decode"
      backgroundColor="#B6FF9A"
    />
  );

  let converter = <UTCtoISTConverter />;

  let urlEncodePanel = (
    <URLTabPanel
      operation="encode"
      response="Encoded"
      buttonText="Encode URL"
      backgroundColor="#FFFC9A"
    />
  );

  let urlDecodePanel = (
    <URLTabPanel
      operation="decode"
      response="Decoded"
      buttonText="Decode URL"
      backgroundColor="#B6FF9A"
    />
  );

  return (
    <div className="App">
      <Header />

      <span style={{ color: "black" }}>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Base 64 Encode">
            <Body component={encodePanel} />
          </Tab>
          <Tab eventKey="profile" title="Base 64 Decode">
            <Body component={decodePanel} />
          </Tab>
          <Tab eventKey="about" title="UTC to Local time converter">
            <Body component={converter} />
          </Tab>
          <Tab eventKey="about2" title="URL Encode">
            <Body component={urlEncodePanel} />
          </Tab>
          <Tab eventKey="about3" title="URL Decode">
            <Body component={urlDecodePanel} />
          </Tab>
        </Tabs>
      </span>
      <Footer />
    </div>
  );
}

export default App;
