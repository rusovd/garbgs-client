import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionWrapper = props => {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <div className="accordion-wrapper">
      <button
        className="accordion-Btn expandAll-btn"
        onClick={() => setExpandAll(!expandAll)}
      >
        Expand All
      </button>
      {console.log(props.texts)}
      {props.texts && props.texts.map((el,i)=> <Accordion key={i} header={el} links={el}expanded={expandAll} />)}
      {/* <Accordion section={1} expanded={expandAll} />
      <Accordion section={2} expanded={expandAll} />
      <Accordion section={3} expanded={expandAll} />
      <Accordion section={4} expanded={expandAll} /> */}
    </div>
  );
};

export default AccordionWrapper;
