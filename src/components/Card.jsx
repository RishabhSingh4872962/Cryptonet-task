import React from "react";

function UserCard({ user }) {
  return (
<div className="w-full h-screen flex justify-center items-center">
  <div class="border border-black p-4 flex flex-row w-4/5 justify-center items-center  sm:flex-row sm:w-2/3 lg:w-1/3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
    <div class="w-full sm:w-1/4 mb-4 sm:mb-0 flex justify-center">
      <img src={user.picture.large} alt="User" class="border border-black w-2/3  rounded-lg lg:w-max hover:rounded-full transition duration-1000" />
    </div>
    <div class="w-full sm:w-3/4 ml-0 sm:ml-4">
      <p class="text-lg font-bold">{user.name.first} {user.name.last}</p>
      <p class="text-sm"><span className="text-cyan-600 font-bold">Gender:</span> {user.gender}</p>
      <p class="text-sm"><span className="text-cyan-600 font-bold">Phone:</span> {user.phone}</p>
      <p class="text-sm"><span className="text-cyan-600 font-bold">City:</span> {user.location.city}</p>
    </div>
  </div>
</div>
  );
}

export default UserCard;
