
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Sparkles,
  Minus,
  FolderOpen,
  FileDown,
  Mail,
} from "lucide-react";
import RobotAvatar from "./RobotAvatar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type AIMode = "gemini" | "local" | "offline" | null;

export default function AkashAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [aiMode, setAiMode] = useState<AIMode>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey there! 👋 I'm Akash AI, your personal portfolio assistant. Ask me anything about Akash's skills, projects, education or experience!",
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading, isOpen]);

  const sendMessage = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const message = input.trim();

    if (!message || isLoading) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", content: message },
    ]);

    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          history: messages.slice(1).map((item) => ({
            role: item.role,
            content: item.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to get a response.");
      }

      setAiMode(
        data.mode === "gemini"
          ? "gemini"
          : data.mode === "local"
            ? "local"
            : "offline"
      );

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.reply || "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch {
      setAiMode("offline");

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const modeLabel = {
    gemini: "Gemini AI · Advanced responses",
    local: "Local Knowledge · Portfolio assistant",
    offline: "Connection unavailable",
  };

  const modeColor = {
    gemini: "bg-green-400",
    local: "bg-blue-400",
    offline: "bg-red-400",
  };

  const quickActions = [
    {
      label: "View Projects",
      href: "#portfolio",
      icon: FolderOpen,
      download: undefined,
    },
    {
      label: "Download Resume",
      href: "/resume.pdf",
      icon: FileDown,
      download: "Akash_Das_Data_Analyst_Resume.pdf",
    },
    {
      label: "Contact Akash",
      href: "#contact",
      icon: Mail,
      download: undefined,
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex h-[min(560px,calc(100dvh-120px))] w-[min(370px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-2xl"
            role="dialog"
            aria-label="Akash AI chat"
            aria-modal="false"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#292929] px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E98272]">
                  <RobotAvatar
                    status={isLoading ? "thinking" : "idle"}
                    size={42}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Akash AI</h3>

                  <p className="flex items-center gap-1.5 text-xs text-gray-300">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isLoading
                          ? "bg-yellow-400 animate-pulse"
                          : aiMode
                            ? modeColor[aiMode]
                            : "bg-green-400"
                      }`}
                    />

                    {isLoading
                      ? "Thinking..."
                      : aiMode
                        ? modeLabel[aiMode]
                        : "Online · Your personal portfolio assistant"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Welcome label */}
            <div className="border-b border-[var(--border)] bg-[#F8F7F4] px-4 py-3">
              <p className="flex items-center gap-2 text-xs font-medium text-[var(--muted)]">
                <Sparkles size={14} className="text-[#E98272]" />
                Ask me about Akash's professional journey
              </p>
            </div>

            {/* Messages */}
            <div
              className="flex-1 space-y-4 overflow-y-auto bg-[#FCFBF9] p-4"
              aria-live="polite"
              aria-relevant="additions"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="mr-2 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#292929] text-white">
                      <Bot size={17} />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "whitespace-pre-wrap rounded-br-md bg-[#E98272] text-[#292929]"
                        : "rounded-bl-md border border-[var(--border)] bg-white text-[#444444] [&_strong]:font-semibold [&_strong]:text-[#292929]"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="break-all font-medium text-[#D96F60] underline underline-offset-2 hover:text-[#292929]"
                            >
                              {children}
                            </a>
                          ),

                          p: ({ children }) => (
                            <p className="mb-2 last:mb-0">{children}</p>
                          ),

                          ul: ({ children }) => (
                            <ul className="my-2 list-disc space-y-1 pl-5">
                              {children}
                            </ul>
                          ),

                          ol: ({ children }) => (
                            <ol className="my-2 list-decimal space-y-1 pl-5">
                              {children}
                            </ol>
                          ),

                          strong: ({ children }) => (
                            <strong className="font-semibold text-[#292929]">
                              {children}
                            </strong>
                          ),

                          h1: ({ children }) => (
                            <h1 className="mb-2 mt-3 text-lg font-bold text-[#292929]">
                              {children}
                            </h1>
                          ),

                          h2: ({ children }) => (
                            <h2 className="mb-2 mt-3 text-base font-bold text-[#292929]">
                              {children}
                            </h2>
                          ),

                          h3: ({ children }) => (
                            <h3 className="mb-2 mt-3 text-sm font-bold text-[#292929]">
                              {children}
                            </h3>
                          ),

                          code: ({ children }) => (
                            <code className="rounded bg-[#F3F1ED] px-1.5 py-0.5 text-xs text-[#B85F52]">
                              {children}
                            </code>
                          ),

                          blockquote: ({ children }) => (
                            <blockquote className="my-2 border-l-2 border-[#E98272] pl-3 text-[#777777]">
                              {children}
                            </blockquote>
                          ),
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    ) : (
                      message.content
                    )}
                  </div>
                </div>
              ))}

              {/* Recruiter Quick Actions */}
              {messages.length === 1 && (
                <div className="ml-10 space-y-2">
                  <p className="text-xs font-medium text-[var(--muted)]">
                    Quick actions
                  </p>

                  <div className="flex flex-col gap-2">
                    {quickActions.map((action) => {
                      const Icon = action.icon;

                      return (
                        <a
                          key={action.label}
                          href={action.href}
                          download={action.download}
                          onClick={() => {
                            if (
                              action.href.startsWith("#") &&
                              action.href.length > 1
                            ) {
                              setIsOpen(false);
                            }
                          }}
                          className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-3 py-2.5 text-sm font-medium text-[#444444] transition hover:border-[#E98272] hover:bg-[#FCEAE6] hover:text-[#292929]"
                        >
                          <Icon
                            size={17}
                            className="shrink-0 text-[#E98272]"
                          />
                          {action.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Thinking indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#292929] text-white">
                    <Bot size={17} />
                  </div>

                  <span className="animate-pulse">
                    Akash AI is thinking...
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={sendMessage}
              className="flex items-center gap-2 border-t border-[var(--border)] bg-white p-3"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask me something..."
                aria-label="Type your message"
                className="min-w-0 flex-1 rounded-full border border-[var(--border)] bg-[#F8F7F4] px-4 py-3 text-sm text-[#292929] outline-none transition placeholder:text-gray-400 focus:border-[#E98272]"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E98272] text-[#292929] transition hover:bg-[#df7464] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Robot Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isOpen ? "Close Akash AI" : "Open Akash AI"}
        aria-expanded={isOpen}
        className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#292929] text-white shadow-xl"
      >
        {isOpen ? <Minus size={27} /> : <RobotAvatar size={48} />}

        {!isOpen && (
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-green-400" />
        )}
      </motion.button>
    </div>
  );
}
