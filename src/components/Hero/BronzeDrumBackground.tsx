import bronzeDrumUrl from '../../assets/trong_dong.svg';

export const BronzeDrumBackground = () => (
    <div className="bronze-drum-background" aria-hidden="true">
        <img
            className="bronze-drum"
            src={bronzeDrumUrl}
            alt=""
            draggable={false}
        />
    </div>
);
