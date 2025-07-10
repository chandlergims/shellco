import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-8">
      <div className="shady-pulse">
        <Image
          src="/Untitled design (51).png"
          alt="Shell Company Logo"
          width={400}
          height={400}
          className="opacity-80 hover:opacity-100 transition-opacity duration-300"
          priority
        />
      </div>
      
      <a 
        href="https://x.com/TheShellCapital" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors duration-300"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="hover:scale-110 transition-transform duration-300"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
    </div>
  );
}
