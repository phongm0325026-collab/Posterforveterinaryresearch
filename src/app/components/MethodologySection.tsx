import { TestTube, Users, BarChart3, FileCheck } from 'lucide-react';
import labSamples from 'figma:asset/34504ec8d3573fb4bc16bfa8c185a86a170b63c7.png';

export function MethodologySection() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-8 bg-purple-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-purple-900">3. PHƯƠNG PHÁP NGHIÊN CỨU</h2>
      </div>

      <div className="mb-4">
        <img 
          src={labSamples}
          alt="Thu thập mẫu bệnh phẩm và kháng sinh đồ"
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
      </div>

      <div className="space-y-3 text-xs leading-relaxed text-gray-800">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-purple-900">3.1. Đối tượng và địa điểm</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 ml-6">
            <li><strong>Đối tượng:</strong> 200 chó cái có triệu chứng viêm tử cung sau đẻ</li>
            <li><strong>Địa điểm:</strong> 15 phòng khám thú y tại TP. Cần Thơ, An Giang, Vĩnh Long</li>
            <li><strong>Thời gian:</strong> Tháng 01/2025 - Tháng 12/2025</li>
            <li><strong>Tiêu chí:</strong> Chó cái trong vòng 14 ngày sau đẻ, có dịch âm đạo bất thường</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <TestTube className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-purple-900">3.2. Thu thập và xử lý mẫu</h3>
          </div>
          <div className="space-y-2">
            <p><strong>Quy trình thu mẫu:</strong></p>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>Lấy dịch tử cung bằng tăm bông vô trùng</li>
              <li>Bảo quản trong môi trường Stuart (4°C)</li>
              <li>Vận chuyển đến phòng thí nghiệm trong 6 giờ</li>
            </ol>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-purple-900">3.3. Phân tích vi sinh</h3>
          </div>
          <div className="space-y-2">
            <p><strong>Nuôi cấy và định danh:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Nuôi cấy trên môi trường Blood Agar và Mannitol Salt Agar</li>
              <li>Ủ 37°C trong 24-48 giờ</li>
              <li>Định danh bằng phương pháp Gram, catalase, coagulase test</li>
              <li>Xác nhận bằng API Staph kit và PCR (gen nuc, mecA)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <FileCheck className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-purple-900">3.4. Kiểm tra kháng sinh đồ</h3>
          </div>
          <p className="mb-2">
            <strong>Phương pháp:</strong> Kirby-Bauer disk diffusion theo tiêu chuẩn CLSI
          </p>
          <div className="bg-purple-50 p-2 rounded">
            <p className="font-semibold mb-1">Kháng sinh kiểm tra (12 loại):</p>
            <p>
              Penicillin, Ampicillin, Amoxicillin-clavulanic acid, Cephalexin, Cefoxitin, 
              Gentamicin, Enrofloxacin, Tetracycline, Doxycycline, Erythromycin, 
              Clindamycin, Trimethoprim-sulfamethoxazole
            </p>
          </div>
        </div>

        <div className="bg-purple-900 text-white p-3 rounded-lg">
          <p className="text-xs font-semibold mb-1">PHÂN TÍCH THỐNG KÊ</p>
          <p className="text-xs">
            Sử dụng phần mềm SPSS 26.0. Phân tích tỷ lệ, χ² test, và hồi quy logistic 
            đa biến để xác định yếu tố nguy cơ. Mức ý nghĩa p &lt; 0.05.
          </p>
        </div>
      </div>
    </div>
  );
}