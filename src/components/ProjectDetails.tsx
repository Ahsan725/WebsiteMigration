"use client"

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ScrollArea } from "@/components/ui/scroll-area";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  year: string;
}

interface ProjectDetailsProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetails({
  project,
  isOpen,
  onClose,
}: ProjectDetailsProps) {
  const [showOutage, setShowOutage] = useState(false);
  const isDown = project.id === 3;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}>
      <DialogContent
        className="
          showcase-dialog-content
          max-w-4xl 
          p-0
          shadow-2xl
          sm:rounded-2xl
          ring-0 outline-none
          focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0
        ">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6 space-y-8">
            <DialogHeader className="p-0">
              <DialogTitle className="text-2xl showcase-gradient-text">
                {project.title}
              </DialogTitle>
            </DialogHeader>

            {/* Project Image */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="block w-full aspect-video object-cover"
              />
              <div className="absolute top-4 right-4 showcase-year-badge">
                <i className="bx bx-calendar inline mr-1" style={{ fontSize: '16px' }}></i>
                {project.year}
              </div>
            </div>

            {/* Project Info Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Overview */}
                <div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    Overview
                  </h3>
                  <p className="showcase-muted-text leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="showcase-stats-card">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>
                    Project Stats
                  </h4>
                  <div className="grid grid-cols-1 gap-4 text-sm">
                    <div>
                      <div className="showcase-muted-text">Year</div>
                      <div className="font-medium" style={{ color: 'var(--primary-color)' }}>
                        {project.year}
                      </div>
                    </div>
                    <div>
                      <div className="showcase-muted-text">Type</div>
                      <div className="font-medium" style={{ color: 'var(--primary-color)' }}>
                        {project.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={tech}
                        className="showcase-tech-badge showcase-stagger-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>
                    Key Features
                  </h3>
                  <div className="space-y-2">
                    {project.features.map((feature, index) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 showcase-stagger-fade-in"
                        style={{ animationDelay: `${index * 0.3}s` }}>
                        <i className="bx bx-check-circle flex-shrink-0" style={{ color: 'var(--secondary-color)', fontSize: '20px' }}></i>
                        <span className="showcase-muted-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4" style={{ borderTop: '1px solid var(--primary-shadow-color)' }}>
              {isDown ? (
                <button
                  className="flex-1 showcase-btn-primary"
                  onClick={() => setShowOutage(true)}>
                  <i className="bx bx-link-external" style={{ fontSize: '20px', marginRight: '8px' }}></i>
                  Launch Project
                </button>
              ) : (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 showcase-btn-primary">
                  <i className="bx bx-link-external" style={{ fontSize: '20px', marginRight: '8px' }}></i>
                  Launch Project
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 showcase-btn-outline">
                <i className="bx bxl-github" style={{ fontSize: '20px', marginRight: '8px' }}></i>
                View Code
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>

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
              className="flex-1 showcase-btn-outline">
              <i className="bx bxl-github" style={{ fontSize: '16px', marginRight: '8px' }}></i>
              View Code
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}
