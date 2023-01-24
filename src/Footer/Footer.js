import React from 'react';
import { Button } from 'react-bootstrap';

export default function Fixed_bottom() {
    return (
        <>
            <div className='fixed_reserve_pc'>
                <div className='inner_fixed_reserve_pc'>

                    <div className='res_btn'>
                        <div onClick={() => {
                            window.location.href = '#reserve';
                        }}>
                            <img src='/img/icon-calendar.png' className='res-icon' alt='res-icon'></img>
                            <h4 className='res_txt'>WEB予約はこちら</h4>
                            
                        </div>
                    </div>

                    <Button href='#sefa-top' className='top-btn' variant="outline-secondary">⇡</Button>

                </div>


            </div>

                


        </>
    )
}