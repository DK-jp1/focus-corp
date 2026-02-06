/**
 * セクション8：New Standard
 * section-light + corner-glow + グラデーション数字
 */
export default function NewStandardSection() {
  return (
    <section id="new-standard" className="section-light section-glow-border corner-glow-bl py-24 md:py-32 px-6">
      <div className="relative z-10 max-w-3xl mx-auto text-center text-navy">
        {/* 見出し */}
        <div className="fade-in-up mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">New Standard</p>
          <h2 className="text-3xl md:text-5xl font-black mb-4">常識が、変わる。</h2>
          <div className="decorative-line" />
        </div>

        <div className="fade-in-up mb-4">
          <p className="text-lg md:text-xl font-light leading-relaxed mb-2">「業務を効率化したい」</p>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-6">→ 人を雇う</p>
          <p className="text-gray-400 font-light">これが今までの常識でした。</p>
          <p className="text-gray-400 font-light mt-2">でも、時代は変わりました。</p>
        </div>

        <div className="section-divider" />

        <div className="fade-in-up mb-4">
          <p className="text-lg md:text-xl font-light leading-relaxed mb-2">「業務を効率化したい」</p>
          <p className="text-xl md:text-2xl font-bold gradient-text leading-relaxed mb-6">→ AIを導入する</p>
          <p className="text-navy font-bold text-lg">これが、新しい当たり前です。</p>
        </div>

        <div className="section-divider" />

        {/* 比較ブロック（グラデーション数字） */}
        <div className="fade-in-up mb-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div>
              <p className="text-gray-400 text-sm mb-2">人件費</p>
              <p className="text-4xl md:text-5xl font-black text-gray-300">月20<span className="text-2xl">万円</span></p>
            </div>
            <div className="text-3xl font-light gradient-text">→</div>
            <div>
              <p className="text-sm mb-2 gradient-text font-medium">AI導入</p>
              <p className="text-4xl md:text-5xl font-black gradient-text">月2<span className="text-2xl">万円</span></p>
            </div>
          </div>
        </div>

        <div className="section-divider" />

        <div className="fade-in-up mb-4">
          <p className="text-lg font-light leading-[2] text-gray-500 mb-8">
            人は忘れる。疲れる。ミスを繰り返す。<br /><br />
            AIは忘れない。疲れない。<br />一度学習すれば、二度と同じミスをしない。
          </p>
          <p className="text-xl md:text-2xl font-bold text-navy">
            コストは10分の1。<br />精度は、比べものにならない。
          </p>
        </div>

        <div className="section-divider" />

        <div className="fade-in-up">
          <h3 className="text-2xl md:text-4xl font-black mb-8">あなた専用のAIを。</h3>
          <p className="text-lg md:text-xl font-light leading-[2] text-gray-500 mb-8">
            あなたのビジョンを共に実現する、<br />経営者があなたの隣に。
          </p>
          <p className="text-xl md:text-2xl font-bold gradient-text">focusが、その環境を届けます。</p>
        </div>
      </div>
    </section>
  );
}
