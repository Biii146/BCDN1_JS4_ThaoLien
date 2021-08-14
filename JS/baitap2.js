/** Bài 2
 * Input: lấy dữ liệu ai đang dùng máy từ người dùng
 * 
 * Process: sử dụng switch case để phân loại ai đang dùng máy
 * 
 *Output: xuất kết quả ra màn hình
 */


function sayHello(){
    var user = document.getElementById("selectUser").value;
    var say = "";

    switch(user){
        case "B":
            say = "Xin chào Bố";
            break;
        case "M":
            say = "Xin chào Mẹ";
            break;
        case "A":
            say = "Xin chào Anh trai";
            break;
        default:
            say = "Xin chào Em gái";
    }

    document.getElementById("txtHello").innerHTML = say;
}

document.getElementById("btnHello").onclick = sayHello;