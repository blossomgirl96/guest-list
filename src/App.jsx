import { useState, useEffect } from "react";
import { fetchGuests, fetchGuest } from "./api";
import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";
import "./index.css";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  useEffect(() => {
    async function loadGuests() {
      const data = await fetchGuests();
      setGuests(data);
    }
    loadGuests();
  }, []);

  useEffect(() => {
    if (!selectedGuest?.id) return;
    async function loadGuest() {
      const data = await fetchGuest(selectedGuest.id);
      setSelectedGuest(data);
    }
    loadGuest();
  }, [selectedGuest?.id]);

  function handleSelect(id) {
    setSelectedGuest({ id });
  }

  function handleBack() {
    setSelectedGuest(null);
  }

  return (
    <>
      <header>
        <h1>Guest List</h1>
      </header>
      <main>
        {selectedGuest?.name ? (
          <GuestDetails guest={selectedGuest} onBack={handleBack} />
        ) : (
          <GuestList guests={guests} onSelect={handleSelect} />
        )}
      </main>
    </>
  );
}
