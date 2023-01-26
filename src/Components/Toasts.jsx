/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Toast from './Toast';
import Button from './Button';

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
        <Button type="Info" onClick={toggleVisibility} label="Afficher toast &quot;Info &quot;" />
        <Button type="Success" onClick={toggleVisibility} label="Afficher toast &quot;Success &quot;" rounded />
        <Button type="Warning" onClick={toggleVisibility} label="Afficher toast &quot;Warning &quot;" hoverable />
        <Button type="Danger" onClick={toggleVisibility} label="Afficher toast &quot;Danger &quot;" rounded hoverable />
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
