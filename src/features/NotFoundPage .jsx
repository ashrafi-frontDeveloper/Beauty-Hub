import { Link } from "react-router";
import { ArrowRight, SearchX, Sparkles } from "lucide-react";

const NotFoundPage = () => {
  return (
    <main className="relative flex min-h-[75dvh] items-center justify-center overflow-hidden px-4 py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100/60 blur-3xl"
      />

      <div className="relative w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-3xl border border-pink-100 bg-white text-pink-500 shadow-lg shadow-pink-100/60">
          <SearchX size={36} strokeWidth={1.5} />
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-50 px-3 py-1.5 text-xs font-semibold text-pink-600">
          <Sparkles size={14} />
          اوه، اینجا خبری نیست!
        </span>

        <h1 className="mt-5 text-6xl font-extrabold tracking-tight text-pink-600 sm:text-7xl">
          404
        </h1>

        <h2 className="mt-3 text-xl font-bold text-neutral-800">
          صفحه پیدا نشد
        </h2>

        <Link
          to="/"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-pink-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-xl hover:shadow-pink-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
        >
          <ArrowRight size={18} />
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;