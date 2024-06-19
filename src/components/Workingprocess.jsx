import React from "react";

export const Workingprocess = (props) => {
  return (
    <div id="Workingprocess" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Working Process</h2>
          <p>
          Crafting elegant window veils that seamlessly blend style and functionality, enhancing your space with grace and privacy.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
