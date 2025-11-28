import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Download, Heart, Bookmark, Share2, ExternalLink, Code, Eye, Clock, User } from 'lucide-react';
import { componentsData } from '../ComponentsCOM/data';

const ComponentDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  // Find the component data from componentsData
  const componentData = componentsData.find(item => 
    item.href === `/components/${slug}`
  );

  // If component not found, show 404
  useEffect(() => {
    if (!componentData) {
      // You can redirect or show a 404 page
      console.log('Component not found');
    }
  }, [componentData]);

  if (!componentData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Component Not Found</h1>
          <p className="text-gray-400 mb-6">The component you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/components')}
            className="px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-100 transition-all"
          >
            Back to Components
          </button>
        </div>
      </div>
    );
  }

  // Generate mock data based on component
  const detailData = {
    title: componentData.title,
    description: `A beautiful and interactive ${componentData.title.toLowerCase()} component built with React and Tailwind CSS. Perfect for modern web applications with smooth animations and customizable options.`,
    author: {
      name: componentData.authorName,
      username: `@${componentData.authorName.toLowerCase().replace(/\s+/g, '')}`,
      avatar: componentData.authorAvatar
    },
    stats: {
      views: componentData.views,
      installs: componentData.saves,
      updated: '3mo ago'
    },
    tags: [`#${componentData.category}`, '#react', '#tailwind', '#animation'],
    dependencies: ['react', 'lucide-react', 'tailwindcss'],
    installation: `npx shadcn@latest add https://vibe.dev/r/${slug}`,
    code: `import ${componentData.title.replace(/\s+/g, '')} from '@/components/ui/${slug}';

const Demo = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <${componentData.title.replace(/\s+/g, '')} />
    </div>
  );
};

export { Demo };`,
    previewUrl: componentData.previewImg
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(detailData.code);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch (err) {
      setCopyStatus('Failed to copy');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  const handleCopyInstall = async () => {
    try {
      await navigator.clipboard.writeText(detailData.installation);
      setCopyStatus('Installation command copied!');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch (err) {
      setCopyStatus('Failed to copy');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <button 
            onClick={() => navigate('/components')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Components</span>
          </button>
        </div>
      </header>

      {/* Main Content - YouTube Style */}
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Video Player Area */}
        <div className="mb-6">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
            {/* Component Preview */}
            <img 
              src={detailData.previewUrl} 
              alt={detailData.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-black to-black flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-xl text-white font-semibold">{detailData.title}</p>
                <p className="text-sm text-gray-300 mt-2">Interactive preview</p>
              </div>
            </div>

            {/* Preview Controls */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button className="p-2.5 rounded-xl bg-black/70 backdrop-blur-xl border border-white/10 hover:bg-black/90 transition-all">
                <ExternalLink className="w-5 h-5" />
              </button>
              <button className="p-2.5 rounded-xl bg-black/70 backdrop-blur-xl border border-white/10 hover:bg-black/90 transition-all">
                <Code className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Info Section - YouTube Style */}
        <div className="space-y-4">
          {/* Title */}
          <h1 className="text-2xl font-bold">{detailData.title}</h1>

          {/* Stats & Actions Row */}
          <div className="flex items-center justify-between">
            {/* Views & Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                <span>{detailData.stats.views} views</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Download className="w-4 h-4" />
                <span>{detailData.stats.installs} installs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{detailData.stats.updated}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLiked(!liked)}
                className={`px-4 py-2 rounded-full border transition-all duration-200 flex items-center gap-2 ${
                  liked 
                    ? 'bg-white/10 text-white border-white/20' 
                    : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                }`}
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-current text-red-500' : ''}`} />
                <span className="text-sm font-medium">Like</span>
              </button>
              
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`px-4 py-2 rounded-full border transition-all duration-200 flex items-center gap-2 ${
                  bookmarked 
                    ? 'bg-white/10 text-white border-white/20' 
                    : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current text-blue-500' : ''}`} />
                <span className="text-sm font-medium">Save</span>
              </button>
              
              <button className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Channel/Creator Section */}
          <div className="flex items-start justify-between py-4 border-y border-white/10">
            <div className="flex items-center gap-4">
              {/* Creator Avatar */}
              <img 
                src={detailData.author.avatar} 
                alt={detailData.author.name}
                className="w-12 h-12 rounded-full ring-2 ring-white/10"
              />
              
              {/* Creator Info */}
              <div>
                <p className="font-semibold text-base">{detailData.author.name}</p>
                <p className="text-sm text-gray-400">{detailData.author.username}</p>
              </div>
            </div>

            {/* Subscribe/Follow Button */}
            <button className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all">
              Follow
            </button>
          </div>

          {/* Description Section */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <p className="text-sm text-gray-300 leading-relaxed">
              {detailData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Copy Status Toast */}
      {copyStatus && (
        <div className="fixed bottom-6 left-6 px-4 py-2 rounded-xl bg-green-500 text-white text-sm font-medium shadow-lg">
          {copyStatus}
        </div>
      )}
    </div>
  );
};

export default ComponentDetail;
