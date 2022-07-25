/** @format */

// Bài 1 - Quản lý tuyển sinh
/**
 * Điểm cộng theo khu vực
 * A: 2đ
 * B: 1đ
 * C: 0.5đ
 *
 * Điểm cộng theo đối tượng
 * 1: 2.5đ
 * 2: 1.5đ
 * 3: 1đ
 */

document.getElementById('btnTuyenSinh').onclick = function () {
	var diemChuan = +document.getElementById('diemChuan').value;
	var khuVuc = document.getElementById('khuVuc').value;
	var doiTuong = document.getElementById('doiTuong').value;
	var diemMon1 = +document.getElementById('diemMon1').value;
	var diemMon2 = +document.getElementById('diemMon2').value;
	var diemMon3 = +document.getElementById('diemMon3').value;
	var diemCong = 0;
	var diemTong = 0;
	var thongBao = '';

	if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0) {
		thongBao = 'Bạn đã rớt do có điểm nhỏ hơn hoặc bằng 0';
	} else {
		diemCong += tinhDiemCongKhuVuc(khuVuc);
		diemCong += tinhDiemCongDoiTuong(doiTuong);

		if (diemMon1 <= 10 && diemMon2 <= 10 && diemMon3 <= 10) {
			diemTong = diemMon1 + diemMon2 + diemMon3 + diemCong;
			if (0 < diemChuan && diemChuan <= 30) {
				if (diemTong >= diemChuan) {
					thongBao = 'Bạn đã đậu. Điểm của bạn là ' + diemTong;
				} else {
					thongBao = 'Bạn đã rớt. Điểm của bạn là ' + diemTong;
				}
			} else {
				thongBao = 'Vui lòng nhập lại điểm chuẩn (0 < điểm chuẩn <= 30)';
			}
		} else {
			thongBao = 'Vui lòng nhập điểm hợp lệ (0 < điểm môn <= 10 )';
		}
	}

	document.getElementById('txtKetQuaTuyenSinh').value = thongBao;
};

function tinhDiemCongKhuVuc(khuVuc) {
	switch (khuVuc) {
		case 'A':
			return 2;
		case 'B':
			return 1;
		case 'C':
			return 0.5;
		default:
			return 0;
	}
}
function tinhDiemCongDoiTuong(doiTuong) {
	switch (doiTuong) {
		case '1':
			return 2.5;
		case '2':
			return 1.5;
		case '3':
			return 1;
		default:
			return 0;
	}
}

// Bài 2 - Tính tiền điện
/**
 * bảng giá :
 * 0 < số kW <= 50  :  500d/kW
 * 50 < số kW <= 100:  650d/kW
 * 100 < số kW <= 200: 850d/kW
 * 200 < số kW <= 350: 1100d/kW
 * 350 < số kW: 1300d/kW
 */

document.getElementById('btnTienDien').onclick = function () {
	var tenTienDien = document.getElementById('tenTienDien').value;
	var soKwTienDien = document.getElementById('soKwTienDien').value;
	var tongTienDien = 0;

	if (soKwTienDien == '' || soKwTienDien < 0) {
		alert('Số kW không bỏ trống và lớn hơn 0');
	} else {
		soKwTienDien *= 1;

		if (soKwTienDien > 350) {
			tongTienDien =
				25000 + 32500 + 85000 + 165000 + (soKwTienDien - 350) * 1300;
		} else if (soKwTienDien > 200) {
			tongTienDien = 25000 + 32500 + 85000 + (soKwTienDien - 200) * 1100;
		} else if (soKwTienDien > 100) {
			tongTienDien = 25000 + 32500 + (soKwTienDien - 100) * 850;
		} else if (soKwTienDien > 50) {
			tongTienDien = 25000 + (soKwTienDien - 50) * 650;
		} else {
			tongTienDien = soKwTienDien * 500;
		}

		document.getElementById('txtTienDien').value =
			'Họ tên: ' +
			tenTienDien +
			' .Tiền điện: ' +
			Intl.NumberFormat().format(tongTienDien) +
			' VND';
	}
};

//Bài 3 - Tính thuế thu nhập cá nhân
document.getElementById('btnTinhThue').onclick = function () {
	var tenThue = document.getElementById('tenThue').value;
	var tongThuNhap = +document.getElementById('tongThuNhap').value;
	var nguoiPhuThuoc = +document.getElementById('nguoiPhuThuoc').value;
	var thuNhapChiuThue = 0;
	var tienThue = 0;

	if (tongThuNhap <= 0) {
		alert('Tổng thu nhập không hợp lệ');
	} else {
		thuNhapChiuThue = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;
		if (thuNhapChiuThue > 960000000) {
			tienThue = thuNhapChiuThue * 0.35;
		} else if (thuNhapChiuThue > 624000000) {
			tienThue = thuNhapChiuThue * 0.3;
		} else if (thuNhapChiuThue > 384000000) {
			tienThue = thuNhapChiuThue * 0.25;
		} else if (thuNhapChiuThue > 210000000) {
			tienThue = thuNhapChiuThue * 0.2;
		} else if (thuNhapChiuThue > 120000000) {
			tienThue = thuNhapChiuThue * 0.15;
		} else if (thuNhapChiuThue > 60000000) {
			tienThue = thuNhapChiuThue * 0.1;
		} else if (thuNhapChiuThue > 0) {
			tienThue = thuNhapChiuThue * 0.05;
		} else {
			alert('Thu nhập quá thấp nên không cần đóng thuế');
		}
	}

	document.getElementById('txtTinhThue').value =
		'Họ tên: ' +
		tenThue +
		' - Tiền thuế: ' +
		Intl.NumberFormat().format(tienThue) +
		' VND';
};

// Bài 4 - Tính tiền cáp

function showInput() {
	var chosse = document.getElementById('loaiKhachHang').value;
	if (chosse == 'doanhNghiep') {
		document.getElementById('soKetNoi').style.display = 'block';
	} else {
		document.getElementById('soKetNoi').style.display = 'none';
	}
}

document.getElementById('btnTienCap').onclick = function () {
	var maKhachHang = document.getElementById('maKhachHang').value;
	var soKenh = +document.getElementById('soKenh').value;
	var soKetNoi = +document.getElementById('soKetNoi').value;
	var opt = document.getElementById('loaiKhachHang').value;
	var tongTien = 0;

	if (opt == 'X') {
		alert('Vui lòng chọn loại khách hàng');
	} else {
		if (soKenh < 0 || soKetNoi < 0) {
			alert('vui lòng nhập thông số >= 0');
		} else {
			if (opt == 'nhaDan') {
				tongTien = soKenh * 7.5 + 4.5 + 20.5;
			} else {
				if (soKetNoi <= 10) {
					tongTien = 15 + 75 + 50 * soKenh;
				} else {
					tongTien = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenh;
				}
			}
		}
	}

	document.getElementById('txtTienCap').value =
		'Mã khách hàng: ' +
		maKhachHang +
		' - Tiền cáp: ' +
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			currencyDisplay: 'narrowSymbol',
		}).format(tongTien);
};
