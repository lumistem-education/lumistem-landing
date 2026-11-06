import { Quote } from 'lucide-react';
import { LiquidGlassCard } from '../LiquidGlassCard.tsx';
import './ReviewsSection.css';

const sampleComments = [
    'Có thể cho học sinh bắt đầu bằng khối lệnh rồi đối chiếu với mã C++. Cách này giúp các em hiểu từng bước chương trình hoạt động, thay vì chỉ làm theo hướng dẫn.',
    'Em thích nhất lúc chương trình mình vừa ghép làm robot chuyển động. Khi chạy chưa đúng, em sửa từng khối rồi thử lại để tìm ra nguyên nhân.',
    'Việc chuẩn bị khối lệnh riêng cho từng bộ kit giúp buổi thực hành tập trung hơn. Mình mong có thêm các dự án mẫu theo chủ đề để học sinh tự khám phá sau giờ học.',
    'Nhìn khối lệnh và mã nguồn cạnh nhau dễ hiểu hơn nhiều. Em bắt đầu nhận ra mỗi thao tác kéo thả tương ứng với một phần của chương trình.',
    'Lưu lại dự án rồi mở ra làm tiếp khá tiện. Các nhóm có thể thử nhiều cách điều khiển robot mà không phải bắt đầu lại từ đầu.',
    'Bài thực hành nhà thông minh giúp các em liên hệ với những thiết bị quen thuộc. Từ một cảm biến nhỏ đã có thể nghĩ ra nhiều ý tưởng để thử nghiệm.',
];

export const ReviewsSection = () => (
    <section id="reviews" className="reviews-section" aria-labelledby="reviews-title">
        <div className="reviews-heading">
            <h2 id="reviews-title" className="section-title">ĐÁNH GIÁ VỀ CHÚNG TÔI</h2>
            <p>Những góc nhìn từ việc học, hướng dẫn và thực hành STEM.</p>
        </div>
        <div className="reviews-marquee" tabIndex={0} aria-label="Các lời bình, tạm dừng khi rê chuột hoặc chọn bằng bàn phím">
            <div className="reviews-track">
                {[0, 1].map(copy => (
                    <ul key={copy} className="reviews-group" aria-hidden={copy === 1 ? true : undefined}>
                        {sampleComments.map(comment => (
                            <li key={comment}>
                                <LiquidGlassCard className="review-card">
                                    <Quote className="review-quote-icon" size={28} strokeWidth={1.5} aria-hidden="true" />
                                    <blockquote>{comment}</blockquote>
                                </LiquidGlassCard>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    </section>
);
