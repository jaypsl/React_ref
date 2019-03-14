import React from "react";
import Input from "./Input";

class Ref_ex extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <Input ref={this.inputRef} />
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
      </div>
    );
  }
}

export default Ref_ex;
