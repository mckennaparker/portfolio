import '../styles/ProjectCard.css'

const ProjectCard = (props: {key: number, title: string, image: string, description: string, link: string}) => {
    return (
        <div className="project-card">
            <h3 className="project-title">{props.title}</h3>
            <img src={props.image} alt={props.title} className="project-image" />
            <p className="project-description">{props.description}</p>
            <a href={props.link} target="_self" rel="noopener noreferrer" className="project-btn">
                View Project
            </a>
        </div>
    );
}

export default ProjectCard;