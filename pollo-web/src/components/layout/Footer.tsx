import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black py-8 text-white/60">
            <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-sm">© 2024 Pollo AI. All rights reserved.</p>
                <div className="flex gap-6 text-sm">
                    <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white">Terms of Service</Link>
                    <Link href="#" className="hover:text-white">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}
