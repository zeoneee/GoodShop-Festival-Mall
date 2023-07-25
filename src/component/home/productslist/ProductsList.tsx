import React, { useEffect, useState } from 'react';
import * as S from "./ProductsListStyle"
import { useAppDispatch, useAppSelector } from "../../../hook/hooks";
import {getAllProducts, fetchGetProducts, getPageNumber} from "../../../features/productsSlice";
import PagenationBtn from '../../common/pagenationBtn/PagenationBtn';
import ProductCard from '../productcard/ProductCard';

//임시 데이터 출력용 데이터
const tempProducts = [
    {
      product_id: 1,
      product_name: "츠루우메 나츠미깡",
    //   store_name: "츠루우메",
      image: "https://d1e2y5wc27crnp.cloudfront.net/media/core/product/thumbnail/4859d1f7-85c7-4e98-bc09-5d62ae807041.webp",
      price: 51900,
      stock: 5,
    },
    {
      product_id: 2,
      image: "https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product/thumbnail/5bdc83ce-dbf2-463b-a631-b4c59f63f394.webp",
      product_name: "포 로지스 싱글 배럴",
      price: 91500,
      stock: 5,
    },
    {
      product_id: 3,
      image: "https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product/thumbnail/8d378157-5a01-4954-964f-45e8d4cf1103.webp",
      product_name: "짐빔 화이트",
      price: 32000,
      stock: 5,
    },
    {
      product_id: 4,
      image: "https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product/thumbnail/f2e156b0-ced8-4640-a8c9-f89aa6816167.webp",
      product_name: "제임슨 스탠다드",
      price: 36000,
      stock: 5,
    },
    {
      product_id: 5,
      image: "https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product/thumbnail/4b0d1f41-8bf2-4478-a144-fa5a1c9669d6.webp",
      product_name: "미도리",
      price: 38200,
      stock: 5,
    },
    {
      product_id: 6,
      image: "https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product/thumbnail/d56459bc-1b7e-4e66-9f5e-a29ac037f68b.webp",
      product_name: "볼스 체리",
      price: 13500,
      stock: 5,
    },
    {
      product_id: 7,
      image: "https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product/thumbnail/5dd6211a-f116-4871-818f-85bfd7d5fcfa.webp",
      product_name: "프로메사 모스카토",
      price: 11100,
      stock: 5,
    },
    {
      product_id: 8,
      image: "https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product/thumbnail/bf13932f-3848-4732-a93a-75c67173f3f1.webp",
      product_name: "디카이퍼 피치트리",
      price: 27400,
      stock: 5,
    },
    {
      product_id: 9,
      image: "https://d1e2y5wc27crnp.cloudfront.net/media/core/product/thumbnail/2700a125-42fc-409a-915f-a0ec48ebc598.webp",
      product_name: "블랙불 카일로",
      price: 30500,
      stock: 5,
    },
    // {
    //   product_id: 10,
    //   image: "https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product/thumbnail/a4feb531-f6df-41ea-94bc-4b0e0090fc29.webp",
    //   product_name: "닥터 루젠 리슬링",
    //   price: 17700,
    // },
  ];

export default function ProductsList() {

    const dispatch = useAppDispatch();

    const products = useAppSelector(getAllProducts);
    const pageNumber = useAppSelector(getPageNumber);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [page, setPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchGetProducts(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const getPageCount = (currentPage: number) => {
        setPage(currentPage);
      };

    
    
      console.log(products);

  return (
        <>
            <S.ProductsLists>
                {tempProducts?.map((product) => (
                    <ProductCard key={product.product_id} product={product} /> )
                )}
    
                
    
            </S.ProductsLists>
            <PagenationBtn pageNumber={pageNumber} nowPage={page} setPage={getPageCount}></PagenationBtn>
        </>
  )
}
