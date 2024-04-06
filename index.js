document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 🚨 Get input values
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName');

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput.value || "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

   // 🚨 Generate certificate content dynamically
certificateContent.innerHTML = `
<h2 class="certificate-title">Certificate of Achievement</h2><br>
<p class="student-name">This is to certify that <br><strong>${studentName}</strong></p>
<p class="course-name">has almost completed <br><strong>${courseName} </strong><br> With a Dazzling Display of Dedication</p>
<img src="./logo.png" alt="Logo" class="certificate-logo" style="max-width: 10px; height: 10px;">
<p class="personal-message"><strong><em>${personalMessage}</em></strong></p>
`;

    // Display the modal
    modal.style.display = 'block';

    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    courseNameInput.value = '';
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});
