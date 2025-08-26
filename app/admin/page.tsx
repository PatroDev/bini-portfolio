'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  ArrowLeft, 
  FolderOpen,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  client?: string;
  budget?: string;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'certification';
}

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'Extension de Maison : De 6 à 10 Chambres',
      description: 'Rénovation complète et extension d\'une résidence familiale avec optimisation de l\'espace et design moderne.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Architecture Résidentielle',
      date: '2025',
      client: 'Famille Martinez',
      budget: '$50,000'
    },
    {
      id: '2',
      title: 'Laboratoire Informatique Moderne',
      description: 'Refonte complète d\'un laboratoire informatique avec modélisation 3D détaillée et rendus photoréalistes.',
      image: 'https://images.pexels.com/photos/159211/books-bookstore-book-reading-159211.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design d\'Intérieur',
      date: '2025',
      budget: '$140,000'
    }
  ]);

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      title: 'Designer Graphique',
      company: 'Deal Design',
      period: 'Juin 2024 - Présent',
      description: 'Création d\'identités visuelles, logos, illustrations et supports de communication print et digital.',
      type: 'work'
    },
    {
      id: '2',
      title: 'Architecture',
      company: 'École Nationale d\'Architecture de Rabat',
      period: '2024-2027 (prévu)',
      description: 'Formation approfondie en architecture, design urbain et construction durable.',
      type: 'education'
    }
  ]);

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const [isExperienceDialogOpen, setIsExperienceDialogOpen] = useState(false);

  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    image: '',
    category: '',
    date: '',
    client: '',
    budget: ''
  });

  const [newExperience, setNewExperience] = useState<Omit<Experience, 'id'>>({
    title: '',
    company: '',
    period: '',
    description: '',
    type: 'work'
  });

  const categories = ['Architecture Résidentielle', 'Design d\'Intérieur', 'Architecture Paysagère', 'Design Graphique'];

  const handleAddProject = () => {
    const project: Project = {
      ...newProject,
      id: Date.now().toString()
    };
    setProjects([...projects, project]);
    setNewProject({
      title: '',
      description: '',
      image: '',
      category: '',
      date: '',
      client: '',
      budget: ''
    });
    setIsProjectDialogOpen(false);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
  };

  const handleUpdateProject = () => {
    if (!editingProject) return;
    setProjects(projects.map(p => p.id === editingProject.id ? editingProject : p));
    setEditingProject(null);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleAddExperience = () => {
    const experience: Experience = {
      ...newExperience,
      id: Date.now().toString()
    };
    setExperiences([...experiences, experience]);
    setNewExperience({
      title: '',
      company: '',
      period: '',
      description: '',
      type: 'work'
    });
    setIsExperienceDialogOpen(false);
  };

  const handleEditExperience = (experience: Experience) => {
    setEditingExperience(experience);
  };

  const handleUpdateExperience = () => {
    if (!editingExperience) return;
    setExperiences(experiences.map(e => e.id === editingExperience.id ? editingExperience : e));
    setEditingExperience(null);
  };

  const handleDeleteExperience = (id: string) => {
    setExperiences(experiences.filter(e => e.id !== id));
  };

  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'work': return Briefcase;
      case 'education': return GraduationCap;
      case 'certification': return Award;
      default: return Briefcase;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au Site
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Administration Portfolio</h1>
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Bini Ahmed
          </Badge>
        </div>
      </header> 

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Total Projets</p>
                  <p className="text-2xl font-bold text-blue-700">{projects.length}</p>
                </div>
                <FolderOpen className="w-8 h-8 text-slate-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Expériences</p>
                  <p className="text-2xl font-bold text-blue-700">{experiences.length}</p>
                </div>
                <Briefcase className="w-8 h-8 text-slate-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Dernière Mise à Jour</p>
                  <p className="text-sm text-slate-600">{new Date().toLocaleDateString('fr-FR')}</p>
                </div>
                <Edit className="w-8 h-8 text-slate-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Projects Management */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FolderOpen className="w-5 h-5" />
                  Gestion des Projets
                </CardTitle>
                <Dialog open={isProjectDialogOpen} onOpenChange={setIsProjectDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Nouveau Projet
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Ajouter un Nouveau Projet</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="title">Titre</Label>
                          <Input
                            id="title"
                            value={newProject.title}
                            onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                            placeholder="Nom du projet"
                          />
                        </div>
                        <div>
                          <Label htmlFor="category">Catégorie</Label>
                          <Select value={newProject.category} onValueChange={(value) => setNewProject({...newProject, category: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner une catégorie" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((cat) => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="date">Date</Label>
                          <Input
                            id="date"
                            value={newProject.date}
                            onChange={(e) => setNewProject({...newProject, date: e.target.value})}
                            placeholder="2025"
                          />
                        </div>
                        <div>
                          <Label htmlFor="client">Client (optionnel)</Label>
                          <Input
                            id="client"
                            value={newProject.client}
                            onChange={(e) => setNewProject({...newProject, client: e.target.value})}
                            placeholder="Nom du client"
                          />
                        </div>
                        <div>
                          <Label htmlFor="budget">Budget (optionnel)</Label>
                          <Input
                            id="budget"
                            value={newProject.budget}
                            onChange={(e) => setNewProject({...newProject, budget: e.target.value})}
                            placeholder="$50,000"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="image">URL Image</Label>
                        <Input
                          id="image"
                          value={newProject.image}
                          onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                          placeholder="https://images.pexels.com/..."
                        />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={newProject.description}
                          onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                          placeholder="Description détaillée du projet"
                          rows={3}
                        />
                      </div>
                      <Button onClick={handleAddProject} className="w-full">
                        <Save className="w-4 h-4 mr-2" />
                        Ajouter le Projet
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {projects.map((project) => (
                  <div key={project.id} className="border border-slate-200 rounded-lg p-4">
                    {editingProject?.id === project.id ? (
                      <div className="space-y-3">
                        <Input
                          value={editingProject.title}
                          onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                          placeholder="Titre"
                        />
                        <Textarea
                          value={editingProject.description}
                          onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                          placeholder="Description"
                          rows={2}
                        />
                        <div className="flex gap-2">
                          <Button size="sm" onClick={handleUpdateProject}>
                            <Save className="w-4 h-4 mr-1" />
                            Sauvegarder
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => setEditingProject(null)}>
                            <X className="w-4 h-4 mr-1" />
                            Annuler
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{project.title}</h4>
                            <p className="text-xs text-slate-600 mt-1">{project.description}</p>
                          </div>
                          <div className="flex gap-1 ml-2">
                            <Button size="sm" variant="outline" onClick={() => handleEditProject(project)}>
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDeleteProject(project.id)}>
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                          <span className="text-xs text-slate-500">{project.date}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experiences Management */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Gestion des Expériences
                </CardTitle>
                <Dialog open={isExperienceDialogOpen} onOpenChange={setIsExperienceDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Nouvelle Expérience
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Ajouter une Nouvelle Expérience</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="exp-title">Titre</Label>
                          <Input
                            id="exp-title"
                            value={newExperience.title}
                            onChange={(e) => setNewExperience({...newExperience, title: e.target.value})}
                            placeholder="Poste ou formation"
                          />
                        </div>
                        <div>
                          <Label htmlFor="exp-type">Type</Label>
                          <Select value={newExperience.type} onValueChange={(value: 'work' | 'education' | 'certification') => setNewExperience({...newExperience, type: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Type d'expérience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="work">Expérience professionnelle</SelectItem>
                              <SelectItem value="education">Formation</SelectItem>
                              <SelectItem value="certification">Certification</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="exp-company">Entreprise/École</Label>
                          <Input
                            id="exp-company"
                            value={newExperience.company}
                            onChange={(e) => setNewExperience({...newExperience, company: e.target.value})}
                            placeholder="Nom de l'organisation"
                          />
                        </div>
                        <div>
                          <Label htmlFor="exp-period">Période</Label>
                          <Input
                            id="exp-period"
                            value={newExperience.period}
                            onChange={(e) => setNewExperience({...newExperience, period: e.target.value})}
                            placeholder="Jan 2024 - Présent"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="exp-description">Description</Label>
                        <Textarea
                          id="exp-description"
                          value={newExperience.description}
                          onChange={(e) => setNewExperience({...newExperience, description: e.target.value})}
                          placeholder="Description des responsabilités et réalisations"
                          rows={3}
                        />
                      </div>
                      <Button onClick={handleAddExperience} className="w-full">
                        <Save className="w-4 h-4 mr-2" />
                        Ajouter l'Expérience
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {experiences.map((experience) => {
                  const IconComponent = getExperienceIcon(experience.type);
                  return (
                    <div key={experience.id} className="border border-slate-200 rounded-lg p-4">
                      {editingExperience?.id === experience.id ? (
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2">
                            <Input
                              value={editingExperience.title}
                              onChange={(e) => setEditingExperience({...editingExperience, title: e.target.value})}
                              placeholder="Titre"
                            />
                            <Input
                              value={editingExperience.company}
                              onChange={(e) => setEditingExperience({...editingExperience, company: e.target.value})}
                              placeholder="Entreprise"
                            />
                          </div>
                          <Input
                            value={editingExperience.period}
                            onChange={(e) => setEditingExperience({...editingExperience, period: e.target.value})}
                            placeholder="Période"
                          />
                          <Textarea
                            value={editingExperience.description}
                            onChange={(e) => setEditingExperience({...editingExperience, description: e.target.value})}
                            placeholder="Description"
                            rows={2}
                          />
                          <div className="flex gap-2">
                            <Button size="sm" onClick={handleUpdateExperience}>
                              <Save className="w-4 h-4 mr-1" />
                              Sauvegarder
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setEditingExperience(null)}>
                              <X className="w-4 h-4 mr-1" />
                              Annuler
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-start gap-3 flex-1">
                              <IconComponent className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                              <div className="flex-1">
                                <h4 className="font-semibold text-sm">{experience.title}</h4>
                                <p className="text-xs text-blue-700">{experience.company}</p>
                                <p className="text-xs text-slate-600 mt-1">{experience.description}</p>
                              </div>
                            </div>
                            <div className="flex gap-1 ml-2">
                              <Button size="sm" variant="outline" onClick={() => handleEditExperience(experience)}>
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleDeleteExperience(experience.id)}>
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="text-xs">
                              {experience.type === 'work' ? 'Travail' : experience.type === 'education' ? 'Formation' : 'Certification'}
                            </Badge>
                            <span className="text-xs text-slate-500">{experience.period}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">💡 Conseils pour optimiser votre portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-700">Images de Qualité</h4>
                <p className="text-slate-600">
                  Utilisez des images haute résolution de vos projets. Les rendus 3D doivent être nets et bien éclairés.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-700">Descriptions Détaillées</h4>
                <p className="text-slate-600">
                  Décrivez clairement vos projets, les défis relevés et les solutions apportées.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-700">Mise à Jour Régulière</h4>
                <p className="text-slate-600">
                  Ajoutez régulièrement vos nouveaux projets pour maintenir un portfolio dynamique.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}