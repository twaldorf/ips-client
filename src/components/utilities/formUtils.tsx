export const handleFieldUpdate = (e, setFormData, form_data) => {
  const elt = e.target;
  const key = elt.name;
  const value = elt.value;
  // handle textbox
  elt.style.height = elt.scrollHeight + 'px';
  setFormData(prev => ({
    ...form_data,
    [ key ]: value,
  }))
}

export const handleCheckboxUpdate = (target, data_object, field_name) => {
  const { name, checked } = target;
  if (checked == true) {
    const sizes = data_object[field_name] ? data_object[field_name] : []
    sizes.push(target.name)
    data_object[field_name] = sizes;
  } else if (checked == false) {
    // “Where there is no imagination, there is no horror.” — Arthur Conan Doyle
    // TODO: refactor this for readability
    if (data_object[field_name].length > 0) {
      const index = data_object[field_name].indexOf(name);
      data_object[field_name] = index > -1 ? data_object[field_name].toSpliced(index, 1) : data_object[field_name];
    }
  }
}