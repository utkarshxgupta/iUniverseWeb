import React, { useState, useEffect } from 'react';
import { Search, Mic, FileText, Briefcase, Users, LayoutDashboard, ChevronRight, ChevronLeft, Calendar, Heart, Eye, Sparkles, Play, MessageCircle, Share2, MoreHorizontal, Sun, X, Send, Clock, Coffee, Gift, AlertCircle, ArrowRight, CheckCircle2, CalendarDays, Palmtree, Plane, Pill, Zap, QrCode, Wifi, Download, Mail, Phone } from 'lucide-react';

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
    <div className="w-full h-full min-h-[320px] rounded-[2rem] relative overflow-hidden shadow-xl shadow-orange-900/10 group border-[4px] border-white ring-1 ring-slate-100/50">
      {CAROUSEL_SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}></div>
          {/* Abstract Background Pattern */}
          <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] ${slide.pattern} mix-blend-overlay`}></div>
          
          <div className="relative z-20 h-full flex flex-col justify-end p-8 pb-10 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 w-max border border-white/20">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></div>
              {slide.tag}
            </div>
            <h2 className="text-4xl font-extrabold tracking-tighter leading-none mb-1 drop-shadow-md">{slide.title}</h2>
            <h2 className="text-xl font-light tracking-tight text-orange-100/90 mb-4">{slide.subtitle}</h2>
            <p className="text-xs text-white/80 font-medium leading-relaxed max-w-sm line-clamp-2">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 right-8 z-30 flex gap-1.5">
        {CAROUSEL_SLIDES.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 shadow-sm backdrop-blur-sm ${current === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
};

const QuickActionBtn: React.FC<{ icon: React.ReactNode; label: string; onClick?: () => void; active?: boolean }> = ({ icon, label, onClick, active }) => (
  <button 
    onClick={onClick}
    className="flex flex-col items-center justify-center gap-1 p-2 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-orange-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group h-28 w-full relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Icon Area */}
    <div className="relative p-2 text-slate-400 group-hover:text-brand-orange group-hover:scale-110 transition-all duration-300">
      {React.cloneElement(icon as React.ReactElement, { size: 28, strokeWidth: 1.5 })}
    </div>
    <span className="relative text-[10px] font-bold text-center leading-tight uppercase tracking-wide text-slate-500 group-hover:text-slate-900">{label}</span>
  </button>
);

const ChatInterface: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fade-in">
    <div className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[600px] animate-slide-up ring-1 ring-white/50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-orange to-[#D15B00] p-6 flex justify-between items-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-inner">
            <Sparkles size={24} className="text-yellow-300" />
          </div>
          <div>
            <h3 className="font-bold text-xl tracking-tight">iCare Assistant</h3>
            <p className="text-xs text-orange-100 flex items-center gap-1.5 font-medium mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span> 
              Online & Ready
            </p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors relative z-10">
          <X size={24} />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-slate-50 p-6 overflow-y-auto space-y-6">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20 text-white">
             <Sparkles size={18} />
          </div>
          <div className="space-y-2 max-w-[85%]">
            <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-slate-700 leading-relaxed">
              <p>Hello Utkarsh! 👋 I'm your dedicated virtual assistant.</p>
              <p className="mt-2">I can help you check balances, download reports, or answer policy questions. What's on your mind?</p>
            </div>
            <div className="flex flex-wrap gap-2 animate-fade-in-up" style={{animationDelay: '100ms'}}>
               {['PF Balance', 'Holiday List', 'Tax Regime', 'Raise Ticket'].map((tag) => (
                 <button key={tag} className="px-4 py-2 bg-white border border-orange-100 text-brand-orange text-xs font-bold rounded-xl hover:bg-orange-50 hover:scale-105 transition-all shadow-sm">
                   {tag}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="p-5 bg-white border-t border-slate-100">
        <div className="relative flex items-center gap-3">
          <button className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 transition-colors">
            <Mic size={20} />
          </button>
          <input 
            type="text" 
            placeholder="Type your question..." 
            className="flex-1 bg-slate-50 border-slate-200 border rounded-xl py-3.5 px-4 text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-all shadow-inner"
            autoFocus
          />
          <button className="p-3.5 bg-brand-orange text-white rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(FEATURED_VIDEOS[0]);

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/60 border border-white/50 ring-1 ring-slate-100 flex flex-col lg:flex-row h-[550px]">
      {/* Main Player */}
      <div className="flex-[2] relative group cursor-pointer bg-black h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
        <img src={activeVideo.thumbnail} alt={activeVideo.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
        
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl text-brand-orange pl-1">
              <Play fill="currentColor" size={32} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-10 z-20 text-white">
          <div className="flex items-center gap-3 mb-3 animate-fade-in-up">
             <span className="bg-brand-orange text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg shadow-orange-900/20">Featured</span>
             <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider flex items-center gap-2 border border-white/10">
               <Clock size={12} /> {activeVideo.duration}
             </span>
          </div>
          <h3 className="text-4xl font-bold leading-tight mb-2 drop-shadow-md">{activeVideo.title}</h3>
          <p className="text-lg text-slate-200 font-medium flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-500"></div>
            {activeVideo.author}
          </p>
        </div>
      </div>

      {/* Playlist Side */}
      <div className="flex-1 bg-white border-l border-slate-100 flex flex-col h-full">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white/50 backdrop-blur-sm z-10 sticky top-0">
          <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
            <div className="w-1.5 h-6 bg-brand-orange rounded-full"></div>
            Up Next
          </h3>
          <button className="text-xs font-bold text-slate-400 hover:text-brand-orange transition-colors">View All</button>
        </div>
        <div className="overflow-y-auto p-4 space-y-3 custom-scrollbar flex-1 bg-slate-50/50">
          {FEATURED_VIDEOS.map((video) => (
            <div 
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className={`flex gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300 group ${activeVideo.id === video.id ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-100 scale-[1.02]' : 'hover:bg-white hover:shadow-md'}`}
            >
              <div className="w-36 h-24 rounded-xl overflow-hidden bg-slate-200 relative flex-shrink-0 shadow-inner group-hover:shadow-none transition-shadow">
                <img src={video.thumbnail} alt="" className="w-full h-full object-cover" />
                {activeVideo.id === video.id && (
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <Play fill="white" size={12} className="text-white ml-0.5"/>
                      </div>
                   </div>
                )}
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
                <h4 className={`text-sm font-bold line-clamp-2 mb-2 leading-snug ${activeVideo.id === video.id ? 'text-brand-orange' : 'text-slate-700 group-hover:text-brand-orange transition-colors'}`}>{video.title}</h4>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-slate-400 font-medium">{video.author}</p>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <p className="text-[10px] text-slate-400">{video.views} views</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CommunityPost: React.FC<{ author: string; role: string; content: string; image?: string; likes: number; comments: number }> = ({ author, role, content, image, likes, comments }) => (
  <div className="bg-white p-6 rounded-[1.5rem] border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 mb-5 last:mb-0 group">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 p-[2px] shadow-sm">
           <div className="w-full h-full rounded-full bg-white p-[2px]">
             <img src={`https://ui-avatars.com/api/?name=${author}&background=random`} alt={author} className="rounded-full w-full h-full object-cover" />
           </div>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-800 group-hover:text-brand-orange transition-colors">{author}</h4>
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">{role}</p>
        </div>
      </div>
      <button className="text-slate-300 hover:text-slate-600 p-2 hover:bg-slate-50 rounded-full transition-colors">
        <MoreHorizontal size={20} />
      </button>
    </div>
    
    <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">{content}</p>
    
    {image && (
      <div className="mb-5 rounded-2xl overflow-hidden h-48 w-full bg-slate-100 shadow-inner relative group/img cursor-pointer">
        <img src={image} alt="Post content" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors"></div>
      </div>
    )}

    <div className="flex items-center gap-6 border-t border-slate-50 pt-4">
      <button className="flex items-center gap-2 text-slate-400 hover:text-pink-500 text-xs font-bold transition-colors group/btn">
        <div className="p-1.5 rounded-full bg-slate-50 group-hover/btn:bg-pink-50 transition-colors">
           <Heart size={16} className="group-hover/btn:fill-pink-500 transition-colors" />
        </div>
        {likes} Likes
      </button>
      <button className="flex items-center gap-2 text-slate-400 hover:text-blue-500 text-xs font-bold transition-colors group/btn">
        <div className="p-1.5 rounded-full bg-slate-50 group-hover/btn:bg-blue-50 transition-colors">
           <MessageCircle size={16} />
        </div>
        {comments} Comments
      </button>
      <button className="flex items-center gap-2 text-slate-400 hover:text-green-500 text-xs font-bold ml-auto transition-colors group/btn">
        <div className="p-1.5 rounded-full bg-slate-50 group-hover/btn:bg-green-50 transition-colors">
           <Share2 size={16} />
        </div>
        Share
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

    let baseClasses = "aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 relative group ";
    let statusClasses = "";
    
    if (isSelected) {
       statusClasses = "bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-110 z-10 ring-4 ring-white";
    } else if (data.status === 'future') {
       statusClasses = "text-slate-200 cursor-default";
    } else {
       statusClasses = "hover:bg-white hover:shadow-md hover:scale-105 text-slate-600";
       if (isToday) statusClasses += " border-2 border-brand-orange text-brand-orange font-bold bg-orange-50";
    }

    return (
      <button key={day} onClick={() => data.status !== 'future' && setSelectedDate(day)} className={baseClasses + statusClasses}>
        {day}
        {/* Status Indicators for unselected days */}
        {!isSelected && (
           <div className="absolute bottom-1 flex gap-0.5">
              {data.status === 'absent' && <div className="w-1 h-1 rounded-full bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.5)]"></div>}
              {data.status === 'leave' && <div className="w-1 h-1 rounded-full bg-orange-500 shadow-[0_0_4px_rgba(249,115,22,0.5)]"></div>}
              {data.status === 'holiday' && <div className="w-1 h-1 rounded-full bg-purple-500 shadow-[0_0_4px_rgba(168,85,247,0.5)]"></div>}
           </div>
        )}
      </button>
    );
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
       {/* Left: Calendar */}
       <div className="p-8 flex-1 bg-gradient-to-br from-white to-slate-50/50">
          <div className="flex items-center justify-between mb-8">
             <div>
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">November <span className="text-slate-400 font-light">2025</span></h2>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Attendance Overview</p>
             </div>
             <div className="flex gap-2 bg-white p-1.5 rounded-full border border-slate-100 shadow-sm">
                <button className="p-2 hover:bg-slate-50 rounded-full text-slate-500 transition-colors"><ChevronLeft size={16}/></button>
                <button className="p-2 hover:bg-slate-50 rounded-full text-slate-500 transition-colors"><ChevronRight size={16}/></button>
             </div>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 mb-4 text-center max-w-md mx-auto">
             {['Mo','Tu','We','Th','Fr','Sa'].map((d, i) => <span key={i} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{d}</span>)}
             <span className="flex justify-center items-center text-brand-orange"><Sun size={16} strokeWidth={2.5} /></span>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-3 max-w-md mx-auto">
             {Array.from({ length: 30 }, (_, i) => i + 1).map(renderDay)}
          </div>
       </div>

       {/* Right: Details Panel */}
       <div className="md:w-96 bg-white border-l border-slate-100 p-8 flex flex-col justify-between relative shadow-[-10px_0_40px_rgba(0,0,0,0.02)] z-10">
          {/* Selected Date Info */}
          <div>
             <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-900/20 flex flex-col items-center justify-center border border-slate-700">
                   <span className="text-[10px] font-bold uppercase text-slate-400 leading-none mb-1">Nov</span>
                   <span className="text-3xl font-bold leading-none tracking-tighter">{selectedDate}</span>
                </div>
                <div>
                   <p className="font-bold text-slate-800 text-xl tracking-tight">Daily Log</p>
                   <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Status & Timing</p>
                </div>
             </div>

             {/* Dynamic Card based on Status */}
             {activeData.status === 'present' && (
                <div className="bg-gradient-to-br from-emerald-50 to-white rounded-[1.5rem] p-6 border border-emerald-100 shadow-sm relative overflow-hidden group/card hover:shadow-md transition-all">
                   <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2.5 px-3 py-1.5 bg-emerald-100/50 rounded-full border border-emerald-100">
                         <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                         <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Present</span>
                      </div>
                      <Clock size={18} className="text-emerald-300" />
                   </div>
                   <div className="flex justify-between items-end relative z-10">
                      <div>
                         <p className="text-3xl font-bold text-slate-800 tracking-tighter">{activeData.timeIn}</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Punch In</p>
                      </div>
                      <div className="text-right">
                         <p className="text-3xl font-bold text-slate-300 tracking-tighter">18:30</p>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Punch Out</p>
                      </div>
                   </div>
                   {/* Background Decoration */}
                   <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-400 opacity-10 rounded-full blur-3xl group-hover/card:opacity-20 transition-opacity"></div>
                </div>
             )}

            {(activeData.status === 'leave' || activeData.status === 'holiday' || activeData.status === 'weekend' || activeData.status === 'absent') && (
                <div className={`bg-white rounded-[1.5rem] p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group/card hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all`}>
                   <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3.5 rounded-2xl ${activeData.status === 'holiday' ? 'bg-purple-50 text-purple-600' : activeData.status === 'leave' ? 'bg-orange-50 text-orange-600' : 'bg-slate-100 text-slate-600'} shadow-inner`}>
                         {activeData.status === 'holiday' ? <Gift size={24} /> : activeData.status === 'leave' ? <Palmtree size={24} /> : <CalendarDays size={24} />}
                      </div>
                      <div>
                         <p className="text-lg font-bold text-slate-800 capitalize tracking-tight">{activeData.status}</p>
                         <p className="text-xs text-slate-500 font-medium">{activeData.details}</p>
                      </div>
                   </div>
                   {activeData.status === 'absent' && (
                     <div className="bg-red-50 border border-red-100 rounded-xl p-3 flex items-center gap-3">
                        <AlertCircle size={16} className="text-red-500 shrink-0" />
                        <p className="text-xs text-red-600 font-bold">Please regularize this absence.</p>
                     </div>
                   )}
                </div>
             )}
          </div>

          {/* Monthly Stats Footer */}
          <div className="pt-8 border-t border-slate-100">
             <div className="flex justify-between items-end mb-4">
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monthly Summary</p>
               <button className="text-brand-orange hover:text-orange-600 transition-colors"><ChevronRight size={16} /></button>
             </div>
             <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-slate-50 rounded-2xl border border-slate-100">
                   <p className="text-xl font-bold text-slate-800 leading-none">22</p>
                   <p className="text-[10px] text-slate-400 font-bold mt-1">Present</p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-2xl border border-orange-100/50">
                   <p className="text-xl font-bold text-brand-orange leading-none">02</p>
                   <p className="text-[10px] text-orange-400 font-bold mt-1">Leaves</p>
                </div>
                 <div className="text-center p-3 bg-purple-50 rounded-2xl border border-purple-100/50">
                   <p className="text-xl font-bold text-purple-600 leading-none">04</p>
                   <p className="text-[10px] text-purple-400 font-bold mt-1">Holiday</p>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

const LeaveWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-[2.5rem] p-1 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
       <div className="p-8 pb-10 flex flex-col xl:flex-row gap-10 bg-gradient-to-b from-white to-slate-50/30 rounded-[2.4rem]">
         
         {/* Left Panel: Actions & Balances */}
         <div className="xl:w-5/12 flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Time Off</h2>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Balance & Requests</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                 <Plane size={20} />
              </div>
            </div>

            <div className="space-y-4 flex-1">
               {/* Casual Leave Card */}
               <div className="group/card relative bg-white rounded-[1.5rem] p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="flex justify-between items-start relative z-10">
                     <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Casual Leave</p>
                        <div className="flex items-baseline gap-1">
                           <span className="text-3xl font-bold text-slate-800 tracking-tight">01</span>
                           <span className="text-sm text-slate-400 font-medium">/ 12</span>
                        </div>
                     </div>
                     <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover/card:scale-110 transition-transform">
                        <Briefcase size={18} />
                     </div>
                  </div>
                  {/* Liquid Progress Bar */}
                  <div className="mt-4 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 w-[8%] rounded-full relative">
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 blur-[2px]"></div>
                     </div>
                  </div>
               </div>

               {/* Privilege Leave Card */}
               <div className="group/card relative bg-white rounded-[1.5rem] p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="flex justify-between items-start relative z-10">
                     <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Privilege Leave</p>
                        <div className="flex items-baseline gap-1">
                           <span className="text-3xl font-bold text-slate-800 tracking-tight">15</span>
                           <span className="text-sm text-slate-400 font-medium">/ 24</span>
                        </div>
                     </div>
                     <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover/card:scale-110 transition-transform">
                        <Heart size={18} />
                     </div>
                  </div>
                  <div className="mt-4 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 w-[62%] rounded-full relative">
                         <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 blur-[2px]"></div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-8 flex gap-3">
               <button className="flex-1 bg-slate-900 text-white h-12 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 flex items-center justify-center gap-2 active:scale-95">
                 Apply Leave <ArrowRight size={16} />
               </button>
               <button className="px-5 h-12 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">
                 Holiday List
               </button>
            </div>
         </div>

         {/* Divider */}
         <div className="hidden xl:block w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent mx-2"></div>

         {/* Right Panel: Timeline */}
         <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
               <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <Clock size={14} className="text-brand-orange"/> Recent Activity
               </h3>
               <button className="text-[10px] font-bold text-brand-orange hover:underline">VIEW ALL</button>
            </div>

            <div className="relative space-y-8 pl-2">
                {/* Connecting Line */}
                <div className="absolute left-[19px] top-3 bottom-6 w-0.5 bg-slate-100"></div>

                {/* Item 1 */}
                <div className="relative flex gap-5 group">
                   <div className="w-10 h-10 rounded-2xl bg-white border-2 border-orange-100 flex flex-col items-center justify-center shrink-0 z-10 shadow-sm group-hover:scale-110 group-hover:border-orange-400 transition-all duration-300">
                      <span className="text-[9px] font-bold text-slate-400 uppercase leading-none">Nov</span>
                      <span className="text-sm font-bold text-slate-800 leading-none mt-0.5">14</span>
                   </div>
                   <div className="flex-1 bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] group-hover:shadow-[0_8px_20px_rgb(0,0,0,0.05)] transition-shadow">
                      <div className="flex justify-between items-start">
                         <div>
                            <p className="text-sm font-bold text-slate-800 group-hover:text-brand-orange transition-colors">Sick Leave</p>
                            <p className="text-xs text-slate-400 mt-1 font-medium">2 Days • Tue-Wed</p>
                         </div>
                         <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold rounded-lg uppercase flex items-center gap-1.5">
                           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Approved
                         </span>
                      </div>
                   </div>
                </div>
                
                {/* Item 2 */}
                 <div className="relative flex gap-5 group">
                   <div className="w-10 h-10 rounded-2xl bg-white border-2 border-slate-100 flex flex-col items-center justify-center shrink-0 z-10 shadow-sm group-hover:scale-110 transition-all duration-300">
                      <span className="text-[9px] font-bold text-slate-400 uppercase leading-none">Sep</span>
                      <span className="text-sm font-bold text-slate-800 leading-none mt-0.5">19</span>
                   </div>
                   <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 opacity-80 group-hover:opacity-100 transition-opacity">
                      <div className="flex justify-between items-start">
                         <div>
                            <p className="text-sm font-bold text-slate-800 group-hover:text-brand-orange transition-colors">Casual Leave</p>
                            <p className="text-xs text-slate-400 mt-1 font-medium">1 Day</p>
                         </div>
                         <span className="px-2.5 py-1 bg-slate-200 text-slate-500 text-[10px] font-bold rounded-lg uppercase">Consumed</span>
                      </div>
                   </div>
                </div>
             </div>
         </div>
       </div>
    </div>
  )
}


export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="pb-20 font-sans selection:bg-orange-100 selection:text-orange-900 relative">
      
      {isChatOpen && <ChatInterface onClose={() => setIsChatOpen(false)} />}

      {/* Hero Section - New 2-Column Grid Layout */}
      <div className="relative pt-8 pb-6 overflow-hidden z-10">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            
            {/* Left Column: iNetwork + Action Buttons */}
            <div className="flex flex-col gap-6">
              
              {/* Digital Visiting Card (iNetwork Style) */}
              <div className="w-full bg-gradient-to-br from-[#8B3E05] via-[#ea580c] to-[#f97316] rounded-[2rem] p-8 text-white shadow-2xl shadow-orange-900/20 relative overflow-hidden group hover:scale-[1.005] transition-transform duration-500 border-[4px] border-white ring-1 ring-slate-100/50 h-[320px] flex flex-col justify-between">
                  
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-black opacity-20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

                  {/* Top: Brand & Type */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg border border-white/20">
                            <QrCode size={16} className="text-white" />
                          </div>
                          <span className="font-bold text-lg tracking-tight text-white">iNetwork</span>
                      </div>
                      <div className="px-2 py-1 rounded-md bg-black/20 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider border border-white/10 text-orange-100">
                        Visiting Card
                      </div>
                  </div>

                  {/* Middle: User Details */}
                  <div className="relative z-10 mb-6">
                      <h1 className="text-3xl font-bold text-white tracking-tight mb-1 drop-shadow-sm">Utkarsh Gupta</h1>
                      <p className="text-orange-100 font-medium text-sm mb-4">HR Manager</p>

                      <div className="flex flex-col gap-2 text-xs text-white/90">
                            <div className="flex items-center gap-2.5">
                              <Mail size={14} className="opacity-70 shrink-0"/>
                              <span className="font-medium">utkarsh.gupta@icicibank.com</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <Phone size={14} className="opacity-70 shrink-0"/>
                              <span className="font-medium">+91 98765 43210</span>
                            </div>
                      </div>
                  </div>

                  {/* Bottom: Action */}
                  <div className="relative z-10 pt-4 border-t border-white/20 flex justify-between items-center">
                      <span className="text-xs font-medium text-orange-100/80 hidden sm:inline-block">Share your professional identity</span>
                      <button className="flex items-center gap-2 bg-white text-[#8B3E05] px-4 py-2 rounded-lg text-xs font-bold hover:bg-orange-50 transition-colors shadow-lg ml-auto">
                          <Download size={14} /> Download Card
                      </button>
                  </div>
              </div>

              {/* iCare & Finance Buttons Row */}
              <div className="grid grid-cols-2 gap-4">
                  {/* iCare Button */}
                  <button 
                    onClick={() => setIsChatOpen(true)}
                    className="relative h-28 w-full rounded-[2.5rem] bg-white border border-slate-100 p-4 transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.05)] hover:-translate-y-1 hover:border-orange-200 group flex items-center justify-between overflow-hidden"
                  >
                     <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     
                     {/* Icon Left */}
                     <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-brand-orange group-hover:scale-110 transition-transform shadow-sm border border-orange-100/50">
                        <Sparkles size={24} strokeWidth={2} />
                     </div>

                     {/* Text Center */}
                     <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-2">
                        <span className="text-slate-800 font-extrabold text-lg tracking-tight leading-none group-hover:text-brand-orange transition-colors mb-1">Ask iCare</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest group-hover:text-orange-400/80 transition-colors">AI Assistant</span>
                     </div>

                     {/* Icon Right */}
                     <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 text-slate-300 group-hover:border-orange-200 group-hover:text-orange-300 transition-colors bg-white shadow-sm">
                         <MessageCircle size={18} strokeWidth={2.5} />
                     </div>
                  </button>

                  {/* Finance Button */}
                  <button 
                    onClick={() => onNavigate('dashboard')} 
                    className="relative h-28 w-full rounded-[2.5rem] bg-[#1e293b] p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-slate-900/20 group flex items-center justify-between overflow-hidden"
                  >
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-[#1e293b] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Icon Left */}
                     <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm border border-white/10 group-hover:bg-white/20 transition-colors shadow-inner">
                        <LayoutDashboard size={24} strokeWidth={2} />
                     </div>

                     {/* Text Center */}
                     <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-2">
                         <span className="text-white font-extrabold text-lg tracking-tight leading-none mb-1">Finance</span>
                         <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest group-hover:text-slate-300 transition-colors">Dashboard</span>
                      </div>

                      {/* Icon Right */}
                     <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-500 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 border border-white/5">
                         <ArrowRight size={18} strokeWidth={2.5} />
                     </div>
                  </button>
              </div>
            </div>

            {/* Right Column: Carousel + Quick Tiles */}
            <div className="flex flex-col gap-6 h-full">
               {/* Carousel Container */}
               <div className="h-[320px] w-full">
                  <LearningCarousel />
               </div>

               {/* Quick Actions Grid */}
               <div className="grid grid-cols-4 gap-3">
                  <QuickActionBtn icon={<Pill />} label="Policy" />
                  <QuickActionBtn icon={<FileText />} label="Claim" />
                  <QuickActionBtn icon={<Zap />} label="Refer" />
                  <QuickActionBtn icon={<Briefcase />} label="Jobs" />
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 relative z-20 space-y-8">

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
             <div className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-full flex flex-col sticky top-24">
                <div className="flex justify-between items-center mb-6 px-2">
                    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Community</h2>
                    <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-brand-orange hover:text-white transition-all">
                       <ArrowRight size={16} />
                    </button>
                </div>

                {/* Create Post Mini Input */}
                <div className="bg-white rounded-[1.5rem] p-4 border border-slate-100 shadow-sm mb-6 flex gap-3 items-center cursor-text hover:border-orange-200 transition-colors">
                   <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden">
                      <img src="https://ui-avatars.com/api/?name=Utkarsh+Sharma&background=0D8ABC&color=fff" alt="Me" />
                   </div>
                   <p className="text-sm text-slate-400 font-medium flex-1">Share an update...</p>
                   <button className="text-brand-orange"><Sparkles size={18}/></button>
                </div>

                <div className="flex-1 space-y-5 custom-scrollbar pr-1">
                    <CommunityPost 
                      author="Priya Sharma"
                      role="Product Manager"
                      content="Thrilled to announce the launch of iMobile Pay features! 🚀 Great work team."
                      likes={142}
                      comments={15}
                      image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=400&fit=crop"
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
            <div className="flex items-center gap-4 mb-8 ml-2">
               <div className="w-2 h-8 bg-brand-orange rounded-full shadow-lg shadow-orange-500/30"></div>
               <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Featured Content</h2>
            </div>
            <VideoSection />
        </div>

      </div>
    </div>
  );
};