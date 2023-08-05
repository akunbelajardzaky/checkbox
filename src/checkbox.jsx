import React, { useState } from "react";

const Checkbox = ({ label, isChecked, onChange, image }) => {
  return (
    <div className="flex flex-col space-y-7 text-center items-center justify-center">
      <div className="space-x-10">
        <img src={image} alt={label} width={250} height={250} />
      </div>
      <div className="flex flex-col text-center items-center">
        <input
          className="checkbox checkbox-lg"
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        <label className="text-white text-center">{label}</label>
      </div>
    </div>
  );
};

export default Checkbox;
