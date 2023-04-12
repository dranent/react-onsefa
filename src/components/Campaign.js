function Campaign() {
    return (
        <div>
            <div className='campaign'>

                <center>
                    <h2 className='campaign-title'>CAMPAIGN</h2>
                    <h6>キャンペーン</h6>
                </center>
            </div>


            <center className='campaign-banner-box-title '>

                <a className='campaign-banner-box' href="#price">
                    <img className='campaign-banner' src='img/grand_open_banner_2.png' alt='grand_open_banner'></img>
                </a>
            </center>

            <center className='campaign-banner-box-title '>

                <a className='campaign-banner-box' href="#price">
                    <img className='campaign-banner' src='img/campaign/banner1.jpg' alt='5peroff_banner'></img>
                </a>
            </center>

            <center className='campaign-banner-box-title '>

                <a className='campaign-banner-box' href="#price">
                    <img className='campaign-banner' src='img/campaign/banner2.jpg' alt='5peroff_banner'></img>
                </a>
            </center>

            <center className='campaign-banner-box-title '>

                <a className='campaign-banner-box' href="#price">
                    <img className='campaign-banner' src='img/campaign/banner3.png' alt='hokuro_event_banner'></img>
                </a>
            </center>

            <div class="reservation-message black-text">
                <p>ご一緒にオープンイベントにどうぞ！</p>
                <p>ご予約はお早めに！</p>
                {/* <Treatment></Treatment> */}
            </div>
        </div>
    );
}

export default Campaign;