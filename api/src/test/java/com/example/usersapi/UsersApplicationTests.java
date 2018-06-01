package com.example.usersapi;

import com.example.usersapi.controllers.UsersController;
import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UsersApplicationTests {

    @Autowired
    private UsersController usersController;
    long userCount =0;
    private static User returnedUser;

	@Test
    public void canGetAllUsers(){

	    userCount = usersController.getUserCount();
	    assertThat(userCount).isGreaterThan(0);

	}

	@Test
	public void canAddUser(){

        userCount = usersController.getUserCount();
	    User newUser = new User();
	    newUser.setFirstName("FIRST_NAME");
	    newUser.setLastName("!!LAST_NAME!!");
	    newUser.setEmail("EMAIL");
	    newUser.setUserName("USER_NAME");
	    newUser.setPassword(("PASSWORD"));
        returnedUser = usersController.createNewUser(newUser);
        long newUserCount =usersController.getUserCount();

        assertThat(newUserCount).isEqualTo(userCount+1);

    }

    @Test
    public void canDeleteUser(){

	    Iterable<User> userToDelete = usersController.findByLastName("!!LAST_NAME!!");

	    for(User user: userToDelete){
            long userId = user.getId();
            userCount = usersController.getUserCount();
            usersController.deleteUserById(userId);
            long newUserCount = usersController.getUserCount();
            assertThat(newUserCount).isEqualTo(userCount-1);
        }
    }


}
