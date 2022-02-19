// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Description
  ${data.description}

  ## License
  ${data.license}

  ## Table of Contents
    1. [Installation](Installation)
    2. [Usage](Usage)
    3. [Contributing](Contributing)
    4. [Tests](Tests)
    5. [Questions](Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
    [Check out my GitHub] (https://github.com/${data.github})
    --or--
    Email me at ${data.email}
`;
}

module.exports = generateMarkdown;