const manager = require('./Lib/manager');
const intern = require('./Lib/intern');
const engineer = require('./Lib/engineer');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const distFinish = path.resolve(__dirname, 'dist');
const htmlFinish = path.join(htmlFinish, 'finish.html');

const render = require('./Lib/htmlRender');

const member = [];

function start() {
    managerPrompt()
};

function managerPrompt() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'managers name?'
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'managers office#?'
      },
      {
        type: "input",
        name: "id",
        message: "managers id#:",
    },

    {
        type: "input",
        name: "email",
        message: "managers email:",
    },
  ])
  .then((val) => {
    const Manager = new manager(
      val.name,
      val.id,
      val.email,
      val.officeNumber
    );
    console.table(Manager);
    member.push(Manager);
    addMember();
  });

};

function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "engineers name?",
      },
      {
        type: "input",
        name: "email",
        message: "engineers email:",
      },
      {
        type: "input",
        name: "id",
        message: "engineers id#:",
      },
      {
        type: "input",
        name: "github",
        message: "engineers gitHub username?",
      },
    ])
    .then((val) => {
      const Engineer = new engineer(val.name, val.id, val.email, val.github);
      console.table(Engineer);
      member.push(Engineer);
      addMember();
    });
};

function addMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addMem",
        message: "Add an engineer or intern?",
        choices: ["engineer", "intern", "no"],
      },
    ])
    .then((val) => {
      if (val.addMem === "engineer") {
        engineerPrompt();
      } else if (val.addMem === "intern") {
        internPrompt();
      } else {
        makeHtmlFile();
      }
    });
};
