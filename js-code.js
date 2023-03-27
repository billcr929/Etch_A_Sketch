const etchBox = document.querySelector('#etchBox');
var etchBoxDims = etchBox.getBoundingClientRect();
var etchBoxHeight = etchBoxDims.height;
console.log(etchBoxHeight);
let gridSize=10;
let colorOption = 'blackWhite';//selects the initial mode on start up
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
    const overLay = document.createElement('div');
    box.classList.add('singleBox');
    overLay.classList.add('overlay');

    etchBox.appendChild(box);
    styleGrid(box,'black','1');

     box.appendChild(overLay);
     styleGrid(overLay,'black','0');
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
            styleGrid(box,'white',1);
            box.children[0].style.opacity=0;

            
        }else if(colorOption == 'randomColor'){
            let r = Math.floor(Math.random() * 255);
            let g= Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let boxColor = 'rgba('+r+','+g+','+b+','+1+')'
            styleGrid(box,boxColor,'1');

            box.children[0].style.opacity=0;
            }else if(colorOption == 'grayScale'){
                let opa=Number(box.children[0].style.opacity);
                box.children[0].style.opacity=opa+.1;
            }
});

});

}

function styleGrid(box, bgColor,opacity){
    box.style.cssText='background-color:'+bgColor+';\
    margin:-1px;border: solid 1px white; width:'+width+'px; \
    height:'+width+'px; opacity:'+opacity;

}