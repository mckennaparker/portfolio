import ProjectSite from '../../components/ProjectSite.tsx';
import { projects } from '../../data/projects.ts';

const ParticleSystemFireworks = () => {
    const project = projects.find(p => p.id === 3); // ID 3 is the Particle System Fireworks project
    
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <ProjectSite
                key={project.id}
                title={project.title}
                image={project.imageUrl}
                description={project.description}
            />
        </div>
    );
}

export default ParticleSystemFireworks;