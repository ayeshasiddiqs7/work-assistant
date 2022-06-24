import "./App.css";
import { Tabs, Tab } from "react-bootstrap";
import TabPanel from "./components/TabPanel";
import URLTabPanel from "./components/URLTabPanel";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Header from "./components/Header";
import UTCtoISTConverter from "./components/UTCtoISTConverter";
import UUIDGenerator from "./components/UUIDGenerator";
import CountInString from "./components/CountInString";
import RandomString from "./components/RandomString";
import FadeIn from "react-fade-in";

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

  let uuidGenerator = <UUIDGenerator />;
  let countInString = <CountInString />;
  let randomString = <RandomString />;

  return (
    <div className="App">
      <Header />

      <span style={{ color: "black" }}>
        <FadeIn>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 tab-section"
          >
            <Tab eventKey="home" title="Base 64 Encode">
              <Body component={encodePanel} />
            </Tab>
            <Tab eventKey="profile" title="Base 64 Decode">
              <Body component={decodePanel} />
            </Tab>
            <Tab eventKey="about" title="UTC to Local time">
              <Body component={converter} />
            </Tab>
            <Tab eventKey="about2" title="UUID Generator">
              <Body component={uuidGenerator} />
            </Tab>
            <Tab eventKey="about3" title="Character-Word Count">
              <Body component={countInString} />
            </Tab>
            <Tab eventKey="about4" title="URL Encode">
              <Body component={urlEncodePanel} />
            </Tab>
            <Tab eventKey="about5" title="URL Decode">
              <Body component={urlDecodePanel} />
            </Tab>
            <Tab eventKey="about6" title="Random String Generator">
              <Body component={randomString} />
            </Tab>
          </Tabs>
        </FadeIn>
      </span>
      <Footer />
    </div>
  );
}

export default App;
