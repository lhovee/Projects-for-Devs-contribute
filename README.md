# Projects-for-Devs-contribute

This repo contains the project JSON objects that are used in Projects for Devs https://www.projects-for-devs.com and is the means for contributing project ideas to be included in the website.

## What is Projects for Devs?

Projects for Devs is a minimalist impression of a project management
tool aiding Software Developers in the creation of their project
portfolio. It comes with ready made projects for you to journey through.

Just pick a project and go. Projects for Devs is like a repository for
software project ideas except the projects are broken into stories
complete with story points, requirements, and designs. Project tags
allow for selecting the right project for your skill level and desired
tech stack.

After starting a project you'll move stories through stages on a project board. This workflow mirrors project management software you'll see time and time again throughout you're development career.

When projects are completed you can also save a link to your code or
project and share your profile page. This gives you a project portfolio out of the box with no setup on your end.

You can see these projects in all their glory at
https://www.projects-for-devs.com

## Contribution

Have a project idea and want to contribute? Thank you! Your idea will help other people have an easier time getting into software development. If your experience has been anything like mine then you owe a lot of people thanks for helping you on your journey. By giving back we honor their gift.

1. copy/paste ./projects/projectsBlank.json and rename the copy to whatever you'd like.
2. use that template to create your project.
3. submit a PR!

More info:

- the more detail you include the better and the closer you get your idea to a finished product the easier it will be for me to include in Projects for Devs
- if you can inlcude images of your design idea that is ideal. I'm not a designer but I've created all the assets using sketch because I needed to. I actually enjoyed the process. Not including assets will greatly slow the PR acceptance process.
- ideaCredit is the field that will credit you with the project idea. If you'd like to remain annonymous you can omit that field.

Calculating Total Story Points (if you don't want to do math yourself)

- in `./projects/calculateProjectTotalStoryPoints.js` import your project JSON file and include that import in the `const projects` array.
- running `yarn run calculate` from the `projects` root will console log all the project names and total story points.
