import React from "react";

class Ref_ex extends React.Component {
  constructor(props) {
    super(props);
    this.cbRef = null;
    this.setCbRef = i => (this.cbRef = i);
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setCbRef} />
      </div>
    );
  }
}

export default Ref_ex;
