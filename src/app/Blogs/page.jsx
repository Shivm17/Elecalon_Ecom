"use client";
import React, { useState, useMemo } from 'react';
import { Search, Briefcase, Code, CheckCircle, Database, ArrowLeft } from 'lucide-react';

// --- 1. BLOG POST DATA ---
const ALL_BLOG_POSTS = [
  // Career / Job-Oriented Blogs
  { id: 1, category: 'Career/Jobs', title: 'Top 10 Job-Oriented Courses That Guarantee Placement in 2025', keywords: 'job oriented courses, 100% placement, training after graduation, career', date: '2025-09-01' },
  { id: 2, category: 'Career/Jobs', title: 'How to Get an IT Job Without a Degree', keywords: 'IT jobs for freshers, skill-based jobs, career training programs, IT', date: '2025-08-25' },
  { id: 3, category: 'Career/Jobs', title: 'Best Online Courses With Job Support in India', keywords: 'online training, placement courses, career platform India, India', date: '2025-08-20' },
  { id: 4, category: 'Career/Jobs', title: 'Career Paths After Graduation — What to Do Next?', keywords: 'courses after graduation, job-ready programs, career', date: '2025-08-15' },
  { id: 5, category: 'Career/Jobs', title: 'Top 5 Courses for Students After 12th to Get a Job Fast', keywords: 'courses after 12th, job training, skill development, career', date: '2025-08-10' },
  
  // Technical / Learning Blogs
  { id: 6, category: 'Technical/Learning', title: 'How to Become a Full Stack Developer in 3 Months', keywords: 'full stack course, web development training, coding, developer', date: '2025-09-05' },
  { id: 7, category: 'Technical/Learning', title: 'Best Programming Languages to Learn for Jobs in 2025', keywords: 'programming courses, coding for beginners, technical', date: '2025-09-02' },
  { id: 8, category: 'Technical/Learning', title: 'Python vs JavaScript — Which One Is Better for Jobs?', keywords: 'python course, programming job training, technical', date: '2025-08-28' },
  { id: 9, category: 'Technical/Learning', title: 'How to Learn Data Analytics and Get a Job in 2025', keywords: 'data analytics course, job-oriented training, learning', date: '2025-08-22' },
  { id: 10, category: 'Technical/Learning', title: 'Top Digital Marketing Skills Every Student Should Learn', keywords: 'digital marketing course, online certification, learning, technical', date: '2025-08-17' },
  
  // Placement & Success Tips
  { id: 11, category: 'Success Tips', title: 'How to Crack a Placement Interview — Step-by-Step Guide', keywords: 'placement interview, job preparation tips, success', date: '2025-09-08' },
  { id: 12, category: 'Success Tips', title: 'Top 10 Companies Hiring Freshers in 2025', keywords: 'fresher jobs, job openings 2025, placement', date: '2025-09-04' },
  { id: 13, category: 'Success Tips', title: 'How Elecalon Ecom Helps Students Get Hired Faster', keywords: 'placement guarantee, job training, success stories, elecalon', date: '2025-08-30' },
  { id: 14, category: 'Success Tips', title: 'The Secret Behind 100% Placement Courses', keywords: 'placement program, training institute, success', date: '2025-08-26' },
  { id: 15, category: 'Success Tips', title: 'Top Mistakes Students Make While Searching for Jobs', keywords: 'job tips, fresher mistakes, job search advice, success', date: '2025-08-21' },

  // Web Scraping & Services Blogs
  { id: 16, category: 'Web Scraping', title: 'What Is Web Scraping and How Businesses Use It in 2025', keywords: 'web scraping services, data extraction company, business, services', date: '2025-09-10' },
  { id: 17, category: 'Web Scraping', title: 'Top 5 Use Cases of Web Scraping for E-Commerce Businesses', keywords: 'ecommerce data scraping, web scraping India, services', date: '2025-09-06' },
  { id: 18, category: 'Web Scraping', title: 'Why Web Scraping Is the Future of Data Collection', keywords: 'data scraping company, business automation, web', date: '2025-09-03' },
  { id: 19, category: 'Web Scraping', title: 'How to Automate Your Business Using Web Scraping Tools', keywords: 'web automation, scraping developer, services', date: '2025-08-29' },
];

const CATEGORIES = [
  { name: 'All', icon: <Code className="w-5 h-5" /> },
  { name: 'Career/Jobs', icon: <Briefcase className="w-5 h-5" /> },
  { name: 'Technical/Learning', icon: <Database className="w-5 h-5" /> },
  { name: 'Success Tips', icon: <CheckCircle className="w-5 h-5" /> },
  { name: 'Web Scraping', icon: <Search className="w-5 h-5" /> },
];

// --- 2. COMPONENTS ---

// Card Component for each blog post
const BlogPostCard = ({ post, onSelectPost }) => {
  const handleReadClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    onSelectPost(post.id);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.01] border border-gray-200">
      <div className="flex items-center justify-between mb-3 text-sm font-medium text-indigo-700">
        <span className="px-3 py-1 bg-indigo-100 rounded-full">{post.category}</span>
        <time className="text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
      </div>
      <h2 
        className="text-xl font-bold text-gray-900 mb-3 leading-snug hover:text-indigo-600 transition-colors cursor-pointer"
        onClick={handleReadClick} // Clickable title
      >
        {post.title}
      </h2>
      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
        {post.keywords.split(',').map(k => `#${k.trim()}`).join(' ')}
      </p>
      <a 
        href="#" 
        onClick={handleReadClick}
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors group"
      >
        Read Article
        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
    </div>
  );
};

// Category Filter Component
const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-4">
      {categories.map((cat) => {
        const isActive = selectedCategory === cat.name;
        return (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md ${
              isActive
                ? 'bg-indigo-600 text-white shadow-indigo-500/50'
                : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 border border-gray-300'
            }`}
          >
            {cat.icon}
            <span className="ml-2 hidden sm:inline">{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
};

// Article Detail Component (New)
const ArticleDetail = ({ post, onBack }) => {
  // Mock content generation based on post ID (for demonstration)
  const generateMockContent = (id) => {
    const paragraphs = [
      "This is the introductory paragraph providing context and thesis for the article. It explains why this topic is crucial for career-focused students and professionals in the current job market.",
      "The main section dives deep into the specific details mentioned in the title. For instance, if the title mentions 'Top 10 Courses', this section lists and elaborates on the first five, detailing their market relevance and expected salary outcomes.",
      "A dedicated subsection covers the practical application, real-world case studies, or actionable tips related to the article's theme. This ensures the reader walks away with immediate takeaways.",
      "Finally, the conclusion summarizes the key points and offers a forward-looking perspective on the topic, encouraging the reader to take the next step in their learning or job search journey."
    ];
    return paragraphs.map((p, index) => <p key={index} className="mb-6 leading-relaxed text-gray-700">{p}</p>);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 md:py-16">
      <button 
        onClick={onBack}
        className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors font-semibold mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to All Articles
      </button>

      <article className="bg-white p-6 sm:p-10 rounded-xl shadow-xl border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm font-medium">{post.category}</span>
          <time className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        
        <p className="text-indigo-600 text-lg mb-8 italic">
          Keywords: {post.keywords.split(',').map(k => `#${k.trim()}`).join(' ')}
        </p>

        <div className="article-content">
          {generateMockContent(post.id)}
        </div>
      </article>

      <div className="mt-12 text-center">
        <button 
          onClick={onBack}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-colors shadow-lg"
        >
          Return to Blog List
        </button>
      </div>
    </div>
  );
};


// --- 3. MAIN APP COMPONENT ---
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null); // New state to track selected post

  // Find the currently selected post object
  const selectedPost = useMemo(() => {
    return ALL_BLOG_POSTS.find(post => post.id === selectedPostId);
  }, [selectedPostId]);

  // Filtering Logic using useMemo for performance (only runs if no post is selected)
  const filteredPosts = useMemo(() => {
    if (selectedPostId !== null) return []; // Don't show list if detail view is active

    return ALL_BLOG_POSTS
      .filter(post => {
        // 1. Category Filter
        const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;

        // 2. Search Term Filter (checks title AND keywords)
        const lowerCaseSearch = searchTerm.toLowerCase();
        const searchMatch = !searchTerm || 
          post.title.toLowerCase().includes(lowerCaseSearch) ||
          post.keywords.toLowerCase().includes(lowerCaseSearch);
        
        return categoryMatch && searchMatch;
      })
      // Sort by date descending (most recent first)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [selectedCategory, searchTerm, selectedPostId]);

  const handleBack = () => setSelectedPostId(null);
  const handleSelectPost = (id) => setSelectedPostId(id);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-inter">
      {/* Tailwind CSS Font Setup */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>
      
      {/* Header/Hero Section */}
      <header className="py-12 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700">
            {selectedPostId ? 'Article Detail' : 'The Elecalon Ecom Blog'}
          </h1>
          <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
            {selectedPostId ? 'Dive deep into the insights and expertise you need.' : 'Your roadmap to job-oriented training, technical expertise, and career success.'}
          </p>
          
          {/* Search Bar (Only shown on list view) */}
          {!selectedPostId && (
            <div className="mt-8 max-w-lg mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles by title or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-inner"
                />
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {selectedPostId ? (
          /* Show Article Detail View */
          // Note: selectedPost check ensures the detail component only renders if the post is found.
          selectedPost ? <ArticleDetail post={selectedPost} onBack={handleBack} /> : null
        ) : (
          /* Show Blog List View */
          <>
            {/* Category Filter */}
            {/* Switched to bg-gray-50 for light theme stickiness */}
            <div className="my-10 sticky top-0 bg-gray-50 z-10 pt-4 -mt-4 border-b border-gray-200">
              <CategoryFilter
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>

            {/* Results Info */}
            <div className="mb-8 text-lg text-gray-600 font-medium">
              {filteredPosts.length} results found in 
              <span className="text-indigo-600 ml-1 font-semibold">{selectedCategory}</span>
              {searchTerm && <span className="text-gray-500 ml-2">(for "{searchTerm}")</span>}
            </div>

            {/* Blog Post Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <BlogPostCard key={post.id} post={post} onSelectPost={handleSelectPost} />
                ))}
              </div>
            ) : (
              // No Results Box updated for light theme
              <div className="text-center py-20 bg-gray-100 rounded-xl border border-gray-300">
                <Search className="w-12 h-12 mx-auto text-indigo-500 mb-4" />
                <p className="text-xl text-gray-700 font-semibold">No results found.</p>
                <p className="text-gray-500 mt-2">Try a different search term or select "All" categories.</p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer (Simple) */}
      <footer className="py-8 mt-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 Elecalon Ecom. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
