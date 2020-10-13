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
        }
    ])


    function generateReadMe(answers) {
        return
    }
    fs.writeFile("README.md", READMEfile, err =>{
        if (err){
            console.log(err);
        }else{
            console.log("Good Luck on Your Project!")
        }
    })