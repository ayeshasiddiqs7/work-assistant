import "../App.css";
import { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { urlEncode, urlDecode } from "../lib/util";

export default function URLTabPanel({
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
    }, 1500);
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
            <h5>Enter URL to {operation}</h5>
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
        Clear out
      </Button>
      &nbsp; &nbsp;
      <Button
        disabled={textForOp === ""}
        // variant={operation === "encode" ? "warning" : "success"}
        variant="light"
        onClick={() => {
          setEncodeResp(
            operation === "encode" ? urlEncode(textForOp) : urlDecode(textForOp)
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
              <h5>{response} URL</h5>
            </Form.Label>
            <Form.Control
              style={{ backgroundColor: "white" }}
              as="textarea"
              className="textArea-control"
              rows={7}
              value={encodeResp}
              disabled
            />
          </Form.Group>
          {textCopied ? (
            <Alert variant="success">Copied to clipdboard!</Alert>
          ) : null}
          <CopyToClipboard text={encodeResp} onCopy={() => setTextCopied(true)}>
            <Button
              // variant={operation === "encode" ? "warning" : "success"}
              variant="light"
            >
              <FaCopy /> Copy
            </Button>
          </CopyToClipboard>

          <br />
          <br />
        </Form>
      ) : null}
      <br />
      <br />
    </>
  );
}
