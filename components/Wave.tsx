export default function Wave({ className = '', flip = false, height = '120' }: { className?: string; flip?: boolean; height?: string }) {
  const heightNum = parseInt(height)
  const isLow = heightNum < 100
  
  // Path for lower waves (footer)
  const lowPath = "M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
  
  // Path for regular waves
  const regularPath = "M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
  
  // Determine fill color - use currentColor to inherit from parent gradient/color
  // For footer gradient, parent container will have the gradient and wave will use currentColor (white)
  const fillColor = 'currentColor'
  
  return (
    <div className={`absolute bottom-0 left-0 right-0 ${className}`} style={{ transform: flip ? 'rotate(180deg)' : 'none' }}>
      <svg
        viewBox={`0 0 1440 ${heightNum}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
        style={{ height: `${heightNum}px` }}
      >
        <path
          d={isLow ? lowPath : regularPath}
          fill={fillColor}
        />
      </svg>
    </div>
  )
}

