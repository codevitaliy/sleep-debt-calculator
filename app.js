const getSleepHours = (day) => {
    switch(day) {
        case "monday":
            return 8;

        case "tuesday":
            return 8;

        case "wednesday":
            return 8;

        case "thursday":
            return 8;

        case "friday":
            return 9;

        case "saturday":
            return 8;

        case "sunday":
            return 8;

        default:

            return "an error has ocurred";

        
    }
}

const getActualSleepHours = () => 
    getSleepHours("monday") 
    + getSleepHours("tuesday") 
    + getSleepHours("wednesday") 
    + getSleepHours("thursday") 
    + getSleepHours("friday") 
    + getSleepHours("saturday") 
    + getSleepHours("sunday"); 


const getIdealSleepHours = () => {
let idealHours = 8;
return idealHours * 7;
}


const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
        console.log(`You are getting the perfect amount of 56 sleep hours`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You are sleeping ${actualSleepHours - idealSleepHours} hour than you need`);
    }else {
        console.log(`You should sleep ${idealSleepHours - actualSleepHours} hours more`);
    }
    }

calculateSleepDebt();