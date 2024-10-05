'use client';
import Image from "next/image";
import NCM from "@/app/image/Profile/NCM.png";
import MBC from "@/app/image/Profile/MBC.png";

const ProfileHeader: React.FC = () => (
  <h1 className="bg-gradient-to-r from-gray-400/20 to-white/5 rounded-3xl border-t border-t-white/50 border-b border-b-black/50 backdrop-blur-md text-white text-3xl font-extrabold shadow-lg my-10 p-5">
    Profil
  </h1>
);

const ProfileContent: React.FC = () => (
  <div className="w-4/5 bg-gradient-to-r from-gray-400/20 to-white/5 shadow-md rounded-3xl border-t border-t-white/50 border-b border-b-black/50 backdrop-blur-md p-10">
    <div className="flex justify-center items-center gap-20">
      <Image width={500} height={500} src={NCM} alt="NCM" />
      <Image width={500} height={500} src={MBC} alt="MBC" />
    </div>
    <div className="font-mono text-white">
      MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber Security Laboratory, 
      merupakan salah satu entitas penelitian yang beroperasi di bawah Kementerian Komunikasi 
      dan Multimedia (KK NCM). Fokus utama laboratorium ini adalah mempelajari dan mengembangkan 
      pengetahuan di bidang Cyber Security, Big Data, dan Multimedia.
      <br />
      <br />
      Didirikan pada tanggal 4 Oktober 2019, MBC Laboratory telah menjadi pusat penelitian 
      yang berdedikasi untuk memahami, mengatasi, dan mengembangkan solusi terkini dalam 
      tiga bidang utamanya.
    </div>
  </div>
);

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-blend-darken">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
};

export default Profile;
