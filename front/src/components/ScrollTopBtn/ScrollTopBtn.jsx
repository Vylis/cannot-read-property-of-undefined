import React, { useState } from "react";

import "../../styles/ScrollTopBtn/ScrollTopBtn.css";

const ScrollTopBtn = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button type="button" className={`scroll_top_btn ${showScroll ? '' : 'invisible'}`} onClick={scrollTop}>
        {" "}
        <span className="arrow">{"<<"}</span>
      </button>
    </>
  );
};

export default ScrollTopBtn;
