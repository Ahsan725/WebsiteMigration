"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Play, Info } from "lucide-react"
import { ProjectDetails } from "./ProjectDetails"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "PrepSpective",
    subtitle: "All-in-One Interview Preparation and Testing Platform",
    description:
      "PrepSpective is the complete AI-powered interview prep platform. Its SkillScan engine gives you a holistic score across all data structures and algorithms, while also pinpointing exactly where you are weak. The built-in AI Interview Lab supports SWE, Data Analytics, Product Management, and Behavioral interviews, delivering specific feedback and clear growth plans. With curated LeetCode prep lists, progress tracking, spaced repetition, and in-app solutions, you can practice, review, and improve all without ever switching tabs.",
    image: "/project-1.jpg",
    technologies: ["Next.js", "Node.js", "TypeScript", "SQL", "AI", "Vercel", "CI/CD", "LLM", "SaaS", "Responsive Design"],
    githubUrl: "https://github.com/ahsan725",
    liveUrl: "https://www.prepspective.com",
    features: [
      "Skill Scan With Holistic Score",
      "Data Structures Weakness Heatmap",
      "AI Interview Coach",
      "Actionable hyper-specific Feedback",
      "LeetCode Prep Lists",
      "Progress Tracking Dashboard",
      "Spaced Repetition Practice",
      "Solutions and Explanations",
      "Interview Readiness Score",
      "One Click Review Notes",
    ],
    year: "2024",
  },
  {
    id: 2,
    title: "Ledger",
    subtitle: "Financial Calculator, Net Worth Tracker and Data Visualizer",
    description:
      "Ledger helps you visualize money with beautiful, interactive charts. It includes a comprehensive compound interest calculator, net worth goal planner, car and home affordability tools, a retirement nest egg estimator, and a playful \u201cgirl math\u201d calculator. Enter balances manually to aggregate accounts, track net worth, and view asset allocation so you can rebalance and derisk. Milestones badges like $100k and $350k keep you motivated.",
    image: "/project-2.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "UI/UX Design",
      "Data Visualization",
      "Interactivity",
      "Data analytics",
    ],
    githubUrl: "https://github.com/ahsan725",
    liveUrl: "https://ledger-opal.vercel.app/",
    features: [
      "Compound interest calculator",
      "Net worth goal planner",
      "Car and home affordability",
      "Retirement nest egg estimator",
      "\u201cGirl math\u201d calculator",
      "Manual account aggregation",
      "Asset allocation visualization",
      "Milestones Badges (100k, 350k, etc.)",
      "Interactive charts",
      "Progress tracking",
      "Premium UI/UX Design",
    ],
    year: "2025",
  },
  {
    id: 3,
    title: "Speak-Easy",
    subtitle: "Voice-first journaling, tasks, productivity and mindfulness",
    description:
      "Speak-Easy is a mobile-first web app that lets you capture thoughts, to dos, and reflections with your voice. Dictate a journal entry or a task, get instant transcription you can edit, then organize everything. Daily prompts and mood check ins build a consistent mindfulness habit. Uses AI to enhance productivity, mindfulness, and self-awareness. Voice-first design makes it easy to use on the go and build the habit of reflection, and mindfulness.",
    image: "/project-3.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Responsive Design",
      "AI",
      "Voice-to-text",
    ],
    githubUrl: "https://github.com/ahsan725",
    liveUrl: "https://speak-easy-diary.vercel.app/",
    features: [
      "Voice to text journaling",
      "Quick voice tasks with due dates and priorities",
      "Smart lists for Today and Upcoming",
      "Calendar and timeline views",
      "Tags and full text search",
      "Daily prompts and mood check ins",
      "Mobile first UI",
      "AI-powered productivity insights",
    ],
    year: "2025",
  },
]

// Paused project IDs
const pausedProjectIds: number[] = [3, 4]

export default function ProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [showOutage, setShowOutage] = useState(false)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentProject(index)
  }

  const project = projects[currentProject]
  const isDown = pausedProjectIds.includes(project.id)

  return (
    <div className="showcase-container">
      {/* Background Ambient Effect */}
      <div className="showcase-ambient">
        <div className="showcase-ambient-orb showcase-ambient-orb-1" />
        <div className="showcase-ambient-orb showcase-ambient-orb-2" />
      </div>

      {/* Back to Home Link */}
      <div className="showcase-back-nav">
        <Link href="/" className="showcase-back-link">
          <i className="bx bx-left-arrow-alt"></i>&nbsp;Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="showcase-content">
        <div className="showcase-grid">
          {/* Project Image Section */}
          <div className="showcase-image-section">
            <div className="showcase-image-wrapper showcase-glow-border">
              {/* Project Screenshot */}
              <div className="showcase-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="showcase-image"
                />

                {/* Overlay with Actions */}
                <div className="showcase-image-overlay">
                  <div className="showcase-overlay-actions">
                    {isDown ? (
                      <button
                        className="showcase-btn-primary showcase-glow-on-hover flex-1"
                        onClick={() => setShowOutage(true)}
                      >
                        <Play className="mr-2 h-5 w-5" style={{ display: 'inline' }} />
                        View Live
                      </button>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="showcase-btn-primary showcase-glow-on-hover flex-1"
                      >
                        <Play className="mr-2 h-5 w-5" style={{ display: 'inline' }} />
                        View Live
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="showcase-btn-outline showcase-glow-on-hover flex-1"
                    >
                      <i className="bx bxl-github" style={{ fontSize: '20px', marginRight: '8px' }}></i>
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Year Badge */}
              <div className="showcase-year-badge">
                {project.year}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="showcase-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`showcase-dot ${index === currentProject ? 'showcase-dot-active' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Project Information Section */}
          <div className="showcase-info">
            {/* Header */}
            <div className="showcase-info-header">
              <div className="showcase-project-counter">
                Project {String(currentProject + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </div>

              <div className="showcase-title-group">
                <h1 className="showcase-title showcase-gradient-text">{project.title}</h1>
                <h2 className="showcase-subtitle">{project.subtitle}</h2>
              </div>
            </div>

            {/* Technologies */}
            <div className="showcase-tech-section">
              <h3 className="showcase-section-label">Technologies</h3>
              <div className="showcase-tech-list">
                {project.technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="showcase-tech-badge showcase-stagger-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="showcase-actions">
              {isDown ? (
                <button
                  className="showcase-btn-primary showcase-glow-on-hover"
                  onClick={() => setShowOutage(true)}
                >
                  <ExternalLink className="mr-2 h-5 w-5" style={{ display: 'inline' }} />
                  Launch Project
                </button>
              ) : (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-btn-primary showcase-glow-on-hover"
                >
                  <ExternalLink className="mr-2 h-5 w-5" style={{ display: 'inline' }} />
                  Launch Project
                </a>
              )}

              <button
                className="showcase-btn-outline showcase-glow-on-hover"
                onClick={() => setIsDetailsOpen(true)}
              >
                <Info className="mr-2 h-5 w-5" style={{ display: 'inline' }} />
                More Details
              </button>
            </div>

            {/* Navigation Controls */}
            <div className="showcase-nav-controls">
              <button
                onClick={prevProject}
                className="showcase-nav-btn showcase-glow-on-hover"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="showcase-nav-label">
                Navigate projects
              </div>

              <button
                onClick={nextProject}
                className="showcase-nav-btn showcase-glow-on-hover"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetails project={project} isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} />

      {/* Outage Modal */}
      <Dialog open={showOutage} onOpenChange={setShowOutage}>
        <DialogContent className="sm:max-w-md showcase-dialog-content">
          <DialogHeader>
            <DialogTitle>Temporarily unavailable</DialogTitle>
          </DialogHeader>
          <p className="text-sm showcase-muted-text">
            {project.title} is unavailable right now due to deployment issues with
            the provider. Please check back soon.
          </p>
          <div className="flex gap-3 pt-2">
            <button className="flex-1 showcase-btn-primary" onClick={() => setShowOutage(false)}>
              OK
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 showcase-btn-outline"
            >
              <i className="bx bxl-github" style={{ fontSize: '16px', marginRight: '8px' }}></i>
              View Code
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
