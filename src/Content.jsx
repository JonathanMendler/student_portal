import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";

export function Content() {
  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
