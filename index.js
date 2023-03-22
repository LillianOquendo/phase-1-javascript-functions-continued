//Figure out how to permit the default activity to be overridden
console.log (saturdayFun ());
function saturdayFun(activity){
if (activity) {
    return (`This Saturday\, I want to ${activity}!`)
}
else {
    return ('This Saturday\, I want to roller-skate!');
}
}

mondayWork();
function mondayWork (activity2){
    if (activity2){
        return (`This Monday\, I will ${activity2}.`)
    }
    else {
        return `This Monday\, I will go to the office.`
    }

}
console.log (mondayWork)
let wrapAdjective = function(type = "*") {
	return function(word = "special") {
		return `You are ${type}${word}${type}!`
		}
	}

    




