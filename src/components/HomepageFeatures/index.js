import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'U.S. Census + UMass iCons TOP',
    Svg: require('@site/static/img/iCons-nogo.svg').default,
    description: (
      <>
        Collaborating with a team of 6 <a href="https://icons.cns.umass.edu">UMass iCons</a> students (myself included) on the <a href="https://opportunity.census.gov/">"The Opportunity Project"</a> by <a href="https://www.census.gov/">U.S. Census Bureau</a>. Project proposal and guidelines by <a href="https://energy.gov">U.S. Department of Energy</a>.
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
        <p>The following is the personal website of Kush Srivastava: undergraduate CompSci major at UMass Amherst, graduating 2024. This homepage will cover the highlights of projects that I am working on currently. Complete details on everything that I am working on can be accessed via the <a href="./docs/intro">About</a> page. This is <a href="./docs/category/the-finechive">also my creative outlet</a>.</p>
        <p>The reason behind creating this website has changed over the years: this domain went from being a website in High School teaching music to others, to being a <a href="./archive">portfolio website</a>, to now furthering that and making this a repository for almost everything I do: creatively and professionally. The current version of this website is also <a href="https://en.wikipedia.org/wiki/Lynx_(web_browser)">Lynx Compatible</a>. The site logo is my first computer, circa 2013, and is what got me into my career today.</p>
        <p>Currently, my main focus are in these endeavours; in-depth details and other current projects can be found under the <a href="./docs/research/ongoing">Research</a> page:</p>
        <div className="row">
         {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))} 
        </div>
        <div className={styles.iframeContainer}>
          I am currently battling Docusaurus in the alignment of this Webring; will be fixed soon :) <iframe src="https://suobset.github.io/finechive-helper/umaring" width="100%" height="28px"></iframe>
        </div>
      </div>
    </section>
  );
}
