// src/App.js
import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movie/:id" element={<MovieModal />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
