const fs = require("fs");
// Lendo uma porção especifica de um arquivo. fd é o file descriptor (ponteiro pro arquivo)
fs.open("dados.csv", (err, fd) => {
    if (err) {
        // Reporta qualquer erro que ocorra
        return new Exception(err.message);
    }
    try {
        // Lê os btyes 20 (onde a leitura iniciará) até 420 em um novo buffer alocado.
        fs.read(fd, Buffer.alloc(100), 0, 400, 20, (error, nReadBytes, buffer) => {
            // nReadBytes é o número de bytes atualmente lido
            // buffer é onde os bytes lidos foram alocados
            console.log(buffer.toString());
        });
       
    } finally { // Use a cláusula finally para sempre
        fs.close(fd); // fecharmos o file descriptor aberto
    }
});
