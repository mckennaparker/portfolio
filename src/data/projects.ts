export interface Project {
  id: number
  title: string
  description: string,
  thumbnail: string,
  imageUrl: string
  link: string
  tags: string[]
  date: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Behavioral Animation Simulation",
    description: "A simulation showcasing behavioral animation techniques coded in C++",
    thumbnail: "src/assets/projects/behavioralAnimationSquare.png",
    imageUrl: "src/assets/projects/behavioralAnimation.png",
    link: "/portfolio/behavioral-animation",
    tags: ["cpp"],
    date: "2025-12-05",
  },
  {
    id: 2,
    title: "Procedural Winter Village",
    description: "A procedurally generated winter village created using Blender geometry nodes",
    thumbnail: "src/assets/projects/winterVillageSquare.png",
    imageUrl: "src/assets/projects/winterVillage.png",
    link: "/portfolio/winter-village",
    tags: ["blender"],
    date: "2025-12-01"
  },
  {
    id: 3,
    title: "Particle System Fireworks",
    description: "A programmed particle system that simulates fireworks coded in C++",
    thumbnail: "src/assets/projects/particleSystemFireworksSquare.png",
    imageUrl: "src/assets/projects/particleSystemFireworks.png",
    link: "/portfolio/particle-system-fireworks",
    tags: ["cpp"],
    date: "2025-11-20"
  },
  {
    id: 4,
    title: "Keyframe Walk Cycle Animation",
    description: "A human walk cycle animation created using keyframing in Autodesk MotionBuilder",
    thumbnail: "src/assets/projects/walkCycleAnimation.png",
    imageUrl: "src/assets/projects/walkCycleAnimation.png",
    link: "/portfolio/walk-cycle-animation",
    tags: ["motionbuilder"],
    date: "2025-11-11"
  },
  {
    id: 5,
    title: "Procedural Building Generator",
    description: "A procedural building generator created using Houdini",
    thumbnail: "src/assets/projects/proceduralBuildingGeneratorSquare.png",
    imageUrl: "src/assets/projects/proceduralBuildingGenerator.png",
    link: "/portfolio/procedural-building-generator",
    tags: ["houdini"],
    date: "2025-11-03"
  }
]
