import { useInteractiveBackground } from '@/hooks/useInteractiveBackground';
import { useEffect } from 'react';

export function InteractiveBackground() {
    const canvasRef = useInteractiveBackground();

    useEffect(() => {
        console.log('InteractiveBackground mounted');
        console.log('Canvas ref:', canvasRef.current);
    }, [canvasRef]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{
                opacity: 1,
                zIndex: 1,
                background: 'transparent'
            }}
        />
    );
}
