import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToPastes, updatePaste } from "../redux/pasteSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p.__id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      __id: pasteId || Date.now().toString(30),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // update paste
      dispatch(updatePaste(paste));
    } else {
      // create paste
      dispatch(addToPastes(paste));
    }
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="text-white mt-10 max-w-3xl mx-auto">
      {/* Input + Button Row */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[40%] px-4 py-2 rounded-lg border border-gray-700 
                 bg-gray-800 text-white shadow-sm focus:outline-none 
                 focus:ring-2 focus:ring-sky-500 transition"
        />
        <button
          onClick={createPaste}
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold 
                 py-2 px-6 rounded-lg shadow-md transition-transform 
                 duration-200 hover:scale-105"
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>

      {/* Textarea */}
      <div>
        <textarea
          placeholder="Enter Content..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-72 p-4 border border-gray-700 rounded-lg 
                 bg-gray-900 text-white shadow-sm focus:outline-none 
                 focus:ring-2 focus:ring-sky-500 transition"
        />
      </div>
    </div>
  );
};

export default Home;
