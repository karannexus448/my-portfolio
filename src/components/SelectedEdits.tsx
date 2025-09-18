import React from "react";
import VideoEmbed from "./VideoEmbed";

const SelectedEdits: React.FC = () => {
  return (
    <section className="selected-edits">
      <h2 className="text-2xl font-bold mb-6">Selected Edits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cinematic Promo */}
        <div className="edit-card shadow-lg rounded-lg overflow-hidden">
          <VideoEmbed
            src="https://player.vimeo.com/video/1117083402?badge=0&autopause=0&player_id=0&app_id=58479"
            title="Cinematic Promo Production"
          />
        </div>

        {/* Baaki edits ke cards yaha add karte jao */}
      </div>
    </section>
  );
};

export default SelectedEdits;
