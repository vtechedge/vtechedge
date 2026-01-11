import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { blogData } from '@/static/blogData';
import { validateEmail } from '@/utils/formValidation';

const BlogDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showEmailOptions, setShowEmailOptions] = useState(false);
    const [subscriberEmail, setSubscriberEmail] = useState('');

    // Find the post matching the slug
    const post = blogData.find((p) => p.slug === slug);

    // Map blog categories to service page links
    const getCategoryLink = (category) => {
        const categoryMap = {
            "RPA & Automation": "/rpa",
            "Digital Transformation": "/services",
            "Cloud Technology": "/services",
            "AI & Machine Learning": "/services",
            "Security": "/services",
            "Web Development": "/services"
        };
        return categoryMap[category] || "/services";
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        // Validate email
        const validation = validateEmail(email);
        if (!validation.isValid) {
            setError(validation.error);
            return;
        }

        setLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 300));
            setSubscriberEmail(email);
            setShowEmailOptions(true);
            setLoading(false);
        } catch (err) {
            console.error('Subscription error:', err);
            setError('Failed to process subscription. Please try again.');
            setLoading(false);
        }
    };

    const getEmailContent = () => {
        const subject = "New Newsletter Subscription - VTechEdge";
        const body = `New subscriber alert!
    
Email: ${subscriberEmail}
Subscribed on: ${new Date().toLocaleString()}

Please add this email to your newsletter distribution list.

---
This is an automated notification from VTechEdge website.`;
        return { subject, body };
    };

    const openDefaultClient = () => {
        const { subject, body } = getEmailContent();
        const bodyEncoded = body.replace(/\n/g, '%0D%0A');
        const mailtoUrl = `mailto:info@vtechedge.com?subject=${encodeURIComponent(subject)}&body=${bodyEncoded}`;
        window.location.href = mailtoUrl;
        setShowEmailOptions(false);
        setSuccess(true);
        setEmail('');
        setTimeout(() => setSuccess(false), 5000);
    };

    const openGmail = () => {
        const { subject, body } = getEmailContent();
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@vtechedge.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
        setShowEmailOptions(false);
        setSuccess(true);
        setEmail('');
        setTimeout(() => setSuccess(false), 5000);
    };

    const openOutlookWeb = () => {
        const { subject, body } = getEmailContent();
        const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=info@vtechedge.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(outlookUrl, '_blank');
        setShowEmailOptions(false);
        setSuccess(true);
        setEmail('');
        setTimeout(() => setSuccess(false), 5000);
    };


    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>{post.title} - VTech Blog</title>
                <meta name="description" content={post.excerpt} />
            </Head>

            {/* Hero Section */}
            <div className="relative w-full h-[400px] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/background.png')` }}
                ></div>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 container mx-auto padding-x text-center text-white">
                    <Link 
                        href={getCategoryLink(post.category)}
                        className="inline-block bg-primary-500 hover:bg-accent text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 transition-colors"
                    >
                        {post.category}
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-gray-300 text-sm">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto padding-x py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <main className="lg:w-2/3">
                        <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-accent hover:prose-a:text-accent-hover">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </article>

                        {/* Navigation */}
                        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between">
                            <Link href="/blog" className="text-gray-600 hover:text-accent font-medium flex items-center gap-2 transition-colors">
                                ← Back to Blog
                            </Link>
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3 space-y-8">
                        {/* Subscribe Widget */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative z-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Subscribe to our Newsletter</h3>
                            <p className="text-gray-600 mb-6">Get the latest insights on technology and digital transformation delivered to your inbox.</p>

                            <form onSubmit={handleSubscribe} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="sr-only">Email address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setError('');
                                            setSuccess(false);
                                        }}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {loading ? (
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : 'Subscribe Now'}
                                </button>

                                {error && (
                                    <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                                        {error}
                                    </div>
                                )}

                                {success && (
                                    <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        Thank you for subscribing!
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Categories Widget */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative z-0">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                            <ul className="space-y-3">
                                {['RPA & Automation', 'Digital Transformation', 'Cloud Technology', 'AI & Machine Learning', 'Security', 'Web Development'].map((cat) => {
                                    // Count posts in this category
                                    const postCount = blogData.filter(p => p.category === cat).length;
                                    
                                    return (
                                        <li key={cat}>
                                            <Link 
                                                href={`/blog#category=${encodeURIComponent(cat)}`}
                                                className="text-gray-600 hover:text-accent transition-colors flex items-center justify-between group"
                                            >
                                                <span>{cat}</span>
                                                <span className="text-gray-400 text-sm">({postCount})</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Email Options Modal */}
            {showEmailOptions && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Choose Email Service</h3>
                        <p className="text-sm text-gray-600 mb-6">Select how you'd like to send your subscription:</p>

                        <div className="space-y-3">
                            {/* Gmail Option */}
                            <button
                                onClick={openGmail}
                                className="w-full flex items-center gap-3 bg-white border-2 border-gray-300 hover:border-red-500 hover:bg-red-50 text-gray-700 py-3 px-4 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335" />
                                </svg>
                                <span className="font-medium">Open in Gmail</span>
                            </button>

                            {/* Outlook Web Option */}
                            <button
                                onClick={openOutlookWeb}
                                className="w-full flex items-center gap-3 bg-white border-2 border-gray-300 hover:border-accent hover:bg-accent/5 text-gray-700 py-3 px-4 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0078D4">
                                    <path d="M7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm0 2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
                                    <path d="M12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 1.5c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z" />
                                </svg>
                                <span className="font-medium">Open in Outlook Web</span>
                            </button>

                            {/* Default Email Client Option */}
                            <button
                                onClick={openDefaultClient}
                                className="w-full flex items-center gap-3 bg-white border-2 border-gray-300 hover:border-green-500 hover:bg-green-50 text-gray-700 py-3 px-4 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <span className="font-medium">Open Default Email App</span>
                            </button>
                        </div>

                        {/* Cancel Button */}
                        <button
                            onClick={() => setShowEmailOptions(false)}
                            className="w-full mt-4 text-gray-600 hover:text-gray-800 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default BlogDetail;
