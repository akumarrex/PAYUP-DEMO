Feature: The Payup webpage

  Scenario: As a user, I test the Login page with wrong OTP

    Given I am on the login page
    When I login with phonenumber
    Then I should get OTP

    
