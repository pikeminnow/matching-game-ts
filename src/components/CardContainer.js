import Card from "./Card.js";
import { useState, useEffect } from "react";

function CardContainer({
  decks,
  deckId,
  flippedArray,
  handleFlip,
  matchedArray,
  shuffledDeck,
}) {
  const [faceUpCards, setFaceUpCards] = useState([]);

  useEffect(() => {
    setFaceUpCards([...flippedArray, ...matchedArray]);
  }, [flippedArray, matchedArray]);

  if (shuffledDeck === null) {
    return null; //if the deck isn't populated, do not populate the tableau with cards
  }

  let tableauCards = shuffledDeck.map((card, index) => (
    <Card
      key={`tableau${deckId}${index}`} //fix this later TODO
      card={card}
      faceUpCards={faceUpCards}
      setName={decks[deckId].setName}
      cardBack={decks[deckId].cardBack}
      handleFlip={handleFlip}
    />
  ));

  return <div className="displayWrapper">{tableauCards}</div>;
}

export default CardContainer;
