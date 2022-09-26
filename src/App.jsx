import "./App.scss";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import Layout from "./components/Layout";
import Content from "./Content";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import ForHim from "./pages/forHim/ForHim";
import ForHer from "./pages/forHer/ForHer";
import Accessories from "./pages/accessories/Accessories";
import All from "./pages/all/All";
import NotFound from "./pages/notFound/NotFound";
import useToggleTheme from "./hooks/useToggleTheme";

function App() {
  useToggleTheme();
  return (
    
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/for-him" element={<ForHim />} />
          <Route path="/for-her" element={<ForHer />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/all" element={<All />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
