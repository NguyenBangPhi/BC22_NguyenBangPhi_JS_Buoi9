function DanhSachNhanVien(){
    this.arr = [];


    this.themNV = function (nv){
        this.arr.push(nv);
    };

    this.timViTriNV = function (maNV){
        var index = -1;
        var indexNV = -1;
        for (var i = 0; i < this.arr.length; i++) {
            var nhanVien = this.arr[i];
            if(nhanVien.maNV === maNV){
                indexNV = i;
                break;
            }
        }
        return indexNV;
    }

    this.xoaNV = function (maNV){
        var index = this.timViTriNV(maNV);
        if(index !== -1){
            this.arr.splice(index,1);
        }
    }

    this.suaNV = function (maNV){
        var index = this.timViTriNV(maNV);
        if(index !== -1){
            var nhanVien = this.arr[index]; 
            return nhanVien;
        }
        return null;
    }

    this.capNhatNhanVien = function (nhanVien){
        var index = this.timViTriNV(nhanVien.maNV);
        if(index !== -1){
            this.arr[index] = nhanVien;
        }
    }

    this.timKiemNhanVien = function (maNV){
        var indexNV = -1;
        for (var i = 0; i < this.arr.length; i++) {
            var nhanVien = this.arr[i];
            if(nhanVien.maNV === maNV){
                indexNV = i;
                break;
            }
        }
        return indexNV;
    }

    this.findNhanVienKeyWord = function (keyword){
        var mangTimKiem = [];
        for (let i = 0; i < this.arr.length; i++) {
            var nhanVien = this.arr[i];
            if(nhanVien.LoaiNhanVien.toLowerCase().indexOf(keyword.toLowerCase()) !== -1){
                mangTimKiem.push(nhanVien);
            }
            
        }
        return mangTimKiem;
    }
}