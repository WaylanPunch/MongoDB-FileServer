package com.waylanpunch.mongodbfileserver.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Hello 控制器.
 *
 * @since 2019年7月27日 20:29:55
 * @author <a href="https://github.com/WaylanPunch">Waylan Punch</a>
 */
@RestController
public class HelloController {

	@RequestMapping("/hello")
	public String hello() {
	    return "Welcome to visit https://github.com/WaylanPunch";
	}
}
