import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
             <div className="relative">
                 <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full -translate-x-4 -translate-y-4 z-0"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75" 
                    alt="Company meeting" 
                    className="relative z-10 rounded-lg shadow-xl w-full object-cover h-[400px]"
                    loading="lazy"
                  />
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
