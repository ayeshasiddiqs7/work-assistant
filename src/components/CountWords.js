import "../App.css";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { countWords } from "../lib/util";

export default function CountWords() {
  const [wordsForCount, setWordsForCount] = useState("");
  const [wordsDisplayLatest, setWordsDisplayLatest] = useState({
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
            <h5>Enter text to count words</h5>
          </Form.Label>
          <Form.Control
            as="textarea"
            className="textArea-control"
            rows={7}
            value={wordsForCount}
            onChange={(e) => setWordsForCount(e.target.value)}
          />
        </Form.Group>
      </Form>
      <span className="row justify-content-center width-100">
        <Button
          disabled={wordsForCount === ""}
          style={{ backgroundColor: "#c3073f", border: "none" }}
          onClick={() => {
            setWordsDisplayLatest({ value: wordsForCount, submitted: true });
          }}
          className="col-sm-1 app-button"
        >
          Submit
        </Button>{" "}
        {wordsDisplayLatest.submitted ? (
          <>
            {" "}
            &nbsp;&nbsp;&nbsp;
            <Form.Control
              disabled
              value={countWords(wordsDisplayLatest.value) + " words"}
              // className="blue-input-field"
              style={{ width: "25%", background: "#eff9ff" }}
            />
            &nbsp;&nbsp;&nbsp;
            <Button
              variant="secondary"
              className="col-sm-1"
              onClick={() => {
                setWordsDisplayLatest({
                  value: "",
                  submitted: false,
                });
                setWordsForCount("");
              }}
            >
              Clear out
            </Button>
          </>
        ) : null}
      </span>
    </>
  );
}
