module.exports = function reverse(n) {
    const str = String(n).split("").reverse().join("");
    return Number.parseInt(str);
}
