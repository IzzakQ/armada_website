import React from 'react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Наши услуги</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
             Мы специализируемся на эффективных логистических решениях, адаптированных под ваши нужды.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Auto Transport */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-500 transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Приоритет
            </div>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
               <svg className="w-8 h-8 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
               </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Автоперевозки</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Наше основное направление. Быстрая и гибкая доставка грузовиками любой грузоподъемности. Идеально для доставки «от двери до двери» по всей стране.
            </p>
             <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Полная загрузка (FTL)</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Сборные грузы (LTL)</li>
            </ul>
          </div>

          {/* Railway Transport */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg border border-slate-200 transform hover:-translate-y-2 transition-transform duration-300 group">
             <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors">
               <svg className="w-8 h-8 text-slate-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> 
                  {/* Just using a generic lightning/speed icon or better a train if available. Let's use a train-like paths */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" transform="scale(0.8) translate(3,3)"  className="hidden"/>
               </svg>
               {/* Custom Train SVG */}
                <svg className="w-8 h-8 text-slate-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" opacity="0.5"/>
                    <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth={2}/>
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20v2M15 20v2"/>
                   <circle cx="9" cy="15" r="1" fill="currentColor"/>
                   <circle cx="15" cy="15" r="1" fill="currentColor"/>
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">ЖД Перевозки</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Экономичное решение для больших объемов и дальних расстояний. Надежное расписание и высокая грузоподъемность для ваших промышленных нужд.
            </p>
             <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></span>Насыпные грузы</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></span>Контейнерные перевозки</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
