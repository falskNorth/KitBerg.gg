import { motion } from "motion/react";
import { Terminal, ArrowLeft, Play, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Clip {
    id: number;
    title: string;
    duration: string;
    link: string; // YouTube embed URL like "https://www.youtube-nocookie.com/embed/vZiypPDDFWk"
    description: string;
}

interface ClipsPageProps {
    onBack: () => void;
}

const clips: Clip[] = [
    {
        id: 1,
        title: "Zombie Time Demo",
        duration: "1:05",
        link: "https://www.youtube-nocookie.com/embed/vZiypPDDFWk?si=xl7-2rAUAvs2oBe9",
        description: "A 'Zombie Shooter game' that I made during my time at the University of Essex",
    },
];

export function ClipsPage({ onBack }: ClipsPageProps) {
    return (
        <div className="min-h-screen bg-black text-green-400 font-mono p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 border-b border-green-900 pb-4"
                >
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <Terminal className="w-6 h-6 text-green-500" />
                            <h1 className="text-3xl text-green-500 glow-text">Clips</h1>
                        </div>
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm">Back to Menu</span>
                        </button>
                    </div>
                    <div className="text-sm text-gray-500">
                        <span className="text-green-600">/** </span>
                        <span>A collection of clips of both my work and skill (issues) at video games </span>
                        <span className="text-green-600"> **/</span>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8 grid grid-cols-3 gap-4"
                >
                    <div className="bg-gray-950 border border-green-900 p-4">
                        <div className="text-2xl text-green-400 mb-1">{clips.length}</div>
                        <div className="text-xs text-gray-500">Total Clips</div>
                    </div>
                    <div className="bg-gray-950 border border-green-900 p-4">
                        <div className="text-2xl text-green-400 mb-1">6</div>
                        <div className="text-xs text-gray-500">Total Games 100%</div>
                    </div>
                    <div className="bg-gray-950 border border-green-900 p-4">
                        <div className="text-2xl text-green-400 mb-1">57%</div>
                        <div className="text-xs text-gray-500">Pokémon Living Form Dex %</div>
                    </div>
                </motion.div>

                {/* Clips Grid */}
                <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                        <span className="text-gray-500">const</span>{" "}
                        <span className="text-blue-300">clips</span>{" "}
                        <span className="text-gray-500">= [</span>
                    </div>

                    {clips.map((clip, index) => (
                        <ClipItem key={clip.id} clip={clip} index={index} totalClips={clips.length} />
                    ))}

                    <div className="text-sm text-gray-600">
                        <span className="text-gray-500">];</span>
                    </div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 bg-gray-950 border border-green-900 p-4 text-center text-sm"
                >
                    <div className="text-gray-600 mb-2">// More content coming soon</div>
                    <div className="text-gray-500">
                        <span className="text-purple-400">GoodGame</span>
                        <span className="text-gray-400">(</span>
                        <span className="text-green-400">"Well Played"</span>
                        <span className="text-gray-400">);</span>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }
      `}</style>
        </div>
    );
}

// Extracted Clip Item Component
function ClipItem({ clip, index, totalClips }: { clip: Clip; index: number; totalClips: number }) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Extract video ID from embed URL
    const getVideoId = (url: string) => {
        const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
        return match ? match[1] : null;
    };

    const videoId = getVideoId(clip.link);
    const embedUrl = videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0` : null;
    const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="ml-6 bg-gray-950 border border-green-900 hover:border-green-700 transition-colors group"
        >
            <div className="flex flex-col md:flex-row gap-4 p-4">
                {/* Video Player */}
                <div className="relative w-full md:w-64 aspect-video bg-gray-900 flex-shrink-0 overflow-hidden cursor-pointer">
                    {/* Thumbnail (shown when not playing) */}
                    {!isPlaying && thumbnailUrl && (
                        <>
                            <img
                                src={thumbnailUrl}
                                alt={clip.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="w-16 h-16 bg-green-500/80 hover:bg-green-400 rounded-full flex items-center justify-center transition-colors"
                                    aria-label="Play video"
                                >
                                    <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                                </button>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs">
                                {clip.duration}
                            </div>
                        </>
                    )}

                    {/* YouTube iframe (shown when playing) */}
                    {isPlaying && embedUrl && (
                        <iframe
                            src={embedUrl}
                            title={clip.title}
                            className="absolute inset-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}

                    {/* Fallback if no video ID */}
                    {!videoId && (
                        <div className="absolute inset-0 flex items-center justify-center text-red-400 text-xs">
                            Invalid video link
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between text-sm">
                    <div>
                        <div className="mb-2">
                            <span className="text-gray-600">{"{"}</span>
                        </div>
                        <div className="ml-4 space-y-1">
                            <div>
                                <span className="text-blue-300">title</span>
                                <span className="text-gray-500">:</span>{" "}
                                <span className="text-green-400">"{clip.title}"</span>
                                <span className="text-gray-600">,</span>
                            </div>
                            <div>
                                <span className="text-blue-300">description</span>
                                <span className="text-gray-500">:</span>{" "}
                                <span className="text-gray-400">"{clip.description}"</span>
                                <span className="text-gray-600">,</span>
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-600">{"}"}</span>
                            {index < totalClips - 1 && <span className="text-gray-600">,</span>}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-2">
                        <button
                            onClick={() => setIsPlaying(true)}
                            className="bg-green-900/20 hover:bg-green-900/40 border border-green-700 px-3 py-1.5 text-xs transition-colors flex items-center gap-2"
                        >
                            <Play className="w-3 h-3" />
                            <span>Watch</span>
                        </button>
                        <a
                            href={`https://www.youtube.com/watch?v=${videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 hover:bg-gray-800 border border-gray-700 px-3 py-1.5 text-xs transition-colors flex items-center gap-2 text-gray-400"
                        >
                            <ExternalLink className="w-3 h-3" />
                            <span>Share</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}