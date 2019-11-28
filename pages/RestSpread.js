function logStrings(num, ...args) {
    // var args = Array.prototype.slice.call(arguments)
    console.log(num, args)
}
logStrings(20, "WFM", "WFM2", "WFM3", "WFM4", "WFM5")


function logStringsNew(num, ...args) {
    console.log(num, args)
}
let spreadArray = ["WFM", "WFM2", "WFM3", "WFM4", "WFM5"]
logStringsNew(20, ...spreadArray)