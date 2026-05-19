import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToPastes, updatePaste, removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchParams, setSearchParams] = useState("");
  const dispatch = useDispatch();

  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchParams.toLowerCase()),
  );

  function Delete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  function Copy(paste) {
    navigator.clipboard.writeText(paste.content);
    toast.success("Paste content copied to clipboard!");
  }

  function Share(paste) {
    navigator.clipboard.writeText(`${window.location.origin}/?pasteId=${paste.__id}`);
    toast.success("Share link copied to clipboard!");
  }

  return (
    <div className="mt-12 px-6 text-white">
  {/* Search Bar */}
  <input
    type="search"
    placeholder="Search by title..."
    value={searchParams}
    onChange={(e) => setSearchParams(e.target.value)}
    className="w-[40%] px-4 py-2 rounded-lg border border-gray-600 
               bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
  />

  {/* Paste Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    {filteredPastes.length > 0 &&
      filteredPastes.map((paste) => (
        <div
          key={paste.__id}
          className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
        >
          {/* Title */}
          <h2 className="text-xl font-semibold mb-2">{paste.title}</h2>

          {/* Content */}
          <p className="text-gray-300 mb-4 line-clamp-3">{paste.content}</p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              to={`/?pasteId=${paste.__id}`}
              className="px-3 py-1 rounded bg-sky-600 hover:bg-sky-700 transition text-white text-sm"
            >
              Edit
            </Link>
            <Link
              to={`/pastes/${paste.__id}`}
              className="px-3 py-1 rounded bg-green-600 hover:bg-green-700 transition text-white text-sm"
            >
              View
            </Link>
            <button
              onClick={() => Delete(paste?.__id)}
              className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 transition text-white text-sm"
            >
              Delete
            </button>
            <button
              onClick={() => Copy(paste)}
              className="px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-600 transition text-black text-sm"
            >
              Copy
            </button>
            <button
              onClick={() => Share(paste)}
              className="px-3 py-1 rounded bg-purple-600 hover:bg-purple-700 transition text-white text-sm"
            >
              Share
            </button>
          </div>

          {/* Date */}
          <div className="text-xs text-gray-400 mt-4">
  {new Date(paste.createdAt).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
</div>

        </div>
      ))}
  </div>
</div>

  );
};

export default Paste;
