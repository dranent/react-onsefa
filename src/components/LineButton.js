function LineButton () {
    return (
        <div>
        <center>
          <div className='line_btn'>
            <div onClick={() => {
              window.location.href = 'https://lin.ee/87QWTkV';
            }}>
              <img src='/img/LINE_Brand_icon.png' className='line-icon' alt='line-icon'></img>
              <h4 className='line_txt'>LINE相談はこちら</h4>
            </div>
          </div>
        </center>
        </div>
    ); 
}