import React from "react";
import "./CourseDetails.css";
import BG from "../../assets/BG.png";
import Curriculum from "../../components/Curriculum/Curriculum";

const Box = ({ detail, tag }) => {
  return (
    <div className="box-wrapper">
      <h2>{detail}</h2>
      <small>{tag}</small>
    </div>
  );
};

const CourseDetails = () => {
  return (
    <div className="course-wrapper">
      {/* // eslint-disable-next-line */}
      <img alt="Image here" className="poster-img-wrapper" src={BG} />
      <h2 className="course-title">Class 11: Physics Crash Course</h2>
      <p className="teacher-name">
        <span className="muted">by </span>Prashant Pandey
      </p>
      <h4 className="course-desc">About the course</h4>
      <small className="desc muted">
        Get a head start in class 11 physics with our crash course. We cover
        mechanics, thermodynamics, optics, and more in focused sessions. Our
        goal is to help you master fundamental concepts swiftly and effectively,
        preparing you thoroughly for exams.
      </small>
      <div className="info-wrapper">
        <Box detail={"30+"} tag={"lessons"} />
        <Box detail={"96+"} tag={"topics"} />
        <Box detail={"40+"} tag={"hrs"} />
      </div>

      {/* if you have already registered, dont show button */}
      <button className="btn register-btn">Enroll now</button>
      <Curriculum />
    </div>
  );
};

export default CourseDetails;
