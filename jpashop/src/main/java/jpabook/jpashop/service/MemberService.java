package jpabook.jpashop.service;

import jpabook.jpashop.domain.Member;
import jpabook.jpashop.repository.MemberRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true) // dirty checking 안함. 읽기 전용이라 resource를 많이 안씀
@RequiredArgsConstructor // final이 있는 코드만 가지고 생성자를 만들어줌 (final 없으면 중간에 수정할 수도 있으니까)
public class MemberService {

    private final MemberRepository memberRepository; // 이제 안바뀌니까 final로 field 고정
//    public MemberService(MemberRepository memberRepository) { // 생성자 생성
//        this.memberRepository = memberRepository;
//    }

    // 회원 가입
    @Transactional // 얘는 쓰기라 read only 쓰면 안됨
    public Long join(Member member){
        validateDuplicateMember(member); // 중복회원 검증
        memberRepository.save(member); // 회원 등록
        return member.getId(); // 아이디 반환
    }

    private void validateDuplicateMember(Member member){
        List<Member> findMembers = memberRepository.findByName(member.getName());
        if(!findMembers.isEmpty()){
            throw new IllegalStateException("이미 존재하는 회원입니다");
        }
    }

    // 회원 전체 조회
    public List<Member> findMembers(){
        return memberRepository.findAll();
    }

    public Member findOne(Long memberId){
        return memberRepository.findOne(memberId);
    }
}
