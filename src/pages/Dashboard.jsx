import { useState } from "react";
import { DETECTION_STATES } from "../types/detection";
import ThermalCard from "../components/detection/ThermalCard";
import ImageCard from "../components/detection/ImageCard";
import AudioCard from "../components/detection/AudioCard";
import PageWrapper from "../components/layout/PageWrapper";

export default function Dashboard() {
  const [audioStatus, setAudioStatus] = useState(DETECTION_STATES.IDLE);
  const [imageStatus, setImageStatus] = useState(DETECTION_STATES.IDLE);
  const [thermalStatus, setThermalStatus] = useState(DETECTION_STATES.IDLE);

  return (
    <PageWrapper>
      <div className="p-6 md:p-10">
        <h2 className="text-4xl font-bold mb-6 text-center text-red-400 system-title">
          Detection Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ThermalCard status={thermalStatus} />
          <ImageCard status={imageStatus} />
          <AudioCard status={audioStatus} />
        </div>
      </div>
    </PageWrapper>
  );
}
