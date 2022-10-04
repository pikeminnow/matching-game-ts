import Card from "./Card.js";

function CardContainer({ deck, flipped, handleFlip, setFlipped, matched, setMatched }) {

  if (!deck) {
    return null; //if the deck isn't populated, do not populate the tableau with cards
  }

  function shuffleDeck(arrDeck) {
    arrDeck = [...arrDeck.cards, ...arrDeck.cards];
    // https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
    for (let i = arrDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrDeck[i], arrDeck[j]] = [arrDeck[j], arrDeck[i]];
    }
    return arrDeck;
  }


  const shuffledCards = shuffleDeck(deck);

  let tableauCards = shuffledCards.map((card, index) => (

    <Card
      key={`tableau${deck.cards.id}${index}`} //fix this later TODO
      card={card}
      setName={deck.setName}
      cardBack={deck.cardBack}
      matched={matched}
      flipped={flipped}
      handleFlip={handleFlip}
      setFlipped={setFlipped}
    />
  ));


  return <div className="displayWrapper">{tableauCards}</div>;

}

export default CardContainer;
