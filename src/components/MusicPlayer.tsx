"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function MusicPlayer({ isLightMode }: { isLightMode: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);
  const waveformRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 1
  const [peaks, setPeaks] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [showVolume, setShowVolume] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (volumeRef.current && !volumeRef.current.contains(event.target as Node)) {
        setShowVolume(false);
      }
    }
    function handleTouchOutside(event: TouchEvent) {
      if (volumeRef.current && !volumeRef.current.contains(event.target as Node)) {
        setShowVolume(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleTouchOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, []);

  // The Man Who Can't Be Moved - The Script
  const songData = {
    title: "The Man Who Can't Be Moved",
    artist: "The Script",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/2d/c6/72/2dc6728e-fe24-c7b3-970c-a24d8af1e4b6/dj.tjxgsvhv.jpg/100x100bb.jpg",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b7/3e/ad/b73ead6e-a8ca-b356-c5cc-8b538c6921ef/mzaf_9877841116191731936.plus.aac.p.m4a"
  };

  // Fetch and decode audio to generate waveform peaks
  useEffect(() => {
    let isCancelled = false;
    
    const generateWaveform = async () => {
      try {
        const response = await fetch(songData.previewUrl);
        const arrayBuffer = await response.arrayBuffer();
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
        
        if (isCancelled) return;

        const channelData = audioBuffer.getChannelData(0);
        const samples = 60; // number of bars
        const blockSize = Math.floor(channelData.length / samples);
        const newPeaks = [];

        for (let i = 0; i < samples; i++) {
          let blockStart = blockSize * i;
          let sum = 0;
          for (let j = 0; j < blockSize; j++) {
            sum += Math.abs(channelData[blockStart + j]);
          }
          newPeaks.push(sum / blockSize);
        }

        const maxPeak = Math.max(...newPeaks);
        const normalizedPeaks = newPeaks.map(p => p / maxPeak);
        
        setPeaks(normalizedPeaks);
        setLoading(false);
      } catch (e) {
        console.error('Error generating waveform', e);
        // Fallback random peaks
        setPeaks(Array.from({length: 60}).map(() => Math.random()));
        setLoading(false);
      }
    };

    generateWaveform();
    return () => { isCancelled = true; };
  }, [songData.previewUrl]);

  // Handle time update
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime / audioRef.current.duration || 0);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 5);
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.duration, audioRef.current.currentTime + 5);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      audioRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      if (val === 0) {
        setIsMuted(true);
        audioRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  // Update seek position from event
  const updateSeek = (clientX: number) => {
    if (!audioRef.current || !audioRef.current.duration || !waveformRef.current) return;
    const rect = waveformRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    audioRef.current.currentTime = percentage * audioRef.current.duration;
    setProgress(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !audioRef.current.duration) return;
    setIsDragging(true);
    updateSeek(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!audioRef.current || !audioRef.current.duration) return;
    setIsDragging(true);
    if (e.touches[0]) {
      updateSeek(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      updateSeek(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        updateSeek(e.touches[0].clientX);
      }
    };
    const handleTouchEnd = () => {
      setIsDragging(false);
    };
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  const handleVolumeClick = () => {
    if (showVolume) {
      toggleMute();
    } else {
      setShowVolume(true);
    }
  };

  return (
    <div className="w-full flex flex-col mt-4 relative">
      <audio 
        ref={audioRef} 
        src={songData.previewUrl} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />
      
      <div className="flex items-center gap-4 w-full">
        {/* Cover Art */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-zinc-800 overflow-hidden relative flex-shrink-0 shadow-md">
          <img src={songData.coverUrl} alt="Cover" className="w-full h-full object-cover" />
        </div>
        
        {/* Song Info */}
        <div className="flex flex-col overflow-hidden flex-1 justify-center">
          <span className={`text-sm sm:text-base font-bold truncate ${isLightMode ? "text-slate-800" : "text-white"}`}>{songData.title}</span>
          <span className={`text-xs sm:text-sm truncate ${isLightMode ? "text-slate-500" : "text-zinc-400"}`}>{songData.artist}</span>
        </div>

        {/* Volume */}
        <div 
          ref={volumeRef} 
          className="relative flex items-center justify-center"
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
        >
          <button onClick={handleVolumeClick} className={`p-2 transition-colors flex-shrink-0 ${isLightMode ? "text-slate-400 hover:text-slate-700" : "text-zinc-400 hover:text-white"}`}>
            {(isMuted || volume === 0) ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
            )}
          </button>
          {showVolume && (
            <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 ${isLightMode ? "bg-white border-zinc-200/80 shadow-lg" : "bg-zinc-900 border-zinc-800 shadow-xl"} rounded-lg p-3 border z-20 flex items-center justify-center h-28 w-8`}>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.05" 
                value={isMuted ? 0 : volume} 
                onChange={handleVolumeChange}
                className={`w-20 h-1 rounded-lg appearance-none cursor-pointer -rotate-90 origin-center ${
                  isLightMode 
                    ? "bg-slate-200 accent-emerald-500 [&::-webkit-slider-runnable-track]:bg-slate-200 [&::-webkit-slider-thumb]:bg-emerald-500 [&::-moz-range-track]:bg-slate-200 [&::-moz-range-thumb]:bg-emerald-500" 
                    : "bg-zinc-700 accent-white [&::-webkit-slider-runnable-track]:bg-zinc-700 [&::-webkit-slider-thumb]:bg-white [&::-moz-range-track]:bg-zinc-700 [&::-moz-range-thumb]:bg-white"
                }`}
                style={{
                  outline: 'none',
                  boxShadow: 'none',
                }}
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Controls & Waveform */}
      <div className="mt-4 flex items-center gap-2 sm:gap-3 w-full">
        {/* Skip Back */}
        <button onClick={skipBackward} className={`p-1.5 sm:p-2 transition-colors flex-shrink-0 ${isLightMode ? "text-slate-600 hover:text-slate-900" : "text-zinc-300 hover:text-white"}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
        </button>

        {/* Play/Pause */}
        <button onClick={togglePlay} className={`p-2 hover:scale-105 transition-transform flex-shrink-0 ${isLightMode ? "text-slate-800 hover:text-slate-950" : "text-white hover:text-gray-200"}`}>
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5"><path d="M5 3l14 9-14 9V3z"/></svg>
          )}
        </button>

        {/* Skip Forward */}
        <button onClick={skipForward} className={`p-1.5 sm:p-2 transition-colors flex-shrink-0 ${isLightMode ? "text-slate-600 hover:text-slate-900" : "text-zinc-300 hover:text-white"}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
        </button>

        {/* Waveform */}
        <div 
          ref={waveformRef}
          className="flex-1 flex items-center justify-between gap-[2px] h-8 sm:h-10 cursor-pointer overflow-hidden px-1 relative select-none" 
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {loading ? (
             <div className={`text-xs ${isLightMode ? "text-slate-400" : "text-zinc-500"} w-full text-center animate-pulse`}>Loading waveform...</div>
          ) : (
             peaks.map((p, i) => {
               const barProgress = i / peaks.length;
               const isActive = barProgress <= progress;
               return (
                 <div 
                   key={i} 
                   className={`w-[2px] sm:w-[3px] rounded-full transition-colors duration-100 ${isActive ? "bg-[color:var(--accent)]" : (isLightMode ? "bg-slate-200" : "bg-zinc-700")}`} 
                   style={{ height: `${Math.max(10, p * 100)}%` }}
                 ></div>
               );
             })
          )}
        </div>
      </div>
    </div>
  );
}
