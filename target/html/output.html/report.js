$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login function in the Fidelity App",
  "description": "",
  "id": "login-function-in-the-fidelity-app",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User is unable to login with incorrect ID",
  "description": "",
  "id": "login-function-in-the-fidelity-app;user-is-unable-to-login-with-incorrect-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user has launched the Fidelity charitable website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter incoorect ID and password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "system should throw an error",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "should not let user login",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_has_launched_the_Fidelity_charitable_website()"
});
formatter.result({
  "duration": 267424300,
  "status": "passed"
});
formatter.match({
  "location": "Login.he_clicks_on_login_button()"
});
formatter.result({
  "duration": 557539,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_incoorect_ID_and_password()"
});
formatter.result({
  "duration": 1043282,
  "status": "passed"
});
formatter.match({
  "location": "Login.system_should_throw_an_error()"
});
formatter.result({
  "duration": 455385,
  "status": "passed"
});
formatter.match({
  "location": "Login.should_not_let_user_login()"
});
formatter.result({
  "duration": 374564,
  "status": "passed"
});
});