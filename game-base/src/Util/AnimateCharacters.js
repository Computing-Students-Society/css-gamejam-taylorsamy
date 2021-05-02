import {useState} from 'react'

 const AnimateCharacter = (maxSteps, walkSpeed) => {
    const [step, setStep] = useState(0)
    const [direction, setDirection] = useState(0)
    const [frame, setFrame] = useState(0)

    const DIRECTION_MAP = {
        w: 3,
        a: 1,
        s: 0,
        d: 2
    }

    function animate(dir) {
        setDirection(() => {
            setFrame((prevFrame) => {
                let nextFrame = prevFrame/walkSpeed >= 1 ? 0 : prevFrame + 1;
                setStep((prevStep) => {
                    let nextStep = nextFrame === 0 ? prevStep + 1 : prevStep;
                    return nextStep > maxSteps ? 0 : nextStep;
                })
                return nextFrame;
            })

            return dir;
        })
    }

    return {step, direction, DIRECTION_MAP, animate}
}
export default AnimateCharacter