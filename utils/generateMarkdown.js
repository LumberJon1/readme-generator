// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return "";
    }
    else {
        return `[<img src="https://img.shields.io/badge/License-${license}-blue.svg?logo=LOGO">](LINK)`
    }
};

function listTechnologies(string) {
    let splitString = string.split(", ");
    // let formattedString = splitString.map((item) => {
    //     if (item[0] === ",")
    // })
    let bullets = splitString.map((item) => "* "+item+"\n");
    return bullets;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Description
  ${data.description}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Deployment](#Deployment)
  3. [Usage](#Usage)
  4. [Screenshot](#Screenshot)
  5. [Contributing](#Contributing)
  6. [Technologies](#Technologies)
  7. [Tests](#Tests)
  8. [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Deployment
  ${data.deployment}

  ## Usage
  ${data.usage}

  ## Screenshot
  ![Screenshot](${data.screenshot})

  ## Contributing
  ${data.contributing}

  ## Technologies
  ${listTechnologies(data.technologies)}

  ## Tests
  ${data.tests}

  ## Questions
  [Check out my GitHub](https://github.com/${data.github})
  --or--
  Email me at ${data.email}
`;
}

module.exports = generateMarkdown;