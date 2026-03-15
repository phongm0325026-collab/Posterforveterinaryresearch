import { PosterHeader } from './components/PosterHeader';
import { IntroductionSection } from './components/IntroductionSection';
import { RelatedResearchSection } from './components/RelatedResearchSection';
import { MethodologySection } from './components/MethodologySection';
import { ResultsSection } from './components/ResultsSection';
import { ConclusionSection } from './components/ConclusionSection';
import { ReferencesSection } from './components/ReferencesSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-[1400px] mx-auto p-8">
        {/* Scientific Poster Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <PosterHeader />
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
            {/* Left Column */}
            <div className="space-y-6">
              <IntroductionSection />
              <RelatedResearchSection />
            </div>
            
            {/* Middle Column */}
            <div className="space-y-6">
              <MethodologySection />
              <ResultsSection />
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <ConclusionSection />
              <ReferencesSection />
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8 py-4 text-center">
            <p className="text-sm">
              Đại học Cần Thơ - Trường Nông Nghiệp
            </p>
            <p className="text-xs mt-1 opacity-80">
              Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, TP. Cần Thơ | Email: phongm0325026gstudent@ctu.edu.vn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
