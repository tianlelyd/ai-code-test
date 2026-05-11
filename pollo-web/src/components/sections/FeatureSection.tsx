import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FeatureSectionProps {
    title: string;
    description: string;
    link: string;
    mediaContent: React.ReactNode;
    reversed?: boolean;
}

export function FeatureSection({
    title,
    description,
    link,
    mediaContent,
    reversed = false,
}: FeatureSectionProps) {
    return (
        <div className="py-16 md:py-[100px]">
            <div className={cn(
                "mx-auto flex max-w-[1440px] flex-col gap-12 px-4 md:flex-row md:items-center md:justify-center md:gap-16 xl:gap-[100px]",
                reversed ? "md:flex-row-reverse" : ""
            )}>
                {/* Text Content */}
                <div className="w-full max-w-[700px] md:w-1/3 xl:max-w-[460px]">
                    <h2 className="text-3xl font-bold font-sans text-white md:text-5xl lg:text-6xl">{title}</h2>
                    <p className="pt-3 text-base text-gray-400 md:text-xl">
                        {description}
                    </p>
                    <div className="mt-8 flex w-fit rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[1px]">
                        <Link
                            href={link}
                            className="flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
                        >
                            Try for Free
                        </Link>
                    </div>
                </div>

                {/* Media Content */}
                <div className="w-full max-w-[960px] md:w-2/3">
                    <div className="flex items-center justify-center rounded-2xl bg-[#16141F] p-4 md:p-0">
                        {mediaContent}
                    </div>
                </div>
            </div>
        </div>
    );
}
