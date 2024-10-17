import { Routes, Route } from "react-router-dom"
import MainHome from "./homepage/mainHome"
import Header from "./homepage/header/header"
import './App.css';

export default function App() {
  return (
<div className="min-h-screen bg-gradient-to-r from-purple-50">
<Header />

<div className="w-[90%] mx-auto overflow-hidden ">
     <Routes>
      <Route path="/" element={<MainHome/>} />
      {/* <Route path="/pricing" element={<Pricing />} /> */}
    </Routes>
 </div>
</div>
  )
}