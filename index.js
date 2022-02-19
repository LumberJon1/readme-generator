
// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];
//Test data for running the prompts
const testData = [
    {
        name: "projectTitle",
        value: "Project Name"
    },
    {
        name: "description",
        value:"Project Description"
    },
    {
        name: "license",
        value:"License Type"
    },
    {
        name: "installation",
        value:"Install by downloading Node and then running node index"
    },
    {
        name: "usage",
        value:"Use this to generate a professional README."
    },
    {
        name: "contributing",
        value:"Please don't contribute to this project."
    },
    {
        name: "tests",
        value:"Test Instructions"
    },
    {
        name: "github",
        value:"GitBasher2000"
    },
    {
        name: "email",
        value:"gitbasher@hotmail.com"
    }
];

//user input prompts
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the name of the project?",
            validate: title => {
                if (title) {
                    return true;
                }
                else {
                    console.log("Please enter a project title.");
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a brief description of the project.",
            validate: description => {
                if (description) {
                    return true;
                }
                else {
                    console.log("Please provide a project description.");
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation instructions, if applicable.",
            default: "No installation is required to run this project."
        },
        {
            type: "input",
            name: "usage",
            message: "How should users interact with/use this program?",
            validate: usage => {
                if (usage) {
                    return true;
                }
                else {
                    console.log("Please provide some usage instructions for this program.");
                }
            }
        },
        {
            type: "input",
            name: "contributing",
            message: "How should other developers help contribute to this project? (skip if you do not wish for other developers to contribute.)",
            default: "Please do not contribute directly to this project.  If you have a suggestion, reach out to me directly."
        },
        {
            type: "input",
            name: "tests",
            message: "Enter any applicable test information.",
            default: "No information on testing."
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license was this created under?",
            choices: ["MIT License", "GNU GPLv3", "Other"],
            validate: license => {
                if (license) {
                    return true;
                }
                else {
                    console.log("Please select a license.");
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
            validate: github => {
                if (github) {
                    return true;
                }
                else {
                    console.log("Please provide a GitHub username.");
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address.",
            validate: email => {
                if (email) {
                    return true;
                }
                else {
                    console.log("Please provide a valid email address.");
                }
            }
        }
])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser();
    const [...all] = testData; 
}

// Function call to initialize app
init();