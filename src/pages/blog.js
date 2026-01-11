import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Clamp from "@/utils/Clamp";
import { blogData } from "@/static/blogData";

const Blog = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Check for category in URL hash on mount and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#category=')) {
        const category = decodeURIComponent(hash.replace('#category=', ''));
        setSelectedCategory(category);
        // Scroll to posts section
        setTimeout(() => {
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }, 100);
      } else {
        setSelectedCategory(null);
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Filter posts by category if one is selected
  const filteredPosts = selectedCategory
    ? blogData.filter((post) => post.category === selectedCategory)
    : blogData;

  // Get all unique categories
  const allCategories = [...new Set(blogData.map(post => post.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Update hash in URL
    window.location.hash = `#category=${encodeURIComponent(category)}`;
    // Scroll to top of posts section
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleResetCategory = () => {
    setSelectedCategory(null);
    // Remove hash from URL
    window.location.hash = '';
  };

  return (
    <>
      <Head>
        <title>Blog - VTech | Insights on Technology & Innovation</title>
        <meta name="description" content="Stay updated with the latest insights on RPA, Digital Transformation, Cloud Computing, and AI from VTechEdge Inc." />
        <meta property="og:title" content="VTech Blog - Technology Insights" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white padding-x py-20">
          <h1 className="font-bold mb-6" style={{ fontSize: `${Clamp(2, 3.5)}` }}>
            {selectedCategory ? selectedCategory : "VTech Blog"}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {selectedCategory 
              ? `Explore articles about ${selectedCategory}`
              : "Insights, trends, and best practices in technology and digital transformation"
            }
          </p>
          {selectedCategory && (
            <button 
              onClick={handleResetCategory}
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full transition-colors"
            >
              ← View All Categories
            </button>
          )}
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="container mx-auto padding-x py-16">
        {/* Category Filter Pills */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          <button
            onClick={handleResetCategory}
            className={`px-4 py-2 rounded-full transition-all ${
              !selectedCategory
                ? "bg-accent text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Categories
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === cat
                  ? "bg-accent text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat} ({blogData.filter(p => p.category === cat).length})
            </button>
          ))}
        </div>
        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No blog posts found in this category.</p>
            <button 
              onClick={handleResetCategory}
              className="text-accent hover:text-accent-hover mt-4 inline-block"
            >
              View all posts →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
            >
              {/* Category Badge */}
              <div className="bg-gradient-to-r from-primary-500 to-accent p-4">
                <button 
                  onClick={() => handleCategoryClick(post.category)}
                  className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
                >
                  {post.category}
                </button>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>

                {/* Read More Button */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-accent hover:text-accent-hover font-semibold transition-colors group mt-auto"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
            ))}
          </div>
        )}

        {/* Coming Soon Notice */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-accent/10 p-8 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">More Articles Coming Soon!</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're working on bringing you more insightful content about technology, automation, and digital transformation.
            Subscribe to our newsletter to stay updated.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
