package jpabook.jpashop.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GeneratedColumn;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {
    @Id @GeneratedValue
    @Column(name = "member_id") // table명_id 가 국룰
    private Long id;

    private String name;

    @Embedded
    private Address address;

    @OneToMany(mappedBy = "member") // order에서 member로 mapping 정보 (연관관계 주인은 order)
    private List<Order> orders = new ArrayList<>(); // 초기화는 이게 best example
}
