import { BaseButton, IconButton, Dialog, DialogSurface } from "@fluentui/react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import EditorComponent from "./editor";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  openModal = () => {
    this.state = {
      openModal: false,
    };
  };

  render() {
    return (
      <div className="App">
        <BaseButton text="baseBut" onClick={this.openModal} />

        <Dialog
          open={true}
          styles={{ maxHeight: "1200px" }}
          hidden={false}
          modalType={"modal"}
        >
          {/* <DialogSurface className="pevi"> */}
          <BaseButton text="baseBu" onClick={this.openModal} />
          <EditorComponent />
          {/* </DialogSurface> */}
        </Dialog>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
