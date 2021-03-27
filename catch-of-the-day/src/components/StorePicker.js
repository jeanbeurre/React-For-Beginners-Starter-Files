import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. stop the form from submitting
    event.preventDefault();

    // 2. get text from that input
    const storeName = this.myInput.current.value;

    // 3. change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);

    console.log("Going to store");
  };

  render() {
    return (
      <>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            required
            ref={this.myInput}
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store →</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
