// src/components/FeatureCard.jsx
export default function FeatureCard({ icon: Icon, title }) {
  return (
    <button
      className="flex flex-col items-center bg-[#619111] p-4 rounded-lg hover:bg-[#d2fd9c] transition w-28"
      aria-label={title}
    >
      <div className="w-12 h-12 mb-2 flex items-center justify-center">
        <Icon className="w-[25px] h-[35px]" />
      </div>
      <p className="text-center text-sm leading-snug">
        {title.split(" ").map((word, i) => (
          <span key={i}>
            {word}
            <br />
          </span>
        ))}
      </p>
    </button>
  );
}
