// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const md = require(`./markdown`);


// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the project name",
        type: "input",
        name: "title"
    },

    {
        message: "Please enter a Description",
        type: "input",
        name: "description"
    },

    {
        message: "What installation methods did you use",
        type: "input",
        name: "installation"
    },

    {
        message: "Provide Instructions and Usage:",
        type: "input",
        name: "usage"
    },

    {
        message: "Credits:",
        type: "input",
        name: "credits"
    },

    {
        message: "Licenses:",
        type: "list",
        name: "license",
        choices: [`MIT`, `ISC`, `GNUPLv3`]
    },

    {
        message: "Features:",
        type: "input",
        name: "features"
    },

    {
        message: "How to Contribute:",
        type: "input",
        name: "contribute"
    },

    {
        message: "Tests:",
        type: "input",
        name: "tests"
    },

    {
        message: "Github:",
        type: "input",
        name: "github"
    },

    {
        message: "Email:",
        type: "input",
        name: "email"
    }

]

// METHOD TO CONFIGURE BASE READ ME ELEMENTS
//function configuredReadMeEls() {}

// METHOD TO READ WRITTEN README FILE TO CONSOLE
// const fs = require('fs')
// fs.readFile('README.md', (err, data) => {
// 	if (err) {
// 		console.error(err)
// 		return
// 	}
// 	console.log(data.toString())
// })

// METHOD TO GENERATE READ ME FILE
// // TODO: Create a function to write README file
// function writeToFile('ReadME.md', markdown, function (err) {
//         if(err){
//         console.log("error creating file")
//     }else{
//         console.log("file was created")
//     }
// });

// // METHO TO PRESENT AND CAPTURE QUESTION DATA
// // TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers)=>
    {
        const markdown = md.geneReadme(answers)
        console.log(markdown)
        fs.writeFile('README.md', markdown, (err) =>
        {
            if (err)
            {
                console.log("could not create file", err)
            } else {
                console.log("created new readme file")
            }
        })
    })
}

// // Function call to initialize app
init();
