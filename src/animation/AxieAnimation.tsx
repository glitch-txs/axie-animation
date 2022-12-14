import * as PIXI from 'pixi.js'
import React, { useEffect, useRef, useState, FunctionComponent } from 'react'
import { PuffLoading } from './puff-loading/PuffLoading'
import { PlaygroundGame } from './Figures/PlaygroundGame'
import 'pixi-spine'
import { AxieAnimationType } from './utils/types'
import s from './styles.module.css'

export const def: AxieAnimationType = {
  axieId:NaN,
  animationId: [27,28,29,30],
  delay: 1.8,
  scaleAxie: 1,
  puffySize: 200,
  YPosition: 2,
 style: {
    width: 600,
    height: 500,
    transparent: true,
    resolution: window.devicePixelRatio,
  },
}

PIXI.settings.PRECISION_FRAGMENT = PIXI.PRECISION.HIGH

export const AxieAnimation: FunctionComponent<AxieAnimationType> = ({ 
  axieId, 
  animationId = def.animationId,
  delay = def.delay, 
  scaleAxie = def.scaleAxie, 
  YPosition = def.YPosition,
  style = def.style,
  puffySize = def.puffySize
}) => {

  const [loading, setLoading] = useState<boolean>()
  const [animation, setAnimation] = useState<string>('Animation')
  const [count, setCount] = useState<number>(0)

  const container = useRef<HTMLDivElement>(null)
  const gameRef = useRef<PlaygroundGame | null>(null)

  const [browser, setBrowser] = useState<Boolean>(true)

  const [intervalID, setIntervalID] = useState<NodeJS.Timer>()

  //Removes animation glitch when browser is not focus and get's focus back.
  useEffect(() => {
    
    window.addEventListener('blur', ()=>setBrowser(false)) 

    window.addEventListener('focus', ()=>setBrowser(true))

    return ()=>{
      window.removeEventListener('blur', ()=>setBrowser(false)) 

      window.removeEventListener('focus', ()=>setBrowser(true))
    }
  }, [])

  //Initializes The Canvas and First Axie
  useEffect(() => {
    if(animationId && typeof delay !== 'undefined' && scaleAxie && typeof YPosition !== 'undefined'){
      if (!container) return
      if (!container.current) return
      const canvasContainer = container.current
      if (canvasContainer.childElementCount > 0) {
        canvasContainer.lastChild?.remove()
      }
      setLoading(true)
      const game = new PlaygroundGame({ axieId, animationId, delay, scaleAxie, setLoading, style, YPosition, setIntervalID })
      gameRef.current = game
      gameRef.current.startGame()
      canvasContainer.appendChild(game.view)
    }
    

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy()
      }
    }
    
  }, [])

  useEffect(() => {
    if(count === 0){
      setCount(1)
      return
    } else {
      setLoading(true)
      if(gameRef && gameRef.current && animationId && typeof delay !== 'undefined' && scaleAxie){
        gameRef.current.changeSpine({ axieId, animationId, delay, scaleAxie, setLoading, app: gameRef.current, setIntervalID })
      }
    }
  }, [axieId, scaleAxie])

  useEffect(() => {

    const onChangeAnimation = (animationId: number[], delay: number) => {
      setAnimation(animation)
        gameRef?.current?.currentFigure?.changeCurrentAnimation(animationId, delay, setIntervalID)
    }

    if(count === 0){
      return
    }else{
      if(animationId && typeof delay !== 'undefined'){
        clearInterval(intervalID)
        onChangeAnimation(animationId, delay)
      }
    }

  }, [animationId, delay, browser])
  

  return (
    <div style={{ height:`${style?.height}px`, width:`${style?.width}px`, position:'relative' }}>
      <div ref={container}  className={s.canvas}>
        {loading && (<PuffLoading size={puffySize}/>)}
      </div>
    </div>
  )
}
