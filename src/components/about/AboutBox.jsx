import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">5+</h3>
          <span className="about__subtitle">Projects Completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>

        <div>
          <h3 className="about__title">50+</h3>
          <span className="about__subtitle">Students Mentored</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-badge"></i>

        <div>
          <h3 className="about__title">2</h3>
          <span className="about__subtitle">Leadership Programs</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-graduation"></i>

        <div>
          <h3 className="about__title">1</h3>
          <span className="about__subtitle">AWS Certification</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;