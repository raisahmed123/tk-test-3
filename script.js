// write your JS code here
let price = 5.99;
let count = 0;

function calAdd(){
    count++;
    document.querySelector("input").value = `${count}`;
    document.querySelector("#amount").innerHTML = `${count * price}`;
}

function calMinus(){
    if (count > 0){
        count--;
        document.querySelector("input").value = `${count}`;
        document.querySelector("#amount").innerHTML =`${count * price}`;
    
    }
}