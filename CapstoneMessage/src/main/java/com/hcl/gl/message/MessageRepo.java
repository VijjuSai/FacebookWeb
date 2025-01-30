package com.hcl.gl.message;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.gl.entitymsg.Message;

public interface MessageRepo extends JpaRepository<Message,Integer> {

}
