let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
//----------------------------------------------------------------------------------------------------------------------

let x_mouse, y_mouse;
canvas.addEventListener("mousemove", function(evento) {
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
});

//----------------------------------------------------------------------------------------------------------------------

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}; //Função para gerar um vaalor aleatório para x e y;

//----------------------------------------------------------------------------------------------------------------------

//FEI + movimentação
let fei = new Image(); fei.src = "fei.png"; let x_fei =(x_mouse-20); let y_fei = (y_mouse-20);function fei_move(){
    if ((x_mouse<=canvas.width) && (y_mouse<=canvas.height)) {
        ctx.beginPath();
        ctx.drawImage(fei, x_mouse-20, y_mouse - 20, 40, 40);
    }
};

//----------------------------------------------------------------------------------------------------------------------

//MAUA + movimentação
let x_maua = getRandomInt(430); let y_maua = getRandomInt(430);
let maua = new Image(); maua.src='maua.jpg'; function maua_move() {

    //FEI -> Y>
    if (y_mouse-20 >= y_maua){
        y_maua += 3;
    }
    //FEI -> Y<
    else if (y_mouse-20 < y_maua){
        y_maua -= 3;
    }
    //FEI -> x<
    if (x_mouse-40 < x_maua){
        x_maua -= 3;
    }
    //FEI -> x>
    else if (x_mouse-40 >= x_maua){
        x_maua += 3;
    };
    ctx.beginPath();
    ctx.drawImage(maua, x_maua, y_maua, 80, 40);

};

//----------------------------------------------------------------------------------------------------------------------

//PUC + movimentação
let x_puc=275-20; let y_puc = 275-20; let puc = new Image(); puc.src = "puc.png"; let i = 0;
function puc_move(){

    if ( (y_puc<=canvas.height-70) && (i===1) ){
        y_puc += 4;
    }
    else{
        i=0;
        x_puc = 275 + 30;
    }
    if ( (y_puc>=0) && (i===0) ){
        y_puc -= 4;
    }
    else{
        i=1;
        x_puc = 275 - 70;
    }

    ctx.beginPath();
    ctx.drawImage(puc, x_puc, y_puc, 50, 70);
}

//----------------------------------------------------------------------------------------------------------------------

//Mack + movimentação
let x_mack = 0; let y_mack = 0; let k =1;
let mack = new Image(); mack.src = "mackenzie.png"; function mack_move(){
    if ( (x_mack<=canvas.width-40) && (y_mack<=canvas.height-40) && (k===1) ){
        x_mack += 4;
        y_mack += 4;
    }
    else{
        k=0;
    }
    if ( (x_mack>=0) && (y_mack>=0) && (k===0) ){
        x_mack -= 4;
        y_mack -= 4;
    }
    else{
        k=1;
    }

    ctx.beginPath();
    ctx.drawImage(mack, x_mack, y_mack, 40, 40);

}

//----------------------------------------------------------------------------------------------------------------------

//Anhembi + movimentação
let x_anhembi = getRandomInt(430); let y_anhembi = getRandomInt(430);
let anhembi = new Image(); anhembi.src='anhembi.png'; function anhembi_move() {

    //FEI -> Y>
    if (y_mouse-20 >= y_anhembi){
        y_anhembi += 3;
    }
    //FEI -> Y<
    else if (y_mouse-20 < y_anhembi){
        y_anhembi -= 3;
    }
    //FEI -> x<
    if (x_mouse-40 < x_anhembi){
        x_anhembi -= 1;
    }
    //FEI -> x>
    else if (x_mouse-40 >= x_anhembi){
        x_anhembi += 1;
    };
    ctx.beginPath();
    ctx.drawImage(anhembi, x_anhembi, y_anhembi, 40, 40);

};

//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------



//Função Principal;
function main(){
    requestAnimationFrame(main);

    ctx.beginPath(); ctx.clearRect(0, 0, canvas.width, canvas.height);

    fei_move(); maua_move(); puc_move(); mack_move(); anhembi_move();

}; main();

