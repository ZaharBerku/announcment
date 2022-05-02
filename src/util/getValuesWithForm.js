
export const getValuesWithForm = (event) => {
    const values = [...event.currentTarget.elements].reduce((item, elemnet)=>{
        const { name, value } = elemnet;
        if(name){
            item[name] = value;
        }
        return item;
    });
    return values;
};