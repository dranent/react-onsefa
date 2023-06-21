function FlowClinic () {
    return (

      <div className='flow-area text-center'>
      <div className='u-layout__inner'>

        <div className='flow-title'>
          <h4>On Artmake 施術の流れ</h4>
        </div>

        <div className='flow-div'>
          <div className='flow-contents'>
            <h5 className='flow-step'>STEP 1</h5>
            <img src='/img/on-flow/予約.webp' alt='' className='img-boder img-resize' />
            <h6 className='flow-text'>
              予約
            </h6>
          </div>

          <div className='flow-contents'>
            <h5 className='flow-step'>STEP 2</h5>
            <img src='/img/on-flow/問診.webp' alt='' className='img-boder img-resize' />
            <h6 className='flow-text'>
            問診、同意書、診察
            </h6>
          </div>

          <div className='flow-contents'>
            <h5 className='flow-step'>STEP 3</h5>
            <img src='/img/on-flow/カウンセリング.webp' alt='' className='img-boder img-resize' />
            <h6 className='flow-text'>
              カウンセリング
            </h6>
          </div>

        </div>
        <div className='flow-div'>
          <div className='flow-contents'>
            <h5 className='flow-step'>STEP 4</h5>
            <img src='/img/on-flow/デザイン.webp' alt='' className='img-boder img-resize' />
            <h6 className='flow-text'>
            デザイン
            </h6>
          </div>

          <div className='flow-contents'>
            <h5 className='flow-step'>STEP 5</h5>
            <img src='/img/on-flow/施術.webp' alt='' className='img-boder img-resize' />
            <h6 className='flow-text'>
            施術
            </h6>
          </div>

          <div className='flow-contents'>
            <h5 className='flow-step'>STEP 6</h5>
            <img src='/img/on-flow/決済.webp' alt='' className='img-boder img-resize' />
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