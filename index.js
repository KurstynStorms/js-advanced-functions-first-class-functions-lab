// Code your solution in this file!
function returnFirstTwoDrivers (drivers) {
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers){
    return drivers.slice (-2)
}
const selectingDrivers = [returnFirstTwoDrivers ,returnLastTwoDrivers]

function createFareMultiplier(){
    return function(){
    }
}
function createFareMultiplier(fareQuintupler){
    return function(){
        return fareQuintupler * fareQuintupler
    }
}
function fareDoubler(doubleFare){
    return doubleFare * 2
}
function fareTripler(tripleFare){
    return tripleFare * 3
}
function selectDifferentDrivers(drivers, kurstyn){
    return kurstyn(drivers)
}