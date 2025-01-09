import React from "react";

const CustomScrollbar = ({ children }) => {
  const scrollbarStyles = {
    scrollbarWidth: "thin", 
    scrollbarColor: "#002147 #061521", 
  };

  const webkitScrollbar = {
    WebkitScrollbar: {
      width: "2px",
    },
    WebkitScrollbarTrack: {
      background: "#253529 ", 
      borderRadius: "50%", 
    },
    WebkitScrollbarThumb: {
      backgroundColor: "#253529 ",
      borderRadius: "50%", 
      border: "2px solid #253529 ",      
    },
    WebkitScrollbarThumbHover: {
      backgroundColor: "#253529 ", 
    },
  };

  return (
    <div
      style={{
        overflowY: "auto",
        height: "100vh",
        ...scrollbarStyles,
        ...webkitScrollbar,
      }}
      className="custom-scroll"
    >
      {children}
    </div>
  );
};

export default CustomScrollbar;
