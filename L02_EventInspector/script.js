"use strict";
/*
Aufgabe: Aufg 02 Eventinspector
Name: Gerrit Sudarbo
Matrikel: 269362
Datum: 21.10.2022
Quellen: Orientiert an Jason Hühne
*/
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let div0 = document.querySelector("#div0");
        let div1 = document.querySelector("#div1");
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let span = document.querySelector("span");
        let posX = `${_event.clientX}`;
        let posY = `${_event.clientY}`;
        let posXoffset = 10 + _event.clientX;
        let posYoffset = 10 + _event.clientY;
        span.innerHTML = `X: ${posX}, Y: ${posY}, ${_event.target}`;
        span.style.top = posYoffset + "px";
        span.style.left = posXoffset + "px";
    }
    function logInfo(_event) {
        console.log("Event Type: ", _event.type);
        console.log("Event Target: ", _event.target);
        console.log("Current Target: ", _event.currentTarget);
        console.log("Event Object: ", _event);
    }
    const button = document.querySelector("button");
    button.addEventListener("click", function (_event) {
        const customevent = new CustomEvent();
        button.dispatchEvent(customevent);
    });
    document.addEventListener("click", function () {
        console.log("Hello World");
    });
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=script.js.map