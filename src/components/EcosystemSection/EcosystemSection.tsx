import './EcosystemSection.css';
import React from 'react';
import { LiquidGlassCard } from '../LiquidGlassCard.tsx';
import { ArrowUpRight, Download, Code, Wrench, Cpu, Users, Sparkles, GraduationCap } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  return (
    <section id="ecosystem" className="ecosystem-section">
      <div className="ecosystem-heading">
        <h2 className="section-title">HỆ SINH THÁI PHẦN MỀM LumiSTEM</h2>
        <p>
          Từ những khối lệnh đầu tiên đến một sản phẩm hoạt động thực tế,
          LumiSTEM mang đến các công cụ để học sinh lập trình, giáo viên xây dựng
          học liệu và kết nối chương trình với phần cứng. Cùng khám phá, thử nghiệm
          và từng bước hoàn thiện ý tưởng qua mỗi dự án STEM.
        </p>
      </div>

      {/* Group 1: Công cụ hiện có */}
      <div className="mb-14">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-xs" />
          <h3 className="text-sm sm:text-base font-bold text-gray-900 uppercase tracking-wider">
            Những tính năng đã phát triển
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Blockly Studio (Card lớn 7 cột) */}
          <div className="md:col-span-7">
            <LiquidGlassCard className="p-7 sm:p-9 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 text-xs sm:text-sm">
                  <span className="font-bold text-gray-900 bg-[#ffd600]/30 px-3 py-0.5 rounded">
                    WEB IDE
                  </span>
                </div>

                <div className="flex items-center gap-2.5 mb-3">
                  <Code size={24} className="text-gray-900" />
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                    <span className="lumi-brand-small">LumiSTEM</span> Blockly Studio
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  Lập trình bằng khối lệnh trên trình duyệt web, xem mã Arduino/C++ tương ứng
                  và lưu hoặc chia sẻ dự án với người khác. Kết hợp với LumiSTEM Connector để biên dịch và nạp
                  chương trình trực tiếp lên các bo mạch STEM.
                </p>

                <ul className="ecosystem-feature-list text-sm sm:text-base text-gray-800 font-medium">
                  <li>Coding với khối lệnh chuẩn Scratch</li>
                  <li>Sinh mã C++ tương thích với mã Arduino</li>
                  <li>Lưu và mở dự án dưới định dạng file JSON</li>
                  <li>Nhập tài nguyên khối lệnh và bo mạch tự cấu hình từ file</li>
                </ul>
              </div>

              <div className="pt-5 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-500 font-medium">demo.blockly.lumistem.org</span>
                <a
                  href="https://demo.blockly.lumistem.org"
                  target="_blank"
                  rel="noreferrer"
                  className="liquid-btn-primary !py-2.5 !px-5 !text-sm !font-bold"
                >
                  <span>Mở Blockly Studio</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </LiquidGlassCard>
          </div>

          {/* 2. Kitchen (5 cột) */}
          <div className="md:col-span-5">
            <LiquidGlassCard className="p-7 sm:p-9 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 text-xs sm:text-sm">
                  <span className="font-bold text-gray-900 bg-amber-100 text-amber-900 px-3 py-0.5 rounded">
                    TẠO KHỐI VÀ BO MẠCH
                  </span>
                </div>

                <div className="flex items-center gap-2.5 mb-3">
                  <Wrench size={22} className="text-gray-900" />
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                    <span className="lumi-brand-small">LumiSTEM</span> Kitchen
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  Công cụ tạo tài nguyên: thiết kế khối lệnh tùy biến, khai báo thông số bo mạch và chân kết nối,
                  sau đó xuất ra định dạng JSON để nhập vào Studio. Bằng cách này bạn có thể linh hoat sử dụng bo mạch và khối mà mình tự tạo.
                </p>

                <ul className="ecosystem-feature-list text-sm sm:text-base text-gray-800 font-medium">
                  <li>Khai báo cấu hình bo mạch của bạn</li>
                  <li>Thiết kế hình dạng, tham số và mã sinh của khối lệnh</li>
                  <li>Xuất file JSON và tải trực tiếp lên LumiSTEM Blockly Studio</li>
                </ul>
              </div>

              <div className="pt-5 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-500 font-medium">kitchen.lumistem.org</span>
                <a
                  href="https://demo.maker.lumistem.org"
                  target="_blank"
                  rel="noreferrer"
                  className="liquid-btn-primary !py-2.5 !px-5 !text-sm !font-bold"
                >
                  <span>Mở Kitchen</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </LiquidGlassCard>
          </div>

          <div className="md:col-span-12">
            <LiquidGlassCard className="p-7 sm:p-9">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-gray-100 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <span className="font-bold text-gray-900 bg-blue-100 text-blue-900 px-3 py-0.5 rounded">
                    LOCAL SERVICE
                  </span>
                </div>
                <span className="text-gray-600 font-medium">Hỗ trợ Windows, macOS &amp; Linux</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Cpu size={24} className="text-gray-900" />
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                      <a
                        href="https://github.com/lumistem-education/lumistem-connector/releases"
                        target="_blank"
                        rel="noreferrer"
                        className="lumi-brand-small hover:underline underline-offset-4"
                      >
                        LumiSTEM Connector
                      </a>
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    Ứng dụng chạy trực tiếp trên máy tính để kết nối môi trường lập trình với thiết bị phần cứng.
                    Hỗ trợ biên dịch mã nguồn qua Arduino CLI, phát hiện cổng kết nối, nạp chương trình và quản lý thư viện, bo mạch.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-200/80">
                      Tự động quét cổng COM / Serial
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-200/80">
                      Biên dịch cục bộ bằng Arduino CLI
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-200/80">
                      Đóng gói đa nền tảng
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100 md:pl-8 pt-4 md:pt-0">
                  <div className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                    Được tích hợp cùng luồng làm việc của Blockly Studio để đưa mã nguồn trực tiếp vào vi điều khiển.
                  </div>
                  <a
                    href="https://wiki.lumistem.org"
                    target="_blank"
                    rel="noreferrer"
                    className="connector-action liquid-btn-secondary !py-2.5 !px-5 !text-sm !font-bold"
                  >
                    <span>Xem hướng dẫn kết nối</span>
                    <ArrowUpRight size={15} />
                  </a>
                  <a
                    href="https://github.com/lumistem-education/lumistem-connector/releases"
                    target="_blank"
                    rel="noreferrer"
                    className="connector-action liquid-btn-primary !py-2.5 !px-5 !text-sm !font-bold mt-3"
                  >
                    <span>Tải xuống</span>
                    <Download size={15} />
                  </a>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-3 h-3 rounded-full bg-amber-400 shadow-xs" />
          <h3 className="text-sm sm:text-base font-bold text-gray-900 uppercase tracking-wider">
            Đang phát triển
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LiquidGlassCard className="p-7 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <Users size={18} className="text-gray-400" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-950 mb-2">
                <span className="lumi-brand-small">LumiSTEM</span> Community
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hướng tới một không gian kết nối cộng đồng người học, giáo viên và những người đam mê sáng tạo trong hệ sinh thái <span className="lumi-brand-small font-bold">LumiSTEM</span>.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
              Không gian chia sẻ sáng tạo
            </div>
          </LiquidGlassCard>

          <LiquidGlassCard className="p-7 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <Sparkles size={18} className="text-gray-400" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-950 mb-2">
                LumiAI / Trợ Lý AI
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nghiên cứu các công cụ trí tuệ nhân tạo hỗ trợ học sinh làm quen với Blockly, khai thác tài liệu kỹ thuật và hỗ trợ thầy cô chuẩn bị nội dung bài học STEM.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
              Hỗ trợ học tập &amp; tài liệu
            </div>
          </LiquidGlassCard>

          <LiquidGlassCard className="p-7 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <GraduationCap size={18} className="text-gray-400" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-950 mb-2">
                <span className="lumi-brand-small">LumiSTEM</span> LMS
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hệ thống quản lý học tập trong định hướng mở rộng hệ sinh thái, hướng tới hỗ trợ tổ chức bài học và theo dõi quá trình thực hành tại nhà trường.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
              Định hướng quản lý lớp học
            </div>
          </LiquidGlassCard>
        </div>
      </div>
    </section>
  );
};
