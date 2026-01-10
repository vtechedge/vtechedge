import React from "react";
import Head from "next/head";
import ComingSoon from "@/components/ComingSoon";

const ComingSoonPage = () => {
    return (
        <>
            <Head>
                <title>Coming Soon - VTech Edge</title>
                <meta name="description" content="We're building something amazing! Stay tuned for exciting new features." />
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <ComingSoon
                title="Coming Soon"
                message="We're building something amazing for you!"
                showHomeButton={true}
            />
        </>
    );
};

export default ComingSoonPage;
