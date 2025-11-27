import { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaAward,
  FaBars,
  FaBriefcase,
  FaBullhorn,
  FaCalendarAlt,
  FaChartLine,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaEnvelope,
  FaFlask,
  FaGraduationCap,
  FaHeart,
  FaHeartbeat,
  FaIndustry,
  FaLaptopCode,
  FaLightbulb,
  FaPhone,
  FaProductHunt,
  FaQuestionCircle,
  FaRocket,
  FaShieldAlt,
  FaStar,
  FaTimes,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import "./App.css";

/**
 * =====================================
 * ДАНІ ДЛЯ БЛОКУ "ПРОЄКТИ"
 * =====================================
*/

const projectsData = [
  {
    title: "Індустріальний парк",
    description:
      "Супровід отримання статусу технопарку або індустріального парку для підприємства. Стратегічні консультації щодо розвитку виробництва.",
    color: "#2D5D4E",
  },
  {
    title: "Пілотне тестування",
    description:
      "Підготовка заявок на гранти, супровід пілотних тестувань медичних, технологічних та інноваційних рішень.",
    color: "#1F4237",
  },
  {
    title: "Програми лояльності",
    description:
      "Розробка дилерських та партнерських програм лояльності, які стимулюють продажі та збільшують утримання клієнтів.",
    color: "#3D7A68",
  },
  {
    title: "Фірмовий стиль",
    description:
      "Створення бренд-платформи, айдентики, tone-of-voice і візуальної системи компанії.",
    color: "#245044",
  },
  {
    title: "Презентації",
    description:
      "Професійна розробка презентацій для інвесторів, партнерів, тендерів і бізнес-подій.",
    color: "#2D5D4E",
  },
  {
    title: "PR та комунікації",
    description:
      "Побудова зовнішніх і внутрішніх комунікацій, робота зі ЗМІ та професійними спільнотами.",
    color: "#4A9B85",
  },
  {
    title: "Запуск продукту",
    description:
      "Повний супровід запуску нового продукту: дослідження, позиціонування, стратегія та перші продажі.",
    color: "#3D7A68",
  },
];

/**
 * =====================================
 * ДАНІ ДЛЯ БЛОКУ "ПОСЛУГИ"
 * =====================================
*/

const servicesData = [
  {
    title: "Маркетингові стратегії",
    description:
      "Побудова стратегій розвитку для компаній будь-якого масштабу. Аналітика, позиціонування та покроковий план дій.",
    icon: <FaChartLine />,
    color: "#2D5D4E",
  },
  {
    title: "Виведення продуктів на ринок",
    description:
      "Маркетингові дослідження, тестування гіпотез, сегментація, супровід запусків і створення ринкової стратегії.",
    icon: <FaProductHunt />,
    color: "#245044",
  },
  {
    title: "Брендинг та реклама",
    description:
      "SMM, SEO, контент-стратегії, digital-кампанії, медійна реклама та комплексна комунікація.",
    icon: <FaBullhorn />,
    color: "#3D7A68",
  },
  {
    title: "Організація подій",
    description:
      "Продюсування та організація конференцій, форумів, презентацій, PR-активностей.",
    icon: <FaCalendarAlt />,
    color: "#4A9B85",
  },
];

/**
 * =====================================
 * ДАНІ ДЛЯ БЛОКУ "ОСОБИСТА ІНФОРМАЦІЯ"
 * =====================================
*/

const personalInfoData = [
  {
    title: "Особисті якості",
    icon: <FaUser />,
    items: [
      "Комунікабельність та відкритість",
      "Уміння чітко й структуровано формулювати думки",
      "Розвинена емпатія",
      "Відповідальність та чесність",
      "Ініціативність та проактивність",
      "Аналітичне й стратегічне мислення",
    ],
    color: "#2D5D4E",
  },
  {
    title: "Ділові якості",
    icon: <FaBriefcase />,
    items: [
      "Орієнтація на результат",
      "Клієнтоорієнтованість",
      "Швидке опанування нових навичок",
      "Побудова ефективних комунікацій",
      "Впевнені публічні виступи",
    ],
    color: "#3D7A68",
  },
  {
    title: "Професійні навички",
    icon: <FaLaptopCode />,
    items: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "InDesign",
      "Планування та аналітика",
      "Контент-продюсування",
    ],
    color: "#245044",
  },
  {
    title: "Хобі та інтереси",
    icon: <FaHeart />,
    items: [
      "Подорожі",
      "Наука та технології",
      "Медицина та біохакінг",
      "Психологія",
      "Живопис та арт",
    ],
    color: "#4A9B85",
  },
];

/**
 * =====================================
 * ДАНІ ДЛЯ БЛОКУ "РЕКОМЕНДАЦІЇ"
 * =====================================
*/

const recommendationsData = [
  {
    name: "Валентин Кравченко",
    title: "Генеральний директор",
    company: "EnergyPro Service",
  },
  {
    name: "Олена Шевчук",
    title: "Керівниця маркетингу",
    company: "TechLine Group",
  },
  {
    name: "Андрій Гончар",
    title: "CEO",
    company: "Creative Motion Agency",
  },
  {
    name: "Ірина Романчук",
    title: "PR-директорка",
    company: "ModernLab",
  },
];

/**
 * =====================================
 * ЧЕК-ЛИСТ «ЧИ ПІДІЙДЕ ВАМ МОЯ ДОПОМОГА?»
 * =====================================
*/

const fitChecklist = [
  { text: "Вам потрібно збільшити продажі або впізнаваність бренду", icon: <FaChartLine /> },
  { text: "Ви плануєте запуск нового продукту або послуги", icon: <FaRocket /> },
  { text: "Вам потрібна допомога зі стратегією маркетингу", icon: <FaLightbulb /> },
  { text: "Хочете заощадити час та отримати експертизу", icon: <FaClock /> },
];

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [contactMethod, setContactMethod] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Модалка «подзвонить»
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [callSecondsLeft, setCallSecondsLeft] = useState(30);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("visible")
        );
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const maxScroll = docHeight - windowHeight;
      const scrollPercent = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;

      setScrollProgress(scrollPercent);
      setShowBackToTop(scrollY > 300);
      setShowFloatingCTA(
        scrollY > windowHeight * 0.5 && scrollY < docHeight - windowHeight * 1.5
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const timer = setTimeout(() => setShowNotification(false), 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelectorAll(".fade-in").forEach((el) => observer.unobserve(el));
      clearTimeout(timer);
    };
  }, []);

  // Логіка таймера «подзвонить»
  useEffect(() => {
    if (!isCallModalOpen) return;

    setCallSecondsLeft(30);

    const interval = setInterval(() => {
      setCallSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Авто-закриття модалки через секунду після завершення таймера
          setTimeout(() => setIsCallModalOpen(false), 1000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isCallModalOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToContact = () => {
    document.querySelector(".footer")?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleContactClick = (method) => {
    setContactMethod(method);
    setTimeout(() => setContactMethod(null), 2000);
  };

  const toggleFaq = (index) =>
    setOpenFaqIndex((prev) => (prev === index ? null : index));

  const navItems = [
    { id: "about", label: "Про мене", icon: <FaUser /> },
    { id: "projects", label: "Проєкти", icon: <FaChartLine /> },
    { id: "services", label: "Послуги", icon: <FaBriefcase /> },
    { id: "contact", label: "Контакти", icon: <FaPhone /> },
  ];

  // Обробник «робот набирає вас»
  const handlePhoneRobotClick = (e) => {
    e.preventDefault();
    setIsCallModalOpen(true);
    handleContactClick("телефон");
  };

  const faqData = [
    {
      question: "Як проходить консультація?",
      answer:
        "Консультація триває 30 хвилин у зручному для вас форматі — телефоном, відеозвʼязком або особисто. Обговоримо ваші завдання, ситуацію та можливості росту.",
    },
    {
      question: "Які строки реалізації проєкту?",
      answer:
        "Все залежить від масштабу. Невеликі задачі — 1–2 тижні, комплексні стратегії — 1–3 місяці. Усі строки обговорюються індивідуально.",
    },
    {
      question: "Яких результатів можна очікувати?",
      answer:
        "Залежно від проєкту: зростання продажів до 40% за квартал, підвищення конверсії, покращення ROI, зміцнення позицій бренду.",
    },
    {
      question: "Чи працюєте ви з малим бізнесом?",
      answer:
        "Так, я працюю з компаніями будь-якого масштабу — від стартапів до великих підприємств.",
    },
    {
      question: "Яка вартість послуг?",
      answer:
        "Вартість формується індивідуально залежно від об’єму робіт і складності. Перша консультація завжди безкоштовна.",
    },
  ];

  // Допоміжне форматування часу (00:30)
  const formatSeconds = (sec) => {
    const s = Math.max(sec, 0);
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  };

  const callProgress = ((30 - callSecondsLeft) / 30) * 100;

  return (
    <>
      {/* ГОЛОВНА НАВІГАЦІЯ */}
      <nav className="main-navigation">
        <div className="nav-container">
          <div className="nav-logo" onClick={scrollToTop}>
            Ольга Коновалова
          </div>

          <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Меню"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className="nav-link"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Плаваюча кнопка звʼязку */}
      {showFloatingCTA && (
        <button
          className={`floating-contact-btn ${
            showNotification ? "has-notification" : ""
          }`}
          onClick={scrollToContact}
        >
          <FaPhone />
          <span>Звʼязатися</span>
          {showNotification && <span className="notification-badge">!</span>}
          <span className="availability-indicator">
            Доступна зараз
          </span>
        </button>
      )}

      {/* Прогрес-бар прокрутки */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Кнопка "Вгору" */}
      {showBackToTop && (
        <button className="back-to-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      {/* Тост про відкриття контакту */}
      {contactMethod && (
        <div className="success-feedback">
          <FaCheckCircle />
          <span>Відкривається {contactMethod}...</span>
        </div>
      )}

      {/* HERO */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Коновалова Ольга</h1>
          <p className="hero-subtitle">Продюсер ділових заходів</p>

          <div className="hero-metrics">
            <div className="metric-item">
              <div className="metric-number">15+</div>
              <div className="metric-label">Років досвіду</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">50+</div>
              <div className="metric-label">Успішних проєктів</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">100%</div>
              <div className="metric-label">Лояльність клієнтів</div>
            </div>
          </div>

          <div className="hero-value-proposition">
            <div className="value-item">
              <FaRocket />
              <span>Швидкий результат</span>
            </div>
            <div className="value-item">
              <FaShieldAlt />
              <span>Гарантія якості</span>
            </div>
            <div className="value-item">
              <FaStar />
              <span>Досвід та експертиза</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a
              href="mailto:ola.konovalova@gmail.com?subject=Запит на консультацію"
              onClick={() => handleContactClick("email")}
            >
              <button className="btn-primary">
                Звʼязатися зараз
                <span className="btn-hint">Безкоштовна консультація</span>
              </button>
            </a>
            <button className="btn-secondary" onClick={scrollToContact}>
              Дізнатися більше
              <span className="btn-hint">2 хвилини</span>
            </button>
          </div>
        </div>
      </div>

      {/* ПРО МЕНЕ */}
      <div className="about-section fade-in" id="about">
        <div className="about-content">
          <div className="about-text">
            <h2>Про мене</h2>
            <p>
              Я — фахівець з багаторічним досвідом у сфері маркетингу, PR та
              організації бізнес-подій. Працювала з українськими компаніями у
              галузях виробництва, медицини, інновацій, сервісів та освіти.
            </p>
            <div className="benefits-box">
              <h3>Ви отримуєте:</h3>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div>
                    <strong>Зростання продажів</strong>
                    <p>До 40% за перший квартал</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div>
                    <strong>Економію часу</strong>
                    <p>Фокус на вашому бізнесі</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div>
                    <strong>Експертизу</strong>
                    <p> років практики</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="achievements-box">
              <h3>Досягнення та визнання:</h3>
              <div className="achievement-item">
                <FaCheckCircle className="achievement-icon" />
                <span>Участь у всеукраїнських бізнес-конкурсах</span>
              </div>
              <div className="achievement-item">
                <FaCheckCircle className="achievement-icon" />
                <span>Продюсування та організація масштабних подій</span>
              </div>
            </div>

            <div className="about-cta">
              <button className="btn-primary" onClick={scrollToContact}>
                Обговорити проєкт
              </button>
            </div>
          </div>

          <div className="about-list-container">
            <h3>Сфери діяльності:</h3>
            <ul className="about-list">
              <li>
                <FaIndustry className="about-icon" /> Виробництво
              </li>
              <li>
                <FaHeartbeat className="about-icon" /> Медицина
              </li>
              <li>
                <FaFlask className="about-icon" /> Біомедицина
              </li>
              <li>
                <FaLightbulb className="about-icon" /> Інновації
              </li>
              <li>
                <FaGraduationCap className="about-icon" /> Освітні заходи
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ЧИ ПІДІЙДЕ ВАМ? */}
      <div className="fit-check-section fade-in">
        <h2>Чи підійде вам моя допомога?</h2>
        <p className="section-subtitle">Звірте зі своїми потребами</p>

        <div className="fit-checklist">
          {fitChecklist.map((item, i) => (
            <div key={i} className="fit-item">
              <div className="fit-icon">{item.icon}</div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="fit-cta">
          <p>
            Якщо хоча б один пункт вам підходить — давайте обговоримо ваш
            проєкт!
          </p>
          <button className="btn-primary" onClick={scrollToContact}>
            Почати обговорення
          </button>
        </div>
      </div>

      {/* ОСОБИСТІ ЯКОСТІ */}
      <div className="personal-info-section">
        <div className="personal-info-grid">
          {personalInfoData.map((section, i) => (
            <div
              className="personal-info-card"
              key={i}
              style={{ borderLeft: `5px solid ${section.color}` }}
            >
              <div
                className="personal-info-icon"
                style={{ color: section.color }}
              >
                {section.icon}
              </div>
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ПРОЄКТИ */}
      <div className="projects-section fade-in" id="projects">
        <h2>Проєкти</h2>
        <p className="section-subtitle">
          Реалізовані кейси з вимірюваними результатами
        </p>

        <div className="roi-indicator">
          <FaChartLine />
          <span>
            Середній ROI проєктів: <strong>250%+</strong>
          </span>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, i) => (
            <div
              key={i}
              className="project-card fade-in"
              style={{ backgroundColor: project.color }}
              onClick={scrollToContact}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-cta-hint">
                Натисніть, щоб обговорити
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <button className="btn-primary" onClick={scrollToContact}>
            Обговорити ваш проєкт
          </button>
        </div>
      </div>

      {/* ПОСЛУГИ */}
      <div className="services-section fade-in" id="services">
        <h2>Послуги</h2>
        <p className="section-subtitle">
          Комплексні рішення для розвитку вашого бізнесу
        </p>

        <div className="trust-badge">
          <FaShieldAlt />
          <span>100% конфіденційність • Гарантія результату</span>
        </div>

        <div className="services-grid">
          {servicesData.map((s, i) => (
            <div
              key={i}
              className="service-card fade-in"
              style={{ borderTop: `5px solid ${s.color}` }}
              onClick={scrollToContact}
            >
              <div className="service-icon" style={{ backgroundColor: s.color }}>
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="service-cta-hint">Дізнатися більше →</div>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <button className="btn-primary" onClick={scrollToContact}>
            Отримати консультацію
          </button>
        </div>
      </div>

      {/* РЕКОМЕНДАЦІЇ */}
      <div className="recommendations-section">
        <h2>Рекомендації</h2>

        <div className="social-proof-badge">
          <FaUsers />
          <span>Понад 50 задоволених клієнтів • 100% лояльність</span>
        </div>

        <div className="recommendations-grid">
          {recommendationsData.map((rec, i) => (
            <div key={i} className="recommendation-card">
              <div className="recommendation-header">
                <h3>{rec.name}</h3>
                <FaAward className="recommendation-badge-icon" />
              </div>
              <span className="recommendation-title">{rec.title}</span>
              <p className="recommendation-company">{rec.company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section fade-in" id="faq">
        <h2>Поширені запитання</h2>
        <p className="section-subtitle">
          Відповіді на часті питання про співпрацю
        </p>

        <div className="faq-container">
          {faqData.map((faq, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(i)}>
                <FaQuestionCircle className="faq-icon" />
                <span>{faq.question}</span>
                {openFaqIndex === i ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {openFaqIndex === i && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Не знайшли відповідь?</p>
          <button className="btn-secondary" onClick={scrollToContact}>
            Поставити запитання
          </button>
        </div>
      </div>

      {/* ФУТЕР */}
      <footer className="footer fade-in" id="contact">
        <div className="footer-content">
          <h2>Звʼяжіться зі мною</h2>
          <p className="footer-description">
            Я допоможу вам створити сильну маркетингову стратегію, продюсувати
            подію чи запустити продукт, використовуючи багаторічний досвід і
            сучасні підходи.
          </p>

          <div className="final-value-reminder">
            <div className="value-reminder-item">
              <strong>Безкоштовна консультація</strong>
            </div>
            <div className="value-reminder-item">
              <strong>Швидка відповідь</strong>
            </div>
          </div>

          <p className="footer-cta-text">
            Готові до співпраці? Напишіть або зателефонуйте!
          </p>

          <div className="footer-contact">
            {/* Кнопка з роботом-дзвінком */}
            <a
              href="tel:+380000000000"
              className="contact-link"
              onClick={handlePhoneRobotClick}
            >
              <FaPhone className="contact-icon" />
              <div>
                <strong>Телефон:</strong> +380 (00) 000-00-00
                <span className="contact-hint">
                  Натисніть — помічник набере вас
                </span>
              </div>
            </a>

            <a
              href="mailto:ola.konovalova@gmail.com?subject=Запит на консультацію"
              className="contact-link"
              onClick={() => handleContactClick("email")}
            >
              <FaEnvelope className="contact-icon" />
              <div>
                <strong>Email:</strong> ola.konovalova@gmail.com
                <span className="contact-hint">
                  Натисніть, щоб відправити лист
                </span>
              </div>
            </a>
          </div>

          <div className="footer-buttons">
            <a
              href="mailto:ola.konovalova@gmail.com?subject=Запит на консультацію"
              onClick={() => handleContactClick("email")}
            >
              <button className="btn-primary">
                Надіслати повідомлення
                <span className="btn-instruction">
                  Відкриється поштовий клієнт
                </span>
              </button>
            </a>

            <a href="tel:+380000000000" onClick={handlePhoneRobotClick}>
              <button className="btn-secondary">
                Подзвонити зараз
                <span className="btn-instruction">
                  Я набираю ваш номер…
                </span>
              </button>
            </a>
          </div>

          <div className="next-steps">
            <h3>Що далі?</h3>
            <ol>
              <li>Звʼяжіться зі мною будь-яким зручним способом.</li>
              <li>Обговоримо ваш проєкт протягом 30 хвилин.</li>
              <li>Отримаєте персональну пропозицію.</li>
            </ol>
          </div>
        </div>
      </footer>

      {/* МОДАЛКА: РОБОТ ДЗВОНИТЬ */}
      {isCallModalOpen && (
        <div className="call-modal-backdrop">
          <div className="call-modal">
            <div className="call-modal-header">
              <FaPhone />
              <h3>Розумний помічник телефонує вам</h3>
            </div>
            <div className="call-modal-body">
              <p className="call-modal-text-main">
                «Я набираю ваш номер… Залишайтесь на лінії.»
              </p>
              <p className="call-modal-text-sub">
                Якщо не зручно говорити — просто скиньте дзвінок або
                напишіть мені у відповідь.
              </p>

              <div className="call-modal-timer">
                <span>До зʼєднання:</span>
                <strong>{formatSeconds(callSecondsLeft)}</strong>
              </div>

              <div className="call-modal-progress">
                <div
                  className="call-modal-progress-bar"
                  style={{ width: `${callProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="call-modal-footer">
              <button
                className="btn-secondary"
                onClick={() => setIsCallModalOpen(false)}
              >
                Скасувати дзвінок
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
