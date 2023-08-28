import "../App.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy, FaCheck } from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";
import { v4 as uuidv4 } from "uuid";
import { BsCheck2All } from "react-icons/bs";
// import ReactTooltip from "react-tooltip";

export default function UUIDGenerator() {
  const [displayUUID, setUUID] = useState(uuidv4());
  const [randomIDsToGenerate, setRandomIDsToGenerate] = useState([]);
  const [numberOfIDs, setNumberOfIDs] = useState("");
  const [textCopied, setTextCopied] = useState(false);
  const [multipleUUIDCopied, setMultipleUUIDSCopied] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState({ disp: false });
  const [customIDs, setCustomIDs] = useState({
    submitted: false,
    value: "",
    numberIsOne: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setTextCopied(false);
      setMultipleUUIDSCopied(false);
    }, 1000);
  }, [textCopied, multipleUUIDCopied]);

  const displaySelectedUUIDs = () => {
    let idArray = [];
    for (let i = 1; i <= numberOfIDs; i++) {
      idArray.push(uuidv4());
    }
    setRandomIDsToGenerate(idArray);
  };

  const generateRandomIDs = (numberOfUUIDs) => {
    if (numberOfUUIDs) {
      if (numberOfIDs === "1") {
        setCustomIDs({
          submitted: false,
          value: numberOfUUIDs,
          numberIsOne: true,
        });
      } else {
        displaySelectedUUIDs();
        setCustomIDs({
          submitted: true,
          value: numberOfUUIDs,
          numberIsOne: false,
        });
      }
    }
  };

  const validateRandomGeneration = () => {
    if (numberOfIDs.length === 0) {
      setCustomIDs({ submitted: false });
      setErrorDisplay({
        disp: true,
        msg: "Please enter a number to generate UUID!🧐",
      });
    } else if (Number(numberOfIDs) > 5000) {
      setCustomIDs({ submitted: false });
      setErrorDisplay({
        disp: true,
        msg: "Max entries of only 5000 are allowed!🧐",
      });
    } else {
      setErrorDisplay({ disp: false });
      generateRandomIDs(numberOfIDs);
    }
  };

  return (
    <>
      <br />
      <h5>Universally Unique Identifier</h5>
      <h2 className="number-font">{displayUUID}</h2>
      {/* Refresh UUID button */}
      <Button variant="light" onClick={() => setUUID(uuidv4())}>
        <GrRefresh />
        &nbsp; Refresh
      </Button>
      {/* Copy UUID button */}
      &nbsp; &nbsp; &nbsp;
      {textCopied ? (
        <Button onClick={() => setTextCopied(true)} variant="success">
          <FaCheck />
          &nbsp; Copied
        </Button>
      ) : (
        <CopyToClipboard text={displayUUID}>
          <Button onClick={() => setTextCopied(true)} variant="light">
            <FaCopy />
            &nbsp; Copy
          </Button>
        </CopyToClipboard>
      )}
      <br />
      <hr />
      <br />
      {/* Custom generation of UUIDs */}
      <h5> How many UUIDs do you want to generate</h5>
      <span className="row justify-content-center width-100">
        <input
          className="form-control col-sm-4 number-font"
          type="number"
          min="1"
          max="5000"
          style={{ width: "20%" }}
          placeholder="Enter a number"
          value={numberOfIDs}
          onChange={(e) => setNumberOfIDs(e.target.value)}
        />{" "}
        &nbsp;
        {/* Submit button */}
        <Button
          className="col-sm-1 app-button"
          style={{ backgroundColor: "#c3073f", border: "none" }}
          onClick={() => {
            validateRandomGeneration();
          }}
        >
          Submit
        </Button>{" "}
        &nbsp;
        {/* Cancel button */}
        <Button
          className="col-sm-1"
          variant="secondary"
          onClick={() => {
            setCustomIDs({ submitted: false, value: "", numberIsOne: false });
            setNumberOfIDs("");
            setErrorDisplay(false);
          }}
        >
          Cancel
        </Button>
      </span>
      <br />
      {errorDisplay.disp ? <h5>{errorDisplay.msg}</h5> : null}
      {/* A custom number of IDs to be generated */}
      {customIDs.submitted ? (
        <>
          <h5>
            Generated <span className="number-font">{customIDs.value}</span>{" "}
            UUIDs &nbsp;&nbsp;&nbsp;
            {multipleUUIDCopied ? (
              <BsCheck2All
                style={{
                  color: "green",
                }}
              />
            ) : (
              <>
                <CopyToClipboard text={randomIDsToGenerate}>
                  {/* <Button onClick={() => setMultipleUUIDSCopied(true)} variant="light"> */}
                  <FaCopy
                    data-tip="Copy to clipboard"
                    data-type="light"
                    data-for="copyUUIDS"
                    style={{ cursor: "pointer" }}
                    onClick={() => setMultipleUUIDSCopied(true)}
                  />
                  {/* &nbsp; Copy */}
                  {/* </Button> */}
                </CopyToClipboard>
                {/* <ReactTooltip id="copyUUIDS" effect="solid" /> */}
              </>
            )}
          </h5>
          <div className="number-font generatedUUIDs">
            {randomIDsToGenerate.map((uuid) => (
              <>
                <span>{uuid}</span>
                <br />
              </>
            ))}
          </div>
          <br />
          {/* Copy custom UUIDs generated */}
          {/* {multipleUUIDCopied ? (
            <Button
              onClick={() => setMultipleUUIDSCopied(true)}
              variant="success"
            >
              <FaCheck />
              &nbsp; Copied
            </Button>
          ) : (
            <CopyToClipboard text={randomIDsToGenerate}>
              <Button
                onClick={() => setMultipleUUIDSCopied(true)}
                variant="light"
              >
                <FaCopy />
                &nbsp; Copy
              </Button>
            </CopyToClipboard>
          )} */}
        </>
      ) : null}
      {customIDs.numberIsOne ? <h5>One UUID can be found above 😊</h5> : null}
    </>
  );
}
