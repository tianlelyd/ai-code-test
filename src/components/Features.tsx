import Image from "next/image";
import Link from "next/link";

const videoFeatures = [
  {
    title: "Image to Video AI",
    description: "Animate a still image into a realistic, dynamic video.",
    icon: "🎬",
    image: "/images/consistent-01.jpg",
  },
  {
    title: "Text to Video AI",
    description: "Turn simple text prompts into a stunning, captivating video.",
    icon: "📝",
    image: "/images/consistent-02.jpg",
  },
  {
    title: "Video to Video AI",
    description: "Recreate existing videos into any creative animation style.",
    icon: "🔄",
    image: "/images/consistent-03.jpg",
  },
  {
    title: "AI Animation Generator",
    description: "Generate captivating anime and cartoon videos in various styles.",
    icon: "🎨",
    image: "/images/ai-shorts.jpg",
  },
];

const imageFeatures = [
  {
    title: "AI Image Generator",
    description: "Turn your ideas to appealing and believable AI images in any style.",
    icon: "🖼️",
  },
  {
    title: "Image to Image AI",
    description: "Transform your images into new styled and customized variations.",
    icon: "✨",
  },
  {
    title: "Chat to Image",
    description: "Chat with our AI to generate and refine images in real time.",
    icon: "💬",
  },
];

const effects = [
  { name: "AI Kissing Video", hot: true },
  { name: "AI Hug Generator", hot: false },
  { name: "Earth Zoom In", hot: false },
  { name: "Action Figure", hot: true },
  { name: "AI Muscle Generator", hot: false },
  { name: "Ghibli AI Generator", hot: true },
  { name: "AI Caricature Maker", hot: false },
  { name: "Pixar AI Generator", hot: false },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#0F0D15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video AI Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 text-sm text-purple-400 bg-purple-500/10 rounded-full mb-4">
              Video AI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Create Stunning Videos with AI
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transform your ideas into professional videos using our cutting-edge AI technology.
              No editing experience required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoFeatures.map((feature, index) => (
              <Link
                key={feature.title}
                href="#"
                className="feature-card group relative bg-[#1A1825] rounded-2xl overflow-hidden border border-[#2D2B3D] hover:border-purple-500/50"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1825] to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{feature.icon}</span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Image AI Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 text-sm text-pink-400 bg-pink-500/10 rounded-full mb-4">
              Image AI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Generate Beautiful Images Instantly
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Create stunning visuals with just a text prompt or transform your existing images.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {imageFeatures.map((feature) => (
              <Link
                key={feature.title}
                href="#"
                className="feature-card group p-6 bg-gradient-to-br from-[#1A1825] to-[#1E1B2E] rounded-2xl border border-[#2D2B3D] hover:border-pink-500/50"
              >
                <div className="w-14 h-14 flex items-center justify-center text-3xl bg-pink-500/10 rounded-xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
                <div className="mt-4 flex items-center text-pink-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                  Try it now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Effects Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 text-sm text-orange-400 bg-orange-500/10 rounded-full mb-4">
              Effects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Trending Effects & Templates
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our collection of viral effects and templates to create engaging content.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {effects.map((effect) => (
              <Link
                key={effect.name}
                href="#"
                className="group flex items-center gap-2 px-5 py-3 bg-[#1A1825] rounded-full border border-[#2D2B3D] hover:border-orange-500/50 hover:bg-[#1E1B2E] transition-all"
              >
                <span className="text-gray-300 group-hover:text-orange-400 transition-colors">
                  {effect.name}
                </span>
                {effect.hot && (
                  <span className="px-2 py-0.5 text-xs bg-orange-500 text-white rounded-full">
                    Hot
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
            >
              View all effects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Models Showcase */}
        <div className="relative">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 text-sm text-blue-400 bg-blue-500/10 rounded-full mb-4">
              20+ AI Models
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Access All Leading AI Models in One Place
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From Sora to Runway, Kling to Midjourney - use all the best AI models without switching platforms.
            </p>
          </div>

          <div className="relative p-8 bg-gradient-to-br from-[#1A1825] to-[#0F0D15] rounded-3xl border border-[#2D2B3D] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/img-model-new.png')] bg-cover bg-center opacity-10" />
            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["Veo 3", "Sora 2", "Kling AI", "Runway", "Hailuo AI", "Luma AI", "Pika AI", "Midjourney", "FLUX", "Stable Diffusion", "Dall-E", "GPT-4o"].map((model, index) => (
                <div
                  key={model}
                  className="flex items-center justify-center px-4 py-3 bg-[#1A1825]/80 backdrop-blur-sm rounded-xl border border-[#2D2B3D] hover:border-blue-500/50 hover:bg-[#1E1B2E] transition-all cursor-pointer"
                >
                  <span className="text-sm text-gray-300 hover:text-blue-400 transition-colors">{model}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
