import React, { useState } from "react";
import Checkbox from "./checkbox";
import Navbar from "./navbar";

const Vote = () => {
  const [checkedBoxes, setCheckedBoxes] = useState([]);
  const Kandidat = {
    andi: "Andi",
    budi: "Budi",
    cindy: "Cindy",
    dedi: "Dedi",
    erika: "Erika",
    fajar: "Fajar",
    gita: "Gita",
    hendra: "Hendra",
    ina: "Ina",
    joko: "Joko",
    kiki: "Kiki",
    lisa: "Lisa",
    miko: "Miko",
    nina: "Nina",
    oscar: "Oscar",
    putri: "Putri",
    rudy: "Rudy",
    sinta: "Sinta",
    tony: "Tony",
    vera: "Vera",
  };
  const ImageKandidat = {
    andi: "https://source.unsplash.com/random/?human",
    budi: "https://source.unsplash.com/random/?pc",
    cindy: "https://source.unsplash.com/random/?house",
    dedi: "https://source.unsplash.com/random/?game",
    erika: "https://source.unsplash.com/random/?windows",
    fajar: "https://source.unsplash.com/random/?door",
    gita: "https://source.unsplash.com/random/?school",
    hendra: "https://source.unsplash.com/random/?aqua",
    ina: "https://source.unsplash.com/random/?mac",
    joko: "https://source.unsplash.com/random/?car",
    kiki: "https://source.unsplash.com/random/?motorcylce",
    lisa: "https://source.unsplash.com/random/?fan",
    miko: "https://source.unsplash.com/random/?kayboard",
    nina: "https://source.unsplash.com/random/?deskmat",
    oscar: "https://source.unsplash.com/random/?laptop",
    putri: "https://source.unsplash.com/random/?iphone",
    rudy: "https://source.unsplash.com/random/?glass",
    sinta: "https://source.unsplash.com/random/?headphones",
    tony: "https://source.unsplash.com/random/?floor",
    vera: "https://source.unsplash.com/random/?cat",
  };

  const handleCheckboxChange = (label) => {
    if (checkedBoxes.includes(label)) {
      setCheckedBoxes(checkedBoxes.filter((box) => box !== label));
    } else if (checkedBoxes.length < 7) {
      setCheckedBoxes([...checkedBoxes, label]);
    }
  };

  return (
    <div className="bg-w">
      <Navbar />
      <div className="space-y-24">
        <div className="flex flex-row flex-wrap text-xl space-y-10 items-center justify-center  space-x-16 mt-10">
          {/* {Array.from(Array(20).keys()).map((i) => (
            <Checkbox
              key={i}
              image={ImageKandidat}
              label={`${Kandidat[Object.keys(Kandidat)[i % 21]]}  ${i + 1}`}
              isChecked={checkedBoxes.includes(`Checkbox ${i + 1}`)}
              onChange={() => handleCheckboxChange(`Checkbox ${i + 1}`)}
            />
          ))} */}
          {Object.keys(Kandidat).map((kandidatKey) => (
            <Checkbox
              key={kandidatKey}
              image={ImageKandidat[kandidatKey]}
              label={`${Kandidat[kandidatKey]}`}
              isChecked={checkedBoxes.includes(`Checkbox ${kandidatKey}`)}
              onChange={() => handleCheckboxChange(`Checkbox ${kandidatKey}`)}
            />
          ))}
        </div>
      </div>
      <div className="mt-24 items-center text-center mb-20">
        <button className="btn btn-active btn-accent">Vote now</button>
      </div>
    </div>
  );
};

export default Vote;
