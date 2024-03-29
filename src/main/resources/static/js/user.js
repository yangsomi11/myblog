let index = {
	init: function() {
		$("#btn-save").on("click", () => {	//function(){}  , ()=>{} this를 바인딩하기 위함
			this.save();
		});
		
		$("#btn-update").on("click", () => {	//function(){}  , ()=>{} this를 바인딩하기 위함
			this.update();
		});
	},


	save: function() {
		//alert('user의 save 함수 호출');
		let data = {
			username: $("#username").val(),
			password: $("#password").val(),
			email: $("#email").val()
		};

		//console.log(data);
		//ajax 호출시 default가 비동기 호출
		//ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청
		//ajax가 통신을 성공하고 json을 리턴해주면 서버가 자동으로 자바오브젝트로 변환
		$.ajax({
			//회원가입 수행 요청
			type: "POST",
			url: "/auth/joinProc",
			data: JSON.stringify(data), 	//자바스크립트 -> json형태로 변경 //http body데이터 							
			contentType: "application/json; charset=utf-8",//body데이터가 어떤 타입인지(MIME)
			dataType: "json" //요청을 서버로해서 응답이 왔을 때 기본적으로 모든 것이 String 문자열 (생긴게 json이라면)=>javascript오프젝트로 변경  								
		}).done(function(resp) {
			console.log(resp.status)
			console.log(resp)
			if(resp.status === 500){
				alert("회원가입에 실패하였습니다.");
			}else{
				alert("회원가입이 완료되었습니다.");
				console.log(resp);
				location.href = "/";
			}

		}).fail(function(error) {
			alert(JSON.stringify(error));
		});
	},
	
	update: function() {
		//alert('user의 save 함수 호출');
		let data = {
			id: $("#id").val(),
			username: $("#username").val(),
			password: $("#password").val(),
			email: $("#email").val()
		};

		$.ajax({
			//회원가입 수행 요청
			type: "PUT",
			url: "/user",
			data: JSON.stringify(data), 	//자바스크립트 -> json형태로 변경 //http body데이터 							
			contentType: "application/json; charset=utf-8",//body데이터가 어떤 타입인지(MIME)
			dataType: "json" //요청을 서버로해서 응답이 왔을 때 기본적으로 모든 것이 String 문자열 (생긴게 json이라면)=>javascript오프젝트로 변경  								
		}).done(function(resp) {
			alert("회원 수정이 완료되었습니다.");
			console.log(resp);
			location.href = "/";
		}).fail(function(error) {
			alert(JSON.stringify(error));


		});
	}
}

index.init();