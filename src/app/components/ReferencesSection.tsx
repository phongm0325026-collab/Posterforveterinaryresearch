import { BookMarked, GraduationCap } from 'lucide-react';

export function ReferencesSection() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 border-2 border-slate-200">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-6 bg-slate-600 rounded-full"></div>
        <h2 className="text-lg font-bold text-slate-900">6. TÀI LIỆU THAM KHẢO</h2>
      </div>

      <div className="space-y-2 text-[10px] leading-tight text-gray-800">
        <div className="bg-white p-2 rounded-lg shadow-sm border-l-4 border-blue-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[1]</strong> Nguyễn Văn Thanh, Trần Ngọc Bích, Nguyễn Trung Trực, Nguyễn Thị Yến Mai (2021). 
              <em> Khảo sát tình hình nhiễm vi khuẩn gây viêm tử cung ở chó cái sau đẻ tại các phòng khám thú y Tỉnh Tiền Giang.</em> 
              Tạp chí Khoa học Công Nghệ, 60(1), 156-160.
            </p>
          </div>
        </div>

        <div className="bg-white p-2 rounded-lg shadow-sm border-l-4 border-indigo-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-3 h-3 text-indigo-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[2]</strong> Smith, J.K., Johnson, M.A., & Williams, R.T. (2023). 
              <em> Prevalence and antimicrobial resistance of Staphylococcus aureus in canine metritis.</em> 
              Journal of Veterinary Medicine, 156(2), 245-258.
            </p>
          </div>
        </div>

        <div className="bg-white p-2 rounded-lg shadow-sm border-l-4 border-purple-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-3 h-3 text-purple-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[3]</strong> Clinical and Laboratory Standards Institute (CLSI). (2024). 
              <em> Performance Standards for Antimicrobial Disk and Dilution Susceptibility Tests for Bacteria 
              Isolated From Animals.</em> 5th ed. CLSI supplement VET01S.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}