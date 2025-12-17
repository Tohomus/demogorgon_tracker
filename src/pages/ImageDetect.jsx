import { useEffect, useRef, useState } from "react";
import Button from "../components/common/Button";

export default function ImageDetect() {
  const videoRef = useRef(null);
  const [file, setFile] = useState(null);

  // Start live camera
  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied");
      }
    }
    startCamera();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please choose an image first");
      return;
    }

    // Placeholder for backend integration
    // const formData = new FormData();
    // formData.append("image", file);
    // await api.post("/image", formData);

    alert("Image uploaded for detection");
  };

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      <h2 className="text-2xl mb-6 text-center">
        Image Detection
      </h2>

      {/* LIVE CAMERA FEED */}
      <div className="mb-8">
        <p className="text-sm text-slate-400 mb-3 text-center">
          Live Camera Feed
        </p>

        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-slate-700">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />

          <div className="absolute top-2 left-2 bg-black/60 text-xs px-2 py-1 rounded">
            CAMERA
          </div>
        </div>
      </div>

      {/* FILE UPLOAD SECTION */}
      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
        <p className="text-sm text-slate-300 mb-4 text-center">
          Or upload an image
        </p>

        <div className="flex flex-col items-center gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="
              w-full max-w-xs
              text-sm text-slate-300
              file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0
              file:text-sm file:font-semibold
              file:bg-slate-700 file:text-white
              hover:file:bg-slate-600
            "
          />

          <Button
            text="Upload & Detect"
            onClick={handleUpload}
          />

          {file && (
            <p className="text-xs text-slate-400">
              Selected: {file.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
