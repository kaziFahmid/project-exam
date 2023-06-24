import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Problem2 = () => {
  const [openAllContactsModal, setOpenAllContactsModal] = useState(false);
  const [openUSContactsModal, setOpenUSContactsModal] = useState(false);

  const onOpenAllContactsModal = () => setOpenAllContactsModal(true);
  const onCloseAllContactsModal = () => setOpenAllContactsModal(false);
  const onOpenUSContactsModal = () => setOpenUSContactsModal(true);
  const onCloseUSContactsModal = () => setOpenUSContactsModal(false);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-lg btn-outline-primary" type="button" onClick={onOpenAllContactsModal}>
              All Contacts
            </button>
            <button className="btn btn-lg btn-outline-warning" type="button" onClick={onOpenUSContactsModal}>
              US Contacts
            </button>
          </div>
        </div>
      </div>

      <Modal open={openAllContactsModal} onClose={onCloseAllContactsModal} center>
        <h2>Modal A</h2>
 
      </Modal>

      <Modal open={openUSContactsModal} onClose={onCloseUSContactsModal} center>
      <h2>Modal B</h2>
      
      </Modal>
    </>
  );
};

export default Problem2;
