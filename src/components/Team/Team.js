import './Team.css';
import Footer from "../Footer";
import teamMember1 from '../../assets/home/melody.jpg'; 
import teamMember2 from '../../assets/home/profile.jpeg'; 
import teamMember3 from '../../assets/home/testimonial1.png'; 
import teamMember4 from '../../assets/home/testimonial2.png'; 
import teamMember5 from '../../assets/home/testimonial3.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  {
    id: 1,
    name: 'Melody Gichini',
    role: 'CEO & Founder',
    image: teamMember1,
    expertise: 'Leadership, Business Strategy, and Product Development.',
    bio: 'Melody has over 5 years of experience in the tech industry, leading teams and building innovative products.',
    socialLinks: {
      twitter: 'https://twitter.com/melodygichini',
      linkedIn: 'https://www.linkedin.com/in/melody-gichini-202808250/',
      github: 'https://github.com/melodygichini',
    },
  },
  {
    id: 2,
    name: 'Nelson Tommogo',
    role: 'Engineering Manager',
    image: teamMember2,
    expertise: 'Mobile & Web Engineering, FullStack Development',
    bio: 'Nelson is a seasoned Engineering Manager with extensive experience in overseeing development teams and implementing complex systems.',
    socialLinks: {
      twitter: 'https://x.com/nelson_tommogo',
      linkedIn: 'https://www.linkedin.com/in/nelson-tommogo/',
      github: 'https://github.com/Nelson-Tommogo',
    },
  },
  {
    id: 3,
    name: 'Edins Gabina',
    role: 'Senior Software Engineer',
    image: teamMember3,
    expertise: 'Mobile Development',
    bio: 'Edins specializes in mobile application development with over a decade of experience in creating user-friendly mobile solutions.',
    socialLinks: {
      twitter: 'https://twitter.com/edinsgabina',
      linkedIn: 'https://www.linkedin.com/in/edins-gabina-895925189/',
      github: 'https://github.com/captainEdins',
    },
  },
  {
    id: 4,
    name: 'Sylvia Armony',
    role: 'Chief Marketing Officer',
    image: teamMember4,
    expertise: 'Marketing Strategy, Brand Management, and Communications.',
    bio: 'Ruth is a marketing expert with a proven track record of leading global campaigns and enhancing brand visibility.',
    socialLinks: {
      twitter: 'https://twitter.com/sylviaarmony',
      linkedIn: 'https://linkedin.com/in/sylviaarmony',
      github: 'https://github.com/sylviaarmony',
    },
  },
  {
    id: 5,
    name: 'Tony Works',
    role: 'FullStack Engineer',
    image: teamMember5,
    expertise: 'Web Development',
    bio: 'Tony is a skilled FullStack Engineer with experience in building robust web applications and optimizing user experiences.',
    socialLinks: {
      twitter: 'https://twitter.com/tonyworks',
      linkedIn: 'https://linkedin.com/in/tonyworks',
      github: 'https://github.com/tonyworks',
    },
  },
];

const CompanyTeam = () => {
  return (
    <>
      <div className="company-team-container">
        <header className="team-header">
          <h1>Meet Our Team</h1>
          <p>Our team of experienced professionals is dedicated to bringing our vision to life.</p>
        </header>

        {/* Team Member Grid */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-expertise">{member.expertise}</p>
              <p className="team-bio">{member.bio}</p>
              <div className="social-links">
                {member.socialLinks.twitter && (
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                )}
                {member.socialLinks.linkedIn && (
                  <a href={member.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CompanyTeam;
