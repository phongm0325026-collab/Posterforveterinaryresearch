import { Microscope } from 'lucide-react';
import ctuLogo from 'figma:asset/f5acb8c26bfaf1ab4b7adb02f670801d21f28ea6.png';

export function PosterHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white px-10 py-8">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-4">
          <img src={ctuLogo} alt="Logo Đại học Cần Thơ" className="w-20 h-20 object-contain" />
          <div>
            <p className="text-lg font-semibold opacity-90">ĐẠI HỌC CẦN THƠ</p>
            <p className="text-sm opacity-75">Trường Nông Nghiệp</p>
          </div>
        </div>
        <Microscope className="w-16 h-16 opacity-80" />
      </div>
      
      <h1 className="text-5xl font-bold text-center mb-4 leading-tight">
        STAPHYLOCOCCUS AUREUS GÂY VIÊM TỬ CUNG TRÊN CHÓ
      </h1>
      
      <p className="text-center text-xl mb-5 opacity-90">
        Nghiên cứu đặc điểm vi sinh học, kháng sinh đồ và các yếu tố nguy cơ
      </p>
      
      <div className="flex justify-center items-center gap-12 text-base">
        <div className="text-center">
          <p className="text-sm opacity-90">
  <span className="font-semibold">Tác giả:</span> Thái Phong
</p>
<p className="text-sm opacity-80">Email: phongm0325026@gstudent.ctu.edu.vn</p>
<p className="text-sm opacity-80">Điện thoại: 0913 139 265</p>
        </div>
        <div className="w-px h-12 bg-white/30"></div>
        <div className="text-center">
          <p className="font-semibold text-lg">Giáo viên hướng dẫn</p>
          <p className="opacity-90">PGS.TS. Nguyễn Khánh Thuận</p>
        </div>
        <div className="w-px h-12 bg-white/30"></div>
        <div className="text-center">
          <p className="font-semibold text-lg">Năm thực hiện</p>
          <p className="opacity-90">2026</p>
        </div>
      </div>
    </div>
  );
}