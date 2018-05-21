package com.example.UIFunctionalTests;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.Test;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;



@RunWith(SpringRunner.class)
@SpringBootTest
public class UIFunctionalTests {

    @Test
    public void uiFunctionalTests(){
    System.setProperty("selenide.browser", "Chrome");

    open("http://localhost:4200/admin");
    $("body").shouldHave(text("Manage Users"));

        int initialUserCount =  $$(".userTile").size();

    //Testing Add User
    open("http://localhost:4200/adduser");
        $(By.name("userName")).sendKeys("TestUserName");
        $(By.name("firstName")).sendKeys("FirstName");
        $(By.name("lastName")).sendKeys("LastName");
        $(By.name("email")).sendKeys("email");

        $(By.id("addUserButton")).click();
        open("http://localhost:4200/admin");
        $$(".userTile").shouldHaveSize(initialUserCount+1);


        //Test Delete user
        $(By.cssSelector(".deleteButton:last-of-type")).click();
        $$(".userTile").shouldHaveSize(initialUserCount);

}


}
