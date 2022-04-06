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
  4. [Contributing](#Contributing)
  5. [Technologies](#Technologies)
  6. [Tests](#Tests)
  7. [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Deployment
  ${data.deployment}

  ## Usage
  ${data.usage}

  ## Screenshot
  ${data.screenshot}

  ## Contributing
  ${data.contributing}

  ## Technologies
  ${data.technologies}

  ## Tests
  ${data.tests}

  ## Questions
  [Check out my GitHub](https://github.com/${data.github})
  --or--
  Email me at ${data.email}
`;
}

module.exports = generateMarkdown;