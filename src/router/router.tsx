import { FocusDefault } from "page/Focus";
import Input from "page/Input";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Input />} />
      <Route path="/focus" element={<FocusDefault />} />
      {/* <Route path="/" element={<FocusDefault />} /> */}
    </Routes>
  );
}

export default Router;
