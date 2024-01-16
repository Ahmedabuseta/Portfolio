import {  useEffect, useState } from "react"

function WordWriter({word,text,setText,className}) {
    const [numLoop, setNumLoop] = useState(0)
    const [isDleting, setIsDeleting] = useState(false)
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }
            , delta)
        return () => clearInterval(ticker);
    }, [text])
    const tick = () => {
        let i = numLoop % word.length
        let fullText = word[i]
        let updatedText = isDleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)
        if (isDleting) {
            setDelta(pervDelta => pervDelta / 2)
        }
        if (!isDleting) {
            setDelta(400 - Math.random() * 100)
        }
        if (!isDleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(2000)
        }
        if (isDleting && updatedText === '') {
            setIsDeleting(false)
            setNumLoop(numLoop + 1);
            setDelta(500)
        }
    }
    return (
        <div className={`${className}`}>
        {text}
        </div>
  )
}
export default WordWriter;