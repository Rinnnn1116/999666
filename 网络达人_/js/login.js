window.onload = function() {
	//获取对应的li
	let lis = document.getElementsByClassName("tabBar")[0];
	let type = null;
	for (let item of lis.children) {
		//移除所有class 中的active
		// item.classList.remove("active")
		item.onclick = function() {
			//如何移除其他li的active????
			for (let s of lis.children) {
				s.classList.remove("active")
			}
			type = item.getAttribute("data-type");
			item.classList.add("active");
		}
	}
	//获取按钮标签
	let btn = document.getElementsByClassName("loginBtn")[0];
	//获取手机号
	let phoneNum = document.getElementsByName("phoneNumber")[0]
	let pwd = document.getElementsByName("pwd")[0]
	//点击验证图标展示密码
	let eye = document.getElementsByClassName("icon-yanjing-guan")[0];
	eye.onclick = function() {
		if (pwd.getAttribute("type") == "password") {
			pwd.setAttribute("type", "text")
		} else {
			pwd.setAttribute("type", "password")
		}
	}
	//给标签添加点击时间
	btn.onclick = function() {
		//表单验证
		if (phoneNum.value == "" || pwd.value == "") {
			alert("手机号或密码不能为空");
			return;
		}
		let result = checkPhone(phoneNum.value)
		if (!result) {
			alert("请输入正确的手机号！！！")
			return;
		}
		//调用登录接口地址

		//跳转页面
		//location.href = "index.html"
	}
}

//使用正则表达式验证手机号
function checkPhone(num) {
	console.log(num)
	let reg = /^1(3[0-9]|4[5-9]|5[0-3,5-9]|6[2,5-7]|7[0-8]|8[0-9]|9[0-9])\d{8}$/;
	return reg.test(num);
} <
/script>