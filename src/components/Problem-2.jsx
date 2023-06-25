
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Problem2 = () => {
  const [params, setParams] = useState('');
console.log(params)
  const handleSearch = (e) => {
    e.preventDefault();
    setParams(e.target.search.value)
  };

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

  let [num, setNum] = useState(0);

  let handleCheck = (e) => {
    if (e.target.checked) {
      setNum(2);
    } else {
      setNum(null);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={onOpenAllContactsModal}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={onOpenUSContactsModal}
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>

      <Modal open={openAllContactsModal} onClose={onCloseAllContactsModal} center>
        <h2>Modal A</h2>
        {country.map((count) => (
          <li key={count.id}>{count.phone}</li>
        ))}

        <div>
          <footer>
            <input type="checkbox" name="onlyeven" onClick={handleCheck} />
            <span>onlyeven</span>
          </footer>
          <ul>
            {country
              .filter((count) => count.id % num === 0)
              .map((count) => (
                <li key={count.id}>{count.id}</li>
              ))}
          </ul>
        </div>
      </Modal>

      <Modal open={openUSContactsModal} onClose={onCloseUSContactsModal} center>
        <h2>Modal B</h2>
        <form onSubmit={handleSearch}>
          <input type="text" name="search" placeholder="Search" />
          <button type="submit">Submit</button>
        </form>

        {country
          .filter((count) => count.country.name === 'United States')
          .map((count) => (
            <li key={count.id}>{count.phone}</li>
          ))}

        <div>
          <footer>
            <input type="checkbox" name="onlyeven" onClick={handleCheck} />
            <span>onlyeven</span>
          </footer>
          <ul>
            {country
              .filter((count) => count.id % num === 0)
              .map((count) => (
                <li key={count.id}>{count.id}</li>
              ))}
          </ul>
        </div>
      </Modal>

      <ul>
        {country
          .filter((x) => {
            const countryName = x.country.name.toLowerCase();
            const searchParams = params.toLowerCase();
            return countryName.includes(searchParams);
          })
          .map((x) => (
            <li key={x.id}>
              {x.phone}
              <span className="ms-5">{x.country.name}</span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Problem2;