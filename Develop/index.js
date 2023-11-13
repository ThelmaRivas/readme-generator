// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();


inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test instructions.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project',
            choices: ['MIT', 'Apache', 'GPL', 'None']
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please provide any additional information orquestions:'

        },
    ])
    .then((answers) => {
        // Generate the README file content
        const readmeContent = `# ${answers.projectName}
    
    ${answers.description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    ${answers.installation}
    
    ## Usage
    
    ${answers.usage}
    
    ## License
    
    This project is licensed under the ${answers.license}.
    
    ## Contributing
    
    ${answers.contributing}
    
    ## Tests
    
    ${answers.tests}
    
    ## Questions
    
    ${answers.questions}
    `;
    
     
      });

