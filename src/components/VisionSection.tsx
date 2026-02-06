/**
 * セクション4：ビジョン
 * section-light + glass-card-light
 */
interface VisionItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const VISIONS: VisionItem[] = [
  {
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="url(#grad)" viewBox="0 0 24 24">
        <defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient></defs>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "「ここで働きたい」と思える会社がある街",
    description: "若者が都会に出なくても、やりがいのある仕事ができる。地元に残ることが、妥協ではなく選択になる。",
  },
  {
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="url(#grad2)" viewBox="0 0 24 24">
        <defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient></defs>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AIが当たり前に使われている街",
    description: "事務作業に追われる事業主がいなくなり、みんなが本業に集中できている。「忙しい」が口癖の人が減り、「楽しい」が増える。",
  },
  {
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="url(#grad3)" viewBox="0 0 24 24">
        <defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient></defs>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "歴史と文化が、活気と共に残る街",
    description: "長崎の伝統は守りながら、新しい挑戦が生まれ続ける。過去と未来が共存する、唯一無二の地域。",
  },
];

export default function VisionSection() {
  return (
    <section id="vision" className="section-light section-glow-border corner-glow-bl py-24 md:py-32 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">Vision</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-4">
            可能性が、無限に広がる街へ
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-navy/60 text-lg font-light">私たちが描く未来は、こんな長崎です。</p>
        </div>

        {/* ビジョンカード（グラスモーフィズム） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {VISIONS.map((vision, index) => (
            <div
              key={index}
              className="fade-in-stagger glass-card-light rounded-2xl p-8 text-center"
              data-delay={index * 200}
            >
              <div className="mb-6 flex justify-center">{vision.icon}</div>
              <h3 className="text-lg font-bold text-navy mb-4">{vision.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light text-sm">{vision.description}</p>
            </div>
          ))}
        </div>

        {/* 締め */}
        <p className="fade-in-up text-center text-navy text-lg md:text-xl font-bold">
          これは夢物語ではありません。
          <br />
          私たちが本気で創ろうとしている、現実です。
        </p>
      </div>
    </section>
  );
}
