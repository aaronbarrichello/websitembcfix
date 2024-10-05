'use client';
import React from 'react';

const Visi: React.FC = () => (
  <div className="section mb-12">
    <h1 className="section-title text-gray-300 text-3xl font-bold mb-4">Visi</h1>
    <div className="section-content text-gray-300 text-lg">
      Menjadi Laboratorium unggulan dalam pengembangan teknologi Multimedia Application, Big Data, dan Cybersecurity dengan mendorong eksplorasi dan merancang riset yang memberikan dampak positif dan mengikuti perkembangan teknologi masa kini serta menjadi lingkungan yang membentuk, mematangkan, dan mempersiapkan skill asisten MBC Laboratory agar dapat bersaing di Industri.
      <br />
      -- Kawah Candradimuka
    </div>
  </div>
);

const Misi: React.FC = () => (
  <div className="section">
    <h1 className="section-title text-gray-300 text-3xl font-bold mb-4">Misi</h1>
    <div className="section-content text-gray-300 text-lg">
      1. Menjadi lingkungan yang mendukung pembelajaran dan penelitian jangka panjang.
      <br />2. Menciptakan lingkungan yang fokus pada pertumbuhan pribadi dan profesional serta mendukung career
      <br />3. Menjadi pusat informasi Teknologi, Multimedia, dan Softskill yang berguna bagi mahasiswa
      <br />
      <br />“Work Life Balance bukan berarti melakukan sesuatu secara singkat namun efektif”
    </div>
  </div>
);

const Beranda: React.FC = () => (
  <div className="container flex flex-col items-center text-center py-20 bg-slate-700 text-white">
    <h1 className="title text-5xl font-black text-white mb-12">Visi & Misi</h1>
    <div className="content w-4/5 bg-gradient-to-r from-gray-300/10 to-white/5 shadow-lg rounded-3xl border-t border-gray-200 border-b border-black/50 backdrop-blur-lg p-12">
      <Visi />
      <Misi />
    </div>
  </div>
);

export default Beranda;
