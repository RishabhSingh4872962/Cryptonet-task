import React, { useState, useEffect } from "react";
import UserCard from "./Card";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const data = await response.json();
      setUserData(data.results[0]);
      console.log(data.results[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
