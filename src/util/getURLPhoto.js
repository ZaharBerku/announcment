export const getURLPhoto = (event, setPhoto) => {
    const { files } = event.target;
    const reader = new FileReader();
    let url = null;
    reader.onload = ev => {
        const { result } = ev.target;
        setPhoto(result);
    };
    reader.readAsDataURL(...files);
    console.log(url);
    return url;
};