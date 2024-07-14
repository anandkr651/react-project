import { useEffect, useState } from "react";
import Card from "./Card";

function Github() {
  const [userName, setUserName] = useState("anandkr651");
  const [userData, setUserData] = useState(null);

  async function fetchurl() {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setUserData(data);
  }

  function handleClick() {
    fetchurl();
  }

  useEffect(() => {
    fetchurl();
  }, []);
  return (
    <div className="flex flex-col place-items-center dark:bg-black p-7">
      <div>
        <input
          type="text"
          name="github profile finder"
          placeholder="Enter Your Github UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mr-3 border-2  hover:border-cyan-400"
        />
        <button className="border-2  hover:border-cyan-400 " onClick={handleClick}>Search</button>
      </div>
      <div>
        <Card user={userData} />
      </div>
    </div>
  );
}

export default Github;
