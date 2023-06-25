import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Problem2 = () => {
    const [country,setCountry]=useState( [
        {
            "id": 1,
            "phone": "+1-202-555-0115",
            "country": {
                "id": 2,
                "name": "United States"
            }
        },
        {
            "id": 2,
            "phone": "+1-202-555-0145",
            "country": {
                "id": 2,
                "name": "United States"
            }
        },
        {
            "id": 3,
            "phone": "+1-202-555-0127",
            "country": {
                "id": 2,
                "name": "United States"
            }
        },
        {
            "id": 4,
            "phone": "+1-202-555-0168",
            "country": {
                "id": 2,
                "name": "United States"
            }
        },
        {
            "id": 5,
            "phone": "+880-165-552-5408",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 6,
            "phone": "+880-115-553-7167",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 7,
            "phone": "+880-115-553-7168",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 8,
            "phone": "+880-115-553-7112",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 9,
            "phone": "+880-115-553-7656",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 10,
            "phone": "+880-115-553-4656",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 11,
            "phone": "+880-115-553-7864",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 12,
            "phone": "+880-115-551-0862",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 13,
            "phone": "+880-175-559-9376",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 14,
            "phone": "+880-115-556-5556",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 15,
            "phone": "+880-175-553-2049",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 16,
            "phone": "9404+880-115-553-822",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 17,
            "phone": "+880-115-558-7860",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 18,
            "phone": "+880-115-553-9404",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 19,
            "phone": "+880-165-559-4793",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        },
        {
            "id": 20,
            "phone": "+880-165-558-5109",
            "country": {
                "id": 1,
                "name": "Bangladesh"
            }
        }
    ]
)
  const [openAllContactsModal, setOpenAllContactsModal] = useState(false);
  const [openUSContactsModal, setOpenUSContactsModal] = useState(false);

  const onOpenAllContactsModal = () => setOpenAllContactsModal(true);
  const onCloseAllContactsModal = () => setOpenAllContactsModal(false);
  const onOpenUSContactsModal = () => setOpenUSContactsModal(true);
  const onCloseUSContactsModal = () => setOpenUSContactsModal(false);
let [num,setNum]=useState(0)

  let handleCheck =(e)=>{
if(e.target.checked){
    setNum(2)
}
else{
    setNum(null)
}
  }
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
        <button className="btn btn-lg btn-outline-primary" type="button" onClick={onOpenAllContactsModal}>
              All Contacts
            </button>
            <button className="btn btn-lg btn-outline-warning" type="button" onClick={onOpenUSContactsModal}>
              US Contacts
            </button>

            
 <div>
 <fotter>
            <input type='checkbox' name='onlyeven' onClick={handleCheck}/>
            <span>onlyeven</span>
        </fotter>
<ul>
{country
              .filter((count) => count.id % num === 0) // Filter only even numbers
              .map((count) => (
                <li key={count.id}>{count.id}</li>
              ))}

</ul>






 </div>
 
      </Modal>

      <Modal open={openUSContactsModal} onClose={onCloseUSContactsModal} center>
      <h2>Modal B</h2>
      <button className="btn btn-lg btn-outline-primary" type="button" onClick={onOpenAllContactsModal}>
              All Contacts
            </button>
            <button className="btn btn-lg btn-outline-warning" type="button" onClick={onOpenUSContactsModal}>
              US Contacts
            </button>
      </Modal>
    </>
  );
};

export default Problem2;
