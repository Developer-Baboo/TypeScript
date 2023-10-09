// ADVANCE TYPE SYSTEMS

// Intersection Types
type ArtworkType = "portrait" | "illustrations";

interface ArtistData {
    name: string;
}

interface ErrorHandling {
    success: boolean;
    message?: string
}

interface ArtworkData {
    type: ArtworkType;
}

let ArtistDataResponse: ArtistData & ErrorHandling;
let ArtworkDataResponse: ArtworkData & ErrorHandling;


// Type Assertion
interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

let x: Bird | Fish = {
    swim: () =>{
        console.log('I can swim');
    }
} as Fish;

let y: Bird | Fish = {
    fly:() => {
        console.log('i can fly');
    } 
} as Bird

// Literal Types
type AlphaNumberic = "abc" | "xyz";

// Nullish Coasaling

let a = false;


/*

false
""
0
null
undefined

*/

console.log(a ? "True" : "False");
console.log(a ?? "false condition");

// Type Guard
interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

let fish: Bird | Fish = {
    swim: () =>{
        console.log('I can swim');
    }
};


function isFish(fish: Bird | Fish){
    if('swim' in fish) {
        return true;
    } 
    return false;
}

const btn = document.getElementById('btn') as HTMLButtonElement;
const para = document.getElementById('para') as HTMLParagraphElement;
btn.addEventListener('click', function(){
    console.log('Testing');
    para.innerText = "New Paragraph";
});

const listItems = document.getElementsByClassName('listItem') as HTMLCollection;

for(let item of listItems) {
    const TMP_item = item as HTMLLIElement;
    TMP_item.innerText = "New Item";
}


