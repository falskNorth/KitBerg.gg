import { motion } from "motion/react";
import { Terminal, ArrowLeft, Mail, FileText, Download, Linkedin, Github, X, Minus, Square } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

interface RecruitersPageProps {
    onBack: () => void;
}

export function RecruitersPage({ onBack }: RecruitersPageProps) {
    const [emailDialogOpen, setEmailDialogOpen] = useState(false);
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
                            <h1 className="text-3xl text-green-500 glow-text">Recruiters</h1>
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
                        <span>Professional information and contact details</span>
                        <span className="text-green-600"> **/</span>
                    </div>
                </motion.div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gray-950 border border-green-900 p-6"
                    >
                        <div className="flex items-center gap-2 mb-4 text-purple-400">
                            <Mail className="w-5 h-5" />
                            <h2 className="text-xl">Contact</h2>
                        </div>

                        <div className="space-y-4 text-sm">
                            <div>
                                <span className="text-gray-500">const</span>{" "}
                                <span className="text-blue-300">contact</span>{" "}
                                <span className="text-gray-500">= {"{"}</span>
                                <div className="ml-6 space-y-1">
                                    <div>
                                        <span className="text-blue-300">email</span>
                                        <span className="text-gray-500">:</span>{" "}
                                        <span className="text-green-400">"kit@isberg.gg"</span>
                                        <span className="text-gray-600">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue-300">phone</span>
                                        <span className="text-gray-500">:</span>{" "}
                                        <span className="text-green-400">"+1 (555) 123-4567"</span>
                                        <span className="text-gray-600">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue-300">location</span>
                                        <span className="text-gray-500">:</span>{" "}
                                        <span className="text-green-400">"San Francisco, CA"</span>
                                        <span className="text-gray-600">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue-300">availability</span>
                                        <span className="text-gray-500">:</span>{" "}
                                        <span className="text-green-400">"Open to opportunities"</span>
                                    </div>
                                </div>
                                <span className="text-gray-500">{"}"};</span>
                            </div>

                            <div className="pt-4 border-t border-green-900">
                                <div className="text-gray-600 mb-3">// Quick actions</div>
                                <div className="space-y-2">
                                    <button
                                        onClick={() => setEmailDialogOpen(true)}
                                        className="w-full bg-green-900/20 hover:bg-green-900/40 border border-green-700 px-4 py-2 text-left transition-colors flex items-center gap-2"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span>Send Email</span>
                                    </button>
                                    <button className="w-full bg-green-900/20 hover:bg-green-900/40 border border-green-700 px-4 py-2 text-left transition-colors flex items-center gap-2">
                                        <Download className="w-4 h-4" />
                                        <span>Download Resume (PDF)</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-950 border border-green-900 p-6"
                    >
                        <div className="flex items-center gap-2 mb-4 text-purple-400">
                            <FileText className="w-5 h-5" />
                            <h2 className="text-xl">Links</h2>
                        </div>

                        <div className="space-y-4 text-sm">
                            <div>
                                <span className="text-gray-500">const</span>{" "}
                                <span className="text-blue-300">socialLinks</span>{" "}
                                <span className="text-gray-500">= {"{"}</span>
                                <div className="ml-6 space-y-1">
                                    <div>
                                        <span className="text-blue-300">linkedin</span>
                                        <span className="text-gray-500">:</span>{" "}
                                        <span className="text-green-400">"linkedin.com/in/kitisberg"</span>
                                        <span className="text-gray-600">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue-300">github</span>
                                        <span className="text-gray-500">:</span>{" "}
                                        <span className="text-green-400">"github.com/kitisberg"</span>
                                        <span className="text-gray-600">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue-300">portfolio</span>
                                        <span className="text-gray-500">:</span>{" "}
                                        <span className="text-green-400">"isberg.gg"</span>
                                    </div>
                                </div>
                                <span className="text-gray-500">{"}"};</span>
                            </div>

                            <div className="pt-4 border-t border-green-900 space-y-2">
                                <a
                                    href="#"
                                    className="w-full bg-blue-900/20 hover:bg-blue-900/40 border border-blue-700 px-4 py-2 text-left transition-colors flex items-center gap-2 text-blue-400"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span>View LinkedIn Profile</span>
                                </a>
                                <a
                                    href="#"
                                    className="w-full bg-purple-900/20 hover:bg-purple-900/40 border border-purple-700 px-4 py-2 text-left transition-colors flex items-center gap-2 text-purple-400"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>View GitHub Profile</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Professional Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gray-950 border border-green-900 p-6 lg:col-span-2"
                    >
                        <div className="flex items-center gap-2 mb-4 text-purple-400">
                            <FileText className="w-5 h-5" />
                            <h2 className="text-xl">Professional Summary</h2>
                        </div>

                        <div className="space-y-4 text-sm">
                            <div>
                                <span className="text-gray-600">// Executive summary for recruiters</span>
                            </div>

                            <div className="text-gray-400 space-y-3">
                                <p>
                                    Full-stack developer with 6+ years of experience building scalable web applications
                                    and leading development teams. Specialized in React, TypeScript, and Node.js with a
                                    proven track record of delivering high-quality products on time.
                                </p>

                                <p>
                                    <span className="text-green-400">Key Achievements:</span>
                                </p>
                                <ul className="ml-6 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500">→</span>
                                        <span>Led development of platform serving 100K+ daily active users</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500">→</span>
                                        <span>Reduced application load time by 60% through optimization</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500">→</span>
                                        <span>Mentored 5+ junior developers to senior positions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500">→</span>
                                        <span>Open source contributor with 1000+ GitHub stars</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-green-900">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-gray-900 border border-green-800 p-3">
                                        <div className="text-2xl text-green-400">6+</div>
                                        <div className="text-xs text-gray-500">Years Experience</div>
                                    </div>
                                    <div className="bg-gray-900 border border-green-800 p-3">
                                        <div className="text-2xl text-green-400">50+</div>
                                        <div className="text-xs text-gray-500">Projects Completed</div>
                                    </div>
                                    <div className="bg-gray-900 border border-green-800 p-3">
                                        <div className="text-2xl text-green-400">15+</div>
                                        <div className="text-xs text-gray-500">Technologies</div>
                                    </div>
                                    <div className="bg-gray-900 border border-green-800 p-3">
                                        <div className="text-2xl text-green-400">100%</div>
                                        <div className="text-xs text-gray-500">Commitment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Email Form Dialog */}
            <Dialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen}>
                <DialogContent className="p-0 bg-transparent border-0 max-w-2xl [&>button]:hidden">
                    <div className="bg-black border border-gray-700 font-mono">
                        {/* Windows-style title bar */}
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 px-3 py-2 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Terminal className="w-4 h-4 text-green-400" />
                                <span className="text-sm text-white">Contact Form - cmd.exe</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="hover:bg-gray-700 p-1">
                                    <Minus className="w-3 h-3 text-white" />
                                </button>
                                <button className="hover:bg-gray-700 p-1">
                                    <Square className="w-3 h-3 text-white" />
                                </button>
                                <button
                                    onClick={() => setEmailDialogOpen(false)}
                                    className="hover:bg-red-600 p-1"
                                >
                                    <X className="w-3 h-3 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Form Content */}
                        <div className="p-6 text-green-400">
                            <div className="mb-4">
                                <span className="text-gray-500">C:\Users\Guest&gt;</span>{" "}
                                <span className="text-white">contact.exe</span>
                            </div>

                            <div className="mb-6 text-sm text-gray-400">
                                <div className="text-gray-600">// Initialize contact form</div>
                                <div>
                                    <span className="text-gray-500">const</span>{" "}
                                    <span className="text-blue-300">message</span>{" "}
                                    <span className="text-gray-500">=</span>{" "}
                                    <span className="text-purple-400">new</span>{" "}
                                    <span className="text-yellow-300">ContactForm</span>
                                    <span className="text-gray-500">();</span>
                                </div>
                            </div>

                            {/* Paperclip.co form */}
                            <form
                                action="https://paperform.paperclip.co/submit"
                                method="POST"
                                className="space-y-4"
                            >
                                {/* Hidden field for paperclip form ID - replace with your actual form ID */}
                                <input type="hidden" name="form_id" value="YOUR_PAPERCLIP_FORM_ID" />

                                {/* Name Field */}
                                <div>
                                    <label className="block mb-2 text-sm">
                                        <span className="text-gray-500">const</span>{" "}
                                        <span className="text-blue-300">name</span>{" "}
                                        <span className="text-gray-500">=</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Enter your name..."
                                        className="w-full bg-gray-950 border border-green-700 px-4 py-2 text-green-400 placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block mb-2 text-sm">
                                        <span className="text-gray-500">const</span>{" "}
                                        <span className="text-blue-300">email</span>{" "}
                                        <span className="text-gray-500">=</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="your.email@example.com"
                                        className="w-full bg-gray-950 border border-green-700 px-4 py-2 text-green-400 placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block mb-2 text-sm">
                                        <span className="text-gray-500">const</span>{" "}
                                        <span className="text-blue-300">message</span>{" "}
                                        <span className="text-gray-500">=</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Type your message here..."
                                        className="w-full bg-gray-950 border border-green-700 px-4 py-2 text-green-400 placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4 flex gap-3">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-green-900/20 hover:bg-green-900/40 border border-green-700 px-4 py-3 text-left transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span>message.send()</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setEmailDialogOpen(false)}
                                        className="bg-gray-900/40 hover:bg-gray-900/60 border border-gray-700 px-4 py-3 transition-colors text-gray-400"
                                    >
                                        Cancel
                                    </button>
                                </div>

                                <div className="text-xs text-gray-600 pt-2">
                                    <span className="text-gray-500">//</span> Form powered by Paperclip.co
                                </div>
                            </form>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <style>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }
      `}</style>
        </div>
    );
}
