export default function GuestList({ guests, onSelect }) {
  return (
    <ul className="guest-list">
      {guests.map((guest) => (
        <li key={guest.id} onClick={() => onSelect(guest.id)}>
          <strong>{guest.name}</strong>
          <span>{guest.email}</span>
        </li>
      ))}
    </ul>
  );
}
