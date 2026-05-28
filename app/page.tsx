"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Globe2,
  Layers,
  Workflow,
  GraduationCap,
  Mail,
  ShieldCheck,
  Github,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactEmail = "info.geoaistudio@gmail.com";
const githubUrl = "https://github.com/geoaistudio";

export default function GeoAIStudioWebsite() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="px-6 py-20 md:px-12 lg:px-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-slate-300 mb-5">
              GeoAI Studio
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Exploring robust geospatial AI workflows for environmental and Earth observation applications.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
              An independent GeoAI initiative by <span className="text-white font-medium">Mahdi Khodadadzadeh</span>, focused on research-to-practice translation, spatial machine learning, Earth observation, and scientifically grounded geospatial workflows.
            </p>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
              The studio is an evolving professional space for methodology, technical exploration, selected collaborations, and knowledge exchange around operational GeoAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`mailto:${contactEmail}`}>
                <Button className="rounded-2xl px-6 py-6 text-base bg-white text-slate-950 hover:bg-slate-200">
                  Contact me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" className="rounded-2xl px-6 py-6 text-base border-slate-500 text-white hover:bg-slate-800">
                  About the studio
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white/10 backdrop-blur rounded-3xl p-6 shadow-2xl border border-white/10"
          >
            <div className="space-y-4">
              {[
                "Advanced geospatial AI methods",
                "Scientific and operational workflows",
                "Spatial validation and benchmarking",
                "Research-to-practice translation",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-4 bg-white/10 rounded-2xl p-4">
                  <div className="h-9 w-9 rounded-full bg-white text-slate-950 flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-slate-100">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">About</h2>
            <p className="text-slate-600 leading-relaxed">
              GeoAI Studio is an independent professional initiative owned and developed by Mahdi Khodadadzadeh.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>
              I am a researcher and educator working at the intersection of GeoAI, geospatial machine learning, Earth observation, and environmental data science.
            </p>
            <p>
              My background combines electrical engineering, signal and image processing, machine learning, hyperspectral remote sensing, and applied geospatial analytics. Over the years, I have worked on topics including hyperspectral mineral mapping, spatial machine learning, environmental modelling, Earth observation workflows, and AI applications for ecological and climate-related systems.
            </p>
            <p>
              This studio is a space to explore how advanced geospatial AI methods can move beyond prototypes toward more robust, reproducible, and operational workflows, while keeping scientific rigor, spatial validation, and domain awareness at the centre.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Focus areas</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The studio is currently evolving through research, technical exploration, selected collaborations, and knowledge-exchange activities around operational GeoAI and spatial machine learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              icon={<Workflow />}
              title="Research-to-Practice Translation"
              text="Exploring how academic methods, prototypes, and notebooks can become clearer, reusable, and more operational geospatial workflows."
            />
            <ServiceCard
              icon={<ShieldCheck />}
              title="Spatial ML Validation"
              text="Thinking critically about leakage, spatial cross-validation, benchmarking, uncertainty, and scientifically defensible model evaluation."
            />
            <ServiceCard
              icon={<Globe2 />}
              title="Earth Observation AI"
              text="Working across satellite, hyperspectral, environmental, ecological, and spatio-temporal datasets with attention to real-world constraints."
            />
            <ServiceCard
              icon={<GraduationCap />}
              title="Knowledge Exchange"
              text="Developing ideas for workshops, technical discussions, and learning material on GeoAI, spatial ML, and operational Earth observation workflows."
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">Why this space</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Many GeoAI initiatives sit between promising research and reliable practice. The challenge is often not only the model, but the full workflow: data assumptions, spatial bias, validation design, reproducibility, and operational context.
            </p>
            <ul className="space-y-3 text-slate-700">
              {[
                "Bridging advanced methods and practical geospatial workflows",
                "Making spatial ML evaluation more robust and transparent",
                "Connecting Earth observation, environmental data science, and operational thinking",
                "Exploring responsible and scientifically grounded uses of GeoAI",
                "Creating a professional home for future collaborations and technical exchange",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="rounded-3xl shadow-sm border-slate-200">
            <CardContent className="p-8">
              <Layers className="h-10 w-10 mb-5" />
              <h3 className="text-2xl font-semibold mb-4">Current orientation</h3>
              <div className="space-y-5 text-slate-700">
                <EngagementStep number="01" title="Explore" text="Clarify methodological questions, technical challenges, and possible directions for robust GeoAI workflows." />
                <EngagementStep number="02" title="Translate" text="Think through how research ideas, prototypes, and experimental pipelines can become more structured and reusable." />
                <EngagementStep number="03" title="Exchange" text="Build conversations, collaborations, and learning material around spatial ML, Earth observation, and environmental AI." />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-semibold mb-4">Core expertise</h2>
            <p className="text-slate-600 leading-relaxed">
              A combination of geospatial science, machine learning, signal processing, Earth observation, and applied environmental modelling.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {[
              "GeoAI and spatial machine learning",
              "Earth observation and remote sensing",
              "Hyperspectral data analysis",
              "Spatio-temporal modelling",
              "Spatial cross-validation and leakage control",
              "Environmental and ecological ML workflows",
              "Data fusion and feature engineering",
              "Scientific workflow reproducibility",
            ].map((item) => (
              <div key={item} className="bg-slate-50 rounded-2xl p-5 shadow-sm border border-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">Contact</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            For research discussions, collaborations, workshops, technical conversations, or general inquiries, please get in touch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href={`mailto:${contactEmail}`}>
              <Button className="rounded-2xl px-7 py-6 text-base bg-white text-slate-950 hover:bg-slate-200">
                <Mail className="mr-2 h-4 w-4" /> {contactEmail}
              </Button>
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <Button variant="outline" className="rounded-2xl px-7 py-6 text-base border-slate-500 text-white hover:bg-slate-800">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </a>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} GeoAI Studio — Independent initiative by Mahdi Khodadadzadeh
          </p>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <Card className="rounded-3xl shadow-sm border-slate-200 bg-white">
      <CardContent className="p-6">
        <div className="h-11 w-11 rounded-2xl bg-slate-100 flex items-center justify-center mb-5">
          {React.cloneElement(icon, { className: "h-5 w-5" })}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{text}</p>
      </CardContent>
    </Card>
  );
}

function EngagementStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="text-sm font-semibold text-slate-400 w-10 shrink-0">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
        <p className="text-slate-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
