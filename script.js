const form=document.getElementById("regForm");
form.addEventListener("submit",e=>{
 e.preventDefault();
 const fd=new FormData(form);
 const student={
   id:crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
   studentId:makeStudentId(),
   name:fd.get("name").trim(), phone:fd.get("phone").trim(), email:fd.get("email").trim(),
   age:fd.get("age"), gender:fd.get("gender"), city:fd.get("city").trim(), course:fd.get("course"),
   message:fd.get("message").trim(), status:"New", dateTime:fd.get("dateTime"), date:new Date().toISOString(),
   average:"", grade:"", examStatus:"Not Started"
 };
 const students=getStudents();
 students.push(student); saveStudents(students);
 document.getElementById("studentId").textContent=student.studentId;
 document.querySelector(".card").classList.add("hidden");
 document.querySelector(".hero").classList.add("hidden");
 document.getElementById("success").classList.remove("hidden");
});
document.getElementById("portalBtn").onclick=openPortal;
document.getElementById("newBtn").onclick=()=>location.reload();
