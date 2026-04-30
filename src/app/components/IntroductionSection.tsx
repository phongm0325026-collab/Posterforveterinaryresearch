import { ImageWithFallback } from './figma/ImageWithFallback';
import { AlertCircle, Target } from 'lucide-react';

export function IntroductionSection() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-200 h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-7 bg-blue-600 rounded-full"></div>
        <h2 className="text-xl font-bold text-blue-900">1. GIỚI THIỆU</h2>
      </div>
      
      <div className="mb-3">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1770836037816-4445dbd449fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwZG9nJTIwZXhhbWluYXRpb24lMjBjbGluaWN8ZW58MXx8fHwxNzczNTQ0MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Khám chó tại phòng khám thú y"
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>

      <div className="space-y-3 text-sm leading-relaxed text-gray-800">
        <p>
          <strong className="text-blue-900">Viêm tử cung</strong> (Metritis) là một bệnh lý phổ biến ở chó cái sau đẻ, 
          đặc biệt gây ra bởi vi khuẩn <em>Staphylococcus aureus</em>, một loại vi khuẩn Gram dương có khả năng 
          gây bệnh cao và kháng thuốc kháng sinh ngày càng gia tăng.
        </p>
        
        <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900 text-sm mb-1">VẤN ĐỀ NGHIÊN CỨU</p>
              <p className="text-xs leading-relaxed">
                Tỷ lệ viêm tử cung sau đẻ ở chó tăng 15-20% trong 5 năm qua tại khu vực Đồng bằng sông Cửu Long, 
                với <em>S. aureus</em> là nguyên nhân chính (45-60% ca bệnh).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-blue-600" />
            <p className="font-semibold text-blue-900 text-base">Mục tiêu nghiên cứu:</p>
          </div>
          <ul className="list-disc list-inside space-y-1 ml-2 text-xs leading-relaxed">
            <li>Xác định đặc điểm vi sinh học của <em>S. aureus</em> phân lập từ chó viêm tử cung</li>
            <li>Đánh giá tính nhạy cảm kháng sinh và mức độ kháng thuốc</li>
            <li>Phân tích các yếu tố nguy cơ liên quan đến bệnh</li>
            <li>Đề xuất phương án điều trị và phòng bệnh hiệu quả</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="font-semibold text-blue-900 mb-2 text-base">Ý nghĩa thực tiễn:</p>
          <ul className="space-y-1.5 text-xs">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-lg">→</span>
              <p>Cung cấp dữ liệu về tình hình kháng thuốc tại khu vực ĐBSCL</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-lg">→</span>
              <p>Hỗ trợ bác sĩ thú y lựa chọn phác đồ điều trị phù hợp</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-lg">→</span>
              <p>Góp phần kiểm soát kháng kháng sinh trong chăn nuôi chó</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}