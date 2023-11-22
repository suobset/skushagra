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
        <!-- Note: don't tell people to `click` the link, just tell them that it is a link. -->
        If you are not redirected automatically, follow this <a href='https://suobset.github.io/iCons/iCons1-CS2'>link to example</a>. <!-- Change Link Here -->
    </body>
</html>
```
