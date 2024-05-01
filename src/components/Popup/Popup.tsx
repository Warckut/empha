import "./popup.scss";

interface PopupProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

function Popup({ isOpen, message, onClose }: PopupProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup__content">
        <span className="popup__message">{message}</span>
        <button className="popup__close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default Popup;
