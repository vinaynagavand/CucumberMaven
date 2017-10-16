package com.CucumberMaven;

//import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	
	
	//modify and commit to git
	
	@Given("^user has launched the Fidelity charitable website$")
public void user_has_launched_the_Fidelity_charitable_website() throws Throwable {
    System.out.println("1");
   // throw new PendingException();
}

@When("^he clicks on login button$")
public void he_clicks_on_login_button() throws Throwable {
	System.out.println("2");
   // throw new PendingException();
}

@When("^enter incoorect ID and password$")
public void enter_incoorect_ID_and_password() throws Throwable {
	System.out.println("3");
    //throw new PendingException();
}

@Then("^system should throw an error$")
public void system_should_throw_an_error() throws Throwable {
	System.out.println("4");
    //throw new PendingException();
}

@Then("^should not let user login$")
public void should_not_let_user_login() throws Throwable {
	System.out.println("5");
    //throw new PendingException();
}


}
