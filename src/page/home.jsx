import React, {useState,useEffect} from 'react'
import DisplayContainer from '../components/DisplayContainer'
import DynamicButton from '../components/DynamicButton'
import '../css/nav.css'
import '../css/home.css'

export default function Home() {

    const [Varibles, setVaribles] = useState({
      //Bellow attribute give controls over button true - number false -letters
      LearnType: true,
      //LearnCounting: false,
      //Learnletters: false,
      Count: 0,
      Letters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      LetterIndex: 0
    });
    const [Bool, setBool] = useState(false);
    const commonStyle = {
      height: "80px",
      width: "80px",
      borderRadius: "40px",
      margin: "0 40px",
      position: "absolute"
  }
    useEffect(()=>{ 
      //Handling counting
        if(Bool && Varibles.LearnType){
            const interval = setInterval(()=>{
              setVaribles({...Varibles,Count: Varibles.Count+=1})
            }
                ,1500)
            return () => clearInterval(interval)
        }
        if(Varibles.Count > 0){
        alert(`I counted upto ${Varibles.Count}`)
        }

        //Handling letters
        if(Bool && !Varibles.LearnType && Varibles.LetterIndex <= 25){
          const interval = setInterval(()=>{
            setVaribles({...Varibles, LetterIndex: Varibles.LetterIndex += 1})
          }, 1500)
          return () => clearInterval(interval)
        }
        if(Varibles.LetterIndex > 0 && Varibles.LetterIndex <= 25){
          alert(`Last letter was ${Varibles.Letters[Varibles.LetterIndex]}`)
        }
        if(Varibles.LetterIndex > 25){
          alert(`This are the 24 alphabetical letters`);
          setBool(false);
        }
        
        setVaribles({...Varibles,Count: 0, LetterIndex: 0})

    },[Bool,Varibles.LetterIndex])
    //Screen width test
    const [currentWidth, setCurrentWidth] = useState(0);
    useEffect(() => {
      const handleResize = () => {
        setCurrentWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 
    
  return (
    <div className='interface'>
      <h1>Babies to learn</h1>
      <h2>{Varibles.LearnType ? "Numbers" : "Letters"}</h2>
      <DisplayContainer 
      value= {
        Varibles.LearnType 
        ? 
        Varibles.Count 
        : 
        Varibles.Letters[Varibles.LetterIndex]}
      />

      {/* This is the main button */}
      <DynamicButton 
      style={{
        height: "120px",
        width:"120px",
        borderRadius: "60px",
        border: "solid 4px black",
        position: "relative",
        left: currentWidth < 700 ? "30%":"46%",
        color: "blue",
        fontSize: "30px",
        fontWeight: "800"
      }}
      innerName= {Bool ? "Stop" : "Start"}
      click = {()=>{setBool(!Bool)}}
      />
      <div className='nav'>
      <DynamicButton 
      innerName="NUMBERS"
      style={
        Varibles.LearnType ? 
        {
          ...commonStyle,
          border: "red 3px solid",
          left: currentWidth < 700 ? "2%" : "38%"
        } 
        : {
          ...commonStyle,
          left: currentWidth < 700 ? "2%" : "38%"
        }
      }
      click={()=>{
        setVaribles({...Varibles,LearnType: true})
        {!Varibles.LearnType ? setBool(false): null}
      }
    }
      />
      <DynamicButton
      innerName="LETTERS"
      style={!Varibles.LearnType ? 
        {
          ...commonStyle,
          border: "red 3px solid",
          left: currentWidth < 700 ? "38%" : "55%"
        } :
         {...commonStyle,
          left: currentWidth < 700 ? "38%": "55%"
         }
        }
      click={()=>{
        setVaribles({...Varibles,LearnType: false})
        {Varibles.LearnType ? setBool(false): null}
      }}
      />
    </div>
    </div>
  )
}
