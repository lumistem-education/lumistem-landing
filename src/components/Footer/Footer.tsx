import './Footer.css';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 items-start gap-6 mb-6">
        {/* Brand Info */}
        <div className="md:col-span-5 flex flex-col gap-2">
          <a href="#" className="footer-wordmark" aria-label="LumiSTEM — về đầu trang">
            LumiSTEM
          </a>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm mt-1">
            Môi trường lập trình trực quan, công cụ tạo tài nguyên và các bộ kit thực hành phần cứng STEM.
          </p>
        </div>

        {/* Links 1: Sản phẩm */}
        <div className="md:col-span-4 flex flex-col gap-2">
          <h4 className="text-xs font-semibold text-neutral-100 uppercase tracking-wider mb-1">
            Hệ Thống Phần Mềm
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-400">
            <li>
              <a href="https://demo.blockly.lumistem.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LumiSTEM Blockly Studio
              </a>
            </li>
            <li>
              <a href="https://demo.maker.lumistem.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LumiSTEM Kitchen
              </a>
            </li>
            <li>
              <a href="https://github.com/lumistem-education/lumistem-connector/releases" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LumiSTEM Connector
              </a>
            </li>
            <li className="text-neutral-400 text-xs pt-1">
              <span className="font-medium text-neutral-300">Đang phát triển:</span> Community · LumiAI · LMS
            </li>
          </ul>
        </div>

        {/* Links 2: Tài liệu & Liên hệ */}
        <div className="md:col-span-3 flex flex-col gap-2">
          <h4 className="text-xs font-semibold text-neutral-100 uppercase tracking-wider mb-1">
            Tài Liệu &amp; Liên Hệ
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-400">
            <li>
              <a href="https://wiki.lumistem.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Tài liệu kỹ thuật (wiki.lumistem.org)
              </a>
            </li>
            <li>
              <a href="mailto:lumistem.education@gmail.com" className="hover:text-white transition-colors">
                lumistem.education@gmail.com
              </a>
            </li>
            <li>
              <a href="https://lumistem.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                lumistem.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
        <div>
          © {new Date().getFullYear()} LumiSTEM and{' '}
          <a href="https://www.facebook.com/the.mellivora" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            Quyết Thành
          </a>.
        </div>
        <div className="footer-socials">
          <span>Theo dõi chúng tôi trên:</span>
          <div className="footer-social-icons">
            <a href="https://example.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <title>GitHub</title>
                <path fill="currentColor" d="M12 .297a12 12 0 0 0-3.793 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.725-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.776.419-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.006 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12 12 0 0 0 12 .297Z" />
              </svg>
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <title>Facebook</title>
                <path fill="currentColor" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.972h-1.513c-1.491 0-1.956.931-1.956 1.887v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
              </svg>
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <title>YouTube</title>
                <path fill="currentColor" fillRule="evenodd" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <title>LinkedIn</title>
                <path fill="currentColor" d="M20.45 0H3.55A3.55 3.55 0 0 0 0 3.55v16.9A3.55 3.55 0 0 0 3.55 24h16.9A3.55 3.55 0 0 0 24 20.45V3.55A3.55 3.55 0 0 0 20.45 0ZM7.12 20.45H3.56V9h3.56ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM20.45 20.45H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.25 2.37 4.25 5.46Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
