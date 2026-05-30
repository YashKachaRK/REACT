import { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes();
  }, []);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const handleClick = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag);

    setShowModal(false);
  };
  const [showModal, setShowModal] = useState(false);

  const updateNote = (currentNote) => {
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
    setShowModal(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((n) => {
          return <NoteItem key={n._id} note={n} updateNote={updateNote} />;
        })}
      </div>

      {/* Model Edit */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-gray-900 text-white w-full max-w-md rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Edit Note</h2>

            <div className="space-y-4">
              <input
                type="text"
                value={note.etitle}
                onChange={(e) => {
                  setNote({ ...note, etitle: e.target.value });
                }}
                placeholder="Enter title"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 outline-none"
              />

              <textarea
                rows="4"
                value={note.edescription}
                onChange={(e) => {
                  setNote({ ...note, edescription: e.target.value });
                }}
                placeholder="Enter description"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 outline-none"
              />

              <input
                type="text"
                value={note.etag}
                onChange={(e) => {
                  setNote({ ...note, etag: e.target.value });
                }}
                placeholder="Enter tag"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 outline-none"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
