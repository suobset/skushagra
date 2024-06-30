import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import selfImage from '@site/static/img/self.png';

const FeatureList = [
  {
    title: 'Psivant Theraupeutics',
    Svg: require('@site/static/img/psivant.svg').default,
    description: (
      <>
        Interning as a Systems & Software developer at <a href="https://psivant.com">Psivant Theraupeutics</a>: a Research & Development Startup that focuses on High Performance Computational Chemistry & Biology. 
      </>
    ),
  },
  {
    title: 'Self Libre Projects',
    Svg: require('@site/static/img/macintosh.svg').default,
    description: (
      <>
        Helping create a <a href="http://skushagra.com/blog/newsletter5#anna-biondos-low-carbon-concrete-project">Video Game</a> for Anna Biondo's LCC Project (iCons); Creating the <a href="https://tra86.skushagra.com/">tra86 toolchain</a> for Programming Language Performance Analysis; Creating <a href="https://skushagra.com/docs/independent/morbios">MorbiOS</a> w/ <a href="https://github.com/anvitha305">Anvitha</a>; Programming to Reverse Engineer for Classic Macintosh.
      </>
    ),
  },
  {
    title: 'Biking, Photography',
    Svg: require('@site/static/img/bike.svg').default,
    description: (
      <>
        I bike around in Boston. I have also been pursuing Photography for over a year or so now. I intend to blend my experiences and art in my <a href="/blog">Blog</a>, as well as the <a href="/docs/category/hobby">Hobby category</a> of this website. More to come soon.
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
        const response = await fetch('https://umaring.mkr.cx/kush'); // This is where the URL is changed temporarily
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
        <div className={styles.introSection}>
          <img src={selfImage} alt="Self" className={styles.selfImage} />
          <p>The following is the personal website of Kush Srivastava: undergraduate CompSci major at UMass Amherst, graduating 2024. This homepage will cover the highlights of projects that I am working on currently. Complete details on everything that I am working on can be accessed via the <a href="./docs/intro">About</a> page. Along with my <a href="./docs/category/undergraduate">portfolio</a>, this website serves <a href="./docs/category/hobby">as my creative outlet</a> (both, in and out of CompSci). The site logo is my first computer, circa 2013.<br /><br />
          Currently, my main focus are in these endeavours; in-depth details and other current projects can be found under the <a href="./docs/ongoing">Ongoing</a> page:</p>
        </div>
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
          <a href="https://www.barebones.com/products/bbedit/"><img src="https://suobset.github.io/finechive-helper/88x31/bbedit2.png"></img></a><a href="https://umass.edu"><img src="https://suobset.github.io/finechive-helper/88x31/umass.png"></img></a><a href="https://pages.github.com"><img src="https://suobset.github.io/finechive-helper/88x31/ghPages.gif"></img></a><a href="https://www.vim.org"><img src="https://suobset.github.io/finechive-helper/88x31/vim.gif"></img></a><a href="https://tldp.org/LDP/tlk/tlk.html"><img src="https://suobset.github.io/finechive-helper/88x31/ubuntu.gif"></img></a><a href="https://ch.tetr.io/u/suobset"><img src="https://suobset.github.io/finechive-helper/88x31/tetris.gif"></img></a><br />
          <a href="https://www.thetrevorproject.org/"><img src="https://suobset.github.io/finechive-helper/88x31/pride.gif"></img></a><a href="https://arc.net"><img src="https://suobset.github.io/finechive-helper/88x31/Arc 88x31.gif"></img></a><a href="https://apple.com/mac"><img src="https://suobset.github.io/finechive-helper/88x31/Mac.gif"></img></a><a href="https://firefox.com"><img src="https://suobset.github.io/finechive-helper/88x31/firefox.gif"></img></a><a href="https://yesterweb.org/no-to-web3/"><img src="https://suobset.github.io/finechive-helper/88x31/web3.gif"></img></a><a href="https://www.umass.edu/stonewall/"><img src="https://suobset.github.io/finechive-helper/88x31/bi.png"></img></a>
        </div>
      </div>
    </section>
  );
}
