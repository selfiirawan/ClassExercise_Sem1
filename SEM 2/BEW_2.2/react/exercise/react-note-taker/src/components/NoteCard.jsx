export default function NoteCard({ notes }) {
  return (
    <div className="row">
      {notes.map((note) => (
        <div class="sm:col-4 mb-3 sm:mb-0">
          <div className="card bg-white">
            <div className="card-body">
              <p className="card-title">{note.text}</p>
              <p>{note.category}</p>
              <button className="btn-solid theme-primary">Edit</button>
              <button className="btn-solid theme-danger">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
