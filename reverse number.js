let reverse_num = 0;
let number_value = 149;
let result;
while(number_value != 0){
result = number_value % 10;
 reverse_num = reverse_num * 10 + result;
 number_value = Math.floor(number_value/10);
}
console.log("The Reversed number is : "+reverse_num);