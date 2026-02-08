import Link from "next/link";

/**
 * 404ページ
 */
export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy flex flex-col items-center justify-center text-white px-6">
      <p className="text-8xl md:text-9xl font-black gradient-text mb-6">404</p>
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        ページが見つかりません
      </h1>
      <p className="text-gray-400 font-light mb-10 text-center">
        お探しのページは存在しないか、移動された可能性があります。
      </p>
      <Link
        href="/"
        className="cta-button inline-block text-white font-medium text-base px-10 py-4 rounded-full"
      >
        トップページへ戻る
      </Link>
    </main>
  );
}
