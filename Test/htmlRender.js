const path = require("path");
const fs = require("fs");

const scrDir = path.resolve(__dirname, "../src");

const render = (employees) => { 
    const html = [];

  html.push(
    employees
      .filter((Employee) => Employee.getRole() === "Manager")
      .map((Manager) => renderManager(Manager)));
  html.push(
    employees
      .filter((Employee) => Employee.getRole() === "Engineer")
      .map((Engineer) => renderEngineer(Engineer)));
  html.push(
    employees
        .filter((Employee) => Employee.getRole() === "Intern")
        .map((Intern) => renderIntern(Intern)));
    return renderIndex(html.join(""));
};

const renderManager = (Manager) => {
  let src = fs.readFileSync( 
    path.resolve(scrDir, "Manager.html"),
    "utf8");
  src = newInsert(src, "name", Manager.getName());
  src = newInsert(src, "role", Manager.getRole());
  src = newInsert(src, "email", Manager.getEmail());
  src = newInsert(src, "id", Manager.getId());
  src = newInsert(src,"officeNumber", Manager.getOfficeNumber());
  return src;
};

const renderEngineer = (Engineer) => {
  let src = fs.readFileSync(
    path.resolve(scrDir, "Engineer.html"),
    "utf8");
    src = newInsert(src, "name", Engineer.getName());
    src = newInsert(src, "role", Engineer.getRole());
    src = newInsert(src, "email", Engineer.getEmail());
    src = newInsert(src, "id", Engineer.getId());
    src = newInsert(src, "github", Engineer.getGithub());
  return src;
};

const renderIntern = (Intern) => {
  let src = fs.readFileSync(
    path.resolve(scrDir, "Intern.html"),
    "utf8");
    src = newInsert(src, "name", Intern.getName());
    src = newInsert(src, "role", Intern.getRole());
    src = newInsert(src, "email", Intern.getEmail());
    src = newInsert(src, "id", Intern.getId());
    src = newInsert(src, "school", Intern.getSchool());
  return src;
};

const renderIndex = (html) => {
  const src = fs.readFileSync(
    path.resolve(scrDir, "index.html"),
    "utf8");
    return newInsert(src, "team", html);
};

const newInsert = (src, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return src.replace(pattern, value);
};

module.exports = render;
