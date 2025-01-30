package com.hcl.gl.user;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.gl.entitymsg.Users;;

public interface UsersRepo extends JpaRepository<Users,Integer> {

}
