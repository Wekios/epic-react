// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const smallBoxStyles = {backgroundColor: 'lightblue'}
const mediumBoxStyles = {backgroundColor: 'pink'}
const largeBoxStyles = {backgroundColor: 'orange'}

// const smallBox = (
//   <div className="box box--small" style={smallBoxStyles}>
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//   >
//     large orange box
//   </div>
// )

function Box({size, style, ...otherProps}) {
  const mapSizeToCn = {
    small: 'box--small',
    medium: 'box--medium',
    large: 'box--large',
  }

  const className = 'box ' + mapSizeToCn[size]

  return (
    <div
      className={className}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={smallBoxStyles}>
        small light-blue box
      </Box>
      <Box size="medium" style={mediumBoxStyles}>
        medium pink box
      </Box>
      <Box size="large" style={largeBoxStyles}>
        large orange box
      </Box>
      <Box>Size-less box</Box>
    </div>
  )
}

export default App
