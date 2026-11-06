import './CtaSection.css';
import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';


export const CtaSection: React.FC = () => {
    return (
        <section
            id="cta"
            className="cta-section"
        >
            <div className="cta-content">
                <h2 className="section-title text-3xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight mb-6 uppercase">
                    BẮT ĐẦU LẬP TRÌNH CÙNG{' '}
                    <span className="lumi-brand-small">LUMISTEM</span>
                </h2>

                <p className="text-lg sm:text-2xl text-gray-800 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
                    Khám phá không gian lập trình kéo thả trực quan trên trình
                    duyệt web hoặc tìm hiểu thêm về cách thức chuẩn bị tài
                    nguyên và nạp code trong tài liệu hướng dẫn.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-5">
                    <a
                        href="https://demo.blockly.lumistem.org"
                        target="_blank"
                        rel="noreferrer"
                        className="liquid-btn-primary !py-4 !px-9 !text-base sm:!text-lg !font-bold rounded-xl shadow-lg"
                    >
                        <span>Mở Blockly Studio</span>
                        <ArrowRight size={20} />
                    </a>

                    <a
                        href="https://wiki.lumistem.org"
                        target="_blank"
                        rel="noreferrer"
                        className="liquid-btn-secondary !py-4 !px-9 !text-base sm:!text-lg !font-bold rounded-xl shadow-sm"
                    >
                        <BookOpen size={20} />
                        <span>Xem tài liệu hướng dẫn</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
