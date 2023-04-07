function FlowClinic () {
    return (

      <div className='flow-area text-center'>
      <div className='u-layout__inner'>

        <div className='flow-title'>
          <h4>On Clinic 施術の流れ</h4>
        </div>

        <div className='flow-div'>
          <div className='flow-contents'>
            <h5 className='flow-step'>STEP 1</h5>
            <img src='/img/on-flow/電話相談.jpeg' alt='' className='img-boder img-resize' />
            <h6 className='flow-text'>
              予約
            </h6>
          </div>

          <div className='flow-contents'>
            <h5 className='flow-step'>STEP 2</h5>
            <img src='/img/on-flow/カウンセリング1.jpeg' alt='' className='img-boder img-resize' />
            <h6 className='flow-text'>
            問診、同意書、診察
            </h6>
          </div>

          <div className='flow-contents'>
            <h5 className='flow-step'>STEP 3</h5>
            <img src='/img/on-flow/決済.jpeg' alt='' className='img-boder img-resize' />
            <h6 className='flow-text'>
              カウンセリング
            </h6>
          </div>

        </div>
        <div className='flow-div'>
          <div className='flow-contents'>
            <h5 className='flow-step'>STEP 4</h5>
            <img src='/img/on-flow/デザイン1.jpeg' alt='' className='img-boder img-resize' />
            <h6 className='flow-text'>
            デザイン
            </h6>
          </div>

          <div className='flow-contents'>
            <h5 className='flow-step'>STEP 5</h5>
            <img src='/img/on-flow/施術.jpeg' alt='' className='img-boder img-resize' />
            <h6 className='flow-text'>
            施術
            </h6>
          </div>

          <div className='flow-contents'>
            <h5 className='flow-step'>STEP 6</h5>
            <img src='/img/on-flow/アフターケアー.jpeg' alt='' className='img-boder img-resize' />
            <h6 className='flow-text'>
            決済
            </h6>
          </div>

        </div>
      </div>
    </div>
    )
}

export default FlowClinic;