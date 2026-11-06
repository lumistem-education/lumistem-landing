import './Hero.css';
import React from 'react';
import { LiquidGlassCard } from '../LiquidGlassCard.tsx';
import { RealBlocklyCanvas } from './RealBlocklyCanvas.tsx';
import { ArrowRight, CircuitBoard } from 'lucide-react';
import { BronzeDrumBackground } from './BronzeDrumBackground.tsx';
import { SerialMonitor } from './SerialMonitor.tsx';

export const Hero: React.FC = () => {
    return (
        <section
            id="cockpit"
            className="hero-section"
        >
            <div className="hero-color-bg" aria-hidden="true">
                <div className="liquid-blob liquid-blob-1" />
                <div className="liquid-blob liquid-blob-2" />
                <div className="liquid-blob liquid-blob-3" />
                <div className="liquid-blob liquid-blob-4" />
            </div>
            <BronzeDrumBackground />
            {/* Main Headline - Bold, Grand, Fills the page with presence */}
            <div className="text-center max-w-5xl mx-auto mb-8 md:mb-10">
                <h1 className="section-title hero-title text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-black text-gray-950 tracking-tight leading-[1.1] mb-12 md:mb-16">
                    <span className="lumi-yellow">LumiSTEM</span>
                    <span className="lumi-red"> VIỆT NAM</span>
                </h1>
                <p className="text-lg sm:text-xl italic text-gray-800 mx-auto leading-relaxed font-bold">
                    <span className="block">
                        Biến ý tưởng thành sản phẩm STEM dễ dàng hơn với LumiSTEM.
                    </span>
                    <span className="block mt-2 lg:whitespace-nowrap">
                        Cùng LumiSTEM khám phá công nghệ, rèn luyện tư duy và tự tay
                        xây dựng những giải pháp thiết thực cho cuộc sống.
                    </span>
                </p>
            </div>

            {/* Action Buttons - Prominent & Substantial */}
            <div className="flex flex-wrap items-center justify-center gap-5 mb-16">
                <a
                    href="https://demo.blockly.lumistem.org"
                    target="_blank"
                    rel="noreferrer"
                    className="liquid-btn-primary !py-4 !px-9 !text-base sm:!text-lg !font-bold rounded-xl shadow-lg"
                >
                    <span>Khám phá Blockly Studio</span>
                    <ArrowRight size={20} />
                </a>

                <a
                    href="https://wiki.lumistem.org"
                    target="_blank"
                    rel="noreferrer"
                    className="liquid-btn-secondary !py-4 !px-9 !text-base sm:!text-lg !font-bold rounded-xl shadow-sm"
                >
                    <span>Đọc tài liệu hướng dẫn</span>
                </a>
            </div>

            {/* Studio Cockpit - Grand presentation canvas */}
            <div className="studio-preview">
                <LiquidGlassCard disableSheen className="studio-window shadow-xl">
                    {/* Header Bar */}
                    <div className="studio-window-titlebar">
                            <div className="window-dots">
                                <span className="window-dot dot-red" />
                                <span className="window-dot dot-yellow" />
                                <span className="window-dot dot-green" />
                            </div>
                            <a
                                href="https://demo.blockly.lumistem.org"
                                target="_blank"
                                rel="noreferrer"
                                className="studio-preview-link"
                            >
                                <span className="lumi-brand-small">LumiSTEM</span>{' '}
                                Blockly Studio
                            </a>
                    </div>

                    {/* Stage */}
                    <div className="studio-window-body">
                        <div className="studio-workspace">
                            <div className="studio-preview-grid">
                                <section className="studio-preview-pane" aria-labelledby="studio-blocks-heading">
                                    <h2 id="studio-blocks-heading" className="studio-pane-heading">Khối lệnh</h2>
                                    <RealBlocklyCanvas className="studio-blocks-pane" />
                                </section>
                                <section className="studio-preview-pane" aria-labelledby="studio-code-heading">
                                    <h2 id="studio-code-heading" className="studio-pane-heading">Mã nguồn C++</h2>
                                    <div className="studio-code-pane glass-code-window p-6 sm:p-8 text-xs sm:text-sm font-mono text-gray-200 leading-relaxed overflow-x-auto rounded-lg">
                                        <div className="text-gray-500 mb-3">
                                            // Mã nguồn Arduino/C++ sinh tự động từ các
                                            khối lệnh bên cạnh
                                        </div>
                                        <div className="text-blue-400">
                                            #include &lt;Arduino.h&gt;
                                        </div>
                                        <br />
                                        <div className="text-yellow-400">
                                            void{' '}
                                            <span className="text-emerald-400">
                                                setup
                                            </span>
                                            () &#123;
                                        </div>
                                        <div className="pl-4 text-gray-300">
                                            pinMode(2, OUTPUT);{' '}
                                            <span className="text-gray-500">
                                                // GPIO 2 (LED Onboard)
                                            </span>
                                        </div>
                                        <div className="text-yellow-400">&#125;</div>
                                        <br />
                                        <div className="text-yellow-400">
                                            void{' '}
                                            <span className="text-emerald-400">
                                                loop
                                            </span>
                                            () &#123;
                                        </div>
                                        <div className="pl-4 text-gray-300">
                                            digitalWrite(2, HIGH);{' '}
                                            <span className="text-gray-500">
                                                // Bật đèn LED
                                            </span>
                                        </div>
                                        <div className="pl-4 text-gray-300">
                                            delay(1000);{' '}
                                            <span className="text-gray-500">
                                                // Chờ 1000ms
                                            </span>
                                        </div>
                                        <div className="pl-4 text-gray-300">
                                            digitalWrite(2, LOW);{' '}
                                            <span className="text-gray-500">
                                                // Tắt đèn LED
                                            </span>
                                        </div>
                                        <div className="pl-4 text-gray-300">
                                            delay(1000);{' '}
                                            <span className="text-gray-500">
                                                // Chờ 1000ms
                                            </span>
                                        </div>
                                        <div className="text-yellow-400">&#125;</div>
                                    </div>
                                </section>
                            </div>

                            <SerialMonitor />
                        </div>

                        {/* Hardware & Compiler Footer */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 mt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-800">
                            <div className="flex items-center gap-2">
                                <CircuitBoard size={16} className="text-gray-500" />
                                <span>
                                    Bo mạch mặc định:{' '}
                                    <strong>Arduino Uno</strong> &amp;{' '}
                                    <strong>ESP32 Dev Module</strong>
                                </span>
                            </div>
                            <div className="flex items-center gap-2 font-medium">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                <span>
                                    Biên dịch &amp; nạp qua{' '}
                                    <a
                                        href="https://github.com/lumistem-education/lumistem-connector/releases"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="lumi-brand-small font-bold hover:underline underline-offset-4"
                                    >
                                        LumiSTEM Connector
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </LiquidGlassCard>
            </div>
        </section>
    );
};
