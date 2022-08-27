import Project from './Project'
function Projects() {
    return (
        <div>
            <Project title="Tabibito" admin={true} />
            <Project title="Dumps" admin={false} />
            <Project title="AnimeStorage" admin={false} />
            <Project title="Wordle Clone" admin={true} />
        </div>
    )
}

export default Projects
