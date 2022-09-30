Feature: The Payup webpage

  Scenario: As a user, I test the wrong OTP login page

    Given I am on the login page
    When I login with phonenumber
    Then I should get OTP

    
