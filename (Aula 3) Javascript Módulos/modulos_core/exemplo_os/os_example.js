const os = require("os");
os.arch() // Retorna a arquitetura da CPU. "x64" or "arm", for example.
os.constants // Constantes úteis tais como os.constants.signals.SIGINT.
os.cpus() // Dados sobre os núcleos das CPUs, incluindo o tempo de uso.
os.endianness() // A ordenação dos bits (endianness) da CPU’s, "BE“ (Big-endian) ou "LE“ (Little-endian).
os.EOL // O terminador de linha native do SO: "\n" or "\r\n".
os.freemem() // Retorna a quantidade de memória RAM livre em bytes.
os.getPriority() // Retorna a prioridade escalonamento do SO de um processo.
os.homedir() // Diretório home atual do usuário.
os.hostname() // Retorna o hostname do computador.
os.loadavg() // Returns the 1, 5, and 15-minute load averages.
os.networkInterfaces() // Retorna detalhes sobre rede e conexões.
os.platform() // Retorna o SO: "linux", "darwin", ou "win32", por exemplo.
os.release() // Retorna o número da versão do SO.
os.setPriority() // Tenta atribuir uma prioridade de escalonamento para um processo.
os.tmpdir() // Retorna o diretório temporário padrão.
os.totalmem() // Retorna a quantidade total de memória RAM em bytes.
os.type() // Retorna SO: "Linux", "Darwin", or "Windows_NT", e.g.
os.uptime() // Retorna o tempo de execução do Sistema em segundos.
os.userInfo() // Retorna uid, username, homedir, e shell do usuário corrente.
