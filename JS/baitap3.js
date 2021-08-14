/** Bài 3
 * Input: lấy dữ liệu 3 số nhập vào từ người dùng
 * 
 * Process: 
 * - tạo 3 biến chứa dữ liệu từ người dùng là num1,num2, num3
 * - tạo biến chứa 2 biến đếm tạm là biến tổng số chẳn sumEven và tổng số lẻ sumOdd
 * - kiểm tra lần lượt 3 số, nếu số đó chia hết cho 2 thì cho biến tạm sumEven thêm 1 đơn vị và ngược lại.
 * 
 * Output: in kết quả ra màn hình
 */

document.getElementById("btnCount").onclick = function(){
    
    num1 = parseInt(document.getElementById("inputNum1").value);
    num2 = parseInt(document.getElementById("inputNum2").value);
    num3 = parseInt(document.getElementById("inputNum3").value);
    sumEven = 0;
    sumOdd = 0;

    if(num1%2 == 0){
        sumEven+=1;
    }else{
        sumOdd+=1;
    }

    if(num2%2 == 0){
        sumEven+=1;
    }else{
        sumOdd+=1;
    }

    if(num3%2 == 0){
        sumEven+=1;
    }else{
        sumOdd+=1;
    }

    document.getElementById("txtCount").innerHTML = "Có "+sumEven+" số chẵn và "+sumOdd+" số lẻ";
}