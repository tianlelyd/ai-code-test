import Link from "next/link";
import { Video, Image as ImageIcon } from "lucide-react";

export function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-60"
                poster="https://cdn.pollo.ai/prod/public/images/index/banner.jpg"
            >
                <source src="https://cdn.pollo.ai/prod/public/video/banner-video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pt-24 md:pt-[160px]">
                <h1 className="animate-fade-in-up mb-4 text-4xl font-bold font-sans md:mb-6 md:text-[64px] md:leading-tight max-w-[980px]">
                    Your One-Stop AI Image & Video Creation Platform
                </h1>

                <div className="animate-fade-in-up flex flex-col gap-3 sm:flex-row md:mt-9 md:items-center" style={{ animationDelay: "0.2s" }}>
                    <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[1px]">
                        <Link
                            href="#"
                            className="flex items-center justify-center gap-3 rounded-2xl bg-black px-6 py-3 text-base font-semibold md:w-fit md:px-8 md:py-[22px] md:text-xl hover:bg-zinc-900 transition-colors"
                        >
                            <Video className="h-6 w-6 md:h-9 md:w-9" />
                            Create Video
                        </Link>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[1px]">
                        <Link
                            href="#"
                            className="flex items-center justify-center gap-3 rounded-2xl bg-black px-6 py-3 text-base font-semibold md:w-fit md:px-8 md:py-[22px] md:text-xl hover:bg-zinc-900 transition-colors"
                        >
                            <ImageIcon className="h-6 w-6 md:h-9 md:w-9" />
                            Create Image
                        </Link>
                    </div>
                </div>

                <p className="absolute bottom-8 right-8 text-sm text-gray-400 hidden md:block">
                    Video created with <span className="rounded bg-white/20 px-1 py-0.5 text-white">Pollo AI</span>. Watch full video on YouTube.
                </p>
            </div>
        </div>
    );
}
