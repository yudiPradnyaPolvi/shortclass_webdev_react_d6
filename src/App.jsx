import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import List from './components/List/List'
import Form from './components/Form/Form'
function App() {
  const [count, setCount] = useState(0)
  const todos=[
    {
    id : 1,
    title : "Belajar React",
    description : "Belajar React Hooks, Component, Props, State, Lifecycle",
    complated : false
    },
    {
    id : 2,
    title : "Membuat Aplikasi React",
    description : "Membuat aplikasi TODO List ",
    complated : true
    },
    
    {
    id : 3,
    title : "Membuat Aplikasi Chat",
    description : "Membuat aplikasi chat dengan react dan firebase",
    complated : false
    },
    {
    id : 4,
    title : "Belajar Node.Js",
    description : "Belajar Membuat sever menggunakan Node.js dan Express",
    complated : false
    }

  ]

  return (
    <>
      <div>
        <h1>Daftar Todos </h1>
        {todos.map((form)=>(
          <Form key = {form.id} title = {form.title} description={form.description} complated={form.complated} />
        ))}
       
        

      </div>
    </>
  )
}

export default App
