let a=+prompt("Mời bạn nhập số thứ nhất")
let b=+prompt("Mời bạn nhập số thứ hai")
let choice;
function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a,b){
    return b===0?"Lỗi,ko thể chia":a/b
}
do{
    choice = prompt(`1.Cộng hai số.
2.Trừ hai số.
3.Nhân hai số.
4.Chia hai số.
5.Thoát.`)
switch(choice){
    case "1":
        alert(`result:${sum(a,b)}`)
        break;
    case "2":
        alert(`result:${subtract(a,b)}`);
        break;
    case "3":
        alert(`result:${multiply(a,b)}`);
        break;
    case "4":
        alert(`result:${divide(a,b)}`);
        break;
    case "5":
        alert(`Thoats chương trình`)
        break;
    default :
       alert(`Banj nhập sai dữ liệu`);
}
}while(choice!=="5")