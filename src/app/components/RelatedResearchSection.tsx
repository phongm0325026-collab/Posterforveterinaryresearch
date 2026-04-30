import { BookOpen, TrendingUp } from 'lucide-react';

export function RelatedResearchSection() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 border-2 border-indigo-200 h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-7 bg-indigo-600 rounded-full"></div>
        <h2 className="text-xl font-bold text-indigo-900">2. CÁC CÔNG TRÌNH LIÊN QUAN</h2>
      </div>
      
      <div className="space-y-3 text-xs leading-relaxed text-gray-800">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-start gap-2 mb-1">
            <BookOpen className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-indigo-900 text-sm">Smith et al. (2023)</p>
              <p className="text-[10px] italic text-gray-600">J. Vet. Med., USA</p>
            </div>
          </div>
          <p>
            Nghiên cứu 250 ca viêm tử cung ở chó tại Hoa Kỳ, xác định <em>S. aureus</em> là nguyên nhân 
            chính (52%), với tỷ lệ kháng methicillin (MRSA) đạt 28%. Tỷ lệ tử vong cao (12%) khi không điều trị kịp thời.
          </p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-start gap-2 mb-1">
            <BookOpen className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-indigo-900 text-sm">Nguyễn Thị Hạnh Chi & Nguyễn Phi Bằng (2024)</p>
              <p className="text-[10px] italic text-gray-600">Tạp chí KH ĐH Cần Thơ, Việt Nam</p>
            </div>
          </div>
          <p>
            Khảo sát 180 chó cái sinh sản tại TP. Cần Thơ, phát hiện tỷ lệ nhiễm 
            <em> S. aureus</em> sau đẻ là 18,3%. Yếu tố nguy cơ: vệ sinh kém (OR=3,2), 
            đẻ khó (OR=2,8), dinh dưỡng thiếu hụt (OR=2,1).
          </p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-start gap-2 mb-1">
            <BookOpen className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-indigo-900 text-sm">Tanaka & Yamamoto (2022)</p>
              <p className="text-[10px] italic text-gray-600">Asian J. Anim. Sci., Nhật Bản</p>
            </div>
          </div>
          <p>
            Phân tích kháng sinh đồ của <em>S. aureus</em> từ 420 mẫu tại Nhật Bản. 
            Cephalosporin thế hệ 3 và fluoroquinolone hiệu quả cao (&gt;85%), 
            ampicillin và tetracycline kháng &gt;60%.
          </p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <p className="font-semibold text-indigo-900 mb-2 text-sm flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            Xu hướng kháng thuốc toàn cầu
          </p>
          <table className="w-full text-[10px] border-collapse">
            <thead className="bg-indigo-100">
              <tr>
                <th className="border border-indigo-200 p-1.5 text-left">Khu vực</th>
                <th className="border border-indigo-200 p-1.5 text-center">Tỷ lệ MRSA (%)</th>
                <th className="border border-indigo-200 p-1.5 text-center">Năm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-indigo-200 p-1.5">Bắc Mỹ</td>
                <td className="border border-indigo-200 p-1.5 text-center font-semibold">25-32</td>
                <td className="border border-indigo-200 p-1.5 text-center">2023</td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border border-indigo-200 p-1.5">Châu Âu</td>
                <td className="border border-indigo-200 p-1.5 text-center font-semibold">18-24</td>
                <td className="border border-indigo-200 p-1.5 text-center">2023</td>
              </tr>
              <tr>
                <td className="border border-indigo-200 p-1.5">Đông Á</td>
                <td className="border border-indigo-200 p-1.5 text-center font-semibold">22-30</td>
                <td className="border border-indigo-200 p-1.5 text-center">2022</td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border border-indigo-200 p-1.5">Đông Nam Á</td>
                <td className="border border-indigo-200 p-1.5 text-center font-semibold">15-25</td>
                <td className="border border-indigo-200 p-1.5 text-center">2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-indigo-900 text-white p-3 rounded-lg">
          <p className="text-sm font-semibold mb-1">KHOẢNG TRỐNG NGHIÊN CỨU</p>
          <p className="text-[10px] leading-relaxed">
            Chưa có nghiên cứu toàn diện về <em>S. aureus</em> gây viêm tử cung chó tại vùng 
            Đồng bằng sông Cửu Long với điều kiện khí hậu nhiệt đới ẩm đặc thù và phương thức 
            chăn nuôi truyền thống. Cần có dữ liệu cập nhật về kháng sinh đồ để hướng dẫn điều trị hợp lý.
          </p>
        </div>
      </div>
    </div>
  );
}