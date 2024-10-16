function Illustration(props) {
  return (
    <svg
      width={486}
      height={534}
      viewBox="0 0 486 534"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
          <g transform="translate(50,200) scale(3) rotate(180 24.5 20)">
        {/* Outer green V */}
        <path
          d="M24.5 0L0 40.5H11.7L24.5 18.2L37.3 40.5H49L24.5 0Z"
          fill="#42B883"
        />
        {/* Inner dark gray V */}
        <path
          d="M24.5 0L11.7 40.5H37.3L24.5 0Z"
          fill="#35495E"
        />
      </g>
      <rect x="50" y="50" width="100" height="100" fill="#F7DF1E" />
      <text
        x="75"
        y="125"
        fill="black"
        fontSize="40"
        fontFamily="monospace"
        fontWeight="bold"
      >
        JS
      </text>

    
      <g transform="translate(350, 100) scale(2)">
        <path
          fill="#DD0031"
          d="M24 0L48 9.4V28.2L24 53.7L0 28.2V9.4L24 0Z"
        />
        <path fill="#C3002F" d="M24 0L48 9.4V28.2L24 53.7V0Z" />
        <path
          fill="#FFF"
          d="M24 10.9L13.3 38.2H17.6L20.1 31.5H28.1L30.6 38.2H34.8L24 10.9ZM25.1 28.2H22.9L24 24.8L25.1 28.2Z"
        />
      </g>

      <g transform="translate(200, 100) scale(3)">
        <circle cx="25" cy="25" r="4" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="2" fill="none">
          <ellipse rx="15" ry="6" cx="25" cy="25" transform="rotate(30 25 25)" />
          <ellipse rx="15" ry="6" cx="25" cy="25" transform="rotate(90 25 25)" />
          <ellipse rx="15" ry="6" cx="25" cy="25" transform="rotate(150 25 25)" />
        </g>
      </g>
     

      <rect x="250" y="260" width="100" height="100" fill="#3178C6" />
      <text
        x="280"
        y="320"
        fill="white"
        fontSize="40"
        fontFamily="monospace"
        fontWeight="bold"
      >
        TS
      </text>

      <path
        transform="translate(350, 325) scale(1.5)"
        d="M20 40C24 32 28 28 32 28C40 28 44 36 48 36C52 36 56 32 60 28C52 36 48 44 40 44C36 44 32 36 28 36C24 36 20 40 16 44C24 36 28 28 32 28C28 28 24 32 20 40Z"
        fill="#38BDF8"
      /> 
       <path
        transform="translate(350, 295) scale(1.5)"
        d="M20 40C24 32 28 28 32 28C40 28 44 36 48 36C52 36 56 32 60 28C52 36 48 44 40 44C36 44 32 36 28 36C24 36 20 40 16 44C24 36 28 28 32 28C28 28 24 32 20 40Z"
        fill="#38BDF8"
      /> 
      <g transform="translate(50, 350) scale(3)">
        <polygon points="12,0 0,12 0,24 12,36 24,24 24,12" fill="#264DE4" />
        <polygon points="12,2 2,12 2,22 12,32 22,22 22,12" fill="#2965F1" />
        <text
          x="4"
          y="20"
          fill="white"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="bold"
        >
          CSS
        </text>
      </g>

      {/* Cypress Logo */}
      <g transform="translate(200, 450) scale(3.5)">
        <circle cx="12" cy="12" r="12" fill="#1A202C" />
        <text
          x="4"
          y="15"
          fill="white"
          fontSize="15"
          fontFamily="Arial"
          fontWeight="bold"
        >
          c
        </text>
        <text
          x="13"
          y="15"
          fill="white"
          fontSize="10"
          fontFamily="Arial"
          fontWeight="bold"
        >
          y
        </text>
      </g>

      {/* Playwright Logo */}
      <g transform="translate(350, 450) scale(1.5)">
        <circle cx="12" cy="12" r="12" fill="limegreen" />
        <text
          x="3"
          y="18"
          fill="black"
          fontSize="10"
          fontFamily="Arial"
          fontWeight="bold"
        >
          PW
        </text>
      </g>
    </svg>
  );
}

export default Illustration;
