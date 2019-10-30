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
      {props.grabbedData && props.grabbedData.map((el,i)=> <Accordion linkServer={props.linkServer}  key={i} header={el.text} links={el.links} expanded={expandAll} />)}
    </div>
  );
};

export default AccordionWrapper;
