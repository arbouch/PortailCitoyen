package com.example.demo.UserService;


import com.twilio.Twilio;
import com.twilio.http.HttpMethod;
import com.twilio.rest.api.v2010.account.Call;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
public class TwilioServiceImpl implements TwilioService{
	private String ACCOUNT_SID ="ACfc1a5b9de06b4e46910968cab9a0048c";
	private String AUTH_TOKEN ="e659f69e6081bc4147320b513a21ad69";
	@Override
	public void sendsms(String to, String from, String body) {
		// TODO Auto-generated method stub
		try {
			 Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
		        Message message = Message.creator( new PhoneNumber(to), new PhoneNumber(from),body) //        
 		            .create();

		        System.out.println(message);
		        System.out.println(message.getSid());

			}catch(Exception e) {
				
				e.printStackTrace();
				
			}
			
	}

}