var num, i, pre, cur;
num;
num1=0;
num2=1;
console.log(+num1);
console.log(+num2);
num=num1+num2;
times=5;
for (i = 0; i <=times; i++) {
console.log(+num);
num1=num2;
num2=num;
num=num1+num2;    
}
