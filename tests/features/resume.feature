@resume @smoke
Feature: Resume page content
    As a visitor
    I want to review the professional resume
    So that I can understand the candidate's experience, education, and technical skills

    Background:
        Given the visitor opens the Resume page

    Scenario Outline: Display the main Resume sections
        Then the "<section>" section should be visible

        Examples:
        |   section                 |
        |   Professional Profile    |
        |   Professional Experience |
        |   Education               |
        |   Technical Skills        |

    Scenario: Display the QA Automation Engineer experience
        Then the "QA Automation Engineer" position should be visible
        And the "Ofelia (formerly Bonitasoft)" company should be visible

    Scenario: Include relevant test automation skills
        Then the "Playwright" skill should be listed in Technical Skills
        And the "Cypress" skill should be listed in Technical Skills
        And the "Selenium" skill should be listed in Technical Skills
        