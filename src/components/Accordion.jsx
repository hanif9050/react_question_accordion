import { useState } from "react";
import data from "./data";

data;

const Accordion = () => {
  const [setected, setSetected] = useState(null);
  const [multiSelected, setMultiSelected] = useState(false);
  const [listOfSelection, setListOfSelection] = useState([]);
  const handleClick = (id) => {
    setSetected(id === setected ? null : id);
  };
  const handleMultiSelected = (id) => {
    const listSelected = [...listOfSelection];
    const indexItem = listSelected.indexOf(id);
    if (indexItem === -1) {
      listSelected.push(id);
    } else {
      listSelected.splice(indexItem, 1);
    }
    setListOfSelection(listSelected);
  };
  return (
    <div>
      <button onClick={() => setMultiSelected(!multiSelected)}>
        {multiSelected ? "Enable single selection" : "Enable multi selection"}
      </button>
      <div>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              onClick={() =>
                multiSelected
                  ? handleMultiSelected(item.id)
                  : handleClick(item.id)
              }
              className="bg-orange-800 text-white mb-2 py-4"
            >
              <div>
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {multiSelected
                ? listOfSelection.indexOf(item.id) !== -1 && (
                    <div>{item.answer}</div>
                  )
                : setected === item.id && <div>{item.answer}</div>}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
