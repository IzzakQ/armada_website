import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
             <span className="text-2xl font-bold text-white tracking-tighter block mb-4">
                АРМАДА
              </span>
              <p className="text-sm">
                Профессиональные логистические услуги для бизнеса. Мы доставляем ваш успех.
              </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Услуги</h4>
             <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Автоперевозки</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">ЖД Перевозки</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Контакты</h4>
             <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                 <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                 </svg>
                 +7 (995) 000-05-77
              </li>
              <li className="flex items-center">
                 <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
                 0000577@list.ru
              </li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Юридическая информация</h4>
             <div className="text-xs space-y-2">
               <p>ООО "АРМАДА"</p>
               <p>ИНН: 7751199801</p>
               <p>ОГРН: 1217700284163</p>
               <p>Адрес: 108850, г. Москва, Внуковское п-е, ул. Анны Ахматовой, дом 14, офис 8</p>
             </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
           <p>&copy; {new Date().getFullYear()} ООО "АРМАДА". Все права защищены.</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
