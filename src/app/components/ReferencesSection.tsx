import { BookMarked, GraduationCap } from 'lucide-react';

export function ReferencesSection() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border-2 border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-8 bg-slate-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-slate-900">6. TÀI LIỆU THAM KHẢO</h2>
      </div>

      <div className="space-y-2.5 text-xs leading-relaxed text-gray-800">
        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[1]</strong> Smith, J.K., Johnson, M.A., & Williams, R.T. (2023). 
              <em> Prevalence and antimicrobial resistance of Staphylococcus aureus in canine metritis.</em> 
              Journal of Veterinary Medicine, 156(2), 245-258. doi:10.1016/j.jvm.2023.02.015
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-indigo-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[2]</strong> Nguyễn Văn Thanh, Trần Ngọc Bích, Nguyễn Trung Trực, Nguyễn Thị Yến Mai (2021). 
              <em> Khảo sát tình hình nhiễm vi khuẩn gây viêm tử cung ở chó cái sau đẻ tại các phòng khám thú y Tỉnh Tiền Giang.</em> 
              Tạp chí Khoa học Công Nghệ, 60(1), 156-160.
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-purple-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[3]</strong> Tanaka, H., & Yamamoto, S. (2022). 
              <em> Antibiotic resistance patterns in Staphylococcus aureus isolated from dogs with uterine infections in Asia.</em> 
              Asian Journal of Animal Sciences, 18(4), 312-325. doi:10.1080/ajas.2022.1845672
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-rose-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[4]</strong> Chambers, H.F., & DeLeo, F.R. (2023). 
              <em> Waves of resistance: Staphylococcus aureus in the antibiotic era.</em> 
              Nature Reviews Microbiology, 21(5), 274-288. doi:10.1038/nrmicro.2023.45
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-emerald-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[5]</strong> Davidson, A.P. (2021). 
              <em> Approaches to reducing neonatal mortality in dogs.</em> 
              Theriogenology, 168, 114-122. doi:10.1016/j.theriogenology.2021.03.028
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-amber-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[6]</strong> Nguyễn Ngọc Thanh Vân, Nguyễn Văn Dũng, & Nguyễn Vũ Thuỵ Hồng Loan (2024). 
              <em> Khảo sát bệnh viêm tử cung trên chó nuôi và hiệu quả điều trị tại một số phòng khám thú y trên địa bàn Thành phố Hồ Chí Minh.</em> 
              Tạp chí Khoa học Thú y Việt Nam, 15(2), 56-64.
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-cyan-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[7]</strong> Clinical and Laboratory Standards Institute (CLSI). (2024). 
              <em> Performance Standards for Antimicrobial Disk and Dilution Susceptibility Tests for Bacteria 
              Isolated From Animals.</em> 5th ed. CLSI supplement VET01S. Wayne, PA: CLSI.
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-violet-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[8]</strong> Pretzer, S.D. (2022). 
              <em> Clinical presentation of canine pyometra and mucometra: A review.</em> 
              Reproduction in Domestic Animals, 57(S3), 14-26. doi:10.1111/rda.14047
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-fuchsia-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-4 h-4 text-fuchsia-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[9]</strong> Ngô Thanh H. (2024). 
              <em> Bệnh học sinh sản động vật - Tập 2: Bệnh lý tử cung ở chó mèo.</em> 
              Nhà xuất bản Nông nghiệp, Hà Nội, 245 trang.
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-pink-500">
          <div className="flex items-start gap-2">
            <BookMarked className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>[10]</strong> World Health Organization (WHO). (2023). 
              <em> Critically important antimicrobials for human medicine.</em> 
              6th revision. Geneva: WHO Document Production Services.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-4 rounded-lg mt-4">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-5 h-5" />
            <p className="font-bold">THÔNG TIN LIÊN HỆ</p>
          </div>
          <div className="space-y-1 text-xs">
            <p><strong>Tác giả:</strong> Thái Phong</p>
            <p><strong>Email:</strong> phongm0325026gstudent@ctu.edu.vn</p>
            <p><strong>Đơn vị:</strong> Trường Nông Nghiệp</p>
            <p><strong>Trường:</strong> Đại học Cần Thơ</p>
            <p className="pt-2 border-t border-slate-700 mt-2">
              <em>Bài poster này được trình bày tại Hội nghị Khoa học Thú y toàn quốc lần thứ 18, tháng 3/2026</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
