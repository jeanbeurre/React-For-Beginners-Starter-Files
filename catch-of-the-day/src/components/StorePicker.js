import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <>
        {/* This is a JSX comment */}
        <p>Hello</p>
        <form action="" className="store-selector">
          <h2>Enter a store</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store →</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
