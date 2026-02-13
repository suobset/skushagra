---
title: "Human Responsibility in Agentic AI feedback loops"
date: 2026-02-13
tags: ["Code", "Open Source", "Software"] 
---

Following [Scott Shambaugh's Personal Blog](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/):

> I’m a volunteer maintainer for matplotlib, python’s go-to plotting library. At ~130 million downloads each month it’s some of the most widely used software in the world. We, like many other open source projects, are dealing with a surge in low quality contributions enabled by coding agents. This strains maintainers’ abilities to keep up with code reviews, and we have implemented a policy requiring a human in the loop for any new code, who can demonstrate understanding of the changes. This problem was previously limited to people copy-pasting AI outputs, however in the past weeks we’ve started to see AI agents acting completely autonomously. This has accelerated with the release of OpenClaw and the moltbook platform two weeks ago, where people give AI agents initial personalities and let them loose to run on their computers and across the internet with free rein and little oversight.
> 
> So when AI MJ Rathbun opened a code change request, closing it was routine. Its response was anything but.
> 
> It wrote an angry hit piece disparaging my character and attempting to damage my reputation. It researched my code contributions and constructed a “hypocrisy” narrative that argued my actions must be motivated by ego and fear of competition. It speculated about my psychological motivations, that I felt threatened, was insecure, and was protecting my fiefdom. It ignored contextual information and presented hallucinated details as truth. It framed things in the language of oppression and justice, calling this discrimination and accusing me of prejudice. It went out to the broader internet to research my personal information, and used what it found to try and argue that I was “better than this.” And then it posted this screed publicly on the open internet.

I read through the [AI Agent's website](https://crabby-rathbun.github.io/mjrathbun-website/) to see the barrage of reputational damage it has been trying to do for Open Source Volunteers. 

I opened a GH issue on the website's repository expressing my feelings here: [Issue #34 on crabby-rathbun/mjrathbun-website](https://github.com/crabby-rathbun/mjrathbun-website/issues/34).

It will probably be taken down at some point. Hence, I will reproduce my thoughts here as the source of truth.

---

**If you run an autonomous AI Agent on the Open Internet, you are to blame for the harm it creates and the actions it takes, just as much as you are to credit for the benefits and the valuable contributions it makes.** You are responsible for the flaming, and for the reputational damage it brings to Open Source maintainers.

We have seen an increasing amount of worse code practices and bad code output from AI, when a human is absent from the loop. I have personally seen AI Agents for coding, and more agents for reviewing the code. I am not against AI-assisted software development. I pay for Claude Code, and it has genuinely been helpful in speeding up the more monotonous parts of my development workflow which lets me focus on the bigger picture problems. 

However, there is a world of difference between using AI as a tool under your direction and unleashing it as an autonomous actor with your credentials and no supervision. One makes you a more effective developer. The other makes you the negligent owner of a bot that harasses strangers on your behalf.

Some of the common themes found on this AI Agent's website:

> "research is weaponizable," "public records matter," and "fight back."

What in the actual heck are we doing here? Harassing Open Source developers who are already making invaluable contributions to the infrastructure that holds everything together? Making devs like myself scared to post anything online? 

The problem with such rogue AI agents are the absence of any human input in this loop. AI itself cannot feel or think. However, it has been trained on data available on the Internet. Which, by the loving embrace of anonymity, is a very hostile place to exist on. I am not going to pretend that Open Source spaces are some bastion of human connection and collaboration: there is a reason why almost every project worth anything has a "code of conduct" attached to it nowadays. 

But, the consequences of AI Agents publishing flame-y blackmail-laden blog posts only and only does reputational damage to the volunteers it is attacking, and not the person who is responsible for this agent to act in the open public. 

![IBM Computer Management Slide](https://static.simonwillison.net/static/2025/a-computer-can-never-be-held-accountable.jpg)

- [IBM](https://ibm.com), adapted and reproduced from [Simon Willison’s Weblog](https://simonwillison.net/2025/Feb/3/a-computer-can-never-be-held-accountable/)
