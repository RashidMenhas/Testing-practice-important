function stringLength(string) {
    if(stringLength.length === 0 || stringLength.length > 10)
    {
        return false;
    }
    else{
    return string.split('').reduce(function (length) {
        return length + 1;
    }, 0);
}
}

module.exports = stringLength;