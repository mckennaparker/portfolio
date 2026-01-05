import "../styles/ProjectSite.css";

const ProjectSite = (props: { key: number; title: string; image: string; description: string }) => {
    return (
        <div className="project-site">
            <h1 className="project-title">{props.title}</h1>
            <img src={props.image} alt={props.title} className="project-image" />
            <p className="project-description">{props.description}</p>
        </div>
    );
}

export default ProjectSite;