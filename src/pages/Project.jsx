import { useParams } from 'react-router-dom'
import text from '../assets/json/text.json'

export default function Project() {
    const { id } = useParams()
    const globalJson = Object.values(text.projects.project)

    const selectedProject = globalJson.find(
        (project) => project.id === parseInt(id)
    )

    return (
        <div className="project-container">
            <div className="project-title">{selectedProject.title}</div>
            <div className="project-technologies">
                {selectedProject.technologies}
            </div>
            <div className="project-description">
                {selectedProject.description}
            </div>
            <div className="project-img">
                <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
        </div>
    )
}
