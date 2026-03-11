// Using async/await to fetch data and parse JSON


async function fetchData() {
    const response = await fetch("https://eecu-data-server.vercel.app/data");
    const data = await response.json();
    const select = document.querySelector("select");
    data.forEach(item => {
    const option = document.createElement("option");
    option.value = item.Salary;
    option.textContent = item.Occupation;
    select.appendChild(option);
});
}

fetchData();

let selectValue = document.querySelector('select').value; // Get the value of the select element




// put the data into the page in a select element, only showing the occupation, but the value should be the salary



const [...sections] = document.querySelectorAll("section");
const all_inputs = sections.map((section) => section.querySelectorAll("input"));

/**
 * @param {NodeListOf<HTMLInputElement>} inputs
 */
function sum(inputs) {
  return selectValue - [...inputs].reduce((a, b) => a + b.valueAsNumber, 0);
}

const canvas = document.querySelector("canvas");
let current_chart = null;

function update() {
    current_chart?.destroy();
    current_chart = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: ['Education', 'Housing', `Essentials`, `Lifestyle`, `Savings`],
            datasets: [
                {
                    label: 'Monthly (USD)',
                    data: [
                        sum(all_inputs[0]),
                        sum(all_inputs[1]),
                        sum(all_inputs[2]),
                        sum(all_inputs[3]),
                        sum(all_inputs[4])
                    ],
                }
            ]
        },
        options: {
            responsive: false,
            /*elements: {
                arc: {
                    borderWidth: 0
                }
            },*/
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

document.body.addEventListener('input', () => {
    update();
});

update();
