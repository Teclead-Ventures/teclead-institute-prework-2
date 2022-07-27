# Teclead Institute Prework Part 2 – JavaScript Fundamentals

## Setting up your dev environment

You will need to have installed:

- [VS Code](https://code.visualstudio.com/download)
- node.js using nvm (node version manager) – _see Tips & Resources section below_.

## Getting started

- **fork** this repository on GitHub and **clone** it to your computer. _See Tips & Resources section if this seems unfamiliar_.
- run `npm install` in the root directory of the repository to install all the dependencies

## Instructions

This project is divided into five sections (we suggest you do them in order):

1. warmup
2. types
3. arrays
4. objects
5. functions

> **Your task is to complete the challenges for each section and get all of the tests to pass.**

Each section is in a seprate directory. Each directory contains two files:

1. a file containing the challenges and instructions for that section (e.g. `warmup.js`)
2. a file containing the tests for that section (e.g. `warmup.test.js`)

To run all of the tests for all of the sections, run `npm test` or `npm t`.

To run the tests for a specific section, run `npm test <section>` or `npm t <section>`. For example, `npm test warmup` or `npm t warmup`.

When you are done, push your code to GitHub and send us the link to the repository so we can review it.

## Tips & resources

### Installing node.js

#### For Windows

If you're running windows, use the official installer from the [Node.js site](https://nodejs.org/en/). Choose the latest LTS (Long Term Support). This is version 16.16.0 as of 27 July 2022.

### For everyone else (mac, linux, etc.)

Install Node.js with [nvm](https://github.com/nvm-sh/nvm) (node version manager). NVM allows you to install many versions of Node.js at once and switch when you need. _Trust us, you will need to do this_. For the simplest installation, run the first `curl` command found [here](https://github.com/nvm-sh/nvm#installing-and-updating).

Once you have nvm installed, you need to install a Node version. You can download the latest LTS (Long Term Support) version with this command.

`nvm install --lts`

### Git

Make sure you regularly commit your progress.

Use the `git status` command to see what files have changed.

Use the `git diff` command to see exactly what changes have been made to those files.

Use the `git add .` command to add all of the files that have changed to your commit.

Then use the `git commit` command to commit your changes. Make sure you include a commit message. You can do this with the `-m` or `--message` flag. For example: `git commit -m "My commit message"`. Or `git commit --message "My commit message"`.

Check out the [git-scm](https://git-scm.com/doc) site for a comprehensive guide to getting started with and using Git. _Note that it goes far beyond the basics you'll need for this project_. If you go through the [online book](https://git-scm.com/book/en/v2) to the end of section "2.4 Undoing Things", you will have covered more than everything you'll need.

For using Git to interact with your GitHub repository, check out these parts of the GitHub documentation: [Quickstart](https://docs.github.com/en/get-started/quickstart) [Pushing commits to a remote repository](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository).
