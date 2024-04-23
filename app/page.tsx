"use client";
import { StarField } from 'starfield-react';

const starfieldProps  = {
  count: 1800,
  speed: 2,
  starRatio: 200,
  starSize: 5,
  randomColor: false,
  starStyle: '#FFFFFF',
  starShape: 'butt' as const,
  clear: true,
  bgStyle: '#000',
  fps: 700,
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StarField
        width={window.innerWidth}
        height={window.innerHeight}
        key={`${window.innerWidth}.${window.innerHeight}`}
        {...starfieldProps}
      />
      <audio src="/day_one.mp3" autoPlay loop />
      <div className="absolute z-50 bottom-10 flex items-center gap-2 text-sm left-10 text-white bg-zinc-900 p-4 rounded-md font-medium">
        <div className="animate-pulse rounded-full bg-indigo-400 size-2" />
        Day One by Hans Zimmer from Interstellar
      </div>
    </main>
  );
}
