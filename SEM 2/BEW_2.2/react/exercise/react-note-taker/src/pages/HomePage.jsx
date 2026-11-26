import { useState } from "react";
import NoteCard from "../components/NoteCard";

export default function HomePage() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Which time should we pick?",
      category: "Ideas",
    },
    {
      id: 2,
      text: "Project making week",
      category: "Personal",
    },
    {
      id: 3,
      text: "Assignment sheets",
      category: "Work",
    },
  ]);

  return (
    <div className="mx-5">
      <h1>All Notes ({notes.length})</h1>

      <NoteCard notes={notes} />
    </div>
  );
}
