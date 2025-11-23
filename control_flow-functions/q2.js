function getDayName(num){
    switch (num) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tudesday");
            break;
        case 4:
            console.log("Wednesday");
            break;    
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 8: 
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Input.");
            break;
    }
}

getDayName(1) //Sunday
getDayName(7) //Saturday
getDayName(8) //Saturday
getDayName(10) //Invalid Input.
