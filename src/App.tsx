import { useState } from 'react'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'
import './App.css'

function App() {
  const [sortedBy, setSortedBy] = useState('dateNewest')
  const [filteredBy, setFilteredBy] = useState('all')

  // Filter projects based on selected filter
  const filteredProjects = filteredBy === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filteredBy))

  // Sort the filtered projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortedBy === 'name') {
      // Sort alphabetically by title
      return a.title.localeCompare(b.title)
    } else if (sortedBy === 'dateNewest') {
      // Default sort by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else {
      // Sort by date (oldest first)
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    }
  })

  const sort = (parameter: string) => {
    console.log("Sort button clicked")
    console.log("Current sort:", sortedBy)
    setSortedBy(parameter)
  }

  const filter = (parameter: string) => {
    console.log("Filter button clicked")
    console.log("Current filter:", filteredBy)
    setFilteredBy(parameter)
  }

  return (
    <div className="portfolio-page">
      <div className="portfolio-content">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="portfolio-ordering">
          <div className="portfolio-sorting">
          <p className="sort-label">Sort Projects:</p>
          <button className="sort-btn" onClick={() => sort('dateNewest')}>Newest</button>
          <button className="sort-btn" onClick={() => sort('dateOldest')}>Oldest</button>
          <button className="sort-btn" onClick={() => sort('name')}>Name</button>
          </div>
          <div className="portfolio-filtering">
            <p className="filter-label">Filter Projects:</p>
            <button className="filter-btn" onClick={() => filter('all')}>All</button>
            <button className="filter-btn" onClick={() => filter('blender')}>Blender</button>
            <button className="filter-btn" onClick={() => filter('csharp')}>C#</button>
            <button className="filter-btn" onClick={() => filter('cpp')}>C++</button>
            <button className="filter-btn" onClick={() => filter('houdini')}>Houdini</button>
            <button className="filter-btn" onClick={() => filter('maya')}>Maya</button>
            <button className="filter-btn" onClick={() => filter('motionbuilder')}>MotionBuilder</button>
            <button className="filter-btn" onClick={() => filter('touchdesigner')}>TouchDesigner</button>
            <button className="filter-btn" onClick={() => filter('unity')}>Unity</button>
            <button className="filter-btn" onClick={() => filter('unrealengine')}>Unreal Engine</button>
          </div>
        </div>
        <div className="projects-grid">
          {sortedProjects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              image={project.thumbnail} 
              description={project.description} 
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
