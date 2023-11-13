// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


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
    
    \`\`\`
    ${answers.installation}
    \`\`\`

    ## Usage
    
    ${answers.usage}
    
    ## License
    
    This project is licensed under the ${answers.license} license.
    
    ## Contributing
    
    ${answers.contributing}
    
    ## Tests
    
    ${answers.tests}
    
    ## Questions
    
    ${answers.questions}
    `;
       // Write the README file
       fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('README.md file created successfully!');
      });
     
      });

