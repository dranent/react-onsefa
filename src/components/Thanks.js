function Thanks() {
    return (
        <div>
            <div className="App">
                <header id="header" className="lower-header">
                    <p className="lower-header_logo">
                        <a href="./">御アートメイク（KARIS Beauty Clinic）</a>
                    </p>
                </header>
                <div className="form-section">
                    <section id="form" className="form-section_inner">
                        <h2 className="p-en-title">
                            <span className="en small">-Reservation</span>
                            <span className="jp">ご予約フォーム</span>
                        </h2>
                        <p className="u-text-bold u-mb-3em u-text-large u-text-center">
                            ご予約・お問合せありがとうございました.<br />近日中に折り返しご連絡致しますのでしばらくお待ち下さい.
                        </p>
                        <p className="u-button-detail u-text-center is-back is-large">
                            <a href="./">ホームへ戻る</a>
                        </p>
                    </section>
                </div>
                <footer className="footer">
                    Copyright@御アートメイク（KARIS Beauty Clinic） all rights reserved.
                </footer>
                <p className="pagetop">
                    <a href="#header">
                        <img src="./img/common/pagetop.png" alt="ページ先頭へ" />
                    </a>
                </p>
                {/* <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
                <script src="./js/breakpoints.js"></script>
                <script src="./js/default.js?date=181101"></script> */}
            </div>
        </div>

    );
}

export default Thanks;
