import { useEffect, useState } from "react";

export default function Profile() {


  const [user] = useState({
    name: localStorage.getItem("name"),
    emailid: localStorage.getItem("emailid"),
  });

 

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>

        <p className="mb-2">
          <span className="text-yellow-400">Name:</span> {user.name}
        </p>

        <p>
          <span className="text-yellow-400">Email:</span> {user.emailid}
        </p>
      </div>
    </div>
  );
}
