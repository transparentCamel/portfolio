import React from 'react';
import { ProjectSectionStyles } from './ProjectsSection.styles';
import ProjectCard from '../../components/projectCard/ProjectCard';
import carServicesImg from '../../../assets/images/car-services.png';
import carSvg from '../../../assets/svg/car-solid.svg';
import kryptoniteImg from '../../../assets/images/kryptonite.png';
import diamondSvg from '../../../assets/svg/diamond.svg';
import registrationAppImg from '../../../assets/images/registrationApp.png';
import adressCardSvg from '../../../assets/svg/address-card-solid.svg';
export default function ProjectsSection() {
  return (
    <ProjectSectionStyles id='projects'>
      <h3>PROJECTS</h3>
      <h2>Few of my personal projects</h2>
      <div className='projectCardContainer'>
        <ProjectCard
          imgSrc={carServicesImg}
          heading={'CAR SERVICES'}
          headingSmall={'(Desktop only)'}
          icon={carSvg}
          showLiveDemo={'true'}
          paragraph={
            'Car Services website is a static platform meticulously created to mirror the exact specifications outlined in the provided Figma design.'
          }
          link={'https://github.com/transparentCamel/carShop'}
        />
        <ProjectCard
          imgSrc={kryptoniteImg}
          heading={'KRYPTONITE'}
          headingSmall={'(2023 September)'}
          icon={diamondSvg}
          showLiveDemo={'true'}
          paragraph={
            'This website enables real-time cryptocurrency price tracking, graph generation, and MongoDB data logging for user-selected cryptocurrencies.'
          }
          imgPosition={'right'}
          showNode={true}
          link={'https://github.com/transparentCamel/Kryptonite'}
        />
        <ProjectCard
          imgSrc={registrationAppImg}
          heading={'REGISTRATION APP'}
          headingSmall={'(2023 August)'}
          icon={adressCardSvg}
          showLiveDemo={false}
          paragraph={
            'This app leverages MongoDB for registration, supports admin login with validation, and offers event creation and management features.'
          }
          showNode={true}
          link={'https://github.com/transparentCamel/registration-app'}
        />
      </div>
    </ProjectSectionStyles>
  );
}
