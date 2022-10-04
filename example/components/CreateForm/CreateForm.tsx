import React, { useState } from 'react'
import style from './CreateForm.module.css'

type Props = {
    setAxieId: (axieId: number) => void
}

const CreateForm = ({ setAxieId }: Props) => {

  const [value, setValue] = useState<number>(1235)

  return (
    <>
      <div className={style.formContainer} >
        <input onChange={ e => setValue(Number(e.target.value))} type="number" className={style.input} placeholder='set Axie ID' />
        <button className={style.btn} onClick={()=>setAxieId(value)} >Create Axie</button>
      </div>
    </>
  )
}

export default CreateForm