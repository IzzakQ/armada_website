import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 z-10" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Надежные логистические решения <br />
            <span className="text-blue-500">для вашего бизнеса</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Быстрая и безопасная доставка грузов по России и СНГ. Мы гарантируем, что ваш груз прибудет вовремя.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#lead-form"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded text-center transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20 uppercase tracking-widest text-sm"
            >
              Рассчитать стоимость
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold rounded text-center transition-all uppercase tracking-widest text-sm"
            >
              Наши услуги
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
