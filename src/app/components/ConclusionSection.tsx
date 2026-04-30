import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2, AlertTriangle, Lightbulb, Shield } from 'lucide-react';

export function ConclusionSection() {
  return (
    <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-4 border-2 border-rose-200 h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-7 bg-rose-600 rounded-full"></div>
        <h2 className="text-xl font-bold text-rose-900">5. KẾT LUẬN VÀ ĐỀ NGHỊ</h2>
      </div>

      <div className="mb-3">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1770836037793-95bdbf190f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwcmVzZWFyY2glMjBtZWRpY2FsfGVufDF8fHx8MTc3MzU0NDE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Nghiên cứu và chăm sóc thú y"
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>

      <div className="space-y-3 text-xs leading-relaxed text-gray-800">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600" />
            <h3 className="font-semibold text-rose-900 text-sm">5.1. KẾT LUẬN</h3>
          </div>
          
          <ul className="space-y-1.5 ml-1 text-[10px]">
            <li className="flex items-start gap-1.5">
              <span className="text-rose-600 mt-0.5 text-sm">•</span>
              <p>
                <strong><em>Staphylococcus aureus</em></strong> là tác nhân chính gây viêm tử cung ở chó 
                tại khu vực nghiên cứu (58%), cao hơn so với các nghiên cứu trước đây ở Việt Nam (18-25%).
              </p>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-rose-600 mt-0.5 text-sm">•</span>
              <p>
                Tỷ lệ <strong>kháng methicillin (MRSA) đạt 27,6%</strong>, cho thấy mức độ kháng thuốc 
                ngày càng gia tăng và đáng lo ngại trong thú y học Việt Nam.
              </p>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-rose-600 mt-0.5 text-sm">•</span>
              <p>
                Kháng sinh nhóm <strong>beta-lactam</strong> (penicillin, ampicillin) có tỷ lệ kháng cao (&gt;68%), 
                trong khi <strong>amoxicillin-clavulanic acid (85%), cefoxitin (82%) và gentamicin (78%)</strong> vẫn hiệu quả.
              </p>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-rose-600 mt-0.5 text-sm">•</span>
              <p>
                Các yếu tố nguy cơ quan trọng: <strong>vệ sinh kém (OR=4.2), đẻ khó/can thiệp 
                sản khoa (OR=3.5)</strong>, dinh dưỡng thiếu hụt (OR=2.8), và tuổi &gt;6 năm (OR=2.1).
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-rose-600" />
            <h3 className="font-semibold text-rose-900 text-sm">5.2. ĐỀ NGHỊ</h3>
          </div>
          
          <div className="space-y-2">
            <div className="bg-rose-50 p-2 rounded">
              <p className="font-semibold text-rose-800 mb-1 text-[11px]">Đối với thực hành lâm sàng:</p>
              <ul className="list-disc list-inside space-y-0.5 ml-1 text-[10px]">
                <li>Thực hiện <strong>kháng sinh đồ</strong> trước khi điều trị</li>
                <li>Ưu tiên: <strong>Amoxicillin-clavulanic acid (20-25 mg/kg, BID)</strong></li>
                <li><strong>Tránh</strong> penicillin và ampicillin đơn thuần</li>
                <li>Kết hợp kháng sinh với hỗ trợ dinh dưỡng, bù nước</li>
              </ul>
            </div>

            <div className="bg-rose-50 p-2 rounded">
              <p className="font-semibold text-rose-800 mb-1 text-[11px] flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Đối với phòng bệnh:
              </p>
              <ul className="list-disc list-inside space-y-0.5 ml-1 text-[10px]">
                <li>Tăng cường <strong>vệ sinh môi trường</strong> nuôi và nơi đẻ</li>
                <li>Bổ sung dinh dưỡng đầy đủ cho chó mang thai và sau đẻ</li>
                <li>Giám sát chặt chẽ quá trình sinh đẻ</li>
                <li>Đào tạo chủ nuôi về chăm sóc chó sau đẻ</li>
              </ul>
            </div>

            <div className="bg-rose-50 p-2 rounded">
              <p className="font-semibold text-rose-800 mb-1 text-[11px]">Nghiên cứu tiếp theo:</p>
              <ul className="list-disc list-inside space-y-0.5 ml-1 text-[10px]">
                <li>Mở rộng nghiên cứu về phân tử học và gen kháng thuốc</li>
                <li>Đánh giá hiệu quả điều trị dài hạn và tỷ lệ tái phát</li>
                <li>Nghiên cứu khả năng lây truyền MRSA từ động vật sang người</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-400 p-2.5 rounded-lg">
          <div className="flex items-center gap-2 mb-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <h3 className="font-semibold text-amber-900 text-sm">HẠN CHẾ NGHIÊN CỨU</h3>
          </div>
          <ul className="space-y-0.5 ml-1 text-[10px]">
            <li className="flex items-start gap-1">
              <span className="text-amber-600">○</span>
              <p>Quy mô mẫu chưa bao phủ toàn vùng ĐBSCL</p>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600">○</span>
              <p>Chưa phân tích các gen độc lực và khả năng hình thành biofilm</p>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-rose-900 to-rose-700 text-white p-3 rounded-lg text-center">
          <p className="font-bold mb-1 text-sm">TẦM QUAN TRỌNG CỦA NGHIÊN CỨU</p>
          <p className="text-[10px] leading-relaxed">
            Nghiên cứu này cung cấp dữ liệu khoa học đầu tiên và toàn diện nhất về <em>S. aureus</em> 
            gây viêm tử cung chó tại Đồng bằng sông Cửu Long, góp phần nâng cao hiệu quả điều trị và 
            kiểm soát kháng kháng sinh trong thực hành thú y, đồng thời bảo vệ sức khỏe cộng đồng.
          </p>
        </div>
      </div>
    </div>
  );
}