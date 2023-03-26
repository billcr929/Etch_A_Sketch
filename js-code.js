const etchBox = document.querySelector('#etchBox');
var etchBoxDims = etchBox.getBoundingClientRect();
var etchBoxHeight = etchBoxDims.height;
console.log(etchBoxHeight);
updateGrid(10);

const changeGrid = document.querySelector('#changeGrid');
changeGrid.addEventListener('click',()=> {
getGridSize();
});

function updateGrid(gridSize){
    width = getBoxHeight(gridSize);
    gridSize=gridSize*gridSize;
    
for (let i=1; i<=gridSize;i++) {

    const box = document.createElement('div');
    box.classList.add('singleBox');

    etchBox.appendChild(box);
    box.style.cssText='color:red; background-color:black;\
     margin:-1px;border: solid .1px white; width:'+width+'px; height:'+width+'px'
}}

function getGridSize(){
    clearGrid();
    updateGrid(Number(prompt('input grid width')));
}
function clearGrid(){
    const box = document.querySelectorAll('.singleBox');
    console.log(box);
    box.forEach((box) => {
        box.remove();
        
    });
}

function getBoxHeight(gridSize){
    return etchBoxHeight/gridSize;
}