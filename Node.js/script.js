const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

inquirer
    .prompt([
        //Project Name
        {
            type: "input",
            name: "title",
            message: "what is the name of your Project?"
        },
        //
        {
            type: "input",
            name: "description",
            message: "A description of your Project"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation for this project? Write NONE if none"
        },
        {
            type: "input",
            name: "usage",
            message: "How would you like your application to be used?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who is contibuting in this project?"
        },
        {
            type: "input",
            name: "test",
            message: "what are the test instructions?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "email",
            message: "what is your email address?"
        },
    ])



    .then(async data => {
        const readme = await generateREADME(data);
        console.log(readme)
        fs.writeFile("README.md", readme, err => {
            if (err) {
                console.log(err);
            } else {
                console.log("Good Luck on Your Project!")
            }
        })
    })




function generateREADME(data) {
    const md = `# ${data.title}
    # Table of Contents
    
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Contributing](#contributing)
    -[Tests](#tests)
    -[Questions](#questions)

## Description:
    ${data.description}
## Installation:
    ${data.installation}
## Usage:
    ${data.usage}
## License:

## Contributing
    ${data.contributing}
## Test
    ${data.test}
## Question
    If you have any questions you can go to my Github page through this link:
    -[Github](http://github.com/${data.github})

    For additional questions please reach out to my email at: ${data.email}.
`;
    return md;
}
