import React, { useState } from "react";

function Component() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [comment, setComment] = useState("");
  const [foods, setFoods] = useState("");
  const [electronics, setElectronics] = useState("Select any");

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">User Preferences Form </h2>

        <div className="input-group">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <p>Name: {name}</p>
        </div>

        <div className="input-group">
          <label>Age</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
          />
          <p>Age: {age}</p>
        </div>

        <div className="input-group">
          <label>Comments</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter something from your mind..."
          />
          <p>Comments: {comment}</p>
        </div>

        <div className="input-group">
          <label>Favorite Food</label>
          <select value={foods} onChange={(e) => setFoods(e.target.value)}>
            <option value="">Select Food</option>
            <option value="Apple">Apple</option>
            <option value="Orange">Orange</option>
            <option value="Watermelon">Watermelon</option>
          </select>
          <p>Favorite Food: {foods}</p>
        </div>

        <div className="input-group">
          <label>Electronic Item</label>
          <div className="radio-group">
            {["Mobile", "Laptop", "Ipad", "Others"].map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  value={item}
                  checked={electronics === item}
                  onChange={(e) => setElectronics(e.target.value)}
                />
                {item}
              </label>
            ))}
          </div>
          <p>Your Electronic Item: {electronics}</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
