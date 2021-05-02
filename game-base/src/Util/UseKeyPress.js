import {useEffect} from 'react'

export default function useKeyPress(callback){
    useEffect(
        () => {
            window.addEventListener("keydown", callback)
            return () => window.removeEventListener("keydown", callback)
        },
        []
    )
}