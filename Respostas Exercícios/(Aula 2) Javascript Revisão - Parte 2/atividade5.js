let styles = ["Jazz", "Blues"];
console.log(`1. ${styles}`);
styles.push("Rock-n-Roll");
console.log(`2. ${styles}`);
console.log(styles.length/2);
styles[parseInt(styles.length/2)]="Clássicos" // Necessário utilizar Number para converter em inteiro
console.log(`3. ${styles}`);
styles = styles.slice(1, styles.length);
console.log(`4. ${styles}`);
styles = ["Rap", "Reggae"].concat(styles);
console.log(`5. ${styles}`);

