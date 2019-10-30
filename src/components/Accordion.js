import React, { useState, useMemo } from "react";

const Accordion = props => {
  const [open, setOpen] = useState(false);

  const handleOpenState = () => {
    if (open || props.expanded) return setOpen(true);
    return setOpen(!open);
  };

  return (
    <>
      <button className="accordion-Btn btn paper-raise" onClick={() => setOpen(!open)}>
        {props.header}
        <svg className={open || props.expanded ? "icon animateIcon" : "icon"}>
          <use xlinkHref={`/arrow.svg#icon-chevron-small-down`} />
        </svg>
      </button>
      <article className={open || props.expanded ? "section show" : "section"}>
        {props.links && props.links.map((el, i) =>
          <>
            <a href={`${props.linkServer}${Object.values(el)}`} key={i} className="section-title btn paper paper-curl-right-side">
              {`${props.linkServer}${Object.values(el)}`}
            </a><br /><br /><br /><br />
          </>)
        }

      </article>
    </>
  );
};

export default Accordion;
