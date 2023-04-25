import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModel.css";

const ErrorModel = (props) => {
  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.clear} />;
  };

  const ModelOverlay = (props) => {
    return (
      <Card className="model">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>{" "}
        </div>
        <footer className="actions">
          <Button onClick={props.clear}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop clear={props.clear} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModelOverlay
          clear={props.clear}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModel;
