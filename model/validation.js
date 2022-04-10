function Validation() {
    this.kiemTraRong = function (value, errorId, mess) {
        if (value === "") {
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
    };
    this.kiemTraDoDaiKyTu = function(value,errorId,mess,min,max){
        if(value.trim().length >= min && value.trim().length <= max){
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }
    this.kiemTraChuoiKyTu = function (value,errorId,mess){
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if(value.match(letter)){
            //hop le
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        //ko hop le
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }
    this.kiemTraEmail = function (value,errorId,mess){
        var letter = "^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$";
        if(value.match(letter)){
            //hop le
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        //ko hop le
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }

    this.kiemTraPassWord = function (value,errorId,mess){
        var letter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
        if(value.match(letter)){
            //hop le
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        //ko hop le
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;

    }

    this.kiemTraNgay = function (value,errorId,mess) {
        var letter = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if(value.match(letter)){
            //hop le
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        //ko hop le
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }

    this.kiemTraLuong = function (value,errorId,mess) {
        if(value >= 1000000 && value <= 20000000){
            //hop le
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        //ko hop le
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }

    this.kiemTraChucVu = function (value,errorId,mess) {
        if (value === "Sếp") {
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }else if(value === "Trưởng phòng"){
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }else if(value === "Nhân viên"){
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }

    this.kiemTraGioLam = function (value,errorId,mess) {
        if(value >= 80 && value <= 200){
            //hop le
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        //ko hop le
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }
}