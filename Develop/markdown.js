class mdclass {

    static createLicenseBadge(license){
        const badges = 
        {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            gnuplv3:'[![License: MIT](https://img.shields.io/badge/License-lgpl_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
            }
            return badges[license]
    }

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
${this.createLicenseBadge(ansr.license)}


## Features
${ansr.features}

## How to Contribute
${ansr.contribute}

## Tests
${ansr.tests}

## Questions
[www.github.com/${ansr.github}](www.github.com/${ansr.github}) <br />
${ansr.email}

`
    }
}

module.exports = mdclass

