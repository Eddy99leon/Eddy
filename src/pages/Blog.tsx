import oops from "@/assets/oops.svg"
import { useEffect, useRef } from 'react';


const Blog = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vantaEffect: any;

    if (vantaRef.current) {
      try {
        console.log('Initialisation de Vanta.js...');
        vantaEffect = window.VANTA.NET({
          el: vantaRef.current,
          THREE: window.THREE, 
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: 0x7d1515,
          birdSize: 0.9,
          wingSpan: 10.0,
          separation: 76.0,
          alignment: 40.0,
          cohesion: 31.0,
        });
        console.log('Vanta.js initialisé avec succès.');
      } catch (error) {
        console.error('Erreur lors de l’initialisation de Vanta.js :', error);
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="container py-28" ref={vantaRef} >
      <div className="flex items-center s-section">
        <div className="flex-1">
        </div>
        <div className="flex-1">
          <img src={oops} alt="404 error" />
        </div>
      </div>
    </div>
  )
}

export default Blog