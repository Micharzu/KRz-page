import React, { useState, useEffect, useRef } from "react";
import SheetSample from "F:/react exc/rsz/rsz-strona/src/assets/sheets/test_pdf.pdf";
import AudioSample from "../../assets/audio/test_mp3.mp3";
import "./sheets-styles/SheetList.css";
import Sheet from "./Sheet";
import { BsMusicNoteList as SongListIcon } from "react-icons/bs";
import { IconContext } from "react-icons";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

function SheetList() {
  const songList = [
    {
      id: 0,
      title: "Masterpiece",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      availableSheets: true,
      availableRecording: true,
      sheets: SheetSample,
      recording: AudioSample,
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
  const [initialRender, setInitialRender] = useState(true);
  const listRef = useRef();
  const buttonRef = useRef();

  const body = document.querySelector("body");
  const nav = document.querySelector(".nav-items");

  useEffect(() => {
    setBaseContentHeight(document.querySelector(".content").offsetHeight);
    setNewContent(document.querySelector(".content"));
  }, []);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      let offset = Math.ceil((baseContentHeight * 3) / 100) - 0.5;

      listRef.current.classList.toggle("opened");
      buttonRef.current.classList.toggle("opened");

      if (listIsOpened) {
        if (baseContentHeight && window.pageYOffset > offset) {
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
        if (newContent && baseContentHeight) {
          if (newContent.offsetHeight > baseContentHeight) {
            body.style.paddingRight = "16px";
            nav.classList.add("no-scrollbar");
          }
        }
        disableBodyScroll(listRef.current);
      } else {
        if (newContent && baseContentHeight) {
          body.style.paddingRight = "0";
          nav.classList.remove("no-scrollbar");
        }
        clearAllBodyScrollLocks();
      }
      setListHeight();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listIsOpened]);

  useEffect(() => {
    setListHeight();
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
        <div className="song-list big-screen" ref={listRef}>
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
        <div className="song-list small-screen" ref={listRef}>
          {songList &&
            songList.map((song) => (
              <div
                key={song.id}
                className="song-list-item"
                onClick={() => {
                  setActiveSong(song);
                  setListIsOpened(false);
                }}
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
