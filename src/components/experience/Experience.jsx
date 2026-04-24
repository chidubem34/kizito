import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const frontendSkills = [
  { name: 'HTML', level: 'Expert', badge: 'expert' },
  { name: 'CSS', level: 'Intermediate', badge: 'mid' },
  { name: 'JavaScript', level: 'Intermediate', badge: 'mid' },
  { name: 'Bootstrap', level: 'Expert', badge: 'expert' },
  { name: 'Tailwind', level: 'Expert', badge: 'expert' },
  { name: 'React', level: 'Expert', badge: 'expert' },
]

const backendSkills = [
  { name: 'JavaScript', level: 'Intermediate', badge: 'mid' },
  { name: 'Node.js', level: 'Beginner', badge: 'beginner' },
  { name: 'Express.js', level: 'Beginner', badge: 'beginner' },
  { name: 'MongoDB', level: 'Beginner', badge: 'beginner' },
  { name: 'Postman', level: 'Beginner', badge: 'beginner' },
  { name: 'Git', level: 'Expert', badge: 'expert' },
]

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__panel reveal-left">
          <div className="experience__panel-header">
            <span className="experience__panel-icon">🎨</span>
            <h3>Frontend Development</h3>
          </div>
          <div className="experience__content">
            {frontendSkills.map(({ name, level, badge }) => (
              <article className="experience__details" key={name + '-fe'}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{name}</h4>
                  <span className={`skill-badge skill-badge--${badge}`}>{level}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__panel reveal-right">
          <div className="experience__panel-header">
            <span className="experience__panel-icon">⚙️</span>
            <h3>Backend Development</h3>
          </div>
          <div className="experience__content">
            {backendSkills.map(({ name, level, badge }) => (
              <article className="experience__details" key={name + '-be'}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{name}</h4>
                  <span className={`skill-badge skill-badge--${badge}`}>{level}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience