const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "what is your name?"
        },
        {
            type: "input",
            name: "location",
            message: "where are you from?"
        },
        {
            type: "input",
            name: "location",
            message: "where are you from?"
        },
        {
            type: "input",
            name: "location",
            message: "where are you from?"
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
    const md = `# ${data.name}
## ${data.location}`
    return md;
}
