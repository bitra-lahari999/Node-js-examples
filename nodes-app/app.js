//require imports fs for us and we store that in  the fs variable

const fs=require('fs')

/*

**the command below inserts the text into a file named nodes.txt, searches for it in the same directory, if file not found,nodes.txt is created
**if already exists , the it replaces the existing textr in that file to the text we passed as argument
*/

//fs.writeFileSync("nodes.txt",'Hi am Lahari')

/*
**the command below appends the text into a file named nodes.txt, searches for it in the same directory, if file not found,nodes.txt is created
**if already exists , the it appends the text to the end of the file

*/

fs.appendFileSync("nodes.txt",'\nI am a software engineer');
