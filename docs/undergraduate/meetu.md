---
sidebar_position: 8
---

# MeetU

Scheduling app made by Nhi Ha, James Leone, Yuni Jeong, and I: [linked here](https://github.com/suobset/meetu). Essentially a better version of When2Meet, with more features and better collaboration tools. Made for CS 326 in Manning CICS.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4S3lgxtjgRI?si=IbJwKYXOyACS0a_3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Team Overview

-   Yuni Jeong (@yunijeong5)
-   Kushagra Srivastava (@suobset)
-   James Leone (@JLeone123)
-   Nhi Ha (@hacherio)

### Innovative Idea

Existing application: When2Meet (https://www.when2meet.com/), CATME

Their limitations are:
When2Meet-- Bad UI, hard to use on phones, cannot choose location, no commenting functionality
CATME-- Confusing UI (can accidentally fill out the survey wrong)

We want to make a scheduling web app that overcomes these limitations, and add extra functionality which we believe would benefit anyone who want to organize a group meeting. Our goal is to create an app that's simple and easy to use, but also gives intuitive UX to its users.

### Data

-   Meeting title
-   Username (email)
-   Password
-   Time selection votes
-   Recurrence of meeting
-   Meeting location votes
-   Comments about the meeting
-   Specific text boxes for meeting agenda, roadmap, etc. Can give a markdown to end-user to define it to their liking.
-   Links for Zoom/Discord/Meeting Platforms
-   Links for shared Google Drive Folders, Pooled-in Resources
-   A unified system for people to mention if they can make it or not on specific days (think as marking attendance...if they can typically make it but did not on a specific day, they can mention why)

### Functionality

-   Create profile with email and password.
-   Create a new event
-   Users can add their availabilities and vote for the location they want to meet at.
-   Show times with the most overlap (color coded)

-   Private/public events: e.g. Only UMass emails can schedule an event

-   Set max number of members:
-   Users can add comments on the same page
-   Button to send out link via email

-   See all events (past/future) on a single dashboard
-   Delete / create event on the dashboard

-   (maybe) Google Map API: Mark locations on map