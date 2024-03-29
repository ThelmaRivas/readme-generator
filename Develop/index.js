// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


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
        const readmeContent = generateMarkdown(answers);

        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('README.md file created successfully!');
        });
    })
    .catch((error) => {
        console.error(error);
    });
    
   