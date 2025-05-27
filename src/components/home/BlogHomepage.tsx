"use client"

import { useState } from "react";
import { Search, ChevronRight, Clock, Heart, MessageSquare } from "lucide-react";

export default function BlogHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Sample data for featured and recent posts
  const featuredPost = {
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the emerging technologies and methodologies that will shape the web development landscape in the coming year.",
    author: "Alex Johnson",
    date: "May 18, 2025",
    category: "Technology",
    readTime: "8 min read",
    likes: 243,
    comments: 56,
    image: "/api/placeholder/800/500"
  };

  const recentPosts = [
    {
      id: 1,
      title: "Designing for Accessibility: Creating Inclusive Digital Experiences",
      excerpt: "Learn how to make your websites and applications more accessible to all users, including those with disabilities.",
      author: "Maya Patel",
      date: "May 15, 2025",
      category: "Design",
      readTime: "6 min read",
      likes: 187,
      comments: 32,
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "The Rise of AI-Powered Content Creation Tools",
      excerpt: "How artificial intelligence is revolutionizing content creation and what it means for writers and creators.",
      author: "James Wilson",
      date: "May 12, 2025",
      category: "Artificial Intelligence",
      readTime: "5 min read",
      likes: 156,
      comments: 24,
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Microservices vs. Monoliths: Choosing the Right Architecture",
      excerpt: "A comprehensive comparison of microservices and monolithic architectures to help you make informed decisions.",
      author: "Sarah Chen",
      date: "May 10, 2025",
      category: "Software Architecture",
      readTime: "10 min read",
      likes: 203,
      comments: 41,
      image: "/api/placeholder/400/300"
    }
  ];

  const popularTags = [
    "Technology", "Design", "Programming", "AI", "UX", 
    "JavaScript", "React", "Web Development", "CSS", "Machine Learning"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Add a style tag for the global styles */}
      
      

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-grow">
        {/* Hero / Featured Post */}
        <section className="mb-12 max-w-screen-xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt="Featured post" 
                  className="h-64 w-full object-cover md:h-full"
                />
              </div>
              <div className="p-6 md:p-8 md:w-1/2">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">
                    {featuredPost.category}
                  </span>
                  <span className="ml-3 text-gray-500 text-sm flex items-center">
                    <Clock size={14} className="mr-1" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                      <p className="text-xs text-gray-500">{featuredPost.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-gray-500 text-sm">
                      <Heart size={16} className="mr-1" />
                      {featuredPost.likes}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm">
                      <MessageSquare size={16} className="mr-1" />
                      {featuredPost.comments}
                    </span>
                  </div>
                </div>
                <button className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
                  Read Article
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8 max-w-screen-xl mx-auto">
          {/* Main Content - Recent Posts */}
          <div className="lg:w-2/3">
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Articles</h2>
                <a href="#" className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800 transition-colors">
                  View All
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                {recentPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">
                          {post.category}
                        </span>
                        <span className="ml-3 text-gray-500 text-sm flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                          <div className="ml-2">
                            <p className="text-xs font-medium text-gray-900">{post.author}</p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center text-gray-500 text-xs">
                            <Heart size={12} className="mr-1" />
                            {post.likes}
                          </span>
                          <span className="flex items-center text-gray-500 text-xs">
                            <MessageSquare size={12} className="mr-1" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="font-medium text-gray-900 mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <button title="search" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="font-medium text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-blue-50 rounded-xl shadow-md p-6">
              <h3 className="font-medium text-gray-900 mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-600 text-sm mb-4">Get the latest articles and resources in your inbox every week.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  );
}