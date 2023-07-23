package jpabook.jpashop;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("hello") // hello라는 url로 오면 hello controller를 실행
    public String hello(Model model){ // model에 data를 실어서 controller에서 view로 넘겨줌
        model.addAttribute("data", "hello!!!"); // data라는 변수에 hello value를 반환
        return "hello"; // return은 화면 이름임. hello.html을 반환함
    }
}
