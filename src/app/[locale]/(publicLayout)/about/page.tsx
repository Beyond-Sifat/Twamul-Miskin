
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("About");

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F7F8F4] px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            {t("hero.eyebrow")}
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            {t("hero.title")}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:border-r border-dashed border-gray-300 pr-0 lg:pr-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
              {t("story.eyebrow")}
            </p>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {t("story.title")}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-gray-600">
              <p>{t("story.paragraph1")}</p>
              <p>{t("story.paragraph2")}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-green-900 p-8 text-white md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-200">
              {t("story.highlightLabel")}
            </p>

            <p className="mt-5 text-6xl font-bold tracking-tight md:text-7xl">
              2018
            </p>

            <h3 className="mt-5 text-2xl font-semibold">
              {t("story.highlightTitle")}
            </h3>

            <p className="mt-4 leading-8 text-green-100/80">
              {t("story.highlightDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F7F8F4] px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
              {t("purpose.eyebrow")}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("purpose.title")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl text-green-800">
                <span aria-hidden="true">◎</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {t("purpose.missionTitle")}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {t("purpose.missionDescription")}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl text-green-800">
                <span aria-hidden="true">◇</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {t("purpose.visionTitle")}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {t("purpose.visionDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
              {t("pillars.eyebrow")}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("pillars.title")}
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              {t("pillars.description")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-7 transition hover:border-green-700">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                📖
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {t("pillars.educationTitle")}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {t("pillars.educationDescription")}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-7 transition hover:border-green-700">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                🕌
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {t("pillars.dawahTitle")}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {t("pillars.dawahDescription")}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-7 transition hover:border-green-700">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                🤝
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {t("pillars.welfareTitle")}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {t("pillars.welfareDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#F7F8F4] px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
              {t("principles.eyebrow")}
            </p>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {t("principles.title")}
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              {t("principles.description")}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {["faith", "unity", "service", "sustainability", "neutrality", "transparency"].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5"
              >
                <span className="mt-0.5 text-lg text-green-700" aria-hidden="true">
                  ✓
                </span>
                <p className="font-medium leading-7 text-gray-800">
                  {t(`principles.values.${item}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
              {t("future.eyebrow")}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("future.title")}
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              {t("future.description")}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["mosque", "technical", "women", "research", "institutions"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 p-6"
              >
                <span className="mb-4 block text-2xl text-green-800" aria-hidden="true">
                  ◈
                </span>

                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  {t(`future.items.${item}`)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="bg-linear-to-br from-green-800 to-slate-600 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-200">
            {t("cta.eyebrow")}
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            {t("cta.title")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-100/80">
            {t("cta.description")}
          </p>

          <Link
            href="/donate"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-7 py-4 font-semibold text-green-900 transition hover:bg-green-50"
          >
            {t("cta.button")}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
