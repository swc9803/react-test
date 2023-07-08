import Header from "./component/Header";
import DayList from "./component/DayList.tsx";
import Day from "./component/Day.tsx";
import CreateWord from "./component/CreateWord.tsx";
import CreateDay from "./component/CreateDay";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from './component/EmptyPage';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<DayList/>} />
                    <Route path="/day/:day" element={<Day/>} />
                    <Route path="/create_word" element={<CreateWord />} />
                    <Route path="/create_day" element={<CreateDay />} />
                    <Route path="*" element={<EmptyPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
