---
title: "Mini side project: Automator (and views on async LLMs)"
date: 2025-06-20T03:36:00+00:00
draft: false
tags: ["AI", "Career", "Code", "Software", "Personal", "Open Source"]
url: "/2025/06/mini-side-project-automator-and-views.html"
---
****

**[![](/images/AVvXsEiUmrosaX5IJfo0y-jKBR6Rdo5F6UuvKgVOUW3ziKpnwdqv6HRsazSE9EgdEO-W4QB5sSOtVLdu9Ymh8G42m0IUw3cGWeGxvK6N_Fhg8oy0DeSHI0GxN0iKfD8KjFJVcQEsQnQtUCpE-k6Dt4sqEvgyRiT4rkJe6HRhrkNh5G-yOO-_iEt7k1gvfU26PZ4=w640-h480)](/images/AVvXsEiUmrosaX5IJfo0y-jKBR6Rdo5F6UuvKgVOUW3ziKpnwdqv6HRsazSE9EgdEO-W4QB5sSOtVLdu9Ymh8G42m0IUw3cGWeGxvK6N_Fhg8oy0DeSHI0GxN0iKfD8KjFJVcQEsQnQtUCpE-k6Dt4sqEvgyRiT4rkJe6HRhrkNh5G-yOO-_iEt7k1gvfU26PZ4)**

**
**
## **Check out the [GitHub repository](https://github.com/suobset/automator), where the project is better contained. **

### **This is just to serve as an intro to the project + some thoughts.**

I'm excited to share **Automator**, an open-source Android app that transforms natural language commands into actions. It leverages the power of Google's Gemini LLM to understand your intentions and translate them into executable YAML scripts. The app's "Actor" component then uses Android's Accessibility Service to perform these actions, offering a hands-free way to control your phone.

Essentially, "Open Wikipedia and search for 'Hacker News'" or "Send a text to Mom saying I'll be late" are no longer multi-step processes. 

This project was a personal challenge, built in just a few weeks of focused, one-hour sprints with the help of LLMs to learn Android development from the ground up. The only reason I link my blog is for two reasons:

1. To refer to an [earlier post](https://www.skushagra.com/2025/05/zero-android-experience-to-working.html) about how I leveraged LLMs to help me learn Android dev and code this app in a couple of weeks of 1 hour sprints.

2. To collect some thoughts on Jules, the asynchronous coding agent...which are [linked in this PR](https://github.com/suobset/automator/pull/1) and at the end of this post. Tldr: great for boilerplate code, but gets even basics wrong currently. 

> **So, what's the long term goal here?**

 Currently, the app uses a Gemini backend with some minor prompt engineering. You will need a Gemini API key to use the app, [learn how to get one here](https://ai.google.dev/gemini-api/docs/api-key). 

 During the first run, the App will prompt you the API key as a pop-up message (one-time only). 

 The long term goal for the app is to democratize computation for people coming from regional areas with little to no knowledge in English, or using a device. This was specifically inspired by my own experiences helping people with limited reading/writing abilities to use their devices.

Again, please keep in mind that this app is merely a **proof of concept created in some couple of weeks of spare time**. 

**We do not use MCP yet** because I wanted to learn Android development, as well as the app itself should serve as a replacement of human action and each action should always be visible to the user (and receive interrupts). Though a fleshed out future version of this native-language assistant will most definitely utilize [MCP](https://github.com/modelcontextprotocol/servers).

### Things to note
 Most importantly, SelfSelect/Automator is currently a very early-stage product. While I have been able to harness most of Android's accessibility features (including chaining of different YAML commands, and LLM prompt-engineering for YAML references), not all actions are going to be possible.

 For example, "Open Wikipedia and navigate to the search bar" works perfectly fine. This is an end goal that can be invoked from the app itself. 

 However, "Take a picture from my front camera" is currently not possible, as it requires the camera to already be in the foreground. 

 Right now, the "Actor" performs actions. The next stage is for it to perceive the result. After tapping "Login," how does it know it's on the dashboard screen? This involves screen-reading, OCR, and understanding the "state" of the app. This is the next logical step for me to build into this project. 

 Parallel to this project, I am also working on a fine-tuned LLM that communicates in regional languages that do not follow a Latin script. I hope to share more details regarding this in the future [on my blog](https://skushagra.com). Model weights will be open. 

 The first non-Latin regional languages I am targeting are Hindi and Arabic. 

## Features

- **Natural Language Control:** Interact with your device by typing commands in a chat interface.
- **LLM-Powered:** Utilizes the Gemini API to understand complex requests and generate automation scripts.
- **YAML-Based Actions:** Your commands are translated into human-readable YAML scripts.
- **Accessibility Service Integration:** Performs actions on your behalf by interacting with the UI like a real user.
- **Secure API Key Management:** Prompts for API key entry via a dialog if not available and stores it securely using EncryptedSharedPreferences.
- **Actor Interface:** View, edit, and test YAML scripts directly within the app.
- **Extensible Action Set:** Supports a variety of actions, including: 
  - Opening applications.
  - Navigating the system (home, back, notifications).
  - Performing UI interactions (typing text, clicking elements, scrolling).
  - Launching web URLs.
  - Introducing delays/waits in scripts.
  - Experimental support for sending text messages.

## Screenshots/Workflows
![Screenshot](https://github.com/user-attachments/assets/b6962bf7-ffe3-4ab2-b7e3-c9c4f5b1ef83)
### Chained YAML, Editing, Error Reporting:

## Thoughts on Jules:
**The PR (create API entry dialog):**

**
**

This commit introduces two major enhancements:

1. **API Key Input Dialog:**
  1. If the Gemini API key is not found in `BuildConfig` or stored preferences, the app now displays a dialog prompting you to enter your API key.
  1. The dialog explains how to obtain a key and provides a field for input.
  1. Entered API keys are stored securely using `EncryptedSharedPreferences`.
  1. `ChatViewModel` has been updated to manage this flow, becoming an `AndroidViewModel` to handle context for `SharedPreferences`.

1. **Expanded Automation Actions:**
  1. `ActorAction.kt`: Redefined to use an `ActorScript` containing a list of `ActorActions`. Each `ActorAction` has an `action_type`, an optional `description`, and a `parameters` map. `ActionTypes` and `ParameterKeys` are now centralized constants.
  1. `ActorViewModel.kt`: Updated to parse `ActorScript` and iterate through the list of actions. It now dispatches based on `action_type` and extracts parameters for each action. Includes basic implementation for a `WAIT` action using `Thread.sleep()`.
  1. `ActorAccessibilityService.kt`: Significantly expanded with new public methods to handle various actions like opening apps (by name or package), launching URLs, typing text (with targeting), clicking elements (by text, ID, or description), scrolling views, and basic navigation (home, back, notifications). Helper functions for node finding and interaction have been added/improved. Placeholders with logging have been added for more complex actions (e.g., sending texts, toggling Wi-Fi/Bluetooth, screenshots, volume) that require further permissions or more intricate UI interaction logic.
  1. `implicitPrompts.kt`: The system prompt for the LLM has been thoroughly updated to reflect the new YAML structure, detail all available actions and their parameters with examples, and guide the LLM on decomposing complex requests. Unsupported actions are explicitly mentioned.

**Error handling and logging** have been improved across these components. The changes aim to make the Automator more versatile and user-friendly by simplifying API key management and broadening its range of executable actions.

**Thoughts:**

This is my first commit using [Jules](https://jules.google), a completely independent asynchronous coding agent. I have personally found that while Jules (or any other AI) is not the best when it comes to giving vague instructions and having them code out something, they shine when you give them tons of in-depth instructions on exactly, at a technical level, what it is that you want to do.

**EDIT:** Jules got most of the boilerplate right. Definitely having the app mostly built and having Jules fill in accessibility prompts helped a little, and some manual debugging was required even afterwards...but all in all, it was a good experiment.

I have written extensively regarding my thoughts on this matter [on this blog post](https://www.skushagra.com/2025/05/zero-android-experience-to-working.html). A similar approach was taken here: in-depth prompts detailing exactly what I wanted and how I wanted to get it done.

The difference between other traditional AI assistants and Jules is essentially how the tasks are done. While other assistants act as a peer programmer with the context of the codebase (Cursor, Gemini Code Assist, Co-pilot), those changes are usually:

- Visible as the AI assistant goes about it
- Modular, with ability to be changed and modified to your liking in-between lines or while it is executing

*(Note: all synchronous code assistants and platforms will be referred to as "Cursor" from this point onwards, for the sake of simplicity)*

Whereas Jules acts completely asynchronously. If Cursor is a Peer Programmer, Jules is a programmer who just goes in a different room and does it on their own. This means that it might actually be easier to make changes or tell Cursor what changes to make as we go ("this UIState needs another state for a login screen if the user is not logged in, can you make the change"), you are able to only code review once Jules is completely done. Cursor is synchronous, Jules is asynchronous.

On the other hand, the Jules benefit is that it is doing a little more than Cursor. Cursor (really, Claude) is just a LLM that is predicting what the best fit case would be for a said prompt. On the other hand, Jules actually boots up a VM, clones the repository, makes the changes, and even makes test cases and does implicit testing. While Cursor is a wrapper around Claude, Jules is harnessing the power of LLMs (probably Gemini Code Assist) and creating/testing code in a VM. This is getting much closer to an automation of the traditional programmer.

It remains to be seen how that would fare.

The most interesting thing that Jules brings to the table for myself is yet another thought on the future of programming. Obviously, something like this should not be trusted for high security codebases. I still stand by my article about AI prompting and vibe coding linked above, you need to know what you are doing for high risk codebases.

Interestingly, Jules did everything surrounding creating the box, but couldn't figure out encryption of API keys. I had to do that manually.

---

Cover: Boston Seaport, taken May 2025
