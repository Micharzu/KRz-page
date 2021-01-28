import React from "react";
import "./sheets-styles/Sheet.css";
import PDFViewer from "pdf-viewer-reactjs";
import { useMediaQuery } from "react-responsive";

function Sheets({
  activeSongTitle,
  activeSongDesc,
  activeSongAvailableSheets,
  activeSongAvailableRecording,
  activeSongSheets,
  activeSongRecording,
}) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 950px)" });
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <div className="song">
      <h2 className="song-title">{activeSongTitle}</h2>
      <div className="song-desc">
        <p>{activeSongDesc}</p>
      </div>

      {activeSongAvailableRecording ? (
        <div className="active-song-recording">
          <h3>Nagranie</h3>
          <audio
            className="recording"
            src={activeSongRecording}
            controls
          ></audio>
        </div>
      ) : (
        <div className="active-song-no-recording not-found-label">
          Nie znaleziono nagrania
        </div>
      )}

      {activeSongAvailableSheets ? (
        isBigScreen ? (
          <div className="active-song-sheets">
            {/* big screen */}
            <PDFViewer
              document={{ url: activeSongSheets }}
              scale={0.9}
              showThumbnail={{ scale: 0.2 }}
              scaleStep={0.1}
              maxScale={1.1}
              minScale={0.7}
              hideRotation={true}
              navigation={{
                css: {
                  navbarWrapper: "navbar-wrapper",
                  zoomOutBtn: "zoom-btns btn mat-icon",
                  zoomInBtn: "zoom-btns btn mat-icon",
                  resetZoomBtn: "zoom-btns btn mat-icon",
                  previousPageBtn: "page-nav-btns btn mat-icon",
                  nextPageBtn: "page-nav-btns btn mat-icon",
                  pageIndicator: "page-indicator",
                },
              }}
            />
          </div>
        ) : isMobile ? (
          <div className="active-song-sheets">
            {/* mobile */}
            <PDFViewer
              document={{ url: activeSongSheets }}
              scale={0.5}
              showThumbnail={{ scale: 0.2 }}
              scaleStep={0.1}
              maxScale={1.1}
              minScale={0.4}
              hideRotation={true}
              navigation={{
                css: {
                  navbarWrapper: "navbar-wrapper",
                  zoomOutBtn: "zoom-btns btn mat-icon",
                  zoomInBtn: "zoom-btns btn mat-icon",
                  resetZoomBtn: "zoom-btns btn mat-icon",
                  previousPageBtn: "page-nav-btns btn mat-icon",
                  nextPageBtn: "page-nav-btns btn mat-icon",
                  pageIndicator: "page-indicator",
                },
              }}
            />
          </div>
        ) : (
          <div className="active-song-sheets">
            {/* small screen */}
            <PDFViewer
              document={{ url: activeSongSheets }}
              scale={0.7}
              showThumbnail={false}
              scaleStep={0.1}
              maxScale={1.1}
              minScale={0.5}
              hideRotation={true}
              navigation={{
                css: {
                  navbarWrapper: "navbar-wrapper",
                  zoomOutBtn: "zoom-btns btn mat-icon",
                  zoomInBtn: "zoom-btns btn mat-icon",
                  resetZoomBtn: "zoom-btns btn mat-icon",
                  previousPageBtn: "page-nav-btns btn mat-icon",
                  nextPageBtn: "page-nav-btns btn mat-icon",
                  pageIndicator: "page-indicator",
                },
              }}
            />
          </div>
        )
      ) : (
        <div className="active-song-no-sheets not-found-label">
          Nie znaleziono nut
        </div>
      )}
    </div>
  );
}

export default Sheets;
