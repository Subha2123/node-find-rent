function logic(a){
    
    if(a<=5){
       var result_one =a*500;
        return `The rent is ${result_one}`;
    }
    else if(a>5&&a<=10){
        var result_two=a*400+500;
        return `The rent is ${result_two}`;
    }
    else if(a>10){
        var result_three=a*200+2500;
        return `The rent is ${result_three}`; 
    }
}
export default logic;