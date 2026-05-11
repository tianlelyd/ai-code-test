import Link from "next/link";
import { Video, Image as ImageIcon } from "lucide-react";

const videoModels = [
    "Pollo 2.0", "Kling AI", "Veo 3", "Veo 3.1", "Sora 2", "Runway", "Seedance", "Hailuo AI", "Pika AI", "PixVerse AI", "Vidu AI", "Luma AI"
];

const imageModels = [
    "Midjourney", "Flux AI", "Flux Kontext", "GPT-4o", "Nano Banana Pro", "Imagen", "Dall-E", "Recraft", "Ideogram", "Stable Diffusion"
];

export function ModelShowcase() {
    return (
        <div className="bg-black py-16 md:pt-[180px]">
            <div className="mx-auto max-w-[1376px] px-4">
                <div className="mx-auto max-w-[862px] text-center mb-12">
                    <h2 className="text-2xl font-bold text-white md:text-7xl">
                        ALL the Great AI Video & Image Models in ONE Place!
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {/* Video Generators Card */}
                    <div className="relative rounded-3xl border border-white/10 bg-[#16141F] bg-opacity-40 px-6 py-5 md:px-[46px] md:pb-8 md:pt-9">
                        <Video className="mb-3 h-8 w-8 text-primary" />
                        <h3 className="text-lg font-bold text-white md:text-2xl">AI Video Generators</h3>
                        <p className="mt-2 text-sm text-gray-400 md:text-base">
                            With Pollo AI video generator, you can tap into our flagship Pollo 1.6 video model and all top-tier video models in the industry, like:
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {videoModels.map((model, idx) => (
                                <div key={idx} className="flex items-center">
                                    <Link href="#" className="text-[13px] font-medium text-gray-400 hover:text-white transition">
                                        {model}
                                    </Link>
                                    {idx < videoModels.length - 1 && <span className="mx-2 h-3 w-[1px] bg-white/20"></span>}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Link href="#" className="rounded-full bg-white text-black px-8 py-3 text-sm font-semibold hover:bg-gray-200 transition">
                                AI Video Generator
                            </Link>
                        </div>
                    </div>

                    {/* Image Generators Card */}
                    <div className="relative rounded-3xl border border-white/10 bg-[#16141F] bg-opacity-40 px-6 py-5 md:px-[46px] md:pb-8 md:pt-9">
                        <ImageIcon className="mb-3 h-8 w-8 text-primary" />
                        <h3 className="text-lg font-bold text-white md:text-2xl">AI Image Generators</h3>
                        <p className="mt-2 text-sm text-gray-400 md:text-base">
                            Pollo AI image generator also allows you to choose from a selection of leading image models. They include:
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {imageModels.map((model, idx) => (
                                <div key={idx} className="flex items-center">
                                    <Link href="#" className="text-[13px] font-medium text-gray-400 hover:text-white transition">
                                        {model}
                                    </Link>
                                    {idx < imageModels.length - 1 && <span className="mx-2 h-3 w-[1px] bg-white/20"></span>}
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <Link href="#" className="rounded-full bg-white text-black px-8 py-3 text-sm font-semibold hover:bg-gray-200 transition">
                                AI Image Generator
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
