import { useState } from "react";

export default function Seat({
  id,
  isAvailable,
  seatName,
  listOfChosenSeats,
  setListOfChosenSeats,
}) {
  const [isSelected, setIsSelected] = useState(false);

  function handleSeatClick() {
    if (isAvailable === false) {
      alert("Esse assento não está disponível!");
    } else {
      isSelected ? deleteSelectedSeat() : addSelectedSeat();
    }
  }

  function addSelectedSeat() {
    setIsSelected(true);
    const newListOfChosenSeats = [...listOfChosenSeats, { id, seatName }];
    setListOfChosenSeats(newListOfChosenSeats);
  }

  function deleteSelectedSeat() {
    setIsSelected(false);
    const newListOfChosenSeats = listOfChosenSeats.filter(
      (item) => item.id !== id
    );
    setListOfChosenSeats(newListOfChosenSeats);
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
