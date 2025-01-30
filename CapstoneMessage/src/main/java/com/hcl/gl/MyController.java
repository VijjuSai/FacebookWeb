package com.hcl.gl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hcl.gl.entitymsg.Message;

import com.hcl.gl.message.MessageImpl;
import com.hcl.gl.user.UsersService;

@RestController
public class MyController {

	@Autowired
	UsersService userImpl;

	@Autowired
	MessageImpl msgImpl;

	// TO store message in database
	@GetMapping("/addmessage")
	public void addMessage(String from, String to, String content) {

		msgImpl.addMessage(content, from, to);
	}

	// To get message with to be sended user id
	@GetMapping("/getmessage")
	public List<Message> getMessage(int id) {
		return msgImpl.findMessage(id);
	}

	// To get all message
	@GetMapping("/getall")
	public List<Message> getall(String name) {
		return msgImpl.getall();
	}
}
