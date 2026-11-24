import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([])

  function fetchNotes() {
    axios.get('http://localhost:3000/api/notes')
      .then((res) => {
        setNotes(res.data.notes);
      })
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e){
    e.preventDefault();
    const {title, description}=e.target.elements;
    console.log(title.value, description.value);

    axios.post("http://localhost:3000/api/notes", {
      title: title.value, 
      description: description.value
    })
    .then(res=>{
      console.log(res.data)
      fetchNotes()
    })

  }

  function handleDeleteNote(noteId){
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data);
      fetchNotes()
    })

  }


  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">My Notes</h1>
          <p className="text-slate-400 text-sm mt-1">Create and manage your quick notes</p>
        </header>

        {/* Responsive Dark Note Create Form */}
        <form onSubmit={handleSubmit} className="bg-slate-900 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-800 mb-10 flex flex-col md:flex-row gap-4">
          <input
            name='title'
            type="text"
            placeholder="Enter title"
            className="w-full md:w-1/3 px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-400 focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <input
            name='description'
            type="text"
            placeholder="Enter description"
            className="w-full md:flex-1 px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-400 focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <button
            type="submit"
            className="w-full md:w-auto shrink-0 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white font-semibold px-7 py-3 rounded-xl transition cursor-pointer shadow-md shadow-blue-600/20"
          >
            Create Note
          </button>
        </form>

        {/* Responsive Dark Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => {
            return (
              <div
                key={note._id || index}
                className="bg-slate-900 p-6 rounded-2xl shadow-md border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-bold text-slate-100 mb-2 wrap-break-word">
                    {note.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed wrap-break-word">
                    {note.description}
                  </p>
                  <button onClick={()=>{
                    handleDeleteNote(note._id)}
                    } className="px-3.5 py-1.5 text-xs font-medium text-red-400 bg-red-500/10 hover:bg-red-500/20 hover:text-red-300 border border-red-500/20 rounded-lg transition cursor-pointer">
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default App