import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");

  const [youTip, setYouTip] = useState(0);
  const [yourFriendsTip, setYourFriendsTip] = useState(0);

  function handleReset() {
    setYourFriendsTip(0);
    setBill("");
    setYouTip(0);
  }
  return (
    <div>
      <Bill bill={bill} onBillChange={setBill} />
      <Tip tip={youTip} onTipChange={setYouTip}>
        {" "}
        <label>How satisfied are you with the service??</label>
      </Tip>
      <Tip tip={yourFriendsTip} onTipChange={setYourFriendsTip}>
        {" "}
        <label>How satisfied is you're Friend with the service??</label>
      </Tip>
      {bill > 0 && (
        <>
          <Output bill={bill} youTip={youTip} yourFriendsTip={yourFriendsTip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onBillChange }) {
  return (
    <div>
      <label>How much is the Bill?</label>
      <input
        type="text"
        value={bill}
        placeholder="Enter bill value"
        onChange={(e) => onBillChange(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Tip({ children, tip, onTipChange }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => onTipChange(e.target.value)}>
        <option value="15">Very much satisfied 15%</option>
        <option value="10">Little satisfied 10%</option>
        <option value="5">Little dissatisfied 5%</option>
        <option value="0">Very much dissatisfied 0%</option>
      </select>
    </div>
  );
}

function Output({ youTip, bill, yourFriendsTip }) {
  const tip = (youTip / 100) * bill + (yourFriendsTip / 100) * bill;
  const pay = bill + tip;

  return (
    <p>
      Bill: {bill} + Tip :{tip}
      <br></br>
      The total pay is {pay}
    </p>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
