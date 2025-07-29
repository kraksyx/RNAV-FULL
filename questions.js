
const questions = [
  {
    question: "Decimetric waves correspond to the frequency range:",
    options: ["3000 to 30000 MHz", "3000 to 30000 KHz", "300 to 3000 MHz", "300 to 3000 KHz"],
    correct: 2
  },
  {
    question: "An aircraft traveling at 330 meters a second transmits a signal at 10 GHz to a stationary receiver. If the aircraft is flying directly towards the receiver and they are approximately at the same height the received frequency will be:",
    options: ["11 MHz", "10.000011 GHz", "9.999989 GHz", "11 GHz"],
    correct: 1
  },
  {
    question: "A half wave dipole aerial suitable for transmitting an RF signal at 18 MHz should have an effective length of:",
    options: ["16.67 meters", "166.67 meters", "83.33 meters", "8.33 meters"],
    correct: 3
  },
  {
    question: "Which of the following statements is true?",
    options: ["A broad bandwidth gives a narrow beam width", "A narrow bandwidth improves beam width", "A transmission's bandwidth is affected by the design of the aerial", "Bandwidth must be reduced in order to reduce noise"],
    correct: 3
  },
  {
    question: "With regards to radio waves, which statement is true?",
    options: ["They are reflected by metallic objects with a size compatible to the wavelength", "The longer the wavelength the greater the surface attenuation", "They travel at 186,000 m a second in a vacuum", "High frequencies need large aerials"],
    correct: 0
  },
  {
    question: "You are at an altitude of 9,000 feet. At a range of 200 nm from a VHF communications transmitter, and you are receiving a good signal.",
    options: ["You should expect this since the transmitter is at a height of 2,000 feet", "You should have been receiving the signal from a range of 240 nm", "You are probably receiving a sky wave signal", "You are probably receiving a duct propagation signal"],
    correct: 3
  },
  {
    question: "The emission characteristics A3E describe:",
    options: ["ILS", "VHF communications", "HF communications", "VOR"],
    correct: 1
  },
  {
    question: "The gain of an aerial is a measure of its ability to:",
    options: ["Focus power", "Transmit intelligence", "Overcome transmitter line resistance", "Compensate for attenuation"],
    correct: 3
  },
  {
    question: "What is the lowest frequency where freedom from static interference can be guaranteed?",
    options: ["3 MHz", "30 MHz", "300 MHz", "3 GHz"],
    correct: 1
  },
  {
    question: "The VHF frequency band has a wavelength limit of:",
    options: ["100 m to 10 m", "1 m to 100 cm", "10 m to 1 m", "100 cm to 10 cm"],
    correct: 2
  },
  {
    question: "The wavelength of a radio signal is 200 meters. What is the frequency?",
    options: ["1.5 KHz", "1.5 GHz", "1.5 MHz", "1.3 MHz"],
    correct: 2
  },
  {
    question: "The approximate ground waves of LF and MF are (by day) ___ and ___ respectively, with ___ suffering more from atmospheric attenuation.",
    options: ["1500nm; 1000nm; MF", "1000nm; 500nm; LF", "1000nm; 300nm; MF", "500nm; 100nm; LF"],
    correct: 2
  },
  {
    question: "As the frequency of a transmitter is increased, the range of the ground wave will:",
    options: ["Decrease", "Decrease only at night", "Increase only over the sea"],
    correct: 0
  },
  {
    question: "An RMI indicates aircraft heading. To convert the RMI bearings of NDBs and VORs to true bearings the correct combination for the application of magnetic variation is:",
    options: ["NDB: aircraft position, VOR: beacon position", "NDB: beacon position, VOR: aircraft position", "Both use aircraft position", "Both use beacon position"],
    correct: 0
  }
];


const questions = [
  {
    question: "Doppler navigation systems use ___ to determine aircraft ground speed and drift?",
    options: ["DVOR", "Phase comparison of signals from ground stations", "Frequency shift in signals reflected from the ground", "DME range measurement"],
    correct: 2
  },
  {
    question: "In day to day use the greatest cause of error in Doppler is:",
    options: ["input error", "sea movement error", "weight error", "pitch error"],
    correct: 0
  },
  {
    question: "The largest error and source of error on a Doppler derived position is:",
    options: ["Cross track due to compass error", "Along track due to TAS computation error", "Cross track due to errors in drift measurement", "Cross track due to error in drift bias"],
    correct: 2
  },
  {
    question: "Updating Doppler is undertaken when:",
    options: ["the co-ordinates are reset to revise the position base on alternative information", "A new database is loaded", "The equipment is re-initialized with the data and time, and the atomic clock is actuated", "all of the above"],
    correct: 0
  },
  {
    question: "After a long period in memory, Doppler:",
    options: ["falls back to INS", "requires updating", "should be switched to manual", "will have wandered more over land than over sea"],
    correct: 1
  },
  {
    question: "Sea bias error:",
    options: ["is due to the movement of the sea and can be partially corrected by the land/sea switch", "is due to the movement of the sea and is not affected by the land/sea switch", "is due to a change in Doppler shift over water and is not affected by the land/sea switch", "is due to a change in Doppler shift over water and is partially corrected by the land/sea switch"],
    correct: 3
  },
  {
    question: "With regard to Doppler navigation system:",
    options: ["updating is the process of entering co-ordinates after taking a fix", "updating can be achieved using VOR/DME fix", "updating must be carried out as soon as possible after a prolonged period in memory", "all of the above are correct"],
    correct: 3
  },
  {
    question: "What frequencies are allocated to Doppler Navigation systems?",
    options: ["8.8 Hz and 13.3 Hz", "8.8 KHz and 13.3 KHz", "8.8 MHz and 13.3 MHz", "8.8 GHz and 13.3 GHz"],
    correct: 3
  },
  {
    question: "A radio facility transmits on a wavelength of 2.22 cm. The facility could be a:",
    options: ["radio altimeter", "Doppler", "LORAN-C", "DME"],
    correct: 1
  },
  {
    question: "The 4-beam moving Janus array aligns with the aircraft centre line by:",
    options: ["rotating the array towards the beams with the smallest Doppler shift", "rotating the array until matched pairs of beams receive the same difference in Doppler shift", "measuring the drift and rotating the array by the same amount", "all of the above"],
    correct: 1
  },
  {
    question: "Which of the following statements is correct when considering a Doppler navigation system?",
    options: ["aerial misalignment will produce an error to drift angle", "sea bias can be reduced by using a gyro stabilized aerial array", "sea movement error produces higher frequency, and thus ground speed as indicated will be too low", "all of the above"],
    correct: 0
  },
  {
    question: "Doppler may unlock over:",
    options: ["shallow fast running water", "a calm sea", "a desert surface", "ice"],
    correct: 1
  },
  {
    question: "Which of the following statements is TRUE in respect of Doppler?",
    options: ["The lower the vehicle speed, the higher the transmission frequency used", "The higher the vehicle speed, the higher the transmission frequency used", "Aerials are stabilized to reduce pitching errors", "Aerials are stabilized to reduce climb errors"],
    correct: 2
  }
];

const questions = [
  {
    "question": "What is the approved frequency band assigned to aeronautical NDBs?",
    "options": [
      "190-1750 Hz",
      "190-1750 KHz",
      "190-1750 MHz",
      "190-1750 GHz"
    ],
    "correct": 1
  },
  {
    "question": "In accordance with Doc 8168, a pilot flying an NDB approach must achieve a tracking accuracy within ____ of the published approach track.",
    "options": [
      "+/- 10\u00b0",
      "+/- 5\u00b0",
      "+/- 2.5\u00b0",
      "+/- 2\u00b0"
    ],
    "correct": 0
  },
  {
    "question": "What actually happens in the ADF receiver when the BFO position is selected?",
    "options": [
      "The BFO circuit is activated, and the receiver accepts only A1A modulated signals",
      "The BFO circuit oscillates at an increased frequency in order to allow identification of A2A NDBs",
      "The BFO circuit is de-activated",
      "The BFO circuit imposes a tone onto the carrier wave to make the NDB\u2019s ident audible"
    ],
    "correct": 3
  },
  {
    "question": "The nominal maximum range of an NDB with a transmitter power is 200 watts is:",
    "options": [
      "40 to 45 NM",
      "100 to 120 NM",
      "150 to 170 NM",
      "200 to 220 NM"
    ],
    "correct": 0
  },
  {
    "question": "The ICAO allocated band of frequencies for NDB is:",
    "options": [
      "255 \u2013 455 KHz",
      "200 \u2013 1750 KHz",
      "255 \u2013 1750 KHz",
      "200 \u2013 455 KHz"
    ],
    "correct": 1
  },
  {
    "question": "Using an ADF loop aerial the maximum signal will be received when:",
    "options": [
      "The loop is in line with the NDB aerial",
      "The loop is at 90\u00b0 to the NDB aerial",
      "Within the promulgated range",
      "During daytime only"
    ],
    "correct": 0
  },
  {
    "question": "What action must be taken to receive a bearing from an ADF:",
    "options": [
      "BFO on",
      "Select the loop position",
      "Both the loop and sense aerials must receive the signal",
      "Select the ANT position"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following is the most significant error in ADF:",
    "options": [
      "Quadrantal error",
      "Coastal refraction",
      "Precipitation static",
      "Static from Cb"
    ],
    "correct": 3
  },
  {
    "question": "When using ADF: (i) the accuracy is (ii) than (iii), because the surface wave is (iv):",
    "options": [
      "(i) by day; (ii) greater; (iii) by night; (iv) not present",
      "(i) by night; (ii) greater; (iii) by day; (iv) not present",
      "(i) by night; (ii) less; (iii) by day; (iv) contaminated by sky waves",
      "(i) by day; (ii) less; (iii) by night; (iv) contaminated by sky waves"
    ],
    "correct": 2
  },
  {
    "question": "Snow will affect ADF by:",
    "options": [
      "Decreasing the range",
      "Decreasing the accuracy",
      "Having no effect",
      "Decreasing the range and accuracy"
    ],
    "correct": 2
  },
  {
    "question": "Do all ADF systems have a sense aerial:",
    "options": [
      "Always",
      "Only when a rotating loop system is being used",
      "Never",
      "Only when a fixed loop system is being used"
    ],
    "correct": 0
  },
  {
    "question": "If an NDB signal is received at a range of 1000 nm:",
    "options": [
      "The signal is a surface wave and is quite usable",
      "It will be a ground wave and will be inaccurate",
      "It is a space wave and will be inaccurate",
      "It is a sky wave and is inaccurate"
    ],
    "correct": 3
  },
  {
    "question": "The maximum errors when using ADF will occur in which of the following situations: (i) Position of the NDB (ii) Angle of cut at the coast",
    "options": [
      "(i) On the coast; (ii) 90\u00b0",
      "(i) Well inland; (ii) 90\u00b0",
      "(i) On the coast; (ii) 15\u00b0",
      "(i) Well inland; (ii) 20\u00b0"
    ],
    "correct": 3
  },
  {
    "question": "NDB operate in the:",
    "options": [
      "VLF and LF bands",
      "LF and MF bands",
      "VLF, LF and MF bands",
      "VLF and MF bands"
    ],
    "correct": 1
  },
  {
    "question": "When considering the use of NDB, night effect has its greatest effect during:",
    "options": [
      "Autumn and winter",
      "When using inland beacons",
      "When using a horizontally polarised signal",
      "At dawn and dusk"
    ],
    "correct": 3
  },
  {
    "question": "An aircraft over the sea will experience (i) coastal refraction effect when the radio waves cross the coastline at (ii) and the NDB is (iii):",
    "options": [
      "(i) More; (ii) 90\u00b0; (iii) Near the coast",
      "(i) Less; (ii) 45\u00b0; (iii) Well inland",
      "(i) Less; (ii) 90\u00b0; (iii) Near the coast",
      "(i) More; (ii) 45\u00b0; (iii) On the coast"
    ],
    "correct": 2
  },
  {
    "question": "When converting VOR and ADF bearings to true, the variation at the (i) should be used for VOR and at the (ii) for ADF:",
    "options": [
      "(i) Aircraft; (ii) aircraft",
      "(i) Aircraft; (ii) station",
      "(i) Station; (ii) aircraft",
      "(i) Station; (ii) station"
    ],
    "correct": 2
  },
  {
    "question": "Two NDBs, one 20 nm from the coast and the other 50 nm further inland. Assuming Coastal Refraction is the same for each, from which NDB will an aircraft flying over the sea receive the greatest error?",
    "options": [
      "The NDB at 20 nm",
      "The NDB at 50 nm",
      "Same when the relative bearing is 090/270",
      "Same when the relative bearing is 180/360"
    ],
    "correct": 1
  },
  {
    "question": "What antennae must be used to obtain an ADF bearing?",
    "options": [
      "Loop",
      "Sense",
      "Loop and sense",
      "Radome"
    ],
    "correct": 2
  },
  {
    "question": "RMI rose is mechanically stuck on 090 degrees. The ADF pointer indicates 225 degrees. What is the relative bearing to the beacon?",
    "options": [
      "225 degrees",
      "135 degrees",
      "Cannot be determined",
      "000 degrees"
    ],
    "correct": 1
  },
  {
    "question": "NDBs transmit mainly in the:",
    "options": [
      "VHF band",
      "UHF band",
      "HF band",
      "MF band"
    ],
    "correct": 3
  },
  {
    "question": "When receiving an NDB signal on an ADF receiver the BFO can be selected OFF for the:",
    "options": [
      "Tone signal on NONA1A",
      "Ident signal on NONA1A",
      "Tone signal on NONA2A",
      "Ident signal on NONA2A"
    ],
    "correct": 3
  },
  {
    "question": "The frequency band chosen for NDB\u2019s is:",
    "options": [
      "Upper MF and lower LF",
      "VLF",
      "Upper LF and lower MF",
      "LF"
    ],
    "correct": 2
  },
  {
    "question": "In order to obtain an ADF bearing the:",
    "options": [
      "Signal must be received by both the sense and loop aerials",
      "Sense aerial must be tuned separately",
      "Mode selector should be switched to LOOP",
      "BFO switch must be selected to ON"
    ],
    "correct": 0
  },
  {
    "question": "Quadrantal errors associated with aircraft Automatic Direction Finding (ADF) equipment are caused by:",
    "options": [
      "Misalignment of the loop aerial",
      "Signal bending caused by electrical interference from aircraft wing",
      "Signal bending by the aircraft metallic surfaces",
      "Sky wave/ground wave contamination"
    ],
    "correct": 2
  },
  {
    "question": "The BFO:",
    "options": [
      "Creates the audio ident for an NDB",
      "Is used to make the ident from an A2A NDB audible",
      "Is used to make the ident from an A1A NDB audible",
      "Is used to determine the signal strength of an NDB"
    ],
    "correct": 2
  }
];

const questions = [
  {
    "question": "ILS markers are identified in the aeroplane by colour light and audio signal. The identification of the outer marker is:",
    "options": [
      "High-pitched dashes; amber light",
      "Low-pitched dots and dashes; amber light",
      "High-pitched dots and dashes; blue light",
      "Low-pitched dashes; blue light"
    ],
    "correct": 3
  },
  {
    "question": "The azimuth and area coverage of a Cat I ILS localiser is:",
    "options": [
      "8\u00b0 at 10 nm, 25\u00b0 at 25 nm",
      "35\u00b0 at 17 nm, 10\u00b0 at 25 nm",
      "8\u00b0 at 35 nm, 25\u00b0 at 10 nm",
      "8\u00b0 at 10 nm, 10\u00b0 at 25 nm"
    ],
    "correct": 1
  },
  {
    "question": "ILS back beams may be received:",
    "options": [
      "When flying outside the area of coverage",
      "Never",
      "When approaching the ILS from behind the glide path aerial",
      "When approaching the ILS from behind the localiser aerial"
    ],
    "correct": 3
  },
  {
    "question": "The emission characteristics of the ILS and a typical localiser frequency are:",
    "options": [
      "A9W, 329.30 MHz",
      "A8W, 110.30 MHz",
      "A9W, 110.70 MHz",
      "A8W, 113.30 MHz"
    ],
    "correct": 1
  },
  {
    "question": "The ILS glide path coverage in elevation is accurate to:",
    "options": [
      "An angle 1.35\u00b0 to an angle of 5.25\u00b0 above the horizontal for a 3\u00b0 glide path",
      "An angle 1.35\u00b0 to an angle of 5.25\u00b0 above the horizontal for a 3.25\u00b0 glide path",
      "An angle 0.45\u00b0 to an angle of 1.75\u00b0 above the horizontal for a 3\u00b0 glide path",
      "An angle 0.45\u00b0 to an angle of 1.75\u00b0 above the horizontal for a 3.25\u00b0 glide path"
    ],
    "correct": 0
  },
  {
    "question": "An aircraft is flying downwind outside the coverage of the ILS. The CDI indications will be:",
    "options": [
      "Unreliable in azimuth and elevation",
      "Reliable in azimuth, unreliable in elevation",
      "No indications will be shown",
      "Reliable in azimuth and elevation"
    ],
    "correct": 0
  },
  {
    "question": "In which band does the ILS glide path operate:",
    "options": [
      "Metric",
      "Centimetric",
      "Decimetric",
      "Hectometric"
    ],
    "correct": 2
  },
  {
    "question": "According to the diagram of the ILS display, the aircraft is:",
    "options": [
      "High on the approach and to the left of the centre line",
      "Low on the approach and to the left of the centre line",
      "High on the approach and to the right of the centre line",
      "Low on the approach and to the right of the centre line"
    ],
    "correct": 3
  },
  {
    "question": "An aircraft is flying an ILS glide path of 2.8\u00b0. What height should it be passing as it approaches the outer marker at 3.9 nm from the ILS touchdown point.",
    "options": [
      "950 ft",
      "1000 ft",
      "1100 ft",
      "1200 ft"
    ],
    "correct": 2
  },
  {
    "question": "An aircraft on a 3\u00b0 ILS approach is flying a ground speed of 150 knots. At the outer marker (4.5 nm from the threshold) the speed must be reduced to 120 knots. The ROD should be reduced by:",
    "options": [
      "120 fpm",
      "150 fpm",
      "170 fpm",
      "190 fpm"
    ],
    "correct": 1
  },
  {
    "question": "The coverage of the ILS localiser at 17 nm for a CAT 1 ILS is guaranteed up to an angle either side of the extended centreline of (i) using the signal outside the coverage limits on the approach side of the localiser aerial (ii) result in reverse sense indications.",
    "options": [
      "(i) 35\u00b0 ; (ii) can",
      "(i) 25\u00b0 ; (ii) cannot",
      "(i) 35\u00b0 ; (ii) cannot",
      "(i) 25\u00b0 ; (ii) can"
    ],
    "correct": 0
  },
  {
    "question": "The maximum safe \u2018fly-up\u2019 indication on the glide path needle (assuming a 5-dot indicator) is:",
    "options": [
      "2 dots",
      "1.5 dots",
      "2.5 dots",
      "1 dot"
    ],
    "correct": 2
  },
  {
    "question": "The rate of descent (in ft/min) for a 3\u00b0 glide-slope at a GS of 140 kt is:",
    "options": [
      "325",
      "640",
      "710",
      "520"
    ],
    "correct": 2
  },
  {
    "question": "The middle marker is usually located at a range of ___, with an audio frequency of ___, and illuminates the ___ light:",
    "options": [
      "4\u20136 nm, 1300 Hz, white",
      "1 km, 400 Hz, white",
      "1 km, 1300 Hz, amber",
      "1 km, 400 Hz, amber"
    ],
    "correct": 2
  },
  {
    "question": "For a 2.7\u00b0 glide path on a Category I ILS the vertical coverage is:",
    "options": [
      "1.22\u00b0 \u2013 4.73\u00b0",
      "2.05\u00b0 \u2013 5.55\u00b0",
      "1.85\u00b0 \u2013 4.75\u00b0",
      "1.35\u00b0 \u2013 5.25\u00b0"
    ],
    "correct": 0
  },
  {
    "question": "For reliable navigation information the approximate coverage of a 3\u00b0 ILS glide slope is:",
    "options": [
      "0.7\u00b0 above and below the glide path and 8\u00b0 either side of the localiser centre line",
      "0.45\u00b0 from the horizontal to 1.75\u00b0 above the glide path and 8\u00b0 either side of the localiser centre line",
      "1.5\u00b0 to 5\u00b0 from the horizontal and 8\u00b0 either side of the localiser",
      "3\u00b0 above and below the glide path and 10\u00b0 either side of the localiser centre line"
    ],
    "correct": 2
  },
  {
    "question": "What frequency is assigned to all ILS marker beacons?",
    "options": [
      "One chosen from between 108\u2013112 MHz at odd tenths",
      "75 MHz",
      "90 Hz",
      "150 Hz"
    ],
    "correct": 1
  },
  {
    "question": "Which of the following is TRUE in respect of using ILS?",
    "options": [
      "When using a CDI you must set the OBS to the localiser course",
      "When using a CDI in the overshoot sector you must disobey the needles",
      "When using an HSI you must set the course arrow to the localiser course",
      "When using an HSI the glide path must be set before approach"
    ],
    "correct": 2
  },
  {
    "question": "The ILS localiser is normally positioned:",
    "options": [
      "300 m from the downwind end of the runway",
      "300 m from the threshold (the glide path)",
      "300 m from the upwind end of the runway",
      "200 m abeam the threshold"
    ],
    "correct": 2
  },
  {
    "question": "ILS glide path transmits lobes which are:",
    "options": [
      "On the same frequency and are separated by phase comparison",
      "On different frequencies which are then phase compared",
      "On different frequencies and have different modulations",
      "On the same frequency and have different modulations"
    ],
    "correct": 1
  }
];


const questions = [
  {
    "question": "Which of the following is an advantage of MLS?",
    "options": [
      "Can be used in inhospitable terrain",
      "Uses the same aircraft equipment as ILS",
      "Has a selective access ability",
      "Is not affected by heavy precipitation"
    ],
    "correct": 0
  },
  {
    "question": "Which answer correctly completes the following statement? The characteristics of an MLS installation are that it uses:",
    "options": [
      "an azimuth transmitter at the approach end of the runway, an elevation transmitter at the upwind end of the runway and two frequencies",
      "one transmitter for both elevation and azimuth and two frequencies",
      "one transmitter for both elevation and azimuth and a single frequency",
      "an elevation transmitter at the approach end of the runway, an azimuth transmitter at the upwind end of the runway and a single frequency"
    ],
    "correct": 3
  },
  {
    "question": "In a MLS the time that elapses between the passage of the TO scan and the FROM scan at the aircraft position is:",
    "options": [
      "not related to the angular position of the aircraft",
      "indirectly proportional to the angular position of the aircraft",
      "directly proportional to the angular position of the aircraft",
      "none of the above are correct"
    ],
    "correct": 2
  },
  {
    "question": "A microwave landing system operates:",
    "options": [
      "on one of 200 channels in the band 5030 to 5090 GHz",
      "on one of 200 channels in the band 5.03 GHz to 5090 GHz",
      "on one of 400 channels in the band 5030 GHz to 5090 GHz",
      "on one of 400 channels in the band 5.03 GHz to 5.09 GHz"
    ],
    "correct": 1
  },
  {
    "question": "MLS consists of:",
    "options": [
      "a common azimuth and elevation transmitter",
      "overlapping centre-line lobe transmission in azimuth angled to provide glide slope information",
      "an azimuth transmitter and an elevation transmitter on separate frequencies and a DME",
      "an azimuth transmitter and an elevation transmitter operating on a shared frequency and a DME"
    ],
    "correct": 3
  },
  {
    "question": "Which of the following statements is TRUE in respect to microwave landing system?",
    "options": [
      "Azimuth and elevation signals use the same aerial on a time share basic",
      "Azimuth and elevation signals are transmitted at the same UHF frequency",
      "A special precision DME, operating in the SHF band, provides range information",
      "Range information is provided by precision DME operating in the UHF"
    ],
    "correct": 3
  },
  {
    "question": "In which frequency band does the Microwave Landing System (MLS) operate?",
    "options": [
      "“SHF”",
      "",
      "",
      ""
    ],
    "correct": 0
  },
  {
    "question": "Distance on MLS is measured by:",
    "options": [
      "measuring the time taken for the primary radar pulse to travel from the MLS transmitter to the aircraft receiver",
      "measuring the time taken for the secondary radar pulse to travel from the MLS transmitter to the aircraft receiver",
      "phase comparison between the azimuth and elevation beams",
      "co-located DME"
    ],
    "correct": 3
  }
];

const questions = [
  {
    "question": "The maximum width of the cone of silence above a VOR at 30000 ft is:",
    "options": [
      "4.1 nm",
      "8.2 nm",
      "11.6 nm",
      "5.8 nm"
    ],
    "correct": 2
  },
  {
    "question": "Refer to figure (062-02) The indication was obtained when the aircraft was at a range of 90 nm from the VOR. Assuming that the VOR is correctly set-up, the radial and horizontal distance the aircraft is off track are:",
    "options": [
      "062 radial and 9 nm right of track",
      "074 radial and 6 nm left of track",
      "242 radial and 6 nm left of track",
      "254 radial and 9 nm right of track"
    ],
    "correct": 0
  },
  {
    "question": "In a VOR the reference signal and the variable signal have a 30 Hz modulation. The variable signal modulation is produced by:",
    "options": [
      "Adding 30 Hz to the transmitted signal",
      "A 30 Hz rotation producing a 30 Hz modulation",
      "Varying the amplitude up and down at \u00b130 Hz",
      "Varying the frequency up and down at \u00b130 Hz"
    ],
    "correct": 1
  },
  {
    "question": "The Course Deviation Indicator shows 248 TO and 3 dots FLY LEFT. If the DME range is 90 nm your VOR radial and distance from the centre line will be:",
    "options": [
      "074; 9 nm",
      "242; 6 nm",
      "062; 9 nm",
      "254; 9 nm"
    ],
    "correct": 2
  },
  {
    "question": "On an HSI (Horizontal Situation Indicator) used in combination with a VOR receiver:",
    "options": [
      "A pictorial presentation of aircraft deviation relative to VOR radials is provided",
      "The lubber line will indicate the reciprocal value of the received radial",
      "The lubber line will indicate the selected radial",
      "There will be no Omni Bearing Selector knob, as this function is automatic on this type of indicator"
    ],
    "correct": 0
  },
  {
    "question": "The phase difference between the VOR reference signal and the variable phase signal measured at an aircraft bearing 297\u00ba (T) from a VOR, where the magnetic variation is 23E, is:",
    "options": [
      "320\u00ba",
      "274\u00ba",
      "297\u00ba",
      "None of the above"
    ],
    "correct": 1
  },
  {
    "question": "The indications of a VOR in an aircraft tracking towards a VOR are 075\u00ba (M) TO and deviation indicator central. A co-located NDB shows 012\u00ba relative. What are the drift and heading in \u00ba(M)?",
    "options": [
      "12oS\u00ba; 087",
      "12oP\u00ba; 063",
      "12oS\u00ba; 063",
      "12oP\u00ba; 087"
    ],
    "correct": 2
  },
  {
    "question": "What is the maximum distance apart a VOR and TACAN can be located and have the same identification?",
    "options": [
      "2000 m",
      "60 m",
      "600 m",
      "6 m"
    ],
    "correct": 2
  },
  {
    "question": "What is the minimum height an aircraft must be to receive signals from a VOR at 196 ft AMSL at a range of 175 nm?",
    "options": [
      "26000 ft",
      "16000 ft",
      "24000 ft",
      "20000 ft"
    ],
    "correct": 1
  },
  {
    "question": "On the B737-400 EHSI what happens if the selected VOR fails?",
    "options": [
      "The display blanks and a fail warning appears",
      "The deviation bar is removed",
      "A fail flag is displayed alongside the display bar",
      "The display flashes"
    ],
    "correct": 1
  },
  {
    "question": "If the signal from a VOR is lost, how is this shown on the B737-400 EHSI display?",
    "options": [
      "By removal of the deviation bar and pointer",
      "By showing a fail flag alongside the deviation bar",
      "A flashing red FAIL message appears in the frequency location",
      "An amber FAIL message appears in the frequency location"
    ],
    "correct": 0
  },
  {
    "question": "What is the maximum theoretical range that an aircraft at FL150 can receive signals from a VOR situated 609 feet above MSL?",
    "options": [
      "156 NM",
      "220 NM",
      "147 NM",
      "184 NM"
    ],
    "correct": 3
  },
  {
    "question": "A VOR is sited at position 58\u00ba00 N 073\u00ba00 W where the magnetic variation equals 32\u00baW. An aircraft is located at position 56\u00ba00 N 073\u00ba00 W where the magnetic variation equals 28\u00baW. The aircraft is on VOR radial:",
    "options": [
      "360",
      "208",
      "212",
      "180"
    ],
    "correct": 2
  },
  {
    "question": "The RMI indicates aircraft magnetic heading. To convert the RMI bearings of NDBs and VORs to true bearings the correct positions to read magnetic variation are: (VOR), (NDB)",
    "options": [
      "Aircraft position, beacon position",
      "Beacon position, beacon position",
      "Beacon position, aircraft position",
      "Aircraft position, aircraft position"
    ],
    "correct": 2
  },
  {
    "question": "An aircraft at FL 100 should be able to receive a VOR ground station at 100 FT above MSL at an approximate maximum range of:",
    "options": [
      "135 NM",
      "123 NM",
      "128 NM",
      "142 NM"
    ],
    "correct": 0
  },
  {
    "question": "An aircraft at 6400 FT will be able to receive a VOR ground station at 100 FT above MSL at an approximate maximum range of:",
    "options": [
      "100 NM",
      "120 NM",
      "110 NM",
      "90 NM"
    ],
    "correct": 2
  },
  {
    "question": "A VOT is:",
    "options": [
      "A test VOR",
      "A terminal VOR",
      "A trial VOR",
      "A tracking VOR"
    ],
    "correct": 0
  },
  {
    "question": "What is the approved frequency band assigned to VOR?",
    "options": [
      "108\u2013117.975 MHz which is LF",
      "108\u2013117.975 MHz which is MF",
      "108\u2013117.975 MHz which is HF",
      "108\u2013117.975 MHz which is VHF"
    ],
    "correct": 3
  },
  {
    "question": "The maximum theoretical range at which an aircraft at FL 230 may receive signals from a VOR facility sited at mean sea level is:",
    "options": [
      "190 NM",
      "230 NM",
      "170 NM",
      "151 NM"
    ],
    "correct": 0
  },
  {
    "question": "An aircraft at FL 350 is using a VOR (2060 AMSL). The maximum theoretical range at which the VOR can be used is:",
    "options": [
      "290 NM",
      "240 NM",
      "225 NM",
      "200 NM"
    ],
    "correct": 0
  },
  {
    "question": "The maximum range an aircraft at FL 270 can receive transmissions from a VOR/DME at 800 ft is:",
    "options": [
      "275 NM",
      "200 NM",
      "240 NM",
      "220 NM"
    ],
    "correct": 2
  },
  {
    "question": "What is the maximum range a transmission from a VOR beacon at 169 ft can be received by an aircraft at FL 012:",
    "options": [
      "60 nm",
      "80 nm",
      "120 nm",
      "220 nm"
    ],
    "correct": 0
  },
  {
    "question": "What information does military TACAN provide for civil aviation users:",
    "options": [
      "Magnetic bearing",
      "DME",
      "Nothing",
      "DME and magnetic bearing"
    ],
    "correct": 1
  },
  {
    "question": "The maximum range an aircraft at FL 370 can receive transmissions from a VOR/DME at 800 ft is:",
    "options": [
      "275 nm",
      "200 nm",
      "243 nm",
      "220 nm"
    ],
    "correct": 0
  },
  {
    "question": "At a range of 200 nm from a VOR, if there is an error of 1\u00ba, how far off the centreline is the aircraft?",
    "options": [
      "3.5 nm",
      "1.75 nm",
      "7 nm",
      "1 nm"
    ],
    "correct": 0
  },
  {
    "question": "The phase difference between the reference and variable signals on QDM 050\u00b0 (VAR 10\u00b0W) for a conventional VOR is:",
    "options": [
      "050\u00b0",
      "040\u00b0",
      "230\u00b0",
      "220\u00b0"
    ],
    "correct": 2
  },
  {
    "question": "Refer to the diagram of a VOR/ILS deviation indicator. Assume that the indicator is set to define the centreline of an airway, that the aircraft is 90 nm from the VOR and inbound to the facility. At the time of observation the aircraft was located on radial:",
    "options": [
      "063",
      "253",
      "245",
      "243"
    ],
    "correct": 0
  },
  {
    "question": "An aircraft on a heading of 270\u00ba (M) has 093 set on the OBS and TO indicated on the VOR L/R deviation indicator. The needle shows two dots fly left. The aircraft is on the:",
    "options": [
      "277 radial",
      "089 radial",
      "097 radial",
      "269 radial"
    ],
    "correct": 3
  },
  {
    "question": "A frequency most suitable for a terminal VOR would be:",
    "options": [
      "108.20",
      "108.15",
      "108.10",
      "118.05"
    ],
    "correct": 0
  },
  {
    "question": "The maximum width of the cone of silence above a VOR at 30,000 ft is:",
    "options": [
      "4.1 nm",
      "8.2 nm",
      "11.6 nm",
      "5.8 nm"
    ],
    "correct": 2
  },
  {
    "question": "A CDI indicates 275/TO with the needle showing 2.5 dots fly right. The aircraft is 20 nm from the beacon on a heading of 330 M. The radial that the aircraft is on and the correct way to turn after intercepting the required track to fly to the facility is:",
    "options": [
      "092 right",
      "100 left",
      "272 right",
      "280 left"
    ],
    "correct": 1
  },
  {
    "question": "You are homing to overhead a VORTAC and will descend from 7500 QNH to be 1000 AMSL by 6 nm DME. Your ground speed is 156 knots and the ROD will be 800 fpm. At what range from the VORTAC do you commence the descent?",
    "options": [
      "27.1 nm",
      "15.8 nm",
      "11.7 nm",
      "30.2 nm"
    ],
    "correct": 0
  },
  {
    "question": "When using a two dot HSI, a deviation of one dot from the computed track represents",
    "options": [
      "2\u00b0",
      "5\u00b0",
      "5 nm",
      "2 nm"
    ],
    "correct": 3
  }
];

const questions = [
  {
    "question": "An aircraft is 100 NM from a VOR facility. Assuming no error when using a deviation indicator where 1 dot = 2\u00b0 deviation, how many dots deviation from the centre line of the instrument will represent the limits of the airway boundary? (Assume that the airway is 10 NM wide)",
    "options": [
      "6.0",
      "3.0",
      "4.5",
      "1.5"
    ],
    "correct": 3
  },
  {
    "question": "An aircraft is attempting to track 186oM on an airway defined by a VOR 80 nm away. The VOR indicates the aircraft position. With these indications the aircraft is on the ___ radial and ___ the airway.",
    "options": [
      "001o outside",
      "181o inside",
      "001o inside",
      "181o outside"
    ],
    "correct": 0
  },
  {
    "question": "An aircraft is on a heading of 100 degrees (m) from a VOR. To make the VOR/ILS deviation indicator needle centralise with the TO flag showing, the following bearing should be selected on the OBS:",
    "options": [
      "100 degrees",
      "110 degrees",
      "290 degrees",
      "280 degrees"
    ],
    "correct": 3
  },
  {
    "question": "The basic principle of operation of a standard VOR is by:",
    "options": [
      "phase comparison between a 108 Mhz reference signal and a 30 Hz variable signal",
      "phase difference between a frequency modulated reference signal and an amplitude modulated variable signal",
      "phase comparison between an amplitude modulated reference signal and a frequency modulated variable signal",
      "phase comparison between a 30 Hz reference signal and a 108 Mhz variable signal"
    ],
    "correct": 1
  },
  {
    "question": "An aircraft is tracking inbound to a VOR beacon on the 105 radial. The setting the pilot should put on the OBS and the CDI indications are:",
    "options": [
      "285, TO",
      "105, TO",
      "285, FROM",
      "105, FROM"
    ],
    "correct": 0
  },
  {
    "question": "An aircraft is on a VOR radial of 235o, heading 003o(M), and with the OBS set to 060. The correct indications are:",
    "options": [
      "TO: 1/2 Scale deflection to the left",
      "FROM: 1/2 Scale deflection to the left",
      "TO: 1/2 Scale deflection to the right",
      "FROM: 1/2 Scale deflection to the right"
    ],
    "correct": 0
  },
  {
    "question": "Using a VOR outside the DOC may result in interference from:",
    "options": [
      "other beacons",
      "other aircraft",
      "sky waves",
      "ground waves"
    ],
    "correct": 0
  },
  {
    "question": "The antenna polar diagram of a conventional VOR:",
    "options": [
      "is always directed towards the aircraft",
      "is like a figure of 8",
      "is a pencil beam",
      "Rotates at 30 revolutions per second"
    ],
    "correct": 3
  },
  {
    "question": "With reference to the VOR:",
    "options": [
      "Failure of the monitor will cause the beacon to cease its ident",
      "A typical VOR frequency is 118.15 Mhz",
      "The TO/FROM indicator shows whether the aircraft is heading towards or away from the beacon",
      "Wide coverage is obtained from only a few beacons"
    ],
    "correct": 0
  },
  {
    "question": "(Refer to figure 062-05) Refer to the diagram of a VOR/ILS deviation indicator. Assume that the indicator is set to define the centreline of an airway, that the aircraft is 90 nm from the VOR and inbound to the facility. At the time of observation the aircraft was located on radial:",
    "options": [
      "063o",
      "253o",
      "256o",
      "243o"
    ],
    "correct": 0
  },
  {
    "question": "If the compass providing information to the RMI suddenly gets a 20\u00b0 deviation:",
    "options": [
      "the magnetic track to the VOR station may be read on the compass card under the tip of the VOR needle",
      "the number of the received radial may still be read on the compass card under the tail of the VOR needle",
      "the relative bearing to the VOR, as observed on the RMI, will jump 20o",
      "all 3 answers are correct"
    ],
    "correct": 3
  },
  {
    "question": "Using a VOR beyond the limits of the DOC may result in:",
    "options": [
      "loss of signal due to line of sight limitations",
      "interference from other VORs operating on the same frequency",
      "sky wave contamination of the VOR signal",
      "scalloping errors"
    ],
    "correct": 1
  },
  {
    "question": "Using a 5 dot CDI, how many dots would show for an aircraft on the edge of an airway at 100 nm from the VOR beacon?",
    "options": [
      "5",
      "2.5",
      "1.5",
      "3"
    ],
    "correct": 2
  },
  {
    "question": "An Omni-bearing selector (OBS) shows full deflection to the left when within range of a serviceable VOR. What angular deviation are you from the selected radial?",
    "options": [
      "10o or more",
      "less than 10o",
      "1.5o or more",
      "2.5o or more"
    ],
    "correct": 0
  },
  {
    "question": "The letters QTX and adjacent symbol indicate a:",
    "options": [
      "VOR/DME",
      "TACAN",
      "VOR",
      "Airport"
    ],
    "correct": 0
  },
  {
    "question": "Which of the following lists information required to input a way point or Phantom Station into a basic VOR/DME-based Area Navigation System?",
    "options": [
      "Magnetic track and distance from the aircraft to the way point or Phantom Station",
      "Magnetic track and distance to a VOR/DME from the way point or Phantom Station",
      "Radials from a minimum of two VORs to the way point or Phantom Station",
      "Radial and distance from a VOR/DME to the way point or Phantom Station"
    ],
    "correct": 3
  },
  {
    "question": "The variable signal of a conventional VOR is:",
    "options": [
      "30 Hz frequency modulated",
      "30 Hz amplitude modulated",
      "9960 Hz frequency modulated",
      "9960 Hz amplitude modulated"
    ],
    "correct": 1
  },
  {
    "question": "Which of the following disturbances is most likely to cause the greatest inaccuracy in ADF bearings?",
    "options": [
      "Coastal refraction",
      "Sky waves",
      "Night effect",
      "Thunderstorms nearby"
    ],
    "correct": 3
  },
  {
    "question": "When using a DVOR, the pilot should be aware that the reference and variable signals are reversed. This:",
    "options": [
      "does not affect the VOR indications in any way",
      "reverses the indications",
      "improves the accuracy",
      "improves the range"
    ],
    "correct": 3
  },
  {
    "question": "If you correctly tuned in a VOR situated to your east, your RMI should read ____, and your OBS would read ____",
    "options": [
      "000; 000 with needle central and TO indicated",
      "090; 090 with needle central and FROM indicated",
      "000; 000 with needle central and FROM indicated",
      "090; 090 with needle central and TO indicated"
    ],
    "correct": 2
  },
  {
    "question": "An aircraft on a heading of 270\u00b0 (M) has 093 set on the OBS and TO indicated on the VOR L/R deviation indicator. The needle shows two dots fly left. The aircraft is on the:",
    "options": [
      "277o radial",
      "089o radial",
      "097o radial",
      "269o radial"
    ],
    "correct": 3
  },
  {
    "question": "What is the value of the selected course?",
    "options": [
      "260o (M)",
      "272o (M)",
      "299o (M)",
      "280o (M)"
    ],
    "correct": 2
  },
  {
    "question": "An aircraft is situated at 30oN \u2013 005oE with a magnetic variation of 10oW. A VOR is located at 30oN \u2013 013oE with a magnetic variation of 15oW. The aircraft is situated on the VOR radial:",
    "options": [
      "101o",
      "281o",
      "286o",
      "256o"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following errors is associated with the use of VOR?",
    "options": [
      "Scalloping",
      "Coastal refraction",
      "Quadrantal error",
      "Night effect"
    ],
    "correct": 0
  },
  {
    "question": "What use if any does TACAN provide to civilian users:",
    "options": [
      "Bearing information only",
      "Bearing and range information",
      "Range information only",
      "It is of no use to civilian pilots"
    ],
    "correct": 2
  },
  {
    "question": "The reference signal of a conventional VOR is:",
    "options": [
      "30 Hz frequency modulated",
      "30 Hz amplitude modulated",
      "9960 Hz frequency modulated",
      "9960 amplitude modulated"
    ],
    "correct": 0
  },
  {
    "question": "The Declared Operational Coverage of a VOR is:",
    "options": [
      "An altitude and range limited by transmitter power",
      "A range limited by transmitter power",
      "An altitude and range limited by signal to noise ratio",
      "A range limited by signal to noise ratio"
    ],
    "correct": 2
  },
  {
    "question": "When comparing conventional and Doppler VOR, which of the following applies to the Doppler VOR:",
    "options": [
      "The reference and variphase signals are reversed but the phase difference remains the same",
      "The reference and variphase signals are the same but the phase difference is reversed",
      "The reference and variphase signals are reversed and the phase relationship remains the same",
      "The reference and variphase signals are reversed and the phase relationship is reversed"
    ],
    "correct": 0
  },
  {
    "question": "What are the indications to show that you are receiving a Doppler VOR:",
    "options": [
      "The identification will always end with a D",
      "There is no difference from the conventional VOR indications",
      "The Doppler VOR identification begins with a D",
      "The ident is spoken eg \u201cAberdeen Doppler VOR\u201d"
    ],
    "correct": 1
  },
  {
    "question": "What is the maximum distance between VOR beacons designating the centreline of an airway (10 nm wide), if the expected VOR bearing error is 5.5\u00b0:",
    "options": [
      "120 nm",
      "109 nm",
      "60 nm",
      "54 nm"
    ],
    "correct": 1
  },
  {
    "question": "Which of the following is a valid frequency (MHz) for a VOR:",
    "options": [
      "107.75",
      "109.90",
      "118.35",
      "112.20"
    ],
    "correct": 3
  },
  {
    "question": "In a conventional VOR the direction of rotation of the signal will be (i) and the variable signal is (ii). In Doppler VOR the reference signal is (iii) and the direction of rotation will (iv):",
    "options": [
      "(i) Clockwise; (ii) FM; (iii) FM; (iv) Clockwise",
      "(i) Anticlockwise; (ii) AM; (iii) AM; (iv) Clockwise",
      "(i) Clockwise; (ii) AM; (iii) FM; (iv) Anticlockwise",
      "(i) Anticlockwise; (ii) AM; (iii) FM; (iv) Anticlockwise"
    ],
    "correct": 2
  },
  {
    "question": "An aircraft is inbound to VOR X on the 073 radial and has a Doppler drift of 12oL. A position report is required when crossing the 133 radial from VOR Y. If the aircraft is on track the RMI indications at the reporting point will be:",
    "options": [
      "Heading : 085 ; X Pointer : 073 ; Y Pointer ; 133",
      "Heading : 085 ; X Pointer : 253 ; Y Pointer ; 133",
      "Heading : 265 ; X Pointer : 073 ; Y Pointer ; 313",
      "Heading : 265 ; X Pointer : 253 ; Y Pointer ; 313"
    ],
    "correct": 3
  },
  {
    "question": "The JAR OPS recommendation for the colour of a VORTAC which is not in use by the FMC is:",
    "options": [
      "White",
      "Green",
      "Magenta",
      "Cyan"
    ],
    "correct": 3
  },
  {
    "question": "The principle of operation of VOR is:",
    "options": [
      "Calculating the frequency difference of separate transmissions",
      "Calculating the frequency difference of separate transmissions",
      "Phase comparison of signals at the same frequency",
      "Secondary radar technique"
    ],
    "correct": 2
  },
  {
    "question": "When using a VOR outside the DOC, the equipment:",
    "options": [
      "May give reverse readings",
      "May suffer from scalloping",
      "May suffer interference from other VORs",
      "Will indicate normally but the accuracy will always be less than 5\u00b0"
    ],
    "correct": 2
  },
  {
    "question": "The indication was obtained when the aircraft was at a range of 50 nm from the VOR. Assuming that the VOR is correctly set-up, the radial and horizontal distance the aircraft is off track are:",
    "options": [
      "269 radial and 5 nm right of track",
      "089 radial and 5 nm left of track",
      "269 radial and 3.3 nm left of track",
      "089 radial and 3.3 nm right of track"
    ],
    "correct": 3
  }
];

const questions = [
  {
    "question": "The maximum theoretical range at which an aircraft at FL80 can obtain bearings from a ground VDF facility sited 325 FT above MSL is:",
    "options": [
      "107 NM",
      "158 NM",
      "134 NM",
      "114 NM"
    ],
    "correct": 2
  },
  {
    "question": "What is the maximum range at which a VDF station at 325 ft can provide a service to an aircraft at FL080?",
    "options": [
      "134 nm",
      "107 nm",
      "91 nm",
      "114 nm"
    ],
    "correct": 0
  },
  {
    "question": "When conducting a QGH approach, responsibility for interpreting the procedure rests with ___, and on a VDF approach responsibility rests with ___:",
    "options": [
      "The controller; the controller",
      "The pilot; the pilot",
      "The pilot; the controller",
      "The controller; the pilot"
    ],
    "correct": 3
  },
  {
    "question": "If, when you are requesting a QDM from an airfield, you are offered a QGH, it means:",
    "options": [
      "The bearing will only be accurate when the aircraft is flying above the QGH level",
      "The VDF service will be handled by a different VDF unit, operating on the same frequency",
      "The VDF unit is prepared to give you assistance during an approach to the airfield, based on VDF bearings",
      "The service will be limited to bearings, no positions will be given by the DF station"
    ],
    "correct": 2
  },
  {
    "question": "Ground DME responders respond at a frequency:",
    "options": [
      "The same as the interrogation signal",
      "63 MHz greater than interrogation frequency",
      "63 MHz lower than interrogation frequency",
      "63 MHz different from interrogation frequency, either above or below"
    ],
    "correct": 1
  },
  {
    "question": "The phase difference between the reference and variable signals on QDM 050\u00b0 (VAR 100W) for a conventional VOR is:",
    "options": [
      "050\u00b0",
      "040\u00b0",
      "230\u00b0",
      "220\u00b0"
    ],
    "correct": 2
  },
  {
    "question": "A VDF bearing can be obtained:",
    "options": [
      "Only on a frequency of 121.5 MHz",
      "On the Approach frequency",
      "On the frequency notified for VDF services",
      "On the frequency agreed between the pilot and ATC but chosen from one of the available ATC frequencies"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following does NOT affect the accuracy of VDF bearings:",
    "options": [
      "Sky waves",
      "Duct propagation",
      "Ground reflections",
      "Synchronous transmissions"
    ],
    "correct": 0
  },
  {
    "question": "The range at which you can obtain a VDF bearing can be influenced by:",
    "options": [
      "Time of day",
      "Type of surface",
      "Height of aircraft",
      "Intensity of ionisation"
    ],
    "correct": 2
  },
  {
    "question": "At a height of 5,000 feet you might expect to receive a VHF signal, from a transmitter at sea level, at a range of:",
    "options": [
      "88.4 nm",
      "88.4 km",
      "70.7 km",
      "200 km"
    ],
    "correct": 0
  },
  {
    "question": "In the following diagram, the phase difference between the two signals is:",
    "options": [
      "90\u00b0",
      "180\u00b0",
      "270\u00b0",
      "360\u00b0"
    ],
    "correct": 1
  },
  {
    "question": "The emission characteristics A3E describe:",
    "options": [
      "ILS",
      "VHF communications",
      "HF communications",
      "VOR"
    ],
    "correct": 1
  },
  {
    "question": "According to ICAO Annex 10, in which frequency band(s) does a locator normally transmit?",
    "options": [
      "HF/VHF",
      "MF/HF",
      "HF",
      "LF/MF"
    ],
    "correct": 3
  },
  {
    "question": "Which Q code would give a magnetic heading to steer (nil wind) to a VDF station:",
    "options": [
      "QDM",
      "QDR",
      "QUI",
      "QTE"
    ],
    "correct": 0
  },
  {
    "question": "The gain of an aerial is a measure of its ability to:",
    "options": [
      "Focus power",
      "Transmit intelligence",
      "Overcome transmitter line resistance",
      "Compensate for attenuation"
    ],
    "correct": 3
  },
  {
    "question": "A frequency of 2400 kHz is equivalent to a wavelength of:",
    "options": [
      "125 metres",
      "105 metres",
      "0.80 cms",
      "8 metres"
    ],
    "correct": 0
  },
  {
    "question": "The VDF Homer service provides:",
    "options": [
      "Accurate bearings on demand",
      "A QGH procedure to transiting aeroplanes",
      "Bearings which will normally be within \u00b15\u00b0 accuracy to a range of 200NM",
      "Bearings which may be affected by synchronous transmissions"
    ],
    "correct": 2
  },
  {
    "question": "An aircraft wishing to use the VDF service must:",
    "options": [
      "Be equipped with a VOR indicator unit",
      "Transmit a signal for a long enough period for the bearing to be established",
      "Ask the controller to transmit for a long enough period to establish the bearing",
      "Be within 10 NM of the VDF aerial"
    ],
    "correct": 1
  },
  {
    "question": "A Class C magnetic bearing is received from a station. This is:",
    "options": [
      "A QUI accurate to \u00b15\u00b0",
      "A QDM accurate to \u00b110\u00b0",
      "A QTE accurate to \u00b15\u00b0",
      "A QDR accurate to \u00b110\u00b0"
    ],
    "correct": 3
  },
  {
    "question": "VOR operates in the (i), transmitting a bearing signal by means of a (ii) and uses (iii) to determine the radial:",
    "options": [
      "(i) VHF Stationary limacon phase comparison",
      "(i) VHF Stationary limacon Phase comparison",
      "(i) VHF Rotating limacon Phase comparison",
      "(i) UHF Rotating limacon Envelope matching"
    ],
    "correct": 2
  },
  {
    "question": "An aircraft receives a Class A true bearing from a VDF station. This is:",
    "options": [
      "A QUI accurate to \u00b12\u00b0",
      "A QTE accurate to \u00b12\u00b0",
      "A QUI accurate to \u00b15\u00b0",
      "A QTE accurate to \u00b15\u00b0"
    ],
    "correct": 1
  },
  {
    "question": "When a pilot is conducting a VDF/QGH procedure, he will require:",
    "options": [
      "An operator on the ground only for the VDF procedure",
      "An operator on the ground only for the QGH procedure",
      "An operator on the ground for both the VDF and QGH procedures",
      "No operator on the ground for either VDF or QGH procedures"
    ],
    "correct": 2
  },
  {
    "question": "If a ground D/F controller passes a bearing thus: \u201cYour true bearing is 256\u00b0, class alpha\u201d. This means:",
    "options": [
      "QTE accurate to \u00b15\u00b0",
      "QUI accurate to \u00b13\u00b0",
      "QDR accurate to \u00b12\u00b0",
      "QTE accurate to \u00b12\u00b0"
    ],
    "correct": 3
  },
  {
    "question": "With reference to ground DF, the controller can refuse to give bearings if:",
    "options": [
      "The requesting aircraft is not from a consenting country",
      "Conditions are poor and bearings do not fall within the station\u2019s classified limits",
      "The pilot does not use the prescribed terminology",
      "None of the above"
    ],
    "correct": 1
  },
  {
    "question": "Given that the compass heading is 270\u00b0, the deviation is 20\u00b0W, the variation is 30\u00b0E and the relative bearing of a beacon is 316\u00b0, determine the QDR:",
    "options": [
      "044",
      "048",
      "074",
      "224"
    ],
    "correct": 0
  },
  {
    "question": "A relative bearing indicator shows 030\u00b0. The heading of the aeroplane is 090\u00b0 M. The intercept angle for a course to the NDB of 180\u00b0 M is:",
    "options": [
      "120\u00b0",
      "330\u00b0",
      "150\u00b0",
      "060\u00b0"
    ],
    "correct": 3
  },
  {
    "question": "An RMI shows the bearing of an NDB as 020\u00b0. The heading of the aeroplane is 020\u00b0 M. In order to intercept an outbound course of 330\u00b0 (from the NDB) at an angle of 40\u00b0, the aeroplane\u2019s heading should be altered to:",
    "options": [
      "010",
      "330",
      "300",
      "040"
    ],
    "correct": 0
  },
  {
    "question": "An aircraft is tracking 060\u00b0 (T) in still air. The relative bearing of an NDB is 035\u00b0 at 1300. 12 min later the relative bearing is 070\u00b0. If the G/S is 180 kt, what is the aircraft\u2019s distance from the NDB at 1312?",
    "options": [
      "18 nm",
      "36 nm",
      "24 nm",
      "30 nm"
    ],
    "correct": 1
  },
  {
    "question": "To maintain the 314\u00b0 QDR inbound to a NDB with 7\u00b0 starboard drift, the heading in \u00b0M and relative bearing will be:",
    "options": [
      "321; 173",
      "127; 007",
      "141; 353",
      "307; 183"
    ],
    "correct": 1
  },
  {
    "question": "The indications of a VOR in an aircraft tracking towards a VOR are 075\u00b0 (M) TO and deviation indicator central. A co-located NDB shows 012\u00b0 relative. What are the drift and heading in \u00b0(M)?",
    "options": [
      "12S; 087",
      "12P; 063",
      "12S; 063",
      "12P; 087"
    ],
    "correct": 2
  }
];

const questions = [
  {
    "question": "Using the 1 in 60 rule calculate the height on a 3 degree glide path of an aircraft 4.5 NM from touchdown.",
    "options": [
      "1480 ft",
      "1420 ft",
      "1370 ft",
      "1230 ft"
    ],
    "correct": 2
  },
  {
    "question": "For a category one ILS glide path of 3.3 degrees the coverage is:",
    "options": [
      "1.49 to 5.77 degrees",
      "1.49 to 5.94 degrees",
      "1.65 to 5.77 degrees",
      "1.65 to 5.94 degrees"
    ],
    "correct": 0
  },
  {
    "question": "Which of the following statements is TRUE?",
    "options": [
      "A localiser back beam should only be used for approaches if there is a published procedure",
      "All localisers have back beams. They provide guidance in the event of a missed approach",
      "Localiser back beams are never checked for accuracy",
      "A localiser back beam will always provide reversed steering signals"
    ],
    "correct": 0
  },
  {
    "question": "The upper limit of the vertical coverage of the localiser must be:",
    "options": [
      "Not less than 300 m above the highest point on the approach",
      "Not less than 7\u00b0 above the horizontal (drawn from the localiser)",
      "Not less than 600 m above the horizontal",
      "Not less than 35\u00b0 above the horizontal"
    ],
    "correct": 1
  },
  {
    "question": "The glide path signals must be received to a range of 10 nm over a sector:",
    "options": [
      "10o each side of the localiser centre line",
      "10o wide centred on the localiser centre line",
      "8o each side of the localiser centre line",
      "8o wide centred on the localiser centre line"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following is true with respect to marker beacons?",
    "options": [
      "An airway marker and an ILS inner marker carry the same modulation",
      "Airway markers and ILS middle markers have the same modulations",
      "Airway markers and ILS outer markers have the same modulations",
      "No two markers have the same modulations"
    ],
    "correct": 0
  },
  {
    "question": "The azimuth and area coverage of a Cat I ILS localiser is:",
    "options": [
      "\"35\u00b0 at 17 nm, 10\u00b0 at 25 nm\""
    ],
    "correct": 0
  },
  {
    "question": "An ILS localiser can give reverse sense indications on the approach side and outside the protected coverage:",
    "options": [
      "Beyond 25 nm",
      "Beyond 35\u00b0 azimuth either side of the approach",
      "Beyond 10\u00b0 azimuth either side of the approach",
      "At anytime"
    ],
    "correct": 3
  },
  {
    "question": "The emission characteristics of the ILS and a typical localiser frequency are:",
    "options": [
      "A9W329.30 MHz",
      "A8W110.30 MHz",
      "A9W110.70 MHz",
      "A8W113.30 MHz"
    ],
    "correct": 1
  },
  {
    "question": "The minima for a CAT I ILS are: Height: 200 ft ; RVR:",
    "options": [
      "550 m"
    ],
    "correct": 0
  },
  {
    "question": "The minima for a CAT II ILS are: Height:",
    "options": [
      "100 ft ; RVR: 300 m"
    ],
    "correct": 0
  },
  {
    "question": "The errors of an ILS localiser beam are due to:",
    "options": [
      "Emission side lobes",
      "Ground reflections",
      "Spurious signals from objects near the runway",
      "Interference from other systems operating on the same frequency"
    ],
    "correct": 1
  },
  {
    "question": "Accurate glide path signals cannot be guaranteed above a certain angle relative to the horizontal. That angle is:",
    "options": [
      "0.45 x the glide path angle",
      "5.25 x the glide path angle",
      "1.75 x the glide path angle",
      "1.35 x the glide path angle"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following is true with respect to marker beacons?",
    "options": [
      "An airway marker and an ILS inner marker carry the same modulation",
      "Airway markers and ILS middle markers have the same modulations",
      "Airway markers and ILS outer markers have the same modulations",
      "No two markers have the same modulations"
    ],
    "correct": 0
  },
  {
    "question": "Using the 1 in 60 rule calculate the height on a 3 degree glide path of an aircraft 4.5 NM from touchdown.",
    "options": [
      "1480 ft",
      "1420 ft",
      "1370 ft",
      "1230 ft"
    ],
    "correct": 2
  },
  {
    "question": "What approximate rate of descent is required in order to maintain a 3\u00b0 glide path at a ground speed of 120 kt?",
    "options": [
      "550 FT/MIN",
      "600 FT/MIN",
      "800 FT/MIN",
      "950 FT/MIN"
    ],
    "correct": 1
  },
  {
    "question": "Using the 1 in 60 rule, calculate the rate of descent (in ft/min) for a 3.3 degree glide path at a ground speed of 115 kts.",
    "options": [
      "172 ft/min",
      "325 ft/min",
      "641 ft/min",
      "522 ft/min"
    ],
    "correct": 2
  },
  {
    "question": "The coverage of the ILS glide slope with respect to the localiser centreline is:",
    "options": [
      "+/- 10 deg to 8 nm",
      "+/- 10 deg to 25 nm",
      "+/- 8 deg to 10 nm",
      "+/- 35 deg to 17 nm"
    ],
    "correct": 2
  },
  {
    "question": "An aircraft on an ILS approach is receiving more 90 Hz modulation than 150 Hz modulation in both localiser and glide path. The correct action to regain the centreline and glide path would be to:",
    "options": [
      "Increase rate of descent and fly left",
      "Reduce rate of descent and fly right",
      "Increase rate of descent and fly right",
      "Reduce rate of descent and fly left"
    ],
    "correct": 2
  },
  {
    "question": "At 5.25 nm from the threshold an aircraft on an ILS approach has a display showing it to be 4 dots low on a 3 degree glide path. Using an angle of 0.15\u00b0 per dot of glide slope deviation and the 1 in 60 rule calculate the height of the aircraft from touchdown.",
    "options": [
      "1280 ft",
      "1325 ft",
      "1375 ft",
      "1450 ft"
    ],
    "correct": 1
  },
  {
    "question": "On a localiser the modulations are at 150 Hz and 90 Hz. Which of the following statements is correct?",
    "options": [
      "The 90 Hz modulation predominates to the right of the centre line",
      "The 150 Hz modulation predominates to the right of the centre line",
      "If the 150 Hz modulations predominates, the needle on the CDI moves to the right of centre",
      "When both modulations are received, the aeroplane will be on the centre line"
    ],
    "correct": 1
  },
  {
    "question": "What is the heading bug selected to?",
    "options": [
      "260\u00b0 (M)",
      "272\u00b0 (M)",
      "280\u00b0 (M)",
      "300\u00b0 (M)"
    ],
    "correct": 0
  },
  {
    "question": "Which of the following elements of an ILS transmit in the VHF band?",
    "options": [
      "Localiser only",
      "Marker beacons only",
      "Glide path and marker beacons",
      "Localiser and marker beacons"
    ],
    "correct": 3
  },
  {
    "question": "ILS marker beacons do not interfere with each other because:",
    "options": [
      "They operate on different modulations",
      "They operate at different frequencies",
      "They transmit in narrow vertical beams",
      "They transmit low power signals, which cannot be detected by the aeroplane\u2019s receiver"
    ],
    "correct": 2
  }
];

const questions = [
  {
    "question": "Using an NDB it is possible to experience which of the following errors or limitations?",
    "options": [
      "Coastal refraction, timing error and night effect",
      "Night effect, station interference and latitude error",
      "Night effect, station interference and lack of a failure warning system",
      "Coastal refraction, timing error and lack of a failure warning system"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following are all errors associated with ADF:",
    "options": [
      "Selective availability, coastal refraction, night effect",
      "Night effect, quadrantal error, lane slip",
      "Mountain effect, station interference, static interference",
      "Selective availability, coastal refraction, quadrantal error"
    ],
    "correct": 2
  },
  {
    "question": "What gives the greatest error in ADF:",
    "options": [
      "Coastal effect",
      "Night effect",
      "Static interference from thunderstorms",
      "Quadrantal error"
    ],
    "correct": 2
  },
  {
    "question": "Which combination gives the greatest reduction in reliability of ADF:",
    "options": [
      "Station interference; Static interference; Lane slip",
      "Mountain effect; Station interference; Site error",
      "Night effect; Static interference; Quadrantal error",
      "Night effect; Quadrantal error; Station interference"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following may cause inaccuracies in ADF bearings?",
    "options": [
      "Static interference, height effect, lack of failure warning",
      "Station interference, mountain effect, selective availability",
      "Coastal refraction, slant range, night effect",
      "Lack of failure warning, station interference, static interference"
    ],
    "correct": 3
  },
  {
    "question": "With a transmission from an NDB aerial, the ___ component travels in the ___ plane and the signal is ___ polarised.",
    "options": [
      "Magnetic; horizontal; vertically",
      "Electrical; horizontal; vertically",
      "Electrical; vertical; horizontally",
      "Magnetic; vertical; horizontally"
    ],
    "correct": 0
  },
  {
    "question": "When receiving an NDB signal on an ADF receiver the BFO can be selected OFF for the:",
    "options": [
      "Tone signal on NONA1A",
      "Ident signal on NONA1A",
      "Tone signal on NONA2A",
      "Ident signal on NONA2A"
    ],
    "correct": 3
  },
  {
    "question": "When considering the propagation of ADF transmissions night effect is most pronounced:",
    "options": [
      "At dusk and dawn",
      "During the long winter nights",
      "At or near the coast",
      "When flying at low altitude"
    ],
    "correct": 0
  },
  {
    "question": "An NDB signal crossing from land to sea will ___ speed and bend ___ the normal.",
    "options": [
      "Decrease, towards",
      "Increase, towards",
      "Decrease, away from",
      "Increase, away from"
    ],
    "correct": 3
  },
  {
    "question": "When ADF equipment which incorporates a sense aerial and a loop aerial is tuned to a NDB and the loop aerial is rotated so that a sharp null is found the aerial is:",
    "options": [
      "Either at right angles or in line with the incoming signals",
      "In line with the incoming signals",
      "At right angles to the incoming signals",
      "Aligned with the aircraft nose"
    ],
    "correct": 1
  },
  {
    "question": "The D layer of the ionosphere affects the accuracy of NDB bearings:",
    "options": [
      "By day and night",
      "By day only",
      "By night only",
      "Never"
    ],
    "correct": 1
  },
  {
    "question": "The accuracy of ADF within the DOC (designated OP coverage) by day is:",
    "options": [
      "+/-5 deg",
      "+/-10 deg",
      "+/-7 deg",
      "+/-3 deg"
    ],
    "correct": 0
  },
  {
    "question": "The 95% accuracy for ADF bearings of an NDB by day is:",
    "options": [
      "\u00b12\u00b0",
      "\u00b17\u00b0",
      "\u00b110\u00b0",
      "\u00b13\u00b0"
    ],
    "correct": 1
  },
  {
    "question": "An aircraft heading 315\u00b0M shows an NDB bearing 180\u00b0 on the RMI. Any quadrantal error affecting the accuracy of this bearing is likely to be:",
    "options": [
      "Zero, as quadrantal errors are not found on the RMI",
      "At a maximum",
      "At a minimum",
      "Zero, as quadrantal errors affect only the VOR"
    ],
    "correct": 1
  },
  {
    "question": "An aircraft 10 nm from a north-south coastline takes two three-position line fixes from an inland NDB. The aircraft's indicated position is:",
    "options": [
      "Nearer to the coastline than its actual position",
      "Further from the coastline than its actual position",
      "Correct because the coastal refraction errors will cancel out because two fixes have been taken",
      "Correct in azimuth but false in range"
    ],
    "correct": 0
  },
  {
    "question": "A long range NDB is likely to transmit on ___ and be classified as ___. Select the answer to complete this statement.",
    "options": [
      "200 Khz; A2A",
      "800 Khz; A2A",
      "200 Khz; A1A",
      "800 Khz; A1A"
    ],
    "correct": 2
  },
  {
    "question": "The BFO:",
    "options": [
      "Creates the audio ident for an NDB",
      "Is used to make the ident from an A2A NDB audible",
      "Is used to make the ident from an A1A NDB audible",
      "Is used to determine the signal strength of an NDB"
    ],
    "correct": 2
  },
  {
    "question": "The nominal maximum range of an NDB with a transmitter power is 200 watts is:",
    "options": [
      "50 to 60 nm",
      "100 to 120 nm",
      "150 to 170 nm",
      "200 to 200 nm"
    ],
    "correct": 0
  },
  {
    "question": "With regard to the following types of NDB which statement is correct?",
    "options": [
      "Locators have 200 W power, 50 nm range and are NON A2A",
      "Locators have 15 W power, 10-25 nm range and are NON A2A",
      "Locators have 5000 W power, 50 nm range and are NON A2A",
      "Locators have 5000 W power, 50 nm range and are NON A1A"
    ],
    "correct": 1
  },
  {
    "question": "An NDB aerial is (i) so as to ensure the range is (ii) by minimising (iii) due to (iv):",
    "options": [
      "(i) Horizontal; (ii) Maximum; (iii) Diffraction; (iv) The ground wave",
      "(i) Vertical; (ii) Maximum; (iii) Attenuation; (iv) Energy losses to the surface",
      "(i) Horizontal; (ii) Maximum; (iii) Refraction; (iv) The D Layer",
      "(i) Vertical; (ii) Maximum; (iii) Attenuation; (iv) Atmospheric refraction"
    ],
    "correct": 1
  },
  {
    "question": "When using ADF (i)BY NIGHT, the accuracy is (ii)LESS than (iii)BY DAY, because the surface wave is (iv) CONTAMINATED BY SKY WAVES",
    "options": [
      "Snow will NOT affect ADF",
      "Snow will affect ADF",
      "Snow will maybe affect ADF",
      ""
    ],
    "correct": 0
  },
  {
    "question": "If an NDB signal is received at a range of 1000 nm:",
    "options": [
      "The signal is a surface wave and is quite usable",
      "It will be a ground wave and will be inaccurate",
      "It is a space wave and will be inaccurate",
      "It is a sky wave and is inaccurate"
    ],
    "correct": 3
  },
  {
    "question": "If an NDB has a published range of 30 nm, its accuracy is:",
    "options": [
      "Only guaranteed by day to that range",
      "rect: A"
    ],
    "correct": 0
  },
  {
    "question": "The signal to noise ratio for an NDB is ___, allowing a maximum error of ___ on 95% of occasions during ___:",
    "options": [
      "3/1, \u00b15 degrees, daylight hours only",
      "3/1, \u00b15 degrees, 24 hours",
      "5/1, \u00b13 degrees, 24 hours",
      "5/1, \u00b13 degrees, daylight hours only"
    ],
    "correct": 0
  },
  {
    "question": "When is coastal error at its worst for an aircraft at low level?",
    "options": [
      "Beacon inland at an acute angle to the coast",
      "Beacon inland at 90\u00b0",
      "Beacon close to the coast at an acute angle to the coast",
      "Beacon close to the coast at 90\u00b0 to the coast"
    ],
    "correct": 0
  },
  {
    "question": "An aircraft over the sea is receiving a signal from an NDB 50nm from the coast and another from an NDB 20nm from the coast. Which of the following statements is most correct?",
    "options": [
      "The bearing information from relative bearings of 90\u00b0 and 270\u00b0 would be most correct",
      "The bearing information from relative bearings of 360\u00b0 and 180\u00b0 would be most correct",
      "The bearing information from the beacon 20nm inland would be most correct",
      "The bearing information from the beacon 50nm inland would be most correct"
    ],
    "correct": 2
  },
  {
    "question": "The purpose of the BFO switch on the ADF receiver is to:",
    "options": [
      "Make the signal audible",
      "Cut out the static noise",
      "Improve the strength of the received signal",
      "Attenuate the received signal"
    ],
    "correct": 0
  },
  {
    "question": "An ADF uses a sense aerial to:",
    "options": [
      "Determine the null position",
      "Resolve ambiguous bearings",
      "Transmit the beacon ident",
      "Detect the receiver test signal"
    ],
    "correct": 1
  },
  {
    "question": "An aeroplane\u2019s RMI shows an NDB bearing 070\u00b0, w/v calm. The aeroplane is to join a right hand holding pattern at the NDB, the inbound leg of which is 330\u00b0. The aeroplane should:",
    "options": [
      "Fly to the NDB and join the pattern",
      "Fly to the NDB then fly outbound on 150\u00b0 for 1 minute",
      "Fly to the NDB then fly a teardrop with an outbound heading of 120\u00b0 for 1 minute and a rate one turn to join inbound",
      "Fly to the NDB then fly choose either (B) or (C) above as preferred"
    ],
    "correct": 0
  },
  {
    "question": "An aeroplane is flying parallel to a coast. Which of the following NDBs will give the greatest coastal refraction LOP error?",
    "options": [
      "NDB sited on the coast-RBI 330\u00b0",
      "NDB sited 30 nm inland-RBI 330\u00b0",
      "NDB sited on the coast-RBI 300\u00b0",
      "NDB sited 30 nm inland-RBI 300\u00b0"
    ],
    "correct": 1
  },
  {
    "question": "What is the role of a ground direction finder?",
    "options": [
      "To aid pilot navigation",
      "To halt ground movements",
      "To map airfields",
      "To assist planners in the construction of airfield approaches"
    ],
    "correct": 0
  }
];


const questions = [
  {
    question: "On what principle does primary ATC radar work?",
    options: [
      "pulse technique",
      "pulse comparison",
      "continuous wave",
      "transponder interrogation"
    ],
    correct: 0
  },
  {
    question: "An SRA may be flown to:",
    options: [
      "0.5 nm using QNH unless the pilot advises the controller the approach is to be flown on QFE",
      "2.0 nm using QFE unless the pilot advises the controller the approach is to be flown on QNH",
      "0.5 nm using QNH only",
      "2.0 nm using QFE only"
    ],
    correct: 1
  },
  {
    question: "A high resolution surveillance radar will be terminated at a range from touchdown of:",
    options: [
      "0.25 nm",
      "0.5 nm",
      "1 nm",
      "2 nm"
    ],
    correct: 1
  },
  {
    question: "In a primary radar system:",
    options: [
      "the radar is primarily used for range-finding",
      "all radio frequency energy is produced by the radar located at the radar site",
      "the aircraft plays the secondary role, just listening to the radar signals from the ground radar",
      "the radar is the primary aid for ATC"
    ],
    correct: 1
  },
  {
    question: "An aerodrome ground movement radar is likely to operate in the SHF band with a scan rate of ____ revolutions per minute.",
    options: [
      "30",
      "45",
      "60",
      "75"
    ],
    correct: 2
  },
  {
    question: "Why does surface movement radar use a frequency in the SHF band and not EHF?",
    options: [
      "SHF gives better definition of aircraft type than EHF",
      "EHF is absorbed and scattered by moisture in the air. Switching to SHF reduced the problem",
      "The power requirements of EHF were unsustainable in the UK",
      "EHF is potentially hazardous to personnel on the area. This was completely overcome by switching to SHF"
    ],
    correct: 1
  },
  {
    question: "The maximum range obtainable from an ATC Long Range Surveillance Radar is approximately:",
    options: [
      "100 NM",
      "200 NM",
      "300 NM",
      "400 NM"
    ],
    correct: 2
  },
  {
    question: "What is the range of long range ground radar?",
    options: [
      "100 nm",
      "200 nm",
      "300 nm",
      "400 nm"
    ],
    correct: 2
  },
  {
    question: "What is a typical range for an EN-route surveillance radar (RSR)?",
    options: [
      "Up to 100 nm",
      "Up to 150 nm",
      "Up to 200 nm",
      "Up to 250 nm"
    ],
    correct: 3
  },
  {
    question: "An ATC radar unit, which is used in the approach, has a high aerial rotation rate. This is so that:",
    options: [
      "Target information is rapidly refreshed",
      "Compensation can be made for the long PRI",
      "Compensation is made for the narrow beam width",
      "The rigidity of the aerial can be improved by inertia"
    ],
    correct: 0
  },
  {
    question: "A surveillance radar element (SRE) used to provide approach guidance:",
    options: [
      "Does not have a height determination capacity",
      "Can be used to give guidance both horizontally and vertically",
      "Can only be used to a point 3 miles from threshold",
      "May not be used in heavy rain because of the high levels of signal loss"
    ],
    correct: 0
  },
  {
    question: "In a primary pulsed radar the ability to discriminate in azimuth is a factor of:",
    options: [
      "Pulse length",
      "Beam width",
      "Frequency",
      "PRI"
    ],
    correct: 1
  },
  {
    question: "In ATC surveillance radar procedures, if primary radar fails but coverage continues to be provided by SSR:",
    options: [
      "Full radar control with standard radar separation will be maintained",
      "Non-radar separation standards will be introduced as soon as possible",
      "All radar assistance will be terminated immediately",
      "Radar assistance will be terminated after standard separation has been introduced"
    ],
    correct: 1
  },
  {
    question: "Precision Approach Radars are required under the ICAO specifications to indicate an aircraft within the following parameters:",
    options: [
      "Azimuth: 10°, Vertical: 40°, Range: 7 nm",
      "Azimuth: 20°, Vertical: 7°, Range: 9 nm",
      "Azimuth: 30°, Vertical: 10°, Range: 10 nm",
      "Azimuth: 40°, Vertical: 15°, Range"
    ],
    correct: 1
  },
  {
    question: "A monochrome radar operating in the contour mode ____ and indicates them as hollow centres:",
    options: [
      "adjusts the gain to exclude returns above the iso-echo level",
      "is incapable of painting returns above the iso-echo level because of the limitations of the system",
      "cancels returns above the iso-echo level",
      "adjusts the gain to exclude returns below the iso-echo level"
    ],
    correct: 2
  },
  {
    question: "If the AWR transmitter is required to be switched on before take-off the scanner should be tilted up with:",
    options: [
      "either of these modes selected",
      "the mapping mode selected",
      "the weather mode selected",
      "none of these"
    ],
    correct: 2
  },
  {
    question: "In which frequency band do most airborne weather, and ground based ATC, radar systems operate?",
    options: [
      "VHF",
      "UHF",
      "EHF",
      "SHF"
    ],
    correct: 3
  },
  {
    question: "On switching on the AWR a single line appears on the display. This means that:",
    options: [
      "the transmitter is unserviceable",
      "the receiver is unserviceable",
      "the CRT is not scanning",
      "the antenna is not scanning"
    ],
    correct: 3
  },
  {
    question: "In the MAPPING MODE the airborne weather radar utilises a:",
    options: [
      "fan shaped beam effective up to a maximum of 50 NM to 60 NM range",
      "fan shaped beam effective up to a range of 150 NM",
      "pencil beam to a maximum range of 60 NM",
      "pencil beam effective from zero to 150 NM"
    ],
    correct: 0
  },
  {
    question: "The Cosecant squared beam is used for mapping in the AWR because:",
    options: [
      "a greater range can be achieved",
      "a wider beam is produced in azimuth to give a greater coverage",
      "a larger area of ground is illuminated by the beam",
      "it allows cloud detection to be effected whilst mapping"
    ],
    correct: 2
  },
  {
    question: "The main factors which affect whether an AWR will detect a cloud are:",
    options: [
      "the size of the water droplets and the diameter of the antenna reflector",
      "the scanner rotation rate and the frequency/wavelength",
      "the size of the water droplets and the wavelength/frequency",
      "the size of the water droplets and the range of the cloud"
    ],
    correct: 2
  },
  {
    question: "Which of the following cloud types is most readily detected by airborne weather radar when using the weather beam?",
    options: [
      "Stratus",
      "Cirrocumulus",
      "Cumulus",
      "Altostratus"
    ],
    correct: 2
  },
  {
    question: "When using the AWR to detect long range ground features the most suitable mode of operation or beam selected would be:",
    options: [
      "the manual mode",
      "the fan shaped beam",
      "the mapping mode",
      "the contour mode"
    ],
    correct: 0
  },
  {
    question: "When switching on the weather radar, after start-up a single very bright line appears on the screen. This means that the:",
    options: [
      "scanner is not rotating",
      "transmitter is faulty",
      "scanning of the cathode ray tube is faulty",
      "receiver is faulty"
    ],
    correct: 2
  },
  {
    question: "Which of the following lists phenomena that CANNOT be detected by weather radar?",
    options: [
      "Dry hail; clear air turbulence",
      "Snow; clear air turbulence",
      "Clear air turbulence; turbulence in cloud with precipitation",
      "Snow; turbulence in clouds with precipitation"
    ],
    correct: 1
  },
  {
    question: "The airborne weather radar (AWR) cannot detect:",
    options: [
      "snow",
      "moderate rain",
      "dry hail",
      "wet hail"
    ],
    correct: 0
  },
  {
    question: "The advantage of the use of slotted antennas in modern radar technology is to:",
    options: [
      "simultaneously transmit weather and mapping beams",
      "virtually eliminate lateral lobes and as a consequence concentrate more energy in the main beam",
      "have a wide beam and as a consequence better target detection",
      "eliminate the need for azimuth slaving"
    ],
    correct: 1
  },
  {
    question: "The tilt angle on the AWR at which an active cloud just disappears from the screen is 4 degrees up. If the beam width is 5 degrees and the range of the cloud is 40 NM use the 1 in 60 rule to calculate the approximate height of the cloud relative to the aircraft.",
    options: [
      "4000 above",
      "6000 above",
      "4000 below",
      "6000 below"
    ],
    correct: 1
  },
  {
    question: "AWR in the ____ mode progressively ____ as distances ____ to equalise screen brightness",
    options: [
      "weather, decreases gain, increase",
      "mapping, decreases power, decrease",
      "weather, increases power, decrease",
      "mapping, increases gain, decrease"
    ],
    correct: 1
  }
];

const questions = [
  {
    "question": "The main factor which affects the maximum range of a pulse radar is:",
    "options": [
      "the size of the radar screen",
      "the frequency of the radar transmission",
      "the aerial system size",
      "the pulse repetition frequency"
    ],
    "correct": 3
  },
  {
    "question": "What most determines a primary radar's ability to accurately determine target range:",
    "options": [
      "Aerial rpm",
      "Beam width",
      "Transmitter power",
      "Pulse length"
    ],
    "correct": 3
  },
  {
    "question": "The advantages of CW radar systems over pulse radar systems are:",
    "options": [
      "they are more reliable",
      "the transmitter/receiver aerial system is smaller and less complex",
      "there is no minimum range",
      "they offer better long range performance"
    ],
    "correct": 2
  },
  {
    "question": "The main factor which determines the minimum range that can be measured by a pulsed radar is pulse:",
    "options": [
      "repetition rate",
      "amplitude",
      "length",
      "frequency"
    ],
    "correct": 2
  },
  {
    "question": "The main advantage of a slotted scanner is:",
    "options": [
      "reduces side lobes and directs more energy into the main beam",
      "removes the need for azimuth slaving",
      "side lobe suppression",
      "can produce simultaneous map and weather information"
    ],
    "correct": 0
  },
  {
    "question": "A radar facility transmitting at a Pulse Recurrence Frequency (PRF) of 1200 pulses/second will have a maximum unambiguous range of approximately:",
    "options": [
      "135 NM",
      "69 NM",
      "270 NM",
      "27 NM"
    ],
    "correct": 1
  },
  {
    "question": "If the pulse length used in a radar is 4 microseconds, ignoring receiver recovery time, the minimum range at which a target can be detected is:",
    "options": [
      "1200 metres",
      "2400 metres",
      "600 metres",
      "0 metres"
    ],
    "correct": 2
  },
  {
    "question": "The interval in time between the commencement of two consecutive pulses is:",
    "options": [
      "Aerial rpm",
      "Beam interval",
      "Pulse length",
      "pulse recurrence period"
    ],
    "correct": 3
  },
  {
    "question": "The azimuth and elevation of the satellites is:",
    "options": [
      "determined by the satellite and transmitted to the receiver",
      "determined by the receiver from the satellite almanac data",
      "transmitted by the satellite as part of the almanac",
      "transmitted by the satellite as part of the almanac"
    ],
    "correct": 1
  },
  {
    "question": "The function of the receiver in the GNSS user segment is to:",
    "options": [
      "Interrogate the satellites to determine range",
      "Track the satellites to calculate time",
      "Track the satellites to calculate range",
      "Determine position and assess the accuracy of that position"
    ],
    "correct": 2
  },
  {
    "question": "The task of the control segment is to:",
    "options": [
      "determine availability to users",
      "monitor the SV ephemeris and clock",
      "apply selective availability",
      "all of the above"
    ],
    "correct": 1
  },
  {
    "question": "The preferred GNSS receiver for airborne application is:",
    "options": [
      "multiplex",
      "multi-channel",
      "sequential",
      "fast multiplex"
    ],
    "correct": 1
  },
  {
    "question": "The size of a target on a primary radar screen is governed in azimuth by i) and in range by (ii):",
    "options": [
      "(i) Pulse width; (ii) Pulse length",
      "(i) Pulse length; (ii) Beam width",
      "(i) Pulse width; (ii) Beam width",
      "(i) Beam width; (ii) Pulse length"
    ],
    "correct": 3
  },
  {
    "question": "Short range aerodrome radars will have ____ wave lengths:",
    "options": [
      "millimetric",
      "centimetric",
      "decametric",
      "metric"
    ],
    "correct": 1
  },
  {
    "question": "Which is the most suitable radar for measuring short ranges:",
    "options": [
      "millimetric pulse",
      "continuous wave primary",
      "centimetric pulse",
      "continuous wave secondary"
    ],
    "correct": 1
  },
  {
    "question": "The definition of a radar display will be best with:",
    "options": [
      "\"Wide beam width and wide pulse width\"",
      "\"Wide beam width and narrow pulse width\"",
      "\"Narrow beam width and narrow pulse width\"",
      "\"Narrow beam width and wide pulse width\""
    ],
    "correct": 2
  },
  {
    "question": "A radio facility transmits on a wave length of 2.22 cm. The facility could be a ___ operating on a frequency of ___",
    "options": [
      "VDF; 135 MHz",
      "DME; 1350 MHz",
      "Doppler; 13500 MHz",
      "radio altimeter; 13500 MHz"
    ],
    "correct": 2
  },
  {
    "question": "A radar has a PRF of 800 pps. What is the maximum theoretical range and the PRP?",
    "options": [
      "325 nm, 0.0125 micro seconds",
      "325 nm, 1250 micro seconds",
      "187.5 km, 0.0125 micro seconds",
      "187.5 km, 1250 micro seconds"
    ],
    "correct": 3
  },
  {
    "question": "What is the minimum PRI for a radar with a design range of 200 NM?",
    "options": [
      "1000 microseconds",
      "2470 microseconds",
      "4800 microseconds",
      "3300 microseconds"
    ],
    "correct": 1
  },
  {
    "question": "The pulse recurrence frequency of a signal having a pulse interval (pulse recurrence period) of 5 microseconds is:",
    "options": [
      "6 MHz",
      "200 KHz",
      "60 MHz",
      "2000 KHz"
    ],
    "correct": 1
  },
  {
    "question": "The beam width from a parabolic reflector aerial is:",
    "options": [
      "dependant on the transmitted pulse length",
      "dependant on the transmitted pulse repetition frequency",
      "dependant on the transmitted pulse repetition interval",
      "dependant on the transmitted frequency"
    ],
    "correct": 3
  },
  {
    "question": "In a Cathode Ray Tube the grid is used to:",
    "options": [
      "control the focus",
      "control the brilliance",
      "drain electrons from the tube",
      "deflect the electron stream to form a time-base"
    ],
    "correct": 1
  },
  {
    "question": "In a cathode ray tube the grid potential is:",
    "options": [
      "negative with respect to the cathode",
      "the same as the cathode",
      "zero",
      "the same as the second anode"
    ],
    "correct": 0
  },
  {
    "question": "What technique is employed by primary radar employing a single aerial dish:",
    "options": [
      "Pulse technique",
      "Continuous wave",
      "Phase comparison",
      "Pseudo random noise"
    ],
    "correct": 0
  },
  {
    "question": "If a radar has a beam width of 3\u00b0 and a pulse length of 4 micro seconds, the target azimuth resolution at a range of 60 NM will be approximately:",
    "options": [
      "4 NM",
      "3 NM",
      "2 NM",
      "1 NM"
    ],
    "correct": 1
  },
  {
    "question": "An area surveillance radar is most likely to use a frequency of:",
    "options": [
      "350 MHz",
      "600 MHz",
      "100 Hz",
      "150 Hz"
    ],
    "correct": 1
  },
  {
    "question": "In which of the following meteorological conditions would you expect to encounter an increased distance to the radar horizon:",
    "options": [
      "surface inversion of temperature and humidity",
      "surface steep lapse rate of temperature and humidity",
      "a steep lapse rate of temperature with an inversion of humidity",
      "an inversion of temperature with a steep lapse rate of humidity"
    ],
    "correct": 3
  },
  {
    "question": "If a radar pulse contains 300 cycles of RF energy at a frequency of 600 MHz, the physical length of the pulse is:",
    "options": [
      "1550 metres",
      "150 metres",
      "1.5 metres",
      "0.15 metres"
    ],
    "correct": 1
  },
  {
    "question": "A wavelength of 8.5 mm corresponds to a frequency of:",
    "options": [
      "2833.3 MHz",
      "35294 MHz",
      "3529.4 MHz",
      "28333 MHz"
    ],
    "correct": 1
  },
  {
    "question": "To increase the maximum theoretical range of a pulse radar system:",
    "options": [
      "reduce the PRF and increase the power",
      "increase the PRF and reduce the power",
      "reduce the PRF and increase the PRF",
      "maintain the PRF and increase the power"
    ],
    "correct": 0
  },
  {
    "question": "The frequency of an SSR ground transmission is:",
    "options": [
      "950 +/- 0.2 Mhz",
      "1030 +/- 0.2 Mhz",
      "1090 +/- 0.2 Mhz",
      "750 +/- 0.2 Mhz"
    ],
    "correct": 1
  }
];

const questions = [
  {
    question: "Which statement regarding Mode S transponders is most correct?",
    options: [
      "Mode S transponders reduce RT traffic and provide a datalink facility",
      "Mode S transponders are used with TCAS III",
      "Mode S transponders are used to assist GPS positioning",
      "Mode S and Mode C transponders operate on different frequencies"
    ],
    correct: 0
  },
  {
    question: "Which of the following Secondary Surveillance Radar (SSR) codes is used to indicate transponder malfunction?",
    options: ["0000", "2000", "7000", "7500"],
    correct: 0
  },
  {
    question: "With reference to SSR, what code is used to indicate transponder altitude failure?",
    options: ["0000", "1000", "2000", "7000"],
    correct: 0
  },
  {
    question: "Which one of the following Secondary Surveillance Radar (SSR) codes should be used by aircraft entering airspace from an area where SSR operation has not been required?",
    options: ["0000", "1000", "2000", "3000"],
    correct: 2
  },
  {
    question: "The SSR conspicuity code is:",
    options: ["0000", "2000", "7000", "7500"],
    correct: 2
  },
  {
    question: "In order to indicate unlawful interference with the planned operation of the flight, the aircraft Secondary Surveillance Radar (SSR) transponder should be selected to:",
    options: ["7500", "7600", "7700", "7000"],
    correct: 0
  },
  {
    question: "What transponder code is selected in the event of radio failure:",
    options: ["7500", "7600", "7700", "0000"],
    correct: 1
  },
  {
    question: "In order to indicate an emergency situation, the aircraft Secondary Surveillance Radar (SSR) transponder should be set to:",
    options: ["7500", "7600", "7700", "7000"],
    correct: 2
  },
  {
    question: "SSR uses wide aperture aerials to:",
    options: [
      "reduce side lobe effects",
      "improve bearing discrimination",
      "improve range discrimination",
      "reduce the vertical beam width"
    ],
    correct: 3
  },
  {
    question: "SSR, in ATC use:",
    options: [
      "is a replacement of primary radar",
      "is an alternative to primary radar",
      "is complementary to primary radar",
      "is used only in military operations"
    ],
    correct: 2
  },
  {
    question: "With normal SSR mode A coding the aircraft replies by sending back a train of up to 12 pulses contained between 2 framing pulses with:",
    options: [
      "4096 codes in 4 boxes",
      "2048 codes in 4 boxes",
      "4096 codes in 12 boxes",
      "1096 codes in 8 boxes"
    ],
    correct: 0
  },
  {
    question: "The accuracy of SSR height as displayed to the air traffic controller is:",
    options: ["+/- 25 ft", "+/- 50 ft", "+/- 75 ft", "+/- 100 ft"],
    correct: 1
  },
  {
    question: "When a Mode C check is carried out, and assuming the equipment is working without error, the Mode C will report a pressure altitude of 35,064 ft as flight level:",
    options: ["350", "35064", "3506", "351"],
    correct: 3
  },
  {
    question: "With regard to the advantages of SSR which of the following statements is correct?",
    options: [
      "Little power is required to effect longish range",
      "No aircraft manoeuvres are necessary for identification",
      "Range, bearing and height can be calculated from reply signals",
      "All of the above"
    ],
    correct: 3
  },
  {
    question: "The availability of 4096 codes in SSR is applicable to mode:",
    options: ["A", "C", "S", "All"],
    correct: 3
  },
  {
    question: "The letters QTX and adjacent symbol indicate a:",
    options: ["VOR/DME", "TACAN", "VOR", "Airport"],
    correct: 0
  },
  {
    question: "The colour of a VORTAC which is not in use by the FMC is:",
    options: ["MAGENTA", "WHITE", "CYAN", "GREEN"],
    correct: 2
  },
  {
    question: "In an RNAV system which combination of external reference will give the most accurate position?",
    options: ["GPS/rho", "Rho/theta", "Rho/rho", "GPS/theta"],
    correct: 2
  },
  {
    question: "The phantom station in a 2D RNAV system may be generated by:",
    options: ["VOR/DME", "twin VOR", "twin DME", "any of the above"],
    correct: 0
  },
  {
    question: "Why is the effect of returns from storms not a problem with SSR?",
    options: [
      "The frequency is too high",
      "SSR does not use the echo principle",
      "The PRF is jittered",
      "By the use of MTI to remove stationary and slow moving returns"
    ],
    correct: 1
  },
  {
    question: "Data transmission and exchange is conducted in:",
    options: ["Mode A", "Mode C", "Mode D", "Mode S"],
    correct: 3
  },
  {
    question: "A mode S transponder will:",
    options: [
      "not respond to interrogations made on mode A",
      "respond normally to mode A/C interrogations",
      "respond to mode A interrogations but not mode C",
      "not respond to mode A/C as it is on the different frequency"
    ],
    correct: 1
  },
  {
    question: "Why do clouds not appear on secondary radar screens:",
    options: [
      "Too high a frequency",
      "Too low a frequency",
      "They do not provide an echo by returning signals",
      "The transmit and receive signals are on different frequencies"
    ],
    correct: 3
  },
  {
    question: "A mode A/C transponder will:",
    options: [
      "Not respond to interrogations made on mode S",
      "Respond to mode S interrogations but cannot send data",
      "Respond to mode S interrogations with limited data",
      "Not respond to mode S as it is on a different frequency"
    ],
    correct: 1
  },
  {
    question: "The operation of a 2D RNAV system may be seriously downgraded:",
    options: [
      "because the computer cannot determine if the aircraft is within the DOC of the programmed facilities",
      "because the computer cannot determine if the heading and altitude input are in error",
      "because the pilot cannot verify the correct frequency has been selected",
      "if the selected navigation facility is in excess of about 70 nm"
    ],
    correct: 0
  },
  {
    question: "In order to enter a waypoint that is designated by a VOR into an RNAV, the VOR:",
    options: [
      "has to be positively identified by one of the pilots",
      "does not have to be in range when entered or used",
      "must be in range",
      "does not have to be in range when entered but must be when used"
    ],
    correct: 3
  },
  {
    question: "RNAV routes are:",
    options: [
      "usually specified by waypoints co-incident with point source aids such as VOR, DME or NDB facilities",
      "specified by waypoints defined as a position in latitude and longitude based on the WGS 84 system",
      "selected according to TCAS inputs",
      "none of the above are correct"
    ],
    correct: 1
  },
  {
    question: "With regard to RNAV, what are hybrid navigation systems?",
    options: [
      "RNAV systems which use and merge information from a selection of self-contained and externally referenced navigation system",
      "VOR/DME system",
      "Loran C system",
      "GNSS"
    ],
    correct: 0
  },
  {
    question: "With VOR/DME basic area navigation, the displacement of the CDI needle represents:",
    options: [
      "angular displacement from the course line (eg. 5 dots = 50 off track)",
      "angular displacement from the course line (eg. 5 dots = 100 off track)",
      "distance off track (eg. 5 dots = 5 nm off track)",
      "distance off track (eg. 5 dots = 10 nm off track)"
    ],
    correct: 2
  },
  {
    question: "In an FMS, how does a VOR/DME Area Navigation system obtain DME information?",
    options: [
      "the pilot tunes the closest VOR/DME stations within range on the VOR/DME Area navigation control panel",
      "The VOR/DME Area Navigation system has its own VHF NAV tuner and the system itself tunes the DME stations providing the best angular position lines",
      "The VOR/DME Area Navigation system uses whatever stations are tuned on the aircraft’s normal VHF NAV selector",
      "The VOR/DME Area Navigation System has its own VHF NAV tuner and it always tunes the DME stations closest to the aircraft position"
    ],
    correct: 1
  },
  {
    question: "When operating in an RNAV mode using multiple DME, inaccuracy can be due to:",
    options: [
      "Sky wave interference",
      "Mutual interference between the DMEs",
      "Inability to confirm the aircraft is within the DOC of the DMEs because of identification problems",
      "The DMEs locking onto each other’s returns"
    ],
    correct: 2
  },
  {
    question: "The range to a required waypoint presented by RNAV system is:",
    options: [
      "plan range or slant range depending on RNAV settings",
      "plan range",
      "slant range",
      "neither plan range nor slant range"
    ],
    correct: 0
  },
  {
    question: "Which one of the following lists information given by a basic VOR/DME-based Area Navigation System?",
    options: [
      "Crosstrack distance; alongtrack distance; angular course deviation",
      "Aircraft position in latitude and longitude",
      "Wind velocity",
      "True airspeed; drift angle"
    ],
    correct: 0
  }
];

const questions = [
  {
    "question": "The colour for the present track line in the expanded mode is:",
    "options": [
      "white",
      "green",
      "magenta",
      "cyan"
    ],
    "correct": 0
  },
  {
    "question": "The range arcs in the expanded and map modes are recommended to be coloured:",
    "options": [
      "White",
      "Green",
      "Magenta",
      "Cyan"
    ],
    "correct": 0
  },
  {
    "question": "The recommended colour for an off route waypoint is:",
    "options": [
      "white",
      "green",
      "magenta",
      "Cyan"
    ],
    "correct": 3
  },
  {
    "question": "The recommended colour for the aircraft symbol is:",
    "options": [
      "White",
      "Green",
      "Magenta",
      "Cyan"
    ],
    "correct": 0
  },
  {
    "question": "In the NAV and EXP NAV modes one dot on the EHSI represents:",
    "options": [
      "2 nm",
      "2\u00b0",
      "5 nm",
      "5\u00b0"
    ],
    "correct": 0
  },
  {
    "question": "Which EHSI modes cannot show AWR information:",
    "options": [
      "FULL VOR/ILS/NAV and MAP",
      "PLAN, CTR MAP and EXP VOR/ILS/NAV",
      "CTR MAP and PLAN",
      "PLAN and FULL VOR/ILS/NAV"
    ],
    "correct": 3
  },
  {
    "question": "The track line on an EFIS display indicates:",
    "options": [
      "that a manual track has been selected",
      "that a manual heading has been selected",
      "the actual aircraft track over the ground, which will coincide with the aircraft heading when there is zero drift",
      "the aircraft actual track which will coincide with the planned track when there is zero drift"
    ],
    "correct": 2
  },
  {
    "question": "If range indications are screen/hidden, this means:",
    "options": [
      "The transponder is out of service",
      "The aeroplane is out of range",
      "The aeroplane's equipment is in search mode",
      "The DME unit is in memory mode"
    ],
    "correct": 1
  },
  {
    "question": "When in tracking mode, the airborne interrogator operates at:",
    "options": [
      "A PRR variable between 24 and 30 pulses per second",
      "A PRR fixed at a rate selected from the range 24 to 30 PPS",
      "A PRR of 150 PPS",
      "A PRR of 2700 PPS"
    ],
    "correct": 0
  },
  {
    "question": "What use if any does TACAN provide to civilian users:",
    "options": [
      "Bearing information only",
      "Bearing and range information",
      "Range information only (DME)",
      "It is of no use to civilian pilots"
    ],
    "correct": 2
  },
  {
    "question": "Colour code rules for Electronic Flight Instrument Systems (EFIS), turbulence is coloured:",
    "options": [
      "magenta",
      "flashing red",
      "white or magenta",
      "high colour gradient"
    ],
    "correct": 2
  },
  {
    "question": "The colour red is used on an EFIS screen for: (i) Warnings (ii) Flight envelope and system limits (iii) Cautions, abnormal sources (iv) Scales and associated figures",
    "options": [
      "(i) Warnings",
      "(ii) Flight envelope and system limits",
      "(i) and (ii) Correct",
      "Scales and associated figures"
    ],
    "correct": 2
  },
  {
    "question": "Colour code rules for Electronic Flight Instrument Systems (EFIS), armed modes are coloured:",
    "options": [
      "white",
      "green",
      "magenta",
      "amber/yellow"
    ],
    "correct": 0
  },
  {
    "question": "The recommended colour for a downpath waypoint is:",
    "options": [
      "white",
      "green",
      "magenta",
      "cyan"
    ],
    "correct": 0
  },
  {
    "question": "The navigation database in the FMC:",
    "options": [
      "is read only for the pilots",
      "can be modified by the pilots to meet route requirements",
      "can be amended by the pilots to update navigational data",
      "is inaccessible to the flight crew"
    ],
    "correct": 0
  },
  {
    "question": "The database of an FMS (Flight Management System) is organised in such a way that the pilot can:",
    "options": [
      "modify the database every 28 days",
      "only read the database",
      "insert navigation data between two updates",
      "read and write at any time in database"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following can be input manually to the FMC using a maximum of 5 alphanumerics?",
    "options": [
      "Waypoints, latitude and longitude, SIDs and STARs",
      "ICAO aerodrome designators, navigation facilities, SIDs and STARs",
      "Waypoints, airways designators, latitude and longitude",
      "Navigation facilities, reporting points, airways designators"
    ],
    "correct": 3
  },
  {
    "question": "When is the IRS position updated:",
    "options": [
      "at VOR beacons on route by the pilots",
      "continuously by the FMC",
      "at significant waypoints only",
      "on the ground only"
    ],
    "correct": 3
  },
  {
    "question": "When is the FMS position likely to be least accurate?",
    "options": [
      "TOD",
      "TOC",
      "Just after take-off",
      "On final approach"
    ],
    "correct": 0
  },
  {
    "question": "With regard to FMS, what are the possible modes of operation for dual FMC installations?",
    "options": [
      "Dual",
      "Dual and single",
      "Dual, independent, and single",
      "None of the above"
    ],
    "correct": 2
  },
  {
    "question": "Why is gate number requested by the FMC?",
    "options": [
      "So that the FMS can convert the gate position into a WGS 84 co-ordinate for the inertial navigation system",
      "To calculate take-off speed",
      "To identify the airport terminal position",
      "To program the departure SID more accurately"
    ],
    "correct": 0
  },
  {
    "question": "Positions on a Flight Management Computer are updated with information from:",
    "options": [
      "DME/VOR",
      "DME/DME or DME/VOR",
      "DME/DME",
      "VOR/ADF"
    ],
    "correct": 1
  },
  {
    "question": "The FMC position is:",
    "options": [
      "the average of the IRS positions",
      "the average of the IRS and radio navigation positions",
      "computer generated from the IRS and radio navigation positions",
      "computer generated from the radio navigation positions"
    ],
    "correct": 2
  },
  {
    "question": "In which of the following cases would ETOs and ETA at destination calculated by the Flight Management Computer (FMC) be correct?",
    "options": [
      "When the ETOs and ETA are based on the forecast winds calculated from the actual take-off time",
      "When the FMC computes each ETO and ETA using the correct GS",
      "When the FMC positions and GS are accurate",
      "When the actual winds match the forecast winds, and the actual cruising Mach number is equal to the FMC calculated Mach number"
    ],
    "correct": 3
  },
  {
    "question": "The ETA generated by the FMS will be most accurate:",
    "options": [
      "when the forecast W/V equals the actual W/V and the FMS calculated Mach No. equals the actual Mach No.",
      "if the ground speed and position are accurate",
      "if the forecast W/V at take-off is entered",
      "if the ground speed is correct and the take-off time has been entered"
    ],
    "correct": 1
  },
  {
    "question": "The databases on a FMC:",
    "options": [
      "can be read or written on to at any time",
      "can be modified by the pilot",
      "are read only",
      "are updated once every 28 weeks"
    ],
    "correct": 2
  },
  {
    "question": "The FMS database can be:",
    "options": [
      "altered by the pilots between the 28 day update",
      "read and altered by the pilots",
      "only read by the pilots",
      "altered by the pilots every 28 days"
    ],
    "correct": 2
  },
  {
    "question": "What is Back Up FMS navigation mode?",
    "options": [
      "When only one FMS is operational",
      "When one FMS is a Master and the other is a Slave",
      "When one FMS operates independently from the other",
      "When the FMC is suffering from some failure but there is still limited FMS function"
    ],
    "correct": 3
  },
  {
    "question": "Why is an IRS known as a self-contained system?",
    "options": [
      "\"Because it derives navigational data from relative movement via in-built sensors\"",
      "It does not use any electrical power",
      "It gets data from external systems",
      "It is integrated with GPS"
    ],
    "correct": 0
  },
  {
    "question": "The FMS is composed of:",
    "options": [
      "the command display unit and the flight management computer",
      "the automatic flight control system and the power management controls system",
      "the flight management computer only",
      "the EFIS and EICAS displays"
    ],
    "correct": 0
  },
  {
    "question": "The inputs the pilot will make to the FMC during the pre-flight initialisation will include:",
    "options": [
      "ETD, aircraft position, and planned route",
      "Planned route, aircraft position, and departure runway",
      "Navigation database, aircraft position and departure aerodrome",
      "Departure runway, planned route and ETD"
    ],
    "correct": 1
  },
  {
    "question": "When midway between two waypoints how can the pilot best check the progress of the aircraft:",
    "options": [
      "by using the ATD at the previous waypoint",
      "by using the computed ETA for the next waypoint",
      "by using the ATA at the previous waypoint",
      "by using the ETA at the destination"
    ],
    "correct": 1
  },
  {
    "question": "An all in view satellite navigation receiver is one which:",
    "options": [
      "monitors all 24 satellites",
      "tracks selected satellites",
      "selects and tracks all (in view) satellites and selects the best four",
      "tracks the closest satellites"
    ],
    "correct": 2
  },
  {
    "question": "In NAVSTAR/GPS the PRN codes are used to:",
    "options": [
      "differentiate between satellites",
      "pass satellite ephemeris information",
      "pass satellite time and ephemeris information",
      "pass satellite time, ephemeris and other information"
    ],
    "correct": 0
  }
];

const questions = [
  {
    "question": "The GPS Navstar system transmits in the L1 and L2 frequency bands. Which bands are used for the P codes and which for the C/A codes?",
    "options": [
      "Higher frequency for the C/A code and lower frequency for the P code",
      "Higher frequency for the C/A and P codes",
      "Higher frequency for the P code only",
      "Lower frequency for the C/A code and higher frequency for the P code"
    ],
    "correct": 1
  },
  {
    "question": "The NAVSTAR/GPS segments are:",
    "options": [
      "space, control, user",
      "space, control, ground",
      "space, control, air",
      "space, ground, air"
    ],
    "correct": 0
  },
  {
    "question": "During flight using NAVSTAR/GPS and conventional navigation systems, you see a large error between the positions given by the systems. The action you should take is:",
    "options": [
      "continue the flight in VMC",
      "continue using the conventional systems",
      "continue using the GPS",
      "switch off the faulty system after determining which one is in error"
    ],
    "correct": 1
  },
  {
    "question": "Concerning the NAVSTAR/GPS satellite navigation system, what is the meaning of the term Receiver Autonomous Integrity Monitoring (RAIM)?",
    "options": [
      "It is a method whereby a receiver ensures the integrity of the Pseudo Random Noise (PRN) code transmitted by the satellites",
      "It is the ability of the GPS satellites to check the integrity of the data transmitted by the monitoring stations of the ground segment",
      "It is a technique by which a receiver ensures the integrity of the navigation information",
      "It is a technique whereby the receivers of the world-wide distributed monitor stations (ground segment) automatically determines the integrity of the navigation message"
    ],
    "correct": 2
  },
  {
    "question": "What are the basic elements transmitted by NAVSTAR/GPS satellites? i. offset of the satellite clock from GMT ii. edphemeris data iii. health data iv. ionospheric delays v. solar activity",
    "options": [
      "i, ii, iv ",
      "iv and v only",
      "all of the above",
      "i only"
    ],
    "correct": 0
  },
  {
    "question": "In NAVSTAR/GPS the PRN codes are used to:",
    "options": [
      "reduce ionospheric and tropospheric errors",
      "determine satellite range",
      "Eliminate satellite clock and ephemeris errors",
      "remove receiver clock error"
    ],
    "correct": 1
  },
  {
    "question": "NAVSTAR GPS receiver clock error is removed by:",
    "options": [
      "regular auto-synchronisation with the satellite clocks",
      "adjusting the pseudo-ranges to determine the error",
      "synchronisation with the satellite clocks on initialisation",
      "having an appropriate atomic time standard within the receiver"
    ],
    "correct": 1
  },
  {
    "question": "In the NAVSTAR/GPS satellite navigation system, what is the maximum time taken to receive the complete set of almanac data from all satellites?",
    "options": [
      "25 seconds (= 1 second per data frame)",
      "12 hours (= period of the satellite\u2019s orbit)",
      "12.5 minutes (= 30 seconds per data frame)",
      "24 seconds (= 1 second per data frame)"
    ],
    "correct": 2
  },
  {
    "question": "How many GPS satellites must be in view of a receiver in order to resolve clock bias?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1
  },
  {
    "question": "INMARSAT coverage is limited to below 80oN and 80oS because:",
    "options": [
      "the satellites cross the equator at 55o and therefore do not traverse the polar region",
      "the aurora borealis affects the satellite operation",
      "the satellite orbits are geostationary",
      "polar cap absorption affects the signals beyond those latitudes"
    ],
    "correct": 2
  },
  {
    "question": "The height derived by a receiver from the NAVSTAR/GPS is:",
    "options": [
      "above mean sea level",
      "above ground level",
      "above the WGS84 ellipsoid",
      "pressure altitude"
    ],
    "correct": 2
  },
  {
    "question": "What is the purpose of the GPS control segment?",
    "options": [
      "To control the use of the satellites by unauthorised users",
      "To monitor the satellites in orbit",
      "To maintain the satellites in orbit",
      "To degrade the accuracy of satellites for unauthorised users"
    ],
    "correct": 1
  },
  {
    "question": "The skysearch carried out by a GNSS receiver:",
    "options": [
      "is done prior to each fix",
      "is done when the receiver position is in error",
      "involves the receiver downloading the almanac from each satellite before determining which satellites are in view",
      "is the procedure carried out by the monitoring stations to check the accuracy of the satellite data"
    ],
    "correct": 1
  },
  {
    "question": "Airborne GNSS receivers are protected from the effects of selective availability (SA) by:",
    "options": [
      "warning transmitted on the satellite Nav message",
      "use of RAIM techniques",
      "warning transmitted from the ground segment",
      "NOTAMS"
    ],
    "correct": 1
  },
  {
    "question": "Where on the Earth would you have the most satellites visible:",
    "options": [
      "At the Equator",
      "At the Poles",
      "It will be the same anywhere on the Earth",
      "Depends on the time of day"
    ],
    "correct": 0
  },
  {
    "question": "The GNSS receiver determines the aeroplane velocity by:",
    "options": [
      "Integrating measured change of position with time",
      "Determining satellite/aeroplane relative velocities from Doppler shift measurements",
      "Determining the Doppler shift of the receiver frequency",
      "Determining the rate of change of pseudo ranges"
    ],
    "correct": 1
  },
  {
    "question": "The Glonass satellite system differs from the Navstar GPS system in that:",
    "options": [
      "the satellites are at a lower orbital height",
      "it is intended to use less satellites",
      "the orbital paths are at a smaller angle to the plane of the equator",
      "the satellites are geostationary"
    ],
    "correct": 0
  },
  {
    "question": "To provide 3D fixing with RAIM and allowing for the loss of one satellite requires",
    "options": [
      "3 SVs.",
      "4 SVs.",
      "5 SVs.",
      "6 SVs."
    ],
    "correct": 3
  },
  {
    "question": "On an aeroplane the GNSS receiver aerial should be located:",
    "options": [
      "Inside the cockpit",
      "Under the wing",
      "In the avionics bay",
      "On top of the fuselage"
    ],
    "correct": 3
  },
  {
    "question": "The NAVSTAR/GPS space segment:",
    "options": [
      "provides X, Y and Y co-ordinates and monitoring of the accuracy of the satellite data",
      "provides X, Y, Z and T co-ordinates and the constellation data",
      "monitors the accuracy of the satellite data and provides system time",
      "provides geographic position and UTC"
    ],
    "correct": 1
  },
  {
    "question": "The height of the GPS Navstar system above the earth in km is:",
    "options": [
      "10,200 Km",
      "15,200 Km",
      "20,200 Km",
      "25,200 Km"
    ],
    "correct": 2
  },
  {
    "question": "The GPS satellite navigation system suffers from the following errors:",
    "options": [
      "Interference from other satellites, clock bias, time lag",
      "Ephemeris, clock bias, propogation",
      "Ephemeris, interference from other satellites, propagation",
      "Ephemeris, time lag, interference from other satellites"
    ],
    "correct": 1
  },
  {
    "question": "The GPS satellite navigation system operates by:",
    "options": [
      "measuring the time for the signal to travel to the receiver and back",
      "measuring the time for the signal to reach the receiver",
      "phase comparison",
      "measuring the phase of the incoming signal"
    ],
    "correct": 1
  },
  {
    "question": "In order for a GPS receiver to conduct RAIM it must use a minimum of:",
    "options": [
      "Three satellites plus a barometric input",
      "Four satellites",
      "Five satellites",
      "Five satellites plus a barometric input"
    ],
    "correct": 2
  },
  {
    "question": "Which GPS frequencies are available for commercial air transport?",
    "options": [
      "1227.6 MHz only",
      "1575.42 MHz only",
      "1227.6 MHz and 1575.42 MHz",
      "1227.6 MHz or 1575.42 MHz"
    ],
    "correct": 1
  },
  {
    "question": "In a Pseudolite DGPS a data link is provided:",
    "options": [
      "To communicate satellite position information to the reference station",
      "To communicate navigation signals from the satellite to the aeroplane's GNSS receiver",
      "To communicate DGPS corrections and integrity information to the aeroplane's GNSS receiver",
      "To communicate corrections of clock and position from the reference station to the satellite"
    ],
    "correct": 2
  },
  {
    "question": "In GPS the satellite Nav message is repeated:",
    "options": [
      "Every 12.5 minutes",
      "At a rate of 1 subframe every 12.5 minutes",
      "Every 12.5 seconds",
      "As dictated by the master control station"
    ],
    "correct": 0
  },
  {
    "question": "Which of the following affects the User Equivalent Range Error (UERE)?",
    "options": [
      "Errors in the receiver processor's ionospheric model",
      "Errors in the receiver clock",
      "Failure of the altitude input",
      "Poor geometry of satellites"
    ],
    "correct": 1
  },
  {
    "question": "The coverage of the maritime satellite communications system (INMARSAT) is:",
    "options": [
      "Between 80\u00b0N and 80\u00b0S",
      "Between 60\u00b0N and 60\u00b0S",
      "Global coverage including poles",
      "Between 70\u00b0N and 70\u00b0S"
    ],
    "correct": 0
  },
  {
    "question": "If, during a manoeuvre, a satellite being used for position fixing is shadowed by the wing, the effect on position will be:",
    "options": [
      "none",
      "the position accuracy can be degraded",
      "another satellite will be selected, so there will be no degradation of position",
      "The GPS will maintain lock using reflections of the signals from the fuselage"
    ],
    "correct": 1
  },
  {
    "question": "The positioning of a GNSS aerial on an aircraft is:",
    "options": [
      "in the fin",
      "on the fuselage as close as possible to the receiver",
      "on top of the fuselage close to the centre of gravity",
      "under the fuselage"
    ],
    "correct": 2
  },
  {
    "question": "The contents of the navigation and systems message from NAVSTAR/GPS SVs includes:",
    "options": [
      "satellite clock error, almanac data, ionospheric propagation information",
      "satellite clock error, almanac data, satellite position error",
      "position accuracy verification, satellite clock time and clock error",
      "ionospheric propagation information, X, Y and Z co-ordinates and corrections, satellite clock time and error"
    ],
    "correct": 0
  }
];

const questions = [
  {
    "question": "An airborne weather radar unit transmits a 5\u00b0 beam from a parabolic dish aerial reflector assembly. If the wavelength is 4 cm, the diameter of the dish is:",
    "options": [
      "20 cm",
      "87.5 cm",
      "87.5 ins",
      "56.0 cm"
    ],
    "correct": 3
  },
  {
    "question": "On a colour radar, a bright red echo indicates:",
    "options": [
      "An area of strong wind shear",
      "An area of extreme turbulence",
      "Strong rising air currents",
      "Heavy concentrations of liquid/solid water"
    ],
    "correct": 3
  },
  {
    "question": "An airborne weather radar, with a beam width of 4\u00b0 in azimuth, is used in mapping mode. At what maximum range would it be able to detect a 1 NM wide opening in a facing sea cliff?",
    "options": [
      "4 NM",
      "60 NM",
      "45 NM",
      "15 NM"
    ],
    "correct": 3
  },
  {
    "question": "An aircraft flying at 25,000 ft is equipped with AWR. The beam width is 5\u00b0 with the radar tilted up at 3.5\u00b0. The radar is showing the top of a cloud return at 105 nm. The approximate height of the cloud is:",
    "options": [
      "14,300 ft",
      "25,600 ft",
      "30,300 ft",
      "35,600 ft"
    ],
    "correct": 3
  },
  {
    "question": "The AWR can be used on the ground provided: The AWR can be used on the ground provided: i. The aircraft is clear of personnel, buildings and vehicles ii. The conical beam is selected iii. Maximum uplift is selected iv. The AWR must never be operated on the ground ",
    "options": [
      "The aircraft is clear of personnel, buildings and vehicles",
      "All correct except iv",
      "Maximum uplift is selected",
      "i only"
    ],
    "correct": 1
  },
  {
    "question": "On a colour radar, the greatest turbulence is likely in an area where the targets:",
    "options": [
      "Coloured red",
      "Coloured magenta",
      "Show a clearly defined hole",
      "Show a rapid gradient of change from magenta to yellow"
    ],
    "correct": 3
  },
  {
    "question": "Before commencing a flight the weather radar should:",
    "options": [
      "Be switched to stand-by but not used until airborne",
      "Not be switched on until clear of buildings",
      "Be switched to a range function after push back to make sure it is functioning",
      "Be kept at stand-by until line up with the runway"
    ],
    "correct": 3
  },
  {
    "question": "Weather radar is used by the pilot to assist in the:",
    "options": [
      "Detection and avoidance of all turbulence",
      "Detection and avoidance of potentially turbulent cloud cells",
      "Detection and determination of a route through active cloud formations",
      "Detection of other aircraft through clouds"
    ],
    "correct": 1
  },
  {
    "question": "AWR in the contour mode is used for:",
    "options": [
      "Identifying rain bearing clouds",
      "Long range mapping",
      "Short range mapping",
      "Identifying areas of maximum turbulence within a cloud"
    ],
    "correct": 3
  },
  {
    "question": "The iso-echo feature of an airborne weather radar can be used to detect:",
    "options": [
      "Wake turbulence",
      "CAT",
      "Turbulence in clouds",
      "Areas of possible turbulence in clouds"
    ],
    "correct": 3
  },
  {
    "question": "Which of the following wavelengths would give the best penetration of weather?",
    "options": [
      "25 cm",
      "50 cm",
      "10 cm",
      "3 cm"
    ],
    "correct": 1
  },
  {
    "question": "The DME ground transponder has a PRF of:",
    "options": [
      "2700 pulses per second",
      "",
      "",
      ""
    ],
    "correct": 0
  },
  {
    "question": "How many aircraft will DME accommodate before reaching saturation:",
    "options": [
      "100",
      "",
      "",
      ""
    ],
    "correct": 0
  },
  {
    "question": "The time taken for the transmission of an interrogation pulse by a Distance Measuring Equipment (DME) to travel to the ground transponder and return to the airborne receiver was 2000 micro-second. The slant range from the ground transponder was:",
    "options": [
      "165 NM",
      "186 NM",
      "296 NM",
      "330 NM"
    ],
    "correct": 0
  },
  {
    "question": "If a VOR station and a DME station, having different locations, are selected to provide a fix:",
    "options": [
      "Two difference IDs will have to be checked",
      "Two positions, being ambiguous, will be presented",
      "Two sets, with separate frequency control, are required in the aircraft",
      "All 3 answers above are correct"
    ],
    "correct": 3
  },
  {
    "question": "Groundspeed measurement using DME equipment is most accurate flying:",
    "options": [
      "From the station at long range",
      "Over the station",
      "Towards the station at short range",
      "Past the station at short range"
    ],
    "correct": 0
  },
  {
    "question": "Where a DME uses mechanical counters for displaying the range, continuous rotation of the counters means:",
    "options": [
      "The DME is in a search mode",
      "",
      "",
      ""
    ],
    "correct": 0
  },
  {
    "question": "The DME in an aircraft, cruising at FL 210, fails to achieve lock on a DME at MSL at a range of 210 nm. The reason for this is:",
    "options": [
      "The aircraft is beyond line of sight range",
      "",
      "",
      ""
    ],
    "correct": 0
  },
  {
    "question": "What is the maximum distance apart a VOR and TACAN can be located and have the same identification?",
    "options": [
      "2000 m",
      "60 m",
      "600 m",
      "6 m"
    ],
    "correct": 2
  },
  {
    "question": "When identifying a co-located VOR/DME the following signals are heard in the Morse code every 30 seconds?",
    "options": [
      "4 identifications in the same tone",
      "4 identifications with the DME at a higher tone",
      "4 identifications with the DME at a lower tone",
      "No DME identification..."
    ],
    "correct": 1
  },
  {
    "question": "A VOR and DME are frequency paired. The DME identification ends with Z. This denotes that:",
    "options": [
      "The two beacons are co-located",
      "The beacons are supporting the same site but are not co-located",
      "The beacons are greater than 2000 m apart",
      "The beacons are at the same location but are more than 1000 m apart"
    ],
    "correct": 1
  },
  {
    "question": "In a certain VORTAC installation the VOR is coding STN and the DME is coding STZ. This means that the distance between the two beacons is in excess of:",
    "options": [
      "600 m",
      "",
      "",
      ""
    ],
    "correct": 0
  },
  {
    "question": "An aircraft at FL 360 is 10 nm plan range from a DME. The DME reading in the aircraft will be:",
    "options": [
      "11.7 nm",
      "",
      "",
      ""
    ],
    "correct": 0
  },
  {
    "question": "The aircraft DME receiver is able to accept replies to its own transmission and reject replies to other aircraft interrogations because:",
    "options": [
      "Transmission frequencies are 63 MHz different for each aircraft",
      "Pulse pairs are amplitude modulated...",
      "Aircraft interrogation signals and...",
      "Pulse pairs are discrete to a particular aircraft"
    ],
    "correct": 3
  },
  {
    "question": "A DME transmitter is operating in the search-for-lock phase. Which of the following statements is correct?",
    "options": [
      "The PRF increases and the range counters count down from the maximum",
      "The PRF increases and the range counters count up from 300 to maximum",
      "The PRF increases and the power is increased",
      "The PRF increases, the range counters count down from maximum..."
    ],
    "correct": 0
  },
  {
    "question": "Height error has the greatest effect on accuracy when an aeroplane is:",
    "options": [
      "Over the base line extensions at low altitude",
      "At the base line bisector at low altitudes",
      "At the base line bisector at high altitude",
      "Over the base line extension at high altitude"
    ],
    "correct": 3
  },
  {
    "question": "DME is a radar type of facility and its maximum range is limited by:",
    "options": [
      "The pulse repetition interval",
      "The height of the aeroplane",
      "The transmitter power",
      "The receiver sensitivity"
    ],
    "correct": 1
  },
  {
    "question": "In DME, interrogation and responses are separated by 63 MHz in order to:",
    "options": [
      "Avoid station saturation",
      "Differentiate between precision and ordinary DME",
      "Facilitate channel selection",
      "Prevent self-triggering"
    ],
    "correct": 3
  },
  {
    "question": "A DME which is listed as operating on an 'X' channel is one which:",
    "options": [
      "Is paired exclusively with an ILS frequency",
      "Is paired exclusively with a TACAN frequency",
      "Responds on a frequency 63 MHz higher than the interrogation frequency",
      "Responds on a frequency 63 MHz lower than the interrogation frequency"
    ],
    "correct": 3
  },
  {
    "question": "The nominal maximum coverage of a DME station is:",
    "options": [
      "150 nm at 20,000 ft",
      "175 nm at 25,000 ft",
      "190 nm at 25,000 ft",
      "200 nm at 30,000 ft"
    ],
    "correct": 3
  },
  {
    "question": "How does the DME tell different aircraft apart:",
    "options": [
      "By using a jittered PRF",
      "",
      "",
      ""
    ],
    "correct": 0
  }
];