
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about me");
  const [images, setImages] = useState([
    "/img/1.avif",
    "/img/2.avif",
    "/img/3.avif",
    "/img/4.avif",
    "/img/5.avif",
    "/img/6.avif",
    "/img/7.avif",
    "/img/8.avif",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide controls
  const nextSlide = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const addImage = () => {
    const newImage = `/img/${images.length + 1}.avif`;
    setImages([...images, newImage]);
  };

  return (
    <div className="min-h-screen bg-[#272c31] flex items-center justify-center p-8">
      <div className="w-full max-w-5xl flex flex-col gap-10">

        {/* Profile Widget */}
        <div className="bg-[#363c43] rounded-3xl shadow-xl p-8 border border-gray-800 text-white">
          <div className="flex items-center gap-4 mb-6">

            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#171717] to-[#4a5157] flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(54,60,67,0.6)]">
              RA
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Riyaj Ahmad</h2>
              <p className="text-gray-400">Frontend Developer</p>
            </div>
          </div>

          {/* Sliding Tabs */}
          <div className="relative flex justify-center bg-[#171717] rounded-full p-2 w-[520px] mx-auto mb-10 shadow-lg">
            {/* Animated Background Slider */}
            <div
              className={`absolute top-[6px] left-[6px] h-[44px] w-[160px] rounded-full bg-[#363c43] transition-transform duration-700 ease-in-out`}
              style={{
                transform:
                  activeTab === "about me"
                    ? "translateX(0px)"
                    : activeTab === "experiences"
                      ? "translateX(172px)"
                      : "translateX(344px)",
              }}
            ></div>

            {/* Buttons */}
            {["about me", "experiences", "recommended"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 w-[160px] py-2.5 rounded-full text-base font-medium capitalize transition-all duration-700 ease-in-out ${activeTab === tab ? "text-white" : "text-gray-400"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>




          {/* TAB CONTENT */}
          <div className="transition-all duration-700 ease-in-out">
            {activeTab === "about me" && (
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Hi, I’m <span className="text-white font-semibold">Riyaj Ahmad</span>, a frontend developer passionate about
                  creating clean, elegant, and interactive user interfaces. I specialize in
                  building modern web applications using <span className="text-indigo-400">React.js</span>,
                  <span className="text-indigo-400"> Next.js</span>, and <span className="text-indigo-400">Tailwind CSS</span>.
                </p>
                <p>
                  I love transforming complex problems into simple, beautiful, and intuitive designs.
                  My goal is to build digital experiences that not only look great but also feel effortless to use.
                </p>
                <p>
                  When I’m not coding, you’ll find me exploring new design systems, improving animations,
                  or learning about backend integrations with Node.js.
                </p>
              </div>
            )}

            {activeTab === "experiences" && (
              <div className="text-gray-300 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">Frontend Developer Intern — Webify Tech (Jan 2024 - May 2024)</h3>
                  <ul className="list-disc list-inside space-y-1 ml-3">
                    <li>Developed responsive React components and reusable UI layouts.</li>
                    <li>Implemented dynamic data rendering using APIs and custom hooks.</li>
                    <li>Collaborated with designers to improve UX consistency across devices.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">Personal Projects</h3>
                  <ul className="list-disc list-inside space-y-1 ml-3">
                    <li>Built an interactive photo gallery app with image transitions and filtering.</li>
                    <li>Created a modern portfolio website showcasing animations and theme switchers.</li>
                    <li>Contributed to open-source Tailwind components and shared UI templates.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "recommended" && (
              <div className="space-y-4 text-gray-300">
                <div className="bg-[#171717] p-4 rounded-xl shadow-inner">
                  <p className="italic">
                    “Riyaj is one of the most dedicated developers I’ve worked with.
                    His attention to detail and sense of design make every project better.”
                  </p>
                  <p className="text-sm text-gray-500 mt-2">– Senior Developer, ABC Solutions</p>
                </div>

                <div className="bg-[#171717] p-4 rounded-xl shadow-inner">
                  <p className="italic">
                    “He quickly adapts to new frameworks and consistently delivers
                    high-quality, maintainable code.”
                  </p>
                  <p className="text-sm text-gray-500 mt-2">– UI/UX Designer, Webify Tech</p>
                </div>

                <div className="bg-[#171717] p-4 rounded-xl shadow-inner">
                  <p className="italic">
                    “A team player with great communication skills — Riyaj always
                    brings creative energy and practical solutions.”
                  </p>
                  <p className="text-sm text-gray-500 mt-2">– Project Manager, DevMatrix</p>
                </div>
              </div>
            )}
          </div>


        </div>

        {/* Gallery Section */}
        <div className="bg-[#363c43] rounded-3xl shadow-lg p-8 border border-[#2a2a2a] text-white transition-all duration-500">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="bg-[#171717] px-6 py-2 rounded-full text-white font-semibold text-lg shadow-inner">
              Gallery
            </div>

            <div className="flex items-center gap-3">

              <button
                onClick={addImage}
                className="relative flex items-center gap-2 
                bg-gradient-to-br from-[#171717] to-[#4a5157] 
                text-white px-6 py-2.5 rounded-xl text-sm font-medium
                shadow-[0_0_20px_rgba(54,60,67,0.6)]
                transition-all duration-500 ease-in-out
                hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]
                hover:scale-105 hover:from-[#4a5157] hover:to-[#363c43]"
              >
                <Plus size={18} className="text-white" /> ADD IMAGE
              </button>

              <button
                onClick={prevSlide}
                className="bg-[#202225] hover:bg-gray-700 text-[#bdc2c5] p-3 rounded-full transition-all duration-500"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                className="bg-[#202225] hover:bg-gray-700 text-[#bdc2c5] p-3 rounded-full transition-all duration-500" >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>


          {/* Gallery Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3 + 2)}%)`, // Move ~1 image width per click
              }}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[31.5%] rounded-2xl overflow-hidden shadow-md group relative"
                >
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              ))}
            </div>
          </div>



        </div>
      </div >
    </div >
  );
}


