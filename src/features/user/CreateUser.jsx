import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { addName } from "./userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSetName() {
    if (!name) {
      alert("Enter your name first!");
      return;
    }
    dispatch(addName(name));
    navigate("/");
  }
  return (
    <div className="h-full flex flex-col mt-40 items-center space-y-3">
      <h1>Welcome , Enter your name to start</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-black p-2 rounded px-10"
        type="text"
        placeholder="Enter your name..."
      />
      <Button onClick={handleSetName}>Save and start</Button>
    </div>
  );
}

export default CreateUser;
