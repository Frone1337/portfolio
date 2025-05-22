import React, { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const projects = [
    {
      title: 'QR-сервис для выдачи ноутбуков',
      description:
        'Разработка веб-приложения для студентов, позволяющего брать ноутбуки через QR-код вместо бумажной регистрации.',
      image: 'https://placehold.co/400x250?text=QR+Service ',
      link: 'https://laptops.ithub-rostov.ru',
    },
    {
      title: 'Интернет-магазин ПК',
      description:
        'Мини-проект интернет-магазина с каталогом товаров, корзиной и фильтрами. Реалищован на Nuxt, с использованием: Tailwind, SQlite, Prisma и т.д.',
      image: 'https://placehold.co/400x250?text=PC+Shop ',
      link: '#',
    },
  ];

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            scroll-behavior: smooth;
          }

          body {
            background-color: ${darkMode ? '#1a1a1a' : '#ffffff'};
            color: ${darkMode ? '#f0f0f0' : '#333'};
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          header {
            background: linear-gradient(120deg, #36d1dc, #5b86e5);
            padding: 4rem 2rem 6rem 2rem;
            text-align: center;
            color: white;
          }

          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
          }

          .nav-links {
            display: flex;
            gap: 1.5rem;
            list-style: none;
          }

          .nav-links a:hover {
            text-decoration: underline;
          }

          .theme-toggle {
            cursor: pointer;
            font-size: 1.5rem;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            padding: 0.5rem;
            transition: background 0.3s;
          }

          .theme-toggle:hover {
            background: rgba(255, 255, 255, 0.3);
          }

          .hero h2 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            background-image: linear-gradient(90deg,rgb(95, 255, 207),rgb(84, 241, 91));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .hero p {
            font-size: 1.2rem;
            opacity: 0.9;
          }

          section {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          h2 {
            font-size: 2rem;
            margin-bottom: 2rem;
            text-align: center;
          }

          .about-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .about-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          ul {
            list-style-type: disc;
            padding-left: 1.5rem;
          }

          .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
          }

          .project-card {
            background: ${darkMode ? '#2c2c2c' : '#fff'};
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }

          .project-card:hover {
            transform: scale(1.03);
          }

          .project-card img {
            width: 100%;
            height: 160px;
            object-fit: cover;
          }

          .project-card-body {
            padding: 1rem;
          }

          .project-card h3 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
          }

          .project-card p {
            font-size: 0.95rem;
            margin-bottom: 1rem;
          }

          .project-card a {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: #0077cc;
            color: white;
            border-radius: 4px;
            transition: background 0.3s;
          }

          .project-card a:hover {
            background: #005fa3;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-width: 600px;
            margin: 0 auto;
          }

          input,
          textarea {
            padding: 1rem;
            border: 1px solid ${darkMode ? '#444' : '#ccc'};
            border-radius: 4px;
            background: ${darkMode ? '#333' : '#fff'};
            color: ${darkMode ? '#eee' : '#333'};
          }

          button {
            padding: 0.75rem;
            background: #0077cc;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s;
          }

          button:hover {
            background: #005fa3;
          }

          .success-message {
            text-align: center;
            color: #2ecc71;
            font-weight: bold;
          }

          footer {
            text-align: center;
            padding: 2rem 1rem;
            background: ${darkMode ? '#111' : '#f4f4f4'};
            font-size: 0.9rem;
            color: ${darkMode ? '#aaa' : '#666'};
          }

          .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
          }

          .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
          }

          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }

            .hero h2 {
              font-size: 2rem;
            }
          }
        `}
      </style>

      {/* Header */}
      <header className="hero">
        <nav>
          <div>Олег Погорельцев</div>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => scrollToSection('about')}>Обо мне</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Проекты</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Контакты</a></li>
            <li>
              <span className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? '🌞' : '🌙'}
              </span>
            </li>
          </ul>
        </nav>
        <div className="hero-content fade-in">
          <h2>Привет! Я Олег</h2>
          <p>Middle Frontend Developer из Ростова-на-Дону</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="fade-in">
        <h2>Обо мне</h2>
        <div className="about-grid">
          <div>
            <p>
              Выпускник по направлению «Информационные системы и технологии» в колледже IThub.
              Образование: 2022–2025 (в процессе).
            </p>
            <p>
              Изучаю SEO и SMM, люблю создавать дизайн в Figma. Заинтересован в развитии в сфере web-технологий и цифрового маркетинга.
            </p>
          </div>
          <div>
            <h3>Навыки</h3>
            <ul>
              <li>Frontend: HTML5, CSS3 (SCSS), JavaScript (ES6+), React, Vue.js, Nuxt.js</li>
              <li>Backend: Django (частичное понимание)</li>
              <li>Базы данных: MySQL (частичное понимание), PostgreSQL (частичное понимание), SQLite </li>
              <li>Инструменты: Git, npm/yarn, Figma, Tilda</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="fade-in">
        <h2>Мои проекты</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">Подробнее</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="fade-in">
        <h2>Связь со мной</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input type="text" name="name" placeholder="Ваше имя" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Ваш Email" required value={formData.email} onChange={handleChange} />
          </div>
          <textarea name="message" rows="5" placeholder="Ваше сообщение" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Отправить</button>
          {formSubmitted && <p className="success-message">Сообщение отправлено!</p>}
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Олег Погорельцев. Все права защищены.</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="https://t.me/MrHuePin " target="_blank" rel="noopener noreferrer">Telegram</a> | 
          <a href="https://github.com/pogoreltsev-oleg " target="_blank" rel="noopener noreferrer"> GitHub</a>
        </div>
      </footer>
    </>
  );
};

export default App;