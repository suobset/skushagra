import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'UMass iCons + U.S. DOE TOP',
    Svg: require('@site/static/img/iCons-nogo.svg').default,
    description: (
      <>
        Collaborating with a team of 6 on "The Opportunity Project" by <a href="https://icons.cns.umass.edu">UMass iCons</a> + <a href="https://www.energy.gov/">U.S. Department of Energy</a>: a creative research endeavour which takes students from multiple universities and pairs them with industry experts to help in data collection and visualization.
      </>
    ),
  },
  {
    title: 'CICS Honors Thesis',
    Svg: require('@site/static/img/cics.svg').default,
    description: (
      <>
        Currently working with Prof. <a href="https://www.cics.umass.edu/people/chiu-joe">Joe Chiu</a> and Prof. <a href="https://www.cics.umass.edu/faculty/directory/richards_tim">Tim Richards</a> on my Honors Thesis pertaining to analysis of different programming languages at the Operating Systems level.
      </>
    ),
  },
  {
    title: 'LinKaGe Lab @ Smith College',
    Svg: require('@site/static/img/smith.svg').default,
    description: (
      <>
        Working as a Research Assistant at the <a href="https://linkage.cs.umass.edu">LinKaGe Lab</a> under <a href="https://www.smith.edu/academics/faculty/ileana-streinu">Dr. Ileana Streinu</a>. Currently focusing on upkeep and development of different systems and software used by the lab.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <p>The following is the personal website of Kush Srivastava: undergraduate CompSci major at UMass Amherst, graduating 2024. This homepage will cover the highlights of projects that I am working on currently. Complete details on everything that I am working on can be accessed via the <a href="./docs/intro">About</a> page. I also <a href="./blog">write stuff on here occassionally</a>.</p>
        <p>The reason behind creating this website has changed over the years: this domain went from being a website in High School teaching music to others, to being a portfolio website, to now furthering that and making this a repository for almost everything I do: creatively and professionally. I had created the last version of this website during Winter 2021, and that version over time felt constraining and in need of an overhaul. I might keep using this home page area for such musings.</p>
        <p>I also decided to do this entire revamp starting Thursday September 7, 2023. Hence, some parts of this new redesigned website are still incomplete. I hope to get everything in here by Saturday September 9, 2023.</p>
        <p>Currently, my main focus are in these endeavours:</p>
        <div className="row">
         {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))} 
        </div>
      </div>
    </section>
  );
}
