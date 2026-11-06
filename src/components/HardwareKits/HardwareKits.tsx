import './HardwareKits.css';
import React from 'react';
import { LiquidGlassCard } from '../LiquidGlassCard.tsx';
import { Bot, Home } from 'lucide-react';
import robotImageUrl from '../../assets/kit-robot.jpg';
import smarthomeImageUrl from '../../assets/kit-smarthome.jpg';

export const HardwareKits: React.FC = () => {
  return (
    <section id="hardware" className="hardware-kits-section">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="section-title text-3xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight mb-5">
          BỘ KIT THỰC HÀNH STEM DO LumiSTEM THIẾT KẾ
        </h2>
        <p className="text-lg sm:text-2xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
          Các bộ kit STEM được thiết kế để kết nối trực tiếp với môi trường lập trình
          khối lệnh, giúp học sinh trải nghiệm việc điều khiển thiết bị một cách trực quan.
        </p>
      </div>

      <div className="hardware-kit-list">
        <LiquidGlassCard className="hardware-kit-card">
          <div className="hardware-kit-content">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100 text-xs sm:text-sm">
              <span className="font-bold text-gray-900 bg-[#ffd600]/30 px-3 py-0.5 rounded">
                ROBOTICS
              </span>
            </div>

            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200/50">
                <Bot size={28} className="text-gray-900" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                Kit Robot <span className="lumi-brand-small">LumiSTEM</span>
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              Bộ kit thực hành Robot của <span className="lumi-brand-small font-bold">LumiSTEM</span> phục vụ các hoạt động học tập
              và thực hành với robot. Học sinh lập trình trực tiếp bằng khối lệnh để điều khiển các chuyển động
              và phản hồi của mô hình.
            </p>

            <div className="space-y-3 text-sm sm:text-base text-gray-800 font-medium bg-gray-50/80 p-5 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Thực hành lập trình điều khiển chuyển động robot</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Tương thích hoàn toàn với <span className="lumi-brand-small font-bold">LumiSTEM</span> Blockly Studio</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Nạp chương trình nhanh chóng qua Connector</span>
              </div>
            </div>
          </div>

          <div className="hardware-kit-image">
            <img src={robotImageUrl} alt="Mô hình Kit Robot LumiSTEM" loading="lazy" decoding="async" />
          </div>
        </LiquidGlassCard>

        <LiquidGlassCard className="hardware-kit-card hardware-kit-card-reversed">
          <div className="hardware-kit-content">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100 text-xs sm:text-sm">
              <span className="font-bold text-gray-900 bg-sky-100 text-sky-900 px-3 py-0.5 rounded">
                SMARTHOME
              </span>
            </div>

            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-xl bg-sky-50 text-sky-900 border border-sky-200/50">
                <Home size={28} className="text-gray-900" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                Kit Smarthome <span className="lumi-brand-small">LumiSTEM</span>
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              Bộ kit thực hành chủ đề nhà thông minh của <span className="lumi-brand-small font-bold">LumiSTEM</span> phục vụ các hoạt động
              khám phá công nghệ tự động hóa gia đình. Học sinh tìm hiểu cách đọc dữ liệu cảm biến và kích hoạt
              thiết bị phản hồi.
            </p>

            <div className="space-y-3 text-sm sm:text-base text-gray-800 font-medium bg-gray-50/80 p-5 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Thực hành theo kịch bản nhà thông minh tự động</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Lập trình đọc cảm biến và điều khiển thiết bị chấp hành</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Trực quan, dễ tiếp cận cho học sinh phổ thông</span>
              </div>
            </div>
          </div>

          <div className="hardware-kit-image hardware-kit-image-smarthome">
            <img src={smarthomeImageUrl} alt="Bo mạch của bộ Kit Smarthome LumiSTEM" loading="lazy" decoding="async" />
          </div>
        </LiquidGlassCard>
      </div>
    </section>
  );
};
