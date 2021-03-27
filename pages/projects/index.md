---
title: Projects
type: page
---

These are some of my major open-source projects.

## standard-release

GitHub: [Symbitic/standard-release](https://github.com/Symbitic/standard-release)

I made this as an all-in-one command-line tool for managing software versioning and releasing.

It handles installing several git hooks that validate commit messages to conform to Conventional Commits format.

When creating a new release, it handles incrementing the project version file, adding a new CHANGELOG entry, committing the files, creating a new git tag, and pushing the tag upstream.

Support is planned in the future for uploading releases to GitHub.

## litexa-ts

GitHub: [Symbitic/litexa-ts](https://github.com/Symbitic/litexa-ts)

This is a work-in-progress fork of the Alexa Labs project [Litexa](https://github.com/alexa-games/litexa), a program for creating Alexa Skills using an english-like language.

The original Litexa is excellent, but it is written in Coffeescript, which is increasingly unmaintained and difficult to use. Litexa-ts is a refactor of the original into Typescript. Typescript is a more modern programming language that supports the new ES module syntax. It also adds type checking, making it much more suited to programming in the large.

The original litexa makes extensive use of Coffeescript's quips and heavily abuses the CommonJS require() syntax. This refactor into Typescript is not trivial.

## QSqlTest

GitHub: [Symbitic/QSqlTest](https://github.com/Symbitic/QSqlTest)

QSqlTest began life as an idea in my head. I conceived this tool during my job. We weren't allowed to use any software that wasn't approved by the higher ups (which meant next to no software libraries or frameworks). We used SQL for most tasks, but I was frustrated because testing was always done manually, which meant the developer was responsible for creating new test data and then running the tests and verifying the results were correct. I found it to be very slow and error-prone, since it was easy for developers to make mistakes in creating comprehensive tests for all their queries.

I asked myself: What would I do if I were allowed to use any software I wanted. QSqlTest is the result. It's a tool for automating acceptance testing of SQL queries. By providing a CSV file containing test data for the queries, QSqlTest is able to verify a SQL query meets the requirements by comparing the results after running the query to a CSV file containing the expected output. In the case of a SELECT statement, the records returned by the query are compared to the expected output. Otherwise, the table itself is compared against the expected output. A query only passes if the expected output meets the actual output.

Developers no longer have to handle creating test tables or executing statements. Another benefit is that it encourages separation of concerns, by encouraging a dedicated tester to create comprehensive test data before any programming takes place. Available as both a command-line tool and a GUI, QSqlTest can be used by both developers, testers, and 

## QtLego

GitHub: [Symbitic/QtLego](https://github.com/Symbitic/QtLego)

A Qt5 library for communicating with Smart LEGO Hubs.

Although not yet stable, it provides a simple, easy way of controlling LEGO's latest Bluetooth smart hubs.

## markbook

GitHub: [Symbitic/markbook](https://github.com/Symbitic/markbook)

Markbook enables writting entire books (including technical books) in CommonMark, the formally defined Markdown syntax. I managed to make achieve feature parity with mdBook, a similar software written in Rust, within 5 days. In that time, I managed to add support for generating PDF and EPUB output files.

## aws-transcribe-to-srt

GitHub: [Symbitic/aws-transcribe-to-srt](https://github.com/Symbitic/aws-transcribe-to-srt)

## timeline-of-terror

Website: https://timelineofterror.org/  
GitHub: [Symbitic/timeline-of-terror](https://github.com/Symbitic/timeline-of-terror)

I was inspired to create this while working at my government job, but I must stress: **THIS IS NOT CONDONED OR ENDORSED BY THE UNITED STATES GOVERNMENT IN ANY WAY. THIS IS MY PERSONAL PROJECT.**

Timeline of Terror is guideline to the events of September 11th, 2001. It is meant to be a modernization of the [Terror Timeline](https://en.wikipedia.org/wiki/The_Terror_Timeline) project started by Paul Thompson. The Terror Timeline is an amazingly detailed minute-by-minute guide to the events of September 11th, but it is very old. The website itself is built in JavaServerPages and MySQL, and the cost of hosting has been stated to run into hundreds (if not thousands) of dollars every month.

The Timeline of Terror was built from the ground up to be responsive. September 11th was the defining moment for the United States as we know it. Information about it should be accessible to everyone. That means it should provide a first-rate experience even on mobile devices.

I built this website using Gatsby, a static site generator that uses React and GraphQL. Hosting is provided by Netlify. The total cost (including the cost of the timelineofterror\.org domain) is no more than $12/year.

