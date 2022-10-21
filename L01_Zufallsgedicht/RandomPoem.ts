namespace RandomPoem {

let subjects: string [] = ["Bisasam", "Glumanda", "Schiggy", "Pikachu", "Mew"];
let verbs: string [] = ["hasst", "liebt", "freut sich über", "fliegt durch", "spuckt"];
let objects: string [] = ["Plfanzen", "Wasser", "Donner", "Feuer", "Psychokinese"];

for (let index: number = 5; index >=1; index--) {
    console.log(getVerse(subjects, verbs, objects));
}
function getVerse(_subjects: string [], _verbs: string [], _objects:string []): string {
    console.log()
//console.log()

let verse: string = "";
let subjectsNumber: number = Math.floor(Math.random() * _subjects.length);
let verbsNumber: number = Math.floor(Math.random() * _verbs.length);
let objectsNumber: number = Math.floor(Math.random() * _objects.length);
//console.log()

verse = _subjects[subjectsNumber] + " " + _verbs[verbsNumber] + " " + _objects[objectsNumber];
_subjects.splice(subjectsNumber, 1);
_verbs.splice(verbsNumber, 1);
_objects.splice(objectsNumber, 1);
return verse;
}

}