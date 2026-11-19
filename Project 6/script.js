// We can simulate receiving a JSON file by storing the raw JSON string in a variable.
// This allows the project to run locally in the browser without an HTTP server.
const rawJsonData = `
[
  {
    "customerId": "CUST-001",
    "firstName": "Alice",
    "lastName": "Smith",
    "email": "alice.smith@example.com",
    "phone": "555-0101",
    "address": "123 Maple St",
    "city": "Springfield",
    "state": "IL",
    "zipCode": "62701",
    "status": "Active"
  },
  {
    "customerId": "CUST-002",
    "firstName": "Bob",
    "lastName": "Johnson",
    "email": "bob.j@example.com",
    "phone": "555-0102",
    "address": "456 Oak Ave",
    "city": "Metropolis",
    "state": "NY",
    "zipCode": "10001",
    "status": "Inactive"
  },
  {
    "customerId": "CUST-003",
    "firstName": "Carol",
    "lastName": "Williams",
    "email": "carol.w@example.com",
    "phone": "555-0103",
    "address": "789 Pine Rd",
    "city": "Gotham",
    "state": "NJ",
    "zipCode": "07001",
    "status": "Active"
  },
  {
    "customerId": "CUST-004",
    "firstName": "David",
    "lastName": "Brown",
    "email": "dbrown@example.com",
    "phone": "555-0104",
    "address": "321 Elm St",
    "city": "Star City",
    "state": "CA",
    "zipCode": "90210",
    "status": "Active"
  },
  {
    "customerId": "CUST-005",
    "firstName": "Eve",
    "lastName": "Davis",
    "email": "eve.davis@example.com",
    "phone": "555-0105",
    "address": "654 Birch Blvd",
    "city": "Central City",
    "state": "OH",
    "zipCode": "43215",
    "status": "Pending"
  },
  {
    "customerId": "CUST-006",
    "firstName": "Frank",
    "lastName": "Miller",
    "email": "frank.miller@example.com",
    "phone": "555-0106",
    "address": "147 Cedar Ln",
    "city": "Austin",
    "state": "TX",
    "zipCode": "78701",
    "status": "Active"
  },
  {
    "customerId": "CUST-007",
    "firstName": "Grace",
    "lastName": "Wilson",
    "email": "grace.w@example.com",
    "phone": "555-0107",
    "address": "258 Walnut St",
    "city": "Seattle",
    "state": "WA",
    "zipCode": "98101",
    "status": "Active"
  },
  {
    "customerId": "CUST-008",
    "firstName": "Henry",
    "lastName": "Taylor",
    "email": "htaylor@example.com",
    "phone": "555-0108",
    "address": "369 Chestnut Ave",
    "city": "Denver",
    "state": "CO",
    "zipCode": "80201",
    "status": "Inactive"
  },
  {
    "customerId": "CUST-009",
    "firstName": "Ivy",
    "lastName": "Martinez",
    "email": "ivy.martinez@example.com",
    "phone": "555-0109",
    "address": "741 Spruce Dr",
    "city": "Miami",
    "state": "FL",
    "zipCode": "33101",
    "status": "Active"
  },
  {
    "customerId": "CUST-010",
    "firstName": "Jack",
    "lastName": "Anderson",
    "email": "janderson@example.com",
    "phone": "555-0110",
    "address": "852 Ash Way",
    "city": "Boston",
    "state": "MA",
    "zipCode": "02108",
    "status": "Pending"
  },
  {
    "customerId": "CUST-011",
    "firstName": "Karen",
    "lastName": "Thomas",
    "email": "karen.t@example.com",
    "phone": "555-0111",
    "address": "963 Cypress Ct",
    "city": "Atlanta",
    "state": "GA",
    "zipCode": "30301",
    "status": "Active"
  },
  {
    "customerId": "CUST-012",
    "firstName": "Leo",
    "lastName": "Jackson",
    "email": "ljackson@example.com",
    "phone": "555-0112",
    "address": "159 Magnolia Blvd",
    "city": "Phoenix",
    "state": "AZ",
    "zipCode": "85001",
    "status": "Active"
  },
  {
    "customerId": "CUST-013",
    "firstName": "Mia",
    "lastName": "White",
    "email": "mia.white@example.com",
    "phone": "555-0113",
    "address": "357 Poplar Pl",
    "city": "Portland",
    "state": "OR",
    "zipCode": "97201",
    "status": "Inactive"
  },
  {
    "customerId": "CUST-014",
    "firstName": "Noah",
    "lastName": "Harris",
    "email": "noah.h@example.com",
    "phone": "555-0114",
    "address": "482 Willow Rd",
    "city": "Nashville",
    "state": "TN",
    "zipCode": "37201",
    "status": "Active"
  },
  {
    "customerId": "CUST-015",
    "firstName": "Olivia",
    "lastName": "Martin",
    "email": "olivia.m@example.com",
    "phone": "555-0115",
    "address": "624 Redwood Way",
    "city": "San Diego",
    "state": "CA",
    "zipCode": "92101",
    "status": "Pending"
  },
  {
    "customerId": "CUST-016",
    "firstName": "Peter",
    "lastName": "Clark",
    "email": "pclark@example.com",
    "phone": "555-0116",
    "address": "735 Hickory St",
    "city": "Dallas",
    "state": "TX",
    "zipCode": "75201",
    "status": "Active"
  },
  {
    "customerId": "CUST-017",
    "firstName": "Quinn",
    "lastName": "Lewis",
    "email": "quinn.lewis@example.com",
    "phone": "555-0117",
    "address": "846 Sycamore Ave",
    "city": "Minneapolis",
    "state": "MN",
    "zipCode": "55401",
    "status": "Active"
  },
  {
    "customerId": "CUST-018",
    "firstName": "Rachel",
    "lastName": "Lee",
    "email": "rachel.lee@example.com",
    "phone": "555-0118",
    "address": "957 Alder Dr",
    "city": "Charlotte",
    "state": "NC",
    "zipCode": "28202",
    "status": "Inactive"
  },
  {
    "customerId": "CUST-019",
    "firstName": "Samuel",
    "lastName": "Walker",
    "email": "swalker@example.com",
    "phone": "555-0119",
    "address": "135 Beech Ter",
    "city": "Salt Lake City",
    "state": "UT",
    "zipCode": "84101",
    "status": "Active"
  },
  {
    "customerId": "CUST-020",
    "firstName": "Tara",
    "lastName": "Hall",
    "email": "tara.hall@example.com",
    "phone": "555-0120",
    "address": "246 Linden Cir",
    "city": "Philadelphia",
    "state": "PA",
    "zipCode": "19102",
    "status": "Pending"
  },
  {
    "customerId": "CUST-021",
    "firstName": "Uma",
    "lastName": "Allen",
    "email": "uma.allen@example.com",
    "phone": "555-0121",
    "address": "358 Laurel Ln",
    "city": "Kansas City",
    "state": "MO",
    "zipCode": "64105",
    "status": "Active"
  },
  {
    "customerId": "CUST-022",
    "firstName": "Victor",
    "lastName": "Young",
    "email": "vyoung@example.com",
    "phone": "555-0122",
    "address": "469 Hawthorn St",
    "city": "Detroit",
    "state": "MI",
    "zipCode": "48226",
    "status": "Inactive"
  },
  {
    "customerId": "CUST-023",
    "firstName": "Wendy",
    "lastName": "King",
    "email": "wendy.k@example.com",
    "phone": "555-0123",
    "address": "571 Juniper Blvd",
    "city": "Las Vegas",
    "state": "NV",
    "zipCode": "89101",
    "status": "Active"
  },
  {
    "customerId": "CUST-024",
    "firstName": "Xavier",
    "lastName": "Wright",
    "email": "xwright@example.com",
    "phone": "555-0124",
    "address": "682 Maplewood Ave",
    "city": "Indianapolis",
    "state": "IN",
    "zipCode": "46204",
    "status": "Active"
  },
  {
    "customerId": "CUST-025",
    "firstName": "Yvonne",
    "lastName": "Scott",
    "email": "yvonne.s@example.com",
    "phone": "555-0125",
    "address": "793 Dogwood Way",
    "city": "Columbus",
    "state": "OH",
    "zipCode": "43215",
    "status": "Pending"
  },
  {
    "customerId": "CUST-026",
    "firstName": "Zachary",
    "lastName": "Green",
    "email": "zgreen@example.com",
    "phone": "555-0126",
    "address": "814 Mulberry Dr",
    "city": "Tampa",
    "state": "FL",
    "zipCode": "33602",
    "status": "Active"
  },
  {
    "customerId": "CUST-027",
    "firstName": "Amber",
    "lastName": "Baker",
    "email": "amber.b@example.com",
    "phone": "555-0127",
    "address": "925 Larch Ct",
    "city": "Raleigh",
    "state": "NC",
    "zipCode": "27601",
    "status": "Active"
  },
  {
    "customerId": "CUST-028",
    "firstName": "Brian",
    "lastName": "Adams",
    "email": "badams@example.com",
    "phone": "555-0128",
    "address": "148 Aspen Rd",
    "city": "Baltimore",
    "state": "MD",
    "zipCode": "21201",
    "status": "Inactive"
  },
  {
    "customerId": "CUST-029",
    "firstName": "Chloe",
    "lastName": "Nelson",
    "email": "chloe.nelson@example.com",
    "phone": "555-0129",
    "address": "259 Cottonwood Pl",
    "city": "Milwaukee",
    "state": "WI",
    "zipCode": "53202",
    "status": "Active"
  },
  {
    "customerId": "CUST-030",
    "firstName": "Daniel",
    "lastName": "Carter",
    "email": "dcarter@example.com",
    "phone": "555-0130",
    "address": "361 Ironwood Ter",
    "city": "Albuquerque",
    "state": "NM",
    "zipCode": "87102",
    "status": "Pending"
  },
  {
    "customerId": "CUST-031",
    "firstName": "Elena",
    "lastName": "Mitchell",
    "email": "elena.m@example.com",
    "phone": "555-0131",
    "address": "472 Basswood Ln",
    "city": "Omaha",
    "state": "NE",
    "zipCode": "68102",
    "status": "Active"
  },
  {
    "customerId": "CUST-032",
    "firstName": "Felix",
    "lastName": "Perez",
    "email": "felix.perez@example.com",
    "phone": "555-0132",
    "address": "583 Boxwood Cir",
    "city": "Boise",
    "state": "ID",
    "zipCode": "83702",
    "status": "Active"
  },
  {
    "customerId": "CUST-033",
    "firstName": "Gina",
    "lastName": "Roberts",
    "email": "gina.r@example.com",
    "phone": "555-0133",
    "address": "694 Locust St",
    "city": "Richmond",
    "state": "VA",
    "zipCode": "23219",
    "status": "Inactive"
  },
  {
    "customerId": "CUST-034",
    "firstName": "Harold",
    "lastName": "Turner",
    "email": "hturner@example.com",
    "phone": "555-0134",
    "address": "715 Persimmon Ave",
    "city": "Louisville",
    "state": "KY",
    "zipCode": "40202",
    "status": "Active"
  },
  {
    "customerId": "CUST-035",
    "firstName": "Iris",
    "lastName": "Phillips",
    "email": "iris.phillips@example.com",
    "phone": "555-0135",
    "address": "826 Sassafras Blvd",
    "city": "Honolulu",
    "state": "HI",
    "zipCode": "96813",
    "status": "Pending"
  }
]
`;

// "Ingest" the JSON document by parsing the raw string into JavaScript objects
const customers = JSON.parse(rawJsonData);

//only used for the edit modal
let currentEditIndex = null;

const container = document.getElementById("customer-container");

console.log("=== CUSTOMER DATA REPORT ===\n\n");

function renderCustomers() {
  container.innerHTML = '';

  //keeps track of index for the delete button
  let currentIndex = 0;

  //read customers
  for (const customer of customers) {
    // Variables to hold the marshalled contents
    const id = customer.customerId;
    const fullName = `${customer.firstName} ${customer.lastName}`;
    const email = customer.email;
    const phone = customer.phone;
    const address = `${customer.address}, ${customer.city}, ${customer.state} ${customer.zipCode}`;
    const status = customer.status;

    // Reformat the data for human reading and print it to the console
    console.log(`Customer ID: ${id}`);
    console.log(`Name:        ${fullName}`);
    console.log(`Contact:     ${email} | ${phone}`);
    console.log(`Address:     ${address}`);
    console.log(`Status:      ${status}`);
    console.log("--------------------------------------------------");


    // --- Project 2 - make div card to be filled in 
    const cardDiv = document.createElement('div');
    cardDiv.className = "customer-card";

    const statusClass = `status-${status.toLowerCase()}`

    //new button with onclick event with currentIndex as argument
    cardDiv.innerHTML = `
      <h3>${fullName} <span>(#${id})</span></h3>
      <div class="action-buttons">
        <button class="edit-btn" onclick="openEditModal(${currentIndex})">Edit</button>
        <button class="delete-btn" onclick="deleteCustomer(${currentIndex})">Delete</button>
        </div>
      <p><strong>Contact:</strong> ${email} | ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <span class="status ${statusClass}">${status}</span>
    `;

    container.appendChild(cardDiv);

    //Increment index
    currentIndex++;
  }
}

// 2. initial render
renderCustomers();

// 3. add customer function **CHANGE THE ID NAMES TO MATCH THE CLASSES IN HTML FILE**
function addCustomer() {
  const newCustomer = {
    customerId: document.getElementById('addId').value,
    firstName: document.getElementById('addFirstName').value,
    lastName: document.getElementById('addLastName').value,
    email: document.getElementById('addEmail').value,
    phone: document.getElementById('addPhone').value,
    address: document.getElementById('addAddress').value,
    city: document.getElementById('addCity').value,
    state: document.getElementById('addState').value,
    zipCode: document.getElementById('addZipCode').value,
    status: document.getElementById('addStatus').value
  };

  customers.push(newCustomer);

  // Clear inputs
  document.querySelectorAll('.form-container input').forEach(input => input.value = '');

  renderCustomers()
  console.log("Customer added! Total array length is now: " + customers.length);
}
//Project 4 delete function
function deleteCustomer(indexToRemove) {
  customers.splice(indexToRemove, 1);
  renderCustomers();
  console.log("Customer deleted at index " + indexToRemove + "! Total array length is now: " + customers.length);
}

// 4. Update or Edit Logic
// Uses a modal box to bring up an editting screen
// A. Open the modal and save the data
function openEditModal(indexToEdit) {
  currentEditIndex = indexToEdit;

  //Get the specific customer object to edit from the array
  const customer = customers[indexToEdit];

  //populate input fields with existing data
  document.getElementById('editId').value = customer.customerId;
  document.getElementById('editFirstName').value = customer.firstName;
  document.getElementById('editLastName').value = customer.lastName;
  document.getElementById('editEmail').value = customer.email;
  document.getElementById('editPhone').value = customer.phone;
  document.getElementById('editAddress').value = customer.address;
  document.getElementById('editCity').value = customer.city;
  document.getElementById('editState').value = customer.state;
  document.getElementById('editZipCode').value = customer.zipCode;
  document.getElementById('editStatus').value = customer.status;

  //Show the modal box by changing its display style from none to flex
  document.getElementById('editModal').style.display = 'flex';
}

//B. Save Changes to Array
function saveEdit() {
  if (currentEditIndex === null) return;

  const updatedCustomer = {
    customerId: document.getElementById('editId').value,
    firstName: document.getElementById('editFirstName').value,
    lastName: document.getElementById('editLastName').value,
    email: document.getElementById('editEmail').value,
    phone: document.getElementById('editPhone').value,
    address: document.getElementById('editAddress').value,
    city: document.getElementById('editCity').value,
    state: document.getElementById('editState').value,
    zipCode: document.getElementById('editZipCode').value,
    status: document.getElementById('editStatus').value
  };

  // Replace the old object in the array with the new updated object
  customers[currentEditIndex] = updatedCustomer;

  // Close the modal
  closeModal();

  //re-render the ui to show the updated data
  renderCustomers();

  console.log("Customer updated at index " + currentEditIndex);
}

// C. Close Modal without saving
function closeModal() {
  document.getElementById('editModal').style.display = 'none'
  currentEditIndex = null;
}