
"use client";

import { motion } from "framer-motion";

type RobotAvatarProps = {
  status?: "idle" | "thinking" | "responding";
  size?: number;
};

export default function RobotAvatar({
  status = "idle",
  size = 48,
}: RobotAvatarProps) {
  const isThinking = status === "thinking";
  const isResponding = status === "responding";

  return (
    <motion.div
      className="relative flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
      animate={
        isResponding
          ? { y: [0, -2, 0] }
          : { y: 0 }
      }
      transition={{
        duration: 0.5,
        repeat: isResponding ? Infinity : 0,
      }}
    >
      {/* Antenna */}
      <div className="absolute -top-[5px] left-1/2 z-0 h-[9px] w-[3px] -translate-x-1/2 rounded-full bg-[#E98272]" />

      <motion.div
        className="absolute -top-[9px] left-1/2 z-10 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#E98272]"
        animate={
          isThinking
            ? { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }
            : { scale: 1, opacity: 1 }
        }
        transition={{
          duration: 0.8,
          repeat: isThinking ? Infinity : 0,
        }}
      />

      {/* Robot head */}
      <div className="relative z-10 flex h-[82%] w-[90%] items-center justify-center rounded-[30%] border-2 border-[#4A4A4A] bg-[#292929] shadow-lg">
        {/* Side panels */}
        <div className="absolute -left-[5px] h-[32%] w-[5px] rounded-l-md bg-[#E98272]" />
        <div className="absolute -right-[5px] h-[32%] w-[5px] rounded-r-md bg-[#E98272]" />

        {/* Eyes */}
        <div className="flex items-center gap-[22%]">
          {[0, 1].map((eye) => (
            <motion.div
              key={eye}
              className="relative h-[9px] w-[9px] overflow-hidden rounded-full bg-[#F8F7F4]"
              animate={
                isThinking
                  ? {
                      scaleY: [1, 0.65, 1],
                    }
                  : isResponding
                    ? { scale: [1, 1.2, 1] }
                    : { scaleY: [1, 0.12, 1] }
              }
              transition={{
                duration: isThinking ? 0.8 : 0.25,
                repeat: Infinity,
                repeatDelay: isThinking ? 0.1 : 3,
              }}
            >
              <motion.span
                className="absolute left-[3px] top-[3px] h-[4px] w-[4px] rounded-full bg-[#E98272]"
                animate={
                  isThinking
                    ? { x: eye === 0 ? 1 : -1 }
                    : { x: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Small mouth */}
        <motion.div
          className="absolute bottom-[19%] h-[2px] w-[10px] rounded-full bg-[#E98272]"
          animate={
            isResponding
              ? { width: [10, 14, 10] }
              : { width: 10 }
          }
          transition={{ duration: 0.4, repeat: isResponding ? Infinity : 0 }}
        />
      </div>
    </motion.div>
  );
}
