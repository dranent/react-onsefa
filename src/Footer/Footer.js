import React from 'react';
import { Image, Button } from 'react-bootstrap';

export default function Fixed_bottom() {
    return (
        <>
            <div className='fixed_reserve_pc'>
                <div className='inner_fixed_reserve_pc'>

                    <div className='line_btn'>
                        <div onClick={() => {
                            window.location.href = 'https://lin.ee/87QWTkV';
                        }}>
                            <img src='/img/LINE_Brand_icon.png' className='line-icon'></img>
                            <h4 className='line_txt'>LINE相談はこちら</h4>
                            
                        </div>
                    </div>
                    <Button href='#sefa-top' className='top-btn' variant="outline-secondary">⇡</Button>

                </div>


            </div>

                


        </>
    )
}