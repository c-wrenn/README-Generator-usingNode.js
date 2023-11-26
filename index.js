const inquirer = require('inquirer');
const fs = require('fs');
const markdownGenerator = require('./lib/README-Gen');
const generateREADME = require('./lib/README-Gen');

//inquirer.prompt (
const readmequestions = [
{
    //Project Title
    //Needs to be displayed as the title of the readme
    type: 'input',
    message: "What is the title of your project?",
    name: 'projectTitle',
},
{
    //User creates description
    type: 'input',
    message: "Provide a brief description of your project:",
    name: 'title',
},
{
    //user creates a list, still need to onput on this list
    type: 'list',
    message: "Table of contents",
    name: 'TOContents'
},
{
    //instructions to install
    type: 'input',
    message: "Enter the installation instructions: ",
    name: 'install'
},
{
    //render license link
    type:'list',
    message:"Choose a liscense for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 
    'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License',
    'Boost Software License 1.0', 'The Unlicense', 'none'], 
    name: 'liscense'

},
{
    //test instructions
    type: 'input',
    message: "Enter the test instructions: ",
    name: 'test'
},
{
    //contribution information
    type: 'input',
    message: "Contribution Information: ",
    name: 'contribution'
},
{
    //holds email
    type: 'input',
    message: "Enter your email:",
    name: 'email'
},
{
    //holds github username
    type: 'input',
    message: "Enter your github username:",
    name: 'github'
},
    
];

inquirer
//goes through questions
.prompt(readmequestions)
.then((answers) => {
    //convert to string
    console.log(JSON.stringify(answers));
    writeRMFile(answers);
});


function writeRMFile(answers) {
    const readmeContents = 
    // `
    // Title:                      ${answers.username}
    // Description:                ${answers.userLanguages}
    // Table of Contents:          ${answers.TOContents}
    // Project Purpose:            ${answers.purpose}
    // How to Install:             ${answers.install}
    // `;

    //writeFile function will create a file called answers.txt, txt file
    //pass in fileContents variable.
    fs.writeRMFile('README.md', generateREADME(readmeContents), (err) => {
        if (err) {
            console.error(err);
        }else {
            console.log("Your README file has been created!");
        }
    })
}