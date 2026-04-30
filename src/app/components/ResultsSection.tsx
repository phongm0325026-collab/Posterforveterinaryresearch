import { ImageWithFallback } from './figma/ImageWithFallback';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Activity } from 'lucide-react';

export function ResultsSection() {
  // Data for isolation rate
  const isolationData = [
    { name: 'S. aureus', value: 58, color: '#6366f1' },
    { name: 'E. coli', value: 22, color: '#8b5cf6' },
    { name: 'Streptococcus', value: 12, color: '#a855f7' },
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
    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 border-2 border-emerald-200 h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-7 bg-emerald-600 rounded-full"></div>
        <h2 className="text-xl font-bold text-emerald-900">4. KẾT QUẢ</h2>
      </div>

      <div className="mb-3">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1707079346045-58fed6cde83a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFwaHlsb2NvY2N1cyUyMGJhY3RlcmlhJTIwbWljcm9zY29wZXxlbnwxfHx8fDE3NzM1NDQxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Vi khuẩn Staphylococcus dưới kính hiển vi"
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>

      <div className="space-y-3 text-xs">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <h3 className="font-semibold text-emerald-900 mb-2 flex items-center gap-1 text-sm">
            <TrendingUp className="w-4 h-4" />
            4.1. Tỷ lệ phân lập vi khuẩn (n=200)
          </h3>
          
          <div className="h-40 mb-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={isolationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={55}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {isolationData.map((entry, index) => (
                    <Cell key={`isolation-cell-${entry.name}-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-emerald-50 p-2 rounded text-[10px]">
            <p className="font-semibold mb-1">Kết quả chính:</p>
            <p>• Phân lập được 116/200 mẫu <em>S. aureus</em> (58%)</p>
            <p>• Trong đó có 32 chủng MRSA (27,6% tổng số <em>S. aureus</em>)</p>
            <p>• 84 chủng MSSA (72,4% tổng số <em>S. aureus</em>)</p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <h3 className="font-semibold text-emerald-900 mb-2 text-sm">4.2. Tỷ lệ kháng kháng sinh (%)</h3>
          
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resistanceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 9 }} />
                <YAxis dataKey="antibiotic" type="category" width={80} tick={{ fontSize: 9 }} />
                <Tooltip />
                <Bar dataKey="resistance" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <h3 className="font-semibold text-emerald-900 mb-2 text-sm">4.3. Các yếu tố nguy cơ</h3>
          
          <table className="w-full text-[10px] border-collapse">
            <thead className="bg-emerald-100">
              <tr>
                <th className="border border-emerald-200 p-1.5 text-left">Yếu tố</th>
                <th className="border border-emerald-200 p-1.5 text-center">Tỷ lệ (%)</th>
                <th className="border border-emerald-200 p-1.5 text-center">OR</th>
                <th className="border border-emerald-200 p-1.5 text-center">95% CI</th>
                <th className="border border-emerald-200 p-1.5 text-center">p</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 p-1.5">Vệ sinh kém</td>
                <td className="border border-emerald-200 p-1.5 text-center">64.5</td>
                <td className="border border-emerald-200 p-1.5 text-center font-semibold">4.2</td>
                <td className="border border-emerald-200 p-1.5 text-center">2.8-6.3</td>
                <td className="border border-emerald-200 p-1.5 text-center">&lt;0.001</td>
              </tr>
              <tr className="bg-emerald-50">
                <td className="border border-emerald-200 p-1.5">Đẻ khó/can thiệp</td>
                <td className="border border-emerald-200 p-1.5 text-center">52.3</td>
                <td className="border border-emerald-200 p-1.5 text-center font-semibold">3.5</td>
                <td className="border border-emerald-200 p-1.5 text-center">2.2-5.6</td>
                <td className="border border-emerald-200 p-1.5 text-center">&lt;0.001</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 p-1.5">Dinh dưỡng thiếu</td>
                <td className="border border-emerald-200 p-1.5 text-center">48.7</td>
                <td className="border border-emerald-200 p-1.5 text-center font-semibold">2.8</td>
                <td className="border border-emerald-200 p-1.5 text-center">1.7-4.6</td>
                <td className="border border-emerald-200 p-1.5 text-center">0.002</td>
              </tr>
              <tr className="bg-emerald-50">
                <td className="border border-emerald-200 p-1.5">Tuổi &gt;6 năm</td>
                <td className="border border-emerald-200 p-1.5 text-center">38.2</td>
                <td className="border border-emerald-200 p-1.5 text-center font-semibold">2.1</td>
                <td className="border border-emerald-200 p-1.5 text-center">1.3-3.4</td>
                <td className="border border-emerald-200 p-1.5 text-center">0.018</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 p-1.5">Chưa tiêm phòng</td>
                <td className="border border-emerald-200 p-1.5 text-center">42.6</td>
                <td className="border border-emerald-200 p-1.5 text-center font-semibold">1.9</td>
                <td className="border border-emerald-200 p-1.5 text-center">1.1-3.1</td>
                <td className="border border-emerald-200 p-1.5 text-center">0.032</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <h3 className="font-semibold text-emerald-900 mb-2 text-sm flex items-center gap-1">
            <Activity className="w-4 h-4" />
            4.4. So sánh MRSA và MSSA
          </h3>
          <table className="w-full text-[10px] border-collapse">
            <thead className="bg-emerald-100">
              <tr>
                <th className="border border-emerald-200 p-1.5 text-left">Đặc điểm</th>
                <th className="border border-emerald-200 p-1.5 text-center">MRSA (n=32)</th>
                <th className="border border-emerald-200 p-1.5 text-center">MSSA (n=84)</th>
                <th className="border border-emerald-200 p-1.5 text-center">p</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 p-1.5">Kháng đa thuốc (≥3)</td>
                <td className="border border-emerald-200 p-1.5 text-center font-semibold">93.8%</td>
                <td className="border border-emerald-200 p-1.5 text-center">63.1%</td>
                <td className="border border-emerald-200 p-1.5 text-center">&lt;0.001</td>
              </tr>
              <tr className="bg-emerald-50">
                <td className="border border-emerald-200 p-1.5">Kháng Penicillin</td>
                <td className="border border-emerald-200 p-1.5 text-center font-semibold">100%</td>
                <td className="border border-emerald-200 p-1.5 text-center">75%</td>
                <td className="border border-emerald-200 p-1.5 text-center">&lt;0.001</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 p-1.5">Kháng Gentamicin</td>
                <td className="border border-emerald-200 p-1.5 text-center font-semibold">40.6%</td>
                <td className="border border-emerald-200 p-1.5 text-center">15.5%</td>
                <td className="border border-emerald-200 p-1.5 text-center">0.003</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-emerald-900 text-white p-3 rounded-lg">
          <p className="font-semibold mb-1 text-sm">ĐIỂM NỔI BẬT</p>
          <ul className="list-disc list-inside space-y-1 ml-1 text-[10px]">
            <li>Tỷ lệ kháng đa thuốc (≥3 loại): 72,4%</li>
            <li>Chủng MRSA có tỷ lệ kháng cao hơn MSSA (p&lt;0.01)</li>
            <li>Không có chủng kháng vancomycin (hiệu quả 100%)</li>
            <li>Nhạy cảm cao nhất: Amoxicillin-clavulanic acid (85%), Gentamicin (78%)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}