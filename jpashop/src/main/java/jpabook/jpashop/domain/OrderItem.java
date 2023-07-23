package jpabook.jpashop.domain;

import jakarta.persistence.*;
import jpabook.jpashop.domain.item.Item;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.aspectj.weaver.ast.Or;

import static jakarta.persistence.FetchType.LAZY;

@Entity
@Getter @Setter
public class OrderItem {
    @Id @GeneratedValue
    @Column(name = "order_item_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "order_id")
//    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    private Order order;

    private int orderPrice; // 주문 가격 (주문 당시에)
    private int count;      // 주문 수량

    //==생성 메섣,==//
    public static OrderItem createOrderItem(Item item, int orderPrice, int count){
        OrderItem orderItem = new OrderItem();
        orderItem.setItem(item);
        orderItem.setOrderPrice(orderPrice);
        orderItem.setCount(count);

        item.removeStock(count);    // 넘어온 것 만큼 아이템의 수량은 제거해줌
        return orderItem;
    }

    //==비즈니스 로직==//
    public void cancel() {
        getItem().addStock(count);  // 재고 수량은 원복 (주문취소니까)
}

    //==조회 로직==//

    // 주문 상품 전체 가격 조회
    public int getTotalPrice() { // 최종가격
        return getOrderPrice() * getCount();
    }
}
