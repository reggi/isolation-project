# Isolation

Context:
> https://dev.to/reggi/proposing-a-new-way-to-write-javascript-7km
> https://twitter.com/thomasreggi/status/1374017124520361993
> https://stackoverflow.com/questions/66748836/using-vscode-text-editor-within-webview

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z5r9ue9olcsiyh8z08k1.png)

This is a demo of an "isolation" project. 

All of the files / folders of this project are handled by a VSCode plugin called "Isolation".

Install the plugin, and open up the `.isolation` file in the root of the project. 

Hide the normal Explorer window, and voila. A brand new way to interact with JavaScript Code.

## YAML interpreter

All function metadata is stored in the `.isolation` file this tells the extension what functions are where via groupings.

When you create a new function, all that happens is a new function is created in `isolation.functions/` with a new uuid. This uuid is added to the `.isolation` (yaml) file.

The function remains in global scope until it is given a identifier. Functions can be given multiple identifiers.


