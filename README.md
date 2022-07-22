# EMF Web Dev Task

EMF tech test using React, created using Create-React-App with TypeScript.
This project is a Circulytics Leaderboard displaying a list of companies, what industry they belong to, and their Circulytics score.

A user can add a new company and choose from a list of industries and select a score, then the list of companies can also be sorted by several parameters.

## Setup

This project requires `npm` to run

1. Clone the repo

2. Use `npm i` to install node_modules from project root

3. Use `npm run build` to generate build files

4. `npm install -g serve` & `serve -s build` to view the App in your browser.

## The Challenge

### Introduction

[Circulytics](https://ellenmacarthurfoundation.org/resources/circulytics/overview) is the Ellen MacArthur Foundation’s leading tool for measuring how circular an organisation is, and provides feedback in areas that they can improve. Organisations provide key information which can be used to calculate an overall score, as well as scores in different themes.

### Task 🎯

Your goal is to create a Circulytics leaderboard. This will be a single web page displaying a list of companies. We want to see their Name, Industry and Score:

- **Name** - a string of max-length 32 characters
- **Industry** - a single choice from the following list:
  - Agriculture,
  - Consumer/end products,
  - Energy,
  - Finance,
  - Infrastructure,
  - Services,
  - Transportation,
  - Upstream processing
- **Score** - a single decimal number between 0.0 and 1.0 (inclusive)

The page needs to support user input so companies can be added.

### Stretch goals 🤸🏻‍♀️

If you have sufficient time, exploring one or more of the following additional functionality would be great!

- search
- sort
- filter
- persistence
