import React, { useState } from "react";
import SheetSample from "F:/react exc/rsz/rsz-strona/src/assets/sheets/test_pdf.pdf";
import "./sheets-styles/SheetList.css";
import Sheet from "./Sheet";
function SheetList() {
  const songList = [
    {
      id: 0,
      title: "qqqq",
      desc: "Masterpiece",
      availableSheets: true,
      availableRecording: false,
      sheets: SheetSample,
      recording: null,
    },
    {
      id: 1,
      title: "www",
      desc: "Garbo",
      availableSheets: true,
      availableRecording: false,
      sheets: SheetSample,
      recording: null,
    },
    {
      id: 2,
      title: "eeeee",
      desc: "Yuck",
      availableSheets: false,
      availableRecording: false,
      sheets: null,
      recording: null,
    },
  ];
  const [activeSong, setActiveSong] = useState();

  return (
    <div className="sheets">
      <div className="song-list">
        {songList &&
          songList.map((song) => (
            <div
              key={song.id}
              className="song-list-item"
              onClick={() => setActiveSong(song)}
            >
              {song.title}
            </div>
          ))}
      </div>
      <div className="active-song">
        {activeSong && (
          <Sheet
            activeSongTitle={activeSong.title}
            activeSongDesc={activeSong.desc}
            activeSongAvailableSheets={activeSong.availableSheets}
            activeSongAvailableRecording={activeSong.availableRecording}
            activeSongSheets={activeSong.sheets}
            activeSongRecording={activeSong.recording}
          />
        )}
      </div>
    </div>
  );
}

export default SheetList;
