# LumiSTEM Landing Page 🌟

Trang giới thiệu chính thức cho hệ sinh thái **LumiSTEM Education** (Hạ tầng giáo dục STEM/STEAM K-12 thế hệ mới tại Việt Nam).

---

## 🎨 Ngôn Ngữ Thiết Kế (Design Language)
- **Base Theme:** Màu vàng thương hiệu cơ bản `#ffd600` (Cyber Solar Yellow / Amber Glow) đồng bộ với toàn bộ hệ thống (`lumistem-kitchen`, `lumistem-blockly-studio`).
- **Phong cách:** Tương lai, thanh lịch, hiện đại (Futuristic Luxury Light Theme).
- **Hiệu ứng Liquid Glass:**
  - Kính khúc xạ trong suốt siêu nét (`backdrop-filter: blur(24px) saturate(190%)`).
  - Viền kính khúc xạ ánh sáng (Hairline specular light borders).
  - Vùng lóa sáng phản chiếu theo chuột tương tác thời gian thực (`liquid-glass-sheen`).
  - Các khối chất lỏng phát sáng chuyển động chậm trong nền (`liquid-blob`).

---

## 🚀 Công Nghệ
- **React 19 + TypeScript**
- **Vite 6**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Lucide React Icons**
- **Nix Flake** (Đồng bộ môi trường `nodejs_22` với toàn bộ dự án LumiSTEM)

---

## 🛠️ Hướng Dẫn Chạy

### 1. Với Nix Flakes (Khuyến nghị cho cả đội ngũ LumiSTEM):
```bash
cd lumistem-landing
nix develop
npm run dev
```

### 2. Với Node.js cài sẵn:
```bash
cd lumistem-landing
npm run dev      # Khởi động máy chủ dev tại http://localhost:5173
npm run build    # Đóng gói sản phẩm vào thư mục dist/
npm run preview  # Xem trước bản build hoàn chỉnh
```
# lumistem-landing
