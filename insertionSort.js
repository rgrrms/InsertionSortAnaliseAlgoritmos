function insertion() {
    // let list = [1, 6, 4, 7, 5, 3, 8, 2];
    let list = [];
    let alteracoes = 0; 
    
    for (let i = 0 ; i < 1000 ; i++){
        list.push(getRandom(1,10000));
    }
    console.log("*****************************************************************************************");
    console.log("*****************************************************************************************");
    console.log("*************************************Insertion Sort:*************************************");
    console.log("*****************************************************************************************");
    console.log("*****************************************************************************************");
    console.log("[ListaInicial]",list);
    console.time("Time");
    for (let i = 1; i < list.length; i++) {
        let key = list[i];
        let j = i - 1;
        while (j >= 0 && key < list[j]) {
            let aux = list[j];
            list[j] = list[j + 1];
            list[j + 1] = aux;
            j--;
            console.log("[Lista]",list);
            alteracoes++;
        }
    }
    console.timeEnd("Time") 
    console.log("[Alterações]",alteracoes) 
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}