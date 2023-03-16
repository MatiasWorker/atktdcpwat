import React from "react";

const LazyLoadListBox = () => {
  return (
    <div className="list-box">
      <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <div className="lazyload"></div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="lazyload"></div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="lazyload"></div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-50 h-27px lazyload my-1"></div>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <div className="lazyload"></div>
          <div className="lazyload"></div>
        </div>
      </div>
    </div>
  );
};

export default LazyLoadListBox;
