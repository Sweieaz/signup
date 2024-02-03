import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CoverPage } from "./pages/CoverPage";
import EventContext from "./context/EventContext";
import RegisterEvents from "./components/RegisterEvents";
import EventPage from "./pages/EventPage";
import UserDetails from "./components/UserDetails";

function App() {
  const [userUpdate, setUserUpdate] = useState([]);

  const addUser = (userData) => {
    setUserUpdate((previousState) => [...previousState, userData]);
  };

  const editUser = (updatedUser) => {
    setUserUpdate((previousState) =>
      previousState.map((user) => {
        return user.id === updatedUser.id ? updatedUser : user;
      })
    );
  };

  return (
    <EventContext.Provider
      value={{ userUpdate, addUser, setUserUpdate, editUser }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<CoverPage />} />
          <Route path="/register" element={<RegisterEvents />} />
          <Route path="/bookings" element={<EventPage />} />
          <Route path="/user/:userId" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </EventContext.Provider>
  );
}

export default App;
