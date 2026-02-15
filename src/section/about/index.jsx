import { about } from '../../contents/About'
const About = () => {
    return(
        <div>
            <div className='text-primaryAccent font-medium'>{about.title}</div>
            <div className='text-primaryContent'>{about.description}</div>
        </div>
    )
}

export default About