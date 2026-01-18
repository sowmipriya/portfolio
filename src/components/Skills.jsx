import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Artificial Intelligence & LLM',
      icon: '🤖',
      gradient: 'from-[#73C7C7]',
      bgGradient: 'bg-white',
      borderColor: 'border-[#73C7C7]',
      skills: [
        'Large Language Models (LLM)',
        'RAG (Retrieval-Augmented Generation)',
        'Prompt Engineering',
        'Langchain',
        'Transformers',
        'NLP & Text Classification',
        'Neural Networks',
        'PyTorch',
      ],
    },
    {
      category: 'Machine Learning',
      icon: '🧠',
      gradient: 'from-[#A6F1E0]',
      bgGradient: 'bg-white',
      borderColor: 'border-[#A6F1E0]',
      skills: [
        'Classification & Regression',
        'Clustering',
        'Model Evaluation',
        'Feature Engineering',
        'Predictive Modeling',
      ],
    },
    {
      category: 'Programming Languages',
      icon: '💻',
      gradient: 'from-[#73C7C7]',
      bgGradient: 'bg-white',
      borderColor: 'border-[#73C7C7]',
      skills: ['Python', 'R', 'Scala', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Data Engineering',
      icon: '⚙️',
      gradient: 'from-[#A6F1E0]',
      bgGradient: 'bg-white',
      borderColor: 'border-[#A6F1E0]',
      skills: [
        'Data Pipelines',
        'Apache Spark',
        'Kafka',
        'RabbitMQ',
        'Apache Airflow',
        'DBT',
        'Data Scraping (Scrapy, Selenium, Beautiful Soup)',
      ],
    },
    {
      category: 'Databases',
      icon: '🗄️',
      gradient: 'from-[#73C7C7]',
      bgGradient: 'bg-white',
      borderColor: 'border-[#73C7C7]',
      skills: ['MySQL', 'BigQuery', 'PostgreSQL'],
    },
    {
      category: 'Data Visualization',
      icon: '📊',
      gradient: 'from-[#73C7C7]',
      bgGradient: 'bg-white',
      borderColor: 'border-[#73C7C7]',
      skills: [
        'Tableau',
        'Qlik Sense',
        'Matplotlib',
        'Apache Superset',
        'Looker',
        'Power BI',
      ],
    },
    {
      category: 'Cloud Platforms',
      icon: '☁️',
      gradient: 'from-[#A6F1E0]',
      bgGradient: 'bg-white',
      borderColor: 'border-[#A6F1E0]',
      skills: ['AWS', 'Databricks', 'Google Cloud', 'Azure'],
    },
    {
      category: 'Web Frameworks',
      icon: '🌐',
      gradient: 'from-[#73C7C7]',
      bgGradient: 'bg-white',
      borderColor: 'border-[#73C7C7]',
      skills: ['Django', 'Flask'],
    },
    {
      category: 'DevOps & Deployment',
      icon: '🚀',
      gradient: 'from-[#73C7C7]',
      bgGradient: 'bg-white',
      borderColor: 'border-[#73C7C7]',
      skills: ['GitLab CI/CD', 'Unit Testing', 'Integration Testing'],
    },
  ]

  return (
    <section id="skills" className="bg-[#F4F8D3] relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-16 bg-[#73C7C7] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                ⚡
              </div>
            </div>
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <div className="flex items-center justify-center gap-2 mt-6">
          <div className="h-1 w-12 bg-[#73C7C7] rounded-full"></div>
          <div className="h-1 w-8 bg-[#A6F1E0] rounded-full"></div>
          <div className="h-1 w-12 bg-[#F7CFD8] rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className={`card ${category.bgGradient} ${category.borderColor}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-lg" style={{ backgroundColor: category.gradient.includes('#73C7C7') ? '#73C7C7' : category.gradient.includes('#A6F1E0') ? '#A6F1E0' : '#F7CFD8' }}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-display font-bold" style={{ color: category.gradient.includes('#73C7C7') ? '#73C7C7' : category.gradient.includes('#A6F1E0') ? '#A6F1E0' : '#F7CFD8' }}>
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 text-sm flex items-start"
                  >
                    <span className="mr-2 mt-1 font-bold" style={{ color: category.gradient.includes('#73C7C7') ? '#73C7C7' : category.gradient.includes('#A6F1E0') ? '#A6F1E0' : '#F7CFD8' }}>▸</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 card bg-white border-[#A6F1E0]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#A6F1E0] flex items-center justify-center text-2xl shadow-lg">
              🌍
            </div>
            <h3 className="text-xl font-display font-bold text-[#73C7C7]">
              Languages
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#F7CFD8]/30 text-[#73C7C7] rounded-lg text-sm font-display font-semibold border border-[#F7CFD8]">
              🇫🇷 French - Intermediate (DELF B1)
            </span>
            <span className="px-4 py-2 bg-[#A6F1E0]/30 text-[#73C7C7] rounded-lg text-sm font-display font-semibold border border-[#A6F1E0]">
              🇬🇧 English - Fluent
            </span>
            <span className="px-4 py-2 bg-[#F7CFD8]/30 text-[#73C7C7] rounded-lg text-sm font-display font-semibold border border-[#F7CFD8]">
              🇮🇳 Tamil - Native
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

