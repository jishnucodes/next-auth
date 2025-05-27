// ArticlePage.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArticlePage = () => {
  // Featured blog data
  const featuredBlogs = [
    {
      id: 1,
      title: 'Designers are meant to be loved, not to be understood.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      author: 'JOHN DOE',
      date: '18 OCT 2022',
      image: '/images/designer-laptop.jpg'
    },
    {
      id: 2,
      title: 'Designers are meant to be trusted, not to be understood.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      author: 'JOHN DOE',
      date: '15 OCT 2022',
      image: '/images/designers-meeting.jpg'
    },
    {
      id: 3,
      title: 'Designers are meant to be loved, not to be understood.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      author: 'JOHN DOE',
      date: '14 OCT 2022',
      image: '/images/designer-desk.jpg'
    }
  ];

  // Latest blog data
  const latestBlogs = [
    {
      id: 4,
      title: 'Designers are meant to be loved, not to be understood.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      author: 'JOHN DOE',
      date: '10 OCT 2022',
      image: '/images/coffee-cup.jpg'
    },
    {
      id: 5,
      title: 'Designers are meant to be trusted, not to be understood.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      author: 'JOHN DOE',
      date: '09 OCT 2022',
      image: '/images/coffee-pouring.jpg'
    },
    {
      id: 6,
      title: 'Designers are meant to be loved, not to be understood.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      author: 'JOHN DOE',
      date: '08 OCT 2022',
      image: '/images/coffee-black.jpg'
    }
  ];

  return (
    <div className="bg-white">
      {/* Featured Blogs Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wide mb-1">OUR RECENT BLOGS</p>
            <h2 className="text-3xl font-bold">Publish what you think,<br />don't put it on social media</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <div key={blog.id} className="bg-white">
                <div className="mb-4 overflow-hidden">
                  <Image 
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{blog.excerpt}</p>
                <div className="text-xs text-gray-400">
                  <span>BY {blog.author}</span>
                  <span className="mx-2">|</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "PUBLISH WHAT YOU THINK" text */}
      <div className="text-center mb-4">
        <p className="text-sm uppercase tracking-wide">PUBLISH WHAT YOU THINK</p>
      </div>

      {/* Latest Blogs Section */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">LATEST BLOGS</h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((blog) => (
              <div key={blog.id} className="bg-white">
                <div className="mb-4 overflow-hidden">
                  <Image 
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="text-xs text-gray-400 mb-2">
                  <span>{blog.date}</span>
                  <span className="mx-2">|</span>
                  <span>BY {blog.author}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-500 text-sm">{blog.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final LATEST BLOGS heading */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">LATEST BLOGS</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;