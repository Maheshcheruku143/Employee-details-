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

//emailjs.send(
    //"service_ukc6h0d",
   // "template_24g8jta",
  //  templateParams
//)/

    document.getElementById("result").style.display = "block";

document.getElementById("empId").innerHTML =
"Employee ID : " + employee.employeeId;

document.getElementById("resultDetails").innerHTML = `
<h2>✅ Employee Registration Successful</h2>
<p>Name: ${employee.firstName} ${employee.surname}</p>
<p>Mobile: ${employee.mobile}</p>
<p>Email: ${employee.email}</p>
`;

form.reset();
  .then(() => {

    document.getElementById("result").style.display = "block";

    document.getElementById("empId").innerHTML =
        "Employee ID : " + employee.employeeId;

    document.getElementById("resultDetails").innerHTML = `
        <h2>✅ Employee Registration Successful</h2>

        <p><b>First Name:</b> ${employee.firstName}</p>
        <p><b>Surname:</b> ${employee.surname}</p>
        <p><b>Father Name:</b> ${employee.fatherName}</p>
        <p><b>Mother Name:</b> ${employee.motherName}</p>
        <p><b>Gender:</b> ${employee.gender}</p>
        <p><b>Qualification:</b> ${employee.qualification}</p>
        <p><b>Marital Status:</b> ${employee.marital}</p>
        <p><b>Date of Birth:</b> ${employee.dob}</p>
        <p><b>Mobile:</b> ${employee.mobile}</p>
        <p><b>Email:</b> ${employee.email}</p>
        <p><b>Present Address:</b> ${employee.presentAddress}</p>
        <p><b>Permanent Address:</b> ${employee.permanentAddress}</p>
    `;

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text:
            "Employee ID: " + employee.employeeId +
            "\nName: " + employee.firstName + " " + employee.surname +
            "\nMobile: " + employee.mobile,
        width: 180,
        height: 180
    });

    //form.reset();
      setTimeout(() => {
    form.reset();
5000);
}, 

})
.catch((error) => {
    alert("Email Failed : " + error.text);
});
