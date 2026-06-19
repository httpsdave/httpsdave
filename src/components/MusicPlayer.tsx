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
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

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

  const songsData = [
    {
      title: "The Man Who Can't Be Moved",
      artist: "The Script",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/2d/c6/72/2dc6728e-fe24-c7b3-970c-a24d8af1e4b6/dj.tjxgsvhv.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b7/3e/ad/b73ead6e-a8ca-b356-c5cc-8b538c6921ef/mzaf_9877841116191731936.plus.aac.p.m4a"
    },
    {
      title: "Iris",
      artist: "The Goo Goo Dolls",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2c/13/18/2c131801-00af-58b1-3cc2-13abf4ad5416/093624919162.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/60/17/35/60173512-3d5c-1d6f-549e-d8ddafa93e07/mzaf_5281658494050788067.plus.aac.p.m4a"
    },
    {
      title: "Nothing",
      artist: "The Script",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e6/61/17/e661179c-839a-6d13-a0f3-f97803b281ab/mzi.ccgtsdlp.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/96/48/0f/96480fda-5000-8a52-89f5-7e1e1d65fd5b/mzaf_8659604158170915315.plus.aac.p.m4a"
    },
    {
      title: "Breakeven",
      artist: "The Script",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/2d/c6/72/2dc6728e-fe24-c7b3-970c-a24d8af1e4b6/dj.tjxgsvhv.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a9/73/c1/a973c191-aefc-71b9-da8b-e1c0f76c0bae/mzaf_11607187956676107044.plus.aac.p.m4a"
    },
    {
      title: "Di Naging (Tayo)",
      artist: "Sleep Alley",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/ba/79/94/ba7994f0-0398-917a-6ddf-c8b327c7bcaa/cover.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1c/a4/ec/1ca4ec31-d255-abde-96a3-a65ec7fc849b/mzaf_2759685575329747214.plus.aac.p.m4a"
    },
    {
      title: "Huling Sandali",
      artist: "December Avenue",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ba/17/4f/ba174feb-8cf8-448c-7014-f4928caef696/194156969851_Cover.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/8e/6a/8f/8e6a8f24-174d-1cc3-bf7a-3316266be6cc/mzaf_16918415011702627204.plus.aac.p.m4a"
    },
    {
      title: "Magkunwari",
      artist: "December Avenue",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/43/c3/4d/43c34dac-2982-7847-64f3-fd612071ee43/193829841838_Cover.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/6c/15/16/6c151629-8dbb-2626-4f75-45dc92b001fd/mzaf_14022605532918467460.plus.aac.p.m4a"
    },
    {
      title: "Bawat Piyesa",
      artist: "Munimuni",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/31/01/80/31018093-3a85-cca4-cd47-980708cfd6dd/5059033650107_cover.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/34/d7/ff/34d7ffca-e8de-9807-d060-f00dbcbf3e06/mzaf_15737691693863312579.plus.aac.p.m4a"
    },
    {
      title: "Janice",
      artist: "Dilaw",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f0/86/8e/f0868e7f-9ce0-9a5b-17d5-ea5ba325efd5/5054197560132.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/92/f2/48/92f248fd-2dd0-86a8-672c-4ecff987c365/mzaf_16591498727505456893.plus.aac.p.m4a"
    },
    {
      title: "Huwag Na Huwag Mong Sasabihin",
      artist: "Kitchie Nadal",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4b/f2/39/4bf23908-cc93-0ca5-217e-8c7e426b1990/889211800933.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/7d/2a/e5/7d2ae52b-dbde-845c-0803-9b12762cba75/mzaf_8377462403541839064.plus.aac.p.m4a"
    },
    {
      title: "Thinking of You",
      artist: "Katy Perry",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/57/dc/18/57dc1854-4483-52b2-fe7c-8a221edf9e88/13UABIM48773.rgb.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/86/d7/f8/86d7f803-7cd1-09b1-1d12-a2223db3247b/mzaf_7468635291986046090.plus.aac.p.m4a"
    },
    {
      title: "Wag Mong Aminin",
      artist: "Rico Blanco",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/13/68/81/136881da-a23f-29c3-7e70-53e6abd35f50/3614596121536_Cover.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/75/9f/a7/759fa7c6-b5ac-dbaa-2abe-040bc12a2a45/mzaf_8374738964806450737.plus.aac.p.m4a"
    },
    {
      title: "Traitor",
      artist: "Olivia Rodrigo",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/33/fd/32/33fd32b1-0e43-9b4a-8ed6-19643f23544e/21UMGIM26092.rgb.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4f/ae/6c/4fae6c93-6bb3-d320-00bf-f32310705b3f/mzaf_16796881619991035581.plus.aac.p.m4a"
    },
    {
      title: "Dating Tayo",
      artist: "TJ Monterde",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d0/58/7c/d0587c6c-e685-09f5-7170-71198b49cd8d/4800635087027.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3a/d0/ea/3ad0ea63-f96d-4ae8-cae2-04f61d532c5e/mzaf_13111098853833478134.plus.aac.p.m4a"
    },
    {
      title: "Ganun Lang",
      artist: "Paul Jensen Lara",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e7/6c/bd/e76cbd94-85c1-5622-2611-41e0ce1e90aa/859767385925_cover.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/31/2e/31/312e3181-6011-6997-2dac-cdcc244730a6/mzaf_6624675687468558132.plus.aac.p.m4a"
    },
    {
      title: "Ere",
      artist: "Juan Karlos",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/40/ae/c0/40aec0aa-7d69-7f5f-220e-eed9e458c4d1/c76b8e2a-a5cd-46ab-8df6-8f81fbabcfd4.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/65/89/47/6589471a-fca9-af28-348b-351bcc526f65/mzaf_16701343987806181431.plus.aac.p.m4a"
    },
    {
      title: "Scott Street",
      artist: "Phoebe Bridgers",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/39/91/4f/39914f60-e9aa-4ae9-3962-44b0a5e5d570/656605150062.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a4/83/cf/a483cfa8-092e-a45c-dcda-09e5bbc27f7d/mzaf_3175459760410985113.plus.aac.p.m4a"
    },
    {
      title: "Burnout",
      artist: "3D Danao Dancel Dumas",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0b/8e/6a/0b8e6ad0-8a0d-8ce8-c518-9e973408fa7b/3616404205551.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d0/8c/29/d08c2923-eb87-6002-1648-cfaf9fe5ca42/mzaf_455399953804011734.plus.aac.p.m4a"
    },
    {
      title: "The Way I Loved You (Taylor's Version)",
      artist: "Taylor Swift",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9e/7d/c7/9e7dc7b8-e736-be6a-00be-b0427bba2b21/mzaf_4148939288855554219.plus.aac.p.m4a"
    },
    {
      title: "What if I miss you for the rest of my life?",
      artist: "Janine Berdin",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0e/2f/dd/0e2fdd5d-5acb-cf75-d256-f82dd5dd011c/25UM2IM04461.rgb.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/34/e6/80/34e680c6-0872-fa0f-29d5-f05ab4d51350/mzaf_5393040363543523053.plus.aac.p.m4a"
    },
    {
      title: "Castle on the Hill",
      artist: "Ed Sheeran",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/07/be/08/07be085d-6f06-8b4e-cea1-f40b4dca3815/mzaf_12958775594313934161.plus.aac.p.m4a"
    },
    {
      title: "Tagpuan",
      artist: "Moira Dela Torre",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e1/a4/0f/e1a40f9d-71c1-3d08-af3d-899df6a2427e/199350852923.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0e/7d/55/0e7d55dd-5239-7b59-332d-8b6065322812/mzaf_18158791816821049041.plus.aac.p.m4a"
    },
    {
      title: "Kung 'Di Rin Lang Ikaw",
      artist: "December Avenue",
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e1/7b/1e/e17b1e16-c364-d610-948f-b9224e13d165/840091303648_Cover.jpg/100x100bb.jpg",
      previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d3/e2/9b/d3e29b58-b10e-d90d-dbca-98443ee78d11/mzaf_16222250806160791422.plus.aac.p.m4a"
    }
  ];

  const songData = songsData[currentSongIndex];

  // Fetch and decode audio to generate waveform peaks
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setProgress(0);
    
    const generateWaveform = async () => {
      try {
        if (!songData.previewUrl) {
          // Fallback random peaks
          setPeaks(Array.from({length: 60}).map(() => Math.random()));
          setLoading(false);
          return;
        }
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
        // Fallback random peaks on actual error
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
    skipForward(); // Automatically play next track
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
    setCurrentSongIndex((prev) => (prev - 1 + songsData.length) % songsData.length);
    setProgress(0);
    setIsPlaying(false);
  };

  const skipForward = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songsData.length);
    setProgress(0);
    setIsPlaying(false);
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
        src={songData.previewUrl || undefined} 
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
          className="relative flex items-center justify-center h-full"
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
            <div className={`absolute left-1/2 -translate-x-1/2 bottom-full pb-1 z-20 flex items-center justify-center h-32 w-10`}>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.05" 
                value={isMuted ? 0 : volume} 
                onChange={handleVolumeChange}
                className={`w-24 h-[3px] rounded-lg appearance-none cursor-pointer -rotate-90 origin-center ${
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
