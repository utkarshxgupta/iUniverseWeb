
import React, { useState, useEffect } from 'react';
import { Search, Mic, FileText, Briefcase, Users, LayoutDashboard, ChevronRight, ChevronLeft, Calendar, Heart, Eye, Sparkles, Play, MessageCircle, Share2, MoreHorizontal, Sun, X, Send, Clock, Coffee, Gift, AlertCircle, ArrowRight, CheckCircle2, CalendarDays, Palmtree } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

// --- DATA MOCKS ---

const CAROUSEL_SLIDES = [
  {
    id: 1,
    title: "LEARNING",
    subtitle: "Matrix",
    tag: "LMS Portal",
    desc: "Upskill with 5000+ courses tailored for your career growth.",
    gradient: "from-[#8B3E05] to-[#5e2a04]",
    pattern: "opacity-20"
  },
  {
    id: 2,
    title: "iVOLUNTEER",
    subtitle: "Impact",
    tag: "CSR Initiative",
    desc: "Join 10,000+ colleagues in making a difference today.",
    gradient: "from-[#005b52] to-[#00332e]",
    pattern: "opacity-30"
  },
  {
    id: 3,
    title: "BeFit360",
    subtitle: "Wellness",
    tag: "Health Program",
    desc: "Track your fitness goals and earn rewards.",
    gradient: "from-[#c2410c] to-[#7c2d12]",
    pattern: "opacity-20"
  }
];

const FEATURED_VIDEOS = [
  {
    id: 1,
    title: "Risk & Compliance Culture",
    author: "Sandeep Bakshi, MD & CEO",
    views: "20k",
    likes: "2.4k",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=450&fit=crop",
    duration: "12:45"
  },
  {
    id: 2,
    title: "Q3 FY25 Financial Results",
    author: "Investor Relations",
    views: "15k",
    likes: "1.1k",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=450&fit=crop",
    duration: "45:10"
  },
  {
    id: 3,
    title: "New HR Policies Explained",
    author: "Human Resources",
    views: "8.5k",
    likes: "900",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=450&fit=crop",
    duration: "08:20"
  },
  {
    id: 4,
    title: "Cyber Security Awareness",
    author: "IT Security",
    views: "12k",
    likes: "1.5k",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop",
    duration: "15:30"
  }
];

// --- SUB-COMPONENTS ---

const LearningCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[380px] rounded-[2.5rem] relative overflow-hidden shadow-2xl border border-white/10 group">
      {CAROUSEL_SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}></div>
          {/* Abstract Background Pattern */}
          <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] ${slide.pattern} mix-blend-overlay`}></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-[60px]"></div>
          
          <div className="relative z-20 h-full flex flex-col justify-end p-10 pb-14 text-white">
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-max border border-white/20 shadow-lg">
              {slide.tag}
            </div>
            <h2 className="text-5xl font-extrabold tracking-tighter leading-none mb-2 drop-shadow-lg">{slide.title}</h2>
            <h2 className="text-3xl font-light tracking-tight text-orange-100/90 mb-6">{slide.subtitle}</h2>
            <p className="text-sm text-white/90 font-medium leading-relaxed border-l-2 border-orange-400 pl-4 backdrop-blur-sm bg-black/10 p-3 rounded-r-lg">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 right-10 z-30 flex gap-2">
        {CAROUSEL_SLIDES.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${current === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
};

const QuickActionBtn: React.FC<{ icon: React.ReactNode; label: string; onClick?: () => void }> = ({ icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className="flex flex-col items-center justify-center gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/50 hover:shadow-xl hover:-translate-y-1 hover:bg-white transition-all duration-300 group h-full"
  >
    <div className="p-3.5 bg-orange-50 text-brand-orange rounded-2xl group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-inner group-hover:shadow-orange-500/30 group-hover:rounded-xl">
      {icon}
    </div>
    <span className="text-xs font-bold text-slate-600 group-hover:text-brand-orange text-center leading-tight">{label}</span>
  </button>
);

const ChatInterface: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
    <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[600px] animate-slide-up">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-orange to-[#D15B00] p-6 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
            <Sparkles size={20} className="text-yellow-300" />
          </div>
          <div>
            <h3 className="font-bold text-lg">iCare Assistant</h3>
            <p className="text-xs text-orange-100 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
            </p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X size={20} />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-slate-50 p-6 overflow-y-auto space-y-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
             <Sparkles size={16} className="text-brand-orange" />
          </div>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[85%]">
            <p className="text-sm text-slate-700">Hello Utkarsh! I'm your virtual assistant. I can help you with:</p>
            <div className="mt-3 flex flex-wrap gap-2">
               <button className="px-3 py-1.5 bg-orange-50 text-brand-orange text-xs font-bold rounded-lg hover:bg-orange-100 transition-colors">PF Balance</button>
               <button className="px-3 py-1.5 bg-orange-50 text-brand-orange text-xs font-bold rounded-lg hover:bg-orange-100 transition-colors">Holiday List</button>
               <button className="px-3 py-1.5 bg-orange-50 text-brand-orange text-xs font-bold rounded-lg hover:bg-orange-100 transition-colors">Tax Regime</button>
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="relative flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Ask iCare..." 
            className="flex-1 bg-slate-100 border-none rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-brand-orange/50 outline-none transition-all"
            autoFocus
          />
          <button className="absolute right-2 p-2 bg-brand-orange text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md">
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(FEATURED_VIDEOS[0]);

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row h-[500px]">
      {/* Main Player */}
      <div className="flex-[2] relative group cursor-pointer bg-black h-full">
        <img src={activeVideo.thumbnail} alt={activeVideo.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30 shadow-2xl">
            <Play fill="white" className="text-white ml-2" size={40} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
          <div className="flex items-center gap-3 mb-2">
             <span className="bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">Now Playing</span>
             <span className="text-xs font-medium text-slate-300 flex items-center gap-1"><Clock size={12} /> {activeVideo.duration}</span>
          </div>
          <h3 className="text-3xl font-bold leading-tight mb-2">{activeVideo.title}</h3>
          <p className="text-base text-gray-300 font-medium">{activeVideo.author}</p>
        </div>
      </div>

      {/* Playlist Side */}
      <div className="flex-1 bg-slate-50 border-l border-slate-100 flex flex-col h-full">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-white z-10">
          <h3 className="font-bold text-slate-800 text-lg">Up Next</h3>
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider cursor-pointer hover:underline">View All</span>
        </div>
        <div className="overflow-y-auto p-4 space-y-3 custom-scrollbar flex-1">
          {FEATURED_VIDEOS.map((video) => (
            <div 
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className={`flex gap-4 p-3 rounded-xl cursor-pointer transition-all group ${activeVideo.id === video.id ? 'bg-white shadow-md border border-slate-100' : 'hover:bg-white hover:shadow-sm border border-transparent'}`}
            >
              <div className="w-32 h-20 rounded-lg overflow-hidden bg-slate-200 relative flex-shrink-0 shadow-sm">
                <img src={video.thumbnail} alt="" className="w-full h-full object-cover" />
                {activeVideo.id === video.id && (
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-2 h-2 bg-brand-orange rounded-full animate-ping"></div>
                   </div>
                )}
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h4 className={`text-sm font-bold line-clamp-2 mb-1.5 leading-tight ${activeVideo.id === video.id ? 'text-brand-orange' : 'text-slate-700 group-hover:text-brand-orange transition-colors'}`}>{video.title}</h4>
                <p className="text-xs text-slate-400">{video.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CommunityPost: React.FC<{ author: string; role: string; content: string; image?: string; likes: number; comments: number }> = ({ author, role, content, image, likes, comments }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow mb-4 last:mb-0">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 p-[2px]">
           <img src={`https://ui-avatars.com/api/?name=${author}&background=fff`} alt={author} className="rounded-full w-full h-full" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-800">{author}</h4>
          <p className="text-[11px] text-slate-500">{role}</p>
        </div>
      </div>
      <button className="text-slate-300 hover:text-slate-600">
        <MoreHorizontal size={18} />
      </button>
    </div>
    
    <p className="text-sm text-slate-600 leading-relaxed mb-3">{content}</p>
    
    {image && (
      <div className="mb-4 rounded-xl overflow-hidden h-40 w-full bg-slate-100">
        <img src={image} alt="Post content" className="w-full h-full object-cover" />
      </div>
    )}

    <div className="flex items-center gap-6 border-t border-slate-50 pt-3">
      <button className="flex items-center gap-1.5 text-slate-400 hover:text-red-500 text-xs font-medium transition-colors">
        <Heart size={16} /> {likes}
      </button>
      <button className="flex items-center gap-1.5 text-slate-400 hover:text-blue-500 text-xs font-medium transition-colors">
        <MessageCircle size={16} /> {comments}
      </button>
      <button className="flex items-center gap-1.5 text-slate-400 hover:text-green-500 text-xs font-medium ml-auto transition-colors">
        <Share2 size={16} /> Share
      </button>
    </div>
  </div>
);

// --- ATTENDANCE & LEAVE COMPONENTS ---

interface DayData {
  status: 'present' | 'absent' | 'leave' | 'holiday' | 'weekend' | 'future';
  timeIn?: string;
  details?: string;
  type?: string;
}

const AttendanceWidget: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number>(25); // Default to today
  
  const getDayData = (day: number): DayData => {
    if (day === 25) return { status: 'present', timeIn: '09:09', details: 'Regular Shift' }; 
    if (day === 11) return { status: 'absent', details: 'Missed Punch' };
    if (day === 14 || day === 15) return { status: 'leave', details: 'Casual Leave' };
    if (day === 27) return { status: 'holiday', details: 'Guru Nanak Jayanti' };
    if ([2,3,9,10,16,17,23,24,30].includes(day)) return { status: 'weekend', details: 'Weekly Off' };
    if (day > 25) return { status: 'future' };
    return { status: 'present', timeIn: '09:00', details: 'Regular Shift' };
  };

  const activeData = getDayData(selectedDate);

  const renderDay = (day: number) => {
    const data = getDayData(day);
    const isSelected = selectedDate === day;
    const isToday = day === 25;

    let baseClasses = "aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 relative group ";
    let statusClasses = "";
    
    if (isSelected) {
       statusClasses = "bg-slate-900 text-white shadow-lg shadow-slate-900/30 scale-110 z-10";
    } else if (data.status === 'future') {
       statusClasses = "text-slate-200 cursor-default";
    } else {
       statusClasses = "hover:bg-slate-100 text-slate-600";
       if (isToday) statusClasses += " border-2 border-brand-orange text-brand-orange font-bold";
    }

    return (
      <button key={day} onClick={() => data.status !== 'future' && setSelectedDate(day)} className={baseClasses + statusClasses}>
        {day}
        {/* Status Indicators for unselected days */}
        {!isSelected && (
           <div className="absolute -bottom-1 flex gap-0.5">
              {data.status === 'absent' && <div className="w-1 h-1 rounded-full bg-red-500"></div>}
              {data.status === 'leave' && <div className="w-1 h-1 rounded-full bg-orange-500"></div>}
              {data.status === 'holiday' && <div className="w-1 h-1 rounded-full bg-purple-500"></div>}
           </div>
        )}
      </button>
    );
  };

  return (
    <div className="bg-white rounded-[2rem] p-1 shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-shadow">
       {/* Left: Calendar */}
       <div className="p-8 flex-1">
          <div className="flex items-center justify-between mb-8">
             <div>
                <h2 className="text-xl font-bold text-slate-800">November 2025</h2>
                <p className="text-xs text-slate-400 font-medium mt-1">Attendance Overview</p>
             </div>
             <div className="flex gap-1 bg-slate-50 p-1 rounded-full border border-slate-100">
                <button className="p-2 hover:bg-white rounded-full text-slate-500 transition-colors shadow-sm"><ChevronLeft size={16}/></button>
                <button className="p-2 hover:bg-white rounded-full text-slate-500 transition-colors shadow-sm"><ChevronRight size={16}/></button>
             </div>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 mb-4 text-center max-w-md mx-auto">
             {['Mo','Tu','We','Th','Fr','Sa'].map((d, i) => <span key={i} className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{d}</span>)}
             <span className="flex justify-center items-center text-brand-orange"><Sun size={16} /></span>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
             {Array.from({ length: 30 }, (_, i) => i + 1).map(renderDay)}
          </div>
       </div>

       {/* Right: Details Panel */}
       <div className="md:w-80 bg-slate-50/80 border-l border-slate-100 p-8 flex flex-col justify-between relative">
          {/* Selected Date Info */}
          <div>
             <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex flex-col items-center justify-center text-slate-800">
                   <span className="text-xs font-bold uppercase text-slate-400 leading-none">Nov</span>
                   <span className="text-xl font-bold leading-none mt-0.5">{selectedDate}</span>
                </div>
                <div>
                   <p className="font-bold text-slate-800 text-lg">Selected Day</p>
                   <p className="text-xs text-slate-500">Status Detail</p>
                </div>
             </div>

             {/* Dynamic Card based on Status */}
             {activeData.status === 'present' && (
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative overflow-hidden">
                   <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                         <span className="text-sm font-bold text-slate-700">Present</span>
                      </div>
                      <Clock size={16} className="text-slate-300" />
                   </div>
                   <div className="flex justify-between items-end relative z-10">
                      <div>
                         <p className="text-2xl font-bold text-slate-800 tracking-tight">{activeData.timeIn}</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Punch In</p>
                      </div>
                      <div className="text-right">
                         <p className="text-2xl font-bold text-slate-800 tracking-tight">18:30</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Punch Out</p>
                      </div>
                   </div>
                   {/* Background Decoration */}
                   <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-50 rounded-full blur-2xl opacity-60"></div>
                </div>
             )}

            {(activeData.status === 'leave' || activeData.status === 'holiday' || activeData.status === 'weekend' || activeData.status === 'absent') && (
                <div className={`bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative overflow-hidden`}>
                   <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2.5 rounded-xl ${activeData.status === 'holiday' ? 'bg-purple-50 text-purple-600' : activeData.status === 'leave' ? 'bg-orange-50 text-orange-600' : 'bg-slate-100 text-slate-600'}`}>
                         {activeData.status === 'holiday' ? <Gift size={20} /> : activeData.status === 'leave' ? <Palmtree size={20} /> : <CalendarDays size={20} />}
                      </div>
                      <div>
                         <p className="text-sm font-bold text-slate-800 capitalize">{activeData.status}</p>
                         <p className="text-xs text-slate-400">{activeData.details}</p>
                      </div>
                   </div>
                   {activeData.status === 'absent' && <p className="text-xs text-red-500 font-medium">Action required: Please regularize.</p>}
                </div>
             )}
          </div>

          {/* Monthly Stats Footer */}
          <div className="pt-6 border-t border-slate-200">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Monthly Summary</p>
             <div className="flex justify-between">
                <div className="text-center">
                   <p className="text-lg font-bold text-slate-800 leading-none">22</p>
                   <p className="text-[10px] text-slate-400 font-medium mt-1">Present</p>
                </div>
                <div className="w-px bg-slate-200 h-8"></div>
                <div className="text-center">
                   <p className="text-lg font-bold text-slate-800 leading-none">02</p>
                   <p className="text-[10px] text-slate-400 font-medium mt-1">Leaves</p>
                </div>
                <div className="w-px bg-slate-200 h-8"></div>
                 <div className="text-center">
                   <p className="text-lg font-bold text-slate-800 leading-none">04</p>
                   <p className="text-[10px] text-slate-400 font-medium mt-1">Holidays</p>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

const LeaveWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
       {/* Header */}
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
             <h2 className="text-2xl font-bold text-slate-800">Leave & Holidays</h2>
             <p className="text-slate-400 text-sm font-medium">Manage your time off effectively</p>
          </div>
          <div className="flex gap-3">
              <button className="text-slate-500 hover:text-slate-800 font-bold text-xs px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">View Holiday List</button>
              <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 flex items-center gap-2 active:scale-95">
                 Apply Leave <ArrowRight size={14} />
              </button>
          </div>
       </div>

       <div className="flex flex-col xl:flex-row gap-8">
          {/* Left: Balance Cards */}
          <div className="flex gap-4 xl:w-1/3 xl:flex-col">
             {/* Casual Leave Card */}
             <div className="flex-1 bg-orange-50/50 rounded-2xl p-5 border border-orange-100 relative overflow-hidden group/card hover:border-orange-200 transition-colors">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover/card:opacity-20 transition-opacity">
                   <Briefcase size={48} className="text-brand-orange" />
                </div>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Casual Leave</p>
                <div className="flex items-end gap-2 relative z-10">
                   <span className="text-3xl font-bold text-slate-800">01</span>
                   <span className="text-slate-400 text-xs font-bold mb-1.5">/ 12 days</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-orange-200/50 h-1.5 rounded-full mt-4 overflow-hidden">
                   <div className="bg-brand-orange w-[8%] h-full rounded-full"></div>
                </div>
             </div>

             {/* Privilege Leave Card */}
              <div className="flex-1 bg-blue-50/50 rounded-2xl p-5 border border-blue-100 relative overflow-hidden group/card hover:border-blue-200 transition-colors">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover/card:opacity-20 transition-opacity">
                   <Heart size={48} className="text-blue-600" />
                </div>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Privilege Leave</p>
                <div className="flex items-end gap-2 relative z-10">
                   <span className="text-3xl font-bold text-slate-800">15</span>
                   <span className="text-slate-400 text-xs font-bold mb-1.5">/ 24 days</span>
                </div>
                 <div className="w-full bg-blue-200/50 h-1.5 rounded-full mt-4 overflow-hidden">
                   <div className="bg-blue-600 w-[62%] h-full rounded-full"></div>
                </div>
             </div>
          </div>

          {/* Right: History Timeline */}
          <div className="flex-1 bg-slate-50/80 rounded-2xl p-6 border border-slate-100">
             <h3 className="text-xs font-bold text-slate-800 mb-5 flex items-center gap-2 uppercase tracking-wider">
                <Clock size={14} className="text-slate-400"/> Recent Activity
             </h3>
             <div className="space-y-6 relative pl-2">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-slate-200"></div>

                {/* Item 1 */}
                <div className="relative flex gap-5 items-start group">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center shrink-0 z-10 shadow-sm group-hover:scale-110 transition-transform group-hover:border-orange-400">
                      <span className="text-[10px] font-bold text-orange-600">NOV</span>
                   </div>
                   <div className="flex-1 pt-1">
                      <div className="flex justify-between items-start">
                         <div>
                            <p className="text-sm font-bold text-slate-800 group-hover:text-brand-orange transition-colors">Sick Leave</p>
                            <p className="text-xs text-slate-500 mt-0.5">14 Nov - 15 Nov • 2 Days</p>
                         </div>
                         <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-md uppercase flex items-center gap-1">
                           <CheckCircle2 size={10} /> Approved
                         </span>
                      </div>
                   </div>
                </div>
                
                {/* Item 2 */}
                <div className="relative flex gap-5 items-start group">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 z-10 shadow-sm group-hover:scale-110 transition-transform">
                      <span className="text-[10px] font-bold text-slate-400">SEP</span>
                   </div>
                   <div className="flex-1 pt-1">
                      <div className="flex justify-between items-start">
                         <div>
                            <p className="text-sm font-bold text-slate-800 group-hover:text-brand-orange transition-colors">Casual Leave</p>
                            <p className="text-xs text-slate-500 mt-0.5">19 Sep • 1 Day</p>
                         </div>
                         <span className="px-2 py-1 bg-slate-200 text-slate-500 text-[10px] font-bold rounded-md uppercase">Past</span>
                      </div>
                   </div>
                </div>
             </div>
             
             <button className="w-full mt-4 py-2 text-xs font-bold text-brand-orange hover:bg-orange-50 rounded-lg transition-colors">View All History</button>
          </div>
       </div>
    </div>
  )
}


export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {isChatOpen && <ChatInterface onClose={() => setIsChatOpen(false)} />}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#F37E20] to-[#D15B00] pb-32 pt-8 rounded-b-[3rem] shadow-2xl shadow-orange-900/20 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-900 opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Greetings & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-8">
              
              <div className="space-y-8">
                {/* Greeting */}
                <div className="animate-fade-in-up">
                  <h1 className="text-4xl md:text-5xl font-light text-white tracking-wide">
                    Hey Utkarsh, <span className="font-bold">Good Morning!</span>
                  </h1>
                  <p className="text-orange-100 mt-2 text-lg">Ready to start your productive day?</p>
                </div>

                {/* Smart Chat Trigger */}
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="w-full text-left relative max-w-2xl shadow-2xl shadow-orange-900/20 rounded-[2rem] group transition-all hover:scale-[1.01] bg-white overflow-hidden"
                >
                  <div className="flex items-center w-full pl-6 pr-4 py-4">
                     <div className="p-2 bg-orange-50 rounded-full text-brand-orange mr-4 animate-pulse">
                        <Sparkles size={20} />
                     </div>
                     <div className="flex-1">
                       <span className="block text-slate-800 font-bold text-lg">Ask iCare Assistant</span>
                       <span className="block text-slate-400 text-sm">"What is my leave balance?" • "Download Payslip"</span>
                     </div>
                     <div className="p-2.5 bg-brand-orange rounded-full text-white shadow-md">
                        <Mic size={20} />
                     </div>
                  </div>
                </button>
              </div>

              {/* Quick Actions Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-2xl">
                <QuickActionBtn icon={<Users size={22} />} label="iNetwork" />
                <QuickActionBtn icon={<FileText size={22} />} label="Policies" />
                <QuickActionBtn icon={<FileText size={22} />} label="E-Settlement" />
                <QuickActionBtn icon={<Users size={22} />} label="Referrals" />
                <QuickActionBtn icon={<Briefcase size={22} />} label="Job Postings" />
                <QuickActionBtn 
                  icon={<LayoutDashboard size={22} />} 
                  label="Financial Dashboard" 
                  onClick={() => onNavigate('dashboard')} 
                />
              </div>
            </div>

            {/* Right Column: Carousel (Matched Height) */}
            <div className="lg:col-span-5 h-full min-h-[450px] lg:min-h-0">
               <LearningCarousel />
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Area - Overlapping the hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-8">

        {/* Middle Row: Leave, Attendance, Community */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
           
           {/* Left Column: Stacked Widgets (Span 2) */}
           <div className="lg:col-span-2 flex flex-col gap-8">
             {/* 1. Leave Widget (Top) */}
             <LeaveWidget />

             {/* 2. Attendance Widget (Bottom) */}
             <AttendanceWidget />
           </div>

           {/* Right Column: Community Connect (Span 1) */}
           <div className="lg:col-span-1">
             <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Community</h2>
                    <button className="text-brand-orange text-sm font-semibold hover:underline">View All</button>
                </div>
                <div className="flex-1 space-y-4">
                    <CommunityPost 
                      author="Priya Sharma"
                      role="Product Manager"
                      content="Thrilled to announce the launch of iMobile Pay features! 🚀"
                      likes={42}
                      comments={5}
                    />
                    <CommunityPost 
                      author="Amit Verma"
                      role="Regional Head"
                      content="Great session today on Leadership. #Learning"
                      likes={85}
                      comments={12}
                    />
                     <CommunityPost 
                      author="John Doe"
                      role="Tech Lead"
                      content="Our team just shipped the new dashboard. Check it out!"
                      likes={120}
                      comments={24}
                    />
                </div>
             </div>
           </div>

        </div>

        {/* Bottom Row: Full Width Video Section */}
        <div className="pb-12">
            <div className="flex items-center gap-3 mb-6 ml-2">
               <div className="w-1.5 h-8 bg-brand-orange rounded-full"></div>
               <h2 className="text-2xl font-bold text-slate-800">Featured Content</h2>
            </div>
            <VideoSection />
        </div>

      </div>
    </div>
  );
};
