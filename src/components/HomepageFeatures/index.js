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
        Currently working as a Systems & Software developer at <a href="https://psivant.com">Psivant Theraupeutics</a>: a Research & Development Startup that focuses on High Performance Computational Chemistry & Biology. My contributions can be seen in <a href="https://github.com/psivant/stormm">STORMM</a>, a low-level framework based on C++ and CUDA that utilizes Parallel Processing in GPUs to leverage finer Molecular Dynamics Simulations.
      </>
    ),
  },
  {
    title: 'tra86',
    Svg: require('@site/static/img/cics.svg').default,
    description: (
      <>
        Refining the software stack that was created for my Honors Thesis pertaining to analysis of different programming languages at the Systems level (x86). <i>tra86</i>, is a comprehensive toolchain that handles compilations of RUST and C++ codebases, parses and traces the assembly instructions and stack, and returns performance metrics. <a href="https://skushagra.com/docs/undergraduate/tra86">Read more</a>.
      </>
    ),
  },
  {
    title: 'ravynOS (Hobby/Volunteer)',
    Svg: require('@site/static/img/ravynos-full.svg').default,
    description: (
      <>
        Helping bring Swift to <a href="https://ravynos.com">ravynOS</a>, an Open Source BSD-based distribution that aims to provide a similar experience and some compatibility with macOS on x86-64 (and eventually ARM) systems. Taking learnings from tra86, xv6, and elsewhere, I hope this project also enables me to create a nice Swift FreeBSD port after the attempts already made. Updates soon!!
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
          <p>The following is the personal website of Kush Srivastava. I am a recent CS undergrad who specialized in two major areas: <b>Operating Systems & Compilers, and Natural Language + Information Retrieval</b>. <br /><br />This homepage will cover the highlights of projects that I am working on currently. Complete details on everything that I am working on can be accessed via the <a href="./docs/intro">About</a> page. Along with my <a href="./docs/category/undergraduate">portfolio</a>, this website serves <a href="./docs/category/hobby">as my creative outlet</a> and <a href="/blog">Blog</a>. You can read the blog on your web browser as usual, or an RSS app using the URL <a href="https://skushagra.com/blog/rss.xml">skushagra.com/blog/rss.xml</a>.<br /><br />
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
        <a href="https://umass.edu"><img src="https://suobset.github.io/finechive-helper/88x31/umass.png"></img></a><a href="https://firefox.com"><img src="https://suobset.github.io/finechive-helper/88x31/firefox.gif"></img></a><a href="https://pages.github.com"><img src="https://suobset.github.io/finechive-helper/88x31/ghPages.gif"></img></a><a href="https://www.vim.org"><img src="https://suobset.github.io/finechive-helper/88x31/vim.gif"></img></a><a href="https://tldp.org/LDP/tlk/tlk.html"><img src="https://suobset.github.io/finechive-helper/88x31/ubuntu.gif"></img></a><a href="https://ubuntu.com"><img src="https://suobset.github.io/finechive-helper/88x31/ubuntu_button_88x31.png"></img></a><a href="https://www.tomshardware.com/reviews/dell-g3-15-gaming-laptop,5685.html"><img src="https://suobset.github.io/finechive-helper/88x31/dell.gif"></img></a><br />
        <a href="https://www.thetrevorproject.org/"><img src="https://suobset.github.io/finechive-helper/88x31/pride.gif"></img></a><a href="https://apple.com/mac"><img src="https://suobset.github.io/finechive-helper/88x31/Mac.gif"></img></a><a href="https://www.barebones.com/products/bbedit/"><img src="https://suobset.github.io/finechive-helper/88x31/bbedit2.png"></img></a><a href="https://arc.net"><img src="https://suobset.github.io/finechive-helper/88x31/Arc 88x31.gif"></img></a><a href="https://code.visualstudio.com/"><img src="https://suobset.github.io/finechive-helper/88x31/vscode.gif"></img></a><a href="https://yesterweb.org/no-to-web3/"><img src="https://suobset.github.io/finechive-helper/88x31/web3.gif"></img></a><a href="https://ch.tetr.io/u/suobset"><img src="https://suobset.github.io/finechive-helper/88x31/tetris.gif"></img></a>
        </div>
      </div>
    </section>
  );
}
