import { Pencil, Trash2, Tag } from "lucide-react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

export default function Notes() {
  const context = useContext(noteContext);
  const { note, setNote } = context;

  return (
    <div>
      {note.map((n) => {
        return n.title;
      })}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition duration-300 m-10">
        {/* Top */}

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">React Notes</h2>

            <div className="flex items-center gap-2 mt-2 text-yellow-400 text-sm">
              <Tag size={16} />
              <span>Study</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="bg-zinc-800 p-2 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300">
              <Pencil size={18} />
            </button>

            <button className="bg-zinc-800 p-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
              <Trash2 size={18} />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-400 mt-5 leading-relaxed">
          Learn Context API, React Router, Tailwind CSS, authentication system
          and backend integration using MERN stack project.
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-xs text-zinc-500">28 May 2026</span>

          <button className="text-yellow-400 text-sm hover:underline">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
