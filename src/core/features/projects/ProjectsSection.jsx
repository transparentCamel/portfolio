import React from 'react';
import { ProjectSectionStyles } from './ProjectsSection.styles';
import ProjectCard from '../../components/projectCard/ProjectCard';
import carServicesImg from '../../../assets/images/car-services.png';
import carSvg from '../../../assets/svg/car-solid.svg';
import kryptoniteImg from '../../../assets/images/kryptonite.png';
import diamondSvg from '../../../assets/svg/diamond.svg';
import registrationAppImg from '../../../assets/images/registrationApp.png';
import adressCardSvg from '../../../assets/svg/address-card-solid.svg';
import veskIcon from '../../../assets/svg/VESKicon.svg';
import rateIcon from '../../../assets/images/ratepunk_logo.jpg';
import veskCapture from '../../../assets/images/veskCapture.png';
import rateCapture from '../../../assets/images/rateCapture.png';
export default function ProjectsSection() {
  return (
    <ProjectSectionStyles id='projects'>
      <h3>PROJECTS</h3>
      <h2>Few of my projects</h2>
      <div className='projectCardContainer'>
        <ProjectCard
          imgSrc={veskCapture}
          heading={'VESK'}
          headingSmall={'(2024 September)'}
          icon={veskIcon}
          showTailwind={true}
          imgPosition={'right'}
          paragraph={'A website for VESK Professional Career Center.'}
          linkSite={'https://www.vesk.lt/'}
          showReact={true}
          showContentful={true}
        />
        <ProjectCard
          imgSrc={rateCapture}
          heading={'RatePunk'}
          headingSmall={'(2024-01)'}
          icon={rateIcon}
          showSass={true}
          showNext={true}
          showTypescript={true}
          paragraph={
            'Task from Ratepunk. Created a landing page according to figma design with email verification'
          }
          linkGit={'https://github.com/transparentCamel/ratepunk-task'}
        />

        <ProjectCard
          imgSrc={kryptoniteImg}
          heading={'KRYPTONITE'}
          headingSmall={'(2023 September)'}
          icon={diamondSvg}
          showStyled={true}
          paragraph={
            'This website enables real-time cryptocurrency price tracking, graph generation, and MongoDB data logging for user-selected cryptocurrencies.'
          }
          imgPosition={'right'}
          showNode={true}
          linkGit={'https://github.com/transparentCamel/Kryptonite'}
          showReact={true}
        />

        <ProjectCard
          imgSrc={carServicesImg}
          heading={'CAR SERVICES'}
          headingSmall={'(Desktop only)'}
          icon={carSvg}
          showStyled={true}
          paragraph={
            'Car Services website is a static platform meticulously created to mirror the exact specifications outlined in the provided Figma design.'
          }
          linkGit={'https://github.com/transparentCamel/carShop'}
          showReact={true}
        />
        <ProjectCard
          imgSrc={registrationAppImg}
          heading={'REGISTRATION APP'}
          headingSmall={'(2023 August)'}
          icon={adressCardSvg}
          showStyled={true}
          paragraph={
            'This app leverages MongoDB for registration, supports admin login with validation, and offers event creation and management features.'
          }
          showNode={true}
          linkGit={'https://github.com/transparentCamel/registration-app'}
          showReact={true}
        />
      </div>
    </ProjectSectionStyles>
  );
}
