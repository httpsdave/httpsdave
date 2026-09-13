import wave, struct, math

sample_rate = 44100
duration = 0.6
num_samples = int(sample_rate * duration)
# Dual-tone car horn: F4 and A4
f1 = 349.23
f2 = 440.0

audio = []
for i in range(num_samples):
    t = float(i) / sample_rate
    # generate a rough sawtooth wave for f1
    s1 = sum([(-1)**k * math.sin(2 * math.pi * f1 * (k+1) * t) / (k+1) for k in range(8)])
    # generate a rough sawtooth wave for f2
    s2 = sum([(-1)**k * math.sin(2 * math.pi * f2 * (k+1) * t) / (k+1) for k in range(8)])
    # Add a little detune for dissonance
    s3 = sum([(-1)**k * math.sin(2 * math.pi * (f1 - 5) * (k+1) * t) / (k+1) for k in range(4)])
    
    # Attack and release envelope
    envelope = 1.0
    if t < 0.05:
        envelope = t / 0.05
    elif t > duration - 0.1:
        envelope = (duration - t) / 0.1
        
    sample = (s1 + s2 + s3) * 0.25 * envelope
    audio.append(sample)

with wave.open('public/car_horn.wav', 'w') as f:
    f.setnchannels(1)
    f.setsampwidth(2)
    f.setframerate(sample_rate)
    for s in audio:
        f.writeframes(struct.pack('h', int(max(-1.0, min(1.0, s)) * 32767.0)))
