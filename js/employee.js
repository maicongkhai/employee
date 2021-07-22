$(document).ready(function() {
    $.ajax({
        url: "", //Đia chỉ API
        method: "GET"
    }).done(function(res) {
        let employees = res;
        console.log(employees);
    })
})

//Khởi tọ sự kiện cho các button chức năng:
//1.Thêm mới
$('#btnAddOnClick').click(function() {
        $('#id-dialog').show();
    })
    /*Hiển thị form thêm mới khách hàng khi nhấn button Thêm mới */
function btnAddOnClick() {

}
//2.Hủy diaglog
$('#btnDeleteOnClick').click(function() {
    $('#id-dialog').hide();
})