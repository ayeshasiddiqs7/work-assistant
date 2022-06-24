import "../App.css";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { FaCopy, FaCheck } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { alphaNumeric, randomAlphaNumeric } from "../lib/util";

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
        {stringGenerate.submitted ? (
          <>
            {" "}
            <Button
              variant="secondary"
              onClick={() => {
                setAlphaNumeric(alphaNumeric());
                setRandomStringLength(16);
                setStringGenerate({ submitted: false });
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
            }
          }}
          className="col-sm-2 app-button"
        >
          Submit
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
              <Form.Control
                as="textarea"
                className="textArea-control"
                rows={10}
                value={stringGenerate.value}
              />
            </Form.Group>
          </Form>
          {textCopied ? (
            <Button variant="success">
              <FaCheck />
              &nbsp; Copied
            </Button>
          ) : (
            <CopyToClipboard
              text={stringGenerate.value}
              onCopy={() => setTextCopied(true)}
            >
              <Button variant="light">
                <FaCopy /> Copy
              </Button>
            </CopyToClipboard>
          )}
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
