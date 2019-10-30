import React, { useState, useMemo } from "react";

const Accordion = props => {
  const [open, setOpen] = useState(false);

  const handleOpenState = () => {
    if (open || props.expanded) return setOpen(true);
    return setOpen(!open);
  };

  return (
    <>
      <button className="accordion-Btn" onClick={() => setOpen(!open)}>
        {props.header}
        <svg className={open || props.expanded ? "icon animateIcon" : "icon"}>
          <use xlinkHref={`/arrow.svg#icon-chevron-small-down`} />
        </svg>
      </button>
      <article className={open || props.expanded ? "section show" : "section"}>
        {/* {props.links.map((el,i)=> <h6 key={i} className="section-title">{el}</h6>)}         */}
        <h6 className="section-title">{props.header}</h6>
      </article>
    </>
  );
};

export default Accordion;
