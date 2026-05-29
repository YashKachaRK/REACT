import noteContext from "../context/notes/NoteContext";
import { useContext, useState } from "react";

export default function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setnote] = useState({ title: "", description: "", tag: "" });

  const handleAddNote = (e) => {
    e.preventDefault(); // atale page reload no thay
    addNote(note);
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-zinc-900 p-8 rounded-3xl shadow-2xl border border-zinc-800">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mb-2">Add New Note</h1>

        <p className="text-zinc-400 mb-8">
          Save your thoughts quickly and securely.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Note Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter note title..."
              className="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-yellow-400 transition duration-300"
              onChange={onChange}
            />
          </div>

          {/* Tag */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Tag</label>

            <input
              type="text"
              name="tag"
              placeholder="Work, Study, Personal..."
              className="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-yellow-400 transition duration-300"
              onChange={onChange}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              placeholder="Write your note here..."
              className="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-yellow-400 transition duration-300 resize-none"
              onChange={onChange}
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:scale-[1.02] transition duration-300"
            onClick={handleAddNote}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}
