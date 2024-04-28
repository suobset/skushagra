---
sidebar_position: 3
---

# Scripting Shenanigans 

My favourite scripting language is [Python](https://python.org), only because how simple, yet powerful the whole thing is. From creating ML scripts, Data Visualizations, Native Programs...to creating a GNU GDB helper to trace x86 Assembly, change OS files, or just break your system...Python is flexible enough to go from Bash Scripting paradigms to full-blown programming language. 

Thus, whenever ideas strike, I turn to Python to bring them to life. Least effort, maximum yield (albeit, at the cost of efficiency and performance). 

However, sometimes you just have to use the best tool for the job. Some of them are in alternate languages, just because it's the easiest given that language.

This is a page to store these scripts, Python or otherwise. All scripts under this page are under the MIT License.

Disclaimer: Please Read [About Code Projects in the Finechive](./code-projects) for more info.

## MIT License

Copyright 2023, Kushagra Srivastava

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## BibTeX Breaker

One of the tasks I had at the [LinKaGe Lab](http://linkage.cs.umass.edu) pertained to creating a new web-based Bibliography, and import the entire corpus of LinKaGe Lab documents to the new bibliography system. I used [Wikindx](https://wikindx.sourceforge.io/web/trunk/index.html) for the storage management solution, but could not directly import the 45,000 line BibTeX file (memory overflow).

The following is a Python Script that reads in a big BibTeX file, and breaks it down to 1000 + the location of the last close brace for the current entry each. 

The big aspect of the code is to not break any entries, as they get lost. Once the 1000 lines have been reached, we need to find the last closing brace for the entry we are currently on, and cut the document there. 

Regex to the rescue :)

```py
import re

def split_bibtex(input_file, chunk_size):
    with open(input_file, 'r', encoding='utf-8') as file:
        content = file.read()

    entries = re.split(r'(?=@\w+{)', content)[1:]

    for i, chunk in enumerate(range(0, len(entries), chunk_size), start=1):
        output_file = f'part_{i}.bib'
        with open(output_file, 'w', encoding='utf-8') as file:
            file.write('@comment{This file is part of the original BibTeX file.}\n\n')
            file.write(''.join(['@'+entry for entry in entries[chunk:chunk+chunk_size]]))

if __name__ == "__main__":
    split_bibtex('yourfile.bib', 1000)
```

## .ZoneIdentifier Deleter

Don't you love the Windows-created ```.ZoneIdentifier``` spam that it uses to detect internet-downloaded things?? Well, when you move it to a UNIX system, these files serve no purpose (except to clog up your working directory, and spam when you try to ```ls```). 

Here's a handy **Python** script to get rid of those, run this at the root of your working directory :)

```py
# Script to delete the Zone Identifier spam Windows loves so much when trying to work on WSL.
# Kush S. | 9/18/2023

import os

def delete_files_with_extension(directory, extension):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(extension):
                file_path = os.path.join(root, file)
                try:
                    os.remove(file_path)
                    print(f"Deleted: {file_path}")
                except Exception as e:
                    print(f"Error deleting {file_path}: {e}")

if __name__ == "__main__":
    target_directory = "./"
    file_extension = "Zone.Identifier"

    if os.path.isdir(target_directory):
        delete_files_with_extension(target_directory, file_extension)
        print(f"All {file_extension} files have been deleted.")
    else:
        print("The specified directory does not exist.")
```

## Simple Web Redirect

HTML/JS Script to redirect users to a new URL, without making Chrome/Firefox go crazy with the "pop up blocked" situation:

```html
<!-- Simple Script to Redirect to new Website-->
<!-- if a person visits the old link by accident-->
<!-- Created by Kush Srivastava, May 2022-->
<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="refresh" content="0; url=https://suobset.github.io/iCons/iCons1-CS2"> <!-- Change URL Here -->
        <script type="text/javascript">window.location.href = "https://suobset.github.io/iCons/iCons1-CS2"</script> <!-- Change URL Here -->
        <title>Page Redirection</title>
    </head>
    <body>
        If you are not redirected automatically, follow this <a href='https://suobset.github.io/iCons/iCons1-CS2'>link to example</a>. <!-- Change Link Here -->
    </body>
</html>
```

## MouseBot Brute Force Web Scraper

One of my most brute-force solutions to a problem. We had a GIS database with about 1500 datasets, and we needed to download all the datasets. Unfortunately, the website did not have a "download all" button. All datasets were presented in a list, with a download button on the right to download each of them; but there was no option to download all of them at once. 

I had the idea of clicking down arrow, and hitting download for each dataset. I created a "Mouse Bot" on Python, which basically clicks the down arrow to go to the next dataset, and then clicks the button with ```id=download``` as retrieved from the HTML code of the tool. Hence, you get all your datasets downloaded physically, as if someone sat down and clicked the "Download" button for each and every dataset.

Requires an installation of Selenium, Chromium, and the Chrome Driver for Automation purposes. Requires the user to change relevant parts of the code with the actual ID of the button in the HTML code as well; and for the user to set a default download path instead of the computer asking where to download. Honestly, pretty unhinged but it works (manually clicks on each dataset and downloads it)

```py
# MouseBot by kush
# A bot that controls your mouse on a new Chromium Window.
# Coded to facilitate data scraping in an easy way.

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Set the URL of the webpage you want to interact with
url = "https://gem.anl.gov/tool"  # Replace with your target URL

# Set the path to your web driver (e.g., ChromeDriver)
driver_path = "/media/suobset/Kush testBench/GitHub/iCons-DOE-TOP/chromedriver"  
# Download from https://sites.google.com/chromium.org/driver/

# Initialize the web driver
driver = webdriver.Chrome()

# Navigate to the webpage
driver.get(url)

# Define a function to perform the repetitive actions
def perform_actions():
    try:
        # Locate and click on the dataset element (you may need to inspect the webpage to get the appropriate selector)
        dataset_element = driver.find_element(By.CSS_SELECTOR, "div.module_button[phx-click='catalog-toggle']")
        dataset_element.click()

        start_component = 3
        end_component = 1000
        # Click Model Input and Model Output
        time.sleep(5)
        # Declare element_to_click outside of the loop
        element_to_click = None

        # Iterate through the range and click on elements
        for component_id in range(start_component, end_component + 1):
            # Construct the CSS selector based on the component_id
            selector = f"tr[data-phx-component='{component_id}']"

            try:
                # Find the element by its CSS selector
                element_to_click = driver.find_element(By.CSS_SELECTOR, selector)

                # Click the element
                element_to_click.click()

            except Exception as e:
                print(f"Error clicking element with data-phx-component={component_id}: {str(e)}")

            try:
                if True:
                    print("HERE1")
                    # Find and click the "Download" button within the element
                    download_button = driver.find_element(By.XPATH, ".//button[contains(., 'Download')]")
                    download_button.click()
                    time.sleep(1)
            except Exception as e:
                print(f"Error clicking Download: {str(e)}")

        time.sleep(1)  # Wait for 1 second (adjust as needed)

    except Exception as e:
        print("An error occurred:", str(e))

# # Define the number of repetitions
# num_repetitions = 1  # Change as needed

# # Perform the actions repeatedly
# for _ in range(num_repetitions):
#     perform_actions()

perform_actions()
# To facilitate downhloading. If all downloaded, stop this cell manually (do not just exit browser)
time.sleep(1000)
# Close the web driver
driver.quit()
```

## DelCookies

My personal website has the habit of storing cookies and cached versions on different computers (just like any computer or web browser). However, it becomes irritating whenever I update my website, because I do not have a method of telling the computer/client that there is a new update (GH pages does not handle caching well). Unless reloaded various times, or having deleted cached data from the browser, there is no easy sure-shot way of getting a new non-cached version of the website ASAP right after I push it to GH Pages.

This simple **JavaScript** deletes all cookies and cached data for your specific website on a browser. Just add it in the ```<head>``` of ```index.html```, and let it do its thing. All it does is make all cookie expiration dates to a second after UNIX Epoch Time (1-1-1970 00:00:01 GMT), so that the web browser discards them automatically. It is, really, that janky...but it works. 

**Use only if you do not need to store any cookies**, such as a portfolio website like mine. Moreover, it is always much nicer to follow proper caching practices instead of doing this stupid bodge. I just do this because low maintainance + gets job done for a portfolio website on GH Pages. 

PS: I used to use it up until I shifted to Docusaurus for this website, which handles Caching amazingly well. 

Again, this is a bodge. Good temporary solution, preferably go all the distance so that you do not have to lose all the cookies and data, and get faster load times and less server stress. Not really a good practice to set anything to 1-1-1970, but **this is a temporary solution not for commercial purposes**. 

```js
(function() {
    // Get all cookies
    var allCookies = document.cookie.split("; ");
    for (var cookieIndex = 0; cookieIndex < allCookies.length; cookieIndex++) {
        // Split cookie into key-value pair
        var cookieParts = allCookies[cookieIndex].split("=");
        var cookieName = encodeURIComponent(cookieParts[0]);
        var cookieValue = cookieParts[1];
        // Split hostname into domain parts
        var domainParts = window.location.hostname.split(".");
        // Iterate over domain parts
        while (domainParts.length > 0) {
            // Build cookie base for deletion
            var cookieBase = cookieName + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + domainParts.join('.') + '; path=';
            var pathParts = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            // Iterate over path parts
            while (pathParts.length > 0) {
                document.cookie = cookieBase + pathParts.join('/');
                pathParts.pop();
            }
            domainParts.shift();
        }
    }
})();
```

## Embeddings for UMaring

I have recently joined the [UMass Webring](https://github.com/umaring/umaring) which consists of personal websites of UMass Students, Faculty, and anyone affiliated with the university under any domain. Some people rely on web development providers like Wix, or static site generators like Docusaurus to make and host their websites.

UMaring works by embedding a webring script on your HTML file, and using your ID to provide the specific Webring links on your homepage (the page next to your website, and before your website). Here's the script from UMaring's website, which is added to your HTML file:

```html
<script id="umaring_js" src="https://umaring.hamy.cc/ring.js?id=ID"></script>
<div id="umaring"></div>
```

### The Problem with Wix

Wix takes any Embedded code, and puts it in an iframe (for reasons unknown to anyone but them). This means that clicking the links will open the next person's website in the iframe, and not in a tab/window (thus breaking the whole purpose).

If you have a Wix website (or any website created by a "builder" that puts the aforementioned script in an iframe), use this incredibly simple script to ensure that links open in a new tab. We essentially grab the 'UMaring' div and dynamically modify the DOM by adding the ```target: _blank``` attribute, ensuring that links opens in a new tab.

All you need to do is click the Embed Code Option in Wix when adding this element, and instead of the above 2 lines, add this chunk. Be sure to update your ID accordingly as well (the last 2 lines here are the same ones above).

```html
<!-- DOM Manipulation to have UMaring links open in a new tab -->
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const webringContainer = document.getElementById('umaring');
        
        if (webringContainer) {
            webringContainer.addEventListener('click', (event) => {
                const target = event.target;
                
                // Check if the clicked element is a link inside the umaring div
                if (target.tagName === 'A' && target.closest('#umaring')) {
                    event.preventDefault(); // Prevent the default link behavior
                    window.open(target.href, '_blank'); // Open the link in a new tab
                }
            });
        }
    });
</script>
<!-- Update your ID here -->
<script id="umaring_js" src="https://umaring.hamy.cc/ring.js?id=ID"></script>
<div id="umaring"></div>
```

### The Problem with Docusaurus (or React, in general)

React MDX does not behave well with HTML/JS scripts, at all. To have the Webring on this website, I pretty much had to build my own implementation using Hammy's API as mentioned in UMaring.

Here is the main doc:

<hr />

**Building your own integration**

Please integrate with the following API: GET https://umaring.hamy.cc/:id This will return a JSON object with the following format:

```json
{
    "prev": {
        "id":"usera",
        "name":"User A",
        "url":"https://usera.com"
    },
    "member": {
        "id":"userb",
        "name":"User b",
        "url":"https://userb.com"
    },
    "next": {
        "id":"userc",
        "name":"User C",
        "url":"https://userc.com"
    }
}
```

<hr />

This website fetches this JSON on load, and then populates the Webring links. Here's my script for doing so:

```js
import React, { useState, useEffect } from 'react';

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
      </div>
    </section>
  );
}
```

The above is in the context of [Docusaurus](https://docusaurus.io), on the index.js page. In my homepage, it is implemented right alongside the other elements on that homepage, but it can also be independently implemented and referred to as an object. The process remains the same for all React MDX websites.

If you're curious about what my actual homepage's code looks like, [here's a link](https://github.com/suobset/skushagra/blob/main/src/components/HomepageFeatures/index.js).