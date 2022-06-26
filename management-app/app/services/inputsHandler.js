import { checkValidation } from './validation.js';

export const getValueFromInput = () => {
  const taiKhoan = document.getElementById('TaiKhoan').value;
  const name = document.getElementById('HoTen').value;
  const password = document.getElementById('MatKhau').value;
  const email = document.getElementById('Email').value;
  const image = document.getElementById('HinhAnh').value;
  const lang = document.getElementById('loaiNgonNgu').value;
  const role = document.getElementById('loaiNguoiDung').value;
  const desc = document.getElementById('MoTa').value;

  return {
    taiKhoan,
    name,
    password,
    email,
    image,
    lang,
    role,
    desc,
  };
};

export const fillValueToInput = (user) => {
  const { taiKhoan, name, password, email, image, lang, role, desc } = user;

  document.getElementById('TaiKhoan').value = taiKhoan || '';
  document.getElementById('HoTen').value = name || '';
  document.getElementById('MatKhau').value = password || '';
  document.getElementById('Email').value = email || '';
  document.getElementById('HinhAnh').value = image || '';
  document.getElementById('loaiNgonNgu').value = lang || '';
  document.getElementById('loaiNguoiDung').value = role || '';
  document.getElementById('MoTa').value = desc || '';
};
