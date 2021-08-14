/** Bài 4
 * Input: lấy dữ liệu ai đang dùng máy từ người dùng
 * 
 * Process: xây dựng công thức
 * - nếu 3 cạnh bằng nhau --> tam giác đều
 * - nếu 2 cạnh bằng nhau --> tam giác cân
 * - nếu bình phương 1 cạnh bằng tổng bình phương 2 cạnh còn lại --> tam giác vuông
 * - còn lại --> tam giác thường
 * 
 * Output: xuất kết quả ra màn hình
 */

document.getElementById("btnCheck").onclick = function(){
    edge1 = document.getElementById("inputEdge1").value;
    edge2 = document.getElementById("inputEdge2").value;
    edge3 = document.getElementById("inputEdge3").value;
    check = "";

    if(edge1 == edge2 && edge2 == edge3){
        check = "Đây là tam giác đều";
    }else if(edge1 == edge2 || edge2 == edge3 || edge1 == edge3){
        check = "Đây là tam giác cân";
    }else if(edge1*edge1 == edge2*edge2 + edge3*edge3){
        check = "Đây là tam giác vuông";
    }else if(edge2*edge2 == edge1*edge1 + edge3*edge3){
        check = "Đây là tam giác vuông";
    }else if(edge3*edge3 == edge1*edge1 + edge2*edge2){
        check = "Đây là tam giác vuông";
    }else{
        check = "Đây là tam giác thường";
    }

document.getElementById("txtCheck").innerHTML = check;
}
