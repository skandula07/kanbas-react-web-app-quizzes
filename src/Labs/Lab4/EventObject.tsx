import React, { useState } from "react";
export default function EventObject() {
  {
    /* // import useState
        // (more on this later)
        // initialize event
        // on click receive event
        // replace target with HTML
        // to avoid circular reference
        // set event object
        // so it can be displayed
 */
  }
  const [event, setEvent] = useState(null);
  const handleClick = (e: any) => {
    e.target = e.target.outerHTML;
    delete e.view;
    setEvent(e);
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr />
    </div>
  );
}
