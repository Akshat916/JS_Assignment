let week_day_num = Math.floor(Math.random() * 8)+1; // genrating random numbers

switch(week_day_num){
    case 1:
        console.log(week_day_num," : Monday");
        break;

    case 2:
        console.log(week_day_num," : Tuseday");
        break;
    
    case 3:
        console.log(week_day_num," : Wednesday");
        break;

    case 4:
        console.log(week_day_num," : Thursday");
        break;

    case 5:
        console.log(week_day_num," : Friday");
        break;

    case 6:
        console.log(week_day_num," : Saturday");
        break;

    case 7:
        console.log(week_day_num," : Sunday");
        break;

    default:
        console.log(week_day_num," : Invalid Number");
        break;
}
