import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const outtfit = Outfit({
  subsets: ["latin"],
});

const data = [
  {
    id: 1,
    title: "instagram",
    link: "https://www.instagram.com/adi_sasono30/",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    title: "linkedin",
    link: "https://www.linkedin.com/in/nurhadi-sasono-bb1bbb232/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    title: "github",
    link: "https://www.instagram.com/adi_sasono30/",
    icon: <FaGithub />,
  },
];

const Home = () => {
  return (
    <main
      className={`${outtfit.className} bg-gradient-to-br from-[#abdcff] to-[#0396ff] text-slate-900`}
    >
      <section className="min-h-screen flex flex-col items-center justify-center container mx-auto px-4 py-16 lg:max-w-md">
        <div className="flex flex-col justify-center items-center text-center">
          <Image
            src="/profile.png"
            alt="foto-profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-3xl font-bold  mt-3 text-white">
            Nurhadi Sasono
          </h1>
          <p className="w-3/4 text-white opacity-90">Fullstack Web Developer</p>
        </div>
        <div className="mt-6 flex flex-col gap-3 w-full">
          {data.map(
            (data: { id: number; title: string; link: string; icon: any }) => (
              <Link
                key={data.id}
                href={data.link}
                className="flex items-center gap-3 justify-center w-full text-lg font-semibold border-2 border-white p-3 rounded-lg bg-white/20 shadow-md backdrop-blur-sm text-white hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-200"
              >
                {data.icon}
                {data.title}
              </Link>
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
