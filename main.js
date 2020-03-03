let bill;
let remainder;
let num500k=0; let num200k=0; let num100k=0; let num50k=0; let num20k=0; let num10k=0;
let num5k=0; let num2k=0; let num1k=0;

const k = 1000;

function getBill(){
    bill = document.getElementById("bill").value;
    if(bill<0){
        document.getElementById("resultArea").innerHTML="Bill must be a positive number.";
        getBill();
    }
}

function calculate(){
        if(bill>=(500*k)){
            num500k=Math.floor((bill/(500*k)));
            remainder=bill - num500k*500*k;
        } if(remainder>=(200*k)){
            num200k=Math.floor((remainder/(200*k)));
            remainder=remainder - num200k*200*k;
        } if (remainder>=(100*k)){
            num100k=Math.floor((remainder/(100*k)));
            remainder=remainder - num100k*100*k;
        } if (remainder>=(50*k)){
            num50k=Math.floor((remainder/(50*k)));
            remainder=remainder - num50k*50*k;
        } if (remainder>=(20*k)){
            num20k=Math.floor((remainder/(20*k)));
            remainder=remainder - num20k*20*k;
        } if (remainder>=(10*k)){
            num10k=Math.floor((remainder/(10*k)));
            remainder=remainder - num10k*10*k;
        } if (remainder>=(5*k)){
            num5k=Math.floor((remainder/(5*k)));
            remainder=remainder - num5k*5*k;
        } if (remainder>=(2*k)){
            num2k=Math.floor((remainder/(2*k)));
            remainder=remainder - num2k*2*k;
        } if (remainder>=(1*k)){
            num1k=Math.floor((remainder/(1*k)));
        }
}

function showResult(){
    getBill();
    calculate();
    document.getElementById("resultArea").innerHTML=`${bill} = ${num500k}x500k
    + ${num200k}x200k + ${num100k}x100k + ${num50k}x50k + ${num20k}x20k
    + ${num10k}x10k + ${num5k}x5k + ${num2k}x2k + ${num1k}x1k`;
}