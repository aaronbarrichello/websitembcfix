'use client';
import React from "react";

interface SejarahItem {
    title: string;
    description: string;
}

const years: string[] = ["2019", "2020", "2021", "2022 - Seterusnya"];
const sejarahData: SejarahItem[] = [
    {
        title: "MBC Laboratory Berdiri",
        description: "MBC Laboratory didirikan di bawah naungan Kementerian Komunikasi dan Multimedia (KK NCM) dengan fokus pada tiga bidang utama: Cyber Security, Big Data, dan Multimedia."
    },
    {
        title: "Kolaborasi dan Integrasi Pengetahuan",
        description: "MBC Laboratory menjadi wadah kolaboratif bagi peneliti, akademisi, dan profesional."
    },
    {
        title: "Pengembangan Seluruh Divisi",
        description: "MBC Laboratory memantapkan seluruh divisi, melakukan studi mendalam."
    },
    {
        title: "Pusat Penelitian Unggulan",
        description: "MBC Laboratory berkembang menjadi pusat penelitian unggulan."
    }
];

const YearList: React.FC = () => (
    <div>
        {years.map((year, index) => (
            <h1 key={index} className="mb-24 text-gray-300 text-5xl">
                {year}
            </h1>
        ))}
    </div>
);

const SejarahDetails: React.FC = () => (
    <div className="text-gray-300 text-xl">
        {sejarahData.map((item, index) => (
            <div key={index} className="mb-10">
                <h1 className="text-gray-300 text-2xl py-2">{item.title}</h1>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
);

const Sejarah: React.FC = () => (
    <div className="py-20">
        <h1 className="text-white text-5xl font-carmen mb-8 text-center">Sejarah</h1>
        <div className="w-4/5 mx-auto bg-gradient-to-r from-slate-700 to-slate-900 shadow-md rounded-3xl border-t border-b border-black/50 backdrop-blur-lg p-10 mb-40">
            <div className="flex gap-12">
                <YearList />
                <SejarahDetails />
            </div>
        </div>
    </div>
);

export default Sejarah;
