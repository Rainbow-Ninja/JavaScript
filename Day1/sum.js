var totalSum = 0;

function sum(...nums){
    for(let i = 0; i < nums.length; i++){
        totalSum += nums[i];
    }
    console.log(totalSum);
    totalSum = 0;
}
sum(3, 4, 5, 3, 11);
sum(1, 2);
sum(1, 2, 3, 4);