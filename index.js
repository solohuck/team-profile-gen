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
}

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