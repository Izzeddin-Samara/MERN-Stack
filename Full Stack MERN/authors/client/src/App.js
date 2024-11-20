import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddAuthor from './components/AddAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import AuthorDetails from './components/AuthorDetails';
import AllAuthors from './components/AllAuthors';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/authors" element={<AllAuthors />} />
                    <Route path="/authors/:id" element={<AuthorDetails />} />
                    <Route path="/authors/update/:id" element={<UpdateAuthor />} />
                    <Route path="/authors/new" element={<AddAuthor />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;