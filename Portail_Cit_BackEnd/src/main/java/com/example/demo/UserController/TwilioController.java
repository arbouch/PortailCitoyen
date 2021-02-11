package com.example.demo.UserController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.UserService.TwilioService;

public class TwilioController {

	
	
	@Autowired
	TwilioService twilioservice;
	@GetMapping("/sendsms")
	public String sendsms() {
		String body="";
		String to="";
		String from ="";
		twilioservice.sendsms(to,from,body);
		return "message sent";
	}
	
}
