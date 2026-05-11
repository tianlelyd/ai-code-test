"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Footer } from "@/components/layout/Footer";
import { ModelShowcase } from "@/components/sections/ModelShowcase";
import { ViralEffectsSection } from "@/components/sections/ViralEffectsSection";
import { FadeInUp } from "@/components/ui/motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans text-white w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <ModelShowcase />
      <ViralEffectsSection />

      <div className="relative py-16 md:py-[100px]">
        <FadeInUp>
          <h2 className="mx-auto max-w-[896px] px-4 text-center text-3xl font-bold md:text-7xl mb-16">
            Create Stunning Images and Videos ALL on ONE Platform
          </h2>
        </FadeInUp>

        <div className="flex flex-col gap-0">
          {/* Text to Video */}
          <FeatureSection
            title="Text to Video AI"
            description="Pollo AI text to video generator brings your prompts to life with best-in-class visuals and perfectly synchronized audio."
            link="#"
            mediaContent={
              <video
                autoPlay loop muted playsInline
                className="w-full rounded-2xl"
                src="https://cdn.pollo.ai/prod/public/video/index/index-text.mp4"
                poster="https://cdn.pollo.ai/prod/public/images/index/new/text.jpg"
              />
            }
          />

          {/* Image to Video */}
          <FeatureSection
            reversed
            title="Image to Video AI"
            description="With Pollo AI, you can create jaw-dropping videos from any photos, complete with stylistic consistency and cinematic audio."
            link="#"
            mediaContent={
              <div className="flex gap-4">
                <img src="https://cdn.pollo.ai/prod/public/images/index/new/image-02.png" alt="Input" className="w-1/2 rounded-2xl object-cover" />
                <video
                  autoPlay loop muted playsInline
                  className="w-1/2 rounded-2xl object-cover"
                  src="https://cdn.pollo.ai/prod/public/video/index/index-image.mp4"
                />
              </div>
            }
          />

          {/* AI Avatar */}
          <FeatureSection
            title="AI Avatar Generator"
            description="With Pollo AI Avatar, transform your photo into a fully animated AI avatar video up to 2 minutes long, complete with realistic movement, lip sync, and expressive emotions."
            link="#"
            mediaContent={
              <div className="flex gap-4">
                <img src="https://cdn.pollo.ai/prod/public/images/index/new/avatar.jpg" alt="Input" className="w-1/2 rounded-2xl object-cover" />
                <video
                  autoPlay loop muted playsInline
                  className="w-1/2 rounded-2xl object-cover"
                  src="https://cdn.pollo.ai/prod/public/video/index/index-avatar.mp4"
                />
              </div>
            }
          />

          {/* AI Short Video */}
          <FeatureSection
            reversed
            title="AI Short Video Generator"
            description="Pollo AI Shorts lets you create breathtaking multi-scene videos in anime, animal, or soothing styles, all with just one click."
            link="#"
            mediaContent={
              <div className="flex gap-4">
                <img src="https://cdn.pollo.ai/prod/public/images/index/new/ai-shorts.jpg" alt="Input" className="w-1/2 rounded-2xl object-cover" />
                <video
                  autoPlay loop muted playsInline
                  className="w-1/2 rounded-2xl object-cover"
                  src="https://cdn.pollo.ai/prod/public/video/index/index-shorts.mp4"
                />
              </div>
            }
          />

          {/* AI Video Editor */}
          <FeatureSection
            title="AI Video Editor"
            description="Edit your videos instantly using text prompts. Want to change the scene, add effects, swap backgrounds, or adjust lighting? Just type it; we'll handle the rest in seconds."
            link="#"
            mediaContent={
              <video
                autoPlay loop muted playsInline
                className="w-full rounded-2xl"
                src="https://cdn.pollo.ai/prod/public/video/index/index-editor.mp4"
                poster="https://cdn.pollo.ai/prod/public/images/index/new/video-editor.png"
              />
            }
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
