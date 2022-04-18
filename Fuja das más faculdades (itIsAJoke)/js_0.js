let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
//----------------------------------------------------------------------------------------------------------------------
//Pegar a posição do mouse na tela
let x_mouse, y_mouse;
canvas.addEventListener("mousemove", function(evento) {
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;
});

//----------------------------------------------------------------------------------------------------------------------

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}; //Função para gerar um vaalor aleatório para x e y;

//----------------------------------------------------------------------------------------------------------------------

//FEI + movimentação
let fei = new Image(); fei.src = "fei.png";function fei_move(){
    if ((x_mouse-20<=canvas.width) && (y_mouse-20<=canvas.height)) {
        ctx.beginPath();
        ctx.drawImage(fei, (x_mouse-20), (y_mouse-20), 40, 40);
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
let x_puc=275; let y_puc = 275; let puc = new Image(); puc.src = "puc.png"; let i = 0;
function puc_move(){

    if ( (y_puc<=canvas.height-70) && (i===1) ){
        y_puc += 4;
    }
    else{
        i=0;
        x_puc = 350 + 70;
    }
    if ( (y_puc>=0) && (i===0) ){
        y_puc -= 4;
    }
    else{
        i=1;
        x_puc = 350 - 100;
    }

    ctx.beginPath();
    ctx.drawImage(puc, x_puc, y_puc, 50, 70);
}

//----------------------------------------------------------------------------------------------------------------------

//Mack + movimentação
let x_mack = 0; let y_mack = 0; let k =1;
let mack = new Image(); mack.src = "mackenzie.png"; function mack_move(){
    if ( (x_mack<=canvas.width-40) && (y_mack<=canvas.height-40) && (k===1) ){
        x_mack += 5.6;
        y_mack += 4;
    }
    else{
        k=0;
    }
    if ( (x_mack>=0) && (y_mack>=0) && (k===0) ){
        x_mack -= 5.6;
        y_mack -= 4;
    }
    else{
        k=1;
    }

    ctx.beginPath();
    ctx.drawImage(mack, x_mack, y_mack, 40, 40);

}

//----------------------------------------------------------------------------------------------------------------------

//POLI + movimentação
let x_poli = getRandomInt(430); let y_poli = getRandomInt(430);
let poli = new Image(); poli.src="poli.png"; function poli_move() {

    //FEI -> Y>
    if (y_mouse-30 >= y_poli){
        y_poli += 1;
    }
    //FEI -> Y<
    else if (y_mouse-30 < y_poli){
        y_poli -= 1;
    }
    //FEI -> x<
    if (x_mouse-30 < x_poli){
        x_poli -= 7;
    }
    //FEI -> x>
    else if (x_mouse-30 >= x_poli){
        x_poli += 7;
    };
    ctx.beginPath();
    ctx.drawImage(poli, x_poli, y_poli, 60, 60);

};

//----------------------------------------------------------------------------------------------------------------------


//Anhembi + movimentação
let x_anhembi = getRandomInt(430); let y_anhembi = getRandomInt(430);
let anhembi = new Image(); anhembi.src='anhembi.png'; function anhembi_move() {

    //FEI -> Y>
    if (y_mouse-20 >= y_anhembi){
        y_anhembi += 5;
    }
    //FEI -> Y<
    else if (y_mouse-20 < y_anhembi){
        y_anhembi -= 5;
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

//Função para verificar as colisoes:
let verify = 0; //Variável que receberá o papel de dizer se houve ou não colisão;
function colisao(x1,y1,w1,h1,x2,y2){

    //Verifica se o centro do "elemento 2" está dentro dos limites do "elemento 1", assim define se colidiu ou não
    if ( (x2>=x1 && x2<=(x1 + w1)) && ( (y2>=y1 && y2<=(y1 + h1)) ) ){
        verify = 1; //Se colidiu ela assume o valor de "1";
    }
    return verify; //Retorna o valor da verificação;
}



//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------



//Função Principal;
function main(){

    ctx.beginPath(); ctx.clearRect(0, 0, canvas.width, canvas.height);//Limpa o canvas para a proxima animação

    fei_move(); maua_move(); puc_move(); mack_move(); anhembi_move(); poli_move(); //Funções de movimento;

    let verificacao=0; //Variável para verificar se houve colisões ou não;

    //Definindo a variável "verificação" de acordo com a situação de colisão dos objetos;
    verificacao = colisao(x_maua,y_maua,80,40,(x_mouse-20),(y_mouse-20)); //Colisão_Maua
    verificacao = colisao(x_puc,y_puc,50,70,(x_mouse-20),(y_mouse-20)); //Colisão_Puc
    verificacao = colisao(x_mack,y_mack,40,40,(x_mouse-20),(y_mouse-20)); //Colisão_Mackenzie
    verificacao = colisao(x_poli,y_poli,60,60,(x_mouse-20),(y_mouse-20)); //Colisão_Poli
    verificacao = colisao(x_anhembi,y_anhembi,40,40,(x_mouse-20),(y_mouse-20)); //Colisão_Anhembi

    if ( verificacao === 0 ){
        requestAnimationFrame(main); //Se não houver colisao ele pede para rodar de novo a função
    }
    else{
        //Se houver colisão ele limpa o canvas e para de rodar o código, alertando que "Bateu";

        ctx.beginPath(); ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.alert("OPA!!! " + " Créditos logo abaixo!")
    }

}; main(); //Chamando a função principal;

