let num = [];
let amount = +prompt("Nhập số lượng phần tử:");
alert("Vui lòng nhập mảng đã được sắp xếp hoặc tôi sẽ tự sắp xếp!");

for (let i = 0; i < amount; i++) {
  num.push(+prompt(`Nhập phần tử thứ ${i + 1}:`));
}
num.sort((a, b) => a - b);

function find(arr) {
  let numbers = [];
  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      numbers.push(i);
    }
  }
  console.log("Các số bị thiếu trong dãy là:", numbers);
}

find(num);
