import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

 function App() {
  const [url, setUrl] = useState("");
  const [showQR, setShowQR] = useState(false);
  const qrRef = useRef(null);

  const handleGenerate = () => {
    if (url.trim() !== "") {
      setShowQR(true);
    }
  };

  const handleDownload = async () => {
    if (!qrRef.current) return;
    const canvas = await html2canvas(qrRef.current);
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">QR Code Generator</h1>

      <input
        type="text"
        placeholder="Paste your URL here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleGenerate}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Generate QR Code
      </button>

      {showQR && (
        <>
          <div
            ref={qrRef}
            className="bg-white p-4 mt-6 rounded-xl shadow-md"
          >
            <QRCode value={url} size={200} />
          </div>

          <button
            onClick={handleDownload}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Download as PNG
          </button>
        </>
      )}
    </div>
  );
}
export default App;