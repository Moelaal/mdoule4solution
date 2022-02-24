const names = ['John','Jemy','jakov','mando','mohamed','adel','jommana','Jehan','jehad','moataz','said','nader','fady']

for ( let i = 0 ; i < names.length ; i++){
    if (names[i].charAt(0) === 'j' || names[i].charAt(0) === 'J'){
        console.log(`goodbye ${names[i]}`);
    }else{
        console.log(`Hello ${names[i]}`);
    }
}