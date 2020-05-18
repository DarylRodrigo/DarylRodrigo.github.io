import React from 'react';

import lunarLanding from '../../images/lunarLanding.png';

import ProjectTemplate from './ProjectTemplate';

const Work = () => {
  const PROJECTS = [
    {
      href: '/#',
      image: lunarLanding,
      title: 'Deep Reinforcement Learning Algorithms',
      description:
        'Implemented some fundamental reinforcement learning algorithms in pyTorch (PPO, DDPG, DQN)',
      to: {
        href: 'https://github.com/DarylRodrigo/rl_lib',
        label: 'Learn more',
      },
    },
  ];

  const [projects] = React.useState(PROJECTS);

  return (
    <section id="projects" className="wrapper style2 spotlights show-case">
      <div className="inner">
        <div className="parent">
          <span>Projects</span>
          <div className="under-line ul-projects"></div>
        </div>

        {projects.map(job => (
          <ProjectTemplate key={job.heading} {...job} />
        ))}
      </div>
    </section>
  );
};

export default Work;
