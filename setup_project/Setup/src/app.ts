import { getFormData } from './forms';

const form = document.getElementById('myForm');

form?.addEventListener('submit', function(e: Event) {
    e.preventDefault();
    const formData = getFormData(form as HTMLFormElement);
    console.log(formData);
});
