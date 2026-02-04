import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, BookOpen, MessageSquare, Award, Calendar, ArrowRight, Download, MapPin, Phone } from 'lucide-react';


const Portfolio = () => {

    const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'blog', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "REST API", "GraphQL"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "CI/CD", "Webpack", "Jest"] }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
      tech: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind"],
      image: "📋",
      link: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with forecasts, maps, and historical data visualization.",
      tech: ["React", "D3.js", "Weather API", "Chart.js"],
      image: "🌤️",
      link: "#",
      github: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics platform for tracking social media metrics, engagement, and content performance.",
      tech: ["Vue.js", "Python", "FastAPI", "Redis"],
      image: "📊",
      link: "#",
      github: "#"
    }
  ];

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices for structuring large React applications with performance optimization and code splitting.",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      category: "React"
    },
    {
      title: "Mastering TypeScript in 2024",
      excerpt: "A comprehensive guide to advanced TypeScript patterns, generics, and type safety in modern applications.",
      date: "Jan 10, 2024",
      readTime: "12 min read",
      category: "TypeScript"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends in web development including Web3, AI integration, and edge computing.",
      date: "Jan 5, 2024",
      readTime: "10 min read",
      category: "Web Dev"
    }
  ];

  const experience = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications"
    },
    {
      role: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Built and maintained client projects using modern tech stack"
    },
    {
      role: "Junior Developer",
      company: "StartUp Labs",
      period: "2019 - 2020",
      description: "Developed features and fixed bugs for web applications"
    }
  ];

  return (
    <div>

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated background mesh gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0),rgba(0,0,0,1))]" />
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.3) 0px, transparent 50%),
              radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 0.2) 0px, transparent 50%),
              radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 0.2) 0px, transparent 50%),
              radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.3) 0px, transparent 50%),
              radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 0.2) 0px, transparent 50%),
              radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 0.3) 0px, transparent 50%),
              radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 0.2) 0px, transparent 50%)
            `,
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      {/* Animated particles/dots */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(100, 200, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: 0.15
        }} />
      </div>

      {/* Floating gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Portfolio</span>
            </div>
            
            <div className="hidden md:flex gap-8">
              {['Home', 'Skills', 'Projects', 'Blog', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.toLowerCase() 
                      ? 'text-cyan-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur-xl rounded-full border border-cyan-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-cyan-300">Available for opportunities</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">John Doe</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                Full Stack Developer
              </h2>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                I create exceptional digital experiences that combine beautiful design with powerful functionality. 
                Specialized in building modern web applications using React, Node.js, and cloud technologies.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  View My Work
                </button>
                <button className="px-8 py-3 border-2 border-white/20 bg-slate-800/50 backdrop-blur-xl text-white rounded-lg font-medium hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">30+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="w-full h-full flex items-center justify-center text-8xl">
                    👨‍💻
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-500/50">
                  <Award className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Proficient in modern web technologies and frameworks with a focus on creating scalable, performant applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'React', percentage: 95 },
              { label: 'Node.js', percentage: 90 },
              { label: 'TypeScript', percentage: 88 },
              { label: 'Database', percentage: 85 }
            ].map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{item.percentage}%</div>
                <div className="text-sm font-medium text-gray-400">{item.label}</div>
                <div className="w-full bg-slate-800/50 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work showcasing expertise in full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-800/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-12 flex items-center justify-center text-6xl border-b border-white/10">
                  {project.image}
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.link}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-white font-medium text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-white/20 bg-slate-800/50 backdrop-blur-xl text-white rounded-lg font-medium hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all inline-flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Sharing knowledge and insights about web development, programming, and technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-slate-800/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-white/20 bg-slate-800/50 backdrop-blur-xl text-white rounded-lg font-medium hover:border-purple-500/50 hover:bg-slate-800/80 transition-all inline-flex items-center gap-2">
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Me
              </h2>
              
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with over 5 years of experience in creating 
                web applications that solve real-world problems. I love turning complex problems 
                into simple, beautiful, and intuitive solutions.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                My journey in web development started with a curiosity about how things work on 
                the internet. Since then, I've had the privilege of working with startups, agencies, 
                and enterprise companies, building everything from marketing websites to complex 
                web applications.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Work Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div 
                    key={index}
                    className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <div className="text-cyan-400 font-medium mb-2">{exp.company}</div>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
              <MessageSquare className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Let's Talk</h3>
              <p className="text-gray-400 mb-4">
                Interested in working together? Let's schedule a call to discuss your project.
              </p>
              <a href="mailto:john.doe@example.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                john.doe@example.com
              </a>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
              <Briefcase className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Work Inquiry</h3>
              <p className="text-gray-400 mb-4">
                Looking for a developer for your team? I'm always interested in new opportunities.
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-medium">
                View Resume
              </a>
            </div>
          </div>

          <form className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input 
                type="text"
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea 
                rows="5"
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-500"
                placeholder="Tell me about your project..."
              />
            </div>

            <button 
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Send Message
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-12">
            <a 
              href="#"
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-xl border border-white/10 hover:bg-cyan-500 hover:border-cyan-500 text-gray-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-xl border border-white/10 hover:bg-cyan-500 hover:border-cyan-500 text-gray-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-xl border border-white/10 hover:bg-cyan-500 hover:border-cyan-500 text-gray-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 John Doe. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>

    </div>
  )
}

export default Portfolio