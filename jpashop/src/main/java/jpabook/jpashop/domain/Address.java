package jpabook.jpashop.domain;

import jakarta.persistence.Embeddable;
import lombok.Getter;

@Embeddable
@Getter
public class Address {

    private String city;
    private String street;
    private String zipcode;

    public Address(String city, String street, String zipcode) { // 생성을 할 때만 값이 세팅이 되고, setter는 제공안함. 값이 고정되도록
        this.city = city;
        this.street = street;
        this.zipcode = zipcode;
    }
}
