// src/data/technologies.jsx
import React from "react";

// Technology Icons as SVG components
export const TechIcons = {
  HTML5: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#E34F26" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z" />
      <path fill="#EF652A" d="M16 27.858l8.17-2.265 1.922-21.532H16z" />
      <path fill="#fff" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16zm0 8.027l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004z" />
      <path fill="#EBEBEB" d="M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.047-.522.726-8.137.076-.83h-.833z" />
      <path fill="#fff" d="M15.989 7.151v3.091h7.466l.062-.694.141-1.567.074-.83z" />
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#1572B6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z" />
      <path fill="#33A9DC" d="M16 27.858l8.17-2.265 1.922-21.532H16z" />
      <path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829-.759 8.518H16z" />
      <path fill="#EBEBEB" d="M16.019 21.218l-.014.004-3.442-.93-.22-2.465H9.24l.433 4.853 6.332 1.758.014-.004z" />
      <path fill="#fff" d="M19.827 16.151l-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007z" />
      <path fill="#EBEBEB" d="M16.011 6.935v3.091H8.545l-.062-.695-.141-1.567-.074-.829zM16 13.191v3.091H12.601l-.062-.695-.14-1.567-.074-.829z" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <rect fill="#F7DF1E" width="32" height="32" rx="2" />
      <path d="M8.415 25.797l2.387-1.444a2.18 2.18 0 002.012 1.238c.862 0 1.41-.431 1.41-1.056v-5.703h2.934v5.74c0 2.108-1.238 3.07-3.043 3.07a3.164 3.164 0 01-3.7-1.845zm8.744-.276l2.387-1.384a2.584 2.584 0 002.323 1.445c.976 0 1.6-.488 1.6-1.164 0-.806-.64-1.093-1.718-1.562l-.59-.253c-1.702-.725-2.834-1.635-2.834-3.557 0-1.77 1.348-3.118 3.458-3.118a3.466 3.466 0 013.32 1.867l-1.818 1.168a1.594 1.594 0 00-1.502-1c-.684 0-1.117.434-1.117.999 0 .7.433.984 1.434 1.418l.59.254c2.004.86 3.136 1.735 3.136 3.703 0 2.122-1.667 3.283-3.907 3.283a4.532 4.532 0 01-4.762-2.099z" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle cx="16" cy="16" r="2.5" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse cx="16" cy="16" rx="10" ry="4" />
        <ellipse cx="16" cy="16" rx="10" ry="4" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="10" ry="4" transform="rotate(120 16 16)" />
      </g>
    </svg>
  ),
  TailwindCSS: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#06B6D4" d="M9 13.7c1.333-4.467 4.667-6.7 10-6.7 8 0 9 6 13 7-2.667 2-5.333 2.5-8 1.5-1.684-.631-2.894-1.5-5-1.5-3.5 0-5.667 1.833-6.5 5.5-1.333-4.467-4.667-6.7-10-6.7 8 0 9 6 13 7z" />
      <path fill="#06B6D4" d="M9 20.7c1.333-4.467 4.667-6.7 10-6.7 8 0 9 6 13 7-2.667 2-5.333 2.5-8 1.5-1.684-.631-2.894-1.5-5-1.5-3.5 0-5.667 1.833-6.5 5.5-1.333-4.467-4.667-6.7-10-6.7 8 0 9 6 13 7z" transform="translate(0 7)" />
    </svg>
  ),
  NodeJS: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#339933" d="M16 30a2.151 2.151 0 01-1.076-.288L11.5 27.685c-.511-.286-.262-.387-.093-.446a6.828 6.828 0 001.549-.7.263.263 0 01.255.019l2.631 1.563a.34.34 0 00.318 0l10.26-5.922a.323.323 0 00.157-.278V10.075a.331.331 0 00-.159-.283l-10.26-5.917a.323.323 0 00-.317 0L5.587 9.794a.33.33 0 00-.162.281v11.841a.315.315 0 00.161.274L8.4 23.814c1.525.762 2.459-.136 2.459-1.038V11.085a.3.3 0 01.3-.3h1.3a.3.3 0 01.3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.389 4.389 0 01-2.363-.642l-2.697-1.547a2.166 2.166 0 01-1.076-1.872V10.075a2.162 2.162 0 011.076-1.872l10.261-5.924a2.246 2.246 0 012.156 0l10.26 5.924A2.165 2.165 0 0128.4 10.075v11.846a2.171 2.171 0 01-1.077 1.872l-10.26 5.924A2.152 2.152 0 0116 30z" />
      <path fill="#339933" d="M19.954 21.677c-4.507 0-5.455-2.068-5.455-3.8a.3.3 0 01.3-.3h1.327a.3.3 0 01.295.251c.2 1.351.8 2.032 3.533 2.032 2.174 0 3.1-.492 3.1-1.645 0-.666-.263-1.16-3.641-1.492-2.829-.28-4.58-.9-4.58-3.165 0-2.085 1.759-3.328 4.709-3.328 3.313 0 4.952 1.149 5.16 3.612a.3.3 0 01-.3.331h-1.333a.3.3 0 01-.288-.231c-.32-1.421-1.1-1.875-3.239-1.875-2.386 0-2.664.832-2.664 1.456 0 .756.328 1.001 3.529 1.388 3.17.383 4.691 1.107 4.691 3.247 0 2.253-1.877 3.519-5.144 3.519z" />
    </svg>
  ),
  Express: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#000000" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.42 7.196c-.577.76-1.34 1.11-2.426.96v-1.848l4.683-6.357 5.13-6.872c.575-.76 1.34-1.11 2.426-.96v1.847l-4.683 6.357-5.13 6.872a1.917 1.917 0 01-.296.225v-.001l-.002.001 4.594 6.357.664.88 5.42-7.196c.577-.76 1.34-1.11 2.426-.96v1.848l-4.683 6.357-5.13 6.872a1.917 1.917 0 01-.296.225z" />
      <path fill="#000000" d="M.004 21.342l-.004-.608c.044-7.542 6.136-13.6 13.69-13.596 7.552.004 13.644 6.066 13.64 13.608l-.003.568c-.047 7.538-6.14 13.596-13.694 13.592C6.08 34.902-.01 28.84.004 21.342zm24.456.42c-.047-5.998-4.903-10.838-10.895-10.838-5.993 0-10.85 4.84-10.85 10.838s4.856 10.84 10.85 10.84c5.992 0 10.848-4.842 10.895-10.84z" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#47A248" d="M16.62 30l-.751-.249s.092-3.832-1.275-4.105c-.911-1.262.14-53.53 3.16-.097a5.479 5.479 0 01-1.107 4.168z" />
      <path fill="#A6E22E" d="M17.314 26.477s4.543-2.974 3.037-9.292c-1.277-5.478-3.076-7.384-3.397-8.207a20.562 20.562 0 01-.675-1.653l.262 16.268c0 .001-.233 2.316.773 2.884z" />
      <path fill="#47A248" d="M15.263 26.345s-4.25-2.82-4.012-8.122c.237-5.247 2.966-8.75 4.025-9.455.615-.467 1.078-1.382 1.233-1.952l-.098 16.595c.001 0-.026 2.399-1.148 2.934z" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="python-a" x1="12.959" y1="12.039" x2="25.792" y2="25.871" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#387EB8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="python-b" x1="7.625" y1="6.5" x2="20.458" y2="20.333" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFE052" />
          <stop offset="1" stopColor="#FFC331" />
        </linearGradient>
      </defs>
      <path fill="url(#python-a)" d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.18h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912h2.4v-3.326s-.13-4.013 3.949-4.013h6.8s3.816.06 3.816-3.7V6.366s.58-4.266-7.1-4.266zm-3.78 2.47a1.214 1.214 0 110 2.428 1.214 1.214 0 010-2.428z" />
      <path fill="url(#python-b)" d="M16.114 29.9c7.1 0 6.651-3.07 6.651-3.07v-3.18h-6.752v-1h9.443S30 23.2 30 15.995s-4.013-6.912-4.013-6.912h-2.4v3.326s.13 4.013-3.949 4.013h-6.8s-3.816-.06-3.816 3.7v5.512s-.58 4.266 7.1 4.266zm3.78-2.47a1.214 1.214 0 110-2.428 1.214 1.214 0 010 2.428z" />
    </svg>
  ),
  Django: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#092E20" d="M16 2C8.28 2 2 8.28 2 16s6.28 14 14 14 14-6.28 14-14S23.72 2 16 2z" />
      <path fill="#fff" d="M17.64 7.5h2.77v12.1c-1.42.27-2.47.37-3.61.37-3.4 0-5.18-1.53-5.18-4.47 0-2.82 1.88-4.64 4.8-4.64.46 0 .8.04 1.22.14V7.5zm0 6.04c-.33-.1-.6-.13-.94-.13-1.42 0-2.24.87-2.24 2.4 0 1.5.78 2.32 2.2 2.32.32 0 .58-.03.98-.1v-4.49zm4.86-6.04h2.77v6.54h.05c.68-1.07 1.67-1.58 2.93-1.58 2.03 0 3.23 1.53 3.23 4.1 0 3.02-1.52 4.94-4 4.94-1.23 0-2.12-.5-2.85-1.62h-.05v1.42h-2.08V7.5z" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#F05032" d="M29.472 14.753L17.247 2.528a1.8 1.8 0 00-2.55 0l-2.54 2.54 3.22 3.22a2.141 2.141 0 012.712 2.73l3.1 3.1a2.143 2.143 0 11-1.285 1.21l-2.892-2.892v7.61a2.143 2.143 0 11-1.764-.062V12.19a2.143 2.143 0 01-1.165-2.814L10.9 6.2l-8.375 8.375a1.8 1.8 0 000 2.55l12.225 12.224a1.8 1.8 0 002.55 0L29.472 17.3a1.8 1.8 0 000-2.55" />
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="vite-a" x1="-.17" y1="4.13" x2="25.17" y2="28.77" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite-b" x1="15.7" y1="4.66" x2="21.48" y2="21.09" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFBD4F" />
          <stop offset="1" stopColor="#FF980E" />
        </linearGradient>
      </defs>
      <path fill="url(#vite-a)" d="M29.13 6.55L16.21 28.65a.64.64 0 01-1.13-.03L2.17 6.52a.64.64 0 01.72-.92l12.91 2.5a.64.64 0 00.24 0l12.43-2.5a.64.64 0 01.76.95z" />
      <path fill="url(#vite-b)" d="M21.88 2l-9.44 1.87a.32.32 0 00-.26.31l-.58 9.65a.32.32 0 00.39.33l2.62-.55a.32.32 0 01.38.38l-.78 3.85a.32.32 0 00.42.36l1.62-.5a.32.32 0 01.42.36l-1.24 6.02a.2.2 0 00.37.16l.22-.35 6.15-12.28a.32.32 0 00-.33-.46l-2.73.44a.32.32 0 01-.36-.4l1.73-7.96A.32.32 0 0021.88 2z" />
    </svg>
  ),
  MachineLearning: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle cx="16" cy="16" r="14" fill="#FF6F00" opacity="0.2" />
      <circle cx="16" cy="16" r="3" fill="#FF6F00" />
      <circle cx="16" cy="6" r="2" fill="#FF6F00" />
      <circle cx="16" cy="26" r="2" fill="#FF6F00" />
      <circle cx="6" cy="16" r="2" fill="#FF6F00" />
      <circle cx="26" cy="16" r="2" fill="#FF6F00" />
      <circle cx="8.93" cy="8.93" r="2" fill="#FF6F00" />
      <circle cx="23.07" cy="23.07" r="2" fill="#FF6F00" />
      <circle cx="8.93" cy="23.07" r="2" fill="#FF6F00" />
      <circle cx="23.07" cy="8.93" r="2" fill="#FF6F00" />
      <line x1="16" y1="13" x2="16" y2="8" stroke="#FF6F00" strokeWidth="1.5" />
      <line x1="16" y1="19" x2="16" y2="24" stroke="#FF6F00" strokeWidth="1.5" />
      <line x1="13" y1="16" x2="8" y2="16" stroke="#FF6F00" strokeWidth="1.5" />
      <line x1="19" y1="16" x2="24" y2="16" stroke="#FF6F00" strokeWidth="1.5" />
      <line x1="13.88" y1="13.88" x2="10.34" y2="10.34" stroke="#FF6F00" strokeWidth="1.5" />
      <line x1="18.12" y1="18.12" x2="21.66" y2="21.66" stroke="#FF6F00" strokeWidth="1.5" />
      <line x1="13.88" y1="18.12" x2="10.34" y2="21.66" stroke="#FF6F00" strokeWidth="1.5" />
      <line x1="18.12" y1="13.88" x2="21.66" y2="10.34" stroke="#FF6F00" strokeWidth="1.5" />
    </svg>
  ),
  Excel: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#217346" d="M28.781 4H10.219A1.219 1.219 0 009 5.219v3.125L19.5 11l9.281-2.656V5.219A1.219 1.219 0 0028.781 4z" />
      <path fill="#33C481" d="M29.781 8.344H9V14l10.5 2.656L29.781 14V8.344z" />
      <path fill="#107C41" d="M9 14v5.656l10 2.656 10.781-2.656V14z" />
      <path fill="#185C37" d="M9 19.656v5.125A1.219 1.219 0 0010.219 26h18.562A1.219 1.219 0 0030 24.781v-5.125l-10.5-2.656z" />
      <path opacity=".1" d="M16.188 6H9v20h7.188a1.22 1.22 0 001.218-1.219V7.219A1.22 1.22 0 0016.188 6z" />
      <path opacity=".2" d="M15.594 6.594H9v20h6.594a1.22 1.22 0 001.218-1.219V7.813a1.22 1.22 0 00-1.218-1.219z" />
      <path opacity=".2" d="M15.594 6.594H9v18.812h6.594a1.22 1.22 0 001.218-1.219V7.813a1.22 1.22 0 00-1.218-1.219z" />
      <path opacity=".2" d="M15 6.594H9v18.812h6a1.22 1.22 0 001.219-1.219V7.813A1.22 1.22 0 0015 6.594z" />
      <path fill="#107C41" d="M3.219 6.594h11.562A1.219 1.219 0 0116 7.813v11.375a1.219 1.219 0 01-1.219 1.219H3.219A1.219 1.219 0 012 19.187V7.813a1.219 1.219 0 011.219-1.219z" />
      <path fill="#fff" d="M5.188 17.5l2.875-4.5-2.625-4.5h2.188l1.531 2.875a4.24 4.24 0 01.281.656h.031a6.14 6.14 0 01.313-.688L11.375 8.5h2l-2.688 4.469 2.781 4.531h-2.125l-1.688-3.031a2.317 2.317 0 01-.219-.5h-.031a2.177 2.177 0 01-.219.484L7.375 17.5z" />
    </svg>
  ),
  DeepLearning: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="dl-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4081" />
          <stop offset="100%" stopColor="#F50057" />
        </linearGradient>
      </defs>
      <rect x="4" y="6" width="4" height="20" rx="2" fill="url(#dl-grad)" />
      <rect x="10" y="10" width="4" height="12" rx="2" fill="url(#dl-grad)" />
      <rect x="16" y="4" width="4" height="24" rx="2" fill="url(#dl-grad)" />
      <rect x="22" y="8" width="4" height="16" rx="2" fill="url(#dl-grad)" />
      <circle cx="6" cy="6" r="2" fill="#FF4081" />
      <circle cx="12" cy="10" r="2" fill="#FF4081" />
      <circle cx="18" cy="4" r="2" fill="#FF4081" />
      <circle cx="24" cy="8" r="2" fill="#FF4081" />
      <line x1="6" y1="6" x2="12" y2="10" stroke="#FF4081" strokeWidth="1" />
      <line x1="12" y1="10" x2="18" y2="4" stroke="#FF4081" strokeWidth="1" />
      <line x1="18" y1="4" x2="24" y2="8" stroke="#FF4081" strokeWidth="1" />
    </svg>
  ),
  NLP: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle cx="16" cy="16" r="12" fill="#00BCD4" opacity="0.2" />
      <path fill="#00BCD4" d="M8 10h16v2H8zM8 14h12v2H8zM8 18h14v2H8zM8 22h10v2H8z" />
      <circle cx="24" cy="16" r="4" fill="#00BCD4" />
      <path fill="#fff" d="M23 15h2v2h-2zM22.5 17.5l1.5 1.5" />
    </svg>
  ),
  ComputerVision: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle cx="16" cy="16" r="12" fill="#9C27B0" opacity="0.2" />
      <circle cx="16" cy="16" r="8" stroke="#9C27B0" strokeWidth="2" fill="none" />
      <circle cx="16" cy="16" r="4" fill="#9C27B0" />
      <circle cx="16" cy="16" r="1.5" fill="#fff" />
      <line x1="16" y1="2" x2="16" y2="6" stroke="#9C27B0" strokeWidth="2" />
      <line x1="16" y1="26" x2="16" y2="30" stroke="#9C27B0" strokeWidth="2" />
      <line x1="2" y1="16" x2="6" y2="16" stroke="#9C27B0" strokeWidth="2" />
      <line x1="26" y1="16" x2="30" y2="16" stroke="#9C27B0" strokeWidth="2" />
    </svg>
  ),
  Linux: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#333" d="M16.003 2C10.146 2 6.508 7.636 6.508 11.748c0 2.834.91 5.57 2.226 7.618-.41.93-.635 1.91-.64 2.892 0 2.17.954 3.67 2.346 4.472-.2.49-.312 1.01-.312 1.554 0 1.012.387 1.966 1.088 2.686.71.73 1.668 1.138 2.697 1.138.61 0 1.198-.14 1.726-.4.12.036.243.068.372.092.52.098 1.056.136 1.598.136.542 0 1.078-.038 1.598-.136.13-.024.252-.056.372-.092.528.26 1.116.4 1.726.4 1.03 0 1.988-.408 2.697-1.138.7-.72 1.088-1.674 1.088-2.686 0-.544-.112-1.064-.312-1.554 1.392-.802 2.346-2.302 2.346-4.472-.004-.982-.23-1.962-.64-2.892 1.316-2.048 2.226-4.784 2.226-7.618 0-4.112-3.638-9.748-9.495-9.748" />
      <path fill="#FFC107" d="M13.108 17.96a14.16 14.16 0 01-.55-1.09c-.128-.326-.232-.626-.322-.93-.52.234-1.132.41-1.79.524.14.476.38.91.686 1.28.448.54 1.052.89 1.726 1.008a5.24 5.24 0 01.25-.792" />
      <path fill="#FFC107" d="M11.51 21.95c-.588.302-1.244.47-1.926.47-.628 0-1.234-.124-1.796-.362-.116.476-.176.966-.176 1.466 0 1.392.576 2.398 1.432 3.03.368-.342.816-.598 1.316-.752a4.04 4.04 0 011.076-.15c.418 0 .82.068 1.194.192.264-.11.532-.21.806-.296a6.22 6.22 0 00-.16-.604c-.132-.41-.33-.828-.552-1.206a5.68 5.68 0 01-1.214-1.788" />
      <ellipse fill="#333" cx="12.5" cy="12" rx="1.5" ry="2" />
      <ellipse fill="#333" cx="19.5" cy="12" rx="1.5" ry="2" />
    </svg>
  ),
  PowerBI: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#F2C811" d="M21 6h4v20h-4z" />
      <path fill="#E8B909" d="M15 10h4v16h-4z" />
      <path fill="#D9A900" d="M9 14h4v12H9z" />
      <path fill="#C49A00" d="M3 18h4v8H3z" />
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <ellipse cx="16" cy="7" rx="10" ry="4" fill="#4479A1" />
      <path fill="#4479A1" d="M6 7v6c0 2.21 4.477 4 10 4s10-1.79 10-4V7c0 2.21-4.477 4-10 4S6 9.21 6 7z" />
      <path fill="#4479A1" d="M6 13v6c0 2.21 4.477 4 10 4s10-1.79 10-4v-6c0 2.21-4.477 4-10 4S6 15.21 6 13z" />
      <path fill="#4479A1" d="M6 19v6c0 2.21 4.477 4 10 4s10-1.79 10-4v-6c0 2.21-4.477 4-10 4S6 21.21 6 19z" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#2496ED" d="M18 14h4v3h2.035c.948 0 1.894-.186 2.754-.554l.002-.001c.861-.368 1.65-.896 2.327-1.554l.883.883C30 15.774 30 15.887 30 16c0 4.418-3.582 8-8 8H10c-4.418 0-8-3.582-8-8 0-.113 0-.226.002-.339l.883-.883c.677.658 1.466 1.186 2.327 1.554l.002.001c.86.368 1.806.554 2.754.554H10v-3h4v-3h-3V7h3V4h4v3h3v3h-3v4z" />
      <rect x="6" y="14" width="3" height="3" fill="#2496ED" />
      <rect x="10" y="14" width="3" height="3" fill="#2496ED" />
      <rect x="14" y="14" width="3" height="3" fill="#2496ED" />
      <rect x="10" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="14" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="18" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="14" y="6" width="3" height="3" fill="#2496ED" />
    </svg>
  ),
  Angular: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#DD0031" d="M16 2L3 7l2 17.5L16 30l11-5.5L29 7z" />
      <path fill="#C3002F" d="M16 2v28l11-5.5L29 7z" />
      <path fill="#fff" d="M16 5.5L8.5 23h3l1.5-3.7h5l1.5 3.7h3L16 5.5zm-1.8 11.8l1.8-4.4 1.8 4.4z" />
    </svg>
  ),
  Android: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#3DDC84" d="M22.4 10.2c-.8 0-1.4.6-1.4 1.4v6.8c0 .8.6 1.4 1.4 1.4s1.4-.6 1.4-1.4v-6.8c0-.8-.6-1.4-1.4-1.4zM9.6 10.2c-.8 0-1.4.6-1.4 1.4v6.8c0 .8.6 1.4 1.4 1.4s1.4-.6 1.4-1.4v-6.8c0-.8-.6-1.4-1.4-1.4z" />
      <path fill="#3DDC84" d="M20.2 21.2v4.6c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6v-4.6h-2v4.6c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6v-4.6H10v-10h12v10h-1.8zM19.8 6.4l1.2-2.1c.1-.2 0-.4-.2-.5s-.4 0-.5.2l-1.2 2.2c-1-.4-2.1-.6-3.2-.6s-2.2.2-3.2.6l-1.2-2.2c-.1-.2-.3-.3-.5-.2s-.3.3-.2.5l1.2 2.1c-2.4 1.2-4 3.7-4 6.6h16c.1-2.9-1.5-5.4-3.9-6.6z" />
      <circle fill="#fff" cx="13.2" cy="9.2" r="1" />
      <circle fill="#fff" cx="18.8" cy="9.2" r="1" />
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#EA2D2E" d="M11.5 22.5s-1 .6.7 .8c2 .2 3 .2 5.2-.2 0 0 .6.4 1.5.7-5.3 2.3-12-.1-7.4-1.3zM11 19.3s-1.2.9.6 1.1c2.3.2 4 .3 7.1-.3 0 0 .4.4 1 .6-5.7 1.7-12.1.1-8.7-1.4z" />
      <path fill="#0074BD" d="M17.5 14.2c1.3 1.5-.3 2.9-.3 2.9s3.3-1.7 1.8-3.9c-1.4-2-2.5-3 3.4-6.4 0 0-9.3 2.3-4.9 7.4z" />
      <path fill="#EA2D2E" d="M23.9 24.8s.7.6-.8 1c-2.9.9-12 1.2-14.5 0-.9-.4.8-1 1.3-1.1.6-.1.9-.1.9-.1-1-.7-6.7 1.4-2.9 2 9.8 1.5 17.9-.7 16-1.8zM12.2 16.3s-4.7 1.1-1.7 1.5c1.3.2 3.8.1 6.2-.1 1.9-.1 3.9-.4 3.9-.4s-.7.3-1.2.6c-4.8 1.3-14.1.7-11.4-.6 2.3-1.1 4.2-1 4.2-1zM21 20.7c4.9-2.5 2.6-5 1-4.7-.4.1-.6.2-.6.2s.2-.2.4-.5c3.3-1.2 5.9 3.3-1 5-.1 0 0-.1.2-.1z" />
      <path fill="#0074BD" d="M17.5 2s2.7 2.7-2.6 6.8c-4.2 3.3-1 5.2 0 7.3-2.4-2.2-4.2-4.1-3-5.9 1.7-2.6 6.5-3.8 5.6-8.2z" />
      <path fill="#EA2D2E" d="M12.6 28.8c4.7.3 11.9-.2 12.1-2.4 0 0-.3.8-3.9 1.5-4 .8-9 .7-11.9.2 0 0 .6.5 3.7.7z" />
    </svg>
  ),
  DevOps: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="devops-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#007ACC" />
          <stop offset="100%" stopColor="#00BCF2" />
        </linearGradient>
      </defs>
      <path fill="url(#devops-grad)" d="M16 2l-14 7v14l14 7 14-7V9z" />
      <path fill="#fff" opacity="0.9" d="M16 6l-10 5v10l10 5 10-5V11z" />
      <path fill="url(#devops-grad)" d="M12 14l4-2 4 2v4l-4 2-4-2z" />
      <circle cx="16" cy="16" r="2" fill="#007ACC" />
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#FF9900" d="M14.7 17.5c0 .4-.1.7-.2 1-.1.3-.3.5-.5.7-.2.2-.5.3-.8.4-.3.1-.6.1-1 .1-.3 0-.6 0-.9-.1-.3-.1-.6-.2-.8-.4l.6-1.1c.2.1.4.2.6.3.2.1.5.1.7.1.3 0 .6-.1.7-.2.2-.1.3-.3.3-.6v-3.2h1.3v3zM20.3 17c0 .4-.1.7-.2 1-.1.3-.3.5-.5.7-.2.2-.5.3-.8.4-.3.1-.6.1-.9.1s-.6 0-.9-.1c-.3-.1-.5-.2-.7-.4-.2-.2-.4-.4-.5-.7-.1-.3-.2-.6-.2-1v-2.6h1.3v2.5c0 .4.1.7.3.9.2.2.4.3.7.3s.5-.1.7-.3c.2-.2.3-.5.3-.9v-2.5h1.3V17z" />
      <path fill="#FF9900" d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm0 22c-5.5 0-10-4.5-10-10S10.5 6 16 6s10 4.5 10 10-4.5 10-10 10z" />
      <path fill="#FF9900" d="M8 21.5c2.2 1.4 4.9 2.3 7.8 2.3 2.9 0 5.6-.8 7.8-2.3-.4.2-.9.3-1.4.3-1.5 0-2.8-.8-3.6-2-.8 1.2-2.1 2-3.6 2s-2.8-.8-3.6-2c-.8 1.2-2.1 2-3.6 2-.5 0-1-.1-1.4-.3z" />
    </svg>
  ),
  Azure: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="azure-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0078D4" />
          <stop offset="100%" stopColor="#00BCF2" />
        </linearGradient>
      </defs>
      <path fill="url(#azure-grad)" d="M14.5 3L5 28h7.5l3.5-8 8.5-2-10-15z" />
      <path fill="url(#azure-grad)" d="M17.5 17l-3.5 8H27l-9.5-8z" />
    </svg>
  ),
  IoT: (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <defs>
        <linearGradient id="iot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C853" />
          <stop offset="100%" stopColor="#64DD17" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="3" fill="url(#iot-grad)" />
      <circle cx="16" cy="16" r="7" stroke="url(#iot-grad)" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="16" r="11" stroke="url(#iot-grad)" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="8" cy="8" r="2" fill="url(#iot-grad)" />
      <circle cx="24" cy="8" r="2" fill="url(#iot-grad)" />
      <circle cx="8" cy="24" r="2" fill="url(#iot-grad)" />
      <circle cx="24" cy="24" r="2" fill="url(#iot-grad)" />
      <line x1="9.4" y1="9.4" x2="13" y2="13" stroke="url(#iot-grad)" strokeWidth="1" />
      <line x1="22.6" y1="9.4" x2="19" y2="13" stroke="url(#iot-grad)" strokeWidth="1" />
      <line x1="9.4" y1="22.6" x2="13" y2="19" stroke="url(#iot-grad)" strokeWidth="1" />
      <line x1="22.6" y1="22.6" x2="19" y2="19" stroke="url(#iot-grad)" strokeWidth="1" />
    </svg>
  ),
};

// Technologies data with icons
export const technologies = [
  { name: "HTML5", color: "#E34F26", icon: TechIcons.HTML5 },
  { name: "CSS3", color: "#1572B6", icon: TechIcons.CSS3 },
  { name: "JavaScript", color: "#F7DF1E", icon: TechIcons.JavaScript },
  { name: "React", color: "#61DAFB", icon: TechIcons.React },
  { name: "Tailwind CSS", color: "#06B6D4", icon: TechIcons.TailwindCSS },
  { name: "Node.js", color: "#339933", icon: TechIcons.NodeJS },
  { name: "Express", color: "#000000", icon: TechIcons.Express },
  { name: "MongoDB", color: "#47A248", icon: TechIcons.MongoDB },
  { name: "Python", color: "#3776AB", icon: TechIcons.Python },
  { name: "Django", color: "#092E20", icon: TechIcons.Django },
  { name: "Git", color: "#F05032", icon: TechIcons.Git },
  { name: "Vite", color: "#646CFF", icon: TechIcons.Vite },
  { name: "Machine Learning", color: "#FF6F00", icon: TechIcons.MachineLearning },
  { name: "Advanced Excel", color: "#217346", icon: TechIcons.Excel },
  { name: "Deep Learning", color: "#FF4081", icon: TechIcons.DeepLearning },
  { name: "NLP", color: "#00BCD4", icon: TechIcons.NLP },
  { name: "Computer Vision", color: "#9C27B0", icon: TechIcons.ComputerVision },
  { name: "Linux", color: "#FCC624", icon: TechIcons.Linux },
  { name: "Power BI", color: "#F2C811", icon: TechIcons.PowerBI },
  { name: "SQL", color: "#4479A1", icon: TechIcons.SQL },
  { name: "Docker", color: "#2496ED", icon: TechIcons.Docker },
  { name: "Angular", color: "#DD0031", icon: TechIcons.Angular },
  { name: "Flutter", color: "#02569B", icon: TechIcons.React }, // Using React icon as placeholder
  { name: "Android", color: "#3DDC84", icon: TechIcons.Android },
  { name: "Java", color: "#007396", icon: TechIcons.Java },
  { name: "DevOps", color: "#0078D7", icon: TechIcons.DevOps },
  { name: "AWS", color: "#FF9900", icon: TechIcons.AWS },
  { name: "Azure", color: "#0078D4", icon: TechIcons.Azure },
  { name: "IoT", color: "#00C853", icon: TechIcons.IoT },
];