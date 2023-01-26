/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Toast from './Toast';

function Toasts() {
  const [showInfo, setShowInfo] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showDanger, setShowDanger] = useState(false);

  const handleCloseInfo = () => setShowInfo(false);
  const handleCloseSuccess = () => setShowSuccess(false);
  const handleCloseWarning = () => setShowWarning(false);
  const handleCloseDanger = () => setShowDanger(false);

  const toggleVisibility = (event) => {
    switch (event.target.id) {
      case 'Info': setShowInfo(!showInfo); break;
      case 'Success': setShowSuccess(!showSuccess); break;
      case 'Warning': setShowWarning(!showWarning); break;
      case 'Danger': setShowDanger(!showDanger); break;
      default: setShowInfo(!showInfo);
    }
  };

  return (
    <>
      <div className="Actions">
        <button type="button" id="Info" onClick={toggleVisibility}>Afficher toast &quot;Info &quot;</button>
        <button type="button" id="Success" onClick={toggleVisibility}>Afficher toast &quot;Success &quot;</button>
        <button type="button" id="Warning" onClick={toggleVisibility}>Afficher toast &quot;Warning &quot;</button>
        <button type="button" id="Danger" onClick={toggleVisibility}>Afficher toast &quot;Danger &quot;</button>
      </div>
      <div className="Toasts">
        { showInfo
          ? <Toast alertType="Info" label="Lorem ipsum dolor sit amet" onClose={handleCloseInfo} />
          : null }
        { showSuccess
          ? <Toast alertType="Success" label="Lorem ipsum dolor sit amet" onClose={handleCloseSuccess} />
          : null }
        { showWarning
          ? <Toast alertType="Warning" label="Lorem ipsum dolor sit amet" onClose={handleCloseWarning} />
          : null }
        { showDanger
          ? <Toast alertType="Danger" label="Lorem ipsum dolor sit amet" onClose={handleCloseDanger} />
          : null }
      </div>
    </>
  );
}

export default Toasts;
