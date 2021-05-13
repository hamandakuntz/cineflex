import { useState } from "react";

export default function Seat({ isAvailable, seatName }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleSeatClick() {
    if(isAvailable === false) {
        alert("Esse assento não está disponível!")
    } else {
        isSelected ? setIsSelected(false) : setIsSelected(true);
    }    
  }

  return (
    <div
      className={`seat ${
        isSelected
          ? "selected-seat"
          : isAvailable
          ? "available-seat"
          : "unavailable-seat"
      }`}
      onClick={handleSeatClick}
    >
      <div>{seatName}</div>
    </div>
  );
}
