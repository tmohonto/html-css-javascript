const fs = require("fs");
let text = fs.readFileSync("read.txt", "utf-8");
console.log(text);

text = text.replace("dosanan", "tonmoy");
fs.writeFileSync("write.txt", text);