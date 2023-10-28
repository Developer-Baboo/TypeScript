export const getFormData = (html: HTMLFormElement) => {
    const inputs = html.querySelectorAll('input');
    const values: { [key: string]: string } = {};

    inputs.forEach((input: HTMLInputElement) => {
        if (input.type != 'submit') {
            values[input.name] = input.value;
        }
    });
    return values;
};
