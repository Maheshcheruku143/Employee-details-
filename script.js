// Employee Registration Form
emailjs.init({
    publicKey: "OrOEGeQzHHgrmAqdG"
});

const form = document.getElementById("employeeForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const employee = {
        employeeId: "EMP" + Date.now(),

        firstName: document.getElementById("firstName").value.trim(),
        surname: document.getElementById("surname").value.trim(),
        fatherName: document.getElementById("fatherName").value.trim(),
        motherName: document.getElementById("motherName").value.trim(),

        gender: document.getElementById("gender").value,
        qualification: document.getElementById("qualification").value,
        marital: document.getElementById("marital").value,

        dob: document.getElementById("dob").value,

        mobile: document.getElementById("mobile").value.trim(),
        email: document.getElementById("email").value.trim(),

        presentAddress: document.getElementById("presentAddress").value.trim(),
        permanentAddress: document.getElementById("permanentAddress").value.trim(),

        photo:
            document.getElementById("photo").files.length > 0
                ? document.getElementById("photo").files[0].name
                : "",

        resume:
            document.getElementById("resume").files.length > 0
                ? document.getElementById("resume").files[0].name
                : ""
    };

    // Mobile validation
    if (!/^[0-9]{10}$/.test(employee.mobile)) {
        alert("Please enter a valid 10-digit Mobile Number.");
        return;
    }

    // Email validation (optional)
    if (
        employee.email !== "" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email)
    ) {
      
      document.getElementById("result").style.display = "block";

document.getElementById("empId").innerHTML =
"Employee ID : " + employee.employeeId;

document.getElementById("qrcode").innerHTML = "";

new QRCode(document.getElementById("qrcode"), {
    text:
        "Employee ID: " + employee.employeeId +
        "\nName: " + employee.firstName + " " + employee.surname +
        "\nMobile: " + employee.mobile,
    width: 180,
    height: 180
});
      
        alert("Please enter a valid Email Address.");
        return;
    }

    // Read previous data
    let employees =
        JSON.parse(localStorage.getItem("employees")) || [];

    employees.push(employee);

  const templateParams = {
    employee_id: employee.employeeId,
    first_name: employee.firstName,
    surname: employee.surname,
    father_name: employee.fatherName,
    mother_name: employee.motherName,
    gender: employee.gender,
    qualification: employee.qualification,
    marital: employee.marital,
    dob: employee.dob,
    mobile: employee.mobile,
    email: employee.email,
    present_address: employee.presentAddress,
    permanent_address: employee.permanentAddress
};

emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    templateParams
)
  .then(() => {

    alert("Employee Registered Successfully!\nDetails Sent to HR Email");

    form.reset();

}).catch((error) => {

    alert("Email Failed : " + error.text);

});