package com.xh.mall.job.security;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;

import java.io.Serializable;
import java.util.Map;

/**
 * TODO
 *
 * @auther xh
 * @date 4/25/19 4:17 PM
 */

@Configuration
public class XmallPermissionEvaluator implements PermissionEvaluator {

    private static final Logger log = LoggerFactory.getLogger(XmallPermissionEvaluator.class);

    @Override
    public boolean hasPermission(Authentication authentication, Object o, Object o1) {
        log.info("authentication:{} target:{} permission:{}", authentication.toString(), o.toString(), o1.toString());
        if (authentication != null) {
            Object details = authentication.getDetails();
            if (details instanceof OAuth2AuthenticationDetails) {
                Object decodedDetails = ((OAuth2AuthenticationDetails) details).getDecodedDetails();
                if (decodedDetails != null && decodedDetails instanceof Map) {
                    String detailFoo = (String) ((Map) decodedDetails).get("foo");
                    if ("foo".equals(detailFoo)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override
    public boolean hasPermission(Authentication authentication, Serializable serializable, String s, Object o) {
        log.info("authentication:{} target:{} permission:{}", authentication.toString(), s, o.toString());
        return authentication.getName().equals("user");
    }
}
