import React, { useState } from 'react';
import Main from '../layouts/temg_Main';

const HappyBirthday = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <Main title="ILY AMYYYY">
      {/* Inline Styles for Animations and Layout */}
      <style>{`
        .birthday-container {
          position: relative;
          width: 100%;
          height: 100vh;
          background-color: #ffe6f0;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-family: 'Arial, sans-serif';
        }

        .birthday-message {
          font-size: 3em;
          color: #ff4d6d;
          z-index: 1;
          text-align: center;
          margin-bottom: 20px;
        }

        /* Heart Styles */
        .heart {
          position: absolute;
          width: 30px;
          height: 30px;
          background: red;
          transform: rotate(45deg);
          animation: float 10s infinite;
          opacity: 0.8;
        }

        .heart::before,
        .heart::after {
          content: "";
          position: absolute;
          width: 30px;
          height: 30px;
          background: red;
          border-radius: 50%;
        }

        .heart::before {
          top: -15px;
          left: 0;
        }

        .heart::after {
          left: 15px;
          top: 0;
        }

        /* Reindeer Styles */
        .reindeer {
          position: absolute;
          width: 50px;
          height: 30px;
          background: brown;
          border-radius: 50% 50% 0 0;
          animation: float 15s infinite;
          opacity: 0.9;
        }

        /* Antlers */
        .antlers {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 15px solid brown;
          top: -15px;
          left: 10px;
        }

        /* Animation Keyframes */
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        /* Present Styles */
        .present-container {
          position: relative;
          width: 100px;
          height: 100px;
          cursor: pointer;
          transition: transform 0.5s;
          margin-top: 40px;
        }

        .present-box {
          position: absolute;
          width: 100px;
          height: 100px;
          background: #ffcc00;
          border: 5px solid #e6b800;
          box-sizing: border-box;
          top: 0;
          left: 0;
          z-index: 2;
          transform-origin: center;
          transition: transform 1s;
        }

        .present-box::before,
        .present-box::after {
          content: "";
          position: absolute;
          background: #e6b800;
        }

        /* Horizontal Ribbon */
        .present-box::before {
          top: 45px;
          left: 0;
          width: 100%;
          height: 10px;
        }

        /* Vertical Ribbon */
        .present-box::after {
          left: 45px;
          top: 0;
          width: 10px;
          height: 100%;
        }

        /* Lid Styles */
        .present-lid {
          position: absolute;
          width: 100px;
          height: 20px;
          background: #ffcc00;
          border: 5px solid #e6b800;
          top: -25px;
          left: 0;
          transform-origin: center bottom;
          transition: transform 1s;
          z-index: 3;
        }

        .present-lid::before,
        .present-lid::after {
          content: "";
          position: absolute;
          background: #e6b800;
        }

        /* Horizontal Ribbon on Lid */
        .present-lid::before {
          top: 5px;
          left: 0;
          width: 100%;
          height: 5px;
        }

        /* Vertical Ribbon on Lid */
        .present-lid::after {
          left: 45px;
          top: 0;
          width: 5px;
          height: 100%;
        }

        /* Reveal Message Container */
        .message-container {
          position: absolute;
          top: 120px;
          width: 800%;
          max-width: 800px;
          background: rgba(255, 255, 255, 0.9);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          opacity: 0;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 1s, opacity 1s;
          z-index: 1;
        }

        .message-container.visible {
          opacity: 1;
          transform: scaleY(1);
        }

        /* Animation for Present Unraveling */
        .present-unravel {
          transform: rotateX(-180deg);
        }

        /* Additional Styles */
        .present-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .message-text {
          font-size: 1.2em;
          color: #333;
          text-align: center;
        }

        /* Responsive Adjustments */
        @media (max-width: 600px) {
          .birthday-message {
            font-size: 2em;
          }

          .present-container {
            width: 80px;
            height: 80px;
          }

          .present-box,
          .present-lid {
            width: 80px;
            height: 80px;
          }

          .message-container {
            top: 110px;
            padding: 15px;
          }

          .message-text {
            font-size: 1em;
          }
        }
      `}
      </style>

      {/* Birthday Message */}
      <div className="birthday-container">
        <h1 className="birthday-message">🎁 Happy Christmas Baby! 🎄</h1>

        {/* Animated Hearts */}
        <div className="heart" style={{ left: '10%', animationDelay: '0s' }} />
        <div className="heart" style={{ left: '30%', animationDelay: '2s' }} />
        <div className="heart" style={{ left: '50%', animationDelay: '4s' }} />
        <div className="heart" style={{ left: '70%', animationDelay: '6s' }} />
        <div className="heart" style={{ left: '90%', animationDelay: '8s' }} />

        {/* Present Reveal Section */}
        <div className="present-wrapper">
          <div
            className="present-container"
            onClick={handleReveal}
            style={{
              transform: isRevealed ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <div
              className="present-box"
              style={{
                transform: isRevealed ? 'rotateX(-180deg)' : 'rotateX(0deg)',
              }}
            />
            <div
              className="present-lid"
              style={{
                transform: isRevealed ? 'rotateX(0deg)' : 'rotateX(180deg)',
              }}
            />
          </div>

          {/* Reveal Message */}
          <div className={`message-container ${isRevealed ? 'visible' : ''}`}>
            <p className="message-text">
              Dear Amy,
              <br />
              To say my christmas present came early would be an understatement - and also
              unoriginal - but it would be true. This year my dream became a reality.
              I know we&apos;re keeping this
              relationship lowkey. But to everyone I haven&apos;t told about you,
              they see you in my eyes, my words, my smile; for the perfume of love
              is impossible to conceal.
              <br />
              From your dearest, Adi
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default HappyBirthday;
