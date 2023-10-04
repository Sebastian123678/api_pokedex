import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import '../components/HomePage/styles/HomesPage.css'

const HomesPage = () => {
  // import { useSelector } from "react-redux"
  // const trainer = useSelector(store => store.trainer)
  // console.log(trainer);
  
  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleTrainer = e => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className="homePage">
      <img className="homePage_img" src="image 12.png" alt="Pokedex" />
        <h2  className="homePage_title">Hi Trainer!</h2>
        <p className="homePage_subtitle">To start, please, enter your trainer nickname</p>
        <form className="homePage_form" onSubmit={handleTrainer}>
            <input className="homePage_input" ref={inputTrainer} type="text" placeholder="Your name"/>
            <button className="homePage_btn_start">Start!</button>
        </form>
    </div>
  )
}

export default HomesPage