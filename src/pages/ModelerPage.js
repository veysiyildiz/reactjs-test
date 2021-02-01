import React, { useEffect, useRef } from "react";
import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import xml from "../constants/newDiagram.bpmn";

function ModelerPage() {
  const container = useRef(null);

  useEffect(() => {
    const modeler = new BpmnJS({
      container: container.current
    });

    modeler.importXML(xml, function (err) {
      if (err) {
        console.log("error rendering", err);
      } else {
        console.log("rendered");
      }
    });
  }, []);

  return (
    <div className="container">
      <h1>Modeler</h1>
      <div
        ref={container}
        style={{ height: "calc(100vh - 127px)" }}
        id="canvas"
      />
    </div>
  );
}

export default ModelerPage;
