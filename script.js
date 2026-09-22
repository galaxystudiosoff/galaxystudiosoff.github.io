/**
 * Galaxy Studios - Main JavaScript
 * Handles language switching, effects toggle, and UI interactions
 */

// ===== Переводы =====
const translations = {
  ru: {
    subtitle: "Разработка игр с душой",
    p1: '<span class="highlight">Galaxy Studios</span> — независимая игровая студия, основанная в 2022 году. Мы создаём уникальные игровые миры, в которых важны не только механики, но и атмосфера, история и эмоции.',
    quote: '«Игра — это не просто развлечение. Это вселенная, в которую можно погрузиться».',
    p2: 'Наша команда — это разработчики и создатели, глубоко вовлечённые в каждый аспект своих проектов: от нарратива и визуала до звука и геймплея. Мы верим в силу интерактивного повествования и стремимся делать то, во что сами хотели бы играть.',
    p3: 'Мы не гонимся за количеством. Мы работаем с уважением к деталям и к тем, кто сыграет в наши игры.',
    news: 'Следите за новостями',
    followText: 'Подпишитесь на наши соцсети, чтобы первыми узнавать о релизах, обновлениях и закулисье разработки:',
    about: 'О студии',
    aboutP1: 'Galaxy Studios — это молодая и маленькая, но амбициозная команда, стремящаяся внести свой вклад в индустрию игр. Мы экспериментируем с жанрами, механиками и повествованием, чтобы находить новые способы вовлечь игрока.',
    aboutP2: 'Наш подход — качество, внимание к деталям и уважение к аудитории.',
    foundingDate: 'Дата основания: 12 сентября 2022 года',
    footerText: '© 2025 GALAXY STUDIOS. Не все права защищены.',
    youtubeUrl: 'https://www.youtube.com/@GALAXYSTUDIOSOFFRU',
    vkUrl: 'https://vk.com/galaxystudiosoff',
    telegramUrl: 'https://t.me/galaxystudiosoffru'
  },
  en: {
    subtitle: 'Game Development with Soul',
    p1: '<span class="highlight">Galaxy Studios</span> is an independent game studio founded in 2022. We create unique game worlds where mechanics, atmosphere, story, and emotion all matter.',
    quote: '"A game isn\'t just entertainment. It\'s a universe you can dive into."',
    p2: 'Our team consists of developers and creators deeply involved in every aspect of our projects—from narrative and visuals to sound and gameplay. We believe in the power of interactive storytelling and strive to build the kind of games we ourselves would want to play.',
    p3: 'We\'re not chasing quantity. We work with respect for the details and for those who will play our games.',
    news: 'Follow Us',
    followText: 'Subscribe to our social media to be the first to know about releases, updates, and behind-the-scenes development:',
    about: 'About the Studio',
    aboutP1: 'Galaxy Studios is a young and small, but ambitious team striving to make its mark on the gaming industry. We experiment with genres, mechanics, and narrative to find new ways to engage players.',
    aboutP2: 'Our approach is quality, attention to detail, and respect for our audience.',
    foundingDate: 'Founded: September 12, 2022',
    footerText: '© 2025 GALAXY STUDIOS. Not all rights reserved.',
    youtubeUrl: 'https://www.youtube.com/@GALAXYSTUDIOSOFF',
    discordUrl: 'https://discord.gg/6yDE5RWJHW',
    telegramUrl: 'https://t.me/galaxystudiosoff'
  }
};

// ===== Состояние приложения =====
const AppState = {
  currentLang: 'ru',
  effectsEnabled: true
};

// ===== Инициализация языка =====
function initLanguage() {
  const userLang = (navigator.language || 'en').split('-')[0];
  const supportedLangs = ['ru', 'en'];
  AppState.currentLang = supportedLangs.includes(userLang) ? userLang : 'en';
}

// ===== Установка языка =====
function setLanguage(lang) {
  AppState.currentLang = lang;
  document.getElementById('currentLang').textContent = lang.toUpperCase();
  
  const t = translations[lang];
  
  // Обновляем текстовые элементы
  document.getElementById('subtitle').textContent = t.subtitle;
  document.getElementById('p1').innerHTML = t.p1;
  document.getElementById('quote').innerHTML = t.quote;
  document.getElementById('p2').innerHTML = t.p2;
  document.getElementById('p3').innerHTML = t.p3;
  document.getElementById('news').textContent = t.news;
  document.getElementById('follow-text').textContent = t.followText;
  document.getElementById('about').textContent = t.about;
  document.getElementById('about-p1').textContent = t.aboutP1;
  document.getElementById('about-p2').textContent = t.aboutP2;
  document.getElementById('foundingDate').textContent = t.foundingDate;
  document.getElementById('footerText').textContent = t.footerText;

  // Обновляем ссылки и текст кнопок
  if (lang === 'ru') {
    document.getElementById('youtubeLink').href = t.youtubeUrl;
    document.getElementById('vkLink').href = t.vkUrl;
    document.getElementById('vkLink').textContent = 'VK';
    document.getElementById('telegramLink').href = t.telegramUrl;
  } else {
    document.getElementById('youtubeLink').href = t.youtubeUrl;
    document.getElementById('vkLink').href = t.discordUrl;
    document.getElementById('vkLink').textContent = 'Discord';
    document.getElementById('telegramLink').href = t.telegramUrl;
  }
}

// ===== Переключение эффектов =====
function toggleEffects() {
  AppState.effectsEnabled = !AppState.effectsEnabled;
  document.body.classList.toggle('no-effects', !AppState.effectsEnabled);
  document.getElementById('effectsStatus').textContent = AppState.effectsEnabled ? 'Вкл' : 'Выкл';
}

// ===== Атмосферные мерцания =====
function startAtmosphericFlicker() {
  setInterval(() => {
    if (!AppState.effectsEnabled) return;
    
    const quotes = document.querySelectorAll('.quote');
    quotes.forEach(quote => {
      if (Math.random() < 0.15) {
        const intensity = Math.random() * 25 + 10;
        quote.style.textShadow = `0 0 ${intensity}px rgba(127, 255, 212, 0.6)`;
        setTimeout(() => {
          quote.style.textShadow = '';
        }, 120);
      }
    });
  }, 2500);
}

// ===== Управление меню настроек =====
function setupSettingsMenu() {
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsMenu = document.getElementById('settingsMenu');
  const langToggle = document.getElementById('langToggle');
  const toggleEffectsBtn = document.getElementById('toggleEffects');

  // Открытие/закрытие меню
  settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsMenu.classList.toggle('visible');
  });

  // Закрытие при клике вне меню
  document.addEventListener('click', (e) => {
    if (!settingsMenu.contains(e.target) && e.target !== settingsBtn) {
      settingsMenu.classList.remove('visible');
    }
  });

  // Переключение языка
  langToggle.addEventListener('click', () => {
    setLanguage(AppState.currentLang === 'ru' ? 'en' : 'ru');
  });

  // Переключение эффектов
  toggleEffectsBtn.addEventListener('click', toggleEffects);
}

// ===== Инициализация приложения =====
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  setLanguage(AppState.currentLang);
  setupSettingsMenu();
  startAtmosphericFlicker();
});
