package com.hcl.gl.message;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import com.hcl.gl.entitymsg.Message;
import com.hcl.gl.entitymsg.Users;
import com.hcl.gl.user.UsersRepo;


@Service
public class MessageImpl {

	@Autowired
	MessageRepo repo;

	@Autowired
	UsersRepo userrepo;

	// To add messsage in database
	public void addMessage(String content, String from, String to) {

		Users fromUsers = findUsers(from);
		Users toUsers = findUsers(to);
		Message message = (Message.builder().content(content).fromuser(fromUsers).touser(toUsers)
				.date(LocalDateTime.now()).build());
		repo.save(message);
		System.out.println(message.toString());

	}

	// TO find get Users(object) with name
	public Users findUsers(String name) {

		Users Users = null;

		Users sample = new Users();
		sample.setName(name);
		// verifying name is present
		ExampleMatcher em = ExampleMatcher.matching()
				.withMatcher("name", ExampleMatcher.GenericPropertyMatchers.exact())
				.withIgnorePaths("id", "password", "phone", "email", "gender");
		Example<Users> temp = Example.of(sample, em);

		List<Users> list = userrepo.findAll(temp);
		for (Users UsersList : list) {

			Users = UsersList;
			break;
		}

		return Users;

	}

	// To find message with to be sended Users id
	public List<Message> findMessage(int id) {

		List<Message> UsersMessage = new ArrayList<>();
		List<Message> list = repo.findAll();
		// Message message = new Message();
		for (Message temp : list) {

			if ((temp.getTouser()).getId() == id) {
				Message message = new Message();
				// message.setContent("");
				// message.setDate(null);
				message.setId(temp.getId());
				//message.setFromuser(temp.getFromuser().getName());
				message.setContent((temp.getFromuser().getName() + " : " + temp.getContent()));
				message.setDate(temp.getDate());
				UsersMessage.add(message);

			}
		}

		return UsersMessage;
	}

	// To get all message
	public List<Message> getall() {
		return repo.findAll();

	}
}
