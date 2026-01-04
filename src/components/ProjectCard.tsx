import '../styles/ProjectCard.css'

const ProjectCard = (props: {title: string, description: string, link: string}) => {
    return (
        <div className="project-card">
            <h3 className="project-title">{props.title}</h3>
            <p className="project-description">{props.description}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn">
                View Project
            </a>
        </div>
    );
}

export default ProjectCard;