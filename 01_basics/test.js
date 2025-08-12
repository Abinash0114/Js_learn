function indiceChecker(){
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            sum = nums[i] + nums[j];
            if(sum == target){
                console.log(1)
            }
            else
                console.log(0);
        }
    }
}

let nums = [5,4,3,1];
let target = 4;
console.log("Printing Array");
console.log(nums);
console.log("Checking for Indices_Programme");
indiceChecker();


