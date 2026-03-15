import { Microscope } from 'lucide-react';
import ctuLogo from 'figma:asset/f5acb8c26bfaf1ab4b7adb02f670801d21f28ea6.png';

export function PosterHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white px-8 py-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={ctuLogo} alt="Logo Đại học Cần Thơ" className="w-16 h-16 object-contain" />
          <div>
            <p className="text-sm opacity-90">ĐẠI HỌC CẦN THƠ</p>
            <p className="text-xs opacity-75">Trường Nông Nghiệp</p>
          </div>
        </div>
        <Microscope className="w-12 h-12 opacity-80" />
      </div>
      
      <h1 className="text-4xl font-bold text-center mb-3 leading-tight">
        STAPHYLOCOCCUS AUREUS GÂY VIÊM TỬ CUNG TRÊN CHÓ
      </h1>
      
      <p className="text-center text-lg mb-4 opacity-90">
        Nghiên cứu đặc điểm vi sinh học, kháng sinh đồ và các yếu tố nguy cơ
      </p>
      
      <div className="flex justify-center items-center gap-8 text-sm">
        <div className="text-center">
          <p className="font-semibold">Tác giả</p>
          <p className="opacity-90">Thái Phong</p>
        </div>
        <div className="w-px h-10 bg-white/30"></div>
        <div className="text-center">
          <p className="font-semibold">Giáo viên hướng dẫn</p>
          <p className="opacity-90">PGS.TS. Nguyễn Khánh Thuận </p>
        </div>
        <div className="w-px h-10 bg-white/30"></div>
        <div className="text-center">
          <p className="font-semibold">Năm thực hiện</p>
          <p className="opacity-90">2026</p>
        </div>
      </div>
    </div>
  );
}