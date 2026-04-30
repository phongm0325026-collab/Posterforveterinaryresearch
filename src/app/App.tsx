import { PosterHeader } from './components/PosterHeader';
import { IntroductionSection } from './components/IntroductionSection';
import { RelatedResearchSection } from './components/RelatedResearchSection';
import { MethodologySection } from './components/MethodologySection';
import { ResultsSection } from './components/ResultsSection';
import { ConclusionSection } from './components/ConclusionSection';
import { ReferencesSection } from './components/ReferencesSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="w-full px-4">
        {/* Large Format Scientific Poster for Conference */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <PosterHeader />
          
          {/* Main Content - 3 Column Layout for Large Print */}
       <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <IntroductionSection />
              <RelatedResearchSection />
            </div>
            
            {/* Middle Column */}
            <div className="flex flex-col gap-6">
              <MethodologySection />
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-6">
              <ResultsSection />
              <ConclusionSection />
              <ReferencesSection />
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8 py-4 text-center">
            <p className="text-sm font-medium">
              <strong>Tác giả:</strong> Thái Phong | <strong>Email:</strong> phongm0325026gstudent@ctu.edu.vn | <strong>Đại học Cần Thơ - Trường Nông Nghiệp</strong> | Hội nghị Khoa học Thú y toàn quốc lần thứ 18, tháng 3/2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}