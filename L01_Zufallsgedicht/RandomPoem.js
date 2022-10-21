"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subjects = ["Bisasam", "Glumanda", "Schiggy", "Pikachu", "Mew"];
    let verbs = ["hasst", "liebt", "freut sich über", "fliegt durch", "spuckt"];
    let objects = ["Plfanzen", "Wasser", "Donner", "Feuer", "Psychokinese"];
    for (let index = 5; index >= 1; index--) {
        console.log(getVerse(subjects, verbs, objects));
    }
    function getVerse(_subjects, _verbs, _objects) {
        console.log();
        //console.log()
        let verse = "";
        let subjectsNumber = Math.floor(Math.random() * _subjects.length);
        let verbsNumber = Math.floor(Math.random() * _verbs.length);
        let objectsNumber = Math.floor(Math.random() * _objects.length);
        //console.log()
        verse = _subjects[subjectsNumber] + " " + _verbs[verbsNumber] + " " + _objects[objectsNumber];
        _subjects.splice(subjectsNumber, 1);
        _verbs.splice(verbsNumber, 1);
        _objects.splice(objectsNumber, 1);
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map