/** Bài 1
 * Input: các biến a, b, c lần lượt là 3 số nguyên nhập từ người dùng.
 * 
 * Process: tổng cộng sẽ có 6 trường hợp xảy ra như sau:
 * a sẽ có 3 vị trí có thể xếp, sau khi xếp a thì b chỉ còn 2 vị trí để xếp và tương tự thì c chỉ còn 1 chỗ
 * --> 3*2*1 = 6 trường hợp
 * Để thuận tiện thì chia làm 3 trường hợp: a, b, c lần lượt là các số lớn nhất
 * 
 * Output: sắp xếp và in kết quả ra màn hình
 */


document.getElementById("btnArrange").onclick = function(){
    var a = parseInt(document.getElementById("inputInt1").value);
    var b = parseInt(document.getElementById("inputInt2").value);
    var c = parseInt(document.getElementById("inputInt3").value);
    var arrange = "";
    console.log(a,b,c);

    //Th1: a lớn nhất
    if(a > b && a > c && b > c){
        arrange = c + "<" + b + "<" + a;
    }else if(a > b && a > c && c > b){
        arrange = b + "<" + c + "<" + a;
    //Th2: b lớn nhất
    }else if(b > a && b > c && a > c){
        arrange = c + "<" + a  + "<" + b;
    }else if(b > a && b > c && c > a){
        arrange = a + "<" + c + "<" + b;
    //Th3: c lớn nhất
    }else if(c > a && c > b && a > b){
        arrange = b + "<" + a + "<" + c;
    }else if(c > a && c > b && b > a){
        arrange = a + "<" + b + "<" + c;
    }else{
        arrange = "không hợp lệ"
    }
    document.getElementById("txtArrange").innerHTML = arrange;   
}

