import React, { useState, useEffect, useRef } from "react";
import SheetSample from "F:/react exc/rsz/rsz-strona/src/assets/sheets/test_pdf.pdf";
import "./sheets-styles/SheetList.css";
import Sheet from "./Sheet";
import { BsMusicNoteList as SongListIcon } from "react-icons/bs";
import { IconContext } from "react-icons";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

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
    {
      id: 3,
      title: "eeeee",
      desc: "Yuck",
      availableSheets: false,
      availableRecording: false,
      sheets: null,
      recording: null,
    },
    {
      id: 4,
      title: "eeeee",
      desc: "Yuck",
      availableSheets: false,
      availableRecording: false,
      sheets: null,
      recording: null,
    },
    {
      id: 5,
      title: "eeeee",
      desc: "Yuck",
      availableSheets: false,
      availableRecording: false,
      sheets: null,
      recording: null,
    },
    {
      id: 6,
      title: "eeeee",
      desc: "Yuck",
      availableSheets: false,
      availableRecording: false,
      sheets: null,
      recording: null,
    },
    {
      id: 7,
      title: "eeeee",
      desc: "Yuck",
      availableSheets: false,
      availableRecording: false,
      sheets: null,
      recording: null,
    },
    {
      id: 8,
      title: "eeeee",
      desc: "Yuck",
      availableSheets: false,
      availableRecording: false,
      sheets: null,
      recording: null,
    },
    {
      id: 9,
      title: "eeeee",
      desc: "Yuck",
      availableSheets: false,
      availableRecording: false,
      sheets: null,
      recording: null,
    },
    {
      id: 10,
      title: "eeeee",
      desc: "Yuck",
      availableSheets: false,
      availableRecording: false,
      sheets: null,
      recording: null,
    },
    {
      id: 11,
      title: "eeeee",
      desc: "Yuck",
      availableSheets: false,
      availableRecording: false,
      sheets: null,
      recording: null,
    },
    {
      id: 12,
      title: "eeeee",
      desc: "Yuck",
      availableSheets: false,
      availableRecording: false,
      sheets: null,
      recording: null,
    },
  ];

  const [activeSong, setActiveSong] = useState();
  const [listIsOpened, setListIsOpened] = useState(false);
  const [baseContentHeight, setBaseContentHeight] = useState();
  const [newContent, setNewContent] = useState();
  const listRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    setBaseContentHeight(document.querySelector(".content").offsetHeight);
    setNewContent(document.querySelector(".content"));
  }, []);

  useEffect(() => {
    let offset = Math.ceil((baseContentHeight * 3) / 100) - 0.5;
    listRef.current.classList.toggle("opened");
    buttonRef.current.classList.toggle("opened");

    if (baseContentHeight && window.pageYOffset > offset) {
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    if (listIsOpened) {
      disableBodyScroll(listRef.current);
    } else {
      clearAllBodyScrollLocks();
    }
    setListHeight();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listIsOpened]);

  useEffect(() => {
    setListHeight();
    listRef.current.classList.remove("opened");
    buttonRef.current.classList.remove("opened");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSong]);

  const setListHeight = () => {
    if (newContent && baseContentHeight) {
      if (newContent.offsetHeight > baseContentHeight) {
        listRef.current.style.maxHeight = "89.5%";
      } else {
        listRef.current.style.maxHeight = "81.5%";
      }
    }
  };

  return (
    <div className="sheet-list">
      <div className="song-list-menu" ref={buttonRef}>
        <IconContext.Provider
          value={{ size: "2em", color: "rgb(208, 223, 255)" }}
        >
          <SongListIcon
            className="song-list-icon"
            onClick={() => setListIsOpened(!listIsOpened)}
          />
        </IconContext.Provider>
      </div>
      <div className="sheets">
        <div className="song-list" ref={listRef}>
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
    </div>
  );
}

export default SheetList;
