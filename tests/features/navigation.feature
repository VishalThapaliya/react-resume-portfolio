@navigation @smoke
Feature: Website navigation
    As a visitor
    I want to navigate between the different pages
    So that I can explore the portfolio website

    Background:
        Given the visitor opens the portfolio website

    Scenario Outline: Navigate to a page using the main navigation
        When the visitor selects "<page>" from the main navigation
        Then the browser URL should end with "<path>"
        And the "<page>" navigation link should be active

        Examples:
        | page          | path         |
        | About         | /about       |
        | Resume        | /resume      |
        | Portfolio     | /portfolio   |
        | Blog          | /blog        |
        | Contact       | /contact     |

    Scenario: Redirect the root URL to the About page
        Then the browser URL should end with "/about"
        And the "About" navigation link should be active

    Scenario: Redirect an unknown route to the About page
        When the visitor opens an unknown page
        Then the browser URL should end with "/about"
        And the "About" navigation link should be active