const fs = require('fs');
const inquirer = require('./.gitignore/node_modules/inquirer');

inquirer.prompt([
  {
    type: 'input',
    message: 'Project title?',
    name: 'title'
  }, 
  {
    type: 'input',
    message: 'Description of project',
    name: 'description'
  }, 
  {
    type: 'input',
    message: 'What was your motivation?',
    name: 'motivation'
  },
  {
    type: 'input',
    message: 'What did you learn?',
    name: 'learn'
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Provide instructions for use.',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'If you have a image, type the file name with extension. EX: screenshot.png',
    name: 'image'
  },
  {
    type: 'input',
    message: 'What license do you have? EX: MIT License',
    name: 'license'
  }
])