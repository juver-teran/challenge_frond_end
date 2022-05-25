import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";
import ResultPage from "./pages/ResultPage";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <div className="container-scroller" >
                <Header />
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <Routes>
                                <Route path="/" element={<SearchPage/>}/>
                                <Route path="/items" element={<ResultPage/>}/>
                                <Route path="/items/:id" element={<DetailPage/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                        </div>
                        <Footer/> 
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
