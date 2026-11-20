@portfolio @smoke
Feature: Portfolio project filtering
    As a visitor
    I want to filter portfolio projects by category
    So that I can easily find projects relevant to my interests

    Background:
        Given the visitor opens the Portfolio page

    Scenario: Display all projects by default
        Then the "All" filter should be selected
        And all portfolio projects should be displayed

    Scenario Outline: Filter projects by category
        When the visitor selects the "<category>" filter
        Then the "<category>" filter should be selected
        And only projects belonging to the "<category>" category should be displayed

        Examples:
            |   category                |
            |   Web development         |
            |   Web design (UI)         |
            |   Application             |
            |   QA & Software Testing   |

    Scenario: Return to all projects after applying a filter
        When the visitor selects the "QA & Software Testing" filter
        And the visitor selects the "All" filter
        Then the "All" filter should be selected
        And all portfolio projects should be displayed