import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import AddClub from "./scenes/addclub";
import Club from "./scenes/club";
import Voting from "./scenes/voting";
import DetailClub from "./scenes/detailclub";
import Form from "./scenes/form";
import Pie from "./scenes/pie";
import ToDo from "./scenes/todo";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/club" element={<Club />} />
              <Route path="/addclub" element={<AddClub />} />
              <Route path="/detailclub" element={<DetailClub />} />
              <Route path="/voting" element={<Voting />} />
              <Route path="/form" element={<Form />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/todo" element={<ToDo />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
