class User {
  constructor(id, taiKhoan, hoTen, matKhau, email, image, ngonNgu, loaiND, moTa) {
    this.id = id || '';
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.matKhau = matKhau;
    this.email = email;
    this.image = image;
    this.ngonNgu = ngonNgu;
    this.loaiND = loaiND;
    this.moTa = moTa;
  }
}

export default User;
