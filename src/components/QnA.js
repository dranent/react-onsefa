import React, { useState } from "react";
import { Container, Row, Button, Collapse } from "react-bootstrap";
import { AiFillCaretDown } from 'react-icons/ai';

function QnAClinic() {
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open13, setOpen13] = useState(false);
    const [open14, setOpen14] = useState(false);
    const [open15, setOpen15] = useState(false);
    const [open16, setOpen16] = useState(false);
    const [open17, setOpen17] = useState(false);
    const [open18, setOpen18] = useState(false);
    const [open19, setOpen19] = useState(false);
    const [open20, setOpen20] = useState(false);
    const [open21, setOpen21] = useState(false);
    const [open22, setOpen22] = useState(false);
    const [open23, setOpen23] = useState(false);

    return (
        <Container className='qna-area padding-left padding-top padding-right' id='qna-a'>
        <Row className='margin-1em'><div>
          <h4>よくある質問</h4>
        </div>
        </Row>
        <Row className='margin-1em'><div>
          <h5 className='qna-sub-title'>施術について</h5>
        </div>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen9(!open9)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open9}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : どのくらい持続しますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open9 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open9} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 個人差はありますが、大体1年から2年にかけて代謝と共に薄くなっていきます。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen10(!open10)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open10}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : メイクはいつから大丈夫ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open10 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open10} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : カサブタが取れたら可能です。7日から10日で取れます。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen11(!open11)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open11}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 施術中の痛みはありますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open11 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open11} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 痛みは個人差があります。その日の体調が影響しますので前日にアルコールを控えて睡眠をよくとることをおすすめします。
              </h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen12(!open12)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open12}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 施術後は腫れますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open12 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open12} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 眉毛の腫れはほぼありません。アイラインとリップは翌日まで腫れることがございます。
              </h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen13(!open13)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open13}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 定着までに何回施術が必要ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open13 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open13} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 施術は2回で定着になります。皮膚タイプや過去の残り具合によって3回目以降が必要な場合もございます。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen14(!open14)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open14}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 施術によるリスクはありますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open14 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open14} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 色素は時間と共に70％から90％消えていきますが、100％消えるわけではありませんのでご了承ください。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen15(!open15)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open15}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : MRIは大丈夫ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open15 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open15} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : MRIを受けることは問題ありませんが、事前報告は必要になります。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen16(!open16)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open16}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 肌が弱いのですが施術は可能ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open16 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open16} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : はい、可能です。カウンセリング時に相談の上施術させて頂きます。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen17(!open17)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open17}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : アトピーでも施術は可能ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open17 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open17} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 予約前にご確認致します。重度の症状をお持ちの方の場合は施術をお断りさせて頂くケースがございます。予めご相談頂けますと幸いです。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen18(!open18)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open18}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 金属アレルギーでも施術は可能ですか
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open18 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open18} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 基本的に問題はございませんが、アレルギーをお持ちの方は申し出てください。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen19(!open19)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open19}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 持病や飲んでいる薬によって施術が出来ない可能性はありますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open19 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open19} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : はい、休薬が必要な成分がございますので飲んでる薬があれば予約前にご確認お願い致します。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen20(!open20)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open20}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 妊娠中は施術を受けられますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open20 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open20} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 妊娠中の方は麻酔を使用しますので施術は受けれません。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen21(!open21)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open21}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 男性も施術は可能ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open21 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open21} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : もちろんです。おすすめします。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen22(!open22)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open22}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : アフターケアですることはありますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open22 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open22} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 施術部位を触らないようご注意ください。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen23(!open23)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open23}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 洗顔・入浴はいつから大丈夫ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open23 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open23} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 3日間施術部位に水や洗顔など直接当たらないように気を付けてください。入浴、サウナ、プール等は5日間避けてください。（シャワーは大丈夫です。）
              </h6>
            </div>
          </Collapse>
        </Row>
        </Container>
    )
}

function QnAAcademy () {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);

    return (
        <Container className='qna-area padding-left padding-top padding-right' id='qna-a'>
        <Row className='margin-1em'><div>
          <h5 className='qna-sub-title'>教育について</h5>
        </div>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 学べる技法はマシンですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 眉毛の毛並みとヘアラインは手彫りを学びます。眉毛、アイライン、リップ、SMPはマシンです。
              </h6>

            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text"
            aria-expanded={open2}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 人体への講習は行いませんか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open2 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open2} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : クリニック内で医療従事者のみモニター施術可能です。</h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen3(!open3)}
            aria-controls="example-collapse-text"
            aria-expanded={open3}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>Q : どのような方が実際に受けられていますか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open3 ? 'open' : ''}`} />
            </div>
            <h6>

            </h6>
          </Button>
          <Collapse in={open3} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 基本医療従事者の看護師が多いです。
                医療従事者以外はモニター施術以外なら可能です。</h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen4(!open4)}
            aria-controls="example-collapse-text"
            aria-expanded={open4}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : まったくの初心者ですが、大丈夫ですか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open4 ? 'open' : ''}`} />
            </div>
            <h6>

            </h6>
          </Button>
          <Collapse in={open4} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 初心者用のカリキュラムがあるのでお任せください。</h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen5(!open5)}
            aria-controls="example-collapse-text"
            aria-expanded={open5}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 針とインクは受講者が準備するとありますが、どこで買えますか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open5 ? 'open' : ''}`} />
            </div>
            <h6>

            </h6>
          </Button>
          <Collapse in={open5} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : マシン、インク、ニードル等施術に必要なものはSEFAアカデミーで購入可能です。</h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen6(!open6)}
            aria-controls="example-collapse-text"
            aria-expanded={open6}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : この講習を受けると、実際に人に施術できるレベルになれますか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open6 ? 'open' : ''}`} />
            </div>
            <h6>

            </h6>
          </Button>
          <Collapse in={open6} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : ゴム練習シートだけだと難しいので、モニター施術受講をおすすめします。</h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen7(!open7)}
            aria-controls="example-collapse-text"
            aria-expanded={open7}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : アフターフォローはありますか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open7 ? 'open' : ''}`} />
            </div>
            <h6>

            </h6>
          </Button>
          <Collapse in={open7} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : もちろんです。
                補講も可能で、その他アカデミー卒業生はいつでも気楽にご連絡ください。</h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen8(!open8)}
            aria-controls="example-collapse-text"
            aria-expanded={open8}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 麻酔は使用しますか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open8 ? 'open' : ''}`} />
            </div>
            <h6>

            </h6>
          </Button>
          <Collapse in={open8} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : モニター施術の時は麻酔を使用します。練習の時は使用しません。</h6>
            </div>
          </Collapse>
        </Row>
      </Container>
    )
}

function QnAClinicForMen() {
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);
  const [open15, setOpen15] = useState(false);
  const [open16, setOpen16] = useState(false);
  const [open17, setOpen17] = useState(false);
  const [open18, setOpen18] = useState(false);
  const [open19, setOpen19] = useState(false);
  const [open22, setOpen22] = useState(false);
  const [open23, setOpen23] = useState(false);

  return (
      <Container className='qna-area padding-left padding-top padding-right' id='qna-a'>
      <Row className='margin-1em'><div>
        <h4>よくある質問</h4>
      </div>
      </Row>
      <Row className='margin-1em'><div>
        <h5 className='qna-sub-title'>施術について</h5>
      </div>
      </Row>

      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen9(!open9)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open9}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : どのくらい持続しますか？
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open9 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open9} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : 個人差はありますが、大体1年から2年にかけて代謝と共に薄くなっていきます。
            </h6>
          </div>
        </Collapse>
      </Row>

      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen10(!open10)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open10}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : メイクはいつから大丈夫ですか？
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open10 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open10} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : カサブタが取れたら可能です。7日から10日で取れます。
            </h6>
          </div>
        </Collapse>
      </Row>

      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen11(!open11)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open11}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : 施術中の痛みはありますか？
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open11 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open11} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : 痛みは個人差があります。その日の体調が影響しますので前日にアルコールを控えて睡眠をよくとることをおすすめします。
            </h6>
          </div>
        </Collapse>
      </Row>
      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen12(!open12)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open12}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : 施術後は腫れますか？
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open12 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open12} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : 眉毛の腫れはほぼありません。アイラインとリップは翌日まで腫れることがございます。
            </h6>
          </div>
        </Collapse>
      </Row>
      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen13(!open13)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open13}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : 定着までに何回施術が必要ですか？
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open13 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open13} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : 施術は2回で定着になります。皮膚タイプや過去の残り具合によって3回目以降が必要な場合もございます。
            </h6>
          </div>
        </Collapse>
      </Row>

      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen14(!open14)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open14}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : 施術によるリスクはありますか？
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open14 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open14} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : 色素は時間と共に70％から90％消えていきますが、100％消えるわけではありませんのでご了承ください。
            </h6>
          </div>
        </Collapse>
      </Row>

      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen15(!open15)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open15}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : MRIは大丈夫ですか？
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open15 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open15} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : MRIを受けることは問題ありませんが、事前報告は必要になります。
            </h6>
          </div>
        </Collapse>
      </Row>

      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen16(!open16)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open16}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : 肌が弱いのですが施術は可能ですか？
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open16 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open16} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : はい、可能です。カウンセリング時に相談の上施術させて頂きます。
            </h6>
          </div>
        </Collapse>
      </Row>

      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen17(!open17)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open17}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : アトピーでも施術は可能ですか？
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open17 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open17} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : 予約前にご確認致します。重度の症状をお持ちの方の場合は施術をお断りさせて頂くケースがございます。予めご相談頂けますと幸いです。
            </h6>
          </div>
        </Collapse>
      </Row>

      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen18(!open18)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open18}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : 金属アレルギーでも施術は可能ですか
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open18 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open18} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : 基本的に問題はございませんが、アレルギーをお持ちの方は申し出てください。
            </h6>
          </div>
        </Collapse>
      </Row>

      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen19(!open19)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open19}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : 持病や飲んでいる薬によって施術が出来ない可能性はありますか？
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open19 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open19} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : はい、休薬が必要な成分がございますので飲んでる薬があれば予約前にご確認お願い致します。
            </h6>
          </div>
        </Collapse>
      </Row>

      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen22(!open22)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open22}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : アフターケアですることはありますか？
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open22 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open22} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : 施術部位を触らないようご注意ください。
            </h6>
          </div>
        </Collapse>
      </Row>

      <Row className='margin-1em'>
        <Button
          className='text-left'
          onClick={() => setOpen23(!open23)}
          aria-controls="example-collapse-text text-left"
          aria-expanded={open23}
          variant="light"
        >
          <div className='text-center'>
            <h6 className='qna-q'>
              Q : 洗顔・入浴はいつから大丈夫ですか？
            </h6>
            <AiFillCaretDown className={`qna-arrow ${open23 ? 'open' : ''}`} />
          </div>
        </Button>
        <Collapse in={open23} className='margin-top-1em'>
          <div id="example-collapse-text">
            <h6>
              A : 3日間施術部位に水や洗顔など直接当たらないように気を付けてください。入浴、サウナ、プール等は5日間避けてください。（シャワーは大丈夫です。）
            </h6>
          </div>
        </Collapse>
      </Row>
      </Container>
  )
}


export { QnAClinic, QnAAcademy,QnAClinicForMen };