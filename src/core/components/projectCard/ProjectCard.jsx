import React from 'react';
import { ProjectCardStyles } from './ProjectCard.styles';
import eyeSvg from '../../../assets/svg/eye-solid.svg';
import githubSvgRound from '../../../assets/svg/github-alt.svg';
export default function ProjectCard({
  heading,
  headingSmall,
  icon,
  paragraph,
  showLiveDemo,
  imgSrc,
  imgPosition,
  showNode,
}) {
  return (
    <ProjectCardStyles>
      <div
        className={`cardImgContainer ${imgPosition === 'right' ? 'right' : ''}`}
      >
        <img src={imgSrc} alt='' />
      </div>
      <div className='cardTextContainer'>
        <header>
          <h3>{heading}</h3>
          <p>{headingSmall}</p>
          <img src={icon} alt='Project related icon' />
        </header>
        <p className='paragraph'>{paragraph}</p>
        <div className='technologyContainer'>
          <div>React.js</div>
          <div>styled-components</div>
          {showNode && <div>Node.js</div>}
        </div>
        <div className='linksContainer'>
          <span>
            <a>Code</a>
            <img src={githubSvgRound} alt='Github Svg' />
          </span>
          {showLiveDemo && (
            <span>
              <a>Live Demo</a>
              <img src={eyeSvg} alt='Eye Svg' />
            </span>
          )}
        </div>
      </div>
    </ProjectCardStyles>
  );
}
