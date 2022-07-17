class mdclass {

    // static createLicenseBadge(license){
    //     const badges = [
    //         mit:,
    //         isc: ,
    //         gnuplv3:
    //         ]
    // }
    static geneReadme(ansr) {
        return `
        # ${ansr.title}

## Description
${ansr.description}


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How To Contribute](#howToContribute)
- [Tests](#tests)
- [Questions](#questions)


## Installation
${ansr.installation}

## Usage
${ansr.usage}

## Credits
${ansr.credits}

## License
${ansr.license}

## Features
${ansr.features}

## How to Contribute
${ansr.contribute}

## Tests
${ansr.tests}

## Questions
${ansr.github} <br />
${ansr.email}

`
    }
}

module.exports = mdclass

