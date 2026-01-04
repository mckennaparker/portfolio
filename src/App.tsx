import { useState } from 'react'
import ProjectCard from './components/ProjectCard'
import './App.css'

function App() {
  const [sortedBy, setSortedBy] = useState('date')
  const [filteredBy, setFilteredBy] = useState('all')

  const sort = (parameter: string) => {
    console.log("Sort button clicked")
    console.log("Current sort:", sortedBy)
    sortedBy === parameter ? setSortedBy('date') : setSortedBy(parameter)
  }

  const filter = (parameter: string) => {
    console.log("Filter button clicked")
    console.log("Current filter:", filteredBy)
    filteredBy === parameter ? setFilteredBy('all') : setFilteredBy(parameter)
  }

  return (
    <div className="portfolio-page">
      <div className="portfolio-content">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="portfolio-ordering">
          <div className="portfolio-sorting">
          <p className="sort-label">Sort Projects:</p>
          <button className="sort-btn" onClick={() => sort('date')}>Date</button>
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
            <button className="filter-btn" onClick={() => filter('react')}>React</button>
            <button className="filter-btn" onClick={() => filter('touchdesigner')}>TouchDesigner</button>
            <button className="filter-btn" onClick={() => filter('unity')}>Unity</button>
            <button className="filter-btn" onClick={() => filter('unrealengine')}>Unreal Engine</button>
          </div>
        </div>
        <div className="projects-grid">
          {/* Example Project Cards */}
          <ProjectCard title="Project Title 1" description="Brief description of Project 1." link="#" />
          <ProjectCard title="Project Title 2" description="Brief description of Project 2." link="#" />
          <ProjectCard title="Project Title 3" description="Brief description of Project 3." link="#" />
        </div>
      </div>
    </div>
  )
}

export default App
