import React from 'react';

export default function LeadForm() {
  return (
    <section id="lead-form" className="py-20 bg-slate-900 relative">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-1/3 bg-blue-700 p-10 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Оставить заявку</h3>
            <p className="opacity-90 mb-6">Заполните форму, и наш менеджер свяжется с вами в течение 15 минут с детальным расчетом.</p>
            <div className="flex items-center space-x-3 mb-4">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
               </svg>
               <span className="font-semibold">+7 (995) 000-05-77</span>
            </div>
             <div className="flex items-center space-x-3">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
               <span className="font-semibold">0000577@list.ru</span>
            </div>
          </div>

          <div className="md:w-2/3 p-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Ваше Имя"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                  <label htmlFor="from" className="block text-sm font-medium text-slate-700 mb-1">Откуда</label>
                  <input
                    type="text"
                    id="from"
                    name="from"
                    className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Город, Регион"
                    required
                  />
                </div>
                 <div>
                  <label htmlFor="to" className="block text-sm font-medium text-slate-700 mb-1">Куда</label>
                  <input
                    type="text"
                    id="to"
                    name="to"
                    className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Город, Регион"
                    required
                  />
                </div>
              </div>

               <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-slate-700 mb-1">Тип груза</label>
                 <select 
                    id="cargo" 
                    name="cargo" 
                    className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                 >
                    <option value="">Выберите тип груза</option>
                    <option value="consumer">Товары народного потребления</option>
                    <option value="industrial">Промышленное оборудование</option>
                    <option value="construction">Стройматериалы</option>
                    <option value="other">Другое</option>
                 </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition-colors uppercase tracking-widest text-sm shadow-lg hover:shadow-xl"
              >
                Отправить заявку
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
