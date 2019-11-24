function logStrings(num, ...args) {
    // var args = Array.prototype.slice.call(arguments)
    console.log(num, args)
}
logStrings(20, "WFM", "WFM2", "WFM3", "WFM4", "WFM5")


function logStringsNew(num, ...args) {
    console.log(num, args)
}
let spreadArray = ["WFM_spred", "WFM_spred2", "WFM_spred3", "WFM_spred4", "WFM_spred5"]
logStringsNew(20, ...spreadArray)
logStringsNew(20, "WFM_spred", "WFM_spred2", "WFM_spred3", "WFM_spred4", "WFM_spred5")