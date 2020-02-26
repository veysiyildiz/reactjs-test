import React, { useEffect } from 'react'
import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

function ModelerPage() {

    useEffect(() => {
        new BpmnJS({
            container: '#canvas'
        });
    }, [])



    return (
        <div><h1>Modeler</h1><div style={{height: '80vh'}} id="canvas"></div></div>
    )
}

export default ModelerPage;