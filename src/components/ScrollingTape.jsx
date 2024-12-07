import React from 'react';

const ScrollingTape = () => {
  const items = [
    { text: "RESPONSIVE", emoji: "📱" },
    { text: "USER-CENTRIC", emoji: "👥" },
    { text: "FAST", emoji: "⚡" },
    { text: "RELIABLE", emoji: "✨" },
    { text: "ACCESSIBLE", emoji: "♿" },
    { text: "DYNAMIC", emoji: "🎯" },
    { text: "SECURE", emoji: "🔒" },
    { text: "VISUALLY APPEALING", emoji: "🎨" }
  ];

  return (
    <div className="relative h-12 mt-16 mb-16 p-2.5 overflow-hidden transform -skew-y-3 bg-gradient-to-r  from-[#061521] via-[#092a3a] to-[#0d3d53]">
      <div className="flex animate-scroll transform skew-y-3">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex whitespace-nowrap">
            {items.map((item, index) => (
              <div
                key={index}
                className="mx-4 text-xs font-bold tracking-wider flex items-center gap-2"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00755e] to-[#028269]">
                  {item.text}
                </span>
                <span className="text-lg">{item.emoji}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTape;