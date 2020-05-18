import React from 'react';

import pitopCover from '../../images/pitopCover.jpg';
import metronomeCover from '../../images/metronomeCover.png';

import WorkTemplate from './WorkTemplate';

const Work = () => {
  const JOBS = [
    {
      href: '/#',
      image: metronomeCover,
      company: 'Metronome Technologies',
      title: 'Co-founder & CTO',
      description:
        'Accelerating the transition to renewable energy by making decarbonisation profitable',
      to: {
        href: 'https://metronome.energy',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: pitopCover,
      company: 'pi-top',
      title: 'Vice President & Lead Software Engineer',
      description:
        'Changing STEAM education with “learning by making” using Raspberry Pi based laptops',
      to: {
        href: 'https://pi-top.com',
        label: 'Learn more',
      },
    },
  ];

  const [jobs] = React.useState(JOBS);

  return (
    <section id="work" className="wrapper style2 spotlights show-case">
      <div className="inner">
        <div className="parent">
          <span>Work</span>
          <div className="under-line"></div>
        </div>

        {jobs.map(job => (
          <WorkTemplate key={job.heading} {...job} />
        ))}
      </div>
    </section>
  );
};

export default Work;
