const fs = require('fs');
const charset = 'utf-8';

//Start
console.log("\nFile Manager Start\n");

//Read
console.log("\nRead:\n-----");

let filePath = "files/sync.txt";
let fileContent = fs.readFileSync(filePath, charset);
console.log(fileContent);


//Write
console.log("\nWrite:\n-----");

filePath = "files/output-sync.txt";
fs.writeFileSync(filePath, "This a txt OUTPUT file for sync purposes.");
fileContent = fs.readFileSync(filePath, charset);
console.log(fileContent);


//Append
console.log("\nAppend:\n-----");

filePath = "files/append-sync.txt";
fs.appendFileSync(filePath, "This a txt APPEND file for sync purposes.\n");
fileContent = fs.readFileSync(filePath, charset);
console.log(fileContent);


//Rename
console.log("\nRename (old.txt -> new.txt):\n-----");

filePath = "files/old.txt";
let newFilePath = "files/new.txt";

console.log("> Reading old.txt:");
fileContent = fs.readFileSync(filePath, charset);
console.log("Content: " + fileContent);

console.log("\n- Renaming old.txt -> new.txt...\n");
fs.renameSync(filePath, newFilePath);

console.log("> Now reading new.txt (still same content):");
fileContent = fs.readFileSync(newFilePath, charset);
console.log("Content: " + fileContent);

fs.renameSync(newFilePath, filePath); //Reverting Rename


//Delete
console.log("\nDelete:\n-----");

filePath = "files/delete.txt";

console.log("> Reading delete.txt:");
fileContent = fs.readFileSync(filePath, charset);
console.log("Content (should be empty): " + fileContent);

console.log("\n- Deleting delete.txt\n");
fs.unlinkSync(filePath);

console.log("> Trying to read again delete.txt\n");
try {
    fileContent = fs.readFileSync(filePath, charset);
    console.log(fileContent); //Never gonna reach this line
} catch (error) {
    console.log(error);
    console.log("\n- Creating again delete.txt\n");
    fs.writeFileSync(filePath, "");
}


//Create Directory
console.log("\nCreate Directory testDir:\n-----");

dirPath = "files/testDir";
fs.mkdirSync(dirPath);

console.log("> Creating test.txt inside testDir:\n");
filePath = "files/testDir/test.txt";
fs.writeFileSync(filePath, "File inside testDir.");

console.log("\n> Reading testDir/test.txt\n");
fileContent = fs.readFileSync(filePath, charset);
console.log(fileContent);

console.log("\n- Deleting testDir/test.txt\n");
fs.unlinkSync(filePath);

console.log("- Deleting testDir\n");
fs.rmdirSync(dirPath);


//Read Directory
console.log("\nRead Directory:\n-----");

dirPath = "files/";
const allDirFilesList = fs.readdirSync(dirPath);
console.log(allDirFilesList);

//End
console.log("\nEnd");