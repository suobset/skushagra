import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'U.S. Census + UMass iCons TOP',
    Svg: require('@site/static/img/iCons-nogo.svg').default,
    description: (
      <>
        Collaborating with a team of 6 <a href="https://icons.cns.umass.edu">UMass iCons</a> students on the <a href="https://opportunity.census.gov/">"U.S. Census Opportunity Project"</a>. Currently user-testing <a href="https://suobset.github.io/assert">ASSERT</a>: a GIS tool to provide aid to people overburdned by electrical outages.
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

function Feature({ Svg, title, description }) {
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
  const [webringData, setWebringData] = useState(null);

  useEffect(() => {
    const fetchWebringData = async () => {
      try {
        const response = await fetch('https://umaring.hamy.cc/kush');
        if (!response.ok) {
          throw new Error('Failed to fetch webring data');
        }

        const data = await response.json();
        setWebringData(data);
      } catch (error) {
        console.error('Error fetching webring data:', error);
      }
    };

    fetchWebringData();
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <p>The following is the personal website of Kush Srivastava: undergraduate CompSci major at UMass Amherst, graduating 2024. This homepage will cover the highlights of projects that I am working on currently. Complete details on everything that I am working on can be accessed via the <a href="./docs/intro">About</a> page. Along with my <a href="./docs/category/research">portfolio</a>, this website serves <a href="./docs/category/the-finechive">as my creative outlet</a> (both, in and out of CompSci). The site logo is my first computer, circa 2013.</p>
        <p>Currently, my main focus are in these endeavours; in-depth details and other current projects can be found under the <a href="./docs/research/ongoing">Research</a> page:</p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={styles.iframeContainer}>
          {webringData && (
            <div className={styles.centeredLinks}>
              <a href={webringData.prev.url} target="_blank" rel="noopener noreferrer">{webringData.prev.name}</a>
              {' <- '}
              <a href="https://github.com/umaring/umaring">UMass Ring</a>
              {' -> '}
              <a href={webringData.next.url} target="_blank" rel="noopener noreferrer">{webringData.next.name}</a>
            </div>
          )}
        </div>
        <div className={styles.centeredLinks}>
          <a href="https://umass.edu"><img src="https://suobset.github.io/finechive-helper/88x31/umass.png"></img></a><a href="https://pages.github.com"><img src="https://suobset.github.io/finechive-helper/88x31/ghPages.gif"></img></a><a href="https://code.visualstudio.com"><img src="https://suobset.github.io/finechive-helper/88x31/vscode.gif"></img></a><a href="https://www.vim.org"><img src="https://suobset.github.io/finechive-helper/88x31/vim.gif"></img></a><a href="https://tldp.org/LDP/tlk/tlk.html"><img src="https://suobset.github.io/finechive-helper/88x31/ubuntu.gif"></img></a><a href="https://ch.tetr.io/u/suobset"><img src="https://suobset.github.io/finechive-helper/88x31/tetris.gif"></img></a><br />
          <a href="https://www.thetrevorproject.org/"><img src="https://suobset.github.io/finechive-helper/88x31/pride.gif"></img></a><a href="https://defectivebydesign.org"><img src="https://suobset.github.io/finechive-helper/88x31/drm.gif"></img></a><a href="https://trisquel.info/"><img src="https://suobset.github.io/finechive-helper/88x31/trisquel.gif"></img></a><a href="https://firefox.com"><img src="https://suobset.github.io/finechive-helper/88x31/firefox.gif"></img></a><a href="https://yesterweb.org/no-to-web3/"><img src="https://suobset.github.io/finechive-helper/88x31/web3.gif"></img></a><a href="https://www.umass.edu/stonewall/"><img src="https://suobset.github.io/finechive-helper/88x31/bi.png"></img></a>
        </div>
      </div>
    </section>
  );
}
