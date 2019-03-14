import React from "react";
import Ref_ex from "./Ref_ex";
import Cb_ref from "./Cb_ref";
import Parent from "./Parent";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Ref
        <Ref_ex />
        <hr />
        callback Ref_ex
        <Cb_ref />
        <hr />
        forward_Ref
        <Parent />
        <hr />
      </div>
    );
  }
}

export default App;
