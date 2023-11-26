
// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    var licenseBadge = " ";
    if (license === 'MIT License') {
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === 'Modzilla Public License 2.0') {
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }else if (license === 'Apache License 2.0') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }else if (license === 'GNU LGPLv3') {
      licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    }else if (license === 'Boost Software License 1.0') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) '
    }else if (license === 'The Unlicense') {
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    }else {
      licenseBadge = ' '
    }
    return licenseBadge;
  };
  
  
  function renderLicenseLink(license) {
    var licenseLink = " ";
    if (license === 'MIT License') {
      licenseLink = 'https://opensource.org/licenses/MIT'
    } else if (license === 'Modzilla Public License 2.0') {
      licenseLink = 'https://opensource.org/licenses/MPL-2.0'
    }else if (license === 'Apache License 2.0') {
      licenseLink = 'https://opensource.org/licenses/Apache-2.0'
    }else if (license === 'GNU LGPLv3') {
      licenseLink = 'https://www.gnu.org/licenses/lgpl-3.0'
    }else if (license === 'Boost Software License 1.0') {
      licenseLink = 'https://www.boost.org/LICENSE_1_0.txt'
    }else if (license === 'The Unlicense') {
      licenseLink = 'http://unlicense.org/'
    } else {
      licenseLink = 'N/A'
    }
    return licenseLink;
  };
  
  // Create a function that returns the license section of README
  function renderLicenseSection(license) {
    var licenseSection = ''
    if(license === ' '){
      licenseSection = ''
    } else {
  licenseSection = 
  `License: ${license}`
  }
  return licenseSection;
  }


    //generates readme based on answers
function generateREADME(answers) {
  return `
# ${answers.title}
${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
        
  * [Description](#description)
  * [Installation](#install)
  * [License](#license)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contribution)
  * [Questions](#questions)

## Usage

${answers.usage}

## Installation

${answers.install}

## License

This project is licensed under the ${answers.license}.
${renderLicenseLink(answers.license)}

## Tests

${answers.test}

## Contribution
${answers.contribution}

## Questions

If you have any questions, contact me at:

Email: ${answers.email}
Github: https://github.com/${answers.github}`;
    }

module.exports = generateREADME;