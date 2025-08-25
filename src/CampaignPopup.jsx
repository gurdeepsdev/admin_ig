import React, { useEffect, useState } from "react";

const CampaignPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    async function checkCampaign() {
      try {
        const res = await fetch("http://localhost:5200/api/campaign-status");
        const data = await res.json();
        setShowPopup(data.live);
      } catch (error) {
        console.error("Error checking campaign status", error);
      }
    }
    checkCampaign();
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center">
            <h2 className="text-xl font-bold mb-4">Are you 18+ or Above
            </h2>
            {/* <p className="mb-4">Our campaign is live. Click below to see more.</p> */}
            <button
              onClick={() => (window.location.href = "/Alloffers")}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
Yes            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CampaignPopup;
