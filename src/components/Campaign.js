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

                <a className='campaign-banner-box' href="/mens/">
                    <img className='campaign-banner' src='img/campaign/banner6.webp' alt='grand_open_banner'></img>
                </a>
            </center>

            <center className='campaign-banner-box-title '>

<a className='campaign-banner-box' href="https://lin.ee/87QWTkV">
    <img className='campaign-banner' src='img/campaign/banner7.webp' alt='5peroff_banner'></img>
</a>
</center>

            <center className='campaign-banner-box-title '>

                <a className='campaign-banner-box' href="#price">
                    <img className='campaign-banner' src='img/campaign/banner1.webp' alt='5peroff_banner'></img>
                </a>
            </center>

 

            <center className='campaign-banner-box-title '>

                <a className='campaign-banner-box' href="#price">
                    <img className='campaign-banner' src='img/campaign/banner3.webp' alt='hokuro_event_banner'></img>
                </a>
            </center>

            <div className="reservation-message black-text">
                {/* <p>ご一緒にオープンイベントにどうぞ！</p> */}
                <p>ご予約はお早めに！</p>
                {/* <Treatment></Treatment> */}
            </div>
        </div>
    );
}

export default Campaign;