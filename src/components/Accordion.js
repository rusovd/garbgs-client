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
        Section {props.section}
        <svg className={open || props.expanded ? "icon animateIcon" : "icon"}>
          <use xlinkHref={`/arrow.svg#icon-chevron-small-down`} />
        </svg>
      </button>
      <article className={open || props.expanded ? "section show" : "section"}>
        <h6 className="section-title">Discovering the Blackhole</h6>
        {/* <p className="section-text"> // whether we will need some comments for block or link
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          provident magni. Quae voluptatibus eos magni provident aut porro ex
          ipsam modi est. Possimus esse non ea vero repudiandae? Error,
          voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis exercitationem dicta quaerat. Cupiditate optio placeat
          officiis ratione ea suscipit cum molestiae inventore. Officiis
          voluptatibus quae deleniti qui similique odio deserunt?
        </p> */}
      </article>
    </>
  );
};

export default Accordion;
