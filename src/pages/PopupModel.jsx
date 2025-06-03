import React from 'react';

const PopupModal = ({ show, onClose, title, body, confirmText = "OK",}) => {
  return (
    <>
      {show && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title fs-6">{title}</h5>
                <button type="button" className="btn-close" onClick={onClose}></button>
              </div>

              <div className="modal-body fs-6">
                {body}
              </div>

              <div className="modal-footer">
                  <button type="button" className="btn btn-primary btn-sm" onClick={onClose}>
                    {confirmText}
                  </button>
                
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;
