import { requestSchema } from './schema.js';

export function initRequestForm() {
  const form = document.querySelector('.request-form');
  if (!form) return;

  const nameInput = form.querySelector('#name');
  const contactInput = form.querySelector('#contact');
  const projectInput = form.querySelector('#project');
  const honeypotInput = form.querySelector('[name="website"]');

  const fields = { name: nameInput, contact: contactInput, project: projectInput };
  const touchedFields = { name: false, contact: false, project: false };
  let hasSubmitted = false;

  const showError = (field, message) => {
    const container = field.closest('.input');
    if (!container) return;

    container.classList.add('invalid');
    field.setAttribute('aria-invalid', 'true');

    let error = container.querySelector('.input-error');
    if (!error) {
      error = document.createElement('div');
      error.className = 'input-error';
      container.appendChild(error);
    }
    error.textContent = message;
  };

  const clearError = (field) => {
    const container = field.closest('.input');
    if (!container) return;

    container.classList.remove('invalid');
    field.removeAttribute('aria-invalid');

    const error = container.querySelector('.input-error');
    if (error) error.remove();
  };

  const validate = () => {
    if (honeypotInput?.value.trim()) {
      console.warn('⛔️ Спам-запит заблоковано');
      return null;
    }

    const raw = {
      name: nameInput.value.trim(),
      contact: contactInput.value.trim(),
      project: projectInput.value.trim(),
    };

    const result = requestSchema.safeParse(raw);
    Object.values(fields).forEach(clearError);

    if (result.success) return result.data;

    (result.error?.issues ?? []).forEach((err) => {
      const key = err.path[0];
      const field = fields[key];
      if (!field) return;

      if (touchedFields[key] || hasSubmitted) {
        showError(field, err.message);
      }
    });

    return null;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    hasSubmitted = true;

    const payload = validate();
    if (!payload) return;

    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('contact', payload.contact);
    formData.append('project', payload.project);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Помилка при відправці');
        return res.json();
      })
      .then((data) => {
        console.log('✅ Успішно надіслано:', data);
        form.reset();
        hasSubmitted = false;
        Object.keys(touchedFields).forEach((key) => (touchedFields[key] = false));
      })
      .catch((err) => {
        console.error('❌ Помилка:', err);
      });
  });

  Object.entries(fields).forEach(([key, field]) => {
    field.addEventListener('blur', () => {
      touchedFields[key] = true;
      validate();
    });

    field.addEventListener('input', () => {
      if (touchedFields[key]) validate();
    });
  });
}
