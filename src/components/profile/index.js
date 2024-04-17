import React from "react";
import Image from "next/image";

const Profile = ({ image }) => {
  const imageName = "./profile.png".split("/").pop().split(".")[0];

  return (
    <div className={`flex justify-center items-center gap-3`}>
      <div className="">
        <Image
          src={image}
          width={40}
          height={40}
          alt={`${imageName && "profile picture"}`}
        />
      </div>
      <p className="text-sm text-slate-900">List my top 10 accounts</p>
    </div>
  );
};

export default Profile;
