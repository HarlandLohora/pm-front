import axios from 'axios'
import { useState, useEffect } from 'react'
import Cards from '../components/Card'


const AllProjectsPage = () => {
    const [projectos, setProjectos] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5005/api/projects")
            .then(misdatos => {
                setProjectos(misdatos.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>AllProjectsPage
            {projectos.map(project => <Cards key={project._id} projectito={project} />)}
        </div>
    )
}

export default AllProjectsPage