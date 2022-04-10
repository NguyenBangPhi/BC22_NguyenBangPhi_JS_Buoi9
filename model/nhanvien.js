function NhanVien(
    _taiKhoan,
    _tenNV,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam
){
    this.maNV = _taiKhoan;
    this.tenNV = _tenNV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.tinhTongLuong = function(){
        if(this.chucVu === "Sếp"){
           this.tongLuong = this.luongCB * 3;
        }else if(this.chucVu === "Trưởng phòng"){
            this.tongLuong = this.luongCB*2;
        }else if(this.chucVu === "Nhân Viên"){
            this.tongLuong = this.luongCB;
        }
    };
    this.LoaiNhanVien = "";
    this.XepLoai = function(){
        if(this.gioLam >= 192){
            this.LoaiNhanVien = "Nhân viên xuất sắc";
        }else if(this.gioLam >= 176){
            this.LoaiNhanVien = "Nhân viên giỏi";
        }else if(this.gioLam >= 160){
            this.LoaiNhanVien = "Nhân viên khá";
        }else if(this.gioLam < 160){
            this.LoaiNhanVien = "Nhân viên trung bình";
        }
    };
}