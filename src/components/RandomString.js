import "../App.css";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { alphaNumeric, randomAlphaNumeric } from "../lib/util";
import { BsCheck2All } from "react-icons/bs";
import ReactTooltip from "react-tooltip";

export default function RandomString() {
  const [alphaNumericText, setAlphaNumeric] = useState(alphaNumeric());
  const [randomStringLength, setRandomStringLength] = useState(16);
  const [stringGenerate, setStringGenerate] = useState({
    submitted: false,
  });
  const [textCopied, setTextCopied] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextCopied(false);
    }, 1000);
  }, [textCopied]);

  return (
    <>
      <Form>
        <Form.Group
          className="mb-3 form-group"
          controlId="exampleForm.ControlTextarea1"
        >
          <br />
          <span className="row">
            <Form.Label className="col-sm-3">
              Characters in random string
            </Form.Label>
            <Form.Control
              style={{ width: "70%" }}
              className="col-sm-6 textArea-control"
              value={alphaNumericText}
              onChange={(e) => setAlphaNumeric(e.target.value)}
            />
          </span>
          <br />
          <span className="row d-flex justify-content-left">
            <Form.Label className="col-sm-3">Length of string</Form.Label>
            <Form.Control
              className="col-sm-6 textArea-control"
              style={{ width: "70%" }}
              value={randomStringLength}
              type="number"
              min="1"
              max="20000"
              onChange={(e) => setRandomStringLength(e.target.value)}
            />
          </span>
        </Form.Group>
      </Form>
      <span className="row justify-content-center width-100">
        {stringGenerate.submitted || maxLengthError ? (
          <>
            {" "}
            <Button
              variant="secondary"
              onClick={() => {
                setAlphaNumeric(alphaNumeric());
                setRandomStringLength(16);
                setStringGenerate({ submitted: false });
                setMaxLengthError(false);
              }}
              className="col-sm-2"
            >
              Reset
            </Button>
            &nbsp;&nbsp;
          </>
        ) : null}
        <Button
          disabled={alphaNumericText === ""}
          style={{ backgroundColor: "#c3073f", border: "none" }}
          onClick={() => {
            if (randomStringLength <= 20000) {
              setMaxLengthError(false);
              let value = randomAlphaNumeric(
                randomStringLength,
                alphaNumericText
              );
              setStringGenerate({
                value,
                submitted: true,
              });
            } else {
              setMaxLengthError(true);
              setStringGenerate({
                submitted: false,
              });
            }
          }}
          className="col-sm-2 app-button"
        >
          Generate
        </Button>{" "}
      </span>
      {stringGenerate.submitted ? (
        <>
          <br />
          <Form>
            <Form.Group
              className="mb-3 form-group"
              controlId="exampleForm.ControlTextarea1"
            >
              <br />
              <Form.Label>
                <h5>Generated random string</h5>
              </Form.Label>
              <br />
              <span style={{ position: "relative" }}>
                <Form.Control
                  as="textarea"
                  className="textArea-control"
                  rows={10}
                  value={stringGenerate.value}
                  style={{ paddingRight: "30px" }}
                />
                {textCopied ? (
                  <BsCheck2All className="copiedTextIcon" />
                ) : (
                  <>
                    <CopyToClipboard
                      text={stringGenerate.value}
                      onCopy={() => setTextCopied(true)}
                    >
                      <FaCopy
                        data-tip="Copy to clipboard"
                        data-type="light"
                        data-for="copyRandomString"
                        className="copyTextIcon"
                      />
                    </CopyToClipboard>
                    <ReactTooltip id="copyRandomString" effect="solid" />
                  </>
                )}
              </span>
            </Form.Group>
          </Form>
        </>
      ) : null}
      {maxLengthError ? (
        <>
          <br />
          Maximum length of string supported is 20000🧐
        </>
      ) : null}
    </>
  );
}
