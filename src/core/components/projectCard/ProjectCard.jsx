import React from 'react';
import { ProjectCardStyles } from './ProjectCard.styles';
import eyeSvg from '../../../assets/svg/eye-solid.svg';
import githubSvgRound from '../../../assets/svg/github-alt.svg';
export default function ProjectCard({
  heading,
  headingSmall,
  icon,
  paragraph,
  imgSrc,
  imgPosition,
  showNode,
  linkGit,
  linkSite,
  showStyled,
  showTailwind,
  showSass,
  showReact,
  showNext,
  showTypescript,
  showContentful,
}) {
  return (
    <ProjectCardStyles>
      <div
        className={`cardImgContainer ${imgPosition === 'right' ? 'right' : ''}`}
      >
        <img src={imgSrc} alt='Project' />
      </div>
      <div className='cardTextContainer'>
        <header>
          <h3>{heading}</h3>
          <p>{headingSmall}</p>
          <img src={icon} alt='Project related icon' />
        </header>
        <p className='paragraph'>{paragraph}</p>
        <div className='technologyContainer'>
          {showReact && <div>React.js</div>}
          {showNext && <div>Next.js</div>}
          {showTypescript && <div>Typescript</div>}

          {showTailwind && <div>Tailwind CSS</div>}
          {showStyled && <div>styled-components</div>}
          {showSass && <div>SASS</div>}

          {showNode && <div>Node.js</div>}
          {showContentful && <div>Contentful CMS</div>}
        </div>
        <div className='linksContainer'>
          {linkGit && (
            <a href={linkGit} target='_blank'>
              <p>Code</p>
              <img src={githubSvgRound} alt='Github Svg' />
            </a>
          )}

          {linkSite && (
            <a href={linkSite} target='_blank'>
              <p>Live Demo</p>
              <img src={eyeSvg} alt='Eye Svg' />
            </a>
          )}
        </div>
      </div>
    </ProjectCardStyles>
  );
}
