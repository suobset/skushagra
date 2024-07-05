---
sidebar_position: 7
---

# Hack This Site

Sometimes my coding mind is inactive, but my tinkering mind is active. I crack cybersec puzzles on this site during those days. 

The following is a list of all the challenges in [HackThisSite.org](https://hackthissite.org), as I unfold and crack them. These may sometimes differ from how people have typically done them as well. 

For example, I rely heavily on Wireshark for these challenges. Regardless, bottom line:

* The following are not the intended correct answers to these puzzles. They are my way of doing and approaching things that have been successful.
* **SPOILER WARNING:** It goes without saying, if you intend to do these puzzles on your own, **stop reading and go to [HackThisSite.org](https://hackthissite.org) NOW**.

[Here's my profile](https://www.hackthissite.org/user/view/k-u-sh/).

## Basic

These are the solutions to the [Basic](https://www.hackthissite.org/missions/basic/) challenges on the site. Heavily recommend to stop reading here and give them a shot yourself if you haven't so already!! 

**THIS CANNOT BE REITERATED ENOUGH, SPOILER WARNING AHEAD**

### Level 1

Inspect element, password is in a comment. 

### Level 2

> However, he neglected to upload the password file

There's nothing to compare your input against whatever the actual password is. The whole script is broken, ```Submit``` and enjoy.

### Level 3

The password file is unencrypted. Inspect element on the submit button, see what file the submit button requests to compare the value against, find the name of the password file, and ```view-source``` in a new tab. You're in!!

The name of this password file cannot be more obvious. 

### Level 4

> However, the password is long and complex, and Sam is often forgetful. So he wrote a script that would email his password to him automatically in case he forgot.

```html
...
    <form action="/missions/basic/4/level4.php" method="post">
    <input type="hidden" name="to" value="sam@hackthissite.org" /><input type="submit" value="Send password to Sam" /></form></center><br /><br /><center><b>Password:</b><br />
    <form action="/missions/basic/4/index.php" method="post">
    <input type="password" name="password" /><br /><br />
    <input type="submit" value="submit" /></form>
...
```

ffs, Sam. Enter your own email, execute the script, enjoy.

### Level 5

> Rather than actually learn the password, he decided to make his email program a little more secure.

Yes, but he did not change the script. Using a more secure email program on your end does not define the behavior of your script. 

Same as Level 4.

### Level 6

Simple cypher encryption. Funnily enough I was initially trying to get the source code to see what the encryption is doing, but if you treat the encryption as a black box and give it some of your own strings...you can soon construct the password. 

I'll save you the fun of doing so. Just know that you have to reverse engineer the encryption by giving it your own inputs.

### Level 7

If you know the UNIX command line, you know that you can execute multiple commands using ```&&```. The script is essentially a simple ```cal $year```, where you can replace the year variable with whatever the user put in. The script is not protected (using variables and abstractions), so entering the string ```2024 && ls``` would actually execute ```cal 2024 && ls```, giving you the output of ```cal``` (not interesting), and ```ls``` (VERY interesting).

The password file is located in that ```ls``` output. As above,```view-source``` and have fun. 

For people unfamiliar with the UNIX command line, ```ls``` basically lists all directories and files in the directory you are currently in. (Read directory = folder if from a Windows background).

### Level 8

> She recently learned about saving files, and she wrote a script to demonstrate her ability.

The script is a PHP file, with an I/O stream. This means this PHP script has the necessary permissions on the server to edit and save files, as well as execution permissions (```-rwxr-xr--```).

If you know PHP, you can essentially make it execute CLI commands if the file itself has the execution permissions (which we just saw it does). Typing in ```<!--#exec cmd="ls ../"-->``` will make the PHP script execute ```ls```, and you have the password file there. 

From here, ```view-source```.

### Level 9

> In the last level, however, in my attempt to limit people to using server side includes to display the directory listing to level 8 only, I have mistakenly screwed up somewhere.. there is a way to get the obscured level 9 password. See if you can figure out how...

Oh, did the author not mess up this badly. What this means for us is that the script in level 8, while initially supposed to only limit users to seeing the files of Level 8...actually has the above permissions for the whole directory. Which means you can just go back, and execute ```ls``` on the level 9 directory, instead of 8.

How to do so, I will leave up to you. Just remember, ```../``` hops 1 directory above. We know where the Level 8 script is (see the URL), and we know where Sam put the level 9 password (read the prompt carefully).

You got this!!

### Level 10

It seems that Sam has stopped writing in detail about his mishaps, which is probably for the better. The level is just a "Enter Password", and no other clues. 

When I was initially solving this puzzle, I was coming from Level 9. Upon successful completion of a level, the site just gives a button to the next level. So for the longest time, I was trying to solve this in a clean manner, and was a bit stumped. 

The hint lies in the Level description, which gets bypassed completely if you come from a previously successful level. Here it is:

> This time Sam used a more temporary and "hidden" approach to authenticating users, but he didn't think about whether or not those users knew their way around javascript...

JAVASCRIPT. Now, this is an interesting one.

So, the way your web browser actually stores authentication in the current day and time is using these things called Cookies. When you hit that "keep me signed in" button, and the auth is successful, the web server downloads a cookie in the context of your browser (a snippet of JavaScript code). 

This cookie stores a long encrypted string, that only the server has the key to decrypt and read. If the read is successful, the server knows that it is the same computer that was authenticated, and grants access. 

This is why you get logged out of sites when you clear all cookies. 

How are we saved in the real world if this cookie is what determines our identity?? Encryption!! The key to decrypt a password cookie lies only between the server and the client, nobody else. 

What is the one thing that Sam has not done throughout?? Encryption!!

While there is a JS way to see cookies in the console, modern browsers will also show you the cookies in a nicely arranged manner. For Chrome/Chromium browsers:

```F12 -> Application -> level10_authorized (this is Sam's cookie)```

And we see that Sam has NOT encrypted the value of this cookie at all (value: "no"). Update this to the equally unencrypted string "yes", reload, hit submit, enjoy.

(Cookies irl store more data than an (even encrypted) yes/no. Email addresses, passwords, device details, and so on. Don't worry, not only are they not human readable, they are also not readable by other computers: that's what encryption means. You need a key to decrypt an encrypted string, and 1. only the server and client has access to those, 2. these days even the keys are randomly generated). 

### Level 11

> Sam decided to make a music site. Unfortunately he does not understand Apache. This mission is a bit harder than the other basics.

Apache has directory traversal turned on by default. What this means is that if not configured properly, you can see the directory of the server via a URL that does not lead to a ```.html``` file (or ```.php```). 

All songs are Elton John songs when you reload his music app. Append ```/e/l/t/o/n``` to the end of the URL, and work your way backwards to the parent dir. You'll see what happens :)

<hr />

## Realistic

These are the solutions to the [Realistic](https://www.hackthissite.org/missions/realistic/) challenges on the site. Heavily recommend to stop reading here and give them a shot yourself if you haven't so already!! 