package com.xh.mall.job.web.rest;

import com.xh.mall.job.security.AuthoritiesConstants;
import com.xh.mall.job.security.PermissionConstants;
import com.xh.mall.job.security.PermissionTargetConstants;
import org.springframework.security.access.prepost.PreAuthorize;
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
//@PreAuthorize("hasRole(\"" + AuthoritiesConstants.USER + "\")")
@PreAuthorize("hasPermission(\"" + PermissionTargetConstants.ORDER + "\",\"" + PermissionConstants.LIST + "\")")
public class JobController {

    @GetMapping("/list")
    public String jobs() {
        return "jobs";
    }
}
