import {useRef, useEffect, useState, ReactPortal} from 'react';
import {createPortal} from 'react-dom';

interface PortalProps {
  selector: string;
}

export const Portal: React.FC<PortalProps> = ({children, selector}): ReactPortal | null => {
  const ref = useRef<HTMLElement>(null!);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector) as HTMLElement;
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
};

export default Portal;
