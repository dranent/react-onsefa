import { define,otherClinic, defineIntroduction, defineSefa, defineIntroductionSefa } from "../StringData";

function DefineClinic() {
    return (
        <div className='define-area' id='define'>
            <h4 className='display-enter'>
                {define}
            </h4>
            <h6 className='define-introduction'>
                {defineIntroduction}
            </h6>
        </div>
    )
}

function DefineAcademy() {
    return (
        <div className='defineSefa-area' id='defineSefa'>
            <h4 className='display-enter'>
                {defineSefa}
            </h4>
            <h6 className='defineSefa-introduction display-enter'>
                {defineIntroductionSefa}
            </h6>


            <h6 className='other-clinic display-enter'>{otherClinic}</h6>

        </div>


    )
}

export { DefineClinic , DefineAcademy};