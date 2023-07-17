const distanciaEmReta = [
    [0   , 10  , 18.5, 24.8, 36.4, 38.8, 35.8, 25.4, 17.6, 9.1 , 16.7, 27.3, 27.6, 29.8],
    [10  , 0   , 8.5 , 14.8, 26.6, 29.1, 26.1, 17.3, 10  , 3.5 , 15.5, 20.9, 19.1, 21.8],
    [18.5, 8.5 , 0   , 6.3 , 18.2, 20.6, 17.6, 13.6, 9.4 , 10.3, 19.5, 19.1, 12.1, 16.6],
    [24.8, 14.8, 6.3 , 0   , 12  , 14.4, 11.5, 12.4, 12.6, 16.7, 23.6, 18.6, 10.6, 15.4],
    [36.4, 26.6, 18.2, 12  , 0   , 3   , 2.4 , 19.4, 23.3, 28.2, 34.2, 24.8, 14.5, 17.9],
    [38.8, 29.1, 20.6, 14.4, 3   , 0   , 3.3 , 22.3, 25.7, 30.3, 36.7, 27.6, 15.2, 18.2],
    [35.8, 26.1, 17.6, 11.5, 2.4 , 3.3 , 0   , 20  , 23  , 27.3, 34.2, 25.7, 12.4, 15.6],
    [25.4, 17.3, 13.6, 12.4, 19.4, 22.3, 20  , 0   , 8.2 , 20.3, 16.1, 6.4 , 22.7, 27.6],
    [17.6, 10  , 9.4 , 12.6, 23.3, 25.7, 23  , 8.2 , 0   , 13.5, 11.2, 10.9, 21.2, 26.6],
    [9.1 , 3.5 , 10.3, 16.7, 28.2, 30.3, 27.3, 20.3, 13.5, 0   , 17.6, 24.2, 18.7, 21.2],
    [16.7, 15.5, 19.5, 23.6, 34.2, 36.7, 34.2, 16.1, 11.2, 17.6, 0   , 14.2, 31.5, 35.5],
    [27.3, 20.9, 19.1, 18.6, 24.8, 27.6, 25.7, 6.4 , 10.9, 24.2, 14.2, 0   , 28.8, 33.6],
    [27.6, 19.1, 12.1, 10.6, 14.5, 15.2, 12.4, 22.7, 21.2, 18.7, 31.5, 28.8, 0   , 5.1 ],
    [29.8, 21.8, 16.6, 15.4, 17.9, 18.2, 15.6, 27.6, 26.6, 21.2, 35.5, 33.6, 5.1 , 0   ]
];

const distanciaReal = [
    [ 0,   10,   -1,   -1,   -1,   -1,  -1,   -1,   -1,   -1,   -1,   -1,   -1,  -1],
    [10,    0,  8.5,   -1,   -1,   -1,  -1,   -1,   10,  3.5,   -1,   -1,   -1,  -1],
    [-1,  8.5,    0,  6.3,   -1,   -1,  -1,   -1,  9.4,   -1,   -1,   -1, 18.7,  -1],
    [-1,   -1,  6.3,    0,   13,   -1,  -1, 15.3,   -1,   -1,   -1,   -1, 12.8,  -1],
    [-1,   -1,   -1,   13,    0,    3,  2.4,   30,  -1,   -1,   -1,   -1,   -1,  -1],
    [-1,   -1,   -1,   -1,    3,    0,  -1,   -1,   -1,   -1,   -1,   -1,   -1,  -1],  
    [-1,   -1,   -1,   -1,  2.4,   -1,   0,   -1,   -1,   -1,   -1,   -1,   -1,  -1],
    [-1,   -1,   -1, 15.3,   30,   -1,  -1,    0,  9.6,   -1,   -1,   6.4,  -1,  -1],
    [-1,   10,  9.4,   -1,   -1,   -1,  -1,  9.6,    0,   -1, 12.2,   -1,   -1,  -1],
    [-1,  3.5,   -1,   -1,   -1,   -1,  -1,   -1,   -1,    0,   -1,   -1,   -1,  -1],
    [-1,   -1,   -1,   -1,   -1,   -1,  -1,   -1, 12.2,   -1,    0,   -1,   -1,  -1],
    [-1,   -1,   -1,   -1,   -1,   -1,  -1,  6.4,   -1,   -1,   -1,    0,   -1,  -1],
    [-1,   -1, 18.7, 12.8,   -1,   -1,  -1,   -1,   -1,   -1,   -1,   -1,    0, 5.1],
    [-1,   -1,   -1,   -1,   -1,   -1,  -1,   -1,   -1,   -1,   -1,   -1,  5.1,   0]
];


const linhas = [ [0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                 [1,0,1,0,0,0,0,0,2,2,0,0,0,0],
                 [0,1,0,1,0,0,0,0,3,0,0,0,3,0],
                 [0,0,1,0,1,0,0,4,0,0,0,0,4,0],
                 [0,0,0,1,0,1,2,2,0,0,0,0,0,0],
                 [0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,2,0,0,0,0,0,0,0,0,0],
                 [0,0,0,4,2,0,0,0,2,0,0,4,0,0],
                 [0,2,3,0,0,0,0,2,0,0,3,0,0,0],
                 [0,2,0,0,0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,3,0,0,0,0,0],
                 [0,0,0,0,0,0,0,4,0,0,0,0,0,0],
                 [0,0,3,4,0,0,0,0,0,0,0,0,0,4],
                 [0,0,0,0,0,0,0,0,0,0,0,0,4,0] ];

const button = document.getElementById('submit-btn');

button.addEventListener("click", () => {
    let inicio = numInicio.innerText;
    let destino = numDestino.innerText;

    aStarSearch(inicio - 1, destino - 1);
})

function aStarSearch(inicio, destino) {
    let explorados = [];                    //caminho

    let fronteira = [];                     //fronteira do nó atual

    let linhaAtual = null;                  //linha atual (p/ verificar baldeação)

    let tempo = 0;                          //tempo estimado do trajeto

    let noAtual = inicio;                   //estabelece o nó de início como atual (1a execução)  

    let noAntecessor = null;                //guarda o antecessor (caso de fronteira nula)

    let baldeação = null;                   //boolean - true se houver baldeação

    do {

        //criando a fronteira
        for(let i = 0; i < 14; i++) {
            if(linhas[noAtual][i] !== 0 && !explorados.includes(i)) {
                fronteira.push(i)
            }
        }

        //caso a fronteira seja vazia (sem saída), volta ao antecessor
        if(fronteira.length === 0){
            if(noAntecessor === null){
                console.log("ERRO - FRONTEIRA NULA");
                return;
            } else {
                //refaz a fronteira do antecessor, excluindo o nó sem saída (atual)
                explorados.push(noAtual);

                for(let i = 0; i < 14; i++) {
                    if(linhas[noAntecessor][i] !== 0 && !explorados.includes(i)) {
                        fronteira.push(i)
                    }
                }

                //atualiza o tempo, reduzindo-o
                tempo -= (distanciaReal[noAntecessor][noAtual]/30)*60;

                //caso tenha havido baldeação, decresce o tempo em 4 mins
                if(baldeação){
                    tempo -= 4;
                }

                explorados.pop();
                noAtual = noAntecessor;
            }
        }
        
        console.log(`fronteira: [${fronteira}]`);

        //calcula menor custo (f) dentro da fronteira e guarda o nó em proximaEstacao

        let valoresF = [];                                                          // guarda os valores de F baseado nos ~indices de fronteira

        for(let i = 0; i < fronteira.length; i++){
            let g = (distanciaReal[noAtual][fronteira[i]] / 30) * 60;               // tempo real
            let h = (distanciaEmReta[fronteira[i]][destino] / 30) * 60;             // tempo, em reta, ao destino
            let b;
            if(linhaAtual === null || linhaAtual === linhas[noAtual][fronteira[i]]){
                b = 0;
            } else {
                b = 1;
            }

            let f = g + h + (b * 4);
            valoresF.push(f);
        }
        indiceMenorF = valoresF.indexOf(Math.min(...valoresF));                                  // acha o índice do nó com menor F
        proximaEstacao = fronteira[indiceMenorF];                                                // guarda o nó com menor F (da fronteira)

        console.log(noAtual);
        console.log(proximaEstacao);
        console.log(tempo);

        // atualiza o tempo
        tempo += (distanciaReal[noAtual][proximaEstacao]/30)*60;

        if(!linhaAtual){
            //se a linha atual for null (primeira execução), não há baldeação
            console.log("null");
            linhaAtual =  linhas[noAtual][proximaEstacao];
            baldeação = false;
         } else if (linhaAtual !== linhas[noAtual][proximaEstacao]){
            //atualiza a linha atual, em caso de baldeação
            //também atualiza o tempo
            console.log("baldeação");
            linhaAtual = linhas[noAtual][proximaEstacao];
            tempo += 4;
            baldeação = true;
        } else {
            baldeação = false;
        }

        //caso a proxima estação seja o destino, exibe o caminho
        //caso contrário, atualiza o nó atual e refaz os passos
        if(proximaEstacao === destino){
            explorados.push(noAtual);
            explorados.push(proximaEstacao);
            tempo = Math.round(tempo);
            let caminho = document.getElementById("path");
            let exploradosOut = explorados.map(function(item) { 
                // Incrementa os nós em 1, p/ exibi-los
                return item + 1; 
            });
            caminho.innerText = `O caminho ideal é [${exploradosOut}], com tempo de ${tempo} minutos`;
            caminho.style.display = "block";
            return;
        } else {
            //adiciona o nó atual à lista de explorados, caso não tenha sido visitado antes
            if(!explorados.includes(noAtual)){  
                explorados.push(noAtual);
            }

            //atualiza o antecessor
            noAntecessor = noAtual;

            //atualiza o nó atual
            noAtual = proximaEstacao;

            //limpa a fronteira
            fronteira = [];
        }
    } while(1);
}