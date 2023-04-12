
import { AiFillPhone } from 'react-icons/ai';
import { Container, Row, Table } from 'react-bootstrap';

function Access() {
    return (
        <div>
            {/* ACCESS */}
            <Container className='text-center access' id='access'>
                <Row>
                    <h4>ACCESS</h4>
                    <h4>On Clinic & Sefa Artmake Academy</h4>
                    <h6>〒104-0061 東京都中央区銀座1-5-13 ZX銀座ビル4F</h6>
                    <h6>営業時間 </h6>
                    <h6>日月火水木：11:00-20:00</h6>
                    <h6>金土：10:00-20:00</h6>
                    <h2>
                        <AiFillPhone />
                        <a href="tel:0355799319">03-5579-9319</a>
                    </h2>
                </Row>

                <div className="time-table">
                    <Table responsive className='time-table-inner'>
                        <tbody>
                            <tr>
                                <td></td>
                                <td key={0}>月</td>
                                <td key={1}>火</td>
                                <td key={2}>水</td>
                                <td key={3}>木</td>
                                <td key={4}>金</td>
                                <td key={5}>土</td>
                                <td key={6}>日/祝</td>
                            </tr>
                            <tr>
                                <td>11:00 - 20:00</td>
                                <td key={0}>●</td>
                                <td key={1}>●</td>
                                <td key={2}>●</td>
                                <td key={3}>●</td>
                                <td key={4}></td>
                                <td key={5}></td>
                                <td key={6}>●</td>

                            </tr>
                            <tr>
                                <td>10:00 - 20:00</td>
                                <td key={0}></td>
                                <td key={1}></td>
                                <td key={2}></td>
                                <td key={3}></td>
                                <td key={4}>●</td>
                                <td key={5}>●</td>
                                <td key={6}></td>

                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className="google-maps">
                    <iframe
                        title='googlemaps'
                        // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12964.355608363963!2d139.7669851!3d35.6748129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e3ddd4bba87b7e1!2sSefa%20Artmake%20Clinic%20%26%20Academy!5e0!3m2!1sko!2sjp!4v1671517355220!5m2!1sko!2sjp"
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0889028952465!2d139.7647964151112!3d35.67481288019577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7938443b71%3A0x5e3ddd4bba87b7e1!2sON%20Clinic%20%26%20Sefa%20Artmake%20Academy!5e0!3m2!1sja!2sjp!4v1675678797270!5m2!1sja!2sjp'
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </div>
            </Container>
        </div>
    )
}

export default Access ;