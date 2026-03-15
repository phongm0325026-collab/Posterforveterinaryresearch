import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';

export function ConclusionSection() {
  return (
    <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-6 border-2 border-rose-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-8 bg-rose-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-rose-900">5. KẾT LUẬN VÀ ĐỀ NGHỊ</h2>
      </div>

      <div className="mb-4">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1770836037793-95bdbf190f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwcmVzZWFyY2glMjBtZWRpY2FsfGVufDF8fHx8MTc3MzU0NDE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Nghiên cứu và chăm sóc thú y"
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
      </div>

      <div className="space-y-3 text-xs leading-relaxed text-gray-800">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-rose-600" />
            <h3 className="font-semibold text-rose-900">5.1. KẾT LUẬN</h3>
          </div>
          
          <ul className="space-y-2 ml-2">
            <li className="flex items-start gap-2">
              <span className="text-rose-600 mt-0.5">•</span>
              <p>
                <strong><em>Staphylococcus aureus</em></strong> là tác nhân chính gây viêm tử cung ở chó 
                tại khu vực nghiên cứu (58%), cao hơn so với các nghiên cứu trước đây ở Việt Nam.
              </p>
            </li>
            
            <li className="flex items-start gap-2">
              <span className="text-rose-600 mt-0.5">•</span>
              <p>
                Tỷ lệ <strong>kháng methicillin (MRSA) đạt 27,6%</strong>, cho thấy mức độ kháng thuốc 
                ngày càng gia tăng và đáng lo ngại trong thú y học Việt Nam.
              </p>
            </li>
            
            <li className="flex items-start gap-2">
              <span className="text-rose-600 mt-0.5">•</span>
              <p>
                Kháng sinh nhóm <strong>beta-lactam</strong> (penicillin, ampicillin) có tỷ lệ kháng cao (&gt;68%), 
                trong khi <strong>amoxicillin-clavulanic acid, cefoxitin và gentamicin</strong> vẫn hiệu quả.
              </p>
            </li>
            
            <li className="flex items-start gap-2">
              <span className="text-rose-600 mt-0.5">•</span>
              <p>
                Các yếu tố nguy cơ quan trọng bao gồm: <strong>vệ sinh kém (OR=4.2), đẻ khó/can thiệp 
                sản khoa (OR=3.5)</strong>, và dinh dưỡng thiếu hụt (OR=2.8).
              </p>
            </li>
            
            <li className="flex items-start gap-2">
              <span className="text-rose-600 mt-0.5">•</span>
              <p>
                Nghiên cứu cung cấp <strong>cơ sở khoa học</strong> cho việc lựa chọn kháng sinh phù hợp 
                và xây dựng chương trình phòng bệnh hiệu quả.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border-2 border-amber-300 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-700" />
            <h3 className="font-semibold text-amber-900">5.2. HẠN CHẾ NGHIÊN CỨU</h3>
          </div>
          
          <ul className="space-y-1.5 ml-2 text-xs">
            <li className="flex items-start gap-2">
              <span className="text-amber-600">○</span>
              <p>Quy mô mẫu chưa bao phủ toàn vùng Đồng bằng sông Cửu Long</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600">○</span>
              <p>Chưa phân tích các gen độc lực và khả năng hình thành biofilm</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600">○</span>
              <p>Chưa theo dõi dài hạn hiệu quả điều trị và tái phát</p>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-rose-600" />
            <h3 className="font-semibold text-rose-900">5.3. ĐỀ NGHỊ</h3>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-rose-800 mb-1">Đối với thực hành lâm sàng:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Thực hiện <strong>kháng sinh đồ</strong> trước khi điều trị</li>
                <li>Ưu tiên sử dụng: <strong>Amoxicillin-clavulanic acid, Cephalosporin thế hệ 3, hoặc Gentamicin</strong></li>
                <li>Tránh sử dụng penicillin và ampicillin đơn thuần</li>
                <li>Kết hợp kháng sinh với hỗ trợ dinh dưỡng và chăm sóc vệ sinh</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-rose-800 mb-1">Đối với phòng bệnh:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Tăng cường <strong>vệ sinh môi trường</strong> nuôi và nơi đẻ</li>
                <li>Bổ sung dinh dưỡng đầy đủ cho chó mang thai và sau đẻ</li>
                <li>Giám sát chặt chẽ quá trình sinh đẻ, hạn chế can thiệp không cần thiết</li>
                <li>Đào tạo chủ nuôi về chăm sóc chó sau đẻ</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-rose-800 mb-1">Nghiên cứu tiếp theo:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Mở rộng nghiên cứu về phân tử học và gen kháng thuốc</li>
                <li>Đánh giá hiệu quả điều trị dài hạn</li>
                <li>Nghiên cứu vắc-xin phòng bệnh</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-900 to-rose-700 text-white p-4 rounded-lg text-center">
          <p className="font-bold mb-1">TẦM QUAN TRỌNG CỦA NGHIÊN CỨU</p>
          <p className="text-xs leading-relaxed">
            Nghiên cứu này cung cấp dữ liệu khoa học đầu tiên và toàn diện nhất về <em>S. aureus</em> 
            gây viêm tử cung chó tại Đồng bằng sông Cửu Long, góp phần nâng cao hiệu quả điều trị và 
            kiểm soát kháng kháng sinh trong thực hành thú y.
          </p>
        </div>
      </div>
    </div>
  );
}
