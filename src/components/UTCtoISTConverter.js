import "../App.css";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { dateConverter } from "../lib/util";

export default function UTCtoISTConverter() {
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
            <h5>Enter UTC date and time</h5>
          </Form.Label>
          <Form.Control
            type="text"
            value={textForOp}
            onChange={(e) => {
              e.preventDefault();
              setTextForOp(e.target.value);
            }}
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
        // variant="light"
        style={{ backgroundColor: "#c3073f", border: "none" }}
        type="submit"
        className="app-button"
        onClick={() => {
          setEncodeResp(dateConverter(textForOp));
          setButtonClicked(true);
        }}
      >
        Convert
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
              <h5>Local date and time</h5>
            </Form.Label>
            <Form.Control
              style={{ backgroundColor: "white" }}
              type="text"
              value={encodeResp}
              disabled
            />
          </Form.Group>

          <br />
          <br />
        </Form>
      ) : null}
      <br />
      <br />
    </>
  );
}
