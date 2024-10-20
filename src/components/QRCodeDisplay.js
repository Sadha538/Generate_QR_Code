import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import '../QRCodeDisplay.css';

function QRCodeDisplay({ formData }) {
  const handleLongPress = () => {
    alert('Edit your details.');
  };

  return (
    <div className="qr-container">
      <QRCodeSVG value={JSON.stringify(formData)} size={200} />
      <div onContextMenu={handleLongPress}>
        <p>Long press on the QR code to edit details.</p>
      </div>
    </div>
  );
}

export default QRCodeDisplay;