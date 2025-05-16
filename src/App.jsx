import React, { useState } from "react";
import QRCode from "react-qr-code"; // ✅ this works with Vite

function App() {
  const [url, setUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const handleGenerate = () => {
    if (url.trim()) {
      setGeneratedUrl(url);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">QR Code Generator</h1>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleGenerate}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
        >
          Generate QR Code
        </button>
        {generatedUrl && (
          <div className="flex justify-center bg-white p-4">
            <QRCode value={generatedUrl} size={200} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
