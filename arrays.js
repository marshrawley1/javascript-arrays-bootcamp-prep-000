var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, 'twix'){
['twix', ...chocolateBars]
return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, 'twix'){
chocolateBars.unshift('twix')
return chocolateBars
}

function addElementToEndOfArray(chocolateBars, 'twix'){
[...chocolateBars, 'twix']
return  chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars, 'twix'){
chocolateBars.push('twix')
return chocolateBars
}
*/
