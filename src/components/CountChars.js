import "../App.css";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { countCharacters } from "../lib/util";

export default function CountChars() {
  const [charactersForCount, setCharactersForCount] = useState("");
  const [charactersDisplayLatest, setCharactersDisplayLatest] = useState({
    value: "",
    submitted: false,
  });

  return (
    <>
      <Form>
        <Form.Group
          className="mb-3 form-group"
          controlId="exampleForm.ControlTextarea1"
        >
          <br />
          <Form.Label>
            <h5>Enter text to count characters</h5>
          </Form.Label>
          <Form.Control
            as="textarea"
            className="textArea-control"
            rows={7}
            value={charactersForCount}
            onChange={(e) => setCharactersForCount(e.target.value)}
          />
        </Form.Group>
      </Form>

      <span className="row justify-content-center width-100">
        <Button
          disabled={charactersForCount === ""}
          style={{ backgroundColor: "#c3073f", border: "none" }}
          onClick={() => {
            setCharactersDisplayLatest({
              value: charactersForCount,
              submitted: true,
            });
          }}
          className="col-sm-1 app-button"
        >
          Submit
        </Button>{" "}
        {charactersDisplayLatest.submitted ? (
          <>
            {" "}
            &nbsp;&nbsp;&nbsp;
            <Form.Control
              disabled
              value={
                countCharacters(charactersDisplayLatest.value) + " characters"
              }
              // className="blue-input-field"
              style={{ width: "25%", background: "#eff9ff" }}
            />
            &nbsp;&nbsp;&nbsp;
            <Button
              variant="secondary"
              className="col-sm-1"
              onClick={() => {
                setCharactersDisplayLatest({
                  value: "",
                  submitted: false,
                });
                setCharactersForCount("");
              }}
            >
              Clear
            </Button>
          </>
        ) : null}
      </span>
    </>
  );
}
