import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p.__id === id);

  if (!paste) {
    return <div className="text-white mt-6">Paste not found</div>;
  }

  return (
    <div>
      <div className="text-white mt-6">
        <div className="flex items-center gap-12 mb-8">
          <input
            type="text"
            placeholder="Enter Title here..."
            value={paste.title}
            disabled
            className="w-[30%] px-4 py-2 ml-80 rounded-lg border border-gray-500 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-row gap-7 place-content-evenly">
          <textarea
            placeholder="Enter Content here..."
            value={paste.content}
            disabled
            className="p-2 border-2 border-gray-500 rounded min-w-128 min-h-85 mt-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
