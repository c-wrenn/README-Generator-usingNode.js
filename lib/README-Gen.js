
//will hold some static fi;es
//class readmeLayout {
    //generates readme based on answers
    function generateREADME(answers){
        return`

        # $(answers.title);

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

        ${answers.contribution}

        ## License

        ${renderLicenseLink(answers.license)}


        ##Tests

        ${answers.test}

        ## Questions

        If you have any questions, contact me at:

        ${answers.email}
        ${answers.github}
        
        `;
    }
//}
module.exports = generateREADME;