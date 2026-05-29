"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe2, Layers, Workflow, GraduationCap, Mail, ShieldCheck } from "lucide-react";
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
              Robust GeoAI workflows for environmental and Earth observation applications
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
              An independent GeoAI initiative by{" "}
              <a
              href="#about"
              className="text-white font-medium underline underline-offset-4 hover:text-slate-200"
              >
                Mahdi Khodadadzadeh
                </a>
                , exploring spatial machine/deep learning, Earth observation, research-to-practice translation, and scientifically grounded geospatial workflows.
            </p>
            {/* <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
              The studio is an evolving professional space for methodology, technical exploration, selected collaborations, and knowledge exchange around operational GeoAI.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <a href={`mailto:${contactEmail}`}>
                <Button className="rounded-2xl px-6 py-6 text-base bg-white text-slate-950 hover:bg-slate-200">
                  Contact me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a> */}
              <a href="#about">
                <Button variant="outline" className="rounded-2xl px-6 py-6 text-base border-slate-500 text-slate-950 hover:bg-slate-800">
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
                "Geospatial data, tools, and benchmarking",
                "Scientifically grounded GeoAI workflows",
                "Research-to-practice translation",
                "Knowledge exchange and advanced training",
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
              <a
              href="https://linkedin.com/in/mahdikhodadadzadeh"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-slate-800"
            >
              Mahdi Khodadadzadeh
            </a> 
              {" "} is a researcher and educator working at the intersection of GeoAI, geospatial machine learning, Earth observation, and environmental data science.
            </p>
            <p>
              His background combines signal and image processing, machine learning, remote sensing, and applied geospatial analytics. Over the years, his work has spanned hyperspectral data analysis, spatial machine learning, environmental modelling, Earth observation workflows, and AI applications for mineral mapping, raw materials exploration, and ecological and climate-related systems.
            </p>
            <p>
               GeoAI Studio is an independent initiative exploring how advanced geospatial AI methods can evolve beyond prototypes toward more robust, reproducible, and operational systems. Many geospatial AI workflows still sit between promising research and reliable operational use; beyond model performance, important questions often emerge around data assumptions, spatial bias, validation design, reproducibility, and integration into real-world environmental and Earth observation contexts.
            </p>
            <p>
              The studio brings together interests in spatial machine learning, Earth observation, environmental systems, geospatial workflows, benchmarking, tooling, and research-to-practice translation. Its current focus includes technical exploration, interdisciplinary collaboration, and ongoing research and knowledge exchange around scientifically grounded and operational GeoAI.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Focus areas</h2>
            {/* <p className="text-lg text-slate-600 leading-relaxed">
              The studio is currently evolving through research, technical exploration, selected collaborations, and knowledge-exchange activities around operational GeoAI and spatial machine learning.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              icon={<Globe2 />}
              title="Geospatial Data & Tools"
              text="Developing curated benchmarking datasets, open-source tools, and reproducible workflow components aimed at streamlining machine/deep learning for geospatial applications."
            />
            <ServiceCard
              icon={<ShieldCheck />}
              title="Specialized GeoAI"
              text="Developing and exploring scientifically grounded, domain-aware, and operational geospatial machine/deep learning workflows and models."
            />
            <ServiceCard
              icon={<Workflow />}
              title="Research-to-Practice Translation"
              text="Exploring how academic methods, prototypes, and research workflows can evolve into more reproducible, reusable, and operational geospatial systems."
            />
            <ServiceCard
              icon={<GraduationCap />}
              title="Knowledge Exchange & Advanced Training"
              text="Developing advanced workshops, technical learning materials, and knowledge exchange activities around GeoAI, spatial machine learning, and operational geospatial workflows."
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            {/* <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-4">
              Selected Work
            </p> */}
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Portfolio
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Selected work connected to the studio&apos;s focus areas.
              {/* : geospatial data and
              tools, specialized GeoAI, research-to-practice translation, and knowledge
              exchange. */}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-3xl shadow-sm border-slate-200 bg-slate-50">
              <CardContent className="p-7">
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    "Geospatial Data & Tools",
                    "Plant Phenology",
                    "Reproducible Workflows",
                    "Model Comparison",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wide bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Reproducible Workflows for GeoAI
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Context</h4>
                    <p>
                      Many GeoAI applications depend on harmonizing heterogeneous data sources,
                      modelling approaches, and evaluation workflows. In this case, plant
                      phenological modelling provides the example, bringing together
                      observational networks, environmental datasets, process-based models,
                      and machine learning approaches within a reproducible workflow.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Core challenge
                    </h4>
                    <p>
                      The challenge is not only to improve prediction accuracy, but to
                      create consistent data preparation, modelling, and evaluation
                      workflows. Without shared workflow structures, comparisons between
                      modelling approaches remain difficult to reproduce and interpret.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Direction
                    </h4>
                    <p>
                      This case explores unified phenological modelling workflows that
                      integrate phenological observations, meteorological data, reusable
                      recipe-based data preparation, process-based models, and machine
                      learning formulations for classification and regression.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Why it matters
                    </h4>
                    <p>
                      Reproducible workflow components, curated datasets, and comparable
                      modelling pipelines help make phenological modelling more transparent,
                      reusable, and extensible across species, regions, environmental
                      variables, and Earth observation products.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm border-slate-200 bg-slate-50">
              <CardContent className="p-7">
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    "Specialized GeoAI",
                    "Spatial ML",
                    "Model Evaluation",
                    "Benchmarking",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wide bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Rethinking Model Evaluation in GeoAI
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Context</h4>
                    <p>
                      Geospatial AI models are often evaluated using conventional random
                      train-test splits or standard cross-validation procedures. In
                      spatially structured data, these strategies can produce overly
                      optimistic results because nearby observations may share similar
                      environmental, spectral, or contextual information.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Core challenge
                    </h4>
                    <p>
                      The central challenge is spatial leakage: models may appear to
                      generalize well while partly relying on spatial autocorrelation,
                      sampling design, or hidden similarity between training and test
                      locations. This makes validation design a domain-specific modelling
                      problem, not just a technical evaluation step.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Direction
                    </h4>
                    <p>
                      This case explores domain-aware validation strategies that better
                      reflect intended deployment contexts, including spatial clustering,
                      geographic-environmental blocking, and validation designs aligned 
                      with the target deployment task for specialized GeoAI workflows.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Why it matters
                    </h4>
                    <p>
                      Reliable spatial validation is essential for scientific credibility
                      and operational trust. Across geospatial applications, poor validation can lead to
                      misleading performance estimates, weak generalization, and
                      unreliable decisions when models are transferred to new areas,
                      time periods, or operational contexts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm border-slate-200 bg-slate-50">
              <CardContent className="p-7">
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    "Research-to-Practice",
                    "Hyperspectral Imaging",
                    "Mineral Mapping",
                    "Operational Geospatial Mapping",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wide bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Upscaling Local Knowledge for Operational Geospatial Mapping
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Context</h4>
                    <p>
                      Many geospatial mapping problems require transferring detailed local
                      reference knowledge to broader spatial coverage. In this case, the
                      local knowledge comes from high-resolution SEM-MLA mineralogical
                      analysis of selected drill-core regions, while drill-core hyperspectral
                      imaging provides a rapid, non-invasive way to extend mineralogical
                      mapping across larger parts of the core.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Core challenge
                    </h4>
                    <p>
                      The challenge is how to transfer detailed mineral abundance
                      information from limited laboratory-grade reference data to broader
                      hyperspectral imagery. Standard unmixing methods often depend on
                      representative pure spectral signatures, but drill-core pixels are
                      highly mixed and may not contain reliable pure endmembers.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Direction
                    </h4>
                    <p>
                      This case explores a supervised GeoAI strategy for transferring
                      local mineralogical reference knowledge into broader hyperspectral
                      mapping. SEM-MLA-derived mineral abundances are linked to
                      corresponding hyperspectral spectra, and the learned model is then
                      used within an operational workflow to estimate mineral abundances
                      across the full drill-core image.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Why it matters
                    </h4>
                    <p>
                      This approach illustrates research-to-practice translation in
                      geoscience: connecting high-resolution laboratory analysis with
                      operational hyperspectral workflows for scalable, quantitative, and
                      reproducible mineral mapping and raw materials exploration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm border-slate-200 bg-slate-50">
              <CardContent className="p-7">
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    "Knowledge Exchange",
                    "Advanced Training",
                    "Community Building",
                    "Research Agenda",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wide bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Community Building & Research Agenda Formation
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Context</h4>
                    <p>
                      Interdisciplinary GeoAI topics often require alignment across diverse data
                      sources, modelling traditions, scientific communities, and application
                      domains. In this case, plant phenological modelling provides the example,
                      spanning observational networks, environmental data, process-based models,
                      machine learning, remote sensing, ecology, climate science, and biodiversity
                      research.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Core challenge
                    </h4>
                    <p>
                      The challenge is not only technical model development, but creating
                      shared language, comparable workflows, benchmark frameworks, and
                      common research priorities across disciplines. Without this
                      alignment, methodological differences can limit comparison,
                      synthesis, and cumulative progress.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Direction
                    </h4>
                    <p>
                      This case reflects the organization of an interdisciplinary workshop
                      on FAIR phenological modelling, bringing together researchers from
                      different countries, disciplines, and modelling
                      traditions to establish common objectives and shape future research
                      directions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Why it matters
                    </h4>
                    <p>
                      Community building and research agenda formation can help emerging
                      GeoAI and environmental modelling fields move from fragmented
                      efforts toward shared benchmarks, reusable workflows, advanced
                      learning material, and stronger interdisciplinary collaboration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* <section className="px-6 py-16 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-4">
              Methodological Case Studies
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Selected Methodological Explorations
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Case-style reflections on GeoAI methodology, validation, reproducibility,
              data integration, and research-to-practice translation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <Card className="rounded-3xl shadow-sm border-slate-200 bg-slate-50">
              <CardContent className="p-7">
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    "Plant Phenology",
                    "Machine Learning",
                    "Model Comparison",
                    "Operational Workflows",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wide bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Plant Phenological Modelling
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Context</h4>
                    <p>
                      Plant phenology is central to understanding how vegetation responds to
                      climate variability and environmental change. However, phenological
                      modelling often involves heterogeneous data sources, different modelling
                      traditions, and fragmented workflows, making comparisons between
                      approaches difficult.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Core methodological challenge
                    </h4>
                    <p>
                      The challenge is not only predicting phenological events, but creating a
                      consistent workflow in which process-based models and machine learning
                      methods can be prepared, applied, and evaluated in a comparable way.
                      Without such harmonization, model comparison can be inconsistent and
                      difficult to reproduce.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Direction / approach
                    </h4>
                    <p>
                      This case explores a unified phenological modelling workflow using the
                      Springtime Python package. It integrates phenological observations,
                      meteorological data, process-based models, and machine learning
                      approaches, including classification and regression formulations for
                      predicting the day of year of leaf emergence.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Why it matters
                    </h4>
                    <p>
                      Harmonized workflows make phenological modelling more transparent,
                      reusable, and comparable. They support more reliable evaluation of
                      process-based and machine learning approaches and create a foundation
                      for extending models across species, regions, environmental variables,
                      and Earth observation products.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm border-slate-200 bg-slate-50">
              <CardContent className="p-7">
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    "Community Building",
                    "Research Agenda",
                    "Benchmarking",
                    "Knowledge Exchange",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wide bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Community Building & Research Agenda Formation
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Context</h4>
                    <p>
                      Plant phenological modelling brings together diverse data sources,
                      modelling traditions, scientific communities, and application domains.
                      The field includes observational networks, environmental data, process-based
                      models, machine learning methods, remote sensing, ecology, climate science,
                      and biodiversity research.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Core methodological challenge
                    </h4>
                    <p>
                      The challenge is not only to improve individual models, but to create
                      shared language, comparable workflows, benchmark frameworks, and common
                      research priorities across disciplines. Without this alignment, methodological
                      differences can limit comparison, synthesis, and cumulative progress.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Direction / approach
                    </h4>
                    <p>
                      This case reflects the organization of an interdisciplinary workshop on
                      FAIR phenological modelling, bringing together researchers from different
                      countries, disciplines, species groups, and modelling traditions. The work
                      focused on establishing common objectives, developing ideas for benchmark
                      frameworks, and shaping a shared research agenda for plant phenology.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Why it matters
                    </h4>
                    <p>
                      Community building and research agenda formation can help emerging GeoAI
                      and environmental modelling fields move from fragmented efforts toward
                      shared benchmarks, reusable workflows, and stronger interdisciplinary
                      collaboration. The same approach can be adapted to other domains where
                      data, models, and scientific practices need better alignment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm border-slate-200 bg-slate-50">
              <CardContent className="p-7">
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Spatial ML", "Validation", "Benchmarking"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wide bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Rethinking Spatial Validation in GeoAI
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Context</h4>
                    <p>
                      Geospatial AI models are often evaluated using conventional random
                      train-test splits or standard cross-validation procedures. In
                      spatially structured data, these strategies can produce overly
                      optimistic results because nearby observations may share similar
                      environmental, spectral, or contextual information.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Core methodological challenge
                    </h4>
                    <p>
                      The central challenge is spatial leakage: models may appear to
                      generalize well while partly relying on spatial autocorrelation,
                      sampling design, or hidden similarity between training and test
                      locations.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Direction / approach
                    </h4>
                    <p>
                      This case explores spatially aware validation strategies that
                      better reflect the intended deployment context, including spatial
                      clustering, geographic blocking, environmental stratification, and
                      task-specific benchmark design.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Why it matters
                    </h4>
                    <p>
                      Reliable spatial validation is essential for scientific credibility
                      and operational trust in environmental modelling, Earth observation,
                      mineral mapping, and ecological applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm border-slate-200 bg-slate-50">
              <CardContent className="p-7">
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    "Hyperspectral Imaging",
                    "Mineral Mapping",
                    "Dictionary Learning",
                    "Unmixing",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wide bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Upscaling Mineralogical Ground Truth
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Context</h4>
                    <p>
                      Drill-core hyperspectral imaging offers a rapid, non-invasive way
                      to estimate mineralogical information along core samples. However,
                      high-resolution mineralogical analyses such as SEM-MLA are usually
                      available only for small selected regions, while hyperspectral data
                      cover larger parts of the drill core.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Core methodological challenge
                    </h4>
                    <p>
                      The central challenge is how to transfer detailed mineral
                      abundance information from a limited SEM-MLA region to the broader
                      hyperspectral dataset. Standard hyperspectral unmixing often
                      depends on selecting representative pure spectral signatures, but
                      drill-core pixels are highly mixed and may not contain reliable
                      pure endmembers.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Direction / approach
                    </h4>
                    <p>
                      This case explores a supervised dictionary learning strategy that
                      links mineral abundances derived from high-resolution SEM-MLA
                      analysis to their corresponding hyperspectral spectra. The learned
                      dictionary is then used in a linear unmixing framework to estimate
                      mineral abundances across the full drill-core hyperspectral image.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Why it matters
                    </h4>
                    <p>
                      This approach helps bridge laboratory-grade mineralogical analysis
                      and operational hyperspectral drill-core workflows. It supports
                      quantitative mineral mapping, improves the use of limited
                      high-resolution reference data, and contributes to more scalable,
                      objective, and reproducible workflows for mineral mapping and raw
                      materials exploration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* <section className="px-6 py-16 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-4">
              Methodological Case Studies
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Selected Methodological Explorations
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Case-style reflections on GeoAI methodology, validation, reproducibility,
              and research-to-practice translation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-3xl shadow-sm border-slate-200 bg-slate-50">
              <CardContent className="p-7">
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Spatial ML", "Validation", "Benchmarking"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wide bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Rethinking Spatial Validation in GeoAI
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Context</h4>
                    <p>
                      Geospatial AI models are often evaluated using conventional random
                      train-test splits or standard cross-validation procedures. In
                      spatially structured data, these strategies can produce overly
                      optimistic results because nearby observations may share similar
                      environmental, spectral, or contextual information.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Core methodological challenge
                    </h4>
                    <p>
                      The central challenge is spatial leakage: models may appear to
                      generalize well while partly relying on spatial autocorrelation,
                      sampling design, or hidden similarity between training and test
                      locations.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Direction / approach
                    </h4>
                    <p>
                      This case explores spatially aware validation strategies that
                      better reflect the intended deployment context, including spatial
                      clustering, geographic blocking, environmental stratification, and
                      task-specific benchmark design.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Why it matters
                    </h4>
                    <p>
                      Reliable spatial validation is essential for scientific credibility
                      and operational trust in environmental modelling, Earth observation,
                      mineral mapping, and ecological applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm border-dashed border-slate-300 bg-white">
              <CardContent className="p-7 flex flex-col justify-center min-h-full">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
                  Upcoming
                </p>
                <h3 className="text-2xl font-semibold mb-4">
                  Additional methodological explorations
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Future case studies may cover domain-aware hyperspectral mineral
                  mapping, reproducible GeoAI benchmarking, and translating research
                  prototypes into operational geospatial workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">Why GeoAI Studio</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Many geospatial AI workflows still sit between promising research and reliable operational use. Beyond model performance, important questions often emerge around data assumptions, spatial bias, reproducibility, validation design, and integration into real-world environmental and Earth observation contexts.
            </p>
            <ul className="space-y-3 text-slate-700">
              {[
                "Bridging advanced methods and operational geospatial systems",
                "Exploring reproducible and scientifically grounded GeoAI workflows",
                "Developing tools, datasets, and workflow components for geospatial machine learning",
                "Connecting Earth observation, environmental data science, and spatial AI",
                "Creating space for technical exploration, collaboration, and knowledge exchange",
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
              <h3 className="text-2xl font-semibold mb-4">Current Directions</h3>
              <div className="space-y-5 text-slate-700">
                <EngagementStep number="01" title="Explore" text="Investigate methodological questions, technical challenges, and emerging directions for robust and scientifically grounded GeoAI." />
                <EngagementStep number="02" title="Develop" text="Develop curated datasets, reproducible workflow components, and domain-aware geospatial machine learning tools and systems." />
                <EngagementStep number="03" title="Translate" text="Explore how research ideas, experimental pipelines, and academic prototypes can evolve into more reproducible and reusable geospatial systems." />
                <EngagementStep number="04" title="Exchange" text="Develop knowledge exchange, collaborations, and advanced learning material around GeoAI." />
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Current Directions
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              GeoAI Studio is currently evolving through technical exploration, workflow development, research-to-practice translation, and knowledge exchange around scientifically grounded and operational GeoAI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Card className="rounded-3xl shadow-sm border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-slate-400 mb-4">01</div>
                <h3 className="text-xl font-semibold mb-3">Explore</h3>
                <p className="text-slate-600 leading-relaxed">
                  Investigate methodological questions, technical challenges, and emerging directions for robust and scientifically grounded GeoAI.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-slate-400 mb-4">02</div>
                <h3 className="text-xl font-semibold mb-3">Develop</h3>
                <p className="text-slate-600 leading-relaxed">
                  Develop curated datasets, reproducible workflow components, and domain-aware geospatial machine learning tools and systems.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-slate-400 mb-4">03</div>
                <h3 className="text-xl font-semibold mb-3">Translate</h3>
                <p className="text-slate-600 leading-relaxed">
                  Explore how research ideas, experimental pipelines, and academic prototypes can evolve into more reproducible and reusable geospatial systems.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-slate-400 mb-4">04</div>
                <h3 className="text-xl font-semibold mb-3">Exchange</h3>
                <p className="text-slate-600 leading-relaxed">
                  Develop knowledge exchange, collaborations, and advanced learning material around GeoAI, spatial machine learning, and operational geospatial workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-semibold mb-4">Core expertise</h2>
            <p className="text-slate-600 leading-relaxed">
              A combination of geospatial science, machine/deep learning, signal processing, Earth observation, and applied environmental modelling.
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
