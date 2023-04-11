import { FloatingHeart } from "./FloatingHeart";

export default function Home() {
  return (
    <div className="relative min-h-[100svh]">
      <div className="absolute inset-0">
        <FloatingHeart />
      </div>
      <div className="absolute inset-0 flex flex-col">
        <main className="max-w-[512px] mx-auto">
          <header className="p-4 font-bold text-2xl">monyala.me</header>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center space-x-8 mt-12">
              <div>
                <img
                  src="/monyala.jpeg"
                  width={400}
                  height={400}
                  alt="My avatar"
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <div className="space-y-2">
                <div className="font-bold text-xl">monyala</div>
                <div className="font-bold text-xl">Illustrator</div>
              </div>
            </div>
            <div className="p-4 flex justify-center space-x-32 mt-8">
              <div>
                <span className="font-bold text-xl">Loves</span>
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
      </div>
    </div>
  );
}
