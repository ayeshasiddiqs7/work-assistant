import "../App.css";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
// import ReactTooltip from "react-tooltip";
import { encode, decodeUTF8 } from "../lib/util";

export default function TabPanel({
  operation,
  response,
  buttonText,
  backgroundColor,
}) {
  const [textForOp, setTextForOp] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [encodeResp, setEncodeResp] = useState("");
  const [textCopied, setTextCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextCopied(false);
    }, 1000);
  }, [textCopied]);

  return (
    <>
      <Form>
        <Form.Group
          style={{ marginLeft: "10%", paddingRight: "10%" }}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <br />
          <Form.Label>
            <h5>Enter text to {operation}</h5>
          </Form.Label>
          <Form.Control
            // style={{ backgroundColor: backgroundColor }}
            as="textarea"
            className="textArea-control"
            rows={7}
            value={textForOp}
            onChange={(e) => setTextForOp(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button
        disabled={textForOp === ""}
        variant="secondary"
        onClick={() => {
          setTextForOp("");
        }}
      >
        Clear
      </Button>
      &nbsp; &nbsp;
      <Button
        disabled={textForOp === ""}
        style={{ backgroundColor: "#c3073f", border: "none" }}
        className="app-button"
        onClick={() => {
          setEncodeResp(
            operation === "encode" ? encode(textForOp) : decodeUTF8(textForOp)
          );
          setButtonClicked(true);
        }}
      >
        {buttonText}
      </Button>
      <br />
      <br />
      <br />
      {buttonClicked ? (
        <Form>
          <Form.Group
            style={{ marginLeft: "10%", paddingRight: "10%" }}
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>
              <h5>{response} Text</h5>
            </Form.Label>
            <br />
            <span style={{ position: "relative" }}>
              <Form.Control
                style={{ backgroundColor: "white", paddingRight: "30px" }}
                as="textarea"
                className="textArea-control"
                rows={10}
                value={encodeResp}
                disabled
              />
              {/* <FaCopy
                style={{
                  position: "absolute",
                  color: "green",
                  top: "10px",
                  right: "25px",
                }}
              /> */}
              {textCopied ? (
                <>
                  <BsCheck2All className="copiedTextIcon" />
                </>
              ) : (
                <>
                  <CopyToClipboard
                    text={encodeResp}
                    onCopy={() => setTextCopied(true)}
                  >
                    <FaCopy
                      data-tip="Copy to clipboard"
                      data-type="light"
                      data-for="copyEncode"
                      className="copyTextIcon"
                    />
                  </CopyToClipboard>
                  {/* <ReactTooltip id="copyEncode" effect="solid" /> */}
                </>
              )}
            </span>
          </Form.Group>
          {/* {textCopied ? (
            <Button variant="success">
              <FaCheck />
              &nbsp; Copied
            </Button>
          ) : (
            <CopyToClipboard
              text={encodeResp}
              onCopy={() => setTextCopied(true)}
            >
              <Button variant="light">
                <FaCopy /> Copy
              </Button>
            </CopyToClipboard>
          )} */}

          <br />
          <br />
        </Form>
      ) : null}
      <br />
      <br />
    </>
  );
}
