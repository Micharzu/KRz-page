import React, { useState, useRef } from "react";
import SheetSample from "F:/react exc/rsz/rsz-strona/src/assets/sheets/test_pdf.pdf";
import PDFViewer from "pdf-viewer-reactjs";

function Sheets() {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="sheets">
      <h2>NUTY</h2>
      <PDFViewer
        document={{ url: SheetSample }}
        scale={0.8}
        showThumbnail={{ scale: 0.2 }}
      />
    </div>
  );
}

export default Sheets;
