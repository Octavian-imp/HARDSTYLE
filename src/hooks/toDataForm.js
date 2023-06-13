export const toDataForm = (obj) => {
    let form = new FormData()
    for (const key in obj) {
        form.append(key, obj[key])
    }
    return form
}
