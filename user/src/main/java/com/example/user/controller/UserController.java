package com.example.user.controller;

import com.example.user.entity.User;
import com.example.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * TODO
 *
 * @auther xh
 * @date 4/18/19 4:27 PM
 */
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public String getUser(@PathVariable Long id) {
        User user = userService.find(id);
        return user.toString();

    }

    @GetMapping("/add")
    public String addUser(@RequestParam String userName) {
        User u = new User();
        u.setUserName(userName);
        User user = userService.save(u);
        return user.toString();

    }
}
