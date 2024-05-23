import * as React from 'react'
import Dk from '../assets/divineknots.png'
import ArrowL from '../assets/Vector.png'
import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { styled, alpha, Box } from '@mui/system';
import PropTypes from 'prop-types';
import { Slider as BaseSlider, sliderClasses } from '@mui/base/Slider';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, FormLabel, Switch } from '@mui/material'


const SurveyForm = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const [index, setIndex] = useState(1)

  const [spendValue, setSpendValue] = useState(50000);

  const [inputValue, setInputValue] = useState('')

  const [inputValues, setInputValues] = useState([])

  const [error, setError] = useState(false)


  const [finalArray, setFinalArray] = useState([])

  const [foodSpend, setFoodSpend] = useState(0);

  const [venue, setVenue] = useState(0);

  const [logistics, setLogistics] = useState(0);

  const [beautySalons, setBeautySalons] = useState(0);

  const [entertainment, setEntertainment] = useState(0);

  const [videography, setVideography] = useState(0);

  const [miscellaneous, setMiscellaneous] = useState(0);

  const [decorations, setDecorations] = useState(0);



  const setAllPercentages = () => {



    let sum = foodSpend + venue + logistics + beautySalons + entertainment + videography + miscellaneous + decorations;
    console.log(sum)
    if (sum <= 100) {

      if (newRow) {

        let newPercentages = [];
        newPercentages.push(foodSpend)
        newPercentages.push(venue)
        newPercentages.push(logistics)
        newPercentages.push(beautySalons)
        newPercentages.push(entertainment)
        newPercentages.push(videography)
        newPercentages.push(miscellaneous)
        newPercentages.push(decorations)
        newPercentages.push(customPercentage)
        console.log(newPercentages)
        setFinalArray(newPercentages)
        return;
      }

      let newPercentages = [];
      newPercentages.push(foodSpend)
      newPercentages.push(venue)
      newPercentages.push(logistics)
      newPercentages.push(beautySalons)
      newPercentages.push(entertainment)
      newPercentages.push(videography)
      newPercentages.push(miscellaneous)
      newPercentages.push(decorations)
      console.log(newPercentages)
      setFinalArray(newPercentages)
    }
    else {
      console.log("Sum is greater than the total spendings")
      handleOpen()


      // sum = 0;
    }
  }


  const TextRef = useRef(null)

  const prevIndex = () => {
    if (index > 1) {
      setIndex(index - 1)
      setInputValue('')
    }
  }

  const nextindex = () => {
    if (index < 6) {
      setIndex(index + 1)
      setInputValue('')
    }
  }




  let Questions = [
    {
      id: 1,
      question: 'First Name',
      type: 'text',
      placeholder: 'Type Your Answer here...',
    },
    {
      id: 2,
      question: 'Last Name',
      type: 'text',
      placeholder: 'Type Your Answer here...',
    },
    {
      id: 3,
      question: 'Email',
      type: 'email',
      placeholder: 'jhon@gmail.com',
    },
    {
      id: 4,
      question: 'Phone Number',
      type: 'number',
      placeholder: '+923330003033',
    },
    {
      id: 5,
      question: 'Region',
      type: 'text',
      placeholder: 'Hyderabad , Karachi etc',
    },
    {
      id: 6,
      question: 'How much did you spend on a wedding recently?',
      type: 'text',
      placeholder: '10,0000',
    },

  ]



  const generateTable = (event) => {

    if (newRow) {
      console.log(event.target.value)
      setSpendValue(event.target.value)
      let single = 0;
      single = 100 / 9

      let singleValue = Math.floor(single);

      setFoodSpend(singleValue)
      setVenue(singleValue)
      setLogistics(singleValue)
      setBeautySalons(singleValue)
      setEntertainment(singleValue)
      setVideography(singleValue)
      setMiscellaneous(singleValue)
      setDecorations(singleValue)
      setCustomPercentage(singleValue)
      return;
    }
    console.log(event.target.value)
    setSpendValue(event.target.value)
    let single = 0;
    single = 100 / 8

    let singleValue = Math.floor(single);

    setFoodSpend(singleValue)
    setVenue(singleValue)
    setLogistics(singleValue)
    setBeautySalons(singleValue)
    setEntertainment(singleValue)
    setVideography(singleValue)
    setMiscellaneous(singleValue)
    setDecorations(singleValue)

    // setPercent(newPercentages)
    // console.log(percent)

  }

  useEffect(() => {

    console.log(inputValues)
  }, [inputValues])



  useEffect(() => {
    TextRef.current.scrollIntoView({ behavior: 'smooth' })
    gsap.fromTo(TextRef.current, { x: 1000 }, { x: 0, duration: 1, ease: 'power4.out' })
    // console.log(inputValues)
  }
    , [index])

  const inputValueSaved = () => {
    if (inputValue === '' && finalArray === null) {

      setError(true)
      return;

    }
    if (inputValue !== '' && index !== 6) {
      //console.log(inputValue)
      //console.log("Entered in input vlauess")
      setInputValues([...inputValues, inputValue])
      setInputValue('')
      // //console.log(inputValues)

    }
    else if (index == 6) {
      setInputValues([...inputValues, finalArray])
      // //console.log(inputValues)
    }

    // make loop to nelect the the null arrays from inputvalues


    for (let i = 0; i < inputValues.length; i++) {
      if (inputValues[i] === null) {
        inputValues.splice(i, 1);
      }
    }

    //console.log(inputValues)


    if (index < 6) {
      setIndex(index + 1)
    }
    setError(false)
    setInputValue('')
  }
  useEffect(() => {
    //console.log(spendValue)
  }, [spendValue])

  useEffect(() => {
    if (error == true) {
      setTimeout(() => {
        setError(false)
      }, 3000);
    }
  }, [error])
  function SliderValueLabel({ children }) {
    return <span className="valueLabel">{children}</span>;
  }

  SliderValueLabel.propTypes = {
    children: PropTypes.element.isRequired,
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const blue = {
   
      100: '#a855f7',
      200: '#a855f7',
      300: '#fff',
      400: '#fff',
      500: '#a855f7',
      600: '#a855f7',
      700: '#a855f7',
      800: '#fff',
      900: '#fff',
 
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Slider = styled(BaseSlider)(
    ({ theme }) => `
  color: ${theme.palette.mode === 'light' ? blue[500] : blue[400]};
  height: 6px;
  width: 100%;
  padding: 16px 0;
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &.${sliderClasses.disabled} {
    pointer-events: none;
    cursor: default;
    color: ${theme.palette.mode === 'light' ? grey[300] : grey[600]};
    opacity: 0.4;
  }

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 6px;
    background-color: currentColor;
    opacity: 0.3;
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 6px;
    background-color: currentColor;
  }

  & .${sliderClasses.thumb} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: -6px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    background-color: ${theme.palette.mode === 'light' ? blue[500] : blue[400]};
    transition-property: box-shadow, transform;
    transition-timing-function: ease;
    transition-duration: 120ms;
    transform-origin: center;

    &:hover {
      box-shadow: 0 0 0 6px ${alpha(
      theme.palette.mode === 'light' ? blue[200] : blue[300],
      0.3,
    )};
    }

    &.${sliderClasses.focusVisible} {
      box-shadow: 0 0 0 8px ${alpha(
      theme.palette.mode === 'light' ? blue[200] : blue[400],
      0.5,
    )};
      outline: none;
    }

    &.${sliderClasses.active} {
      box-shadow: 0 0 0 8px ${alpha(
      theme.palette.mode === 'light' ? blue[200] : blue[400],
      0.5,
    )};
      outline: none;
      transform: scale(2.5);
    }
  }

  & .${sliderClasses.mark} {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 99%;
    background-color: ${theme.palette.mode === 'light' ? blue[200] : blue[700]};
    transform: translateX(-50%);
  }

  & .${sliderClasses.markActive} {
    background-color: ${theme.palette.mode === 'light' ? blue[500] : blue[400]};
  }

  & .valueLabel {
    font-family: IBM Plex Sans;
    font-weight: 600;
    font-size: 18px;
    position: relative;
    top: -2em;
    text-align: center;
    align-self: center;
  }
`,
  );

  const [customService, setCustomService] = useState('')
  const [customPercentage, setCustomPercentage] = useState(0)

  const [newRow, setNewRow] = useState(false)
  const [newField, setNewField] = useState(false)
  useEffect(() => {
    if (newField === true) {
      console.log(newField)
      if (TextRef.current) {

        TextRef?.current?.scrollIntoView({ behavior: 'smooth' })
      }
      gsap.fromTo(TextRef.current, { x: 1000 }, { x: 0, duration: 1, ease: 'power4.out' })
    }
  }, [newField])




  const handleModal = () => {
    setNewRow(true)
    setNewField(false)

  }


  return (
    <div className=' back w-full min-h-[100vh] flex flex-col overflow-hidden' >
      {/*  create a custom model */}
      {
        newField && <><div ref={TextRef} className={` w-[400px] m-x-auto absolute top-[600px]  z-30 scroll-smooth  h-[300px] bg-pink-200 flex flex-col justify-center items-center gap-4 `}>
          <div className='flex flex-col justify-center items-start w-[80%] '>
            <label className="text-xl " htmlFor="">Service</label>
            <input className='w-full' type="text" value={customService} onChange={(e) => { setCustomService(e.currentTarget.value) }} />
          </div>
          <div className='flex flex-col justify-center items-start w-[80%]' >
            <label className='text-xl' htmlFor="">Percentage</label>
            <input className='w-full' type="number" value={customPercentage} onChange={(e) => { setCustomPercentage(e.currentTarget.value) }} />
          </div>
          <button className='w-[70px] bg-pink-400 rounded-md active:scale-105' type='submit' onClick={() => { handleModal() }} > Submit </button>
        </div></>
      }



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Exception
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Sum is greater than the total spendings  The sum of all the percentages should be less than or equal to 100
          </Typography>
        </Box>
      </Modal>
      <div className='w-full ' >
        <img src={Dk} alt="DivineKnots" />
      </div>
      <div className='w-full flex justify-center  '><h1 className='heading uppercase text-6xl'>Divine <br /> Knots</h1></div>
      {Questions.map((data) => (
        index === data.id && <div ref={TextRef} key={data.id} className='w-full h-[400px]  translate-x- flex justify-center' ><div className='w-[50%] h-[100%] flex flex-col items-start justify-around'>
          <h3 className='text-3xl'>{data.id} . {data.question}</h3>

          {index == 6 ? <><Box sx={{ width: 800 }}>
            <Slider
              aria-label="Temperature"
              defaultValue={50000}
              getAriaValueText={valuetext}
              shiftStep={30}
              step={50000}
              value={spendValue}
              onChange={(event) => generateTable(event)}
              marks
              min={50000}
              max={1000000}
              slots={{ valueLabel: SliderValueLabel }}
            />
          </Box></> : <>{<input required value={inputValue} onChange={(e) => { setInputValue(e.currentTarget.value) }} className='border-b-2 border-black bg-transparent h-[50px] w-[400px] text-2xl outline-none  placeholder-black' type={data.type} placeholder={data.placeholder} />}
          </>}
          {error && <label className='text-red-900 text-2xl' htmlFor=""> Required a Valid Data</label>}
        </div>
        </div>

      ))
      }

      {index === 6 && <> <div className="flex justify-center items-center  ">
        <table className="min-w-max shadow-md bg-transparent rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-purple-500 text-white text-left">Services</th>
              <th className="py-3 px-6 bg-purple-500 text-white text-left">Spending amount in %</th>
            </tr>
          </thead>
          <tbody>


            <tr  >
              <td className="py-3 px-6">spend on food?</td>
              <td className="py-3 px-6"> {foodSpend} %    <>


                <input type="range" name="foodspend" id="food" value={foodSpend} onChange={(event) => setFoodSpend(event.target.value)} className='w-[600px] range-input appearance-none  h-3 bg-purple-500 rounded-lg overflow-hidden  ' />
                {/* <Box sx={{ width: 300 }}> */}
                {/* <Slider
        aria-label="Temperature"
        defaultValue={foodSpend}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        value={foodSpend}
        onChange={(event) => setFoodSpend(event.target.value)}
        shiftStep={5}
        step={5}
        marks
        min={0}
        max={100}
      />
      <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
    </Box> */}

              </> </td>
            </tr>




            <tr >
              <td className="py-3 px-6">spend on the venue</td>
              <td className="py-3 px-6"> {venue} %   <>
                <input type="range" name="foodspend" id="food" value={venue} onChange={(event) => setVenue(event.target.value)} className='w-[600px] range-input appearance-none  h-3 bg-purple-500 rounded-lg overflow-hidden  ' />

              </></td>
            </tr>
            <tr>
              <td className="py-3 px-6">spend on logistics?(Rent cars, Buses)</td>
              <td className="py-3 px-6"> {logistics} %   <>
                <input type="range" name="foodspend" id="food" value={logistics} onChange={(event) => setLogistics(event.target.value)} className='w-[600px] range-input appearance-none  h-3 bg-purple-500 rounded-lg overflow-hidden  ' />

              </></td>
            </tr>
            <tr>
              <td className="py-3 px-6">spend on Beauty Salons?</td>
              <td className="py-3 px-6"> {beautySalons} %   <>
                <input type="range" name="foodspend" id="food" value={beautySalons} onChange={(event) => setBeautySalons(event.target.value)} className='w-[600px] range-input appearance-none  h-3 bg-purple-500 rounded-lg overflow-hidden  ' />

              </></td>
            </tr>
            <tr>
              <td className="py-3 px-6">spend on Entertainment?</td>
              <td className="py-3 px-6"> {entertainment} %   <>
                <input type="range" name="foodspend" id="food" value={entertainment} onChange={(event) => setEntertainment(event.target.value)} className='w-[600px] range-input appearance-none  h-3 bg-purple-500 rounded-lg overflow-hidden  ' />

              </></td>
            </tr>
            <tr>
              <td className="py-3 px-6">spend on Videography/Photography?</td>
              <td className="py-3 px-6"> {videography} %   <>
                <input type="range" name="foodspend" id="food" value={videography} onChange={(event) => setVideography(event.target.value)} className='w-[600px] range-input appearance-none  h-3 bg-purple-500 rounded-lg overflow-hidden  ' />

              </></td>
            </tr>
            <tr>
              <td className="py-3 px-6">spend on miscellaneous?(Gifts etc.)</td>
              <td className="py-3 px-6"> {miscellaneous} %   <>
                <input type="range" name="foodspend" id="food" value={miscellaneous} onChange={(event) => setMiscellaneous(event.target.value)} className='w-[600px] range-input appearance-none  h-3 bg-purple-500 rounded-lg overflow-hidden  ' />

              </></td>
            </tr>
            <tr>
              <td className="py-3 px-6">spend on decorations?</td>
              <td className="py-3 px-6"> {decorations} %   <>
                <input type="range" name="foodspend" id="food" value={decorations} onChange={(event) => setDecorations(event.target.value)} className='w-[600px] range-input  appearance-none  h-3 bg-purple-500 rounded-lg overflow-hidden  ' />

              </></td>
            </tr>
            {newRow && <>
              <tr>
                <td className="py-3 px-6">{customService}</td>
                <td className="py-3 px-6"> {customPercentage} %   <>
                  <input type="range" name="foodspend" id="food" value={customPercentage} onChange={(event) => setCustomPercentage(event.target.value)} className='w-[600px] range-input  appearance-none  h-3 bg-purple-500 rounded-lg overflow-hidden  ' />

                </></td>
              </tr></>}


          </tbody>
        </table>
      </div></>}
      {index === 6 && <>
        <div className='w-full flex justify-start pl-48 items-center'>
          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='email-alerts' mb='0'>
              Add something extra?
            </FormLabel>
            <Switch id='email-alerts' value={newField} onChange={() => { setNewField(!newField) }} />
          </FormControl>

        </div>
      </>}

      <div className='w-full h-[200px] flex justify-center' ><div className='w-[50%] h-[100%] flex justify-start items-center gap-4  '>
        <button onClick={() => { prevIndex() }} className='flex justify-center active:scale-90  items-center rounded-md w-[50px] h-[50px] bg-[#A253D5]'><img src={ArrowL} alt="arrow" /></button> <button onClick={() => { index == 6 ? setAllPercentages() : inputValueSaved() }} className='flex justify-center items-center active:scale-90 rounded-xl w-[50%] h-[50px] bg-[#A253D5] text-xl font-bold text-white ' >Next</button>
      </div></div>
      <div className='w-full flex justify-center items-center ' > <div className='w-[60%] flex justify-end items-center gap-4'>

        <button onClick={() => { prevIndex() }} className='flex justify-center active:scale-90 items-center rounded-md w-[50px] h-[50px] bg-[#A253D5]'><img src={ArrowL} alt="arrow" /></button>
        {index === 6 ? (<button onClick={() => { inputValueSaved() }} className='flex justify-center items-center active:scale-90 rounded-xl w-[50%] h-[50px] bg-[#A253D5] text-xl font-bold text-white ' >Submit</button>) : (<button onClick={() => { nextindex() }} className='flex justify-center items-center active:scale-90 rounded-md w-[50px] rotate-180 h-[50px] bg-[#A253D5]'><img src={ArrowL} alt="arrow" /></button>)}</div>

      </div>
    </div>
  )
}

export default SurveyForm