
export const GoogleIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);


export const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="instaGradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f09433" />
        <stop offset="0.25" stopColor="#e6683c" />
        <stop offset="0.5" stopColor="#dc2743" />
        <stop offset="0.75" stopColor="#cc2366" />
        <stop offset="1" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <path 
      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" 
      stroke="url(#instaGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
    />
    <path 
      d="M17.5 6.5h.01" 
      stroke="url(#instaGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
    />
    <rect 
      x="2" y="2" width="20" height="20" rx="5" ry="5" 
      stroke="url(#instaGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
    />
  </svg>
);

export const DribbbleIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
      stroke="#EA4C89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
    <path 
      d="M8.56 2.75C12.93 8.78 14.58 12.17 16.59 20.47" 
      stroke="#EA4C89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
    <path 
      d="M19.13 15.09C15.41 11.29 8.49 10.31 0.86 12.66" 
      stroke="#EA4C89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
    <path 
      d="M17.56 5.96C23.34 10.28 26.06 16.36 26.96 22.32" 
      stroke="#EA4C89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
    <path 
      d="M15.5 2.71C13.06 9.32 7.64 13.92 1.83 14.2" 
      stroke="#EA4C89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

export const BehanceIcon = ({ size = 20, className = "", color = "currentColor" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color} 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.78 12.06c1.17 0 1.89-.59 1.89-1.57 0-.84-.55-1.46-1.53-1.46H4.27v3.03h3.51zm0 1.25H4.27v3.31h3.76c1.19 0 1.95-.62 1.95-1.68 0-1.12-.76-1.63-2.2-1.63zM2.5 7.42h5.18c1.37 0 2.22.42 2.76 1.09.42.55.62 1.24.62 2.05 0 1.1-.53 2.02-1.39 2.61.95.4 1.82 1.39 1.82 2.87 0 1.1-.4 2.03-1.14 2.69-.87.76-2.15 1.09-3.78 1.09H.5V7.42h2zm13.11 9.98c-1.74 0-2.83-1.25-2.83-3.2s1.16-3.32 3.01-3.32c1.69 0 2.76 1.05 2.89 3.02h-4.63c.09 1.16.89 1.76 1.8 1.76.84 0 1.48-.36 1.76-1.07h1.76c-.36 1.82-1.85 2.81-3.76 2.81zm.18-5.07c-.82 0-1.55.44-1.71 1.42h3.42c-.06-1.02-.78-1.42-1.71-1.42zm-.25-4.8h4.58v1.64h-4.58V7.53z"/>
  </svg>
);

export const GlobeIcon = ({ size = 20, className = "", color = "currentColor" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12H22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2C14.5 2 16.5 6.5 16.5 12C16.5 17.5 14.5 22 12 22C9.5 22 7.5 17.5 7.5 12C7.5 6.5 9.5 2 12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);