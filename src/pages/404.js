import Link from "next/link";
import Head from "next/head";
import { Icon } from "@iconify/react";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Page Not Found | VTechEdge Inc.</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Head>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6 text-center">
                <div className="relative mb-8">
                    <h1 className="text-9xl font-bold text-gray-200">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Icon icon="mdi:alert-circle-outline" className="text-6xl text-primary-500 animate-bounce" />
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-lg mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                    <Icon icon="mdi:home" className="text-xl" />
                    Back to Home
                </Link>
            </div>
        </>
    );
}
