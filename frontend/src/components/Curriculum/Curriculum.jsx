import React from "react";
import "./Curriculum.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";

const Curriculum = () => {
  const dummy = {
    Kinematics: [
      "First Law of Motion",
      "Second Law of Motion",
      "Third Law of Motion",
    ],
    Hydraulics: [
      "Pascal's Law",
      "Hydraulic Machines",
      "Hydraulic Pressure",
      "Hydraulic Fluids",
      "Hydraulic Cylinders",
      "Hydraulic Control Valves",
      "Hydraulic Fracturing",
    ],
    Electricity: [
      "Electric Charge",
      "Electric Fields",
      "Electric Potential",
      "Ohm's Law",
      "Circuits and Circuit Elements",
      "Series and Parallel Circuits",
      "Electrical Measurements",
    ],
    Magnetism: [
      "Magnetic Fields",
      "Magnetic Force",
      "Magnetic Flux",
      "Electromagnetism",
      "Magnetic Materials",
      "Magnetic Induction",
    ],
  };

  return (
    <div className="curriculum-wrapper">
      <h3 className="curriculum-title">Curriculum</h3>

      {Object.entries(dummy).map(([topic, subTopics]) => (
        <Accordion
          style={{
            boxShadow: "none",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 className="topic-name">{topic}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div className="subtopic-wrapper">
              {subTopics.map((subTopic, index) => (
                <>
                  <p className="subtopic-name" key={index}>
                    {subTopic}
                  </p>
                  {/* <Divider /> */}
                </>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Curriculum;
