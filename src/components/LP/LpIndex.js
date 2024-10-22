import "../LP/css/style.css";
import "../LP/css/form.css";
import "../LP/css/normalize.css";
import "../LP/css/common.css";
import "../LP/css/utility.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";

function LpIndex() {
    const navigate = useNavigate();


    var settings = {
        dots: false,
        infinite: true,
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    useEffect(() => {
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js',
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l !== 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NF35ZFD5');
    }, []);


    const captionStyle = {
        fontWeight: 'bold',
        margin: '0 0 15px 0',
        display: 'block',
        color: '#ad7f52',
        fontSize: '1.5rem',
    };

    const form = useRef();

    const [formData, setFormData] = useState({
        firstChoiceDate: '',
        secondChoiceDate: '',
        thirdChoiceDate: '',
        firstSelectedTime: '10:00',
        secondSelectedTime: '10:00',
        thirdSelectedTime: '10:00',
        fullName1: '',
        fullName2: '',
        huriName1: '',
        huriName2: '',
        phoneNumber: '',
        emailAddress: '',
        consultation: '',
        validationError: '',
        birthday1: '',
        birthday2: '',
        birthday3: '',
        kibou: '',
        raiin: '',
        sex: '',
        adress: '',
        checklist: '',
        experience: '',
        remarks: '',
        policy: false,

    });


    const sendEmail = (e) => {
        e.preventDefault();

        // console.log('firstChoiceDate '+form.current.firstChoiceDate.value);
        // if (
        //     form.current.firstChoiceDate.value === '' ||
        //     form.current.firstSelectedTime.value === '' ||
        //     form.current.secondChoiceDate.value === '' ||
        //     form.current.secondSelectedTime.value === '' ||
        //     form.current.thirdChoiceDate.value === '' ||
        //     form.current.thirdSelectedTime.value === '' ||
        //     form.current.fullName1.value === '' ||
        //     form.current.fullName2.value === '' ||
        //     form.current.huriName1.value === '' ||
        //     form.current.huriName2.value === '' ||
        //     form.current.phoneNumber.value === '' ||
        //     form.current.emailAddress.value === ''
        // ) {
        //     window.alert('すべての必須情報(*)を入力する必要があります。');

        //     return false;
        // } else {
        // setShowCompletePage(true);
        emailjs.sendForm('service_o0z19lh', 'template_j7f29u8', form.current, 'GFIJ3U6YfAu9Ogia3')
            .then((result) => {
                alert('ご予約をお受け付け完了致しました。');
                navigate('/lp/thanks');

                // setShowCompletePage(true);
                // console.log(result.text);
            }, (error) => {
                alert('error');
                // console.log(error.text);
            });
        // }
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        // input 요소의 타입이 checkbox인 경우 checked 값을 사용하고, 그 외에는 value 값을 사용합니다.
        // const inputValue = type === 'checkbox' ? checked : value;

        if (type === 'checkbox') {
            if (name === 'checklist') {
                // checklist의 경우 배열로 처리
                if (checked) {
                    setFormData({ ...formData, checklist: [...formData.checklist, value] });
                } else {
                    setFormData({ ...formData, checklist: formData.checklist.filter(item => item !== value) });
                }
            } else if (name === 'policy') {
                // policy의 경우 불린 값으로 처리
                setFormData({ ...formData, [name]: checked });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    useEffect(() => {
        // 상태 업데이트가 완료된 후에 실행할 작업
        // console.log('상태 업데이트가 완료되었습니다.', formData);
    }, [formData]); // formData 상태가 변경될 때마다 이 작업을 실행


    return (
        <>
            {/* <!-- stylesheets --> */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
            {/* <!--option--> */}

            <link rel="stylesheet" media="screen,print" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
            <link rel="stylesheet" href="./js/validationengine/validationEngine.jquery.css" />
            {/* <!--/option--> */}
            {/* <link rel="stylesheet" media="screen,print" href="./css/style.css?update=1013" /> */}

            {/* <!--slick--> */}
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css" />
            <link rel="stylesheet" type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css" />
            {/* <!--/slick--> */}

            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-NF35ZFD5"
                    height="0"
                    width="0"
                    title="Google Tag Manager"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
            {/* End Google Tag Manager (noscript) */}
            <header id="header" className="mv">
                <div className="mv_inner">
                    <p className="mv_logo">
                        <a href="./">
                            <img
                                src="/img/top/logo_0825_pc.png"
                                alt="御アートメイク（KARIS Beauty Clinic）"
                                className="u-sp-item"
                            />
                            <img
                                src="/img/top/logo_0825_pc.png"
                                alt="御アートメイク（KARIS Beauty Clinic）"
                                className="u-pc-item"
                            />
                        </a>
                    </p>
                    <h1 className="mv_text">
                        <img
                            src="/img/top/mvtxt_0825_sp.png"
                            alt="あなただけの韓国×日本デザイン"
                            className="u-sp-item"
                        />
                        <img
                            src="/img/top/mvtxt_0825_pc.png"
                            alt="似合うが見つかるオーダーメイドアートメイク"
                            className="u-pc-item"
                        />
                    </h1>
                    <p className="mv_plan">
                        <img
                            src="/img/top/mvpl_0825_sp.png"
                            alt="開院おすすめプラン"
                            className="u-sp-item"
                        />
                        <img
                            src="/img/top/mvpl_0825_pc.png"
                            alt="開院おすすめプラン"
                            className="u-pc-item"
                        />
                    </p>
                </div>
            </header>

            {/* <!-- worry --> */}
            <div className="worry">
                <section className="worry_inner">

                    <h2 id="worry" className="worry_title">
                        <small className="worry_title--sub"><img src="/img/top/worry_titlesub.png" alt="みんなの困った！" /></small>
                        眉のお悩みTOP4
                    </h2>
                    <ul className="worry-list">
                        <li className="worry-list_item">
                            <figure><img src="/img/top/worry_illust1.png" alt="メイクしていても夕方には眉がない！" />
                                <figcaption>メイクしていても<br />夕方には眉がない！</figcaption>
                            </figure>
                        </li>
                        <li className="worry-list_item">
                            <figure><img src="/img/top/worry_illust2.png" alt="眉ラインがキレイに決まらない！" />
                                <figcaption>眉ラインが<br />キレイに決まらない！</figcaption>
                            </figure>
                        </li>
                        <li className="worry-list_item">
                            <figure><img src="/img/top/worry_illust3.png" alt="ジムやサウナで眉なしになる！" />
                                <figcaption>ジムやサウナで<br />眉なしになる！</figcaption>
                            </figure>
                        </li>
                        <li className="worry-list_item">
                            <figure><img src="/img/top/worry_illust4.png" alt="すっぴんになるのに抵抗がある！" />
                                <figcaption>すっぴんになるのに<br />抵抗がある！</figcaption>
                            </figure>
                        </li>
                    </ul>
                    <section className="worry-doctor1">
                        <h3 className="worry-doctor1_title">そのお悩みを、<br className="u-sp-item-inline" />医療アートメイクで解消<br
                            className="u-sp-item-inline" />しませんか？</h3>
                        <div className="worry-doctor1_flex">
                            <figure className="worry-doctor1_flex-photo">
                                <img src="/img/top/worry_doctor1.png" alt="ドクター" /></figure>
                            <div className="worry-doctor1_flex-text clearfix">
                                <h4 className="p-title">医療アートメイクとは？</h4>
                                <figure className="p-photo"><img src="/img/top/worry_skin.png" alt="" /></figure>
                                <p>
                                    アートメイクとは、皮膚の表皮部分（0.02～0.03mm）だけに専用の針で色素を注入し、染色する美容技術です。医療機関のみが提供できるため｢医療アートメイク｣と呼ばれます。半永久的に取れないタトゥー（刺青）とは異なり、皮膚のターンオーバーによって徐々に色が薄くなります。<br />
                                    御アートメイクでは、アートメイクの技術を習得した看護師が、安全に配慮しながら施術を行います。</p>
                            </div>
                        </div>
                    </section>
                    <h3 className="worry-sublead">当院の眉アートメイクなら…</h3>
                    <ul className="worry-list">
                        <li className="worry-list_item">
                            <figure><img src="/img/top/worry_illust_b1.png" alt="一日中キレイな眉がキマる！" />
                                <figcaption>一日中<br />キレイな眉がキマる！</figcaption>
                            </figure>
                        </li>
                        <li className="worry-list_item">
                            <figure><img src="/img/top/worry_illust_b2.png" alt="計算されたバランス眉が続く！" />
                                <figcaption>計算された<br />バランス眉が続く！</figcaption>
                            </figure>
                        </li>
                        <li className="worry-list_item">
                            <figure><img src="/img/top/worry_illust_b3.png" alt="汗やシャワーで眉が落ちない！" />
                                <figcaption>汗やシャワーで<br />眉が落ちない！</figcaption>
                            </figure>
                        </li>
                        <li className="worry-list_item">
                            <figure><img src="/img/top/worry_illust_b4.png" alt="顔立ちを引き立てる眉だから素顔に自信！" />
                                <figcaption>顔立ちを引き立てる<br />眉だから素顔に自信！</figcaption>
                            </figure>
                        </li>
                    </ul>
                    <section className="worry-question">
                        <h2 className="worry-question_title">興味はあるけどちょっと気になる…<br className="u-sp-item-inline" />そんな不安にお答えします</h2>
                        <div className="worry-question_flex">
                            <figure className="worry-question_photo"><img src="/img/top/worry_doctor2.png" alt="ドクター" /></figure>
                            <ul className="worry-question_list">
                                <li>
                                    <h3 className="p-title">痛くない？</h3>
                                    <p>施術部位はしっかりと麻酔クリームを塗って、痛みが感じにくい状態で行いますのでご安心ください。</p>
                                </li>
                                <li>
                                    <h3 className="p-title">安全？</h3>
                                    <p>使用する器具は全て滅菌し、皮膚に注入する色素も安全性の高いものを使用します。</p>
                                </li>
                                <li>
                                    <h3 className="p-title">不便はない？</h3>
                                    <p>特に日常生活に不便なことはございません。むしろ毎朝のメイク時間が短縮できるとのお声を頂戴しています。</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <div className="worry-more">
                        <figure className="worry-more_photo"><i className="worry-more_label">
                            <img src="/img/top/ico_more.png"
                                alt="さらに！" /></i>
                            <img src="/img/top/worry_clinic.jpg?13" alt="クリニック外観" /></figure>
                        <div className="worry-more_text">
                            <p className="p-title">当クリニックは、「新宿駅から徒歩３分」にあります。<br />ちょっとしたご相談でも、お気軽にいらしてください！</p>
                            <p>
                                当クリニックは東京の繁華街である新宿にございます。どの路線の駅からも徒歩数分とアクセスが良く、
                                お買い物のついでにお立ち寄りいただけます。<br />医療アートメイクはもちろん、美容クリニックとして肌の不調やエイジングケアなどの美容皮膚科メニューも取りそろえていますので、お肌の相談なども承ります。どうぞお気軽にいらしてください。
                            </p>
                        </div>
                    </div>
                </section>
            </div>


            {/* about */}
            <div id="about" className="about">
                <section className="about_inner">
                    <h2 className="about_title">
                        <span className="en">About eyebrow art makeup</span>
                        <span className="jp">当クリニックの<br className="u-sp-item-inline" />眉アートメイクについて</span>
                    </h2>
                    <section className="about_list">
                        <figure className="about_list-photo odd"><img src="/img/top/about_photo1.jpg?20211008"
                            alt="骨格や顔立ちから割り出した黄金比率をもとにデザイン" /></figure>
                        <div className="about_list-text odd">
                            <i className="p-num">01</i>
                            <h3 className="p-title">骨格や顔立ちから割り出した<br />黄金比率をもとにデザイン</h3>
                            <p>アートメイクアーティストが骨格に基づいた黄金比を診断して、顔立ちが整って見える眉をデザインいたします。その後、お客様のご要望などをヒアリングしながら、オーダーメイドの理想眉を提供いたします。</p>
                        </div>
                    </section>
                    <section className="about_list">
                        <figure className="about_list-photo even"><img src="/img/top/about_photo2.jpg?20211008"
                            alt="先端のテクニックで、自然な眉の毛並みを再現" /></figure>
                        <div className="about_list-text even">
                            <i className="p-num">02</i>
                            <h3 className="p-title">先端のテクニックで、<br />自然な眉の毛並みを再現</h3>
                            <p>眉のアートメイクは日々進化を遂げています。昨今の主流はどの角度から見ても自然で美しい眉の造形です。1本1本の毛流れを再現したテクニックや、ナチュラルな陰影で、その方に似合うナチュラル眉をつくります。</p>
                        </div>
                    </section>
                    <section className="about_tech">
                        <h3 className="about_en-title">Technique</h3>
                        <ul className="about_tech-list">
                            <li>
                                <h4 className="p-title">パウダー</h4>
                                <figure className="p-photo"><img src="/img/top/about_tech3.png" alt="TDCパウダーブロー" /></figure>
                                <p>細かなグラデーションで眉に陰影が施され、まるでアイブローパウダーを眉にのせたかのようなナチュラルな見た目になります。</p>
                            </li>
                            <li>
                                <h4 className="p-title">ナチュラル</h4>
                                <figure className="p-photo"><img src="/img/top/about_tech2.png" alt="" /></figure>
                                <p>1本1本の眉毛を手彫して再現し、色素を注入する方法です。まるでご自身の眉毛が生えているかのような自然な見た目で、眉毛の薄い方や一部分に毛のない方にもおすすめです。</p>
                            </li>
                            <li>
                                <h4 className="p-title">コンボ</h4>
                                <figure className="p-photo"><img src="/img/top/about_tech1.png" alt="Kbrow 4D" /></figure>
                                <p>眉全体にパウダー状の陰影をつけ、さらににより必要な部分に手彫りで1本1本の眉毛を再現します。欠けやムラのない自然な眉に仕上がります。</p>
                            </li>
                        </ul>

                        <p className="mix_txt">
                            「ミックス」という、お好みの技法を眉の状態に合わせてミックスできる技法もございますので悩まれている方はお気軽にご相談ください。
                        </p>
                    </section>
                    <section className="about_list">
                        <figure className="about_list-photo odd"><img src="/img/top/about_photo3.jpg?20211008" alt="お好みに合わせた理想の眉をご提供" />
                        </figure>
                        <div className="about_list-text odd">
                            <i className="p-num">03</i>
                            <h3 className="p-title">お好みに合わせた<br />理想の眉をご提供</h3>
                            <p>眉の形をデザインして、お顔の印象を変えることができます。女性らしい柔らかな顔立ちや、キリッとしたハンサム顔など、こんな顔になりたいというご要望にアートメイクでお応えします。</p>
                        </div>
                    </section>
                    <section className="about_tech">
                        <h3 className="about_en-title">Design</h3>
                        <ul className="about_tech-list clm4">
                            <li>
                                <h4 className="p-title">ナチュラル眉</h4>
                                <figure className="p-photo"><img src="/img/top/about_design1.png" alt="ナチュラル眉" /></figure>
                                <p>ご自身の自眉を生かして、自然な眉ラインを再現したデザインです。女性らしい柔らかな印象を与えます。</p>
                            </li>
                            <li>
                                <h4 className="p-title">アーチ眉</h4>
                                <figure className="p-photo"><img src="/img/top/about_design2.png" alt="アーチ眉" /></figure>
                                <p>眉山を黒目の中心にもってきて目尻を長めにしたアーチ型のデザインです。優しくフェミニンな印象に。</p>
                            </li>
                            <li>
                                <h4 className="p-title">ストレート眉</h4>
                                <figure className="p-photo"><img src="/img/top/about_design3.png" alt="ストレート眉" /></figure>
                                <p>まるで韓流スターのような太いストレートな眉デザインです。幼く凜々しい印象を与え、小顔効果も期待できます。</p>
                            </li>
                            <li>
                                <h4 className="p-title">ハンサム眉</h4>
                                <figure className="p-photo"><img src="/img/top/about_design4.png" alt="ハンサム眉" /></figure>
                                <p>眉山を黒目の外側高めにもってきて、目尻は細く短めのデザインです。キリッとしたクールな印象を与えます。</p>
                            </li>
                        </ul>
                    </section>
                    <section className="about_list">
                        <figure className="about_list-photo even"><img src="/img/top/about_photo4.jpg?20211008"
                            alt="安全基準をクリアした色素を使用有資格の看護師が施術を行う" /></figure>
                        <div className="about_list-text even">
                            <i className="p-num">04</i>
                            <h3 className="p-title">安全基準をクリアした色素を使用<br />有資格の看護師が施術を行う</h3>
                            <p>当クリニックではお客様の安全を第一に考えます。特に使用する色素は皮膚内に入るものであるため、厳しい基準をクリアした染料を使用しています。<br />
                                さらにアートメイク技術を習得した看護師が施術～アフターケアまで担当いたします。</p>
                        </div>
                    </section>
                </section>
                <div className="about_en">About</div>
            </div>


            {/* case */}

            <center>
                <div>
                    <section className="case_inner">
                        <h2 className="p-en-title ">
                            <span className="en"><em>-</em>Instagram</span>
                            <span className="jp">ナチュラルな仕上がりで、顔立ちもアップ！</span>
                        </h2>

                    </section>
                    <Slider {...settings}>
                        <div>
                            <a href="https://www.instagram.com/p/Cww-ZdcSELx/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                                target="_blank" rel="noreferrer">
                                <img src="/img/top/insta_slide_0825_1.jpg" alt="オンクリニック症例写真1" />
                            </a></div>
                        <div>
                        <a href="https://www.instagram.com/p/CxniKkESDNV/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                            target="_blank" rel="noreferrer">
                            <img src="/img/top/insta_slide_0825_2.jpg" alt="オンクリニック症例写真2" />
                        </a></div>
                        <div>
                        <a href="https://www.instagram.com/reel/Cxe1EpxyOM5/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                            target="_blank" rel="noreferrer">
                            <img src="/img/top/insta_slide_0825_3.jpg" alt="オンクリニック症例写真3" />
                        </a></div>
                        <div>
                        <a href="https://www.instagram.com/p/CwXslVsS-kD/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                            target="_blank" rel="noreferrer">
                            <img src="/img/top/insta_slide_0825_4.jpg" alt="オンクリニック症例写真4" />
                        </a></div>
                        <div>
                        <a href="https://www.instagram.com/p/CwXslVsS-kD/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                            target="_blank" rel="noreferrer">
                            <img src="/img/top/insta_slide_0825_5.jpg" alt="オンクリニック症例写真5" />
                        </a></div>
                        <div>
                        <a href="https://www.instagram.com/p/CxI3iwmSDKD/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                            target="_blank" rel="noreferrer">
                            <img src="/img/top/insta_slide_0825_6.jpg" alt="オンクリニック症例写真6" />
                        </a></div>
                    </Slider>
                </div>
            </center>


            {/* <div id="case" className="case">
                <section className="case_inner">
                    <h2 className="p-en-title ">
                        <span className="en"><em>-</em>Instagram</span>
                        <span className="jp">ナチュラルな仕上がりで、顔立ちもアップ！</span>
                    </h2>

                </section>
                <section>
                    <ul className="slider">
                        <li> <a href="https://www.instagram.com/p/Cww-ZdcSELx/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                            target="_blank" rel="noreferrer"><img src="/img/top/insta_slide_0825_1.jpg" alt="" /></a> </li>
                        <li> <a href="https://www.instagram.com/p/CxniKkESDNV/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                            target="_blank" rel="noreferrer"><img src="/img/top/insta_slide_0825_2.jpg" alt="" /></a> </li>
                        <li> <a href="https://www.instagram.com/reel/Cxe1EpxyOM5/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                            target="_blank" rel="noreferrer"><img src="/img/top/insta_slide_0825_3.jpg" alt="" /></a> </li>
                        <li> <a href="https://www.instagram.com/p/CxSXP7HumzP/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                            target="_blank" rel="noreferrer"><img src="/img/top/insta_slide_0825_4.jpg" alt="" /></a> </li>
                        <li> <a href="https://www.instagram.com/p/CwXslVsS-kD/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                            target="_blank" rel="noreferrer"><img src="/img/top/insta_slide_0825_5.jpg" alt="" /></a> </li>
                        <li> <a href="https://www.instagram.com/p/CxI3iwmSDKD/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                            target="_blank" rel="noreferrer"><img src="/img/top/insta_slide_0825_6.jpg" alt="" /></a> </li>



                    </ul>
                </section>
            </div> */}

            {/* flow */}
            <div id="flow" className="basic-section gray">
                <section className="basic-section_inner">
                    <h2 className="p-en-title ">
                        <span className="en"><em>-</em>Flow</span>
                        <span className="jp">施術の流れ</span>
                    </h2>
                    <ul className="flow_outer lp_ul">
                        <li className="flow_list">
                            <i className="flow_list-num">Step.<strong>1</strong></i>
                            <div className="flow_list-text">
                                <h3>ご予約</h3>
                                <p>お電話または下部の予約フォームから、来院日時をご予約ください。</p>
                            </div>
                        </li>
                        <li className="flow_list">
                            <i className="flow_list-num">Step.<strong>2</strong></i>
                            <div className="flow_list-text">
                                <h3>来院</h3>
                                <p>来院当日は、普段の雰囲気がわかるようにメイクをしてきてください。術後の紫外線による刺激を避けるため、帽子や日傘などを携帯ください。</p>
                            </div>
                        </li>
                        <li className="flow_list">
                            <i className="flow_list-num">Step.<strong>3</strong></i>
                            <div className="flow_list-text">
                                <h3>カウンセリング</h3>
                                <p>体調や既往症などの確認を行います。不安なこと、お知りになりたいことなどのご質問があれば、スタッフに何でもご相談ください。</p>
                            </div>
                        </li>
                        <li className="flow_list">
                            <i className="flow_list-num">Step.<strong>4</strong></i>
                            <div className="flow_list-text">
                                <h3>医師による診察</h3>
                                <p>十分なカウンセリングを終えた後に、医師による診察を行います。この際に施術の内容やリスクなどのご説明を致します。</p>
                            </div>
                        </li>
                        <li className="flow_list">
                            <i className="flow_list-num">Step.<strong>5</strong></i>
                            <div className="flow_list-text">
                                <h3>眉デザイン</h3>
                                <p>お客様の顔立ちにあった黄金比率をベースに、ご希望をお伺いしながらなりたい眉のデザインを行います。</p>
                            </div>
                        </li>
                        <li className="flow_list">
                            <i className="flow_list-num">Step.<strong>6</strong></i>
                            <div className="flow_list-text">
                                <h3>施術</h3>
                                <p>施術前に麻酔クリームを塗布します。その後、アートメイクアーティストである看護師が専用の細い針（ニードル）を使用し、色素を定着させます。</p>
                            </div>
                        </li>
                        <li className="flow_list">
                            <i className="flow_list-num">Step.<strong>7</strong></i>
                            <div className="flow_list-text">
                                <h3>アフターケア</h3>
                                <p>施術直後は赤みや腫れが出る場合があるため、クーリング（冷却鎮静）を行い、その後ご帰宅いただけます。カウンセリングの際にアフターケアの方法をお伝えします。</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>


            {/* QNA */}
            <div id="faq" className="basic-section">
                <section className="basic-section_inner">
                    <h2 className="p-en-title">
                        <span className="en"><em>-</em>Q&amp;A</span>
                        <span className="jp">よくある質問</span>
                    </h2>
                    <dl className="faq_list">
                        <dt>施術時の痛みが怖いです。</dt>
                        <dd>麻酔クリームを使用して、痛みを感じにくくしてから施術いたします。個人差はありますが、毛抜きで毛を抜くときのようなチクッとした痛みを感じる場合があります。</dd>
                    </dl>
                    <dl className="faq_list">
                        <dt>施術時間はどれくらいですか？</dt>
                        <dd>メニューや眉の状態にもよりますが、麻酔クリームを塗ってから約2～3時間のお時間を頂戴しております。<br />※あくまで目安となり、お時間は前後することがございますのでご了承ください。</dd>
                    </dl>
                    <dl className="faq_list">
                        <dt>施術後の状態について教えてください。</dt>
                        <dd>
                            施術直後は眉の周りに赤味が出る場合がございますが、2～3時間で消失します。<br />施術後2～3日で眉毛が濃くなりますが、これは彫った傷によるカサブタの影響です。かゆみが出る場合がありますが、掻かずに冷やしてください。<br />その後1週間程度で不要な角質が剥がれ落ち、色が落ち着いてきてキレイな仕上がりになります。この間は眉に刺激を与えず、安静にしてください。
                        </dd>
                    </dl>
                    <dl className="faq_list">
                        <dt>施術後に注意することは？</dt>
                        <dd>
                            <p>施術後1週間程度は色素が定着しづらいため、日常生活では以下の行動にご注意ください。</p>
                            <ul className="u-ul-basic u-mb-1em">
                                <li>傷口に汚れが入り炎症や色素抜けの原因となりますので、メイクはできません。</li>
                                <li>施術箇所は水に濡れると色素が流れ出るため、水に濡らさないようにしてください。眉のクレンジングや洗顔もNGです。</li>
                                <li>汗も炎症や色素定着の妨げとなりますので、激しいスポーツやサウナ浴などはNGです。</li>
                                <li>代謝を高めるお風呂は色素抜けの原因となります。一週間はシャワー浴にしてください。</li>
                            </ul>
                            <p>当クリニックでは、施術後に看護師からアフターケアについてしっかりご説明させていただきます。</p>
                        </dd>
                    </dl>
                    <dl className="faq_list">
                        <dt>アートメイクを受けられない人はいますか？</dt>
                        <dd>
                            <p>以下の方はアートメイクをお断りしております。</p>
                            <ul className="u-ul-basic u-mb-1em">
                                <li>妊娠中・妊娠の疑いがある方、授乳中の方</li>
                                <li>心臓病・糖尿病の方</li>
                                <li>アトピー体質、ケロイド体質の方</li>
                                <li>血液疾患（白血病・肝炎・エイズ）、感染症の方</li>
                                <li>ペースメーカーが入っている方</li>
                                <li>施術部位の近くにヒアルロン酸注入をした方</li>
                                <li>施術部位の近くに塞がっていない傷がある方</li>
                            </ul>
                            <p>※上記以外でも、診察後に医師の判断で施術できないことがございますので、何卒ご了承ください。</p>
                        </dd>
                    </dl>
                </section>
            </div>

            {/* price */}
            <div id="price" className="basic-section gray">
                <section className="basic-section_inner">
                    <h2 className="p-en-title">
                        <span className="en"><em>-</em>Price</span>
                        <span className="jp">料金表</span>
                    </h2>
                    <h3 className="price_plan-title camp">モニタープラン</h3>
                    <table className="price_table camp u-mb-05em">
                        <colgroup>
                            <col width="40%" />
                            <col width="30%" />
                            <col width="30%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>メニュー</th>
                                <th>回数</th>
                                <th>価格<small>（税込）</small></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>アイブロウアートメイク</th>
                                <td className="times">お試し</td>
                                <td className="yen">&yen;38,000</td>
                            </tr>
                            <tr>
                                <th>アイブロウアートメイク</th>
                                <td className="times">1回</td>
                                <td className="yen">&yen;45,000</td>
                            </tr>
                            <tr>
                                <th>アイブロウアートメイク</th>
                                <td className="times">2回</td>
                                <td className="yen">&yen;67,500</td>
                            </tr>
                            <tr>
                                <th>他院修正アートメイク</th>
                                <td className="times">1回</td>
                                <td className="yen">&yen;48,000</td>
                            </tr>
                            <tr>
                                <th>アイラインアートメイク</th>
                                <td className="times">お試し</td>
                                <td className="yen">&yen;33,000</td>
                            </tr>
                            <tr>
                                <th>アイラインアートメイク</th>
                                <td className="times">1回</td>
                                <td className="yen">&yen;40,000</td>
                            </tr>
                            <tr>
                                <th>アイラインアートメイク</th>
                                <td className="times">2回</td>
                                <td className="yen">&yen;54,000</td>
                            </tr>
                            <tr>
                                <th>リップアートメイク</th>
                                <td className="times">お試し</td>
                                <td className="yen">&yen;38,000</td>
                            </tr>
                            <tr>
                                <th>リップアートメイク</th>
                                <td className="times">1回</td>
                                <td className="yen">&yen;45,000</td>
                            </tr>
                            <tr>
                                <th>リップアートメイク</th>
                                <td className="times">2回</td>
                                <td className="yen">&yen;67,500</td>
                            </tr>
                            <tr>
                                <th>ヘアラインアートメイク</th>
                                <td className="times">2回</td>
                                <td className="yen">&yen;76,500</td>
                            </tr>
                            <tr>
                                <th>SMP(直径10cm)</th>
                                <td className="times">1回</td>
                                <td className="yen">&yen;150,000</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="u-text-x-small u-mb-3em u-text-right">※初診料・麻酔代無料 ※モニター様はお写真にご協力下さい</p>
                </section>
            </div>


            {/* access */}
            <div id="clinic" className="basic-section">
                <section className="basic-section_inner">
                    <div className="clinic_info">
                        <section className="clinic_info-access">
                            <h3 className="clinic_info-title">
                                <span className="jp">アクセス</span>
                                <span className="en">ACCESS</span>
                            </h3>
                            <p className="clinic_info-access_lead">提携クリニック名<br />
                                KARIS beauty clinic
                            </p>
                            <dl className="clinic_info-access_data">
                                <dt>診療時間</dt>
                                <dd>10:00〜19:00</dd>
                                <dt>住所</dt>
                                <dd>〒151-0053<br />東京都渋谷区代々木2-7-3<br />第七荒井ビル 8階</dd>
                                <dt>アクセス</dt>
                                <dd>
                                    <p>最寄駅［徒歩ルート］</p>
                                    <p>新宿駅 /南口 約3分</p>
                                </dd>
                            </dl>
                        </section>
                    </div>
                    <div className="clinic_map">
                        <iframe
                            className="lazyload"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12964.661609260285!2d139.68758887305503!3d35.67292909284759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d777b399cc3%3A0x6b038310881e9b22!2sKARIS%20beauty%20clinic!5e0!3m2!1sja!2sjp!4v1696345645312!5m2!1sja!2sjp"
                            width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="googlemap"></iframe>
                    </div>
                </section>
            </div>



            {/* resvation */}
            <div className="basic-section pink form">
                <section id="form" className="basic-section_inner">
                    <h2 className="p-en-title ">
                        <span className="en"><em>-</em>Reservation</span>
                        <span className="jp">ご予約フォーム</span>
                    </h2>
                    <p>下記のフォームに必要事項をご入力の上、<br className="u-sp-item-inline" />送信を願います。</p>
                    <p className="u-text-small"><span className="must-icon"></span> マークがついている項目は入力必須項目です。<br
                        className="u-sp-item-inline" />必ずご入力ください。</p>
                    <div id="form_input" className="form-data">
                        <form ref={form} onSubmit={sendEmail} id="form-data">
                            <table>
                                <thead>
                                    <tr>
                                        <th>来院<span className="must-icon must-pos"></span></th>
                                        <td>

                                            <ul className="list-inline">
                                                <li className="u-radio">
                                                    <input
                                                        name="来院"
                                                        type="radio"
                                                        id="category1"
                                                        value="初めて"
                                                        // checked={formData.raiin}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label htmlFor="category1">初めて</label>
                                                </li>
                                                <li className="u-radio">
                                                    <input
                                                        name="来院"
                                                        type="radio"
                                                        id="category2"
                                                        value="2回目以降"
                                                        // checked={formData.raiin}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label htmlFor="category2">2回目以降</label>
                                                </li>
                                            </ul>


                                        </td>
                                    </tr>
                                    <tr>
                                        <th>ご希望・ご相談<span className="must-icon must-pos"></span></th>
                                        <td>
                                            <ul className="list-inline">
                                                <li className="u-radio">
                                                    <input name="ご希望・ご相談" type="radio" id="category_021"
                                                        value="カウンセリングのみ希望する"
                                                        // checked={formData.kibou === 'カウンセリングのみ希望する'} // 해당 라디오 버튼의 상태를 확인합니다.
                                                        onChange={handleInputChange} // onChange 핸들러를 추가합니다.

                                                    />
                                                    <label htmlFor="category_021">カウンセリングのみ希望する</label>
                                                </li>
                                                <li className="u-radio">
                                                    <input name="ご希望・ご相談" type="radio" id="category_022"
                                                        value="当日施術を希望する"
                                                        // checked={formData.kibou === '当日施術を希望する'} // 해당 라디오 버튼의 상태를 확인합니다.
                                                        onChange={handleInputChange} // onChange 핸들러를 추가합니다.

                                                    />
                                                    <label htmlFor="category_022">当日施術を希望する</label>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>お名前<span className="must-icon must-pos"></span></th>
                                        <td>
                                            <input
                                                name="fullName1"
                                                id="fullName1"
                                                type="text"
                                                className="name"
                                                placeholder="姓"
                                                value={formData.fullName1} // formData에서 해당 필드의 값을 가져오고, 없을 경우 빈 문자열로 설정
                                                onChange={handleInputChange} // onChange 핸들러를 추가
                                            />
                                            <input
                                                name="fullName2"
                                                id="fullName2"
                                                type="text"
                                                className="name validate[required]"
                                                placeholder="名"
                                                value={formData.fullName2} // formData에서 해당 필드의 값을 가져오고, 없을 경우 빈 문자열로 설정
                                                onChange={handleInputChange} // onChange 핸들러를 추가
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>フリガナ<span className="must-icon must-pos"></span></th>
                                        <td><input name="huriName1"
                                            id="huriName1"
                                            type="text"
                                            className="name validate[required]"
                                            placeholder="セイ"
                                            value={formData.huriName1}
                                            onChange={handleInputChange} />
                                            <input name="huriName2"
                                                id="huriName2"
                                                type="text"
                                                className="name validate[required]"
                                                placeholder="メイ"
                                                value={formData.huriName2}
                                                onChange={handleInputChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>性別<span className="must-icon must-pos"></span></th>
                                        <td>
                                            <ul className="list-inline">
                                                <li className="u-radio">
                                                    <input name="sex"
                                                        type="radio"
                                                        id="女性"
                                                        value={formData.sex}
                                                        onChange={handleInputChange} />
                                                    <label htmlFor="女性">女性</label>
                                                </li>
                                                <li className="u-radio">
                                                    <input name="sex"
                                                        type="radio" id="男性"
                                                        value={formData.sex}
                                                        onChange={handleInputChange} />
                                                    <label htmlFor="男性">男性</label>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>生年月日<span className="must-icon must-pos"></span></th>
                                        <td>
                                            <select name="birthday1"
                                                value={formData.birthday1}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">-</option>
                                                <option value="1900">1900</option>
                                                <option value="1901">1901</option>
                                                <option value="1902">1902</option>
                                                <option value="1903">1903</option>
                                                <option value="1904">1904</option>
                                                <option value="1905">1905</option>
                                                <option value="1906">1906</option>
                                                <option value="1907">1907</option>
                                                <option value="1908">1908</option>
                                                <option value="1909">1909</option>
                                                <option value="1910">1910</option>
                                                <option value="1911">1911</option>
                                                <option value="1912">1912</option>
                                                <option value="1913">1913</option>
                                                <option value="1914">1914</option>
                                                <option value="1915">1915</option>
                                                <option value="1916">1916</option>
                                                <option value="1917">1917</option>
                                                <option value="1918">1918</option>
                                                <option value="1919">1919</option>
                                                <option value="1920">1920</option>
                                                <option value="1921">1921</option>
                                                <option value="1922">1922</option>
                                                <option value="1923">1923</option>
                                                <option value="1924">1924</option>
                                                <option value="1925">1925</option>
                                                <option value="1926">1926</option>
                                                <option value="1927">1927</option>
                                                <option value="1928">1928</option>
                                                <option value="1929">1929</option>
                                                <option value="1930">1930</option>
                                                <option value="1931">1931</option>
                                                <option value="1932">1932</option>
                                                <option value="1933">1933</option>
                                                <option value="1934">1934</option>
                                                <option value="1935">1935</option>
                                                <option value="1936">1936</option>
                                                <option value="1937">1937</option>
                                                <option value="1938">1938</option>
                                                <option value="1939">1939</option>
                                                <option value="1940">1940</option>
                                                <option value="1941">1941</option>
                                                <option value="1942">1942</option>
                                                <option value="1943">1943</option>
                                                <option value="1944">1944</option>
                                                <option value="1945">1945</option>
                                                <option value="1946">1946</option>
                                                <option value="1947">1947</option>
                                                <option value="1948">1948</option>
                                                <option value="1949">1949</option>
                                                <option value="1950">1950</option>
                                                <option value="1951">1951</option>
                                                <option value="1952">1952</option>
                                                <option value="1953">1953</option>
                                                <option value="1954">1954</option>
                                                <option value="1955">1955</option>
                                                <option value="1956">1956</option>
                                                <option value="1957">1957</option>
                                                <option value="1958">1958</option>
                                                <option value="1959">1959</option>
                                                <option value="1960">1960</option>
                                                <option value="1961">1961</option>
                                                <option value="1962">1962</option>
                                                <option value="1963">1963</option>
                                                <option value="1964">1964</option>
                                                <option value="1965">1965</option>
                                                <option value="1966">1966</option>
                                                <option value="1967">1967</option>
                                                <option value="1968">1968</option>
                                                <option value="1969">1969</option>
                                                <option value="1970">1970</option>
                                                <option value="1971">1971</option>
                                                <option value="1972">1972</option>
                                                <option value="1973">1973</option>
                                                <option value="1974">1974</option>
                                                <option value="1975">1975</option>
                                                <option value="1976">1976</option>
                                                <option value="1977">1977</option>
                                                <option value="1978">1978</option>
                                                <option value="1979">1979</option>
                                                <option value="1980">1980</option>
                                                <option value="1981">1981</option>
                                                <option value="1982">1982</option>
                                                <option value="1983">1983</option>
                                                <option value="1984">1984</option>
                                                <option value="1985">1985</option>
                                                <option value="1986">1986</option>
                                                <option value="1987">1987</option>
                                                <option value="1988">1988</option>
                                                <option value="1989">1989</option>
                                                <option value="1990">1990</option>
                                                <option value="1991">1991</option>
                                                <option value="1992">1992</option>
                                                <option value="1993">1993</option>
                                                <option value="1994">1994</option>
                                                <option value="1995">1995</option>
                                                <option value="1996">1996</option>
                                                <option value="1997">1997</option>
                                                <option value="1998">1998</option>
                                                <option value="1999">1999</option>
                                                <option value="2000">2000</option>
                                                <option value="2001">2001</option>
                                                <option value="2002">2002</option>
                                                <option value="2003">2003</option>
                                                <option value="2004">2004</option>
                                                <option value="2005">2005</option>
                                                <option value="2006">2006</option>
                                                <option value="2007">2007</option>
                                                <option value="2008">2008</option>
                                                <option value="2009">2009</option>
                                                <option value="2010">2010</option>
                                                <option value="2011">2011</option>
                                                <option value="2012">2012</option>
                                                <option value="2013">2013</option>
                                                <option value="2014">2014</option>
                                                <option value="2015">2015</option>
                                                <option value="2016">2016</option>
                                                <option value="2017">2017</option>
                                                <option value="2018">2018</option>
                                                <option value="2019">2019</option>
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                                <option value="2030">2030</option>
                                            </select>　年
                                            <select name="birthday2"
                                                value={formData.birthday2}
                                                onChange={handleInputChange}>
                                                <option value="">-</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>　月
                                            <select name="birthday3"
                                                value={formData.birthday3}
                                                onChange={handleInputChange}>
                                                <option value="">-</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>　日

                                        </td>
                                    </tr>
                                    <tr>
                                        <th>電話番号<span className="must-icon must-pos"></span></th>
                                        <td>
                                            <input name="phoneNumber" type="tel" className="wide validate[required,custom[telephone]]" placeholder="半角英数字"
                                                value={formData.phoneNumber}
                                                onChange={handleInputChange} />
                                            <p className="caption">※ご連絡可能な電話番号をご記入ください</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>メールアドレス<span className="must-icon must-pos"></span></th>
                                        <td>
                                            <input name="emailAddress" id="emailAddress" type="email" className="wide validate[required,custom[email]]"
                                                value={formData.emailAddress}
                                                onChange={handleInputChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>ご住所<span className="must-icon must-pos"></span></th>
                                        <td>
                                            <input name="adress" id="adress" type="text" className="wide validate[required]"
                                                value={formData.adress}
                                                onChange={handleInputChange} /></td>
                                    </tr>
                                    <tr>
                                        <th>予約内容<span className="must-icon must-pos"></span></th>
                                        <td className="hope">
                                            <div>
                                                <span>第1希望日</span>　<span>

                                                    <DatePicker
                                                        name="firstChoiceDate"
                                                        selected={formData.firstChoiceDate}
                                                        onChange={(date) => setFormData({ ...formData, firstChoiceDate: date })}
                                                        dateFormat="yyyy-MM-dd"
                                                        placeholderText="クリックして日付を入力"
                                                    />
                                                </span>　　<span>
                                                    <select name="firstSelectedTime" id="firstSelectedTime"
                                                        value={formData.firstSelectedTime}
                                                        onChange={handleInputChange}>
                                                        <option value="10:00">10:00</option>
                                                        <option value="13:30">13:30</option>
                                                        <option value="16:30">16:30</option>
                                                    </select></span>
                                            </div>
                                            <div>
                                                <span>第2希望日</span>　<span>
                                                    <DatePicker
                                                        name="secondChoiceDate"
                                                        selected={formData.secondChoiceDate}
                                                        onChange={(date) => setFormData({ ...formData, secondChoiceDate: date })}
                                                        dateFormat="yyyy-MM-dd"
                                                        placeholderText="クリックして日付を入力"
                                                    /></span>　　<span>
                                                    <select name="secondSelectedTime" id="secondSelectedTime"
                                                        value={formData.secondSelectedTime}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="10:00">10:00</option>
                                                        <option value="13:30">13:30</option>
                                                        <option value="16:30">16:30</option>
                                                    </select></span>
                                            </div>
                                            <div>
                                                <span>第3希望日</span><span>
                                                    <DatePicker
                                                        name="firstChoiceDate"
                                                        selected={formData.thirdChoiceDate}
                                                        onChange={(date) => setFormData({ ...formData, thirdChoiceDate: date })}
                                                        dateFormat="yyyy-MM-dd"
                                                        placeholderText="クリックして日付を入力"
                                                    /></span>　　<span>
                                                    <select name="thirdSelectedTime" id="thirdSelectedTime"
                                                        value={formData.thirdSelectedTime}
                                                        onChange={handleInputChange}>
                                                        <option value="10:00">10:00</option>
                                                        <option value="13:30">13:30</option>
                                                        <option value="16:30">16:30</option>
                                                    </select></span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>確認事項</th>
                                        <td>
                                            <p className="caption">
                                                <span style={captionStyle}>
                                                    あてはまるものにチェックしてください</span></p>

                                            <ul className="list-block">
                                                <li className="u-check">
                                                    <input name="checklist" type="checkbox" id="conf1" value="妊娠、または授乳中"
                                                        onChange={handleInputChange}
                                                        checked={formData.checklist.includes('妊娠、または授乳中')} />
                                                    <label htmlFor="conf1">妊娠、または授乳中</label>
                                                </li>
                                                <li className="u-check">
                                                    <input name="checklist" type="checkbox" id="conf2" value="ケロイド体質"
                                                        onChange={handleInputChange}
                                                        checked={formData.checklist.includes('ケロイド体質')} />
                                                    <label htmlFor="conf2">ケロイド体質</label>
                                                </li>
                                                <li className="u-check">
                                                    <input name="checklist" type="checkbox" id="conf3" value="金属アレルギー"
                                                        onChange={handleInputChange}
                                                        checked={formData.checklist.includes('金属アレルギー')}
                                                    />
                                                    <label htmlFor="conf3">金属アレルギー</label>
                                                </li>
                                                <li className="u-check">
                                                    <input name="checklist" type="checkbox" id="conf4"
                                                        value="直近3週間前後に美容系サービスを受けた、または受ける予定がある"
                                                        onChange={handleInputChange}
                                                        checked={formData.checklist.includes('直近3週間前後に美容系サービスを受けた、または受ける予定がある')}
                                                    />
                                                    <label htmlFor="conf4">直近3週間前後に美容系サービスを受けた、または受ける予定がある</label>
                                                </li>
                                                <li className="u-check">
                                                    <input name="checklist" type="checkbox" id="conf5"
                                                        value="心療内科、メンタルクリニックを受診中、および受診予定"
                                                        onChange={handleInputChange}
                                                        checked={formData.checklist.includes('心療内科、メンタルクリニックを受診中、および受診予定')}
                                                    />
                                                    <label htmlFor="conf5">心療内科、メンタルクリニックを受診中、および受診予定</label>
                                                </li>
                                                <li className="u-check">
                                                    <input name="checklist" type="checkbox" id="conf6" value="ユベラ・トコフェロール(ビタミンE)服用注"
                                                        onChange={handleInputChange}
                                                        checked={formData.checklist.includes('ユベラ・トコフェロール(ビタミンE)服用注')}
                                                    />
                                                    <label htmlFor="conf6">ユベラ・トコフェロール(ビタミンE)服用注</label>
                                                </li>
                                                <li className="u-check">
                                                    <input name="checklist" type="checkbox" id="conf7" value="持病、皮膚疾患、アレルギー体質"
                                                        onChange={handleInputChange}
                                                        checked={formData.checklist.includes('持病、皮膚疾患、アレルギー体質')}
                                                    />
                                                    <label htmlFor="conf7">持病、皮膚疾患、アレルギー体質</label>
                                                </li>
                                                <li className="u-check">
                                                    <input name="checklist" type="checkbox" id="conf8" value="直近でのイベントがある(結婚式、卒業式など)"
                                                        onChange={handleInputChange}
                                                        checked={formData.checklist.includes('直近でのイベントがある(結婚式、卒業式など)')}
                                                    />
                                                    <label htmlFor="conf8">直近でのイベントがある(結婚式、卒業式など)</label>
                                                </li>
                                            </ul>
                                            <p className="caption">※医師の診断により施術が出来ない、または有料のパッチテストにて確認が必要な場合がございます。 </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>アートメイク経験</th>
                                        <td>
                                            <ul className="list-block harf">
                                                <li className="u-radio">
                                                    <input name="experience" type="radio" id="exp1" value="経験無し"
                                                        onChange={handleInputChange}
                                                        checked={formData.experience === '経験無し'} // 해당 항목이 선택된 경우에만 체크되도록
                                                    />
                                                    <label htmlFor="exp1">経験無し</label>
                                                </li>
                                                <li className="u-radio">
                                                    <input name="experience" type="radio" id="exp2" value="1年以内に経験"
                                                        onChange={handleInputChange}
                                                        checked={formData.experience === '1年以内に経験'} // 해당 항목이 선택된 경우에만 체크되도록
                                                    />
                                                    <label htmlFor="exp2">1年以内に経験</label>
                                                </li>
                                                <li className="u-radio">
                                                    <input name="experience" type="radio" id="exp3" value="1～3年前に経験"
                                                        onChange={handleInputChange}
                                                        checked={formData.experience === '1～3年前に経験'} // 해당 항목이 선택된 경우에만 체크되도록
                                                    />
                                                    <label htmlFor="exp3">1～3年前に経験</label>
                                                </li>
                                                <li className="u-radio">
                                                    <input name="experience" type="radio" id="exp4" value="3年以上前に経験"
                                                        onChange={handleInputChange}
                                                        checked={formData.experience === '3年以上前に経験'} // 해당 항목이 선택된 경우에만 체크되도록
                                                    />
                                                    <label htmlFor="exp4">3年以上前に経験</label>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>その他ご質問事項等</th>
                                        <td><textarea name="remarks" rows="5" className="wide"
                                            onChange={handleInputChange}
                                            value={formData.remarks}
                                        ></textarea></td>
                                    </tr>
                                </thead>
                            </table>
                            <div className="form-privacy">
                                <h3 className="form-privacy_title">ご予約に関する注意事項</h3>
                                <p>
                                    こちらのフォームは仮のお問い合わせ受付です。<br />上記の予約フォームにご入力後、当クリニックより折り返しご連絡させて頂き、提示した日時のご了承を頂いた時点で予約確定となります。<br />メールでご連絡がつかない場合は、お電話にてご連絡させていただくこともございますのでご了承くださいませ。
                                </p>
                                <p>ご予約フォームよりメール送信後、当クリニックより内容確認メールが24時間以内に届かない場合は、お手数ですが再度ご予約フォームをご記入の上、ご送信ください。<br />
                                </p>
                                <p>コロナワクチンの予防接種を予定されている場合、1週間前後は予約を避けてください。</p>
                                <h4 className="form-privacy_subtitle">【メール指定受信拒否設定をされている方へ】</h4>
                                <p>
                                    お使いのメールサービス等の設定により「迷惑メール」と認識され、メールが届かない場合や迷惑メールフォルダに入っている場合もございますので一度ご確認ください。<br />受信されるデバイスで迷惑メールの設定をされている場合、onclinic.res@gmail.comからの受信が行えるよう、設定のご確認をお願い致します。
                                </p>
                            </div>
                            <div className="form-privacy">
                                <h3 className="form-privacy_title">プライバシーポリシー</h3>
                                <div className="form-privacy_inner scroll">
                                    <p>御アートメイク（KARIS Beauty
                                        Clinic）（以下「当クリニック」といいます。）は、お客様のプライバシー・個人情報（以下、個人情報と称します）を保護し、ご提供いただいた個人情報の取扱いについて、最大限の注意を払います。個人情報の利用には利用目的を特定し、特定された目的以外の利用はいたしません。
                                    </p>
                                    <dl>
                                        <dt>方針1</dt>
                                        <dd>すべての事業で取扱う個人情報及び従業者等の個人情報の取扱いに関し、個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守致します。</dd>
                                        <dt>方針2</dt>
                                        <dd>個人情報の取得や利用にあたっては、あらかじめお客様の同意を得て、適法かつ公正な方法で取得します。特定された利用目的の達成に必要な範囲を超えた個人情報の取扱い（目的外利用）はいたしません。</dd>
                                        <dt>方針3</dt>
                                        <dd>ご本人の同意を得ている場合を除き、取得した個人情報を第三者に提供することはいたしません。ただし、法令等にもとづき、取得した個人情報を第三者に提供する場合があります。</dd>
                                        <dt>方針4</dt>
                                        <dd>当クリニックは、個人情報の取扱いに関する苦情及び相談を受けた場合は、その内容について迅速に事実関係等を調査し、合理的な期間内に誠意をもって対応致します。</dd>
                                        <dt>方針5</dt>
                                        <dd>個人情報の毀損、漏洩、不正取得を防止するために、個人情報の保護に関する内部規程を定め、適切な体制を整えるとともに、厳重なセキュリティ対策を実施する等、必要かつ適切な措置を講じます。</dd>
                                        <dt>方針6</dt>
                                        <dd>個人情報を利用する必要がなくなったときは、遅滞なく消去するよう努めます。</dd>
                                    </dl>
                                    <p>個人情報の取扱いに関するご相談・苦情について<br />当クリニックの個人情報の取扱いに関するご相談や苦情等のお問い合わせについては、 下記の窓口までご連絡ください。</p>
                                    <p>［お問い合わせ先］<br />御アートメイク（KARIS Beauty Clinic）<br />　受付時間：10:00～19:00</p>
                                </div>
                            </div>
                            <div className="form-privacy">
                                <h3 className="form-privacy_title">キャンセルポリシー</h3>
                                <p>
                                    ご予約のキャンセル及びご変更を希望される場合、前日までに電話、メールにてご連絡をお願い致します。<br />
                                    ご予約日当日のキャンセル及びご変更を希望される場合、規定のキャンセル料のご負担がございます。ご連絡なしに5分以上の遅刻をされた場合も当日キャンセルとさせて頂きますのでご了承ください。
                                </p>
                            </div>
                            <div className="form-consent">
                                <label className="lp_submit_label">
                                    <input
                                        name="policy"
                                        type="checkbox"
                                        id="consent1"
                                        onChange={handleInputChange}
                                        checked={formData.policy}
                                    />
                                    {/* {% valconsent1} /> */}
                                    <label htmlFor="consent1">プライバシーポリシー及びキャンセルポリシーに同意する</label>
                                </label>
                            </div>
                            <div className="form-button">
                                {/* <input type="hidden" name="内容を送信する" value="内容を送信する" /> */}
                                <input id="submit" type="submit"
                                    value="内容を送信する"
                                    className="button button-send"
                                    disabled={!formData.policy} // policy가 체크되지 않았을 때 버튼을 비활성화
                                />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <footer className="lp_footer">
                Copyright@ 御アートメイク（KARIS Beauty Clinic） all rights reserved. </footer>
            <ul className="lp_footer-fixed-button">
                <li className="lp_buttons lp_buttons--mail">
                    <a href="#form">WEB予約</a>
                </li>
                <li className="lp_buttons lp_buttons--line">
                    <a href="https://lin.ee/CWXo7Q3" target="_blank" rel="noreferrer">LINE 予約・相談</a>
                </li>
            </ul>
            <p className="pagetop">
                <a href="#header">
                    <img src="/img/common/pagetop.png" alt="ページ先頭へ" />
                </a>
            </p>


        </>
    );
}

export default LpIndex;