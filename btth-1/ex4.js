const chieuCao = 170;
const soLeChieuCao = chieuCao % 100;
const canNangLyTuong = soLeChieuCao * 9 / 10;
const canToiDa = soLeChieuCao ;
const canToiThieu = soLeChieuCao * 8 / 10;

console.log("Cân Nặng lý tưởng:"+soLeChieuCao+"\nCân nặng lý tưởng:"+canNangLyTuong+"\nCân nặng tối đa:"+canToiDa+"\n Cân tối thiểu:"+canToiThieu);