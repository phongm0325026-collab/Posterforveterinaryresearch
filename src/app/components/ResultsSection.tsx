import { ImageWithFallback } from './figma/ImageWithFallback';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp } from 'lucide-react';

export function ResultsSection() {
  // Data for isolation rate
  const isolationData = [
    { name: 'S. aureus', value: 58, color: '#6366f1' },
    { name: 'E. coli', value: 22, color: '#8b5cf6' },
    { name: 'Streptococcus spp.', value: 12, color: '#a855f7' },
    { name: 'Khác', value: 8, color: '#c084fc' }
  ];

  // Data for antibiotic resistance
  const resistanceData = [
    { antibiotic: 'Penicillin', resistance: 82 },
    { antibiotic: 'Ampicillin', resistance: 68 },
    { antibiotic: 'Tetracycline', resistance: 64 },
    { antibiotic: 'Erythromycin', resistance: 45 },
    { antibiotic: 'Enrofloxacin', resistance: 28 },
    { antibiotic: 'Gentamicin', resistance: 22 },
    { antibiotic: 'Cefoxitin', resistance: 18 },
    { antibiotic: 'Amox-Clav', resistance: 15 }
  ];

  const COLORS = ['#6366f1', '#8b5cf6', '#a855f7', '#c084fc'];

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border-2 border-emerald-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-8 bg-emerald-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-emerald-900">4. KẾT QUẢ</h2>
      </div>

      <div className="mb-4">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1707079346045-58fed6cde83a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFwaHlsb2NvY2N1cyUyMGJhY3RlcmlhJTIwbWljcm9zY29wZXxlbnwxfHx8fDE3NzM1NDQxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Vi khuẩn Staphylococcus dưới kính hiển vi"
          className="w-full h-32 object-cover rounded-lg mb-3"
        />
      </div>

      <div className="space-y-4 text-xs">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            4.1. Tỷ lệ phân lập vi khuẩn (n=200)
          </h3>
          
          <div className="h-48 mb-3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={isolationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {isolationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-emerald-50 p-2 rounded text-xs">
            <p className="font-semibold mb-1">Kết quả chính:</p>
            <p>Phân lập được 116/200 mẫu <em>S. aureus</em> (58%), trong đó 32 chủng MRSA (27,6% tổng số <em>S. aureus</em>)</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-emerald-900 mb-3">4.2. Tỷ lệ kháng kháng sinh (%)</h3>
          
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resistanceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10 }} />
                <YAxis dataKey="antibiotic" type="category" width={90} tick={{ fontSize: 9 }} />
                <Tooltip />
                <Bar dataKey="resistance" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <h3 className="font-semibold text-emerald-900 mb-2">4.3. Các yếu tố nguy cơ</h3>
          
          <table className="w-full text-xs">
            <thead className="bg-emerald-100">
              <tr>
                <th className="p-2 text-left">Yếu tố</th>
                <th className="p-2 text-center">Tỷ lệ (%)</th>
                <th className="p-2 text-center">OR</th>
                <th className="p-2 text-center">p</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-2">Vệ sinh kém</td>
                <td className="p-2 text-center">64.5</td>
                <td className="p-2 text-center font-semibold">4.2</td>
                <td className="p-2 text-center">&lt;0.001</td>
              </tr>
              <tr className="bg-emerald-50">
                <td className="p-2">Đẻ khó/can thiệp</td>
                <td className="p-2 text-center">52.3</td>
                <td className="p-2 text-center font-semibold">3.5</td>
                <td className="p-2 text-center">&lt;0.001</td>
              </tr>
              <tr>
                <td className="p-2">Dinh dưỡng thiếu</td>
                <td className="p-2 text-center">48.7</td>
                <td className="p-2 text-center font-semibold">2.8</td>
                <td className="p-2 text-center">0.002</td>
              </tr>
              <tr className="bg-emerald-50">
                <td className="p-2">Tuổi &gt;6 năm</td>
                <td className="p-2 text-center">38.2</td>
                <td className="p-2 text-center font-semibold">2.1</td>
                <td className="p-2 text-center">0.018</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-emerald-900 text-white p-3 rounded-lg">
          <p className="font-semibold mb-1">ĐIỂM NỔI BẬT</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Tỷ lệ kháng đa thuốc (≥3 loại): 72,4%</li>
            <li>Chủng MRSA có tỷ lệ kháng cao hơn chủng MSSA (p&lt;0.01)</li>
            <li>Không có chủng kháng vancomycin</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
