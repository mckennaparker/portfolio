import ProjectSite from '../../components/ProjectSite.tsx';
import { projects } from '../../data/projects.ts';

const WinterVillage = () => {
    const project = projects.find(p => p.id === 2); // ID 2 is the Winter Village project
    
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

export default WinterVillage;