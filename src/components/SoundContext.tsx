"use client";

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type SoundName = "ui" | "social" | "birthday" | "transition" | "card" | "hover" | "wind";

type SoundOptions = {
  force?: boolean;
};

type SoundContextValue = {
  isMuted: boolean;
  toggleMuted: () => void;
  playSound: (name: SoundName, options?: SoundOptions) => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);
const storageKey = "siteSoundMuted";

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") {
    return null;
  }

  const AudioContextImpl =
    window.AudioContext ||
    (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

  return AudioContextImpl ? new AudioContextImpl() : null;
}

type ToneSpec = {
  type: OscillatorType;
  startFreq: number;
  endFreq?: number;
  duration: number;
  peak: number;
  attack?: number;
  release?: number;
  detune?: number;
  delay?: number;
};

function playTone(ctx: AudioContext, destination: AudioNode, spec: ToneSpec) {
  const {
    type,
    startFreq,
    endFreq,
    duration,
    peak,
    attack = 0.01,
    release = 0.08,
    detune = 0,
    delay = 0,
  } = spec;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const startTime = ctx.currentTime + delay;
  const endTime = startTime + duration + release;

  osc.type = type;
  osc.frequency.setValueAtTime(startFreq, startTime);

  if (endFreq && endFreq > 0) {
    osc.frequency.exponentialRampToValueAtTime(endFreq, startTime + duration);
  }

  if (detune) {
    osc.detune.setValueAtTime(detune, startTime);
  }

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.linearRampToValueAtTime(peak, startTime + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, endTime);

  osc.connect(gain);
  gain.connect(destination);

  osc.start(startTime);
  osc.stop(endTime + 0.02);

  osc.onended = () => {
    osc.disconnect();
    gain.disconnect();
  };
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem(storageKey);
    if (stored !== null) {
      setIsMuted(stored === "true");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(storageKey, String(isMuted));
  }, [isMuted]);

  const ensureContext = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = getAudioContext();
    }

    return audioRef.current;
  }, []);

  const primeAudio = useCallback(() => {
    const ctx = ensureContext();
    if (!ctx) {
      return;
    }

    if (ctx.state === "suspended") {
      void ctx.resume();
    }
  }, [ensureContext]);

  useEffect(() => {
    const handlePointer = () => {
      if (isMuted) {
        return;
      }
      primeAudio();
    };

    window.addEventListener("pointerdown", handlePointer, { once: true });
    return () => window.removeEventListener("pointerdown", handlePointer);
  }, [isMuted, primeAudio]);

  const playSound = useCallback(
    (name: SoundName, options?: SoundOptions) => {
      if (isMuted && !options?.force) {
        return;
      }

      const ctx = ensureContext();
      if (!ctx) {
        return;
      }

      if (ctx.state === "suspended") {
        void ctx.resume();
      }

      const master = ctx.createGain();
      master.connect(ctx.destination);

      switch (name) {
        case "ui":
          master.gain.value = 0.4;
          playTone(ctx, master, {
            type: "triangle",
            startFreq: 680,
            endFreq: 520,
            duration: 0.09,
            peak: 0.4,
          });
          break;
        case "social":
          master.gain.value = 0.45;
          playTone(ctx, master, {
            type: "sine",
            startFreq: 540,
            endFreq: 720,
            duration: 0.08,
            peak: 0.4,
          });
          playTone(ctx, master, {
            type: "sine",
            startFreq: 760,
            endFreq: 920,
            duration: 0.1,
            peak: 0.35,
            delay: 0.06,
          });
          break;
        case "birthday":
          master.gain.value = 0.5;
          playTone(ctx, master, {
            type: "sawtooth",
            startFreq: 220,
            endFreq: 880,
            duration: 0.32,
            peak: 0.45,
            attack: 0.015,
            release: 0.15,
          });
          playTone(ctx, master, {
            type: "square",
            startFreq: 320,
            endFreq: 960,
            duration: 0.28,
            peak: 0.25,
            attack: 0.02,
            release: 0.12,
            detune: 8,
            delay: 0.02,
          });
          break;
        case "transition":
          master.gain.value = 0.35;
          playTone(ctx, master, {
            type: "sine",
            startFreq: 420,
            endFreq: 160,
            duration: 0.28,
            peak: 0.35,
            attack: 0.02,
            release: 0.18,
          });
          break;
        case "card":
          master.gain.value = 0.4;
          playTone(ctx, master, {
            type: "triangle",
            startFreq: 260,
            endFreq: 200,
            duration: 0.12,
            peak: 0.4,
          });
          playTone(ctx, master, {
            type: "sine",
            startFreq: 640,
            endFreq: 480,
            duration: 0.1,
            peak: 0.35,
            delay: 0.03,
          });
          break;
        case "hover":
          master.gain.value = 0.25;
          playTone(ctx, master, {
            type: "sine",
            startFreq: 860,
            endFreq: 980,
            duration: 0.06,
            peak: 0.3,
            attack: 0.008,
            release: 0.06,
          });
          break;
        case "wind":
          master.gain.value = 0.22;
          playTone(ctx, master, {
            type: "sine",
            startFreq: 180,
            endFreq: 72,
            duration: 0.46,
            peak: 0.18,
            attack: 0.02,
            release: 0.2,
          });
          playTone(ctx, master, {
            type: "triangle",
            startFreq: 520,
            endFreq: 220,
            duration: 0.34,
            peak: 0.08,
            attack: 0.01,
            release: 0.15,
            detune: -6,
            delay: 0.05,
          });
          break;
        default:
          master.gain.value = 0.35;
          break;
      }
    },
    [ensureContext, isMuted]
  );

  const toggleMuted = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return (
    <SoundContext.Provider value={{ isMuted, toggleMuted, playSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within SoundProvider");
  }
  return context;
}
