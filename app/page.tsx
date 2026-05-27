"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe2, Layers, Workflow, GraduationCap, Mail, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// DEPLOYMENT GUIDE
// ================================
// This is a React + Tailwind component intended for a Next.js project.
//
// Recommended setup:
// 1. Install Node.js: https://nodejs.org
// 2. Create a GitHub repository
// 3. Create a Next.js app:
//    npx create-next-app@latest geoai-studio
//
// During setup:
// - Use TypeScript? -> No
// - Use Tailwind CSS? -> Yes
// - Use src directory? -> Yes
// - Use App Router? -> Yes
// - Use import alias? -> Yes
//
// 4. Open project:
//    cd geoai-studio
//
// 5. Install dependencies:
//    npm install framer-motion lucide-react
//
// 6. Install shadcn/ui:
//    npx shadcn@latest init
//
// 7. Add components:
//    npx shadcn@latest add card button
//
// 8. Replace contents of:
//    src/app/page.js
// with this file.
//
// 9. Run locally:
//    npm run dev
//
// 10. Push to GitHub:
//     git init
//     git add .
//     git commit -m "Initial website"
//     git branch -M main
//     git remote add origin YOUR_GITHUB_REPO_URL
//     git push -u origin main
//
// 11. Deploy using Vercel:
//     - Create account at https://vercel.com
//     - Import GitHub repository
//     - Click Deploy
//     - Connect your domain
//
// Suggested next edits:
// - Replace generic text with your actual bio
// - Add your email/contact form
// - Add LinkedIn link
// - Add 1–2 case studies
// - Add professional headshot if desired
// ================================

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
              Independent GeoAI Studio
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Turning advanced geospatial AI research into robust operational workflows.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              I help research teams, environmental organisations, and Earth observation companies design, validate, and operationalise scientifically sound GeoAI and spatial machine learning workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-2xl px-6 py-6 text-base bg-white text-slate-950 hover:bg-slate-200">
                Discuss a project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-2xl px-6 py-6 text-base border-slate-500 text-white hover:bg-slate-800">
                View services
              </Button>
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
                "Research prototype",
                "Geospatial data workflow",
                "Spatial validation & benchmarking",
                "Operational GeoAI system",
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

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">What the studio does</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Many GeoAI initiatives fail not because the models are weak, but because the workflow is not scientifically robust, reproducible, or ready for operational use. The studio focuses on the difficult transition from promising research to reliable practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              icon={<Workflow />}
              title="Research-to-Workflow Translation"
              text="Convert academic methods, notebooks, and prototypes into structured, reusable, and deployable geospatial ML workflows."
            />
            <ServiceCard
              icon={<ShieldCheck />}
              title="Spatial ML Validation"
              text="Audit model evaluation strategies, identify leakage, design spatial cross-validation, and build defensible benchmarks."
            />
            <ServiceCard
              icon={<Globe2 />}
              title="Earth Observation AI"
              text="Design ML pipelines for satellite, hyperspectral, environmental, ecological, and spatio-temporal datasets."
            />
            <ServiceCard
              icon={<GraduationCap />}
              title="Expert Training"
              text="Deliver high-end workshops and technical training on GeoAI, spatial ML, validation, and operational Earth observation workflows."
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">Who this is for</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The studio is designed for organisations that already work with geospatial data, Earth observation, environmental models, or scientific AI prototypes — but need deeper methodological confidence and operational structure.
            </p>
            <ul className="space-y-3 text-slate-700">
              {[
                "Research institutes moving methods beyond publications",
                "Earth observation and climate-tech companies",
                "Environmental and biodiversity organisations",
                "Consultancies needing robust spatial ML workflows",
                "Academic-industry consortia developing applied GeoAI systems",
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
              <h3 className="text-2xl font-semibold mb-4">Typical engagement</h3>
              <div className="space-y-5 text-slate-700">
                <EngagementStep number="01" title="Technical diagnosis" text="Review data, modelling assumptions, validation strategy, and operational constraints." />
                <EngagementStep number="02" title="Workflow redesign" text="Translate the method into a robust, reproducible, and scientifically defensible process." />
                <EngagementStep number="03" title="Implementation support" text="Support prototype development, benchmarking, documentation, and knowledge transfer." />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
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
              <div key={item} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">Interested in making a GeoAI workflow more robust?</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            I am available for selected advisory, workflow review, research translation, and training engagements.
          </p>
          <Button className="rounded-2xl px-7 py-6 text-base bg-white text-slate-950 hover:bg-slate-200">
            <Mail className="mr-2 h-4 w-4" /> Contact me
          </Button>
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