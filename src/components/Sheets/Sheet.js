import React, { useState, useEffect } from "react";
import "./sheets-styles/Sheet.css";
import PDFViewer from "pdf-viewer-reactjs";

function Sheets({
  activeSongTitle,
  activeSongDesc,
  activeSongAvailableSheets,
  activeSongAvailableRecording,
  activeSongSheets,
  activeSongRecording,
}) {
  const [numPages, setNumPages] = useState();
  useEffect(() => {});

  return (
    <div className="song">
      <h2 className="song-title">{activeSongTitle}</h2>
      <p className="song-desc">{activeSongDesc}</p>

      {activeSongAvailableSheets ? (
        <div className="active-song-sheets">
          {/* {activeSongSheets} */}
          <PDFViewer
            document={{ url: activeSongSheets }}
            scale={0.8}
            showThumbnail={{ scale: 0.2 }}
            scaleStep={0.1}
            maxScale={1.1}
            minScale={0.8}
            hideRotation={true}
            navigation={{
              css: {
                navbarWrapper: "navbar-wrapper",
                zoomOutBtn: "zoom-btns btn mat-icon",
                zoomInBtn: "zoom-btns btn mat-icon",
                resetZoomBtn: "no-disp",
                previousPageBtn: "page-nav-btns btn mat-icon",
                nextPageBtn: "page-nav-btns btn mat-icon",
                pageIndicator: "page-indicator",
              },
            }}
          />
        </div>
      ) : (
        <div className="active-song-no-sheets not-found-label">
          Nie znaleziono nut
        </div>
      )}
      {activeSongAvailableRecording ? (
        <div className="active-song-recording">
          <h3>Nagranie</h3>
          {/* {activeSongSheets} */}
        </div>
      ) : (
        <div className="active-song-no-recording not-found-label">
          Nie znaleziono nagrania
        </div>
      )}
    </div>
  );
}

export default Sheets;
