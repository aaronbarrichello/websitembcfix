'use client';
import Image from "next/image";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    desc: string;
    image: string;
    url: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Weather Station",
        desc: "Weather station merupakan salah satu proyek unggulan dari divisi Big Data, Adapun proyek yang lainnya yaitu seperti My-Ipond, Project 3, Project 4, dll. Untuk Melihat lebih lanjut silahkan klik dibawah ini.",
        image: "/WebDev/websitembcfix/app/components/Projek/MBC.png",
        url: "/",
    },
    {
        id: 2,
        title: "Cyber Attack and Defense Emulation",
        desc: "Cyber Attack and Defense Emulation merupakan salah satu proyek unggulan dari divisi Big Data, Adapun proyek yang lainnya yaitu seperti My-Ipond, Project 3, Project 4, dll. Untuk Melihat lebih lanjut silahkan klik dibawah ini.",
        image: "/WebDev/websitembcfix/app/components/Projek/NCM.png",
        url: "/",
    },
    {
        id: 3,
        title: "Road Extraction",
        desc: "Road Extraction merupakan salah satu proyek unggulan dari divisi Big Data, Adapun proyek yang lainnya yaitu seperti My-Ipond, Project 3, Project 4, dll. Untuk Melihat lebih lanjut silahkan klik dibawah ini.",
        image: "/WebDev/websitembcfix/app/components/Projek/MBC.png",
        url: "/",
    },
    {
        id: 4,
        title: "Ruins",
        desc: "Ruins merupakan salah satu proyek unggulan dari divisi Big Data, Adapun proyek yang lainnya yaitu seperti My-Ipond, Project 3, Project 4, dll. Untuk Melihat lebih lanjut silahkan klik dibawah ini.",
        image: "/WebDev/websitembcfix/app/components/Projek/NCM.png",
        url: "/",
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mt-12 mb-5 mx-5">
        <div className="flex items-center justify-center h-full bg-gradient-to-r from-gray-200 to-transparent shadow-md rounded-3xl border-t border-b border-black/50 backdrop-blur-lg p-4">
            <div className="flex items-center justify-center overflow-hidden p-10">
                <Image
                    width={256}
                    height={256}
                    src={project.image}
                    alt={project.title}
                />
            </div>
            <h1 className="font-bold text-2xl text-center p-2 text-shadow-lg">{project.title}</h1>
            <p className="flex items-center justify-center text-sm text-center p-2">{project.desc}</p>
            <Link href={project.url} className="absolute left-1/2 bottom-0 mb-8 pr-5 transform -translate-x-1/2">See More</Link>
        </div>
    </div>
);

const ProjectList: React.FC = () => (
    <div className="flex justify-center flex-wrap h-screen">
        {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
    </div>
);

const Projek: React.FC = () => (
    <div>
        <h1 className="flex items-center justify-center text-white text-shadow-lg font-carmen text-4xl mt-20 mb-8 p-8">
            Proyek Kami
        </h1>
        <div className="flex gap-3">
            <ProjectList />
        </div>
    </div>
);

export default Projek;
