import { useState } from "react";

function Card({ card, cardBack, faceUpCards, handleFlip }) {

  const [flipped, setFlipped] = useState(false);
  if (faceUpCards.length > 0) {
    console.log({ card, cardBack, faceUpCards, handleFlip, flipped })
  }


  if (flipped === false) {
    if (faceUpCards.includes(card.flippedid)) {
      setFlipped(true);
    } else {
    }
  }

  if (flipped === true) {
    if (faceUpCards.includes(card.flippedid)) {
    } else {
      setFlipped(false);
    }
  }

  return (
    <img
      className="card"
      // cardid={card.id} //adds card value to event for handleflip
      // flippedid={card.flippedid} //adds card id to event for handleflip
      src={flipped ? card.image : cardBack}
      alt={card.alt}
      onClick={
        flipped
          ? null
          : (event) => {
            handleFlip(event, card.id, card.flippedid);
          }
      }
    />
  );
}

export default Card;
