<p align="center">
  <img src="./resources/logos/sStrap@1x.png" width="400" height="400">
</p>

<h3 align="center">superStrap</h3>

<p align="center">
  Sleek, intuitive, and powerful front-end framework for faster and easier web development.
  <br>
  <br>
  <br>
  <a href="https://github.com/gtoy1118/superstrap/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
  ·
  <a href="https://github.com/gtoy1118/superstrap/issues/new?assignees=&labels=feature&template=feature_request.yml">Request feature</a>
</p>


## superstrap 5

Our default branch is for development of our superStrap `main` branch. Head to the [`main` branch](https://github.com/gtoy1118/superstrap/tree/main) to view the readme, documentation, and source code.


## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Thanks](#thanks)
- [Copyright and license](#copyright-and-license)


## Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/gtoy1118/superstrap/archive/v5.3.0-alpha3.zip)
- Clone the repo: `git clone https://github.com/gtoy1118/superstrap.git`


## Status


## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations.

<details>
  <summary>Download contents</summary>

  ```text
  superstrap/
  ├── css/
  │   ├── superstrap-grid.css
  │   ├── superstrap-grid.css.map
  │   ├── superstrap-grid.min.css
  │   ├── superstrap-grid.min.css.map
  │   ├── superstrap-grid.rtl.css
  │   ├── superstrap-grid.rtl.css.map
  │   ├── superstrap-grid.rtl.min.css
  │   ├── superstrap-grid.rtl.min.css.map
  │   ├── superstrap-reboot.css
  │   ├── superstrap-reboot.css.map
  │   ├── superstrap-reboot.min.css
  │   ├── superstrap-reboot.min.css.map
  │   ├── superstrap-reboot.rtl.css
  │   ├── superstrap-reboot.rtl.css.map
  │   ├── superstrap-reboot.rtl.min.css
  │   ├── superstrap-reboot.rtl.min.css.map
  │   ├── superstrap-utilities.css
  │   ├── superstrap-utilities.css.map
  │   ├── superstrap-utilities.min.css
  │   ├── superstrap-utilities.min.css.map
  │   ├── superstrap-utilities.rtl.css
  │   ├── superstrap-utilities.rtl.css.map
  │   ├── superstrap-utilities.rtl.min.css
  │   ├── superstrap-utilities.rtl.min.css.map
  │   ├── superstrap.css
  │   ├── superstrap.css.map
  │   ├── superstrap.min.css
  │   ├── superstrap.min.css.map
  │   ├── superstrap.rtl.css
  │   ├── superstrap.rtl.css.map
  │   ├── superstrap.rtl.min.css
  │   └── superstrap.rtl.min.css.map
  └── js/
      ├── superstrap.bundle.js
      ├── superstrap.bundle.js.map
      ├── superstrap.bundle.min.js
      ├── superstrap.bundle.min.js.map
      ├── superstrap.esm.js
      ├── superstrap.esm.js.map
      ├── superstrap.esm.min.js
      ├── superstrap.esm.min.js.map
      ├── superstrap.js
      ├── superstrap.js.map
      ├── superstrap.min.js
      └── superstrap.min.js.map
  ```
</details>

We provide compiled CSS and JS (`superstrap.*`), as well as compiled and minified CSS and JS (`superstrap.min.*`). [Source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`superstrap.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`superstrap.bundle.js` and minified `superstrap.bundle.min.js`) include [Popper](https://popper.js.org/).


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/gtoy1118/superstrap/blob/main/.github/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/gtoy1118/superstrap/issues/new/choose).


## Documentation

SuperStrap's documentation, included in this repo in the root directory, is built with [Hugo](https://gohugo.io/) and publicly hosted on GitHub Pages at <https://getsuperstrap.com/>. The docs may also be run locally.

Documentation search is powered by [Algolia's DocSearch](https://docsearch.algolia.com/).

### Running documentation locally

1. Run `npm install` to install the Node.js dependencies, including Hugo (the site builder).
2. Run `npm run test` (or a specific npm script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
3. From the root `/superstrap` directory, run `npm run docs-serve` in the command line.
4. Open `http://localhost:9001/` in your browser, and voilà.

Learn more about using Hugo by reading its [documentation](https://gohugo.io/documentation/).

### Documentation for previous releases

You can find all our previous releases docs on <https://getsuperstrap.com/docs/versions/>.

[Previous releases](https://github.com/gtoy1118/superstrap/releases) and their documentation are also available for download.


## Contributing

Please read through our [contributing guidelines](https://github.com/gtoy1118/superstrap/blob/main/.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/gtoy1118/superstrap/tree/main/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/gtoy1118/superstrap/blob/main/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.


## Community

Get updates on superstrap's development and chat with the project maintainers and community members.


- Ask and explore [our GitHub Discussions](https://github.com/gtoy1118/superstrap/discussions).
- Implementation help may be found at Stack Overflow (tagged [`superstrap-5`](https://stackoverflow.com/questions/tagged/superstrap-5)).
- Developers should use the keyword `superstrap` on packages which modify or add to the functionality of superstrap when distributing through [npm](https://www.npmjs.com/browse/keyword/superstrap) or similar delivery mechanisms for maximum discoverability.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, superstrap is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/gtoy1118/superstrap/releases) for changelogs for each release version of superstrap. Release announcement posts on [the official superstrap blog](https://blog.getsuperstrap.com/) contain summaries of the most noteworthy changes made in each release.


## Creators

**gtoy1118**

- <https://github.com/gtoy1118>

**muchtek**

- <https://github.com/muchtek>


## Thanks

<a href="https://www.browserstack.com/">
  <img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack" width="192" height="42">
</a>

Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!

<a href="https://www.netlify.com/">
  <img src="https://www.netlify.com/v3/img/components/full-logo-light.svg" alt="Netlify" width="147" height="40">
</a>

Thanks to [Netlify](https://www.netlify.com/) for providing us with Deploy Previews!



## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/superstrap#backer)]

[![Backers](https://opencollective.com/superstrap/backers.svg?width=890)](https://opencollective.com/superstrap#backers)


## Copyright and license

Code and documentation copyright 2011–2023 the [superstrap Authors](https://github.com/gtoy1118/superstrap/graphs/contributors). Code released under the [MIT License](https://github.com/gtoy1118/superstrap/blob/main/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
