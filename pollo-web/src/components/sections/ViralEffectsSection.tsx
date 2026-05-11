"use client";

import Link from "next/link";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Play } from "lucide-react";

// Mock data for effects
const viralEffects = [
    { id: 1, title: "AI Kissing Video Generator", views: "2.9M", isHot: true, video: "https://videocdn.pollo.ai/effects/video_480p/c20241223035733-488528.mp4", cover: "https://videocdn.pollo.ai/effects/img/c20241223035733-488528.webp" },
    { id: 2, title: "Action Figure", views: "4.4K", isHot: true, video: "https://videocdn.pollo.ai/effects/video_480p/cmf3s9hfx01mvmkc84bcsyrwv.mp4", cover: "https://videocdn.pollo.ai/effects/img/cmf3s9hfx01mvmkc84bcsyrwv.webp" },
    { id: 3, title: "Ice Sculpture", views: "5K", isHot: true, video: "https://videocdn.pollo.ai/effects/video_480p/cmgiqoaep0awiwnhw823b4lfe.mp4", cover: "https://videocdn.pollo.ai/effects/img/cmgiqoaep0awiwnhw823b4lfe.webp" },
    { id: 4, title: "Backflip", views: "1.4K", isHot: true, video: "https://videocdn.pollo.ai/effects/video_480p/cmgiqzx1w0b4t7q9tymv0dhbi.mp4", cover: "https://videocdn.pollo.ai/effects/img/cmgiqzx1w0b4t7q9tymv0dhbi.webp" },
    { id: 5, title: "Become Werewolf", views: "4.6K", isHot: true, video: "https://videocdn.pollo.ai/effects/video_480p/cmgir324w09axf8px7efsmft1.mp4", cover: "https://videocdn.pollo.ai/effects/img/cmgir324w09axf8px7efsmft1.webp" },
    { id: 6, title: "Hug From Behind", views: "2.4K", isHot: true, video: "https://videocdn.pollo.ai/effects/video_480p/cmfawivok0qgnyuupvnp8rhyb.mp4", cover: "https://videocdn.pollo.ai/effects/img/cmfawivok0qgnyuupvnp8rhyb.webp" },
    { id: 7, title: "AI Twerk Video Generator", views: "259K", isHot: true, video: "https://videocdn.pollo.ai/effects/assets/video_480p/27899e57-8196-4a2b-9e71-e95c7eef7fe8.mp4", cover: "https://videocdn.pollo.ai/effects/assets/webp_480p/27899e57-8196-4a2b-9e71-e95c7eef7fe8.webp" },
    { id: 8, title: "Me with My Billboard", views: "1.7K", isHot: true, video: "https://videocdn.pollo.ai/effects/video_480p/cmfnn2bop06uytadsivwtxeed.mp4", cover: "https://videocdn.pollo.ai/effects/img/cmfnn2bop06uytadsivwtxeed.webp" },
    { id: 9, title: "AI Hug", views: "256.6K", isHot: true, video: "https://videocdn.pollo.ai/effects/video_480p/c20241223035732-708758.mp4", cover: "https://videocdn.pollo.ai/effects/img/c20241223035732-708758.webp" },
    { id: 10, title: "Into The Mouth", views: "27.1K", isHot: true, video: "https://videocdn.pollo.ai/web-cdn/pollo/production/cmdfauqr805vitb2pm8oo46ho/video/1761185816151-7eb00329-4e27-4b48-8b9d-b2dc4a9c08b7.mp4", cover: "https://videocdn.pollo.ai/web-cdn/pollo/production/cmdfauqr805vitb2pm8oo46ho/cover/1761185818397-0802db07-c325-4a81-b8e0-3659c97aaa19.webp" }
];

export function ViralEffectsSection() {
    return (
        <section className="py-16 md:py-[100px] bg-black">
            <FadeInUp>
                <div className="mx-auto max-w-[1432px] px-4 text-center">
                    <div className="flex justify-center mb-4">
                        <span className="text-4xl">🔥</span>
                        {/* Placeholder for 150+ image if missing */}
                        <span className="text-xl font-bold ml-2 self-center text-primary">150+ Effects</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white md:text-7xl">Viral AI Videos and Photo Effects</h2>
                    <p className="mx-auto max-w-[880px] pt-3 text-sm text-gray-400 md:text-base">
                        Want to add a sweet kiss for your loved one or bulk up with AI muscles? Want to turn your photos into Ghibli-style art or snap a selfie with celebrities? No problem! With over 150 video and photo effects, bring your vision to life!
                    </p>

                    <div className="mt-8 flex justify-center gap-4">
                        <span className="cursor-pointer rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-primary">Video Effects</span>
                        <span className="cursor-pointer rounded-full bg-transparent px-4 py-1.5 text-sm font-normal text-gray-400 hover:bg-white/5 hover:text-white transition">Photo Effects</span>
                    </div>
                </div>
            </FadeInUp>

            <StaggerContainer className="mx-auto mt-12 grid max-w-[1440px] grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {viralEffects.map((effect) => (
                    <StaggerItem key={effect.id} className="group relative cursor-pointer">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-900 border border-white/10 transition-all group-hover:border-primary/50">
                            {/* Video/Image */}
                            <video
                                className="h-full w-full object-cover"
                                src={effect.video}
                                poster={effect.cover}
                                muted loop playsInline
                                onMouseOver={(e) => e.currentTarget.play()}
                                onMouseOut={(e) => {
                                    e.currentTarget.pause();
                                    e.currentTarget.currentTime = 0;
                                }}
                            />

                            {/* Hot Badge */}
                            {effect.isHot && (
                                <div className="absolute top-2 left-2 rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold text-white uppercase">
                                    Hot
                                </div>
                            )}

                            {/* Views Badge */}
                            <div className="absolute top-2 right-2 flex items-center gap-1 rounded bg-black/50 px-1.5 py-0.5 text-[10px] text-white">
                                <span>🔥</span> {effect.views}
                            </div>

                            {/* Hover Overlay Button */}
                            <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                                <button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    Use This Effect
                                </button>
                            </div>
                        </div>
                        <p className="mt-2 text-sm font-medium text-gray-300 group-hover:text-white truncate px-1">{effect.title}</p>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}
