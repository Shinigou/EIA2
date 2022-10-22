/*
Aufgabe: Aufg 02 Eventinspector
Name: Gerrit Sudarbo
Matrikel: 269362
Datum: 21.10.2022
Quellen: Orientiert an Jason Hühne 
*/ 

namespace EventInspector {
    window.addEventListener("load", hndLoad); 

function hndLoad(_event: Event): void {
    let div0: HTMLDivElement = <HTMLDivElement>document.querySelector("#div0");
    let div1: HTMLDivElement = <HTMLDivElement>document.querySelector("#div1");

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

function setInfoBox(_event: MouseEvent): void {
    let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
    let posX: string = `${_event.clientX}`;
    let posY: string = `${_event.clientY}`;
    let posXoffset: number = 10 + _event.clientX;
    let posYoffset: number = 10 + _event.clientY;
    span.innerHTML = `X: ${posX}, Y: ${posY}, ${_event.target}`;
    span.style.top = posXoffset + "px";
    span.style.top = posYoffset + "px";
}

function logInfo(_event: Event): void {
    console.log("Event Type: ", _event.type);
    console.log("Event Target: ", _event.target);
    console.log("Current Target: ", _event.currentTarget);
    console.log("Event Object: ", _event);
}

}