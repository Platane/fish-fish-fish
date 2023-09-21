const { execSync } = require("child_process");

const getAppVersion = () =>
    `${require("./package.json").version}-${execSync(
        "git rev-parse --short HEAD"
    )
        .toString()
        .trim()}`;

console.log(getAppVersion());

module.exports = { getAppVersion };
