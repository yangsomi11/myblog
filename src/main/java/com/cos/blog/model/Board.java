package com.cos.blog.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Board {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = false, length = 100)
	private String title;
	
	@Lob //대용량 데이터
	private String content; // 섬머노트 라이브러리 <html> 태그 섞여서 디자인.
	
	@ColumnDefault("0")
	private int count; //조회수
	
	@ManyToOne  //Many = Board , User = One -> 한명에 User에의해 Board생성
	@JoinColumn(name = "userId")
	private User user; //DB는 오브젝트 저장X -> FK, 자바는 오프젝트 저장 가능
	
	@CreationTimestamp
	private Timestamp createDate;
}
