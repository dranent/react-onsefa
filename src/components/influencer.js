import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './influencer.css';
import React, { useState, useEffect } from 'react';

export function Influencer() {

    const [cardLimit, setCardLimit] = useState(4); // 현재 보여지는 카드 개수
    const [showCards, setShowCards] = useState(false);
    
    useEffect(() => {
        setShowCards(true);
      }, []);

    const handleShowMore = () => {
        setShowCards(true); // 카드들을 보이도록 설정
        setTimeout(() => {
            setCardLimit(cardLimit + 4); // 카드 개수를 4개씩 증가시킴
        }, 200); // 0.2초 지연 후 카드 개수를 증가시킴 (애니메이션 효과를 위해)

    };

    const cardImgStyle = {
        objectFit: 'cover',
        height: '15em', /* 이미지의 원하는 높이로 조정 */
    };



    const cards = [
        {
            id: 1, // 고유 식별자
            image: "./img/influencer/anapple4snowwhite.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@anapple4snowwhite", // 카드 제목
            link: "https://www.instagram.com/reel/CqvId1VpmTo/", // 연결할 링크
        },
        {
            id: 2, // 고유 식별자
            image: "./img/influencer/_kyka__0625.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@_kyka__0625", // 카드 제목
            link: "https://www.instagram.com/reel/Cq0RIP9pyje/", // 연결할 링크
        },
        {
            id: 3, // 고유 식별자
            image: "./img/influencer/0510_nana.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@0510_nana", // 카드 제목
            link: "https://www.instagram.com/p/CrcX8fny8zk/", // 연결할 링크
        },
        {
            id: 4, // 고유 식별자
            image: "./img/influencer/aya_kichikichi.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@aya_kichikichi", // 카드 제목
            link: "https://www.instagram.com/p/Cq7OLJhJG2t/", // 연결할 링크
        },
        {
            id: 5, // 고유 식별자
            image: "./img/influencer/coco._.na02.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@coco._.na02", // 카드 제목
            link: "https://www.instagram.com/p/CrGXNuTpx6Z/", // 연결할 링크
        },
        {
            id: 6, // 고유 식별자
            image: "./img/influencer/hana_travelbeauty.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@hana_travelbeauty", // 카드 제목
            link: "https://www.instagram.com/p/Crn9hKUvPkZ/", // 연결할 링크
        },
        {
            id: 7, // 고유 식별자
            image: "./img/influencer/hystericm8n.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@hystericm8n", // 카드 제목
            link: "https://www.instagram.com/p/CrYBO3gOqY_/", // 연결할 링크
        },
        {
            id: 8, // 고유 식별자
            image: "./img/influencer/jasmine__r.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@jasmine__r.m", // 카드 제목
            link: "https://www.instagram.com/p/CrZWUN9yaU7/", // 연결할 링크
        },
        {
            id: 9, // 고유 식별자
            image: "./img/influencer/k_a_n_a_y_a_n.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@k_a_n_a_y_a_n", // 카드 제목
            link: "https://www.instagram.com/p/CrC6t8Luap_/", // 연결할 링크
        },
        {
            id: 10, // 고유 식별자
            image: "./img/influencer/kahoo__gram.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@kahoo__gram", // 카드 제목
            link: "https://www.instagram.com/p/CqvLqKGpjBL/", // 연결할 링크
        },
        {
            id: 11, // 고유 식별자
            image: "./img/influencer/kooota___93.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@kooota___93", // 카드 제목
            link: "https://www.instagram.com/p/Cr47UcMSJ-W/", // 연결할 링크
        },
        {
            id: 12, // 고유 식별자
            image: "./img/influencer/kyarai.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@kyarai", // 카드 제목
            link: "https://www.instagram.com/p/CsLQO_fusp5/", // 연결할 링크
        },
        {
            id: 13, // 고유 식별자
            image: "./img/influencer/lovewingnail.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@lovewingnail", // 카드 제목
            link: "https://www.instagram.com/p/Crt8kL0Sv3M/", // 연결할 링크
        },
        {
            id: 14, // 고유 식별자
            image: "./img/influencer/mamimumeme123.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@mamimumeme123", // 카드 제목
            link: "https://www.instagram.com/p/CrX6FVaOKzS/", // 연결할 링크
        },
        {
            id: 15, // 고유 식별자
            image: "./img/influencer/marchin7.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@marchin7", // 카드 제목
            link: "https://www.instagram.com/p/CrzKtP3vCH0/", // 연결할 링크
        },
        {
            id: 16, // 고유 식별자
            image: "./img/influencer/mocoskich.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@mocoskich", // 카드 제목
            link: "https://www.instagram.com/p/CrjhW_SSjNu/", // 연결할 링크
        },
        {
            id: 17, // 고유 식별자
            image: "./img/influencer/moe_moe121.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@moe_moe121", // 카드 제목
            link: "https://www.instagram.com/p/CqsCc4bLYnW/", // 연결할 링크
        },
        {
            id: 18, // 고유 식별자
            image: "./img/influencer/namiherg.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@namiherg", // 카드 제목
            link: "https://www.instagram.com/p/Cr5jTBtBm7H/", // 연결할 링크
        },
        {
            id: 19, // 고유 식별자
            image: "./img/influencer/nananachannananachan.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@nananachannananachan", // 카드 제목
            link: "https://www.instagram.com/p/CrSPUjarKEW/", // 연결할 링크
        },
        {
            id: 20, // 고유 식별자
            image: "./img/influencer/ninifashionpro.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@ninifashionpro", // 카드 제목
            link: "https://www.instagram.com/p/Cqu24DhvTem/", // 연결할 링크
        },
        {
            id: 21, // 고유 식별자
            image: "./img/influencer/no02ka.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@no02ka", // 카드 제목
            link: "https://www.instagram.com/p/CriZNXpvonV/", // 연결할 링크
        },
        {
            id: 22, // 고유 식별자
            image: "./img/influencer/nori_happy_surfer.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@nori_happy_surfer", // 카드 제목
            link: "https://www.instagram.com/p/Cr5kWCbpEJ3/", // 연결할 링크
        },
        {
            id: 23, // 고유 식별자
            image: "./img/influencer/popoco0917.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@popoco0917", // 카드 제목
            link: "https://www.instagram.com/p/CrNXrViONlN/", // 연결할 링크
        },
        {
            id: 24, // 고유 식별자
            image: "./img/influencer/r11echan.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@r11echan", // 카드 제목
            link: "https://www.instagram.com/p/CrHkjITyD4B/", // 연결할 링크
        },
        {
            id: 25, // 고유 식별자
            image: "./img/influencer/runakumaa.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@runakumaa", // 카드 제목
            link: "https://www.instagram.com/p/CqxHFFNr8JR/", // 연결할 링크
        },
        {
            id: 26, // 고유 식별자
            image: "./img/influencer/sachio_biyou.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@sachio_biyou", // 카드 제목
            link: "https://www.instagram.com/p/CrhHpe2vgcn/", // 연결할 링크
        },
        {
            id: 27, // 고유 식별자
            image: "./img/influencer/sunaokoya.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@sunaokoya", // 카드 제목
            link: "https://www.instagram.com/p/CsIsNONPRJ0/", // 연결할 링크
        },
        {
            id: 28, // 고유 식별자
            image: "./img/influencer/sykpippi.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@sykpippi", // 카드 제목
            link: "https://www.instagram.com/p/Cq5Rn34JYoc/", // 연결할 링크
        },
        {
            id: 29, // 고유 식별자
            image: "./img/influencer/tapi.style.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@tapi.style", // 카드 제목
            link: "https://www.instagram.com/p/Cr5noBZr9Jm/", // 연결할 링크
        },
        {
            id: 30, // 고유 식별자
            image: "./img/influencer/tomomibeauty.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@tomomibeauty", // 카드 제목
            link: "https://www.instagram.com/p/Crn6rsCP_sR/", // 연결할 링크
        },
        {
            id: 31, // 고유 식별자
            image: "./img/influencer/xxsaachiixx.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@xxsaachiixx", // 카드 제목
            link: "https://www.instagram.com/reel/CrHwGTQLE3Z/", // 연결할 링크
        },
        {
            id: 32, // 고유 식별자
            image: "./img/influencer/yuka__miles__.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@yuka__miles__", // 카드 제목
            link: "https://www.instagram.com/reel/CrQMVGiNI1A/", // 연결할 링크
        },
        {
            id: 33, // 고유 식별자
            image: "./img/influencer/yuki.harp.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@yuki.harp", // 카드 제목
            link: "https://www.instagram.com/p/CrLfo2gvhnH/", // 연결할 링크
        },
        {
            id: 34, // 고유 식별자
            image: "./img/influencer/yurina720.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@yurina720", // 카드 제목
            link: "https://www.instagram.com/p/Cr2xAC-uOax/", // 연결할 링크
        },
        {
            id: 35, // 고유 식별자
            image: "./img/influencer/zenyu_25.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@zenyu_25", // 카드 제목
            link: "https://www.instagram.com/reel/CsN59bmvXzb/", // 연결할 링크
        },
        {
            id: 36, // 고유 식별자
            image: "./img/influencer/zero.paca.webp", // 이미지 경로
            alt: "Card image", // 대체 텍스트
            title: "@zero.paca", // 카드 제목
            link: "https://www.instagram.com/p/Cr7j5WYuXUk/", // 연결할 링크
        },
    ];

    return (
        <div className='influencer-area'>
            <center><h6>インフルエンサー</h6></center>
            <center>
                <div className={`card-container${showCards ? ' show-cards' : ''}`}>
                    <Row xs={2} md={4} className="g-4">
                        {cards.slice(0, cardLimit).map((card) => (
                            <Col key={card.id}>
                                <a href={card.link} target="_blank" rel="noreferrer">
                                    <Card className='influencer-card bg-dark text-white'>
                                        <Card.Img src={card.image} alt={card.alt} style={cardImgStyle} />
                                        <Card.ImgOverlay>
                                            <Card.Title >{card.title}</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </a>
                            </Col>
                        ))}
                    </Row>

                    {cardLimit < cards.length && (
                        <button className='more-button fade-in' onClick={handleShowMore}>
                            もっと見る
                        </button>
                    )}
                </div>
            </center>
        </div>
    )
}