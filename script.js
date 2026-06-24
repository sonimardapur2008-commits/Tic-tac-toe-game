let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let turn = "O";

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



const check = () => {
    for(let pattern of win){
        if( (boxes[pattern[0]].innerText === boxes[pattern[1]].innerText) && (boxes[pattern[0]].innerText === boxes[pattern[2]].innerText) && (boxes[pattern[0]].innerText!=="") &&  (boxes[pattern[1]].innerText!=="") &&  (boxes[pattern[2]].innerText!==""))
            if(boxes[pattern[0]].innerText==="X")
                return 1;
            else
                return 2;
    }
    return 0;
}


let count=0,p=0;
let  h = document.createElement("h1");
let container = document.querySelector(".container");
container.after(h);

boxes.forEach( (box) => {
    
    box.addEventListener("click",() =>{
        if(turn == "O"){
            turn = "X";
            box.style.color ="red";
            box.innerText += "X";
        }
        else{
            turn = "O";
            box.style.color ="dodgerblue";
            box.innerText += "O";
        }
        box.disabled = "true";

    })

    box.addEventListener("click",() =>{
        if(check()){
            count=1;
            if(check()===1){
                h.innerText = `Congratulations! Player X is Winner`;
            }
            else{
                h.innerText = `Congratulations! Player O is Winner`;
            }
            boxes.forEach( (box) => {
                box.innerText = "";
            })
        }
        
    })

    box.addEventListener("click",() =>{
        p++;
        if(p==9){
            h.innerText = "No Winner: A Draw";
        }
    })
    
})

resetBtn.addEventListener("click",() => {
    location.reload();

})
