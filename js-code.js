const etchBox = document.querySelector('#etchBox');
var etchBoxDims = etchBox.getBoundingClientRect();
var etchBoxHeight = etchBoxDims.height;
console.log(etchBoxHeight);
let gridSize=10;
let colorOption = 'blackWhite';
updateGrid();

console.log('run');
const changeGrid = document.querySelector('#changeGrid');
changeGrid.addEventListener('click',()=> {
getGridSize();
});

const clearGrid = document.querySelector('#clearBtn');
clearGrid.addEventListener('click',()=>{
    deleteGrid();
    updateGrid();
});
const colorChange = document.querySelectorAll('.colorOption');
console.log(colorChange);
colorChange.forEach((button) =>{
    button.addEventListener('click', () => {
        colorOption=button.id;
        console.log(colorOption);
    })
});

function updateGrid(){
    width = getBoxHeight(gridSize);
    gridNum=gridSize*gridSize;
    
for (let i=1; i<=gridNum;i++) {

    const box = document.createElement('div');
    box.classList.add('singleBox');

    etchBox.appendChild(box);
    box.style.cssText='background-color:black;\
     margin:-1px;border: solid 1px white; width:'+width+'px; \
     height:'+width+'px';
}
hover();}

function getGridSize(){
    deleteGrid();
   gridSize=(Number(prompt('input grid width \r\n max 100')));
   if(gridSize>100) gridSize=100;
   updateGrid();
   return;
}

function deleteGrid(){
    const box = document.querySelectorAll('.singleBox');

    box.forEach((box) => {
        box.remove();
        
    });
}

function getBoxHeight(gridSize){
    return etchBoxHeight/gridSize;
}

function hover(){
    const box = document.querySelectorAll('.singleBox');

    box.forEach((box) => {
        box.addEventListener('mouseover',() => {

            if (colorOption == 'blackWhite'){
            box.classList.add('Hover');
            box.style.cssText='background-color:white;\
            margin:-1px;border: solid 1px black; width:'+width+'px; \
            height:'+width+'px'}else 
            if(colorOption == 'randomColor'){
                let r = Math.floor(Math.random() * 255);
                let g= Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                let boxColor = 'rgba('+r+','+g+','+b+','+1+')'
                box.style.cssText='background-color:'+boxColor+';\
                margin:-1px;border: solid 1px black; width:'+width+'px; \
                height:'+width+'px'
            }
});

});

}