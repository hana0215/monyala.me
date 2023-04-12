import Link from "next/link";
import { FloatingHeart } from "./FloatingHeart";

export default function Home() {
  return (
    <div className="relative min-h-[100svh]">
      <div className="absolute inset-0">
        <FloatingHeart />
      </div>
      <div className="absolute inset-0 flex flex-col">
        <header className="p-4 font-bold text-xl">
          <Link href="/">monyala.me</Link>
        </header>
        <main className="mx-auto flex w-full max-w-screen-xs flex-1 flex-col justify-center p-8">
          <div className="flex flex-col items-center justify-end">
            <div className="animate-fade-in-and-drop text-center flex justify-center items-center space-x-6">
              <img
                src="/monyala.jpeg"
                width={128}
                height={128}
                alt="Illustration of my avatar"
                decoding="async"
                className="mx-auto rounded-full hover:animate-shake xs:mx-0 w-32 h-32"
              />
              <div className="flex flex-col items-start justify-end mt-12">
                <h1 className="w-full text-2xl font-bold text-left">monyala</h1>
                <p className="mt-1 font-bold text-left">Illustrator</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-20 space-y-12 xs:flex xs:justify-between xs:space-y-0">
              <div>
                <span className="text-xl font-bold">Loves</span>
                <ul className="list-disc list-inside space-y-1 text-lg mt-4">
                  <li>
                    <span className="text-text/80">🎀</span> Pripara
                  </li>
                  <li>
                    <span className="text-text/60">🦑</span> Splatoon
                  </li>
                  <li>
                    <span className="text-text/80">🎬</span> YouTube
                  </li>
                  <li>🐩 Animals</li>
                </ul>
              </div>
              <div>
                <span className="font-bold text-xl">Links</span>
                <ul className="list-disc list-inside space-y-1 text-lg mt-4">
                  <li>
                    <a href="https://twitter.com/pyaltu">Twitter</a>
                  </li>
                  <li>
                    <a href="https://skeb.jp/@pyaltu">Skeb</a>
                  </li>
                  <li>
                    <a href="mailto:monyalaala@gmail.com">e-mail</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <footer className="p-4 text-center text-sm">
          <small>© 2023 monyala</small>
        </footer>
      </div>
    </div>
  );
}
