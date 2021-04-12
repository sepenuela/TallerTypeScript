import {Course} from './course';
import {dataCourses} from './dataCourses';
const coursesTbody: HTMLElement = document.getElementById('courses')!; // Nodo tbody que tiene el id="courses"

const btnfilterByName: HTMLElement = document.getElementById('button-filterByName')!;

const inputSearchBox: HTMLInputElement = <HTMLInputElement> (document.getElementById('search-box')!);

const totalCreditElm: HTMLElement = document.getElementById('total-credits')!;

btnfilterByName.onclick = () => applyFilterByName();

function renderCoursesInTable(courses: Course[]): void {
  courses.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.name}</td>
                           <td>${c.professor}</td>
                           <td>${c.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
function getTotalCredits(courses: Course[]): number {
    let totalCredits: number = 0;
    courses.forEach((course) => totalCredits = totalCredits + course.credits);
    return totalCredits;
  }
function applyFilterByName() { 
    let text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
  }
  
  function searchCourseByName(nameKey: string, courses: Course[]) {
    return nameKey === '' ? dataCourses : courses.filter( c => 
      c.name.match(nameKey));
  }

  function clearCoursesInTable(){
    while (coursesTbody.hasChildNodes()){
      if(coursesTbody.firstChild!= null)
      {
        coursesTbody.removeChild(coursesTbody.firstChild);
      }
    }
  }
  