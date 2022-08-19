function fibonacci(num){

    let arrayfib = []
 
    var num1=1;
    var num2=0;
    var sum;

    for (let i = 0; i < num; i++) {

        sum=num1+num2;
        num1=num2;
        num2=sum;
        
        arrayfib = [... arrayfib, num2]
    }

    return arrayfib

}

const array = new fibonacci(6)

console.log(array);