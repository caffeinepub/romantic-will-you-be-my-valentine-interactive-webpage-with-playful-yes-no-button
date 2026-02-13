export default function ValentineDecor() {
  return (
    <>
      {/* Background image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-romantic-overlay/40 via-romantic-overlay/20 to-romantic-overlay/40" />
      
      {/* Floating flower clusters */}
      <div className="fixed top-10 left-10 z-0 w-32 h-32 md:w-48 md:h-48 opacity-80 animate-float">
        <img 
          src="/assets/generated/flowers-cluster.dim_800x800.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="fixed bottom-10 right-10 z-0 w-32 h-32 md:w-48 md:h-48 opacity-80 animate-float-delayed">
        <img 
          src="/assets/generated/flowers-cluster.dim_800x800.png" 
          alt="" 
          className="w-full h-full object-contain transform scale-x-[-1]"
        />
      </div>
      
      {/* Decorative hearts */}
      <div className="fixed top-1/4 right-1/4 z-0 w-16 h-16 opacity-60 animate-pulse-slow">
        <img 
          src="/assets/generated/hearts-stickers.dim_512x512.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="fixed bottom-1/3 left-1/4 z-0 w-20 h-20 opacity-60 animate-pulse-slow-delayed">
        <img 
          src="/assets/generated/hearts-stickers.dim_512x512.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
}
