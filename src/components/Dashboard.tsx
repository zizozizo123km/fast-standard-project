import React, { FC } from 'react';
import { Home, Users, MessageSquare, Clock, Calendar, Bookmark, Zap } from 'lucide-react';

// --- MOCK DATA & TYPES ---

interface Post {
  id: string;
  userId: string;
  userName: string;
  profilePic: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  mediaUrl?: string;
}

const mockFeedData: Post[] = [
  {
    id: 'p1',
    userId: 'u1',
    userName: 'Ahmed Ali',
    profilePic: 'https://via.placeholder.com/150/0000FF/808080?text=A',
    content: 'Just launched our new product line! Check out the link below. Super excited about the feedback so far!',
    timestamp: '2 hours ago',
    likes: 450,
    comments: 98,
    shares: 23,
    mediaUrl: 'https://via.placeholder.com/600x400?text=Product+Launch+Image',
  },
  {
    id: 'p2',
    userId: 'u2',
    userName: 'Sara Mohamed',
    profilePic: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=S',
    content: 'Feeling grateful for the amazing community support. You guys are the best! ❤️ #Community #Grateful',
    timestamp: '5 hours ago',
    likes: 120,
    comments: 35,
    shares: 5,
  },
];

// --- PLACEHOLDER COMPONENTS (Architectural Imports) ---

// In a real app, these would be aliased imports like '@/components/feed/PostComposer'
const PostComposer: FC = () => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200">
    <h3 className="font-semibold text-lg text-gray-800">What's on your mind?</h3>
    <textarea
      className="w-full mt-2 p-2 border-b border-gray-300 focus:outline-none resize-none"
      placeholder="Create a post..."
      rows={2}
    />
    <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
      <button className="flex items-center text-sm font-medium text-blue-500 hover:text-blue-600">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        Photo/Video
      </button>
      <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-150">
        Post
      </button>
    </div>
  </div>
);

const FeedItem: FC<{ post: Post }> = ({ post }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4 transition duration-200 hover:shadow-md">
    {/* Header */}
    <div className="flex items-start mb-3">
      <img
        src={post.profilePic}
        alt={post.userName}
        className="w-10 h-10 rounded-full mr-3 border border-gray-300"
      />
      <div>
        <p className="font-bold text-gray-900 hover:underline cursor-pointer">{post.userName}</p>
        <p className="text-xs text-gray-500">{post.timestamp}</p>
      </div>
    </div>
    
    {/* Content */}
    <p className="text-gray-800 mb-3 leading-relaxed">{post.content}</p>

    {/* Media */}
    {post.mediaUrl && (
      <img
        src={post.mediaUrl}
        alt="Post media"
        className="w-full max-h-96 object-cover rounded-lg mb-3 border border-gray-100"
      />
    )}

    {/* Stats */}
    <div className="flex justify-between text-sm text-gray-500 border-b border-gray-100 pb-2 mb-2">
      <span>{post.likes.toLocaleString()} Likes</span>
      <span>{post.comments} Comments</span>
      <span>{post.shares} Shares</span>
    </div>

    {/* Actions */}
    <div className="flex justify-around text-gray-600 pt-1">
      <button className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.001a2 2 0 01-1.79-2.894l3.5-7A2 2 0 0114 10zM5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h3"></path></svg>
        Like
      </button>
      <button className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.593 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        Comment
      </button>
      <button className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.88 12.012 9 10.647 9 9.324a4.346 4.346 0 00-1.07-2.872A4.5 4.5 0 0112 4.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5a.86.86 0 00-.094 0"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zM12 18h.01M12 21h.01M3 21s1-10 18-10"></path></svg>
        Share
      </button>
    </div>
  </div>
);

const LeftNav: FC = () => (
    <nav className="p-4 bg-white rounded-lg shadow-md sticky top-20">
        <div className="space-y-3">
            <NavItem icon={Home} label="Feed" active />
            <NavItem icon={Users} label="Friends" />
            <NavItem icon={MessageSquare} label="Messenger" />
            <NavItem icon={Clock} label="Memories" />
            <NavItem icon={Calendar} label="Events" />
            <NavItem icon={Bookmark} label="Saved" />
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="text-gray-500 text-sm font-semibold mb-2 uppercase">Shortcuts</h4>
            <div className="space-y-3">
                <NavItem icon={Zap} label="Gaming Video" />
                <NavItem icon={Users} label="Groups" />
            </div>
        </div>
    </nav>
);

const NavItem: FC<{ icon: FC<any>, label: string, active?: boolean }> = ({ icon: Icon, label, active }) => (
    <a 
        href={`#${label.toLowerCase()}`} 
        className={`flex items-center p-2 rounded-lg transition duration-150 ${
            active 
                ? 'bg-blue-100 text-blue-700 font-bold' 
                : 'text-gray-700 hover:bg-gray-100'
        }`}
    >
        <Icon className="w-5 h-5 mr-3" />
        <span className="text-sm">{label}</span>
    </a>
);

const RightWidgets: FC = () => (
    <div className="sticky top-20 space-y-4">
        {/* Friends Activity Widget */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">Friends' Birthdays</h4>
            <p className="text-sm text-gray-500">No birthdays today.</p>
        </div>

        {/* Suggested Contacts */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3">Suggested for You</h4>
            <div className="space-y-3">
                <SuggestedContact name="Maria Khoury" mutuals={12} img="https://via.placeholder.com/50/FF8C00/FFFFFF?text=M" />
                <SuggestedContact name="Omar Hassan" mutuals={5} img="https://via.placeholder.com/50/008080/FFFFFF?text=O" />
            </div>
        </div>
    </div>
);

const SuggestedContact: FC<{ name: string, mutuals: number, img: string }> = ({ name, mutuals, img }) => (
    <div className="flex items-center justify-between">
        <div className="flex items-center">
            <img src={img} alt={name} className="w-9 h-9 rounded-full mr-3" />
            <div>
                <p className="font-medium text-sm text-gray-800">{name}</p>
                <p className="text-xs text-gray-500">{mutuals} mutual friends</p>
            </div>
        </div>
        <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-600 transition">
            Add Friend
        </button>
    </div>
);

// --- MAIN DASHBOARD COMPONENT ---

const Dashboard: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-4 md:pt-6">
      
      {/* Assuming a fixed header (TopBar) is handled by a parent Layout component */}
      
      <main className="max-w-screen-xl mx-auto px-1 sm:px-4 lg:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[260px_2fr_300px] gap-4">
          
          {/* Left Sidebar (Navigation & Profile) */}
          <div className="hidden lg:block">
            <LeftNav />
          </div>
          
          {/* Center Column (Feed & Composer) */}
          <div className="col-span-1 lg:col-span-1 overflow-y-auto">
            <div className="max-w-2xl mx-auto">
              {/* Story/Reels Placeholder Area */}
              <div className="h-28 bg-white rounded-lg shadow-md mb-4 border border-gray-200 flex items-center justify-center text-gray-500 text-sm">
                Stories & Reels Placeholder
              </div>
              
              <PostComposer />
              
              {mockFeedData.map(post => (
                <FeedItem key={post.id} post={post} />
              ))}

              {/* Infinite Scroll Loader */}
              <div className="text-center text-gray-500 py-6">
                Loading more posts...
              </div>
            </div>
          </div>
          
          {/* Right Sidebar (Widgets, Contacts, Ads) */}
          <div className="hidden xl:block">
            <RightWidgets />
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Dashboard;