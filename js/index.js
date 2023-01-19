// Bài 1: Tính lương nhân viên

// Đầu vào:
//     + Lương 1 ngày là 100.000
//     + Số ngày làm ví dụ là 20

// Các bước xử lý:
//     + B1: Tạo biến lương 1 ngày là luongNgay và gán giá trị
//     + B2: Tạo biến số ngày làm việc là ngayLam và gán giá trị
//     + B3: Tạo biến tổng tiền lương nhân viên tương ứng sô ngày làm là luongTong
//     + B4: Tính luongTong = luongNgay * ngayLam
//     + B5: In kết quả luongTong ra console

// Đầu ra:
//     + Tổng tiền lương nhân viên tương ứng số ngày làm

var luongNgay = 100000;
var ngayLam = 20;
var luongTong;

luongTong = luongNgay * ngayLam;
console.log(luongTong);


// Bài 2: Tính giá trị trung bình

// Đầu vào:
//     + 5 số thực

// Các bước xử lý:
//     + B1: Tạo 5 biến số thực lần lượt là so1, so2, so3, so4, so5 và gán giá trị
//     + B2: Tạo biến giá trị trung bình là giaTriTrungBinh
//     + B3: Tính giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5
//     + B4: In kết quả giaTriTrungBinh ra console

// Đầu ra:
//     + Giá trị trung bình của 5 số thực

var so1 = 10;
var so2 = 22.1;
var so3 = -4;
var so4 = 40;
var so5 = -12.4;
var giaTriTrungBinh;

giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
console.log(giaTriTrungBinh);


// Bài 3: Quy đổi tiền

// Đầu vào:
//     + Giá USD là 23.500 VND
//     + Số tiền USD ví dụ là 2

// Các bước xử lý:
//     + B1: Tạo biến tỷ giá USD và VND là tyGia và gán giá trị
//     + B2: Tạo biến số tiền USD là tienUSD và gán giá trị
//     + B3: Tạo biến số tiền VND la tienVND
//     + B4: Tính tienVND = tienUSD * tyGia
//     + B5: In kết quả tienVND ra console

// Đầu ra:
//     + Số tiền sau khi quy đổi ra VND

var tyGia = 23500;
var tienUSD = 2;
var tienVND;

tienVND = tyGia * tienUSD;
console.log(tienVND);


// Bài 4: Tính diện tích, chu vi hình chữ nhật

// Đầu vào:
//     + Chiều dài hình chữ nhật ví dụ là 10
//     + Chiều rộng hình chữ nhật ví dụ là 5

// Các bước xử lý:
//     + B1: Tạo biến chiều dài hình chữ nhật là chieuDai và gán giá trị
//     + B2: Tạo biến chiều rộng hình chữ nhật là chieuRong và gán giá trị
//     + B3: Tạo biến diện tích, chu vi hình chữ nhật lần lượt là dienTich và chuVi
//     + B4: Tính dienTich = chieuDai * chieuRong
//     + B5: Tính chuVi = (chieuDai + chieuRong) * 2
//     + B6: In kết quả dienTich và chuVi ra console

// Đầu ra:
//     + Diện tích hình chữ nhật
//     + Chu vi hình chữ nhật

var chieuDai = 10;
var chieuRong = 5;
var dienTich;
var chuVi;

dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;
console.log(dienTich);
console.log(chuVi);


// Bài 5: Tính tổng 2 ký số

// Đầu vào:
//     + 1 số có 2 chữ số ví dụ là 24

// Các bước xử lý:
//     + B1: Tạo biến số 2 chữ số nhận vào là soNhapVao và gán giá trị
//     + B2: Tạo biến số hàng đơn vị, số hàng chục, tổng 2 ký số lần lượt là soHangDonVi, soHangChuc và tongCong
//     + B3: Tính soHangDonVi = soNhapVao % 10
//     + B4: Tính soHangChuc = Math.floor(soNhapVao / 10)
//     + B5: Tính tongCong = soHangDonVi + soHangChuc
//     + B6: In kết quả tongCong ra console

// Đầu ra:
//     + Tổng 2 ký số của số vừa nhập

var soNhapVao = 24;
var soHangDonVi;
var soHangChuc;
var tongCong;

soHangDonVi = soNhapVao % 10;
soHangChuc = Math.floor(soNhapVao / 10);
tongCong = soHangDonVi + soHangChuc;
console.log(tongCong);