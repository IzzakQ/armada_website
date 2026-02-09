import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=75"
          alt="Logistics Truck"
          className="w-full h-full object-cover opacity-50"
          loading="eager"
        />
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
