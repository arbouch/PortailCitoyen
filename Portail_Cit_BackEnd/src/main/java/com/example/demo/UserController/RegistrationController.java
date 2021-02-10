package com.example.demo.UserController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.UserModel.User;
import com.example.demo.UserService.RegistrationService;

@RestController
public class RegistrationController {
	
	@Autowired
	private RegistrationService service;

	@PostMapping("/registerUser")
	@CrossOrigin(origins ="http://localhost:4200")
	public User registerUser(@RequestBody User user) throws Exception {
	String TempemailId = user.getNumtel();
	if(TempemailId != null && !"".equals(TempemailId)) {
	User userobj =service.fetchUserBynumtel(TempemailId);
	if (userobj != null ) {
		throw new Exception("user already existed ");
	}
	}
	 User userObj = null;
	 service.saveUser(user);
	 return userObj;
	 
 }
	
	@PostMapping("/login")
	@CrossOrigin(origins ="http://localhost:4200")
	public User loginUser(@RequestBody User user) throws Exception  {
		String tempnumtel = user.getNumtel();
		int tempcin = user.getCin();
		User userobj = null; 	
		if (tempcin != 0 && tempnumtel != null) {
			userobj = service.fetchUserBynumtelAndcin(tempnumtel, tempcin);
	
		}
		if( userobj == null ) {
			throw new Exception("user not found");
		}
		return userobj;
	}
	
}