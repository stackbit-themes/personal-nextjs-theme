const path = require('path');

function urlPathFromFilePath(filePath) {
    const pathObject = path.posix.parse(filePath);
    const parts = pathObject.dir.split(path.posix.sep).filter(Boolean);
    if (pathObject.name !== 'index') {
        parts.push(pathObject.name);
    }
    const urlPath = parts.join('/').toLowerCase();
    return '/' + urlPath;
}

function cssClassesFromFilePath(filePath) {
    const pathObject = path.posix.parse(filePath);
    const parts = pathObject.dir.split(path.posix.sep).filter(Boolean);
    parts.push(pathObject.name);

    let css = 'page';
    return parts.map((part) => {
        css += `-${part}`;
        return css;
    });
}

function setEnvironmentVariables() {
    return {
        ...(process?.env?.URL && { URL: process.env.URL })
    };
}

module.exports = {
    urlPathFromFilePath,
    cssClassesFromFilePath,
    setEnvironmentVariables
};
