import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#FAF9F6] px-6">
            <div className="max-w-lg text-center">
                <p className="text-sm font-semibold tracking-widest text-emerald-700">
                    404 ERROR
                </p>

                <h1 className="mt-4 text-8xl font-bold text-emerald-900">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                    পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
                </h2>

                <p className="mt-3 text-gray-600">
                    The page you&apos;re looking for doesn&apos;t exist.
                    <br />
                    আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি।
                </p>

                <Link
                    href="/bn"
                    className="mt-8 inline-flex rounded-md bg-emerald-800 px-7 py-3 text-white hover:bg-emerald-900 transition"
                >
                    হোম পেজে ফিরে যান
                </Link>

                <p className="mt-10 text-sm text-gray-400">
                    ত্বআমুল মিসকীন ফাউন্ডেশন
                </p>
            </div>
        </main>
    );
}