var dsnv = new DanhSachNhanVien();
var validation = new Validation();
getLocalStorage();
function getEle(id){
    return document.getElementById(id);
}

function layThongTinNhanVien(){
    var tknv = getEle("tknv").value;
    var name = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var datepicker = getEle("datepicker").value;
    var luongCB = getEle("luongCB").value;
    var chucvu = getEle("chucvu").value;
    var gioLam = getEle("gioLam").value * 1;

    var isValid = true;

    isValid &= validation.kiemTraRong(tknv,"tbTKNV","(*) Tài khoản không để rỗng") &&
    validation.kiemTraDoDaiKyTu(tknv,"tbTKNV","(*) Độ dài từ 4-6 kí tự !",4,6);

    isValid &= validation.kiemTraRong(name,"tbTen","(*) Tên không để rỗng") &&
    validation.kiemTraChuoiKyTu(name,"tbTen","(*) Tên phải là chữ");

    isValid &= validation.kiemTraRong(email,"tbEmail","(*) Email không được rỗng !")&&
    validation.kiemTraEmail(email, "tbEmail", "(*) Sai định dạng Email !");

    isValid &= validation.kiemTraPassWord(password,"tbMatKhau",
                "(*) Mật khẩu từ 6 - 10 kí tự(chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt) và không rỗng !");
    
    isValid &= validation.kiemTraNgay(datepicker,"tbNgay","(*) Ngày sai định dạng ! (dd//mm//yyyy)") && 
                validation.kiemTraRong(datepicker,"tbNgay","(*) Ngày không được rỗng !");
    
    isValid &= validation.kiemTraRong(luongCB,"tbLuongCB","(*) Không để rỗng lương !") &&
                validation.kiemTraLuong(luongCB,"tbLuongCB","(*) Lương từ 1000000 - 20000000 !");

    isValid &= validation.kiemTraChucVu(chucvu,"tbChucVu","(*) Vui lòng chọn chức vụ !");

    isValid &= validation.kiemTraGioLam(gioLam,"tbGiolam","(*) Giờ làm từ 80 - 200") &&
                validation.kiemTraRong(gioLam,"tbGiolam","(*) Không để rỗng giờ làm !");
    // isValid &= validation

    if (!isValid) {
        return null;
      }


    var nhanVien = new NhanVien(
        tknv,
        name,
        email,
        password,
        datepicker,
        luongCB,
        chucvu,
        gioLam
    );
    nhanVien.tinhTongLuong();
    nhanVien.XepLoai();
    return nhanVien;
}

function checkValidation() {
    var tknv = getEle("tknv").value;
    var name = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var datepicker = getEle("datepicker").value;
    var luongCB = getEle("luongCB").value;
    var chucvu = getEle("chucvu").value;
    var gioLam = getEle("gioLam").value * 1;

    var isValid = true;

    isValid &= validation.kiemTraRong(tknv,"tbTKNV","(*) Tài khoản không để rỗng") &&
    validation.kiemTraDoDaiKyTu(tknv,"tbTKNV","(*) Độ dài từ 4-6 kí tự !",4,6);

    isValid &= validation.kiemTraRong(name,"tbTen","(*) Tên không để rỗng") &&
    validation.kiemTraChuoiKyTu(name,"tbTen","(*) Tên phải là chữ");

    isValid &= validation.kiemTraRong(email,"tbEmail","(*) Email không được rỗng !")&&
    validation.kiemTraEmail(email, "tbEmail", "(*) Sai định dạng Email !");

    isValid &= validation.kiemTraPassWord(password,"tbMatKhau",
                "(*) Mật khẩu từ 6 - 10 kí tự(chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt) và không rỗng !");
    
    isValid &= validation.kiemTraNgay(datepicker,"tbNgay","(*) Ngày sai định dạng ! (dd//mm//yyyy)") && 
                validation.kiemTraRong(datepicker,"tbNgay","(*) Ngày không được rỗng !");
    
    isValid &= validation.kiemTraRong(luongCB,"tbLuongCB","(*) Không để rỗng lương !") &&
                validation.kiemTraLuong(luongCB,"tbLuongCB","(*) Lương từ 1000000 - 20000000 !");

    isValid &= validation.kiemTraChucVu(chucvu,"tbChucVu","(*) Vui lòng chọn chức vụ !");

    isValid &= validation.kiemTraGioLam(gioLam,"tbGiolam","(*) Giờ làm từ 80 - 200") &&
                validation.kiemTraRong(gioLam,"tbGiolam","(*) Không để rỗng giờ làm !");
    // isValid &= validation

    if (!isValid) {
        return null;
    }else{
        return true;
    }
}

getEle("btnThemNV").addEventListener("click",function(){
    
    var nhanVien = layThongTinNhanVien();
    if(nhanVien){
        dsnv.themNV(nhanVien);

        taoBang(dsnv.arr);
        setLocalStorage();
    }
    
});

function taoBang(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        var nhanVien = arr[i];
        content += `
            <tr>
                <td>${nhanVien.maNV}</td>
                <td>${nhanVien.tenNV}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngayLam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tongLuong}</td>
                <td>${nhanVien.LoaiNhanVien}</td>
                <td>
                    <button class="btn btn-info m-2" onclick="suaNV('${nhanVien.maNV}')">Sửa</button>
                    <button class="btn btn-danger m-2" onclick="xoaNV('${nhanVien.maNV}')">Xóa</button>
                </td>
            </tr>
        `
    
    }
    getEle("tableDanhSach").innerHTML = content;
}

function suaNV(maNV) {
    var NhanVien = dsnv.suaNV(maNV);

    getEle("tknv").value = NhanVien.maNV;
    getEle("name").value = NhanVien.tenNV;
    getEle("email").value = NhanVien.email;
    getEle("password").value = NhanVien.matKhau;
    getEle("datepicker").value= NhanVien.ngayLam;
    getEle("luongCB").value= NhanVien.luongCB;
    getEle("chucvu").value = NhanVien.chucVu;
    getEle("gioLam").value = NhanVien.gioLam;
}

function capNhatNV(maNV) {
    if(checkValidation()===true){
        var nhanVien = layThongTinNhanVien();
        dsnv.capNhatNhanVien(nhanVien);
        setLocalStorage();
        getLocalStorage();
    }
    
}

function xoaNV(maNV) {
    dsnv.xoaNV(maNV);
    taoBang(dsnv.arr);
    setLocalStorage();
}

function getLocalStorage(){
    var data = localStorage.getItem("DSNV");

    if (data) {
        var dataJSON = JSON.parse(data);
        console.log(dataJSON);

        dsnv.arr = dataJSON;
        console.log(dsnv.arr);

        taoBang(dsnv.arr);
    }
}

function setLocalStorage() {
    //Chuyển data từ JSON => String
    var dataString = JSON.stringify(dsnv.arr);
    //lưu xuống LocalStorage
    localStorage.setItem("DSNV", dataString);

}

getEle("searchName").addEventListener("keyup",function(){
    var keyword = getEle("searchName").value;
    var mangTimKiem = dsnv.findNhanVienKeyWord(keyword);
    taoBang(mangTimKiem);
    console.log(dsnv.findNhanVienKeyWord(keyword));
})