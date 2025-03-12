class Clock {
    constructor({ template }){
        this.template = template;
        this.timer = null
    }

    stop(){
        clearInterval(timer);
    }
    
    start() {
        // De forma mais simples, pode-se definir desta forma, copiando o template do escopo da classe
        const template = this.template;
        const render = function(){
            let date = new Date();

            let hours = date.getHours(); if (hours < 10) hours = '0' + hours;
            let mins = date.getMinutes(); if (mins < 10) mins = '0' + mins;
            let secs = date.getSeconds(); if (secs < 10) secs = '0' + secs;

            let output = template.replace('h', hours).replace('m', mins).replace('s', secs);
            console.log(output);        
        }

        this.timer = setInterval(render, 1000);

        // De forma um pouco mais complicado, mas passando o escopo para dentro da função de render do tempo
        // this.timer = setInterval(( function(escope){
        //         return function(){
        //             let date = new Date();

        //             let hours = date.getHours(); if (hours < 10) hours = '0' + hours;
        //             let mins = date.getMinutes(); if (mins < 10) mins = '0' + mins;
        //             let secs = date.getSeconds(); if (secs < 10) secs = '0' + secs;

        //             let output = escope.template.replace('h', hours).replace('m', mins).replace('s', secs);
        //             console.log(output);
        //         }
        //     }
        // )(this), 1000);
    };
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();

// ===>> Código original da atividade

// function Clock({ template }) {
//     let timer;
//     function render() {
//         let date = new Date();

//         let hours = date.getHours(); if (hours < 10) hours = '0' + hours;
//         let mins = date.getMinutes(); if (mins < 10) mins = '0' + mins;
//         let secs = date.getSeconds(); if (secs < 10) secs = '0' + secs;

//         let output = template.replace('h', hours).replace('m', mins).replace('s', secs);
//         console.log(output);
//     }
//     this.stop = function () {
//         clearInterval(timer);
//     };
//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };
// }
// let clock = new Clock({ template: 'h:m:s' });
// clock.start();