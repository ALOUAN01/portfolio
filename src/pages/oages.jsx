      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              id="overview"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-700"
            >
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                <div className="w-2 h-12 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                À propos du projet
              </h2>
              <p className="text-gray-300 text-lg leading-8">{project.longDescription}</p>
            </motion.div>

            <motion.div
              id="features"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-700"
            >
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                <div className="w-2 h-12 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                Fonctionnalités clés
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.highlights.map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-5 bg-slate-700/40 rounded-2xl hover:bg-slate-700/60 transition-all"
                  >
                    <CheckCircle2 className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                    <span className="text-gray-200 leading-relaxed">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <motion.div
              id="tech"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 sticky top-24"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cyan-400">
                <Code2 size={28} />
                Technologies
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                    <Tag size={16} />
                    Catégorie
                  </p>
                  <p className="font-semibold text-lg">{project.category}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-4">Stack technique</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl text-sm font-medium hover:scale-105 transition-transform"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-700 space-y-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={20} />
                      Voir sur GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      Site en ligne
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 my-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-16 border border-cyan-500/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(6,182,212,0.05) 35px, rgba(6,182,212,0.05) 70px)`,
            }}></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Intéressé pour travailler ensemble ?
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Je suis ouvert à discuter de nouveaux projets, idées créatives ou opportunités.
            </p>
            <button
              onClick={() => navigate("/#contact")}
              className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/40 transform hover:scale-105 transition-all inline-flex items-center gap-3"
            >
              Me contacter
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </motion.div>
      </section>