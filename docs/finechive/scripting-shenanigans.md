---
sidebar_position: 7
---

# Scripting Shenanigans 

My favourite scripting language is [Python](https://python.org), only because how simple, yet powerful the whole thing is. From creating ML scripts, Data Visualizations, Native Programs...to creating a GNU GDB helper to trace x86 Assembly, change OS files, or just break your system...Python is flexible enough to go from Bash Scripting paradigms to full-blown programming language. 

Thus, whenever ideas strike, I turn to Python to bring them to life. Least effort, maximum yield (albeit, at the cost of efficiency and performance). 

However, sometimes you just have to use the best tool for the job. Some of them are in alternate languages, just because it's the easiest given that language.

This is a page to store these scripts, Python or otherwise. All scripts under this page are under the MIT License.

## MIT License

Copyright 2023, Kushagra Srivastava

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

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
