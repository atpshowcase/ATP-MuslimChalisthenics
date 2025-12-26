import { useEffect } from 'react';

/**
 * WebsiteProtection Component
 * Add this component to your App.js to enable protection
 */
function WebsiteProtection() {
  useEffect(() => {
    // Disable Right Click
    const handleContextMenu = (e) => {
      e.preventDefault();
      showWarning();
      return false;
    };

    // Disable Keyboard Shortcuts
    const handleKeyDown = (e) => {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault();
        showWarning();
        return false;
      }
      
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U
      if (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) {
        e.preventDefault();
        showWarning();
        return false;
      }
      
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        showWarning();
        return false;
      }

      // Mac shortcuts
      if (e.metaKey && e.altKey && [73, 74, 67].includes(e.keyCode)) {
        e.preventDefault();
        showWarning();
        return false;
      }
    };

    // Disable Drag
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Show Warning Function
    const showWarning = () => {
      const existingWarning = document.getElementById('inspect-warning');
      if (existingWarning) existingWarning.remove();

      const warning = document.createElement('div');
      warning.id = 'inspect-warning';
      warning.innerHTML = `
        <div style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: black;
          color: #F1CE06;
          padding: 30px 50px;
          border: 3px solid #F1CE06;
          z-index: 999999;
          font-family: Arial, sans-serif;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          box-shadow: 0 0 50px rgba(241, 206, 6, 0.5);
          border-radius: 10px;
        ">
          <div style="font-size: 40px; margin-bottom: 15px;">🚫</div>
          <div>INSPECT ELEMENT DISABLED</div>
          <div style="font-size: 14px; margin-top: 10px; color: white;">
            This action is not allowed
          </div>
        </div>
      `;

      document.body.appendChild(warning);
      setTimeout(() => warning.remove(), 2000);
    };

    // DevTools Detection
    let devtoolsOpen = false;
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if ((widthThreshold || heightThreshold) && !devtoolsOpen) {
        devtoolsOpen = true;
        handleDevToolsOpen();
      } else if (!widthThreshold && !heightThreshold) {
        devtoolsOpen = false;
        const overlay = document.getElementById('devtools-overlay');
        if (overlay) overlay.remove();
      }
    };

    const handleDevToolsOpen = () => {
      const overlay = document.createElement('div');
      overlay.id = 'devtools-overlay';
      overlay.innerHTML = `
        <div style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.98);
          z-index: 9999999;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F1CE06;
          font-family: Arial, sans-serif;
        ">
          <div style="text-align: center; padding: 50px;">
            <div style="font-size: 100px; margin-bottom: 30px;">⚠️</div>
            <div style="font-size: 50px; font-weight: bold; margin-bottom: 20px;">
              ACCESS DENIED
            </div>
            <div style="font-size: 24px; color: white; margin-bottom: 30px;">
              Developer Tools Detected
            </div>
            <div style="font-size: 18px; color: #999; max-width: 600px; line-height: 1.6;">
              For security reasons, this website does not allow developer tools to be open.
              Please close DevTools to continue browsing.
            </div>
            <button onclick="window.location.reload()" style="
              margin-top: 40px;
              padding: 15px 40px;
              background: #F1CE06;
              color: black;
              border: none;
              font-size: 18px;
              font-weight: bold;
              cursor: pointer;
              text-transform: uppercase;
              border-radius: 5px;
            ">
              Reload Page
            </button>
          </div>
        </div>
      `;
      
      const existing = document.getElementById('devtools-overlay');
      if (existing) existing.remove();
      document.body.appendChild(overlay);
    };

    // Console Warning
    const consoleWarning = () => {
      console.clear();
      console.log('%c🚫 STOP!', 
        'color: #F1CE06; font-size: 50px; font-weight: bold; text-shadow: 2px 2px 4px #000;'
      );
      console.log('%c⚠️ Warning: Mengakses console ini dapat membahayakan akun Anda!', 
        'color: red; font-size: 20px; font-weight: bold;'
      );
      console.log('%cJika ada yang meminta Anda untuk copy-paste sesuatu di sini, itu adalah SCAM!', 
        'color: white; font-size: 16px;'
      );
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    // Start DevTools detection
    const devtoolsInterval = setInterval(detectDevTools, 1000);
    
    // Console warning interval
    consoleWarning();
    const consoleInterval = setInterval(consoleWarning, 5000);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      clearInterval(devtoolsInterval);
      clearInterval(consoleInterval);
    };
  }, []);

  return null; // This component doesn't render anything
}

export default WebsiteProtection;