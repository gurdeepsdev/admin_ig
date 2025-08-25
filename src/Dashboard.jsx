import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5200/api/campaign-status")
      .then((res) => res.json())
      .then((data) => setIsLive(data.live));
  }, []);

  const toggleCampaign = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5200/api/toggle-campaign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ is_live: !isLive }),
    });
    if (res.ok) {
      setIsLive(!isLive);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Campaign Toggle</h1>
      <button
        onClick={toggleCampaign}
        className={`px-6 py-2 rounded text-white ${isLive ? "bg-green-500" : "bg-red-500"}`}
      >
        {isLive ? "Campaign is LIVE (Click to Stop)" : "Campaign is OFF (Click to Start)"}
      </button>
    </div>
  );
}
