import ProjectSite from '../../components/ProjectSite.tsx';
import { projects } from '../../data/projects.ts';

const BehavioralAnimation = () => {
    const project = projects.find(p => p.id === 1); // ID 1 is the Behavioral Animation project
    
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

export default BehavioralAnimation;