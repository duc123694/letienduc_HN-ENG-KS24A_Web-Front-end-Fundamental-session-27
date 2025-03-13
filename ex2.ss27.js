let arr=[];
let choice;
do{
    choice = prompt(`1.Nhập danh sách sinh viên.
Cho người dùng nhập số lượng số sinh viên, nhập lần lượt tên đầy đủ từng sinh viên.
2.Hiển thị danh sách sinh viên.
3.Tìm sinh viên theo tên.
Cho người dùng nhập tên sinh viên cần tìm kiếm, hiển thị tên đầy đủ sinh viên nếu tìm thấy, trong trường hợp không tìm thấy sinh viên thông báo sinh viên không có trong danh sách .
4.Xóa sinh viên khỏi danh sách.
Cho người dùng nhập tên sinh viên cần xóa, trong trường hợp có nhiều sinh viên trùng tên thì xóa sinh viên đầu tiên.
5.Thoát.
 `)
 switch(choice){
    case "1":
        let input=prompt("Mời bnaj nhập tên đầy đủ của sinh viên và cách nhau bởi dấu phẩy");
        arr=input.split(",");
        break;
    case "2":
        alert("Danh sách sinh viên là: "+arr.join(","));
        break;
    case "3":
        let name=prompt("Mời bạn nhập tên cần tìm");
        const findName=arr.find((value) => value === name )
        if(findName){
            alert("Tên bạn cần tìm có trong danh sách :"+findName);
        }else{
            alert("Tên bạn cần tìm ko có trong danh sách");
        }
        break;
    case "4":
        let names=prompt("Mời bạn nhập tên cần xóa");
        const findsName=arr.find((value) => value === names )
        if(findsName){
            arr.splice(arr.indexOf(findsName),1);
            alert("Đã xóa sinh viên: " + findsName);
            alert("Danh sách sau khi xóa: " + arr.join(", "));
        }else{
            alert("Tên bạn cần xóa ko có trong danh sách");
        }
        break;
    case "5":
        alert("Thoát chương trình");
        break;
    default:
        alert("Bạn đã nhập sai dữ liệu");

 }
}while (choice !== "5")