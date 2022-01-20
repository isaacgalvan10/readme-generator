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
    message: 'Github username',
    name: 'github'
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email'
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
    message: 'Provide instructions for use.',
    name: 'usage'
  },
  {
    type: 'list',
    message: 'What license do you have?',
    name: 'license',
    choices: ['MIT License', 'Apache License', 'GNU GPLv3', 'The Unlicense']
  }
])
.then((response) => {

  let licenseBadge;

  switch (response.license) {
    case 'MIT License':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache License':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU GPLv3':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'The Unlicense':
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
  }

  fs.writeFile('README.md', readmeTemp(response, licenseBadge), (err) => err ? console.log(err) : console.log('README added!'))
});

function readmeTemp({title, github, email, description, motivation, learn, installation, usage, license}, licenseBadge) {
  return `# ${title}
  ${licenseBadge}

  ## Description
  - ${description}
  - ${motivation}
  - ${learn}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  This project is covered under ${license}.

  ## Questions
  For any questions feel free to reach out:
  - Email: [${email}](mailto:${email})
  - [Github](https://github.com/${github})
  `
};