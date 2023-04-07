import { Table } from 'react-bootstrap';
import Tooltip from '../components/tooltip';
import { monitorPrice } from '../StringData';
import TryFilterButton from '../instagram.js';

function PriceClinic() {
    return (
        <div className="price-table" id='price'>
            <div>
                <h4>ON CLINIC 施術料金表</h4>
                <h6>単位:円(税込)</h6>
            </div>
            <Table responsive striped bordered>
                <tbody>

                    <tr>
                        <td><h6>施術メニュー</h6></td>
                        <td>定価</td>
                        <td className='campaign-price'>OPEN CAMPAIGN 価格</td>
                    </tr>
                    <tr>
                        <td>1部位 (モニター1回価格) 3分割
                            <Tooltip text={monitorPrice}>
                                <button className='tooltip-btn'>モニターとは?</button>
                            </Tooltip>
                            <div className="price-container">
                                <img src='/img/price/3part.png' className='price-img' alt='3part-img' /></div>
                        </td>
                        <td className='campaign-price'>初めての方におすすめ！</td>
                        <td className='campaign-price'>15,000(税込)</td>
                    </tr>
                    <tr>
                        <td>1部位 (モニター1回価格) 2分割
                            <Tooltip text={monitorPrice}>
                                <button className='tooltip-btn'>モニターとは?</button>
                            </Tooltip>
                            <div className="price-container">
                                <img src='/img/price/2part.png' className='price-img' alt='3part-img' /></div>
                        </td>
                        <td className='list-price'>27,000(税込)</td>
                        <td className='campaign-price'>25,000(税込)</td>
                    </tr>

                    <tr>
                        <td>眉毛お試し(モニター1回価格)
                            <Tooltip text={monitorPrice}>
                                <button className='tooltip-btn'>モニターとは?</button>
                            </Tooltip>
                            <div className="price-container">
                                <img src='/img/price/1part.png' className='price-img' alt='3part-img' /></div>
                        </td>
                        <td className='campaign-price'>初めての方におすすめ！	</td>
                        <td className='campaign-price'>33,000(税込)</td>
                    </tr>

                    <tr>
                        <td>眉毛(モニター2回セット価格)
                            <Tooltip text={monitorPrice}>
                                <button className='tooltip-btn'>モニターとは?</button>
                            </Tooltip>
                            <div className="price-container">
                                <img src='/img/price/1part.png' className='price-img' alt='3part-img' /></div>
                        </td>
                        <td className='list-price'>75,000(税込)</td>
                        <td className='campaign-price'>67,500(税込)</td>
                    </tr>
                    <tr>
                        <td><h6>眉毛 (2回セット価格)</h6>
                            <div className='draw-img-bg-area'>
                                <div className='draw-img-bg'>
                                    <h6>ナチュラル</h6>
                                    <center>
                                        <img src='/img/draw/eyebrows-shadow.png' className='draw-img' alt='eyebrows-shadow' />
                                        <TryFilterButton />
                                    </center>
                                </div>
                                <div className='draw-img-bg'>
                                    <h6>パウダー</h6>
                                    <center>
                                        <img src='/img/draw/eyebrow-powder.png' className='draw-img' alt='eyebrow-powder' /></center>
                                </div>
                                <div className='draw-img-bg'>
                                    <h6>コンボ</h6>
                                    <center>
                                        <img src='/img/draw/Eyebrows-Powder-Shadow.png' className='draw-img' alt='powder-shadow' /></center>
                                </div>
                                {/* <div className='draw-img-bg'>
                    <h6>ハーフ＆ハーフ</h6>
                    <center>
                      <img src='/img/draw/Eyebrows-Powder-Shadow.png' className='draw-img' alt='powder-shadow' /></center>
                  </div> */}
                            </div>
                        </td>
                        <td className='list-price'>150,000(税込)</td>
                        <td className='campaign-price'>100,000(税込)</td>
                    </tr>

                    <tr>
                        <td>
                            <h4 className='another-hospital-txt'>他院の施術リタッチ(1回価格)</h4>
                            <Tooltip text='他院にて施術された方で、軽い修正や色を足したい方の特別１回メンテナンスメニューです。'>
                                <button className='tooltip-btn'>他院のリタッチとは?</button>
                            </Tooltip>
                        </td>
                        <td className='list-price'>45,000(税込)</td>
                        <td className='campaign-price'>28,000(税込)</td>
                    </tr>
                    <tr>
                        <td>
                            <h4 className='another-hospital-txt'>他院の施術修正(1回価格)</h4>
                            <Tooltip text='他院で施術してデザインの変更または色改善をしたい方の1回料金です。'>
                                <button className='tooltip-btn'>他院の修正とは?</button>
                            </Tooltip>
                        </td>
                        <td className='list-price'>75,000(税込)</td>
                        <td className='campaign-price'>38,000(税込)</td>
                    </tr>

                    <tr>
                        <td><h6>アイラインモニター(2回セット価格)</h6>
                            <div className='draw-img-bg-area'>
                                <div className='draw-img-bg'>
                                    <center>
                                        <img src='/img/draw/eyeline.png' className='draw-img' alt='eyeline' /></center>
                                </div>
                            </div>


                        </td>
                        <td className='list-price'>60,000(税込)</td>
                        <td className='campaign-price'>54,000(税込)</td>

                    </tr>
                    <tr>
                        <td>アイライン(2回セット価格)</td>
                        <td className='list-price'>120,000(税込)</td>
                        <td className='campaign-price'>80,000(税込)</td>
                    </tr>
                    <tr>
                        <td><h6>リップお試し(1回価格)</h6>
                            <div className='draw-img-bg-area'>
                                <div className='draw-img-bg'>
                                    <center>
                                        <img src='/img/draw/tintlip.png' className='draw-img' alt='tintlip' /></center>
                                </div>
                                <div className='draw-img-bg'>
                                    <center>
                                        <img src='/img/draw/fulllip.png' className='draw-img' alt='fulllip' /></center>
                                </div>
                            </div>
                        </td>
                        <td className='campaign-price'>初めての方におすすめ！</td>
                        <td className='campaign-price'>33,000(税込)</td>
                    </tr>
                    <tr>
                        <td>リップモニター(2回セット価格)</td>
                        <td className='list-price'>75,000(税込)</td>
                        <td className='campaign-price'>67,500(税込)</td>
                    </tr>
                    <tr>
                        <td>リップ(2回セット価格)</td>
                        <td className='list-price'>150,000(税込)</td>
                        <td className='campaign-price'>100,000(税込)</td>
                    </tr>
                    <tr>
                        <td><h6>ヘアラインモニター(2回セット価格)(準備中)</h6>
                            <div className='draw-img-bg-area'>
                                <div className='draw-img-bg'>
                                    <center>
                                        <img src='/img/draw/hairline.png' className='draw-img' alt='hairline' /></center>
                                </div>
                            </div>
                        </td>
                        <td className='list-price'>85,000(税込)</td>
                        <td className='campaign-price'>76,500(税込)</td>
                    </tr>
                    <tr>
                        <td>ヘアライン(2回セット価格)(準備中)</td>

                        <td className='list-price'>170,000(税込)</td>
                        <td className='campaign-price'>120,000(税込)</td>
                    </tr>
                    <tr>
                        <td>眉毛 + アイライン SETモニター(2回セット価格)</td>
                        <td className='list-price'>130,000(税込)</td>
                        <td className='campaign-price'>117,000(税込)</td>
                    </tr>
                    <tr>
                        <td><h6>眉毛 + アイライン SET(2回セット価格)</h6></td>
                        <td className='list-price'>260,000(税込)</td>
                        <td className='campaign-price'>180,000(税込)</td>
                    </tr>

                </tbody>
            </Table>

            <h6>OPEN CAMPAIGN 価格の有効期間 : 2023年3月20日~2024年3月19日</h6>
        </div>
    )
}

function PriceAcademy() {
    return (
        <div className="price-table" id='price'>
            <div>
                <h4>SEFA Artmake Academy 料金表</h4>
                <h6>(単位:円(税込))</h6>
            </div>
            <Table responsive striped bordered>
                <tbody>

                    <tr>
                        <td><h6>チケット数</h6></td>
                        <td >価格</td>
                        <td className='campaign-price'>OPEN CAMPAIGN 価格</td>
                    </tr>
                    <tr>
                        <td><h6>1数</h6>
                        </td>
                        <td className='list-price-academy'>30,000</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><h6>6数</h6></td>
                        <td className='list-price-academy'>180,000</td>
                        <td className='campaign-price'>171,000(5%OFF)</td>
                    </tr>
                    <tr>
                        <td><h6>18数</h6></td>
                        <td className='list-price'>460,000</td>
                        <td className='campaign-price'>414,000(10%OFF)</td>
                    </tr>
                    <tr>
                        <td><h6>24数</h6></td>
                        <td className='list-price'>720,000</td>
                        <td className='campaign-price'>612,000(15%OFF)</td>
                    </tr>
                    <tr>
                        <td><h6>36数</h6></td>
                        <td className='list-price'>1,080,000</td>
                        <td className='campaign-price'>864,000(20%OFF)</td>
                    </tr>
                    <tr>
                        <td><h6>48数</h6></td>
                        <td className='list-price'>1,440,000</td>
                        <td className='campaign-price'>1,080,000(25%OFF)</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export { PriceClinic, PriceAcademy };