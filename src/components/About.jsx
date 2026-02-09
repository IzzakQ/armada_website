import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
             <div className="relative">
                 <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full -translate-x-4 -translate-y-4 z-0"></div>
                  <div className="relative z-10 rounded-lg shadow-xl w-full h-[400px] bg-gradient-to-br from-blue-600 to-slate-700 flex items-center justify-center">
                    <svg className="w-32 h-32 text-white opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-slate-100 rounded-full translate-x-4 translate-y-4 z-0"></div>
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">О компании ООО "АРМАДА"</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Мы - команда профессионалов логистики, приверженная обеспечению безопасной и своевременной доставки вашего груза. Обладая многолетним опытом в отрасли, мы понимаем все сложности управления цепями поставок.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Наша миссия - предоставлять прозрачные, надежные и экономически эффективные транспортные услуги. Мы ценим долгосрочные партнерские отношения и относимся к каждому грузу с максимальной заботой.
            </p>

            <div className="space-y-4">
              {[
                "100% Гарантия безопасности груза",
                "Отслеживание груза в реальном времени",
                "Персональный менеджер",
                "Прозрачная ценовая политика"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-blue-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
