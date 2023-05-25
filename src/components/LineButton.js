export default function LineButton () {
    return (
        <div>
        <center>
          <div className='line_btn'>
            <div onClick={() => {
              window.location.href = 'https://lin.ee/87QWTkV';
            }}>
              <img src='/img/line.svg' className='line-icon' alt='line-icon'></img>
              <center><h4 className='line_txt'>VIP 相談</h4></center>
            </div>
          </div>
        </center>
        </div>
    ); 
}

