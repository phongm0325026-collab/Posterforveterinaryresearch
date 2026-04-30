import { TestTube, Users, BarChart3, FileCheck, MapPin } from 'lucide-react';
import labSamples from 'figma:asset/34504ec8d3573fb4bc16bfa8c185a86a170b63c7.png';

export function MethodologySection() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-2 border-purple-200 h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-7 bg-purple-600 rounded-full"></div>
        <h2 className="text-xl font-bold text-purple-900">3. PHƯƠNG PHÁP NGHIÊN CỨU</h2>
      </div>

      <div className="mb-3">
        <img 
          src={labSamples}
          alt="Thu thập mẫu bệnh phẩm và kháng sinh đồ"
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>

      <div className="space-y-3 text-xs leading-relaxed text-gray-800">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-purple-600" />
            <h3 className="font-semibold text-purple-900 text-sm">3.1. Đối tượng và địa điểm</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 ml-3 text-[11px]">
            <li><strong>Đối tượng:</strong> 200 chó cái viêm tử cung sau đẻ (trong vòng 14 ngày)</li>
            <li><strong>Địa điểm:</strong> 15 phòng khám thú y tại Cần Thơ, An Giang, Vĩnh Long</li>
            <li><strong>Thời gian:</strong> Tháng 01/2025 - Tháng 12/2025</li>
            <li><strong>Tiêu chí chọn mẫu:</strong> Chó cái có dịch âm đạo bất thường, sốt, chán ăn</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="font-semibold text-purple-900 mb-2 text-sm flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Phân bố mẫu theo địa điểm
          </p>
          <table className="w-full text-[10px] border-collapse">
            <thead className="bg-purple-100">
              <tr>
                <th className="border border-purple-200 p-1.5 text-left">Tỉnh/Thành</th>
                <th className="border border-purple-200 p-1.5 text-center">Số mẫu</th>
                <th className="border border-purple-200 p-1.5 text-center">Tỷ lệ (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-purple-200 p-1.5">TP. Cần Thơ</td>
                <td className="border border-purple-200 p-1.5 text-center">95</td>
                <td className="border border-purple-200 p-1.5 text-center">47.5</td>
              </tr>
              <tr className="bg-purple-50">
                <td className="border border-purple-200 p-1.5">An Giang</td>
                <td className="border border-purple-200 p-1.5 text-center">63</td>
                <td className="border border-purple-200 p-1.5 text-center">31.5</td>
              </tr>
              <tr>
                <td className="border border-purple-200 p-1.5">Vĩnh Long</td>
                <td className="border border-purple-200 p-1.5 text-center">42</td>
                <td className="border border-purple-200 p-1.5 text-center">21.0</td>
              </tr>
              <tr className="bg-purple-100 font-semibold">
                <td className="border border-purple-200 p-1.5">Tổng cộng</td>
                <td className="border border-purple-200 p-1.5 text-center">200</td>
                <td className="border border-purple-200 p-1.5 text-center">100</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <TestTube className="w-4 h-4 text-purple-600" />
            <h3 className="font-semibold text-purple-900 text-sm">3.2. Thu thập và xử lý mẫu</h3>
          </div>
          <div className="space-y-1.5">
            <p className="font-semibold text-[11px]">Quy trình thu mẫu:</p>
            <ol className="list-decimal list-inside ml-2 space-y-1 text-[11px]">
              <li>Sát trùng vùng âm hộ bằng cồn 70%</li>
              <li>Lấy dịch tử cung bằng tăm bông vô trùng qua cổ tử cung</li>
              <li>Bảo quản trong môi trường Stuart, nhiệt độ 4°C</li>
              <li>Vận chuyển đến phòng thí nghiệm trong vòng 6 giờ</li>
              <li>Thu thập thông tin lâm sàng và tiền sử bằng phiếu điều tra</li>
            </ol>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-4 h-4 text-purple-600" />
            <h3 className="font-semibold text-purple-900 text-sm">3.3. Phân tích vi sinh học</h3>
          </div>
          <div className="space-y-1.5">
            <p className="font-semibold text-[11px]">Nuôi cấy và định danh:</p>
            <ul className="list-disc list-inside ml-2 space-y-1 text-[11px]">
              <li>Cấy trải trên môi trường Blood Agar và Mannitol Salt Agar</li>
              <li>Ủ ở 37°C trong 24-48 giờ, quan sát khuẩn lạc</li>
              <li>Nhuộm Gram, kiểm tra catalase test (H₂O₂ 3%)</li>
              <li>Coagulase test với huyết tương thỏ</li>
              <li>Xác nhận bằng API Staph kit (bioMérieux)</li>
              <li>PCR phát hiện gen <em>nuc</em> (thermonuclease) và gen <em>mecA</em> (kháng methicillin)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <FileCheck className="w-4 h-4 text-purple-600" />
            <h3 className="font-semibold text-purple-900 text-sm">3.4. Kiểm tra kháng sinh đồ</h3>
          </div>
          <p className="mb-2 text-[11px]">
            <strong>Phương pháp:</strong> Kirby-Bauer disk diffusion theo tiêu chuẩn CLSI (2024)
          </p>
          <div className="bg-purple-50 p-2 rounded text-[10px]">
            <p className="font-semibold mb-1">Kháng sinh kiểm tra (12 loại):</p>
            <p className="leading-relaxed">
              • Beta-lactam: Penicillin (10 IU), Ampicillin (10 μg), Amoxicillin-clavulanic acid (20/10 μg)
              <br/>• Cephalosporin: Cephalexin (30 μg), Cefoxitin (30 μg)
              <br/>• Aminoglycoside: Gentamicin (10 μg)
              <br/>• Fluoroquinolone: Enrofloxacin (5 μg)
              <br/>• Tetracycline: Tetracycline (30 μg), Doxycycline (30 μg)
              <br/>• Macrolide: Erythromycin (15 μg), Clindamycin (2 μg)
              <br/>• Sulfonamide: Trimethoprim-sulfamethoxazole (1.25/23.75 μg)
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="font-semibold text-purple-900 mb-2 text-sm">3.5. Thu thập dữ liệu yếu tố nguy cơ</p>
          <p className="text-[11px] mb-1.5">Điều tra thông tin qua phiếu bệnh án:</p>
          <ul className="list-disc list-inside ml-2 space-y-1 text-[11px]">
            <li>Tuổi, giống, cân nặng, số lứa đẻ</li>
            <li>Điều kiện vệ sinh môi trường nuôi</li>
            <li>Tình trạng dinh dưỡng và chế độ cho ăn</li>
            <li>Tiền sử sinh đẻ (đẻ thường/khó, can thiệp sản khoa)</li>
            <li>Triệu chứng lâm sàng và thời gian khởi phát</li>
          </ul>
        </div>

        <div className="bg-purple-900 text-white p-3 rounded-lg">
          <p className="text-sm font-semibold mb-1">PHÂN TÍCH THỐNG KÊ</p>
          <p className="text-[10px] leading-relaxed">
            • Phần mềm SPSS 26.0 và GraphPad Prism 9.0
            <br/>• Thống kê mô tả: tần số, tỷ lệ phần trăm, trung bình ± SD
            <br/>• Kiểm định χ² (Chi-square test) và Fisher's exact test
            <br/>• Hồi quy logistic đa biến xác định yếu tố nguy cơ (OR, 95% CI)
            <br/>• Mức ý nghĩa thống kê: p &lt; 0.05
          </p>
        </div>
      </div>
    </div>
  );
}