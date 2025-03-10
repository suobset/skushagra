---
slug: 'linkedin-contributions2'
title: 'LinkedIn Expert Contributions: Ep. 2'
authors: [suobset]
tags: ['Code', 'Open Source', 'Career']
---

# LinkedIn Expert Contributions: Ep. 2

This is the second weekly collection of all my contributions to LinkedIn's [Collaborative Articles](https://www.linkedin.com/pulse/topics/home): an experiment where different people from LinkedIn answer quora-like questions. Most of my contributions in this project are surrounding domains across Engineering, Software Development, Low level systems (architecture, OSes, compilers, etc.), and AI/ML. 

* No main contribution on LinkedIn is more than 750 characters.
* I have added footnotes in this document if I have more than 750 characters' worth to talk about.
* Links to all answers have been attached.
* Use the sidebar on desktop to jump around.

<!-- truncate -->

---

## Join Operations

**Q: How do you design and implement efficient join operations in mapreduce?**

[Permalink](https://www.linkedin.com/advice/0/how-do-you-design-implement-efficient-join?trk=cah1&utm_source=share&utm_campaign=copy_contribution_link&utm_medium=member_desktop&contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7048695108753338368%2C7048695113111236610%29%2C7302856164810080258%29&articleSegmentUrn=urn%3Ali%3AarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7048695108753338368%2C7048695113111236610%29&dashContributionUrn=urn%3Ali%3Afsd_comment%3A%287302856164810080258%2CarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7048695108753338368%2C7048695113111236610%29%29)

**1. What is a join operation?**

```LinkedIn Answer```

```
A join operation is a way of combining two or more datasets based on some common attribute or key.
For example, you might want to join a dataset of customers with a dataset of orders, using the
customer ID as the key, to get a complete view of each customer's purchases. Join operations can be
classified into different types, such as inner join, outer join, and cross join, depending on the
desired output.
```

```My Additions```

```
A critical aspect to consider during a join operation is the necessity of possessing clean and complete datasets prior to executing the action. It is not explicitly mentioned here to ensure the absence of data gaps, the completeness of the data, or the utilization of copies of the data.

A join operation frequently results in the loss of original data (or the introduction of inferior datasets if not executed with caution). Transact-SQL (for SQL databases) and Git (for CSV files, as an example) provide robust commands and queries to prevent any modifications from disrupting the datasets. However, it is often advisable to work on a separate copy of the data first to verify the correctness of your code.
```

---

## Ideas vs. Milestones

**Q: Your creative vision clashes with project constraints. How do you innovate within limits?**

[Permalink](https://www.linkedin.com/advice/1/your-creative-vision-clashes-project-constraints-oluue?trk=cah0&utm_source=share&utm_campaign=copy_contribution_link&utm_medium=member_desktop&contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7298055637853167617%2C7298055639887499264%29%2C7302891070961446912%29&articleSegmentUrn=urn%3Ali%3AarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7298055637853167617%2C7298055639887499264%29&dashContributionUrn=urn%3Ali%3Afsd_comment%3A%287302891070961446912%2CarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7298055637853167617%2C7298055639887499264%29%29)

In programming, I’ve often encountered “idea creep,” the phenomenon of generating numerous ideas without a clear direction. To combat this, I’ve found it beneficial to take a step back and assess the project’s core purpose. Validate ideas that directly contribute to achieving this purpose. Maintain a list of new ideas and revisit them periodically, especially after reaching a specific goal.

This approach proved highly useful during my undergraduate thesis.

---

At this point, LinkedIn has seem to run out of relevant questions and is asking me the same questions in a circle. I will be appending more to this post if something comes up.

## Footnotes
