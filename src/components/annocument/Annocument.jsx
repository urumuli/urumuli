import React from "react";

// Import images
import banner1 from "../../images/banner-1.png";
import banner2 from "../../images/banner-2.png";

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <>
      <section className="annocument background">
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img src={banner1} alt="Banner 1" style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="img" style={mystyle1}>
            <img src={banner2} alt="Banner 2" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annocument;
