###steps to create the issue

1. Create a basic nextjs project using create-next-app
2. Remove the content on index page. Removed the styles associate to the index page via css modules.
3. npm install --save antd
4. imported the antd css(default theme) in the global.css file of next.js project.
5. Add 2 title elements of Antd typography to the index page.
6. use css modules and a className to set the title color to red.

###Issue - when running the dev environment the css module styles are over written by global css of antd.
so unable to apply css customisations using css modules.
Logically global css should be applied across the project and css modules for each component should override the global css to give the customization at component level.

Using !important for each css styling does help. But having !important added to every line for a large project is not a scalable solutions.
Please help.
