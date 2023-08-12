

let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
styles[styles.length%2]="Clássicos"
console.log(styles);
styles = styles.slice(1, styles.length);
console.log(styles);
styles = ["Rap", "Reggae"].concat(styles);
console.log(styles);

