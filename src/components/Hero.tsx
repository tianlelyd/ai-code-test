import Link from "next/link";
import Image from "next/image";

const brandLogos = [
  "Veo 3", "Sora 2", "Kling AI", "Runway", "Hailuo AI", "Luma AI", "Pika AI", "Midjourney"
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0D15] via-[#1A1530] to-[#0F0D15]" />
        <div className="absolute inset-0 bg-[url('/images/user-use-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D15] via-transparent to-[#0F0D15]/80" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D2B3D]/50 border border-[#3D3B4D] mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Powered by 20+ AI Models</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">The Ultimate </span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            AI Video & Image
          </span>
          <br />
          <span className="text-white">Creation Platform</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Use Pollo AI, the free, ultimate, all-in-one AI image & video generator,
          to create images/videos with text prompts, images or videos.
          Turn your ideas to images and videos with high resolution and quality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="#"
            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl hover:from-purple-500 hover:to-purple-400 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            Start Creating for Free
          </Link>
          <Link
            href="#"
            className="px-8 py-4 text-lg font-semibold text-white border border-gray-600 rounded-xl hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
            Watch Demo
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">10M+</div>
            <div className="text-sm text-gray-400">Videos Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">5M+</div>
            <div className="text-sm text-gray-400">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">20+</div>
            <div className="text-sm text-gray-400">AI Models</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4.9</div>
            <div className="text-sm text-gray-400">User Rating</div>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-6">Supported Video Models</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {brandLogos.map((brand, index) => (
              <div
                key={brand}
                className="px-4 py-2 text-sm text-gray-400 bg-[#1A1825]/50 rounded-lg border border-[#2D2B3D]/50 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-pointer"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Preview */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mb-16">
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#2D2B3D] shadow-2xl shadow-purple-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1825] to-[#0F0D15]">
            <Image
              src="/images/pollo-video-model-1.png"
              alt="Pollo AI Demo"
              fill
              className="object-cover opacity-80"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all group">
                <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
