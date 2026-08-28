// Pure Web Audio API synthesized celebratory sounds for zero-dependency soundscapes

export function playCelebrationSound(theme: "acoustic-harp" | "celebration-fanfare" | "chimes-melody" | "none" = "chimes-melody") {
  if (typeof window === "undefined" || theme === "none") return;
  
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const now = ctx.currentTime;

    if (theme === "acoustic-harp" || theme === "chimes-melody") {
      // Arpeggiated cheerful chime chords (C major 9th with harmonic sparkles)
      const notes = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51, 1567.98]; // C5, E5, G5, B5, C6, E6, G6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.001, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.18, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 1.3);
      });
    } else if (theme === "celebration-fanfare") {
      // Celebratory brass-like fanfare chord progression
      const fanfareChords = [
        { freqs: [440, 554.37, 659.25], start: 0, dur: 0.25 }, // A maj
        { freqs: [493.88, 622.25, 739.99], start: 0.22, dur: 0.25 }, // B maj
        { freqs: [554.37, 659.25, 880.00, 1108.73], start: 0.45, dur: 0.8 }, // Final triumphant chord
      ];

      fanfareChords.forEach((chord) => {
        chord.freqs.forEach((f) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = "triangle";
          osc.frequency.setValueAtTime(f, now + chord.start);

          gain.gain.setValueAtTime(0.001, now + chord.start);
          gain.gain.exponentialRampToValueAtTime(0.12, now + chord.start + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + chord.start + chord.dur);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + chord.start);
          osc.stop(now + chord.start + chord.dur + 0.1);
        });
      });
    }
  } catch (err) {
    console.debug("Audio playback ignored:", err);
  }
}

export function playWaxSealBreakSound() {
  if (typeof window === "undefined") return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") ctx.resume();

    const now = ctx.currentTime;

    // Gentle paper slide & chime
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1760, now + 0.15);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
  } catch (err) {
    console.debug("Audio ignored:", err);
  }
}

export function playCandleBlowSound() {
  if (typeof window === "undefined") return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") ctx.resume();

    const now = ctx.currentTime;

    // Breath swoosh sound using noise buffer
    const bufferSize = ctx.sampleRate * 0.4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(200, now + 0.35);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    whiteNoise.start(now);
    whiteNoise.stop(now + 0.4);

    // Followed by twinkling magic chime
    setTimeout(() => {
      playCelebrationSound("chimes-melody");
    }, 200);
  } catch (err) {
    console.debug("Audio ignored:", err);
  }
}
