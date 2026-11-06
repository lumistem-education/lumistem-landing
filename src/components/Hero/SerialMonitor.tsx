import { useEffect, useRef, useState } from 'react';
import { Pause, Play, Terminal, Trash2 } from 'lucide-react';
import './SerialMonitor.css';

interface SerialEntry {
    id: number;
    time: string;
    message: string;
    high?: boolean;
}

export const SerialMonitor = () => {
    const [paused, setPaused] = useState(false);
    const [entries, setEntries] = useState<SerialEntry[]>([
        { id: 0, time: '00:00:00', message: 'Sẵn sàng mô phỏng LED nhấp nháy tại GPIO 2.' },
    ]);
    const tickRef = useRef(0);
    const outputRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (paused) return;
        const timer = window.setInterval(() => {
            const tick = ++tickRef.current;
            const high = tick % 2 === 1;
            const time = [Math.floor(tick / 3600), Math.floor(tick / 60) % 60, tick % 60]
                .map(value => String(value).padStart(2, '0')).join(':');
            setEntries(previous => [...previous.slice(-79), {
                id: tick,
                time,
                message: `GPIO 2 → ${high ? 'HIGH · LED BẬT' : 'LOW · LED TẮT'}`,
                high,
            }]);
        }, 1000);
        return () => window.clearInterval(timer);
    }, [paused]);

    useEffect(() => {
        const output = outputRef.current;
        if (output) output.scrollTop = output.scrollHeight;
    }, [entries]);

    return (
        <div className="serial-monitor" aria-label="Serial Monitor">
            <div className="serial-monitor-toolbar">
                <div className="serial-monitor-title">
                    <Terminal size={15} aria-hidden="true" />
                    <h2>Serial Monitor</h2>
                </div>
                <div className="serial-monitor-controls">
                    <span className="serial-monitor-baud">115200 baud</span>
                    <button type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused}>
                        {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
                        {paused ? 'Tiếp tục' : 'Tạm dừng'}
                    </button>
                    <button type="button" onClick={() => setEntries([])} aria-label="Xóa log Serial Monitor">
                        <Trash2 size={14} aria-hidden="true" />
                        Xóa
                    </button>
                </div>
            </div>
            <div ref={outputRef} className="serial-monitor-output" role="log" aria-live="off" tabIndex={0} aria-label="Dữ liệu Serial mô phỏng">
                {entries.length === 0 && <p className="serial-monitor-empty">Chưa có dữ liệu.</p>}
                {entries.map(entry => (
                    <div key={entry.id} className="serial-monitor-line">
                        <time>{entry.time}</time>
                        <span className={entry.high === true ? 'serial-monitor-high' : undefined}>{entry.message}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
