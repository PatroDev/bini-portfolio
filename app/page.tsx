'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
// import { LanguageToggle } from '@/components/LanguageToggle';
import Header from "@/components/Header";
import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Globe, Award, Briefcase, GraduationCap, Eye, ExternalLink, ChevronRight, Star, Calendar, DollarSign, Clock, Languages, Palette as Palette2, Building, Lightbulb, Pencil, Brush, Layers3 } from 'lucide-react';
// import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  client?: string;
  budget?: string;
  href?: string;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'certification';
}

export default function Home() {
  const { t, language } = useLanguage();
  const [darkMode, setDarkMode] = useState(false);
  
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title:  language === "fr" ? 'Extension de Maison : De 6 à 10 Chambres' : 'House Extension: From 6 to 10 Bedrooms',
      description:  language === "fr" ? 'Rénovation complète et extension d\'une résidence familiale avec optimisation de l\'espace et design moderne.' : 'Complete renovation and extension of a family residence with space optimization and modern design.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800', // /renovation.jpg
      category: t('residentialArchitecture'),
      date: '2025',
      client:  language === "fr" ? 'Famille Martinez' : 'Martinez Family',
      budget: '$50,000',
      href:'https://www.upwork.com/freelancers/~01c8bbff0cbcfc2974?p=1954386860192862208'
    },
    {
      id: '2',
      title: language === 'fr' ? 'Laboratoire Informatique Moderne' : 'Modern Computer Laboratory',
      description: language === 'fr' ? 'Refonte complète d\'un laboratoire informatique avec modélisation 3D détaillée et rendus photoréalistes.' : 'Complete redesign of a computer laboratory with detailed 3D modeling and photorealistic renderings.',
      image: '/image_original.png',
      category: t('interiorDesign'),
      date: '2025',
      budget: '$140,000',
      href: 'https://www.upwork.com/freelancers/~01c8bbff0cbcfc2974?p=1954384940993892352'
    },
    {
      id: '3',
      title: language === 'fr' ? 'Maison Minimaliste Contemporaine avec Piscine' : 'Contemporary Minimalist House with Pool',
      description: language === 'fr' ? 'Projet résidentiel tropical avec piscine, alliant modernité et harmonie avec l\'environnement naturel.' : 'Tropical residential project with pool, combining modernity and harmony with the natural environment.',
      image: '/image_original3.png', // https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800
      category: t('landscapeArchitecture'),
      date: '2025',
      href: 'https://www.upwork.com/freelancers/~01c8bbff0cbcfc2974?p=1928683721486487552'
    },
    {
      id: '4',
      title: language === 'fr' ? 'Identité Visuelle Complète - Studio Créatif' : 'Complete Visual Identity - Creative Studio',
      description: language === 'fr' ? 'Création d\'une identité visuelle complète incluant logo, charte graphique et supports de communication.' : 'Creation of a complete visual identity including logo, graphic charter and communication materials.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: t('graphicDesign'),
      date: '2024',
      client: language === 'fr' ? 'Studio Créatif' : 'Creative Studio',
      href: 'https://tiktok.com/@bini.amed225' // https://vm.tiktok.com/ZMAY6wts7
    }
  ]);

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      title: language === 'fr' ? 'Designer Graphique & Illustrateur' : 'Graphic Designer & Illustrator',
      company: 'Deal Design',
      period: language === 'fr' ? 'Juin 2024 - Présent' : 'June 2024 - Present',
      description: language === 'fr' ? 'Création d\'identités visuelles, logos, illustrations artistiques et supports de communication print et digital. Spécialisé en dessin technique et conceptuel.' : 'Creating visual identities, logos, artistic illustrations and print and digital communication materials. Specialized in technical and conceptual drawing.',
      type: 'work'
    },
    {
      id: '2',
      title: language === 'fr' ? 'Architecte Junior' : 'Junior Architect',
      company: 'DJEMIAN GROUP',
      period: language === 'fr' ? 'Juin 2024 - Octobre 2024' : 'June 2024 - October 2024',
      description: language === 'fr' ? 'Collaboration sur divers projets architecturaux et de design. Réalisation de plans techniques, modélisation 3D et rendus photoréalistes.' : 'Collaboration on various architectural and design projects. Creation of technical plans, 3D modeling and photorealistic renderings.',
      type: 'work'
    },
    {
      id: '3',
      title: 'Architecture',
      company: language === 'fr' ? 'École Nationale d\'Architecture de Rabat' : 'National School of Architecture of Rabat',
      period: language === 'fr' ? '2024-2027 (prévu)' : '2024-2027 (expected)',
      description: language === 'fr' ? 'Formation approfondie en architecture, design urbain et construction durable. Focus sur les techniques de modélisation 3D avancées.' : 'In-depth training in architecture, urban design and sustainable construction. Focus on advanced 3D modeling techniques.',
      type: 'education'
    },
    {
      id: '4',
      title: language === 'fr' ? 'Bachelor of Arts - Design d\'Interaction' : 'Bachelor of Arts - Interaction Design',
      company: language === 'fr' ? 'École Supérieur Art Plastique, d\'Architecture et du Design' : 'Superior School of Plastic Arts, Architecture and Design',
      period: '2020-2023',
      description: language === 'fr' ? 'Formation complète en design d\'interaction, UX/UI, arts plastiques et techniques de dessin professionnel.' : 'Complete training in interaction design, UX/UI, plastic arts and professional drawing techniques.',
      type: 'education'
    },
    {
      id: '5',
      title: language === 'fr' ? 'Artiste Graphique, Illustrateur & Peintre' : 'Graphic Artist, Illustrator & Painter',
      company: language === 'fr' ? 'Freelance' : 'Freelance',
      period: language === 'fr' ? '2018 - Présent' : '2018 - Present',
      description: language === 'fr' ? 'Création d\'œuvres artistiques originales, exploration de différents styles, maîtrise de la couleur, lumière et texture. Dessin à la main et illustration numérique.' : 'Creation of original artworks, exploration of different styles, mastery of color, light and texture. Hand drawing and digital illustration.',
      type: 'work'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [t('all'), t('residentialArchitecture'), t('interiorDesign'), t('landscapeArchitecture'), t('graphicDesign')];
  
  // useEffect(() => {
  //   setSelectedCategory('all');
  // }, []);

  const filteredProjects = selectedCategory === t('all')
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const skills = [
    { name: 'SketchUp', level: 95, category: t('modeling3D') },
    { name: 'Lumion', level: 90, category: t('rendering') },
    { name: '3ds Max', level: 88, category: t('modeling3D') },
    { name: 'AutoCAD', level: 92, category: t('cad') },
    { name: 'Revit', level: 85, category: t('bim') },
    { name: 'Photoshop', level: 93, category: t('graphics') },
    { name: 'Illustrator', level: 87, category: t('graphics') },
    { name: 'InDesign', level: 80, category: t('graphics') },
    { name: language === 'fr' ? 'Dessin Technique' : 'Technical Drawing', level: 90, category: t('drawing') },
    { name: language === 'fr' ? 'Illustration Artistique' : 'Artistic Illustration', level: 88, category: t('drawing') }
  ];

  const services = [
    {
      icon: Layers3,
      title: t('architecture3D'),
      description: t('architecture3DDesc'),
      features: [t('technicalPlans'), t('models3D'), t('photorealisticRendering'), t('spaceOptimization')]
    },
    {
      icon: Palette2,
      title: t('graphicDesignService'),
      description: t('graphicDesignDesc'),
      features: [t('visualIdentities'), t('logos'), t('illustrations'), t('marketingMaterials')]
    },
    {
      icon: Lightbulb,
      title: t('creativeConsulting'),
      description: t('creativeConsultingDesc'),
      features: [t('innovativeConcepts'), t('projectGuidance'), t('creativeVision'), t('strategicAdvice')]
    },
    {
      icon: Pencil,
      title: language === 'fr' ? 'Dessin & Illustration Professionnelle' : 'Professional Drawing & Illustration',
      description: language === 'fr' ? 'Création de dessins techniques, illustrations conceptuelles et œuvres artistiques à la main et en numérique.' : 'Creation of technical drawings, conceptual illustrations and artistic works by hand and digitally.',
      features: [t('artisticDrawing'), t('technicalDrawing'), t('conceptualIllustration'), t('handDrawing')]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-white to-blue-950">
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full glass-effect border-b border-orange-500 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-2xl gradient-text animate-bounce-in text-shadow-glow">
              Bini Amed
            </div>
            <div className="flex items-center gap-6">
              <Link href="#about" className="text-slate-600 hover:text-orange-600 transition-all duration-300 hover:scale-110 font-medium">{t('about')}</Link>
              <Link href="#portfolio" className="text-slate-600 hover:text-orange-600 transition-all duration-300 hover:scale-110 font-medium">{t('portfolio')}</Link>
              <Link href="#experience" className="text-slate-600 hover:text-orange-600 transition-all duration-300 hover:scale-110 font-medium">{t('experience')}</Link>
              <Link href="#services" className="text-slate-600 hover:text-orange-600 transition-all duration-300 hover:scale-110 font-medium">{t('services')}</Link>
              <Link href="#contact" className="text-slate-600 hover:text-orange-600 transition-all duration-300 hover:scale-110 font-medium">{t('contact')}</Link>
              <LanguageToggle />
              <Link href="/admin">
                <Button variant="outline" size="sm" className="border-gradient hover-lift">{t('admin')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Header global */}
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 animate-pulse-3d">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    {t('status')}
                  </Badge>
                  <Badge variant="outline" className="hover:bg-orange-50 border-orange-200 transition-colors duration-300">
                    <MapPin className="w-3 h-3 mr-1" />
                    {t('location')}
                  </Badge>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold gradient-text leading-tight text-shadow-glow">
                  {t('title')}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {t('subtitle')}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-bg hover-lift shadow-lg text-white font-semibold">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="#contact">{t('contactMe')}</a> 
                </Button>
                <Button variant="outline" size="lg" className="border-gradient hover-lift">
                  <Eye className="w-4 h-4 mr-2" />
                  <a href="#portfolio">{t('viewPortfolio')}</a> 
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4 animate-fade-in-scale">
                <div className="text-center hover-lift">
                  <div className="text-2xl font-bold gradient-text">$200+</div>
                  <div className="text-sm text-slate-500">{t('totalEarnings')}</div>
                </div>
                <div className="text-center hover-lift">
                  <div className="text-2xl font-bold gradient-text">{projects.length}+ </div>
                  <div className="text-sm text-slate-500">{t('completedProjects')}</div>
                </div>
                <div className="text-center hover-lift">
                  <div className="text-2xl font-bold gradient-text">4.7★</div>
                  <div className="text-sm text-slate-500">{t('averageRating')}</div>
                </div>
              </div>
            </div>

            <div className="relative animate-float-slow animate-slide-in-right">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-blue-100 overflow-hidden shadow-2xl animate-morphing">
                <img
                  src="/image_original3.png" //https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800
                  alt="Architecture moderne"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 card-3d"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-effect rounded-xl shadow-lg p-4 animate-glow border-gradient">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-navy-800">Top Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text animate-bounce-in">{t('aboutTitle')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('aboutSubtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 hover-lift card-3d border-gradient animate-fade-in-scale">
              <CardContent className="p-0">
                <Languages className="w-8 h-8 text-orange-600 mb-4 animate-pulse-3d" />
                <h3 className="font-semibold mb-2">{t('languages')}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Français</span>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">{t('native')}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Anglais</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">{t('fluent')}</Badge>
                  </div>
                  {/* <div className="flex justify-between">
                    <span>Espagnol</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">{t('conversational')}</Badge>
                  </div> */}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift card-3d border-gradient animate-fade-in-scale">
              <CardContent className="p-0">
                <Clock className="w-8 h-8 text-orange-600 mb-4 animate-pulse-3d" />
                <h3 className="font-semibold mb-2">{t('availability')}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{t('moreThan30Hours')}</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    {t('timezone')}
                  </div>
                  <div className="text-sm text-slate-600">
                    {t('responseTime')}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift card-3d border-gradient animate-fade-in-scale">
              <CardContent className="p-0">
                <DollarSign className="w-8 h-8 text-orange-600 mb-4 animate-pulse-3d" />
                <h3 className="font-semibold mb-2">{t('pricing')}</h3>
                <div className="space-y-2">
                  <div className="text-2xl font-bold gradient-text">{t('hourlyRate')}</div>
                  <div className="text-sm text-slate-600">
                    {t('consultation')}
                  </div>
                  <div className="text-sm text-slate-600">
                    {t('fixedProjects')}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text animate-bounce-in">{t('technicalSkills')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2 hover-lift">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="gradient-bg h-2 rounded-full transition-all duration-1000 ease-out shimmer"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-slate-500">{skill.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text animate-bounce-in">{t('experienceTitle')}</h2>
            <p className="text-xl text-slate-600">{t('experienceSubtitle')}</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card key={exp.id} className="p-6 hover-lift card-3d border-gradient animate-fade-in-scale">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse-3d">
                      {exp.type === 'work' ? (
                        <Briefcase className="w-6 h-6 text-orange-600" />
                      ) : exp.type === 'education' ? (
                        <GraduationCap className="w-6 h-6 text-orange-600" />
                      ) : (
                        <Award className="w-6 h-6 text-orange-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <Badge variant="outline" className="w-fit hover:bg-orange-50 transition-colors duration-300">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                      <div className="gradient-text font-medium mb-2">{exp.company}</div>
                      <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio or Projects Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text animate-bounce-in">{t('portfolioTitle')}</h2>
            <p className="text-xl text-slate-600">{t('portfolioSubtitle')}</p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "gradient-bg text-white" : "border-gradient hover-lift"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover-lift card-3d border-gradient animate-fade-in-scale">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">{project.category}</Badge>
                      <span className="text-sm text-slate-500">{project.date}</span>
                    </div>
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                    {(project.client || project.budget) && (
                      <div className="flex justify-between text-sm text-slate-500">
                        {project.client && <span>{t('client')}: {project.client}</span>}
                        {project.budget && <span className="font-medium gradient-text">{project.budget}</span>}
                      </div>
                    )}
                    <Button variant="outline" size="sm" className="w-full border-gradient hover-lift">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        {t('viewProject')}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text animate-bounce-in">{t('servicesTitle')}</h2>
            <p className="text-xl text-slate-600">{t('servicesSubtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover-lift card-3d border-gradient animate-fade-in-scale">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-3d">
                    <service.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm text-slate-600">
                        <ChevronRight className="w-4 h-4 text-orange-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-6 gradient-bg hover-lift text-white">
                    <a href='https://www.upwork.com/freelancers/~01c8bbff0cbcfc2974?mp_source=share' target='_blank' rel="noopener noreferrer">{t('learnMore')}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-text animate-bounce-in">{t('contactTitle')}</h2>
          <p className="text-xl text-slate-600 mb-8">
            {t('contactSubtitle')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover-lift card-3d border-gradient animate-fade-in-scale">
              <CardContent className="p-0 text-center">
                <Mail className="w-8 h-8 text-orange-600 mx-auto mb-4 animate-pulse-3d" />
                <h3 className="font-semibold mb-2">{t('email')}</h3>
                <p className="text-slate-600"><a href="mailto:biniamed62@gmail.com">biniamed62@gmail.com</a></p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover-lift card-3d border-gradient animate-fade-in-scale">
              <CardContent className="p-0 text-center">
                <Phone className="w-8 h-8 text-orange-600 mx-auto mb-4 animate-pulse-3d" />
                <h3 className="font-semibold mb-2">{t('phone')}</h3>
                <p className="text-slate-600"><a href="tel:+212617459805">+212 617-459805</a></p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover-lift card-3d border-gradient animate-fade-in-scale">
              <CardContent className="p-0 text-center">
                <Globe className="w-8 h-8 text-orange-600 mx-auto mb-4 animate-pulse-3d" />
                <h3 className="font-semibold mb-2">{t('freelance')}</h3>
                <p className="text-slate-600"><a href="https://www.upwork.com/freelancers/~01c8bbff0cbcfc2974?mp_source=share" target="_blank" rel="noopener noreferrer">{t('upworkProfile')}</a></p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg hover-lift shadow-lg text-white font-semibold">
              <Mail className="w-4 h-4 mr-2" />
              {t('startProject')}
            </Button>
            <Button variant="outline" size="lg" className="border-gradient hover-lift">
              <Calendar className="w-4 h-4 mr-2" />
              {t('bookConsultation')}
            </Button>
          </div>
        </div>
      </section> */}

      <Contact t={t} />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Photo + Nom */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="/BiniAmed.png" // bini2-removebg-preview2.png
              alt="Bini Amed"
              className="w-28 h-28 rounded-full object-cover shadow-lg ring-4 ring-orange-400 mb-4 hover:scale-105 transition-transform duration-300"
            />
            <div className="text-2xl font-bold gradient-text animate-bounce-in">
              Bini Amed
            </div>
          </div>

          {/* Tagline */}
          <p className="text-slate-400 mb-6">
            {t('footerTagline')}
          </p>

          {/* Location */}
          <div className="flex justify-center items-center gap-2 text-slate-400">
            <MapPin className="w-4 h-4" />
            <span>{t('location')}</span>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-slate-800 text-slate-500">
            © 2025 Bini Amed. {t('allRightsReserved')}
            <p className="text-transparent">
              made with love by{" "}
              <a
                href="https://github.com/PatroDev/bini-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent"
              >
                @patrodev-2025 For bini-portfolio
              </a>
              {/* Texte ci-dessous caché visible en devTools */}
              <span
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                  clip: "rect(0 0 0 0)",
                  whiteSpace: "nowrap",
                }}
              >
                made with love by @patrodev-2025 For bini-portfolio
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}