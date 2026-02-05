/**
 * ミッションセクション: 会社のミッションと理念
 */
export default function MissionSection() {
  return (
    <section className="bg-white py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* セクション見出し */}
        <p className="fade-in-up text-sm tracking-[0.3em] text-accent font-medium uppercase mb-4">
          Mission
        </p>

        {/* ミッションコピー */}
        <h2 className="fade-in-up text-2xl sm:text-3xl md:text-4xl font-bold text-navy leading-snug mb-8">
          テクノロジーで、
          <br />
          働く人の&quot;当たり前&quot;を変える。
        </h2>

        {/* 本文 */}
        <p className="fade-in-up text-base sm:text-lg text-gray-600 leading-loose font-light">
          一人で頑張る事業主の負担を減らし、本業に集中できる環境を届ける。
          <br className="hidden sm:block" />
          focus株式会社は、長崎からAIの力でビジネスの効率化を支援します。
        </p>
      </div>
    </section>
  );
}
