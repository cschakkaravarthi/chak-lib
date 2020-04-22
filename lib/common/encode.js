"use strict";
exports.__esModule = true;
exports.encode = function (url) {
    return encodeURI(url)
        .replace('#', '%23')
        .replace('(', '%28')
        .replace(')', '%29')
        .replace('[', '%5B')
        .replace(']', '%5D');
};
//# sourceMappingURL=encode.js.map