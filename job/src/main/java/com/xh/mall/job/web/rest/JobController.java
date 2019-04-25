package com.xh.mall.job.web.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * TODO
 *
 * @auther xh
 * @date 4/24/19 8:28 PM
 */
@RestController
@RequestMapping("/api")
public class JobController {

    @GetMapping("/list")
    public String jobs() {
        return "jobs";
    }
}
