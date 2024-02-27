import React from 'react'

// class MyImage extends React.Component {
    const image = ({src, alt, className}) => {
        // render() {
  return (
    <img
        src="./asssts/images/final.png"
        alt="computer system"
        className = {`${className} image`}
        style = {{
            // maxWidth: '100%',
            width: '141px',
            height: '103px',
            display: 'block',
            margin: '0 auto',
        }}
    />
  )
// }
}

// export default MyImage;
export default image;
